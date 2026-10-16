import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Validates input and returns 200.
 * Wire this to your email provider (Resend, SendGrid, SES…) or a CRM where marked below.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 422 });
  }

  // TODO: send the message, e.g. await resend.emails.send({ to: "info@chapatihalal.com", ... })
  console.info("[contact]", { name, email, subject: body.subject, phone: body.phone });

  return NextResponse.json({ ok: true });
}
