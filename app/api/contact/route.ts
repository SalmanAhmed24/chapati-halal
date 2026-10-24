import { NextResponse } from "next/server";
import { mailerConfigured, sendSiteEmail } from "@/lib/mailer";

export const runtime = "nodejs";

/** Contact form: validates the message and emails it to the restaurant inbox. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  // Honeypot: real visitors never fill this hidden field.
  if (String(body.company ?? "").trim()) return NextResponse.json({ ok: true });

  const s = (k: string, max: number) => String(body[k] ?? "").trim().slice(0, max);
  const name = s("name", 120);
  const email = s("email", 200);
  const phone = s("phone", 40);
  const subject = s("subject", 160);
  const message = s("message", 5000);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 422 });
  }
  if (!mailerConfigured()) {
    console.error("[contact] GMAIL_USER / GMAIL_APP_PASSWORD are not set; message not sent.");
    return NextResponse.json({ ok: false, error: "Email is not configured" }, { status: 503 });
  }
  try {
    await sendSiteEmail({
      subject: `New message from ${name}${subject ? ` — ${subject}` : ""}`,
      replyTo: email,
      fields: { Name: name, Email: email, Phone: phone, Subject: subject, Message: message },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ ok: false, error: "Could not send" }, { status: 502 });
  }
}
