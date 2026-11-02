"use client";

import { useState } from "react";
import Image from "next/image";
import { CertificateItem } from "@/types";
import { CERTIFICATES_SECTION } from "@/data/certificates";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CertificateDialogProps {
  certificate: CertificateItem;
}

export function CertificateDialog({ certificate }: CertificateDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const section = CERTIFICATES_SECTION;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Tombol Lihat Detail Berwarna Biru (Primary) */}
      <DialogTrigger
        render={
          <Button className="border-border bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary mt-auto w-full rounded-full border-2 text-sm font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none" />
        }
      >
        {section.viewDetailText}
      </DialogTrigger>

      <DialogContent className="border-border bg-card max-h-[90vh] max-w-[95vw] overflow-y-auto rounded-2xl border-2 p-5 shadow-[6px_6px_0_0_var(--border)] md:max-w-3xl md:p-6">
        {isOpen && (
          <div className="flex flex-col gap-4">
            {/* Pratinjau Gambar Resolusi Penuh dengan Format Rasio 4:3 (Dimuat saat dialog dibuka) */}
            <div className="border-border bg-muted/30 relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 p-2">
              <Image
                src={certificate.fullImageUrl}
                alt={certificate.title}
                width={960}
                height={720}
                className="size-full rounded-lg object-contain"
              />
            </div>

            {/* Informasi Detail */}
            <DialogHeader className="gap-2 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground text-xs font-medium">
                  {section.issuedByText}
                </span>
                <span className="text-primary text-xs font-bold">
                  {certificate.issuer}
                </span>
                <span
                  className="text-muted-foreground text-xs"
                  aria-hidden="true"
                >
                  •
                </span>
                <span className="text-muted-foreground text-xs font-semibold">
                  {certificate.date}
                </span>
              </div>

              <DialogTitle className="text-foreground text-lg font-bold md:text-xl">
                {certificate.title}
              </DialogTitle>

              {/* Deskripsi Sertifikat Diformat Rata Kanan-Kiri (Justify) */}
              <DialogDescription className="text-foreground/90 text-justify text-sm leading-relaxed md:text-base">
                {certificate.description}
              </DialogDescription>
            </DialogHeader>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
