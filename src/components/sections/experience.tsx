import { Briefcase, Building2 } from "lucide-react";
import { EXPERIENCE_DATA, EXPERIENCE_SECTION } from "@/data/experience";
import { SectionHeader } from "@/components/ui/section-header";
import { TimelineCard } from "@/components/ui/timeline-card";

export function ExperienceSection() {
  return (
    <section
      id="pengalaman"
      aria-labelledby="pengalaman-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title={EXPERIENCE_SECTION.title}
          subtitle={EXPERIENCE_SECTION.subtitle}
        />

        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {EXPERIENCE_DATA.map((item) => (
            <TimelineCard
              key={item.id}
              icon={<Briefcase className="size-6" aria-hidden="true" />}
              title={item.company}
              role={item.role}
              roleIcon={<Building2 className="size-4" aria-hidden="true" />}
              location={item.location}
              period={item.period}
              points={item.points}
              tags={item.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
