"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface NeustartFormData {
  firmenname: string;
  websiteUrl: string;
  vorname: string;
  nachname: string;
  telefon: string;
  feedback: string;
}

export async function submitNeustart(
  data: NeustartFormData
): Promise<{ ok: boolean }> {
  try {
    const timestamp = new Date().toLocaleString("de-CH", {
      timeZone: "Europe/Zurich",
    });

    const html = `
      <h2>🚀 Neue Neustart-Anfrage</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Firma</td><td style="padding:6px 12px;">${data.firmenname}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Website</td><td style="padding:6px 12px;">${data.websiteUrl || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Name</td><td style="padding:6px 12px;">${data.vorname} ${data.nachname}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Telefon</td><td style="padding:6px 12px;"><a href="tel:${data.telefon}">${data.telefon}</a></td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Feedback</td><td style="padding:6px 12px;">${data.feedback || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;color:#555;">Eingegangen</td><td style="padding:6px 12px;">${timestamp}</td></tr>
      </table>
    `;

    const text = [
      "🚀 Neue Neustart-Anfrage",
      "",
      `Firma:       ${data.firmenname}`,
      `Website:     ${data.websiteUrl || "–"}`,
      `Name:        ${data.vorname} ${data.nachname}`,
      `Telefon:     ${data.telefon}`,
      `Feedback:    ${data.feedback || "–"}`,
      `Eingegangen: ${timestamp}`,
    ].join("\n");

    await resend.emails.send({
      from: "windo.ch <henry@windo.ch>",
      to: "henry@windo.ch",
      subject: `🚀 Neustart-Anfrage: ${data.firmenname}`,
      html,
      text,
    });

    return { ok: true };
  } catch (error) {
    console.error("Neustart submission failed:", error);
    return { ok: false };
  }
}
