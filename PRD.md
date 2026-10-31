# Dokumen Kebutuhan Produk: Website Portofolio Pribadi

## Gambaran Umum Produk

**Visi Produk:** Landing page portofolio statis yang ringan, aman, dan responsif untuk menampilkan profil, pendidikan, keahlian, pengalaman, dan sertifikat secara profesional.

**Target Pengguna:** Primer: rekruter/HRD dan calon pemberi kerja/magang. Sekunder: dosen, rekan organisasi, dan relasi profesional.

**Tujuan Bisnis:** Meningkatkan peluang direkrut dengan menyediakan satu tautan yang merangkum kualifikasi pemilik.

**Metrik Keberhasilan:**

- Lighthouse (mobile) ≥ 90 untuk Performance, Accessibility, Best Practices, SEO
- JS first-load ≤ 150 KB (gzip); LCP < 2,5 dtk pada 4G
- Klik tombol Unduh CV / Hubungi / LinkedIn / Instagram berfungsi 100%

**Ruang Lingkup:** Satu halaman (landing page), enam section: Profil, Pendidikan, Keahlian, Pengalaman Kerja/Magang, Pengalaman Organisasi, Sertifikat & Penghargaan. Hanya bahasa Indonesia, hanya tema terang. Tanpa backend, database, login, atau form.

---

## Persona Pengguna

### Persona 1: Rekruter / HRD

- **Demografi:** 25–45 th, HR/talent acquisition, melek teknologi menengah
- **Tujuan:** Menilai kandidat cepat (< 2 menit): latar belakang, keahlian, pengalaman
- **Kendala/Masalah:** CV panjang, info tersebar, situs lambat di ponsel
- **Perjalanan Pengguna:** Buka tautan di ponsel/laptop → baca profil → scroll pengalaman → cek sertifikat → unduh CV atau email

### Persona 2: Dosen / Rekan Profesional

- **Demografi:** 25–55 th, akademisi/profesional
- **Tujuan:** Memverifikasi kredibilitas (pendidikan, organisasi, sertifikat)
- **Kendala/Masalah:** Sulit memverifikasi bukti sertifikat
- **Perjalanan Pengguna:** Buka tautan → navbar ke Sertifikat → "Lihat Detail" untuk memperbesar gambar → hubungi via LinkedIn

---

## Kebutuhan Fitur

| Fitur                                | Deskripsi                                                            | User Story                                                       | Prioritas | Kriteria Penerimaan                                                                                                                                                                                                                      | Dependensi                       |
| ------------------------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **Navbar Responsif**                 | Navigasi enam section; posisi & bentuk berbeda per device            | Sebagai pengunjung, saya ingin berpindah section dengan cepat    | Must      | Desktop/tablet (≥768px): di atas, ikon + nama. Mobile (<768px): di bawah, hanya ikon (dengan `aria-label`). Penanda section aktif (scroll-spy). Smooth scroll                                                                            | –                                |
| **Section Profil**                   | Nama, posisi diminati, deskripsi singkat, foto informal, tombol aksi | Sebagai rekruter, saya ingin langsung tahu siapa pemilik         | Must      | Tampil: nama, posisi, deskripsi, foto. Tombol: Unduh CV (PDF), Hubungi (`mailto:`), LinkedIn, Instagram (tab baru, `rel="noopener noreferrer"`). Foto WebP/AVIF, prioritas load                                                          | Aset foto, CV.pdf                |
| **Section Pendidikan**               | Riwayat pendidikan                                                   | Sebagai rekruter, saya ingin melihat riwayat pendidikan          | Must      | Per item: nama institusi, alamat, program studi, periode. Urut terbaru → terlama                                                                                                                                                         | Data `education`                 |
| **Section Keahlian**                 | Daftar keahlian (soft & hard skill)                                  | Sebagai rekruter, saya ingin melihat keahlian sekilas            | Must      | Tampil sebagai badge/chip, contoh: Teamwork, Komunikasi, Time Management, Problem Solving, Supply Chain Management, Distribution. Mudah ditambah lewat data                                                                              | Data `skills`                    |
| **Section Pengalaman Kerja/Magang**  | Riwayat kerja/magang                                                 | Sebagai rekruter, saya ingin tahu pengalaman kerja nyata         | Must      | Per item: nama instansi, alamat, divisi, poin jobdesk singkat (bullet), periode                                                                                                                                                          | Data `experience`                |
| **Section Pengalaman Organisasi**    | Riwayat organisasi                                                   | Sebagai rekruter, saya ingin melihat kepemimpinan & kerja tim    | Must      | Per item: nama organisasi, divisi, poin jobdesk singkat, periode                                                                                                                                                                         | Data `organizations`             |
| **Section Sertifikat & Penghargaan** | Galeri kartu sertifikat                                              | Sebagai pengunjung, saya ingin memverifikasi sertifikat          | Must      | Per kartu: gambar thumbnail, nama, deskripsi singkat, tombol "Lihat Detail". Detail membuka modal (shadcn Dialog) berisi gambar resolusi penuh; tutup via tombol, klik overlay, tombol `Esc`. Gambar penuh dimuat lazy saat modal dibuka | Data `certificates`, aset gambar |
| **Responsivitas**                    | Tata letak adaptif                                                   | Sebagai pengunjung, saya ingin nyaman di semua perangkat         | Must      | Teruji di 360px, 768px, 1024px, 1440px; tanpa scroll horizontal                                                                                                                                                                          | –                                |
| **SEO & Metadata**                   | Meta tag, OG image, sitemap, robots                                  | Sebagai pemilik, saya ingin tautan tampil menarik saat dibagikan | Should    | Title, description, Open Graph, favicon, `sitemap.xml`, `robots.txt`                                                                                                                                                                     | –                                |
| **Analitik**                         | Statistik kunjungan                                                  | Sebagai pemilik, saya ingin tahu jumlah pengunjung               | Could     | Vercel Web Analytics (tanpa cookie), opsional                                                                                                                                                                                            | –                                |

---

## Alur Pengguna (User Flows)

### Alur 1: Menilai Kandidat

1. Pengunjung membuka URL portofolio
2. Section Profil tampil; pengunjung membaca ringkasan
3. Pengunjung menekan item navbar atau scroll ke section lain
4. Pengunjung menekan Unduh CV atau Hubungi Saya

- Alternatif: membuka LinkedIn/Instagram di tab baru
- Error: file CV tidak ditemukan → tampil halaman 404 kustom; tautan rusak dicegah lewat pengecekan saat build

### Alur 2: Melihat Detail Sertifikat

1. Pengunjung membuka section Sertifikat
2. Menekan "Lihat Detail" pada kartu
3. Modal terbuka menampilkan gambar penuh, nama, dan deskripsi
4. Menutup modal (tombol/overlay/`Esc`); fokus kembali ke tombol pemicu

- Alternatif: gambar besar mengikuti ukuran layar (tanpa overflow)
- Error: gambar gagal dimuat → tampil placeholder + teks alternatif

---

## Kebutuhan Non-Fungsional

### Performa

- **Waktu Muat (Load Time):** LCP < 2,5 dtk (4G), CLS < 0,1, INP < 200 ms
- **Pengguna Bersamaan:** Tidak terbatas praktis (aset statis di CDN Vercel)
- **Waktu Respons:** TTFB < 200 ms (CDN)
- **Ringan:** gambar WebP/AVIF dengan dimensi tetap, thumbnail terpisah dari gambar penuh, `loading="lazy"` di bawah fold, font self-host via `next/font` (maks. 2 weight), Client Component hanya untuk navbar & modal, tanpa library animasi berat

### Keamanan

- **Autentikasi:** Tidak ada (situs publik, tanpa login)
- **Otorisasi:** Hanya baca; tidak ada input pengguna / form / API
- **Perlindungan Data:**
  - Header keamanan via `vercel.json`: Content-Security-Policy ketat (`default-src 'self'`; `img-src 'self' data:`; tanpa inline script jika memungkinkan), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal, `X-Frame-Options: DENY` / `frame-ancestors 'none'`, HSTS (otomatis HTTPS Vercel)
  - Tautan eksternal: `rel="noopener noreferrer"`
  - Tidak ada secret/API key di repo; `.env*` masuk `.gitignore`
  - Data pribadi di situs dibatasi (tanpa nomor telepon/alamat rumah); cukup email, LinkedIn, Instagram. Hapus metadata EXIF dari foto & sertifikat; samarkan nomor ID sensitif pada gambar sertifikat
  - `npm audit` + Dependabot aktif; versi dependensi dikunci (`package-lock.json`); dependensi seminimal mungkin
  - Repo GitHub: branch protection pada `main`, 2FA akun, secret scanning aktif

### Kompatibilitas

- **Perangkat:** Desktop, tablet, ponsel
- **Browser:** 2 versi terbaru Chrome, Edge, Firefox, Safari (iOS ≥ 15)
- **Ukuran Layar:** 360px – 1920px+; breakpoint: mobile <768, tablet 768–1023, desktop ≥1024

### Aksesibilitas

- **Tingkat Kepatuhan:** WCAG 2.1 AA
- **Persyaratan Khusus:** HTML semantik (`header/nav/main/section`), `aria-label` untuk navbar ikon, `aria-current` pada section aktif, fokus terlihat, kontras ≥ 4,5:1, `alt` pada semua gambar, modal dengan focus trap, hormati `prefers-reduced-motion`, tombol ≥ 44×44px di mobile

---

## Spesifikasi Teknis

### Frontend

- **Stack Teknologi:** Next.js (App Router, `output: 'export'`), React, TypeScript (strict), Tailwind CSS, shadcn/ui (hanya komponen dipakai: Button, Badge, Card, Dialog), `lucide-react` untuk ikon
- **Sistem Desain:** Lihat `DESIGN.md`
- **Desain Responsif:** Mobile-first; navbar atas (≥768px) dan bawah (<768px)

### Backend

- **Stack Teknologi:** Tidak ada
- **Persyaratan API:** Tidak ada
- **Basis Data:** Tidak ada; konten disimpan sebagai data bertipe di `src/data/*.ts`

### Infrastruktur

- **Hosting:** Vercel (Hobby), terhubung ke repo GitHub
- **Skalabilitas:** CDN statis bawaan Vercel
- **CI/CD:** Push ke `main` → deploy produksi otomatis; Pull Request → Preview Deployment. GitHub Actions: `lint`, `typecheck`, `build`

### Struktur Folder

```
portfolio/
├─ public/
│  ├─ cv/                 # CV.pdf
│  ├─ images/
│  │  ├─ profile/         # foto informal (WebP/AVIF)
│  │  └─ certificates/    # thumb/ dan full/
│  ├─ favicon.ico
│  └─ robots.txt
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx       # font, metadata
│  │  ├─ page.tsx         # merakit semua section
│  │  ├─ not-found.tsx
│  │  └─ globals.css
│  ├─ components/
│  │  ├─ ui/              # komponen shadcn
│  │  ├─ layout/          # navbar.tsx, footer.tsx
│  │  └─ sections/        # profile, education, skills, experience,
│  │                      # organizations, certificates (+ certificate-dialog)
│  ├─ data/               # profile.ts, education.ts, skills.ts, experience.ts,
│  │                      # organizations.ts, certificates.ts, navigation.ts
│  ├─ types/              # index.ts (interface data)
│  ├─ hooks/              # use-active-section.ts
│  └─ lib/                # utils.ts (cn), constants.ts
├─ .github/workflows/ci.yml
├─ vercel.json            # header keamanan
├─ next.config.ts
├─ components.json        # konfigurasi shadcn
├─ PRD.md
└─ DESIGN.md
```

### Gaya Kode (Code Style)

- ESLint (`next/core-web-vitals`) + Prettier (+ `prettier-plugin-tailwindcss`); `strict: true`; alias impor `@/*`
- Penamaan file: `kebab-case`; komponen: `PascalCase`; hook: `useXxx`; konstanta: `UPPER_SNAKE_CASE`
- Satu komponen per file; konten hanya dari `src/data` (tidak ditulis langsung di JSX)
- Server Component sebagai default; `"use client"` hanya bila perlu
- Commit mengikuti Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`)

---

## Analitik & Pemantauan

- **Metrik Utama:** Kunjungan, klik Unduh CV (opsional)
- **Event:** Tidak ada pelacakan kustom pada MVP
- **Dashboard:** Vercel Analytics (opsional, tanpa cookie)
- **Notifikasi/Alert:** Notifikasi kegagalan build Vercel/GitHub Actions ke email

---

## Perencanaan Rilis

### MVP (v1.0)

- **Fitur:** Navbar responsif, enam section, modal sertifikat, SEO dasar, header keamanan, CI/CD
- **Linimasa:** ± 1–2 minggu
- **Kriteria Keberhasilan:** Semua kriteria penerimaan "Must" terpenuhi; Lighthouse ≥ 90; tampil benar di 360/768/1024/1440px

### Rilis Mendatang

- **v1.1:** Vercel Analytics (opsional), animasi masuk halus
- Tidak direncanakan: multi-bahasa, dark mode, section Proyek

---

## Pertanyaan Terbuka & Asumsi

- **Pertanyaan 1:** Domain kustom atau cukup `*.vercel.app`?
- **Asumsi 1:** Seluruh teks, foto, CV, dan gambar sertifikat disediakan pemilik
- **Asumsi 2:** Email tampil di tombol `mailto:`; pemilik menerima risiko spam email publik
- **Asumsi 3:** Tidak ada form kontak (kontak lewat email/LinkedIn/Instagram)
