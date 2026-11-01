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
  Languages,
  type LucideIcon,
} from "lucide-react";
import { NAVIGATION_ITEMS } from "@/data/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLanguage } from "@/context/language-context";
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
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const currentNavItems = NAVIGATION_ITEMS[language];

  const sectionIds = useMemo(
    () => currentNavItems.map((item) => item.id),
    [currentNavItems]
  );
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
      {/* Desktop & Tablet Navbar (>= 768px) - Proporsional untuk layar tablet (768px) & desktop */}
      <nav
        aria-label={
          language === "id"
            ? "Navigasi Utama Desktop"
            : "Desktop Main Navigation"
        }
        className="border-border bg-card/95 fixed top-0 right-0 left-0 z-50 hidden border-b-2 shadow-[0_2px_0_0_var(--border)] backdrop-blur-md md:flex"
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-2 md:px-3 lg:px-6">
          <div className="flex items-center gap-0.5 md:gap-1 lg:gap-1.5 xl:gap-2">
            {currentNavItems.map((item) => {
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
                    "focus-visible:ring-primary inline-flex h-9 items-center gap-1 rounded-full border-2 px-1.5 text-[11px] font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:h-9 md:gap-1 md:px-2 md:text-[11px] lg:h-10 lg:gap-1.5 lg:px-3 lg:text-xs xl:gap-2 xl:px-3.5 xl:text-sm",
                    isActive
                      ? "border-border bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--border)]"
                      : "text-foreground hover:border-border hover:bg-muted border-transparent hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--border)]"
                  )}
                >
                  <Icon
                    className="size-3.5 shrink-0 lg:size-4 xl:size-[18px]"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </a>
              );
            })}

            {/* Garis Pemisah Halus Tepat Sebelum Tombol Bahasa */}
            <div
              className="bg-border/30 mx-0.5 h-5 w-0.5 shrink-0 rounded-full md:mx-1 md:h-6"
              aria-hidden="true"
            />

            {/* Tombol Pengubah Bahasa Tepat di Sebelah Kanan Tombol Sertifikat */}
            <div
              className="border-border bg-card flex shrink-0 items-center rounded-full border-2 p-0.5 shadow-[2px_2px_0_0_var(--border)]"
              role="group"
              aria-label={
                language === "id" ? "Pilihan Bahasa" : "Language Selector"
              }
            >
              <button
                type="button"
                onClick={() => setLanguage("id")}
                aria-label="Bahasa Indonesia"
                aria-pressed={language === "id"}
                className={cn(
                  "focus-visible:ring-primary cursor-pointer rounded-full px-2 py-0.5 text-[11px] font-extrabold transition-all focus-visible:ring-2 focus-visible:outline-none md:px-2.5 md:py-1 md:text-xs",
                  language === "id"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-label="English Language"
                aria-pressed={language === "en"}
                className={cn(
                  "focus-visible:ring-primary cursor-pointer rounded-full px-2 py-0.5 text-[11px] font-extrabold transition-all focus-visible:ring-2 focus-visible:outline-none md:px-2.5 md:py-1 md:text-xs",
                  language === "en"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (< 768px) */}
      <nav
        aria-label={
          language === "id" ? "Navigasi Utama Ponsel" : "Mobile Main Navigation"
        }
        className="border-border bg-card/95 fixed right-0 bottom-0 left-0 z-50 border-t-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        <div className="mx-auto flex h-16 w-full max-w-md items-center justify-between px-2">
          {currentNavItems.map((item) => {
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
                  "focus-visible:ring-primary flex min-h-[44px] min-w-[36px] items-center justify-center rounded-xl p-1 transition-all focus-visible:ring-2 focus-visible:outline-none sm:min-w-[40px]",
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

          {/* Garis Pemisah Halus di Mobile */}
          <div
            className="bg-border/30 h-5 w-[1.5px] shrink-0 rounded-full"
            aria-hidden="true"
          />

          {/* Tombol Ganti Bahasa Ponsel di sebelah kanan tombol Sertifikat */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === "id"
                ? "Ganti ke Bahasa Inggris"
                : "Switch to Indonesian"
            }
            className="focus-visible:ring-primary text-muted-foreground hover:bg-muted/80 hover:text-foreground flex min-h-[44px] min-w-[36px] items-center justify-center rounded-xl border-2 border-transparent p-1 transition-all focus-visible:ring-2 focus-visible:outline-none active:scale-95 sm:min-w-[40px]"
          >
            <Languages className="size-5 shrink-0" aria-hidden="true" />
            <span className="sr-only">
              {language === "id"
                ? "Ganti ke Bahasa Inggris"
                : "Switch to Indonesian"}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
