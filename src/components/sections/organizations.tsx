import { Users, Shield } from "lucide-react";
import {
  ORGANIZATIONS_DATA,
  ORGANIZATIONS_SECTION,
} from "@/data/organizations";
import { SectionHeader } from "@/components/ui/section-header";
import { TimelineCard } from "@/components/ui/timeline-card";

export function OrganizationsSection() {
  const section = ORGANIZATIONS_SECTION;
  const items = ORGANIZATIONS_DATA;

  return (
    <section
      id="organisasi"
      aria-labelledby="organisasi-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader title={section.title} subtitle={section.subtitle} />

        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {items.map((item) => (
            <TimelineCard
              key={item.id}
              icon={<Users className="size-6" aria-hidden="true" />}
              title={item.organization}
              role={item.role}
              roleIcon={<Shield className="size-4" aria-hidden="true" />}
              period={item.period}
              points={item.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
