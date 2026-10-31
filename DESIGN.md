# DESIGN.md: Website Portofolio

Acuan: `PRD.md` + screenshot referensi (kartu bergaya "soft/neo", border tebal, judul dengan kata terakhir berwarna aksen + titik, navbar pill, chip keahlian).

## 1. Prinsip

- **Bersih & ringan:** tanpa dekorasi berat, tanpa gambar latar besar
- **Konsisten:** semua dari token; tidak ada nilai warna/ukuran acak
- **Mobile-first**, aksesibel (WCAG 2.1 AA)

## 2. Breakpoint

| Nama    | Lebar      | Tailwind |
| ------- | ---------- | -------- |
| Mobile  | < 768px    | default  |
| Tablet  | 768–1023px | `md:`    |
| Desktop | ≥ 1024px   | `lg:`    |

Kontainer: `max-w-6xl mx-auto px-4 md:px-6 lg:px-8`. Jarak antar section: `py-16 md:py-20 lg:py-24`.

## 3. Token Desain (CSS variable di `globals.css`, dipetakan ke shadcn)

Hanya tema terang (tanpa dark mode).

| Token                  | Nilai     |
| ---------------------- | --------- |
| `--background`         | `#E9E9EB` |
| `--card`               | `#F4F4F5` |
| `--foreground`         | `#111113` |
| `--muted-foreground`   | `#52525B` |
| `--border`             | `#18181B` |
| `--primary` (aksen)    | `#2563EB` |
| `--primary-foreground` | `#FFFFFF` |

- **Radius:** kartu `rounded-2xl`; tombol/chip `rounded-full`; gambar `rounded-xl`
- **Border:** `border-2 border-border` pada kartu & tombol
- **Bayangan:** `shadow-[4px_4px_0_0_var(--border)]` (kartu); hover: geser `translate-x-[-1px] translate-y-[-1px]`
- Kontras teks/latar wajib ≥ 4,5:1

## 4. Tipografi

- Font: **Inter** via `next/font/google` (self-host, weight 400/600/700)
- Judul section (`h2`): `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`; kata terakhir `text-primary`, diakhiri titik (contoh: "Riwayat **Pendidikan.**")
- Subjudul: `text-sm md:text-base text-muted-foreground`
- Judul kartu: `text-lg font-semibold`; isi: `text-sm md:text-base`
- Nama di Profil (`h1`): `text-3xl md:text-5xl font-bold`

## 5. Navbar

Data: `src/data/navigation.ts` → Profil (`User`), Pendidikan (`GraduationCap`), Keahlian (`Wrench`), Pengalaman (`Briefcase`), Organisasi (`Users`), Sertifikat (`Award`); ikon dari `lucide-react`.

| Properti      | Mobile (<768)                                                      | Tablet & Desktop (≥768)                                 |
| ------------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| Posisi        | `fixed bottom-0` (lebar penuh, `pb-[env(safe-area-inset-bottom)]`) | `fixed top-4`, di tengah, bentuk pill                   |
| Isi           | Hanya ikon (24px), `aria-label` nama section                       | Ikon (18px) + nama section                              |
| Ukuran target | ≥ 44×44px                                                          | tinggi 40px; tablet: font `text-xs`, desktop: `text-sm` |
| Aktif         | Ikon `text-primary` + penanda titik/garis atas                     | Pill terisi hitam/`primary` + teks putih                |
| Gaya          | `bg-card/90 backdrop-blur border-t-2`                              | `bg-card/90 backdrop-blur border-2 rounded-full shadow` |

- Scroll-spy via `IntersectionObserver` (`use-active-section.ts`); `aria-current="page"` pada item aktif
- Anchor `#profil, #pendidikan, #keahlian, #pengalaman, #organisasi, #sertifikat`; `scroll-margin-top: 5rem` (desktop/tablet) dan `scroll-margin-bottom` aman di mobile; tambahkan `pb-20` pada `main` di mobile agar konten tidak tertutup navbar
- Smooth scroll hanya jika tidak `prefers-reduced-motion`

## 6. Layout Per Section

**Umum:** header section = `h2` + subjudul (rata tengah), lalu konten.

| Section        | Mobile                               | Tablet                       | Desktop                                                           |
| -------------- | ------------------------------------ | ---------------------------- | ----------------------------------------------------------------- |
| **Profil**     | 1 kolom: foto di atas, teks di bawah | 2 kolom (teks 3/5, foto 2/5) | 2 kolom, teks kiri, foto kanan (rasio 4:5, `rounded-2xl`, border) |
| **Pendidikan** | Daftar kartu 1 kolom                 | 1 kolom                      | 1 kolom, kartu lebar penuh (maks. `max-w-4xl`)                    |
| **Keahlian**   | Chip membungkus (wrap)               | Chip wrap                    | Chip wrap rata tengah                                             |
| **Pengalaman** | Kartu 1 kolom                        | 1 kolom                      | 1 kolom `max-w-4xl`                                               |
| **Organisasi** | Kartu 1 kolom                        | 1 kolom                      | 1 kolom `max-w-4xl`                                               |
| **Sertifikat** | Grid 1 kolom                         | 2 kolom                      | 3 kolom                                                           |

### Profil

Label kecil "HALO, PERKENALKAN SAYA" (uppercase, tracking lebar) → `h1` nama → posisi diminati → deskripsi (maks. ~5 baris). Tombol: **Unduh CV** (primary), **Hubungi Saya** (outline, `mailto:`), lalu ikon bulat LinkedIn dan Instagram. Foto: `next/image`, `priority`, WebP/AVIF, `sizes` responsif.

### Kartu Pendidikan / Pengalaman / Organisasi

Komponen kartu yang sama (`Card`): ikon/logo bulat kiri, judul instansi, periode (badge di kanan atas; pada mobile pindah ke bawah judul), baris alamat (ikon `MapPin`), baris program studi/divisi (ikon), bullet jobdesk (pengalaman & organisasi), badge teknologi/alat bila ada.

### Keahlian

`Badge` pill dengan ikon opsional, `border-2`, `rounded-full`. Statis (tanpa marquee demi performa dan aksesibilitas).

### Sertifikat

`Card`: thumbnail (rasio 4:3, `object-cover`, `loading="lazy"`), nama, deskripsi 2 baris (`line-clamp-2`), tombol **Lihat Detail**.
**Dialog detail** (shadcn Dialog): overlay `bg-black/70`, konten `max-w-[95vw] md:max-w-3xl max-h-[90vh]`, gambar penuh `object-contain` (dimuat saat dibuka), judul + deskripsi di bawah gambar, tombol tutup (X, `aria-label="Tutup"`), `Esc`/klik overlay menutup, focus trap & fokus kembali ke pemicu.

## 7. Komponen shadcn yang Dipakai

`Button`, `Badge`, `Card`, `Dialog`. Komponen lain tidak ditambahkan kecuali dibutuhkan (menjaga bundle kecil).

Varian tombol: `default` (latar `foreground`, teks putih), `outline` (border-2), `icon` (bulat 44px). Semua dengan `focus-visible:ring-2 ring-primary ring-offset-2`.

## 8. Gerak (Motion)

- Hover kartu/tombol: transisi 150–200 ms (transform/shadow saja)
- Animasi masuk halus (fade/translate-y 8px, sekali) opsional; **dinonaktifkan** bila `prefers-reduced-motion`
- Tanpa library animasi tambahan; gunakan CSS/Tailwind

## 9. Gambar & Aset

| Aset                    | Format       | Ukuran maks.           |
| ----------------------- | ------------ | ---------------------- |
| Foto profil             | WebP/AVIF    | ≤ 120 KB, lebar 800px  |
| Thumbnail sertifikat    | WebP         | ≤ 40 KB, lebar 480px   |
| Gambar penuh sertifikat | WebP         | ≤ 250 KB, lebar 1600px |
| Ikon                    | SVG (lucide) | –                      |

`images.unoptimized: true` (wajib pada static export); optimasi dilakukan sebelum commit. Selalu tentukan `width`/`height` untuk mencegah CLS. Hapus EXIF.

## 10. Aksesibilitas Ringkas

Skip link "Lewati ke konten"; urutan heading logis (`h1` → `h2` per section); `alt` deskriptif; fokus terlihat; kontras AA; target sentuh ≥ 44px; navbar ikon memiliki nama aksesibel.

## 11. Definisi Selesai (Desain)

- [ ] Navbar atas (≥768) dan bawah (<768) sesuai spesifikasi
- [ ] Enam section tampil benar di 360 / 768 / 1024 / 1440px tanpa scroll horizontal
- [ ] Modal sertifikat berfungsi (tombol, overlay, `Esc`, fokus)
- [ ] Semua warna/ukuran berasal dari token
- [ ] Lighthouse mobile ≥ 90 di semua kategori
