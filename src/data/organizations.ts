import { Language, OrganizationItem } from "@/types";

export const ORGANIZATIONS_SECTION: Record<
  Language,
  { title: string; subtitle: string }
> = {
  id: {
    title: "Pengalaman Organisasi",
    subtitle:
      "Aktivitas kepemimpinan, kepanitiaan, dan kerja tim dalam pengembangan lingkungan kampus dan kemahasiswaan.",
  },
  en: {
    title: "Organizational Experience",
    subtitle:
      "Leadership roles, committee memberships, and teamwork in campus development and student governance.",
  },
};

export const ORGANIZATIONS_DATA: Record<Language, OrganizationItem[]> = {
  id: [
    {
      id: "org-1",
      // TODO: ganti nama organisasi
      organization: "Badan Eksekutif Mahasiswa",
      // TODO: ganti divisi dan jabatan
      role: "Komunikasi dan Informasi",
      // TODO: ganti periode keaktifan
      period: "2023 - 2024",
      // TODO: ganti poin jobdesk organisasi
      points: [
        "Menjabat sebagai Wakil Menteri Komunikasi dan Informasi BEM Kabinet Raksa Manunggal ULBI periode 2023/2024. Bertanggung jawab dalam mengelola strategi komunikasi publik, penyebaran informasi resmi organisasi, serta pengawasan konten media sosial BEM. Berperan aktif mengoordinasikan publikasi berbagai program kerja kampus, memimpin tim publikasi, serta menjalin komunikasi yang efektif antara BEM dengan mahasiswa dan pihak eksternal.",
      ],
    },
    {
      id: "org-2",
      // TODO: ganti nama organisasi
      organization: "Panitia PKKMB",
      // TODO: ganti divisi dan jabatan
      role: "Publikasi dan Dokumentasi",
      // TODO: ganti periode keaktifan
      period: "5 - 7 September 2023",
      // TODO: ganti poin jobdesk organisasi
      points: [
        "Bertugas sebagai Anggota Divisi Publikasi dan Dokumentasi PKKMB ULBI 2023 (5–7 September 2023). Bertanggung jawab penuh dalam mendokumentasikan setiap sesi kegiatan penyambutan mahasiswa baru, merancang konten publikasi media sosial, serta menyebarkan informasi operasional acara secara visual dan rinci kepada seluruh peserta. Berhasil menjaga konsistensi informasi dan dokumentasi acara berjalan lancar.",
      ],
    },
    {
      id: "org-3",
      // TODO: ganti nama organisasi
      organization: "Panitia BUMN Cluster Logistics Basketball Cup",
      // TODO: ganti divisi dan jabatan
      role: "Publikasi dan Dokumentasi",
      // TODO: ganti periode keaktifan
      period: "11 - 13 Oktober 2024",
      // TODO: ganti poin jobdesk organisasi
      points: [
        "Bertugas sebagai anggota Divisi Publikasi dan Dokumentasi dalam penyelenggaraan 3rd BUMN Cluster Logistics Basketball Cup 2024. Bertanggung jawab dalam mendokumentasikan seluruh rangkaian kegiatan pertandingan, mengabadikan momen penting selama acara berlangsung, serta merancang dan mempublikasikan konten informatif melalui media sosial. Turut memastikan penyebaran informasi kegiatan tersampaikan secara menarik, informatif, dan konsisten kepada peserta maupun audiens. Berhasil mendukung kebutuhan publikasi dan dokumentasi sehingga kegiatan dapat berjalan dengan baik serta memiliki arsip dokumentasi yang terorganisasi.",
      ],
    },
    {
      id: "org-4",
      // TODO: ganti nama organisasi
      organization: "Panitia Liga Kampus ULBI GEN - II",
      // TODO: ganti divisi dan jabatan
      role: "Publikasi dan Dokumentasi",
      // TODO: ganti periode keaktifan
      period: "Oktober - Desember 2023",
      // TODO: ganti poin jobdesk organisasi
      points: [
        "Bertugas sebagai Anggota Divisi Publikasi dan Dokumentasi pada Liga Kampus ULBI Gen-II periode Oktober–Desember 2023. Bertanggung jawab penuh atas pengelolaan konten promosi digital, liputan dokumentasi kegiatan turnamen olahraga secara berkala, serta penyebaran informasi kompetisi kepada seluruh mahasiswa dan civitas akademika. Berhasil mendukung Publikasi rangkaian acara yang berlangsung selama dua bulan berjalan dengan lancar dan informatif.",
      ],
    },
    {
      id: "org-5",
      // TODO: ganti nama organisasi
      organization: "Panitia Seminar Nasional",
      // TODO: ganti divisi dan jabatan
      role: "Sarana Prasarana",
      // TODO: ganti periode keaktifan
      period: "September - November 2023",
      // TODO: ganti poin jobdesk organisasi
      points: [
        "Bertugas sebagai Anggota Divisi Sarana dan Prasarana dalam kepanitiaan Seminar Nasional dengan tema “Meningkatkan Kualitas Generasi Muda dalam Persiapan Menghadapi Kompetisi Kerja” yang diselenggarakan pada 18 November 2023. Bertanggung jawab dalam mempersiapkan, mengelola, dan memastikan ketersediaan sarana serta prasarana yang dibutuhkan selama kegiatan berlangsung, termasuk penataan perlengkapan, kesiapan fasilitas acara, dan koordinasi kebutuhan teknis di lokasi. Berhasil mendukung kelancaran pelaksanaan seminar melalui pengelolaan fasilitas dan perlengkapan yang terorganisir sehingga kegiatan dapat berjalan dengan tertib dan lancar.",
      ],
    },
  ],
  en: [
    {
      id: "org-1",
      organization: "Student Executive Board (BEM)",
      role: "Communication and Information",
      period: "2023 - 2024",
      points: [
        "Served as Deputy Minister of Communication and Information of BEM ULBI (Raksa Manunggal Cabinet) for the 2023/2024 term. Spearheaded public communication strategies, official university announcement broadcasts, and social media media management. Directed publication workflows for various university programs, guided the creative documentation team, and built effective communication bridges between BEM, students, and external stakeholders.",
      ],
    },
    {
      id: "org-2",
      organization: "PKKMB Orientation Committee",
      role: "Publication & Documentation",
      period: "September 5 - 7, 2023",
      points: [
        "Served as a committee member of the Publication & Documentation Division for PKKMB ULBI 2023 (September 5–7, 2023). Held full responsibility for photographing and recording every new student orientation session, designing creative social media assets, and disseminating schedule updates clearly to all freshmen participants.",
      ],
    },
    {
      id: "org-3",
      organization: "3rd BUMN Cluster Logistics Basketball Cup",
      role: "Publication & Documentation",
      period: "October 11 - 13, 2024",
      points: [
        "Served on the Publication and Documentation Division for the 3rd BUMN Cluster Logistics Basketball Cup 2024. Handled event photo/video coverage, captured critical match moments, created engaging content for social media channels, and built a well-structured digital media archive for organizational records.",
      ],
    },
    {
      id: "org-4",
      organization: "ULBI Campus League Gen-II Committee",
      role: "Publication & Documentation",
      period: "October - December 2023",
      points: [
        "Served as an active team member of the Publication & Documentation Division for the ULBI Campus League Gen-II from October to December 2023. Supervised digital promotional campaigns, documented recurring tournament matches, and published regular match highlights to the university community.",
      ],
    },
    {
      id: "org-5",
      organization: "National Seminar Committee",
      role: "Facilities and Infrastructure",
      period: "September - November 2023",
      points: [
        "Served in the Facilities and Infrastructure Division for the National Seminar on workforce readiness held on November 18, 2023. Coordinated venue preparation, sound system equipment, technical supplies, and on-site logistics to ensure event delivery without interruption.",
      ],
    },
  ],
};
