import { NextResponse } from "next/server";

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

  // TODO: forward to chapatihalal273@gmail.com via your email provider (Resend, SendGrid…)
  console.info("[catering]", data);

  return NextResponse.json({ ok: true });
}
