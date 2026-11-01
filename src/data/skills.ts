import { Language, SkillItem } from "@/types";

export const SKILLS_SECTION: Record<
  Language,
  { title: string; subtitle: string }
> = {
  id: {
    title: "Daftar Keahlian",
    subtitle:
      "Kompetensi operasional logistik, penguasaan perangkat lunak, dan kemampuan interpersonal.",
  },
  en: {
    title: "Areas of Expertise",
    subtitle:
      "Logistics operational competencies, technical software proficiency, and interpersonal skills.",
  },
};

export const SKILLS_DATA: Record<Language, SkillItem[]> = {
  id: [
    { id: "skill-1", name: "Teamwork" },
    { id: "skill-2", name: "Komunikasi" },
    { id: "skill-3", name: "Time Management" },
    { id: "skill-4", name: "Problem Solving" },
    { id: "skill-5", name: "Supply Chain Management" },
    { id: "skill-6", name: "Distribution" },
    { id: "skill-7", name: "Inbound & Outbound Logistics" },
    { id: "skill-8", name: "Shipping and Receiving" },
    { id: "skill-9", name: "Transportation" },
    { id: "skill-10", name: "Google Workspace" },
    { id: "skill-11", name: "Microsoft Excel" },
    { id: "skill-12", name: "Microsoft Office" },
    { id: "skill-13", name: "MapInfo" },
    { id: "skill-14", name: "QGIS" },
    { id: "skill-15", name: "AutoCAD" },
    { id: "skill-16", name: "Prototype" },
    { id: "skill-17", name: "Photography" },
    { id: "skill-18", name: "Kesadaran K3 & ISO" },
  ],
  en: [
    { id: "skill-1", name: "Teamwork" },
    { id: "skill-2", name: "Communication" },
    { id: "skill-3", name: "Time Management" },
    { id: "skill-4", name: "Problem Solving" },
    { id: "skill-5", name: "Supply Chain Management" },
    { id: "skill-6", name: "Distribution" },
    { id: "skill-7", name: "Inbound & Outbound Logistics" },
    { id: "skill-8", name: "Shipping & Receiving" },
    { id: "skill-9", name: "Transportation" },
    { id: "skill-10", name: "Google Workspace" },
    { id: "skill-11", name: "Microsoft Excel" },
    { id: "skill-12", name: "Microsoft Office" },
    { id: "skill-13", name: "MapInfo" },
    { id: "skill-14", name: "QGIS" },
    { id: "skill-15", name: "AutoCAD" },
    { id: "skill-16", name: "Prototyping" },
    { id: "skill-17", name: "Photography" },
    { id: "skill-18", name: "OHS & ISO Awareness" },
  ],
};
