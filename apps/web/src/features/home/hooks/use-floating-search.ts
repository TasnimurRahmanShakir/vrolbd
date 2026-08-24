import React, { useState, useMemo } from "react";
import { ComboboxOption } from "@/components/ui/combobox";
import { useLanguageStore } from "@/stores/language.store";
import {
  RAW_COUNTRIES,
  RAW_INDUSTRIES,
  RAW_SKILL_LEVELS,
} from "../data/search-options.data";

export interface UseFloatingSearchReturn {
  language: string;
  country: string;
  setCountry: (value: string) => void;
  industry: string;
  setIndustry: (value: string) => void;
  skillLevel: string;
  setSkillLevel: (value: string) => void;
  countryOptions: ComboboxOption[];
  industryOptions: ComboboxOption[];
  skillOptions: ComboboxOption[];
  handleSearch: (e: React.FormEvent) => void;
}

export function useFloatingSearch(): UseFloatingSearchReturn {
  const { language } = useLanguageStore();
  const [country, setCountry] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [skillLevel, setSkillLevel] = useState("All");

  const countryOptions: ComboboxOption[] = useMemo(
    () =>
      RAW_COUNTRIES.map((c) => ({
        value: c.value,
        label: language === "bn" ? c.labelBn : c.labelEn,
        subLabel: c.subLabelEn,
        icon: c.icon,
      })),
    [language]
  );

  const industryOptions: ComboboxOption[] = useMemo(
    () =>
      RAW_INDUSTRIES.map((i) => ({
        value: i.value,
        label: language === "bn" ? i.labelBn : i.labelEn,
        subLabel: i.subLabelEn,
        icon: i.icon,
      })),
    [language]
  );

  const skillOptions: ComboboxOption[] = useMemo(
    () =>
      RAW_SKILL_LEVELS.map((s) => ({
        value: s.value,
        label: language === "bn" ? s.labelBn : s.labelEn,
        subLabel: s.subLabelEn,
        icon: s.icon,
      })),
    [language]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const opportunitiesSection = document.getElementById("opportunities");
    if (opportunitiesSection) {
      opportunitiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    language,
    country,
    setCountry,
    industry,
    setIndustry,
    skillLevel,
    setSkillLevel,
    countryOptions,
    industryOptions,
    skillOptions,
    handleSearch,
  };
}
