"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Language {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "id" || saved === "en") return saved;
    }
  } catch {
    // Ignore restricted localStorage access
  }
  return "id";
}

function getServerSnapshot(): Language {
  return "id";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setLanguage = (lang: Language) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio_lang", lang);
        document.documentElement.lang = lang;
        window.dispatchEvent(new Event("storage"));
      }
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "id" as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
    };
  }
  return context;
}
