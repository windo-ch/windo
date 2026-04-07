import type { LeadContent } from "@/lib/types";

export default function LeadFooter({ lead }: { lead: LeadContent }) {
  return (
    <footer className="bg-bg-dark text-white/30 text-center py-8 px-4 text-xs space-y-1">
      <p>Diese Seite wurde persönlich für {lead.name} erstellt.</p>
      <p>Henry Barrows · henry@windo.ch · 079 175 20 20</p>
      <p>Alle Preise in CHF, exkl. MWSt 8.1%. Frühlings-Aktion gültig bis 30. April 2026.</p>
    </footer>
  );
}
