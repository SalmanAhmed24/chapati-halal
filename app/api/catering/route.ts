import { NextResponse } from "next/server";
import { mailerConfigured, sendSiteEmail } from "@/lib/mailer";

export const runtime = "nodejs";

/** Catering quote requests. Connect to your email provider / CRM where marked. */
export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const s = (k: string, max = 300) => String(b[k] ?? "").trim().slice(0, max);
  const data = {
    name: s("name", 120),
    phone: s("phone", 40),
    email: s("email", 200),
    guests: Number(b.guests),
    date: s("date", 20),
    service: s("service", 20),
    eventType: s("eventType", 60),
    location: s("location"),
    details: s("details", 5000),
  };
  if (!data.name || !data.phone || !/^\S+@\S+\.\S+$/.test(data.email) || !(data.guests >= 1) || !data.date || !data.service || !data.eventType) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 422 });
  }

  if (!mailerConfigured()) {
    console.error("[catering] GMAIL_USER / GMAIL_APP_PASSWORD are not set; request not sent.");
    return NextResponse.json({ ok: false, error: "Email is not configured" }, { status: 503 });
  }
  try {
    await sendSiteEmail({
      subject: `Catering request: ${data.eventType}, ${data.guests} guests on ${data.date}`,
      replyTo: data.email,
      fields: { Name: data.name, Phone: data.phone, Email: data.email, Guests: data.guests, "Event date": data.date, Service: data.service, "Event type": data.eventType, Location: data.location, Details: data.details },
    });
  } catch (err) {
    console.error("[catering] send failed", err);
    return NextResponse.json({ ok: false, error: "Could not send" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
