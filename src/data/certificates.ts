import { CertificateItem } from "@/types";

export const CERTIFICATES_SECTION = {
  title: "Sertifikat & Penghargaan",
  subtitle:
    "Bukti pencapaian kompetensi, lisensi keahlian profesional, dan sertifikasi kepanitiaan.",
  viewDetailText: "Lihat Detail",
  closeText: "Tutup",
  issuedByText: "Diterbitkan oleh:",
  openPdfText: "Buka Dokumen Asli (PDF)",
};

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title:
      "Sertifikat Anggota Bidang V Senat Mahasiswa Fakultas Pariwisata KMUP Periode 2023/2024",
    issuer: "Senat Mahasiswa Fakultas Pariwisata Universitas Pancasila",
    date: "2023 - 2024",
    description:
      "Terlibat aktif dalam kegiatan organisasi di tingkat Fakultas Pariwisata Universitas Pancasila. Bertanggung jawab dalam pelaksanaan program kerja dan memberikan kontribusi aktif dalam kegiatan yang diselenggarakan oleh Senat Mahasiswa Fakultas Pariwisata.",
    thumbnailUrl: "/images/Sertifikat organisasi Pelu-1.png",
    fullImageUrl: "/images/Sertifikat organisasi Pelu-1.png",
    pdfUrl: "/images/Sertifikat organisasi Pelu-1.png",
  },
  {
    id: "cert-2",
    title: "Sertifikat Praktik Kerja Lapangan PT Marco Tour & Travel",
    issuer: "PT Marco Tour & Travel",
    date: "25 Agustus – 25 Desember 2025",
    description:
      "Melaksanakan kegiatan PKL di PT Marco Tour & Travel. Bertanggung jawab dalam pelaksanaan program kerja dan memberikan kontribusi aktif dalam kegiatan yang diselenggarakan oleh PT Marco Tour & Travel.",
    thumbnailUrl: "/images/Sertifikat PKL Pelu-1.png",
    fullImageUrl: "/images/Sertifikat PKL Pelu-1.png",
    pdfUrl: "/images/Sertifikat PKL Pelu-1.png",
  },
  {
    id: "cert-3",
    title:
      "Sertifikat Beginner Korean Class 24 Sessions Offline & Online Class",
    issuer: "Annyeong Academy",
    date: "7 Oktober 2025 – 15 Januari 2026",
    description:
      "Mengikuti dan menyelesaikan program pelatihan Bahasa Korea level Beginner yang mencakup 24 sesi pembelajaran secara offline dan online. Mempelajari dasar-dasar percakapan, tata bahasa, dan kosa kata dalam Bahasa Korea.",
    thumbnailUrl: "/images/Sertifikat Bahasa Korea-1.png",
    fullImageUrl: "/images/Sertifikat Bahasa Korea-1.png",
    pdfUrl: "/images/Sertifikat Bahasa Korea-1.png",
  },
  {
    id: "cert-4",
    title:
      "Sertifikat Pelatihan Bahasa Jepang Dasar (98 Jam) Peserta Batch Ketiga",
    issuer:
      "Kementerian Desa dan Pembangunan Daerah Tertinggal bekerja sama dengan PT MOJO Indonesia Raya",
    date: "24 Juni – 31 Juli 2026",
    description:
      "Menyelesaikan pelatihan Bahasa Jepang tingkat dasar yang terdiri dari 98 jam pembelajaran. Fokus pada penguasaan Hiragana, Katakana, Kanji dasar, struktur kalimat, dan percakapan sehari-hari.",
    thumbnailUrl:
      "/images/Sertifikat Pelatihan Bahasa Jepang Dasar (98 Jam) Peserta Batch Ketiga.png",
    fullImageUrl:
      "/images/Sertifikat Pelatihan Bahasa Jepang Dasar (98 Jam) Peserta Batch Ketiga.png",
    pdfUrl:
      "/images/Sertifikat Pelatihan Bahasa Jepang Dasar (98 Jam) Peserta Batch Ketiga.png",
  },
];
