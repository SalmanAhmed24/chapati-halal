"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Arrow } from "../Icons";
import { site } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";
const required = ["name", "phone", "email", "guests", "date", "service", "eventType"] as const;
type Field = (typeof required)[number];

const input =
  "w-full rounded-xl border border-cream/20 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-saffron focus:ring-2 focus:ring-saffron/40 aria-[invalid=true]:border-[#ff8a80]";
const lbl = "mb-1.5 block text-sm font-semibold text-cream";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const today = new Date().toISOString().slice(0, 10);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Partial<Record<Field, string>> = {};
    for (const f of required) if (!data[f]?.trim()) next[f] = "Required";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Enter a valid email";
    if (data.guests && Number(data.guests) < 1) next.guests = "At least 1 guest";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/catering", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const err = (f: Field) =>
    errors[f] ? (
      <p id={`q-${f}-err`} className="mt-1 text-xs font-semibold text-[#ffb4a9]">
        {errors[f]}
      </p>
    ) : null;
  const a = (f: Field) => ({ "aria-invalid": !!errors[f], "aria-describedby": errors[f] ? `q-${f}-err` : undefined });

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <m.div key="ok" role="status" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-2xl bg-cream p-8 text-forest">
          <p className="font-display text-3xl">Thank you! 🎉</p>
          <p className="mt-2 text-muted">
            We&apos;ve received your catering request and will contact you shortly with a quote. Need it sooner? Call us on{" "}
            <a href={site.phoneHref} className="font-bold text-forest underline">
              {site.phone}
            </a>
            .
          </p>
          <button type="button" onClick={() => setStatus("idle")} className="mt-5 font-bold text-saffron-ink underline underline-offset-4">
            Send another request
          </button>
        </m.div>
      ) : (
        <m.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-8 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="q-name" className={lbl}>Full name *</label>
            <input id="q-name" name="name" autoComplete="name" className={input} {...a("name")} />
            {err("name")}
          </div>
          <div>
            <label htmlFor="q-phone" className={lbl}>Phone number *</label>
            <input id="q-phone" name="phone" type="tel" autoComplete="tel" className={input} {...a("phone")} />
            {err("phone")}
          </div>
          <div>
            <label htmlFor="q-email" className={lbl}>Email address *</label>
            <input id="q-email" name="email" type="email" autoComplete="email" className={input} {...a("email")} />
            {err("email")}
          </div>
          <div>
            <label htmlFor="q-guests" className={lbl}>Number of guests *</label>
            <input id="q-guests" name="guests" type="number" min={1} inputMode="numeric" className={input} {...a("guests")} />
            {err("guests")}
          </div>
          <div>
            <label htmlFor="q-date" className={lbl}>Event date *</label>
            <input id="q-date" name="date" type="date" min={today} className={input} {...a("date")} />
            {err("date")}
          </div>
          <div>
            <label htmlFor="q-service" className={lbl}>Pickup or delivery? *</label>
            <select id="q-service" name="service" defaultValue="" className={input} {...a("service")}>
              <option value="" disabled>Select…</option>
              <option>Pickup</option>
              <option>Delivery</option>
            </select>
            {err("service")}
          </div>
          <div>
            <label htmlFor="q-eventType" className={lbl}>Event type *</label>
            <select id="q-eventType" name="eventType" defaultValue="" className={input} {...a("eventType")}>
              <option value="" disabled>Select…</option>
              <option>Family gathering</option>
              <option>Corporate event</option>
              <option>Party or celebration</option>
              <option>Wedding</option>
              <option>Private event</option>
              <option>Other</option>
            </select>
            {err("eventType")}
          </div>
          <div>
            <label htmlFor="q-location" className={lbl}>Event location</label>
            <input id="q-location" name="location" autoComplete="street-address" className={input} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="q-details" className={lbl}>Additional details</label>
            <textarea id="q-details" name="details" rows={4} placeholder="Dishes you'd like, dietary needs, budget…" className={`${input} resize-y placeholder:text-muted`} />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-saffron px-6 font-bold text-ink disabled:opacity-70"
            >
              <span aria-hidden className="absolute inset-0 translate-y-full bg-cream transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
              <span className="relative flex items-center gap-2">
                {status === "sending" ? "Sending…" : "Request My Catering Quote"} <Arrow size={16} />
              </span>
            </button>
            {status === "error" && (
              <p role="alert" className="mt-3 text-sm text-[#ffb4a9]">
                Something went wrong. Please try again or call {site.phone}.
              </p>
            )}
          </div>
        </m.form>
      )}
    </AnimatePresence>
  );
}
