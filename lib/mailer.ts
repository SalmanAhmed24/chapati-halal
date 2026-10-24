import "server-only";
import nodemailer from "nodemailer";
import { site } from "./data";

/**
 * Sends site emails through Gmail SMTP.
 * Required environment variables (set them in Vercel → Project → Settings → Environment Variables):
 *   GMAIL_USER          the Gmail address that sends the mail (e.g. chapatihalal273@gmail.com)
 *   GMAIL_APP_PASSWORD  a 16-character Google "App password" (not the normal Gmail password)
 * Optional:
 *   CONTACT_TO          where messages are delivered (defaults to the email in lib/data.ts)
 */
export function mailerConfigured() {
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendSiteEmail({ subject, replyTo, fields }: { subject: string; replyTo?: string; fields: Record<string, string | number | undefined> }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });
  const rows = Object.entries(fields).filter(([, v]) => v !== undefined && String(v).trim() !== "");
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top;color:#0e3b2c">${esc(k)}</td><td style="white-space:pre-wrap">${esc(String(v))}</td></tr>`)
    .join("")}</table>`;
  await transporter.sendMail({
    from: `"Chapati Halal website" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_TO || site.email,
    replyTo,
    subject,
    text,
    html,
  });
}
