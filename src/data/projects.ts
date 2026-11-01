import { Language, ProjectItem } from "@/types";

export const PROJECTS_SECTION: Record<
  Language,
  {
    title: string;
    subtitle: string;
    proofButtonText: string;
    viewDetailText: string;
    closeText: string;
    visitUrlText: string;
  }
> = {
  id: {
    title: "Portofolio Proyek",
    subtitle:
      "Dokumentasi proyek implementasi sistem, perencanaan distribusi, dan analisis operasional rantai pasok.",
    proofButtonText: "Bukti Proyek",
    viewDetailText: "Lihat Detail",
    closeText: "Tutup",
    visitUrlText: "Buka Link Proyek",
  },
  en: {
    title: "Project Portfolio",
    subtitle:
      "Documentation of applied systems, distribution planning, and supply chain operational analysis projects.",
    proofButtonText: "Project Proof",
    viewDetailText: "View Details",
    closeText: "Close",
    visitUrlText: "Open Project Link",
  },
};

export const PROJECTS_DATA: Record<Language, ProjectItem[]> = {
  id: [
    {
      id: "proj-1",
      // TODO: ganti judul proyek
      title: "Analisis Kinerja Ruas Jalan di Kabupaten Banyumas",
      // TODO: ganti deskripsi proyek
      description:
        "Analisis kinerja ruas jalan di Kabupaten Banyumas dengan menggunakan QGIS dan Excel untuk menentukan titik transfer dan penjadwalan armada yang efisien.",
      // TODO: ganti url gambar proyek jika sudah tersedia
      imageUrl: "/images/proyek1.png",
      // TODO: ganti link url bukti proyek
      projectUrl:
        "https://drive.google.com/drive/folders/1lP328hg1_gTeybXMDExj1iycUpEBqm0x",
    },
  ],
  en: [
    {
      id: "proj-1",
      title: "Road Section Performance Analysis in Banyumas Regency",
      description:
        "Road section performance analysis in Banyumas Regency utilizing QGIS and Microsoft Excel to evaluate capacity, determine transfer points, and optimize efficient transport fleet scheduling.",
      imageUrl: "/images/proyek1.png",
      projectUrl:
        "https://drive.google.com/drive/folders/1lP328hg1_gTeybXMDExj1iycUpEBqm0x",
    },
  ],
};
