import { ProjectItem } from "@/types";

export const PROJECTS_SECTION = {
  title: "Portofolio Proyek",
  subtitle:
    "Dokumentasi riset, analisis data pelayanan, dan implementasi proyek profesional.",
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    // TODO: ganti judul proyek bila diperlukan
    title:
      "Pengaruh Kualitas Pelayanan terhadap Kepuasan Jamaah Umrah di Bogor",
    // TODO: ganti peran / role proyek bila diperlukan
    role: "Peneliti",
    // TODO: ganti periode pelaksanaan proyek bila diperlukan
    period: "2025 - 2026",
    // TODO: ganti poin jobdesk / rincian proyek bila diperlukan
    points: [
      "Melaksanakan penelitian mengenai pengaruh lima dimensi kualitas pelayanan (SERVQUAL), yaitu tangibles, reliability, responsiveness, assurance, dan empathy terhadap kepuasan jamaah Umrah di wilayah Bogor.",
      "Bertanggung jawab penuh dalam penyusunan instrumen penelitian dan pengumpulan data primer melalui penyebaran kuesioner kepada jamaah.",
      "Melakukan pengolahan, uji validitas, reliabilitas, dan analisis regresi linier berganda menggunakan perangkat lunak SPSS.",
      "Menyusun laporan hasil evaluasi kepuasan jamaah serta rekomendasi strategis bagi penyelenggara perjalanan ibadah umrah.",
    ],
    technologies: ["Metodologi Penelitian", "Data Analysis"],
  },
];
