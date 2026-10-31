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
  {
    id: "edu-2",
    // TODO: ganti nama institusi bila diperlukan
    institution: "SMK Telkom Bandung",
    // TODO: ganti lokasi kampus
    location: "Bandung, Jawa Barat",
    // TODO: ganti program studi aktual
    major: "Teknik Jaringan Akses Telekomunikasi",
    // TODO: ganti jenjang pendidikan
    degree: "Sekolah Menengah Kejuruan",
    // TODO: ganti periode studi
    period: "2019 — 2022",
  },
  {
    id: "edu-3",
    // TODO: ganti nama institusi bila diperlukan
    institution: "SMPIT Insantama",
    // TODO: ganti lokasi kampus
    location: "Bogor, Jawa Barat",
    // TODO: ganti program studi aktual
    major: "Islam Terpadu",
    // TODO: ganti jenjang pendidikan
    degree: "Sekolah Menengah Pertama",
    // TODO: ganti periode studi
    period: "2016 — 2019",
  },
  {
    id: "edu-4",
    // TODO: ganti nama institusi bila diperlukan
    institution: "SDIT Insantama",
    // TODO: ganti lokasi kampus
    location: "Bogor, Jawa Barat",
    // TODO: ganti program studi aktual
    major: "Islam Terpadu",
    // TODO: ganti jenjang pendidikan
    degree: "Sekolah Dasar",
    // TODO: ganti periode studi
    period: "2010 — 2016",
  }
];
