import { ExperienceItem, Language } from "@/types";

export const EXPERIENCE_SECTION: Record<
  Language,
  { title: string; subtitle: string }
> = {
  id: {
    title: "Pengalaman Kerja",
    subtitle:
      "Riwayat pengalaman kerja dan magang di bidang operasional logistik dan manajemen rantai pasok.",
  },
  en: {
    title: "Work Experience",
    subtitle:
      "Professional work and internship background in logistics operations and supply chain management.",
  },
};

export const EXPERIENCE_DATA: Record<Language, ExperienceItem[]> = {
  id: [
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
  ],
  en: [
    {
      id: "exp-1",
      company: "PT Pelita Air Service",
      location: "Jakarta, Indonesia",
      role: "Supply Chain Management (Logistics Department)",
      period: "July - September 2025",
      points: [
        "Responsible for supporting aviation supply chain operations, including invoice and payment processing, issuing Payment Vouchers via MySAP, customs documentation management (RKIP, SKTD, and PIB documents), and drafting SOPs for Special Procurement of Goods & Services. At the Pondok Cabe operational facility and warehouse, managed spare parts inventory control, packaging operations, and participated in executing helicopter engine transport to Tanjung Priok Port while analyzing optimal supporting land transport modes. Actively participated in cross-functional coordination meetings with Garuda Maintenance Facility (GMF).",
      ],
      technologies: ["Microsoft Office", "Spreadsheet", "MySap"],
    },
  ],
};
