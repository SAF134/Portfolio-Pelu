"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ProjectItem } from "@/types";
import { useLanguage } from "@/context/language-context";
import { PROJECTS_SECTION } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectDialogProps {
  project: ProjectItem;
}

export function ProjectDialog({ project }: ProjectDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const section = PROJECTS_SECTION[language];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Tombol Lihat Detail Berwarna Biru (Primary) */}
      <DialogTrigger
        render={
          <Button className="border-border bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary w-full rounded-full border-2 text-sm font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none" />
        }
      >
        {section.viewDetailText}
      </DialogTrigger>

      <DialogContent className="border-border bg-card max-h-[90vh] max-w-[95vw] overflow-y-auto rounded-2xl border-2 p-5 shadow-[6px_6px_0_0_var(--border)] md:max-w-3xl md:p-6">
        {isOpen && (
          <div className="flex flex-col gap-4">
            {/* Pratinjau Gambar Resolusi Penuh dengan Format Rasio 4:3 */}
            <div className="border-border bg-muted/30 relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 p-2">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={960}
                height={720}
                className="size-full rounded-lg object-contain"
              />
            </div>

            {/* Informasi Detail */}
            <DialogHeader className="gap-3 text-left">
              <DialogTitle className="text-foreground text-lg font-bold md:text-xl">
                {project.title}
              </DialogTitle>

              {/* Deskripsi Proyek Diformat Rata Kanan-Kiri (Justify) */}
              <DialogDescription className="text-foreground/90 text-justify text-sm leading-relaxed md:text-base">
                {project.description}
              </DialogDescription>

              {/* Tombol Tautan Bukti Proyek di dalam Dialog */}
              <div className="pt-2">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex h-10 items-center justify-center gap-2 rounded-full border-2 px-5 text-sm font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <span>{section.visitUrlText}</span>
                  <ExternalLink
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </DialogHeader>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
