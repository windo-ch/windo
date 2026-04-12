"use server";

import { Resend } from "resend";
import { brandedEmail, emailButton } from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface NeustartFormData {
  firmenname: string;
  websiteUrl: string;
  vorname: string;
  nachname: string;
  telefon: string;
  email: string;
  feedback: string;
}

export async function submitNeustart(
  data: NeustartFormData
): Promise<{ ok: boolean }> {
  try {
    const timestamp = new Date().toLocaleString("de-CH", {
      timeZone: "Europe/Zurich",
    });

    // --- Notification to Henry ---
    const notifyHtml = `
      <h2>🚀 Neue Neustart-Anfrage</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Firma</td><td style="padding:6px 12px;">${data.firmenname}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Website</td><td style="padding:6px 12px;">${data.websiteUrl || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Name</td><td style="padding:6px 12px;">${data.vorname} ${data.nachname}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Telefon</td><td style="padding:6px 12px;"><a href="tel:${data.telefon}">${data.telefon}</a></td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">E-Mail</td><td style="padding:6px 12px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Feedback</td><td style="padding:6px 12px;">${data.feedback || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Eingegangen</td><td style="padding:6px 12px;">${timestamp}</td></tr>
      </table>
    `;

    const notifyText = [
      "🚀 Neue Neustart-Anfrage",
      "",
      `Firma:       ${data.firmenname}`,
      `Website:     ${data.websiteUrl || "–"}`,
      `Name:        ${data.vorname} ${data.nachname}`,
      `Telefon:     ${data.telefon}`,
      `E-Mail:      ${data.email}`,
      `Feedback:    ${data.feedback || "–"}`,
      `Eingegangen: ${timestamp}`,
    ].join("\n");

    // --- Client confirmation ---
    const confirmHtml = brandedEmail({
      preheader: `Ihre Neustart-Anfrage für ${data.firmenname} ist eingegangen.`,
      body: `
        <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#1C1C1C;">Grüezi ${data.vorname},</p>
        <p style="margin:0 0 20px;font-size:14px;color:#444444;line-height:1.6;">
          Ihre Anfrage für <strong>${data.firmenname}</strong> ist bei mir eingegangen.
        </p>
        <p style="margin:0 0 8px;font-size:14px;font-weight:600;color:#1C1C1C;">Was als Nächstes passiert:</p>
        <table cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
          <tr><td style="padding:4px 0;font-size:14px;color:#444444;line-height:1.5;"><span style="color:#C94418;font-weight:700;margin-right:8px;">✓</span>Ich schaue mir Ihre aktuelle Website an</td></tr>
          <tr><td style="padding:4px 0;font-size:14px;color:#444444;line-height:1.5;"><span style="color:#C94418;font-weight:700;margin-right:8px;">✓</span>Ich baue einen ersten Entwurf — in der Regel innerhalb von 48 Stunden</td></tr>
          <tr><td style="padding:4px 0;font-size:14px;color:#444444;line-height:1.5;"><span style="color:#C94418;font-weight:700;margin-right:8px;">✓</span>Ich schicke Ihnen den Entwurf per E-Mail oder rufe Sie an</td></tr>
        </table>
        <p style="margin:0 0 20px;font-size:13px;color:#888888;line-height:1.6;">
          Kein Druck, keine Verpflichtung — Sie sehen den Entwurf und entscheiden selbst.
        </p>
        ${emailButton("Zur Neustart-Seite", "https://www.windo.ch/neustart")}
      `,
    });

    const confirmText = [
      `Grüezi ${data.vorname},`,
      "",
      `Ihre Anfrage für ${data.firmenname} ist bei mir eingegangen.`,
      "",
      "Was als Nächstes passiert:",
      "✓ Ich schaue mir Ihre aktuelle Website an",
      "✓ Ich baue einen ersten Entwurf — in der Regel innerhalb von 48 Stunden",
      "✓ Ich schicke Ihnen den Entwurf per E-Mail oder rufe Sie an",
      "",
      "Kein Druck, keine Verpflichtung — Sie sehen den Entwurf und entscheiden selbst.",
      "",
      "Henry Barrows · windo.ch · 079 175 20 20",
    ].join("\n");

    await Promise.all([
      resend.emails.send({
        from: "windo.ch <henry@windo.ch>",
        to: "henry@windo.ch",
        subject: `🚀 Neustart-Anfrage: ${data.firmenname}`,
        html: notifyHtml,
        text: notifyText,
      }),
      resend.emails.send({
        from: "Henry von windo.ch <henry@windo.ch>",
        replyTo: "henry@windo.ch",
        to: data.email,
        subject: `Ihre Neustart-Anfrage ist eingegangen — windo.ch`,
        html: confirmHtml,
        text: confirmText,
      }),
    ]);

    return { ok: true };
  } catch (error) {
    console.error("Neustart submission failed:", error);
    return { ok: false };
  }
}
