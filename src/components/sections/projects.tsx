import { FolderKanban, Briefcase, ExternalLink } from "lucide-react";
import { PROJECTS_DATA, PROJECTS_SECTION } from "@/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { TimelineCard } from "@/components/ui/timeline-card";

export function ProjectsSection() {
  const section = PROJECTS_SECTION;
  const items = PROJECTS_DATA;

  return (
    <section
      id="proyek"
      aria-labelledby="proyek-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader title={section.title} subtitle={section.subtitle} />

        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {items.map((item) => (
            <TimelineCard
              key={item.id}
              icon={<FolderKanban className="size-6" aria-hidden="true" />}
              title={item.title}
              role={item.role}
              roleIcon={<Briefcase className="size-4" aria-hidden="true" />}
              period={item.period}
              description={item.description}
              points={item.points}
              tags={item.technologies}
              action={
                item.projectUrl ? (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex h-9 items-center justify-center gap-2 rounded-full border-2 px-4 text-xs font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:text-sm"
                  >
                    <ExternalLink
                      className="size-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{section.proofButtonText}</span>
                  </a>
                ) : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
