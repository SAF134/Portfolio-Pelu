"use client";

import { useMemo } from "react";
import {
  User,
  GraduationCap,
  Wrench,
  Briefcase,
  Users,
  FolderKanban,
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
  FolderKanban,
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
      {/* Desktop & Tablet Navbar (>= 768px) */}
      <nav
        aria-label="Navigasi Utama Desktop"
        className="border-border bg-card/95 fixed top-0 right-0 left-0 z-50 hidden border-b-2 shadow-[0_2px_0_0_var(--border)] backdrop-blur-md md:flex"
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
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
                    "focus-visible:ring-primary inline-flex h-9 items-center gap-1.5 rounded-full border-2 px-2.5 text-xs font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none lg:h-10 lg:gap-2 lg:px-3.5 lg:text-sm",
                    isActive
                      ? "border-border bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--border)]"
                      : "text-foreground hover:border-border hover:bg-muted border-transparent hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--border)]"
                  )}
                >
                  <Icon
                    className="size-4 shrink-0 lg:size-[18px]"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (< 768px) */}
      <nav
        aria-label="Navigasi Utama Ponsel"
        className="border-border bg-card/95 fixed right-0 bottom-0 left-0 z-50 border-t-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        <div className="mx-auto flex h-16 w-full max-w-md items-center justify-around px-2">
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
                  "focus-visible:ring-primary relative flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl p-2 transition-all focus-visible:ring-2 focus-visible:outline-none",
                  isActive
                    ? "border-border bg-primary text-primary-foreground -translate-y-0.5 border-2 shadow-[2px_2px_0_0_var(--border)]"
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground border-2 border-transparent"
                )}
              >
                <Icon className="size-5 shrink-0" aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
