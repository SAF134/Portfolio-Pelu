import { FolderKanban, Briefcase } from "lucide-react";
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
