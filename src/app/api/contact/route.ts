import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.FROM_EMAIL || "Excavator Foot <form@excavatorfoot.com>";
const TO_EMAIL = process.env.TO_EMAIL || "info@excavatorfoot.com";

const INQUIRY_SUBJECT: Record<string, string> = {
  licensing: "Technical Package Request (Licensing)",
  demo: "Demo Request",
  general: "General Inquiry",
  partnership: "Partnership Inquiry",
};

const NDA_LABEL: Record<string, string> = {
  "not-yet": "Has not yet downloaded the NDA",
  downloaded: "Downloaded the NDA — will sign and return",
  "signed-attached": "Signed the NDA — emailing executed copy separately",
  alternate: "Prefers to use their own NDA template",
};

interface ContactPayload {
  name?: string;
  title?: string;
  company?: string;
  email?: string;
  phone?: string;
  inquiry?: string;
  ndaStatus?: string;
  message?: string;
  honeypot?: string;
}

function sanitize(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — silently accept and drop bots
  if (payload.honeypot && payload.honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(payload.name, 200);
  const email = sanitize(payload.email, 200);
  const message = sanitize(payload.message, 4000);
  const title = sanitize(payload.title, 200);
  const company = sanitize(payload.company, 200);
  const phone = sanitize(payload.phone, 50);
  const inquiry = sanitize(payload.inquiry, 50) || "general";
  const ndaStatus = sanitize(payload.ndaStatus, 50);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const inquiryLabel = INQUIRY_SUBJECT[inquiry] || INQUIRY_SUBJECT.general;
  const subject = `Excavator Foot — ${inquiryLabel}`;
  const ndaLine = ndaStatus && inquiry === "licensing" ? `NDA Status: ${NDA_LABEL[ndaStatus] || ndaStatus}\n` : "";

  const textBody = `
New contact form submission

Name: ${name}
Title: ${title || "(not provided)"}
Company: ${company || "(not provided)"}
Email: ${email}
Phone: ${phone || "(not provided)"}

Inquiry Type: ${inquiryLabel}
${ndaLine}
Message:
${message}

---
Reply to this email to respond directly to the sender.
`.trim();

  const htmlBody = `
<!DOCTYPE html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:15px;line-height:1.55;color:#0f172a;max-width:640px;">
  <h2 style="margin:0 0 16px 0;">New contact form submission</h2>
  <table style="border-collapse:collapse;width:100%;margin-bottom:20px;">
    <tr><td style="padding:6px 12px 6px 0;color:#64748b;width:120px;">Name</td><td style="padding:6px 0;">${escapeHtml(name)}</td></tr>
    <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Title</td><td style="padding:6px 0;">${escapeHtml(title || "(not provided)")}</td></tr>
    <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Company</td><td style="padding:6px 0;">${escapeHtml(company || "(not provided)")}</td></tr>
    <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Phone</td><td style="padding:6px 0;">${escapeHtml(phone || "(not provided)")}</td></tr>
    <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Inquiry</td><td style="padding:6px 0;"><strong>${escapeHtml(inquiryLabel)}</strong></td></tr>
    ${ndaStatus && inquiry === "licensing" ? `<tr><td style="padding:6px 12px 6px 0;color:#64748b;">NDA</td><td style="padding:6px 0;">${escapeHtml(NDA_LABEL[ndaStatus] || ndaStatus)}</td></tr>` : ""}
  </table>
  <div style="background:#f1f5f9;border-left:3px solid #facc15;padding:16px;border-radius:6px;white-space:pre-line;">${escapeHtml(message)}</div>
  <p style="color:#64748b;font-size:13px;margin-top:24px;">Reply to this email to respond directly to ${escapeHtml(name)}.</p>
</body></html>
`.trim();

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Send notification to info@ (Kable's inbox)
    const notify = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });
    if (notify.error) {
      console.error("[contact] notify send failed:", notify.error);
      return NextResponse.json({ error: "Failed to send notification." }, { status: 502 });
    }

    // Send auto-acknowledgment to the submitter
    const ackText = `Hi ${name.split(" ")[0]},

Thank you for reaching out about the Excavator Foot pivot technology.

I've received your ${inquiryLabel.toLowerCase()} and will get back to you within 5 business days. If your inquiry is time-sensitive, reply to this email and flag it.

For reference, your submission details:
- Inquiry: ${inquiryLabel}
${company ? `- Company: ${company}\n` : ""}- Submitted: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}

— Kable Record
Inventor, Excavator Foot
U.S. Patent Application 18/594,097 — Notice of Allowance Issued
https://excavatorfoot.com
`.trim();

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: TO_EMAIL,
      subject: "Thanks — we received your Excavator Foot inquiry",
      text: ackText,
    });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
