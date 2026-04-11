"use server";

import { Resend } from "resend";
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

    const html = `
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

    const text = [
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

    await resend.emails.send({
      from: "windo.ch <henry@windo.ch>",
      replyTo: submission.contact.email,
      to: "henry@windo.ch",
      subject: `🎯 Bedarfsanalyse: ${submission.contact.name} (${submission.industry || "KMU"})`,
      html,
      text,
    });

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
    const lines: string[] = ["Follow-up Anfrage"];
    lines.push(`Name: ${data.name}`);
    lines.push(`E-Mail: ${data.email}`);
    if (data.wantsEmail) lines.push("→ Möchte Ergebnisse per E-Mail");
    if (data.wantsCallback) {
      lines.push(`→ Möchte Rückruf: ${data.callbackDate || "–"} um ${data.callbackTime || "–"}`);
    }

    await resend.emails.send({
      from: "windo.ch <henry@windo.ch>",
      replyTo: data.email,
      to: "henry@windo.ch",
      subject: `📅 Follow-up: ${data.name}${data.wantsCallback ? ` — Rückruf ${data.callbackDate}` : ""}`,
      text: lines.join("\n"),
      html: `<p>${lines.join("<br/>")}</p>`,
    });

    return { ok: true };
  } catch (error) {
    console.error("Follow-up submission failed:", error);
    return { ok: false };
  }
}
