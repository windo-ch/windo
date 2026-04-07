import fs from "fs";
import path from "path";
import type { LeadContent } from "./types";

const LEADS_DIR = path.join(process.cwd(), "content/leads");

export function getAllLeads(): LeadContent[] {
  return fs
    .readdirSync(LEADS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(LEADS_DIR, f), "utf-8")));
}

export function getLeadBySlug(slug: string): LeadContent | null {
  const file = path.join(LEADS_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}
