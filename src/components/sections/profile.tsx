import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function ProfileSection() {
  return (
    <section
      id="profil"
      aria-labelledby="profil-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Seluruh profil disatukan ke dalam satu kartu terpadu */}
        <div className="border-border bg-card rounded-2xl border-2 p-6 shadow-[4px_4px_0_0_var(--border)] transition-all hover:shadow-[6px_6px_0_0_var(--border)] md:p-8 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-5 lg:gap-12">
            {/* Teks Profil (Desktop/Tablet: kiri 3/5, Mobile: bawah) */}
            <div className="order-2 flex flex-col items-center gap-4 text-center md:order-1 md:col-span-3 md:items-start md:text-left">
              <span className="text-primary text-xs font-bold tracking-widest uppercase md:text-sm">
                {PROFILE_DATA.greeting}
              </span>

              {/* Nama lengkap dan gelar dibuat sejajar tidak turun ke bawah dengan font proporsional */}
              <h1
                id="profil-heading"
                className="text-foreground text-lg font-bold tracking-tight min-[380px]:text-xl sm:text-2xl md:text-[22px] md:whitespace-nowrap lg:text-[28px] xl:text-3xl"
              >
                {PROFILE_DATA.name}
              </h1>

              <p className="text-primary text-base font-semibold md:text-lg">
                {PROFILE_DATA.role}
              </p>

              {/* Deskripsi Tentang Saya diformat rata kanan-kiri (justify) */}
              <p className="text-muted-foreground text-justify text-sm leading-relaxed md:text-base">
                {PROFILE_DATA.description}
              </p>

              {/* Tombol Aksi & Media Sosial */}
              <div className="flex w-full flex-col gap-3 pt-2">
                {/* Baris 1: Tombol Unduh CV dan Hubungi Saya */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <a
                    href={PROFILE_DATA.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border bg-primary text-primary-foreground focus-visible:ring-primary inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 px-6 text-sm font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <Download className="size-4 shrink-0" aria-hidden="true" />
                    <span>{PROFILE_DATA.cvButtonText}</span>
                  </a>

                  <a
                    href={PROFILE_DATA.email}
                    className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 px-6 text-sm font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden="true" />
                    <span>{PROFILE_DATA.contactButtonText}</span>
                  </a>
                </div>

                {/* Baris 2: Tombol LinkedIn dan Instagram diposisikan tepat di bawahnya */}
                <div className="flex items-center justify-center gap-3 pt-1 md:justify-start">
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={PROFILE_DATA.linkedinAriaLabel}
                    className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex size-11 items-center justify-center rounded-full border-2 shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <LinkedinIcon className="size-5 shrink-0" />
                  </a>

                  <a
                    href={PROFILE_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={PROFILE_DATA.instagramAriaLabel}
                    className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex size-11 items-center justify-center rounded-full border-2 shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <InstagramIcon className="size-5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Foto Profil (Desktop/Tablet: kanan 2/5, Mobile: atas) */}
            <div className="order-1 flex justify-center md:order-2 md:col-span-2 md:justify-end">
              <div className="relative">
                <Image
                  src={PROFILE_DATA.avatarUrl}
                  alt={PROFILE_DATA.avatarAlt}
                  width={400}
                  height={500}
                  priority
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                  className="border-border aspect-[4/5] w-full max-w-[240px] rounded-xl border-2 object-cover shadow-[4px_4px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--border)] sm:max-w-[280px] md:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
