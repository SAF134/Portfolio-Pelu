import { EducationItem } from "@/types";

export const EDUCATION_SECTION = {
  title: "Riwayat Pendidikan",
  subtitle:
    "Latar belakang pendidikan formal dan bidang keilmuan yang telah ditempuh.",
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    // TODO: ganti nama institusi bila diperlukan
    institution: "Universitas Logistik dan Bisnis Internasional (ULBI)",
    // TODO: ganti lokasi kampus
    location: "Bandung, Jawa Barat",
    // TODO: ganti program studi aktual
    major: "Manajemen Transportasi",
    // TODO: ganti jenjang pendidikan
    degree: "S1",
    // TODO: ganti periode studi
    period: "2022 — 2026",
  },
];
