"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { EDUCATION_DATA, EDUCATION_SECTION } from "@/data/education";
import { SectionHeader } from "@/components/ui/section-header";
import { TimelineCard } from "@/components/ui/timeline-card";

export function EducationSection() {
  const { language } = useLanguage();
  const section = EDUCATION_SECTION[language];
  const items = EDUCATION_DATA[language];

  return (
    <section
      id="pendidikan"
      aria-labelledby="pendidikan-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader title={section.title} subtitle={section.subtitle} />

        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {items.map((item) => (
            <TimelineCard
              key={item.id}
              icon={<GraduationCap className="size-6" aria-hidden="true" />}
              title={item.institution}
              role={`${item.degree} — ${item.major}`}
              roleIcon={<BookOpen className="size-4" aria-hidden="true" />}
              location={item.location}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
