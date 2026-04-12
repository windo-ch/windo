"use server";

import { Resend } from "resend";
import { brandedEmail, emailButton } from "@/lib/email";
import type { AnalyseSubmission } from "@/lib/analyse/types";

const resend = new Resend(process.env.RESEND_API_KEY);

const situationLabels: Record<string, string> = {
  "has-bad-site": "Hat Website, bringt nichts",
  "has-agency-site": "LocalSearch / Agentur",
  "no-site": "Keine Website",
  unsure: "Unsicher",
};

const priorityLabels: Record<string, string> = {
  "more-clients": "Mehr Neukunden",
  "professional-look": "Professionelles Auftreten",
  "google-visibility": "Google Sichtbarkeit",
  independence: "Unabhängigkeit",
  mobile: "Mobile",
};

const timelineLabels: Record<string, string> = {
  asap: "So schnell wie möglich",
  weeks: "In den nächsten Wochen",
  exploring: "Orientiert sich",
};

export async function submitAnalyse(
  submission: AnalyseSubmission
): Promise<{ ok: boolean; error?: string }> {
  try {
    if (
      !submission.contact?.name ||
      !submission.contact?.email ||
      !submission.contact?.phone ||
      !submission.situation ||
      !submission.priorities?.length
    ) {
      return { ok: false, error: "Fehlende Felder." };
    }

    // Reconstruct result URL so the client can return to their results
    const resultParam = btoa(encodeURIComponent(JSON.stringify(submission)));
    const resultUrl = `https://www.windo.ch/analyse/result?d=${resultParam}`;

    // --- Notification to Henry ---
    const notifyHtml = `
      <h2>Neue Bedarfsanalyse 🎯</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;">
        <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${submission.contact.name}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Telefon</td><td style="padding:6px 12px;"><a href="tel:${submission.contact.phone}">${submission.contact.phone}</a></td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">E-Mail</td><td style="padding:6px 12px;"><a href="mailto:${submission.contact.email}">${submission.contact.email}</a></td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Domain</td><td style="padding:6px 12px;">${submission.contact.domain || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Kontakt via</td><td style="padding:6px 12px;">${submission.contact.preference || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Situation</td><td style="padding:6px 12px;">${situationLabels[submission.situation ?? ""] || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Prioritäten</td><td style="padding:6px 12px;">${submission.priorities.map((p) => priorityLabels[p] || p).join(", ")}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Branche</td><td style="padding:6px 12px;">${submission.industry || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Zeitrahmen</td><td style="padding:6px 12px;">${timelineLabels[submission.timeline ?? ""] || "–"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Quelle</td><td style="padding:6px 12px;">${submission.source}${submission.leadSlug ? ` (${submission.leadSlug})` : ""}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Zeit</td><td style="padding:6px 12px;">${submission.submittedAt}</td></tr>
      </table>
    `;

    const notifyText = [
      "Neue Bedarfsanalyse",
      "",
      `Name: ${submission.contact.name}`,
      `Telefon: ${submission.contact.phone}`,
      `E-Mail: ${submission.contact.email}`,
      `Domain: ${submission.contact.domain || "–"}`,
      `Kontakt via: ${submission.contact.preference || "–"}`,
      `Situation: ${situationLabels[submission.situation ?? ""] || "–"}`,
      `Prioritäten: ${submission.priorities.map((p) => priorityLabels[p] || p).join(", ")}`,
      `Branche: ${submission.industry || "–"}`,
      `Zeitrahmen: ${timelineLabels[submission.timeline ?? ""] || "–"}`,
      `Quelle: ${submission.source}${submission.leadSlug ? ` (${submission.leadSlug})` : ""}`,
      `Zeit: ${submission.submittedAt}`,
    ].join("\n");

    // --- Client confirmation ---
    const firstName = submission.contact.name.split(" ")[0];

    const confirmHtml = brandedEmail({
      preheader: "Ihre Website-Analyse ist bereit.",
      body: `
        <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#1C1C1C;">Grüezi ${firstName},</p>
        <p style="margin:0 0 20px;font-size:14px;color:#444444;line-height:1.6;">
          Danke für Ihre Angaben. Ihre persönliche Website-Analyse ist bereit.
        </p>
        <p style="margin:0 0 8px;font-size:14px;font-weight:600;color:#1C1C1C;">Was als Nächstes passiert:</p>
        <table cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
          <tr><td style="padding:4px 0;font-size:14px;color:#444444;line-height:1.5;"><span style="color:#C94418;font-weight:700;margin-right:8px;">✓</span>Ihre Ergebnisse sind sofort einsehbar</td></tr>
          <tr><td style="padding:4px 0;font-size:14px;color:#444444;line-height:1.5;"><span style="color:#C94418;font-weight:700;margin-right:8px;">✓</span>Ich schaue mir Ihren Betrieb an und melde mich persönlich</td></tr>
          <tr><td style="padding:4px 0;font-size:14px;color:#444444;line-height:1.5;"><span style="color:#C94418;font-weight:700;margin-right:8px;">✓</span>Kein Verkaufsgespräch — ehrliche Einschätzung</td></tr>
        </table>
        ${emailButton("Ergebnisse ansehen", resultUrl)}
      `,
    });

    const confirmText = [
      `Grüezi ${firstName},`,
      "",
      "Danke für Ihre Angaben. Ihre persönliche Website-Analyse ist bereit.",
      "",
      "Was als Nächstes passiert:",
      "✓ Ihre Ergebnisse sind sofort einsehbar",
      "✓ Ich schaue mir Ihren Betrieb an und melde mich persönlich",
      "✓ Kein Verkaufsgespräch — ehrliche Einschätzung",
      "",
      `Ergebnisse ansehen: ${resultUrl}`,
      "",
      "Henry Barrows · windo.ch · 079 175 20 20",
    ].join("\n");

    await Promise.all([
      resend.emails.send({
        from: "windo.ch <henry@windo.ch>",
        replyTo: submission.contact.email,
        to: "henry@windo.ch",
        subject: `🎯 Bedarfsanalyse: ${submission.contact.name} (${submission.industry || "KMU"})`,
        html: notifyHtml,
        text: notifyText,
      }),
      resend.emails.send({
        from: "Henry von windo.ch <henry@windo.ch>",
        replyTo: "henry@windo.ch",
        to: submission.contact.email,
        subject: "Ihre Analyse ist bereit — windo.ch",
        html: confirmHtml,
        text: confirmText,
      }),
    ]);

    return { ok: true };
  } catch (error) {
    console.error("Analyse submission failed:", error);
    return { ok: false, error: "Interner Fehler." };
  }
}

export async function submitFollowUp(data: {
  name: string;
  email: string;
  wantsEmail: boolean;
  wantsCallback: boolean;
  callbackDate?: string;
  callbackTime?: string;
}): Promise<{ ok: boolean }> {
  try {
    const notifyLines: string[] = ["Follow-up Anfrage"];
    notifyLines.push(`Name: ${data.name}`);
    notifyLines.push(`E-Mail: ${data.email}`);
    if (data.wantsEmail) notifyLines.push("→ Möchte Ergebnisse per E-Mail");
    if (data.wantsCallback) {
      notifyLines.push(`→ Möchte Rückruf: ${data.callbackDate || "–"} um ${data.callbackTime || "–"}`);
    }

    // --- Client confirmation ---
    const firstName = data.name.split(" ")[0];
    const confirmLines: string[] = [];

    if (data.wantsCallback && data.callbackDate) {
      confirmLines.push(
        `Ich rufe Sie am <strong>${data.callbackDate}</strong>${data.callbackTime ? ` um <strong>${data.callbackTime}</strong>` : ""} an.`
      );
    }
    if (data.wantsEmail) {
      confirmLines.push("Ich schicke Ihnen Ihre Ergebnisse und eine persönliche Einschätzung per E-Mail.");
    }

    const confirmHtml = brandedEmail({
      preheader: "Ihre Anfrage ist eingegangen.",
      body: `
        <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#1C1C1C;">Grüezi ${firstName},</p>
        <p style="margin:0 0 20px;font-size:14px;color:#444444;line-height:1.6;">
          Ich habe Ihre Anfrage erhalten.
        </p>
        ${confirmLines.map(
          (line) =>
            `<p style="margin:0 0 10px;font-size:14px;color:#1C1C1C;line-height:1.6;padding:12px 16px;background:#FFF5EF;border-left:3px solid #C94418;border-radius:0 6px 6px 0;">${line}</p>`
        ).join("")}
        <p style="margin:20px 0 0;font-size:13px;color:#888888;line-height:1.6;">
          Bei Fragen vorher: <a href="tel:+41791752020" style="color:#C94418;text-decoration:none;">079 175 20 20</a>
          oder <a href="https://wa.me/41791752020" style="color:#C94418;text-decoration:none;">WhatsApp</a>.
        </p>
      `,
    });

    const confirmTextLines = [
      `Grüezi ${firstName},`,
      "",
      "Ich habe Ihre Anfrage erhalten.",
      "",
    ];
    if (data.wantsCallback && data.callbackDate) {
      confirmTextLines.push(
        `Ich rufe Sie am ${data.callbackDate}${data.callbackTime ? ` um ${data.callbackTime}` : ""} an.`
      );
    }
    if (data.wantsEmail) {
      confirmTextLines.push("Ich schicke Ihnen Ihre Ergebnisse und eine persönliche Einschätzung per E-Mail.");
    }
    confirmTextLines.push("", "Bei Fragen: 079 175 20 20", "", "Henry Barrows · windo.ch");

    await Promise.all([
      resend.emails.send({
        from: "windo.ch <henry@windo.ch>",
        replyTo: data.email,
        to: "henry@windo.ch",
        subject: `📅 Follow-up: ${data.name}${data.wantsCallback ? ` — Rückruf ${data.callbackDate}` : ""}`,
        text: notifyLines.join("\n"),
        html: `<p>${notifyLines.join("<br/>")}</p>`,
      }),
      resend.emails.send({
        from: "Henry von windo.ch <henry@windo.ch>",
        replyTo: "henry@windo.ch",
        to: data.email,
        subject: "Erhalten — windo.ch meldet sich",
        html: confirmHtml,
        text: confirmTextLines.join("\n"),
      }),
    ]);

    return { ok: true };
  } catch (error) {
    console.error("Follow-up submission failed:", error);
    return { ok: false };
  }
}
