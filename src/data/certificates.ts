import { CertificateItem, Language } from "@/types";

export const CERTIFICATES_SECTION: Record<
  Language,
  {
    title: string;
    subtitle: string;
    viewDetailText: string;
    closeText: string;
    issuedByText: string;
    openPdfText: string;
  }
> = {
  id: {
    title: "Sertifikat & Penghargaan",
    subtitle:
      "Bukti pencapaian kompetensi, lisensi keahlian profesional, dan sertifikasi kepanitiaan.",
    viewDetailText: "Lihat Detail",
    closeText: "Tutup",
    issuedByText: "Diterbitkan oleh:",
    openPdfText: "Buka Dokumen Asli (PDF)",
  },
  en: {
    title: "Certificates & Awards",
    subtitle:
      "Credentials of acquired competencies, professional licenses, and committee achievements.",
    viewDetailText: "View Details",
    closeText: "Close",
    issuedByText: "Issued by:",
    openPdfText: "Open Original Document (PDF)",
  },
};

export const CERTIFICATES_DATA: Record<Language, CertificateItem[]> = {
  id: [
    {
      id: "cert-1",
      title: "Sertifikat Dangerous Goods Handling for Multimode Transport",
      issuer: "Supply Chain Indonesia",
      date: "11 Oktober 2026",
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
      title: "Sertifikat Wakil Menteri Komunikasi dan Informasi",
      issuer: "Badan Eksekutif Mahasiswa ULBI",
      date: "2023 - 2024",
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
      title: "Sertifikat Panitia BUMN Cluster Logistics",
      issuer: "BUMN",
      date: "11 - 13 Oktober 2024",
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
      title: "Sertifikat Anggota Divisi Publikasi dan Dokumentasi",
      issuer:
        "Badan Eksekutif Mahasiswa Universitas Logistik dan Bisnis Internasional",
      date: "20 Desember 2023",
      description:
        "Bertugas sebagai Anggota Divisi Publikasi dan Dokumentasi pada Liga Kampus ULBI Gen-II periode Oktober–Desember 2023. Bertanggung jawab penuh atas pengelolaan konten promosi digital, liputan dokumentasi kegiatan turnamen olahraga secara berkala, serta penyebaran informasi kompetisi kepada seluruh mahasiswa dan civitas akademika. Berhasil mendukung Publikasi rangkaian acara yang berlangsung selama dua bulan berjalan dengan lancar dan informatif.",
      thumbnailUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
      fullImageUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
      pdfUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
    },
    {
      id: "cert-5",
      title: "Sertifikat Training Awareness",
      issuer: "PT Mita Indonesia Berdaya",
      date: "13 September 2026",
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
      title: "Sertifikat Kepanitiaan PKKMB ULBI",
      issuer: "Universitas Logistik dan Bisnis Internasional",
      date: "5 - 7 September 2023",
      description:
        "Bertugas sebagai Anggota Divisi Publikasi dan Dokumentasi PKKMB ULBI 2023 (5–7 September 2023). Bertanggung jawab penuh dalam mendokumentasikan setiap sesi kegiatan penyambutan mahasiswa baru, merancang konten publikasi media sosial, serta menyebarkan informasi operasional acara secara visual dan rinci kepada seluruh peserta. Berhasil menjaga konsistensi informasi dan dokumentasi acara berjalan lancar.",
      thumbnailUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
      fullImageUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
      pdfUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
    },
    {
      id: "cert-7",
      title: "Sertifikat Transportation Management Modern",
      issuer: "Supply Chain Indonesia",
      date: "10 Oktober 2026",
      description:
        "Pelatihan ini memberikan pemahaman menyeluruh tentang pengelolaan transportasi modern, mulai dari konsep dasar, perencanaan dan operasional, pengendalian biaya dan kinerja, hingga pemanfaatan teknologi digital. Pelatihan dilengkapi studi kasus dan simulasi industri serta bekal kesiapan karier di bidang transportasi dan logistik. Kompetensi yang diperoleh: Memahami konsep dan peran manajemen transportasi dalam rantai pasok modern. Merencanakan dan mengelola operasional transportasi, seperti rute, armada, dan penjadwalan. Menganalisis biaya transportasi dan mengukur kinerja operasional (KPI). Mengenal digitalisasi dan teknologi transportasi, misalnya sistem pelacakan dan manajemen transportasi berbasis digital. Menerapkan teori pada kasus industri melalui simulasi. Memiliki kesiapan memasuki dunia kerja di sektor transportasi dan logistik.",
      thumbnailUrl:
        "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
      fullImageUrl:
        "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
      pdfUrl:
        "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
    },
    {
      id: "cert-8",
      title: "Sertifikat Partisipasi ULBI Global Lecture",
      issuer: "Diktisaintek Berdampak",
      date: "8 Agustus 2025",
      description:
        "Dokumen ini merupakan sertifikat apresiasi atas partisipasi aktif dalam Global Lecture 2025 yang diadakan oleh Diktisaintek Berdampak. Acara ini menghadirkan berbagai pembicara ahli dari berbagai negara untuk berbagi wawasan dan pengetahuan dalam bidang yang relevan dengan perkembangan global.",
      thumbnailUrl:
        "/images/E-Sertifikat ULBI GLobal Lecture 2025 - Iftikar Muhamad Zahran  (1)_page-0001.jpg",
      fullImageUrl:
        "/images/E-Sertifikat ULBI GLobal Lecture 2025 - Iftikar Muhamad Zahran  (1)_page-0001.jpg",
      pdfUrl:
        "/images/E-Sertifikat ULBI GLobal Lecture 2025 - Iftikar Muhamad Zahran  (1)_page-0001.jpg",
    },
    {
      id: "cert-9",
      title: "Sertifikat Apresiasi Goes To Campus 2025",
      issuer: "Universitas Logistik dan Bisnis Internasional",
      date: "4 November 2025",
      description:
        "Dokumen ini merupakan sertifikat apresiasi atas partisipasi dalam acara Goes To Campus 2025 yang diadakan oleh Universitas Logistik dan Bisnis Internasional. Acara ini menghadirkan berbagai pembicara ahli dari berbagai negara untuk berbagi wawasan dan pengetahuan dalam bidang yang relevan dengan perkembangan global.",
      thumbnailUrl: "/images/Iftikar Muhamad Zahran (6)_page-0001.jpg",
      fullImageUrl: "/images/Iftikar Muhamad Zahran (6)_page-0001.jpg",
      pdfUrl: "/images/Iftikar Muhamad Zahran (6)_page-0001.jpg",
    },
    {
      id: "cert-10",
      title: "Sertifikat Pelatihan Awareness Internasional",
      issuer: "PT Mita Indonesia Berdaya",
      date: "13 September 2026",
      description:
        "Pelatihan ini memberikan pemahaman menyeluruh tentang pengelolaan transportasi modern, mulai dari konsep dasar, perencanaan dan operasional, pengendalian biaya dan kinerja, hingga pemanfaatan teknologi digital. Pelatihan dilengkapi studi kasus dan simulasi industri serta bekal kesiapan karier di bidang transportasi dan logistik. Kompetensi yang diperoleh: Memahami konsep dan peran manajemen transportasi dalam rantai pasok modern. Merencanakan dan mengelola operasional transportasi, seperti rute, armada, dan penjadwalan. Menganalisis biaya transportasi dan mengukur kinerja operasional (KPI). Mengenal digitalisasi dan teknologi transportasi, misalnya sistem pelacakan dan manajemen transportasi berbasis digital. Menerapkan teori pada kasus industri melalui simulasi. Memiliki kesiapan memasuki dunia kerja di sektor transportasi dan logistik.",
      thumbnailUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0003.jpg",
      fullImageUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0003.jpg",
      pdfUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0003.jpg",
    },
  ],
  en: [
    {
      id: "cert-1",
      title: "Dangerous Goods Handling for Multimode Transport Certificate",
      issuer: "Supply Chain Indonesia",
      date: "October 11, 2026",
      description:
        "Comprehensive training in handling dangerous goods across multimodal transportation (land, sea, and air). Covered classification, packaging, marking and labeling, documentation compliance, safety procedures, and emergency readiness. Acquired key competencies in handling hazardous cargo safely and compliant with domestic and international standards.",
      thumbnailUrl:
        "/images/Sertifikat Dangerous Goods Handling a.n. Iftikar Muhamad Zahran_page-0001.jpg",
      fullImageUrl:
        "/images/Sertifikat Dangerous Goods Handling a.n. Iftikar Muhamad Zahran_page-0001.jpg",
      pdfUrl:
        "/images/Sertifikat Dangerous Goods Handling a.n. Iftikar Muhamad Zahran_page-0001.jpg",
    },
    {
      id: "cert-2",
      title: "Deputy Minister of Communication and Information Certificate",
      issuer: "ULBI Student Executive Board",
      date: "2023 - 2024",
      description:
        "Certificate of service and recognition as Deputy Minister of Communication and Information of the Student Executive Board (BEM) at Universitas Logistik dan Bisnis Internasional.",
      thumbnailUrl:
        "/images/Sertifikat Keanggotan Badan Eksekutif Mahasiswa_page-0001.jpg",
      fullImageUrl:
        "/images/Sertifikat Keanggotan Badan Eksekutif Mahasiswa_page-0001.jpg",
      pdfUrl:
        "/images/Sertifikat Keanggotan Badan Eksekutif Mahasiswa_page-0001.jpg",
    },
    {
      id: "cert-3",
      title: "3rd BUMN Cluster Logistics Committee Certificate",
      issuer: "Ministry of SOE / BUMN Logistics",
      date: "October 11 - 13, 2024",
      description:
        "Certificate of appreciation for serving in the Publication and Documentation Division during the 3rd BUMN Cluster Logistics Basketball Cup 2024. Recognized for documenting match sessions, managing promotional social media channels, and preserving organized media archives.",
      thumbnailUrl:
        "/images/Sertifikat Panitia BUMN Cluster Logistics - Iftikar Muhamad Zahran_page-0001.jpg",
      fullImageUrl:
        "/images/Sertifikat Panitia BUMN Cluster Logistics - Iftikar Muhamad Zahran_page-0001.jpg",
      pdfUrl:
        "/images/Sertifikat Panitia BUMN Cluster Logistics - Iftikar Muhamad Zahran_page-0001.jpg",
    },
    {
      id: "cert-4",
      title: "Publication and Documentation Member Certificate",
      issuer: "Universitas Logistik dan Bisnis Internasional BEM",
      date: "December 20, 2023",
      description:
        "Certificate of recognition for contribution as a member of the Publication and Documentation Division on ULBI Campus League Gen-II. Managed regular media releases, visual documentation, and campus tournament communications.",
      thumbnailUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
      fullImageUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
      pdfUrl: "/images/Sertifikat Panitia Liga Kampus ULBI_page-0001.jpg",
    },
    {
      id: "cert-5",
      title: "OHSMS (SMK3) Awareness Training Certificate",
      issuer: "PT Mita Indonesia Berdaya",
      date: "September 13, 2026",
      description:
        "Occupational Health and Safety Management System (SMK3) Awareness Training. Provided systematic methodology for workplace accident prevention, PDCA cycle implementation, regulatory standards, hazard evaluation, operational safety integration, and internal audit mechanisms.",
      thumbnailUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0001.jpg",
      fullImageUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0001.jpg",
      pdfUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0001.jpg",
    },
    {
      id: "cert-6",
      title: "PKKMB ULBI Committee Certificate",
      issuer: "Universitas Logistik dan Bisnis Internasional",
      date: "September 5 - 7, 2023",
      description:
        "Certificate of appreciation for serving in the Publication and Documentation Division during PKKMB ULBI 2023 new student orientation program.",
      thumbnailUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
      fullImageUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
      pdfUrl: "/images/Sertifikat Panitia PKKMB ULBI_page-0001.jpg",
    },
    {
      id: "cert-7",
      title: "Modern Transportation Management Certificate",
      issuer: "Supply Chain Indonesia",
      date: "October 10, 2026",
      description:
        "Professional certification in modern transport management covering fleet planning, routing optimization, logistics KPI monitoring, digital transport tracking systems, and industry case simulations.",
      thumbnailUrl:
        "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
      fullImageUrl:
        "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
      pdfUrl:
        "/images/Sertfifikat Transportation Management Modern a.n. Iftikar Muhamad Zahran_page-0001.jpg",
    },
    {
      id: "cert-8",
      title: "ULBI Global Lecture Participation Certificate",
      issuer: "Diktisaintek Berdampak",
      date: "August 8, 2025",
      description:
        "Certificate of active participation in Global Lecture 2025 hosted by Diktisaintek Berdampak, engaging with international expert speakers on global supply chain and logistics advancements.",
      thumbnailUrl:
        "/images/E-Sertifikat ULBI GLobal Lecture 2025 - Iftikar Muhamad Zahran  (1)_page-0001.jpg",
      fullImageUrl:
        "/images/E-Sertifikat ULBI GLobal Lecture 2025 - Iftikar Muhamad Zahran  (1)_page-0001.jpg",
      pdfUrl:
        "/images/E-Sertifikat ULBI GLobal Lecture 2025 - Iftikar Muhamad Zahran  (1)_page-0001.jpg",
    },
    {
      id: "cert-9",
      title: "Goes To Campus 2025 Appreciation Certificate",
      issuer: "Universitas Logistik dan Bisnis Internasional",
      date: "November 4, 2025",
      description:
        "Certificate of participation and contribution in the Goes To Campus 2025 program at Universitas Logistik dan Bisnis Internasional, exploring modern competencies in industry-academia collaboration.",
      thumbnailUrl: "/images/Iftikar Muhamad Zahran (6)_page-0001.jpg",
      fullImageUrl: "/images/Iftikar Muhamad Zahran (6)_page-0001.jpg",
      pdfUrl: "/images/Iftikar Muhamad Zahran (6)_page-0001.jpg",
    },
    {
      id: "cert-10",
      title: "International Awareness Training Certificate",
      issuer: "PT Mita Indonesia Berdaya",
      date: "September 13, 2026",
      description:
        "Certified training covering international management system standards, operational quality control, risk identification, and structured workflow management in transport operations.",
      thumbnailUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0003.jpg",
      fullImageUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0003.jpg",
      pdfUrl:
        "/images/Sertifikat_Iftikar-Muhamad-Zahran_Pelatihan SMK3_page-0003.jpg",
    },
  ],
};
