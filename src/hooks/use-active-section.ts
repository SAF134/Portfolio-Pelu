"use client";

import { useEffect, useState } from "react";
import { NavigationSectionId } from "@/types";

export function useActiveSection(
  sectionIds: NavigationSectionId[],
  initialSection: NavigationSectionId = "profil"
): NavigationSectionId {
  const [activeSection, setActiveSection] =
    useState<NavigationSectionId>(initialSection);

  useEffect(() => {
    const handleScroll = () => {
      // Cek apakah scroll berada di paling bawah halaman
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        const lastSection = sectionIds[sectionIds.length - 1];
        if (lastSection) {
          setActiveSection(lastSection);
        }
        return;
      }

      // Cek apakah berada di paling atas halaman
      if (window.scrollY < 100) {
        const firstSection = sectionIds[0];
        if (firstSection) {
          setActiveSection(firstSection);
        }
        return;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as NavigationSectionId);
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
