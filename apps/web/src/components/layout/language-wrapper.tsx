"use client";

import React, { useEffect } from "react";
import { useLanguageStore } from "@/stores/language.store";

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguageStore();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-lang", language);
  }, [language]);

  return (
    <div
      data-lang={language}
      className={language === "bn" ? "font-bengali" : ""}
    >
      {children}
    </div>
  );
}
