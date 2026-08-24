import { useLanguageStore, translations } from "@/stores/language.store";

export interface UseHeroSectionReturn {
  language: "en" | "bn";
  t: (typeof translations)["en"]["hero"];
}

export function useHeroSection(): UseHeroSectionReturn {
  const { language } = useLanguageStore();
  const t = translations[language].hero;

  return {
    language,
    t,
  };
}
