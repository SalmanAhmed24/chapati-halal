"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Arrow } from "../Icons";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "peer w-full rounded-2xl border border-forest/15 bg-cream-2/40 px-4 pb-2.5 pt-6 text-ink outline-none transition-colors placeholder-transparent focus:border-forest focus:bg-cream aria-[invalid=true]:border-[#b3261e]";
const label =
  "pointer-events-none absolute left-4 top-2 text-xs font-bold text-forest/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) next.email = "Please enter a valid email.";
    if ((data.message ?? "").trim().length < 10) next.message = "A few more words, please (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative mt-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <m.div
            key="ok"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl bg-forest p-8 text-cream"
            role="status"
          >
            <p className="font-display text-3xl">Shukriya! 🙏</p>
            <p className="mt-2 text-mint">Your message is on its way. We usually reply within 24 hours.</p>
            <button type="button" onClick={() => setStatus("idle")} className="mt-6 font-bold text-saffron underline underline-offset-4">
              Send another message
            </button>
          </m.div>
        ) : (
          <m.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} className="grid gap-4 sm:grid-cols-2">
            {(
              [
                { name: "name", label: "Your name *", type: "text", auto: "name" },
                { name: "email", label: "Your email *", type: "email", auto: "email" },
                { name: "phone", label: "Phone number", type: "tel", auto: "tel" },
                { name: "subject", label: "Subject", type: "text", auto: "off" },
              ] as const
            ).map((f) => (
              <div key={f.name} className="relative">
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.auto}
                  placeholder={f.label}
                  className={field}
                  aria-invalid={!!errors[f.name as keyof Errors]}
                  aria-describedby={errors[f.name as keyof Errors] ? `${f.name}-err` : undefined}
                />
                <label htmlFor={f.name} className={label}>
                  {f.label}
                </label>
                {errors[f.name as keyof Errors] && (
                  <p id={`${f.name}-err`} className="mt-1.5 text-sm text-[#b3261e]">
                    {errors[f.name as keyof Errors]}
                  </p>
                )}
              </div>
            ))}
            <div className="relative sm:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message *"
                className={`${field} resize-y`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
              />
              <label htmlFor="message" className={label}>
                Your message *
              </label>
              {errors.message && (
                <p id="message-err" className="mt-1.5 text-sm text-[#b3261e]">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative flex min-h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-forest px-6 font-bold text-cream disabled:opacity-70"
              >
                <span className="absolute inset-0 translate-y-full bg-saffron transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" aria-hidden />
                <span className="relative flex items-center gap-2 transition-colors group-hover:text-ink">
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <Arrow size={16} />
                </span>
              </button>
              {status === "error" && (
                <p className="mt-3 text-sm text-[#b3261e]" role="alert">
                  Something went wrong. Please try again, or call us directly.
                </p>
              )}
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
