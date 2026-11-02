import { OrganizationItem } from "@/types";

export const ORGANIZATIONS_SECTION = {
  title: "Pengalaman Organisasi",
  subtitle:
    "Aktivitas kepemimpinan, kepanitiaan, dan kerja tim dalam pengembangan lingkungan kampus dan kemahasiswaan.",
};

export const ORGANIZATIONS_DATA: OrganizationItem[] = [
  {
    id: "org-1",
    // TODO: ganti nama organisasi
    organization: "Senat Mahasiswa Fakultas Pariwisata Universitas Pancasila",
    // TODO: ganti divisi dan jabatan
    role: "Hubungan Masyarakat dan Desain",
    // TODO: ganti periode keaktifan
    period: "Agustus 2023 - Juli 2024",
    // TODO: ganti poin jobdesk organisasi
    points: [
      "Membantu menyampaikan informasi dan komunikasi kepada mahasiswa.",
      "Membantu membuat desain publikasi untuk kebutuhan kegiatan dan informasi organisasi.",
      "Mendukung penyebaran informasi melalui media komunikasi organisasi.",
      "Berkoordinasi dengan anggota organisasi dalam pelaksanaan kegiatan.",
      "Membantu kebutuhan dokumentasi dan publikasi kegiatan organisasi apabila diperlukan.",
    ],
  },
];
