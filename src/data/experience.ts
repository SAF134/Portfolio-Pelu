import { ExperienceItem } from "@/types";

export const EXPERIENCE_SECTION = {
  title: "Pengalaman Kerja",
  subtitle:
    "Riwayat pengalaman kerja dan magang di bidang operasional logistik dan manajemen rantai pasok.",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    // TODO: ganti nama perusahaan / instansi magang
    company: "PT Marco Tour & Travel",
    // TODO: ganti lokasi instansi
    location: "Jakarta Timur, DKI Jakarta",
    // TODO: ganti posisi/divisi magang
    role: "Administrasi",
    // TODO: ganti periode kerja/magang
    period: "Agustus - Desember 2025",
    // TODO: ganti poin jobdesk pengalaman
    points: [
      "Membantu menginput, memeriksa, dan memperbarui data administrasi perusahaan.",
      "Membantu menyiapkan, memeriksa, dan mengarsipkan dokumen perjalanan.",
      "Mengelola dan menyusun dokumen agar tersimpan secara rapi dan mudah ditemukan.",
      "Mendukung penyusunan laporan serta kebutuhan administrasi operasional perusahaan.",
      "Berkoordinasi dengan tim dalam mendukung kelancaran kegiatan administrasi perusahaan.",
    ],
    technologies: ["Microsoft Office", "Microsoft Excell", "Spreadsheet"],
  },
];
