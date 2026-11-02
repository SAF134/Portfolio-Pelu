import Image from "next/image";
import { CERTIFICATES_DATA, CERTIFICATES_SECTION } from "@/data/certificates";
import { SectionHeader } from "@/components/ui/section-header";
import { CertificateDialog } from "@/components/sections/certificate-dialog";

export function CertificatesSection() {
  const section = CERTIFICATES_SECTION;
  const items = CERTIFICATES_DATA;

  return (
    <section
      id="sertifikat"
      aria-labelledby="sertifikat-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader title={section.title} subtitle={section.subtitle} />

        {/* Grid Sertifikat: 1 kolom (mobile), 2 kolom (tablet), 3 kolom (desktop) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group border-border bg-card flex flex-col justify-between rounded-2xl border-2 p-4 shadow-[4px_4px_0_0_var(--border)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--border)] md:p-5"
            >
              <div className="flex flex-col gap-3">
                {/* Thumbnail Sertifikat (Format rasio 4:3, lazy load) */}
                <div className="border-border bg-muted/40 relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    width={640}
                    height={480}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info Sertifikat */}
                <div className="flex flex-col gap-1.5 pt-1">
                  {/* Nama Sertifikat */}
                  <h3
                    title={item.title}
                    className="text-foreground line-clamp-2 text-base font-bold md:text-lg"
                  >
                    {item.title}
                  </h3>

                  {/* Nama Penyelenggara di bawah Nama Sertifikat */}
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-semibold">
                    <span className="text-primary">{item.issuer}</span>
                    <span className="text-muted-foreground shrink-0">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tombol Pemicu Dialog Detail (Warna Biru) */}
              <div className="pt-4">
                <CertificateDialog certificate={item} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
