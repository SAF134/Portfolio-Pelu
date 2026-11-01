"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { PROJECTS_DATA, PROJECTS_SECTION } from "@/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectDialog } from "@/components/sections/project-dialog";

export function ProjectsSection() {
  const { language } = useLanguage();
  const section = PROJECTS_SECTION[language];
  const items = PROJECTS_DATA[language];

  return (
    <section
      id="proyek"
      aria-labelledby="proyek-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader title={section.title} subtitle={section.subtitle} />

        {/* Grid Proyek: 1 kolom (mobile), 2 kolom (tablet), 3 kolom (desktop) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group border-border bg-card flex flex-col justify-between rounded-2xl border-2 p-4 shadow-[4px_4px_0_0_var(--border)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--border)] md:p-5"
            >
              <div className="flex flex-col gap-3">
                {/* Thumbnail Gambar Proyek (Format Rasio 4:3, lazy load) */}
                <div className="border-border bg-muted/40 relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={640}
                    height={480}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info Proyek */}
                <div className="flex flex-col gap-2 pt-1">
                  {/* Nama Proyek */}
                  <h3
                    title={item.title}
                    className="text-foreground line-clamp-2 text-base font-bold md:text-lg"
                  >
                    {item.title}
                  </h3>

                  {/* Deskripsi Proyek Singkat (Rata Kanan-Kiri / Justify) */}
                  <p className="text-muted-foreground line-clamp-3 text-justify text-xs leading-relaxed md:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Tombol Aksi: Bukti Proyek & Lihat Detail */}
              <div className="flex flex-col gap-2.5 pt-5">
                {/* Tombol Bukti Proyek yang mengarahkan ke Link URL */}
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border-2 text-xs font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:text-sm"
                >
                  <ExternalLink
                    className="size-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{section.proofButtonText}</span>
                </a>

                {/* Tombol Lihat Detail (Membuka Dialog Modal) */}
                <ProjectDialog project={item} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
