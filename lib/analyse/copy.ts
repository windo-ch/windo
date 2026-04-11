export const STEP_COPY = {
  // Step 1 — Situation
  step1_title: "Wie ist Ihre aktuelle Situation?",
  step1_subtitle: "Damit ich Ihnen gezielt helfen kann.",
  situation_has_bad_site: "Ich habe eine Website, aber sie bringt mir nichts",
  situation_has_agency_site: "Meine Website läuft über LocalSearch oder eine Agentur",
  situation_no_site: "Ich habe noch keine Website",
  situation_unsure: "Ich bin nicht sicher, ob meine Website gut genug ist",

  // Step 2 — Priorities
  step2_title: "Was ist Ihnen am wichtigsten?",
  step2_subtitle: "Wählen Sie 1–2 Punkte.",
  priority_more_clients: "Mehr Anfragen von Neukunden",
  priority_professional: "Professionelleres Auftreten",
  priority_google: "Besser auf Google gefunden werden",
  priority_independence: "Unabhängig von teuren Anbietern",
  priority_mobile: "Perfekt auf dem Handy",

  // Step 3 — Industry
  step3_title: "In welcher Branche sind Sie tätig?",
  step3_subtitle: "Ich kenne die Anforderungen Ihrer Branche.",
  industry_zahnarzt: "Zahnarzt / Zahnmedizin",
  industry_coiffeur: "Coiffeur / Barbershop",
  industry_restaurant: "Restaurant / Gastronomie",
  industry_handwerker: "Handwerker / Gewerbe",
  industry_arztpraxis: "Arztpraxis / Therapeut",
  industry_anwalt: "Anwalt / Kanzlei",
  industry_immobilien: "Immobilien / Makler",
  industry_fitness: "Fitness / Personal Training",
  industry_andere: "Andere Branche",

  // Step 4 — Timeline
  step4_title: "Wie schnell brauchen Sie eine Lösung?",
  step4_subtitle: "Kein Druck — ich passe mich Ihrem Tempo an.",
  timeline_asap: "So schnell wie möglich",
  timeline_weeks: "In den nächsten Wochen",
  timeline_exploring: "Ich orientiere mich erst mal",

  // Step 5 — Contact
  step5_title: "Wohin darf ich Ihre persönliche Analyse schicken?",
  step5_subtitle: "Kostenlos. Kein Verkaufsgespräch. Einfach Klarheit.",
  label_name: "Ihr Name",
  label_phone: "Telefon / Mobile",
  label_email: "E-Mail",
  label_domain: "Ihre aktuelle Website (falls vorhanden)",
  placeholder_name: "z.B. Thomas Müller",
  placeholder_phone: "079 ...",
  placeholder_email: "info@ihrefirma.ch",
  placeholder_domain: "ihrefirma.ch",
  label_preference: "Wie darf ich Sie am liebsten kontaktieren?",
  preference_phone: "Anruf",
  preference_whatsapp: "WhatsApp",
  preference_email: "E-Mail",
  submit_button: "Analyse erhalten →",
  consent_text: "Ich bin einverstanden, dass meine Angaben zur Beantwortung meiner Anfrage verwendet werden.",
  privacy_note: "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.",

  // General
  back_button: "Zurück",
  step_of: "von",
} as const;

export const RESULT_COPY = {
  // Headlines by situation
  headline_default: "Ihre Website verdient ein Upgrade.",
  headline_agency: "Schluss mit teuren Agentur-Verträgen.",
  headline_new: "Ihr Online-Auftritt startet hier.",
  headline_unsure: "Klarheit in 15 Minuten.",

  // Subheadlines
  subheadline_with_industry:
    "Für {industry} in der Schweiz: Eine Website, die professionell wirkt und neue Kunden gewinnt.",
  subheadline_generic:
    "Eine Website, die professionell wirkt und Ihnen neue Kunden bringt.",

  // Bullets per priority
  bullet_more_clients:
    "Klare Handlungsaufforderungen (Anrufen, Termin buchen, WhatsApp) — damit Besucher zu Kunden werden.",
  bullet_professional:
    "Modernes, schnelles Design, das Vertrauen aufbaut — auf jedem Gerät.",
  bullet_google:
    "Lokale SEO + Strukturierte Daten, damit Google Sie in Ihrer Region an Neukunden zeigt.",
  bullet_independence:
    "Sie sind Eigentümer Ihrer Website. Kein Knebelvertrag, keine versteckten Kosten.",
  bullet_mobile:
    "Mobile-first Design: 78% der Schweizer suchen lokale Dienstleister auf dem Handy.",

  // Bullets per situation
  bullet_agency_switch:
    "Einfache Migration — ich übernehme alles und Sie zahlen ab Tag 1 weniger.",
  bullet_new_site:
    "In 10 Arbeitstagen online — schneller als jede Agentur.",
  bullet_relaunch:
    "Ihr bestehendes Material wird übernommen und professionell aufbereitet.",

  // Urgency
  urgency_asap:
    "Gut — ich kann in der Regel innerhalb einer Woche starten. Lassen Sie uns kurz telefonieren.",
  urgency_weeks:
    "Perfekt. Ich reserviere Ihnen einen Slot und wir besprechen alles in Ruhe.",
  urgency_exploring:
    "Kein Druck. Ich schicke Ihnen eine kurze Einschätzung — Sie entscheiden, wann es weitergeht.",

  // CTA (unused — kept for reference)
  cta_ready: "Kostenloses Gespräch — 15 Minuten",
  cta_exploring: "Unverbindlich kennenlernen",

  // Industry labels
  industryLabels: {
    zahnarzt: "Zahnarztpraxis",
    coiffeur: "Coiffeursalon",
    restaurant: "Gastronomiebetrieb",
    handwerker: "Handwerksbetrieb",
    arztpraxis: "Arztpraxis",
    anwalt: "Anwaltskanzlei",
    immobilien: "Immobilienunternehmen",
    fitness: "Fitnessstudio",
    andere: "KMU",
  } as Record<string, string>,

  // Result page
  result_page_title: "Ihre persönliche Einschätzung",
  result_recommendation_label: "Mein Vorschlag für Sie:",
  result_closing_heading: "Ich melde mich.",
  result_closing_note: "Ich habe Ihre Angaben erhalten und schaue sie mir an.",
  result_closing_direct: "Oder rufen Sie mich direkt an:",
} as const;
