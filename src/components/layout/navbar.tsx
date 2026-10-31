"use client";

import { useMemo } from "react";
import {
  User,
  GraduationCap,
  Wrench,
  Briefcase,
  Users,
  Award,
  type LucideIcon,
} from "lucide-react";
import { NAVIGATION_ITEMS } from "@/data/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { NavIconName, NavigationSectionId } from "@/types";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<NavIconName, LucideIcon> = {
  User,
  GraduationCap,
  Wrench,
  Briefcase,
  Users,
  Award,
};

export function Navbar() {
  const sectionIds = useMemo(() => NAVIGATION_ITEMS.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds, "profil");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: NavigationSectionId
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    targetElement.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    // Update URL hash without jumping
    window.history.pushState(null, "", `#${targetId}`);
  };

  return (
    <header>
      {/* Desktop & Tablet Navbar (>= 768px) - Membentang penuh dari ujung ke ujung */}
      <nav
        aria-label="Navigasi Utama Desktop"
        className="border-border bg-card/95 fixed top-0 right-0 left-0 z-50 hidden border-b-2 shadow-[0_2px_0_0_var(--border)] backdrop-blur-md md:flex"
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-around px-4 md:px-6 lg:px-8">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.iconName];
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "focus-visible:ring-primary flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none lg:px-5 lg:text-sm",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="size-[18px] shrink-0" aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navbar (< 768px) */}
      <nav
        aria-label="Navigasi Utama Ponsel"
        className="border-border bg-card/95 fixed right-0 bottom-0 left-0 z-50 border-t-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        <div className="flex h-16 items-center justify-around px-2">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.iconName];
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "focus-visible:ring-primary relative flex min-h-[44px] min-w-[44px] flex-col items-center justify-center rounded-lg p-2 transition-colors focus-visible:ring-2 focus-visible:outline-none",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Active indicator top bar */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="bg-primary absolute top-0 right-2 left-2 h-0.5 rounded-full"
                  />
                )}
                <Icon className="size-6 shrink-0" aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
