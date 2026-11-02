import { SKILLS_DATA, SKILLS_SECTION } from "@/data/skills";
import { SectionHeader } from "@/components/ui/section-header";

export function SkillsSection() {
  const section = SKILLS_SECTION;
  const items = SKILLS_DATA;

  return (
    <section
      id="keahlian"
      aria-labelledby="keahlian-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader title={section.title} subtitle={section.subtitle} />

        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 md:gap-4">
          {items.map((skill) => (
            <div
              key={skill.id}
              className="group border-border bg-card text-foreground hover:border-primary inline-flex cursor-default items-center gap-2.5 rounded-full border-2 px-4 py-2.5 text-sm font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_var(--border)] md:px-5 md:py-3 md:text-base"
            >
              <span
                className="bg-primary size-2 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125"
                aria-hidden="true"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
