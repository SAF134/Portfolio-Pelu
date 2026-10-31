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
    // TODO: ganti judul sertifikat bila perlu
    title: "Sertifikat Dangerous Goods Handling for Multimode Transport",
    // TODO: ganti penerbit sertifikat
    issuer: "Supply Chain Indonesia",
    // TODO: ganti tanggal terbit
    date: "11 Oktober 2026",
    // TODO: ganti deskripsi sertifikat
    description:
      "Pelatihan ini membahas penanganan barang berbahaya (dangerous goods) dalam pengangkutan multimoda, yaitu kombinasi moda darat, laut, dan udara. Cakupannya meliputi klasifikasi dan identifikasi, pengemasan, penandaan dan pelabelan, dokumentasi, prosedur penanganan, serta keselamatan dan kesiapsiagaan darurat. Pelatihan ditutup dengan studi kasus. Kompetensi yang diperoleh: Memahami konsep dasar dan jenis barang berbahaya. Mengklasifikasikan dan mengidentifikasi barang berbahaya sesuai kategorinya. Menerapkan ketentuan pengemasan, penandaan (marking), dan pelabelan yang benar. Memahami dan menyiapkan dokumen pengangkutan barang berbahaya. Menangani barang berbahaya secara aman pada setiap moda transportasi. Memiliki kesadaran terhadap risiko serta prosedur keselamatan dan tanggap darurat. Menganalisis kasus nyata terkait penanganan barang berbahaya.",
    thumbnailUrl:
      "/images/Sertifikat Dangerous Goods Handling a.n. Iftikar Muhamad Zahran_page-0001.jpg",
    fullImageUrl:
      "/images/Sertifikat Dangerous Goods Handling a.n. Iftikar Muhamad Zahran_page-0001.jpg",
    pdfUrl:
      "/images/Sertifikat Dangerous Goods Handling a.n. Iftikar Muhamad Zahran_page-0001.jpg",
  },
  {
    id: "cert-2",
    // TODO: ganti judul sertifikat
    title: "Sertifikat Wakil Menteri Komunikasi dan Informasi",
    // TODO: ganti penerbit
    issuer: "Badan Eksekutif Mahasiswa ULBI",
    // TODO: ganti tanggal terbit
    date: "2023 - 2024",
    // TODO: ganti deskripsi
    description:
      "Sertifikat dan bukti sebagai Wakil Menteri Komunikasi dan Informasi di Badan Eksekutif Mahasiswa Universitas Logistik dan Bisnis Internasional.",
    thumbnailUrl:
      "/images/Sertifikat Keanggotan Badan Eksekutif Mahasiswa_page-0001.jpg",
    fullImageUrl:
      "/images/Sertifikat Keanggotan Badan Eksekutif Mahasiswa_page-0001.jpg",
    pdfUrl:
      "/images/Sertifikat Keanggotan Badan Eksekutif Mahasiswa_page-0001.jpg",
  },
  {
    id: "cert-3",
    // TODO: ganti judul sertifikat
    title: "Sertifikat Panitia BUMN Cluster Logistics",
    // TODO: ganti penerbit
    issuer: "BUMN",
    // TODO: ganti tanggal terbit
    date: "11 - 13 Oktober 2024",
    // TODO: ganti deskripsi
    description:
      "Bertugas sebagai anggota Divisi Publikasi dan Dokumentasi dalam penyelenggaraan 3rd BUMN Cluster Logistics Basketball Cup 2024. Bertanggung jawab dalam mendokumentasikan seluruh rangkaian kegiatan pertandingan, mengabadikan momen penting selama acara berlangsung, serta merancang dan mempublikasikan konten informatif melalui media sosial. Turut memastikan penyebaran informasi kegiatan tersampaikan secara menarik, informatif, dan konsisten kepada peserta maupun audiens. Berhasil mendukung kebutuhan publikasi dan dokumentasi sehingga kegiatan dapat berjalan dengan baik serta memiliki arsip dokumentasi yang terorganisasi.",
    thumbnailUrl:
      "/images/Sertifikat Panitia BUMN Cluster Logistics - Iftikar Muhamad Zahran_page-0001.jpg",
    fullImageUrl:
      "/images/Sertifikat Panitia BUMN Cluster Logistics - Iftikar Muhamad Zahran_page-0001.jpg",
    pdfUrl:
      "/images/Sertifikat Panitia BUMN Cluster Logistics - Iftikar Muhamad Zahran_page-0001.jpg",
  },
  {
    id: "cert-4",
    // TODO: ganti judul sertifikat
    title: "Sertifikat Anggota Divisi Publikasi dan Dokumentasi",
    // TODO: ganti penerbit
    issuer:
      "Badan Eksekutif Mahasiswa Universitas Logistik dan Bisnis Internasional",
    // TODO: ganti tanggal terbit
    date: "20 Desember 2023",
    // TODO: ganti deskripsi
    description:
      "Bertugas sebagai Anggota Divisi Publikasi dan Dokumentasi pada Liga Kampus ULBI Gen-II periode Oktober–Desember 2023. Bertanggung jawab penuh atas pengelolaan konten promosi digital, liputan dokumentasi kegiatan turnamen olahraga secara berkala, serta penyebaran informasi kompetisi kepada seluruh mahasiswa dan civitas akademika. Berhasil mendukung Publikasi rangkaian acara yang berlangsung selama dua bulan berjalan dengan lancar dan informatif.",
    thumbnailUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
    fullImageUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
    pdfUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
  },
  {
    id: "cert-5",
    // TODO: ganti judul sertifikat
    title: "Sertifikat Training Awareness",
    // TODO: ganti penerbit
    issuer: "PT Mita Indonesia Berdaya",
    // TODO: ganti tanggal terbit
    date: "13 September 2026",
    // TODO: ganti deskripsi
    description:
      "Training Awareness Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) Pelatihan ini memperkenalkan sistem manajemen K3 sebagai pendekatan terstruktur untuk mencegah kecelakaan dan penyakit akibat kerja. Pembahasannya dimulai dari dasar K3, siklus PDCA, standar dan peraturan terkait. Setelah itu dilanjutkan ke tahap penerapan sistem: initial review, pengembangan sistem, implementasi pada operasi, program K3, internal audit, dan sertifikasi. Kompetensi yang diperoleh: Memahami konsep dasar K3 dan prinsip sistem manajemen K3. Memahami siklus PDCA sebagai dasar perbaikan sistem. Mengenal standar dan peraturan K3 yang berlaku. Memahami tahapan membangun SMK3, mulai dari kajian awal (initial review) hingga pengembangan sistem. Memahami penerapan K3 dalam kegiatan operasional dan penyusunan program K3. Mengenal mekanisme internal audit dan proses sertifikasi SMK3.",
    thumbnailUrl:
      "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0001.jpg",
    fullImageUrl:
      "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0001.jpg",
    pdfUrl:
      "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0001.jpg",
  },
  {
    id: "cert-6",
    // TODO: ganti judul sertifikat
    title: "Sertifikat Kepanitiaan PKKMB ULBI",
    // TODO: ganti penerbit
    issuer: "Universitas Logistik dan Bisnis Internasional",
    // TODO: ganti tanggal terbit
    date: "5 - 7 September 2023",
    // TODO: ganti deskripsi
    description:
      "Bertugas sebagai Anggota Divisi Publikasi dan Dokumentasi PKKMB ULBI 2023 (5–7 September 2023). Bertanggung jawab penuh dalam mendokumentasikan setiap sesi kegiatan penyambutan mahasiswa baru, merancang konten publikasi media sosial, serta menyebarkan informasi operasional acara secara visual dan rinci kepada seluruh peserta. Berhasil menjaga konsistensi informasi dan dokumentasi acara berjalan lancar.",
    thumbnailUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
    fullImageUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
    pdfUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
  },
  {
    id: "cert-7",
    // TODO: ganti judul sertifikat
    title: "Sertifikat Transportation Management Modern",
    // TODO: ganti penerbit
    issuer: "Supply Chain Indonesia",
    // TODO: ganti tanggal terbit
    date: "10 Oktober 2026",
    // TODO: ganti deskripsi
    description:
      "Pelatihan ini memberikan pemahaman menyeluruh tentang pengelolaan transportasi modern, mulai dari konsep dasar, perencanaan dan operasional, pengendalian biaya dan kinerja, hingga pemanfaatan teknologi digital. Pelatihan dilengkapi studi kasus dan simulasi industri serta bekal kesiapan karier di bidang transportasi dan logistik. Kompetensi yang diperoleh: Memahami konsep dan peran manajemen transportasi dalam rantai pasok modern. Merencanakan dan mengelola operasional transportasi, seperti rute, armada, dan penjadwalan. Menganalisis biaya transportasi dan mengukur kinerja operasional (KPI). Mengenal digitalisasi dan teknologi transportasi, misalnya sistem pelacakan dan manajemen transportasi berbasis digital. Menerapkan teori pada kasus industri melalui simulasi. Memiliki kesiapan memasuki dunia kerja di sektor transportasi dan logistik.",
    thumbnailUrl:
      "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
    fullImageUrl:
      "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
    pdfUrl:
      "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
  },
];
