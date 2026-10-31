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
    company: "PT Pelita Air Service",
    // TODO: ganti lokasi instansi
    location: "Jakarta, Indonesia",
    // TODO: ganti posisi/divisi magang
    role: "Supply Chain Management (Departemen Logistik)",
    // TODO: ganti periode kerja/magang
    period: "Juli - September 2025",
    // TODO: ganti poin jobdesk pengalaman
    points: [
      "Bertanggung jawab dalam mendukung operasional rantai pasok penerbangan, meliputi pengelolaan data invoice, pembayaran, dan penerbitan Payment Voucher via MySAP, pengurusan administrasi kepabeanan (dokumen RKIP, SKTD, dan PIB), serta pembuatan SOP Pengadaan Barang dan Jasa Khusus. Di area operasional dan gudang Pondok Cabe, melakukan kontrol stok spare part, proses pengemasan (packing), serta ikut serta dalam eksekusi pengiriman engine helikopter ke Pelabuhan Tanjung Priok sekaligus menganalisis pemilihan moda transportasi darat pendukungnya. Berperan aktif juga dalam mendampingi rapat koordinasi bersama Garuda Maintenance Facility (GMF).",
    ],
    technologies: ["Microsoft Office", "Spreadsheet", "MySap"],
  },
];
