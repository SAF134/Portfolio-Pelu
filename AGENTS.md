# AGENTS.md

Website portofolio statis (landing page, 6 section). Baca `PRD.md` (apa yang dibangun) dan `DESIGN.md` (tampilan) sebelum mengerjakan tugas. Jika ada konflik, `PRD.md` menang.

## Stack

Next.js (App Router, `output: 'export'`) · TypeScript strict · Tailwind CSS · shadcn/ui · lucide-react · Deploy: Vercel (repo GitHub)

## Perintah

- `npm run dev` jalankan lokal
- `npm run lint` · `npm run typecheck` · `npm run build` (wajib lulus sebelum selesai)

## Struktur

- `src/app/` layout & halaman tunggal
- `src/components/ui/` shadcn · `layout/` navbar, footer · `sections/` 6 section
- `src/data/` seluruh konten (profile, education, skills, experience, organizations, certificates, navigation)
- `src/types/` tipe data · `src/hooks/` · `src/lib/`
- `public/` aset statis (cv, images)

## Aturan Wajib

1. **Konten hanya dari `src/data/`**, jangan tulis teks konten langsung di JSX. Bahasa Indonesia saja.
2. **Hanya tema terang**, tanpa dark mode, tanpa multi-bahasa, tanpa section Proyek.
3. **Navbar:** ≥768px di atas (ikon + nama); <768px di bawah (hanya ikon + `aria-label`).
4. **Static export:** jangan pakai API route, Server Actions, middleware, `next/image` optimizer (`unoptimized: true`), atau fitur yang butuh server.
5. **Server Component default**; `"use client"` hanya untuk navbar (scroll-spy) dan dialog sertifikat.
6. **Ringan:** jangan tambah dependensi tanpa alasan kuat; tanpa library animasi; gambar WebP/AVIF dengan `width`/`height`; gambar bawah fold `loading="lazy"`.
7. **shadcn:** hanya `Button`, `Badge`, `Card`, `Dialog`; tambah komponen lain hanya bila perlu.
8. **Styling:** gunakan token di `globals.css` / Tailwind, tanpa warna atau ukuran acak.

## Keamanan

- Jangan commit secret, `.env*`, atau data pribadi (telepon, alamat rumah, nomor ID).
- Tautan eksternal: `target="_blank" rel="noopener noreferrer"`.
- Jangan gunakan `dangerouslySetInnerHTML` atau inline script; header keamanan dikelola di `vercel.json`.
- Tidak ada form/input pengguna.

## Gaya Kode

- File `kebab-case`, komponen `PascalCase`, hook `useXxx`, konstanta `UPPER_SNAKE_CASE`
- Satu komponen per file; impor lewat alias `@/*`; hindari `any`
- Format: Prettier + `prettier-plugin-tailwindcss`; lint: ESLint `next/core-web-vitals`
- Aksesibilitas: HTML semantik, `alt` pada gambar, fokus terlihat, target sentuh ≥ 44px

## Cara Kerja

- Kerjakan satu fitur/section per tugas; ubah seminimal mungkin.
- Jangan buat file/dokumen baru yang tidak diminta (termasuk markdown tambahan).
- Jalankan `lint`, `typecheck`, `build` sebelum menyatakan selesai.
- Commit mengikuti Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
- Jika spesifikasi tidak jelas, tanya; jangan berasumsi.
