import { useState } from "react";
import { useLanguageStore, translations } from "@/stores/language.store";

export type GatewayTab = "employer" | "candidate";

export interface UseHeroSectionReturn {
  language: "en" | "bn";
  t: (typeof translations)["en"]["hero"];
  activeGatewayTab: GatewayTab;
  setActiveGatewayTab: (tab: GatewayTab) => void;
  handleGatewayAction: () => void;
}

export function useHeroSection(): UseHeroSectionReturn {
  const { language } = useLanguageStore();
  const t = translations[language].hero;
  const [activeGatewayTab, setActiveGatewayTab] = useState<GatewayTab>("employer");

  const handleGatewayAction = () => {
    if (activeGatewayTab === "employer") {
      const b2b = document.getElementById("b2b-gateway");
      if (b2b) b2b.scrollIntoView({ behavior: "smooth" });
    } else {
      const opps = document.getElementById("opportunities");
      if (opps) opps.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    language,
    t,
    activeGatewayTab,
    setActiveGatewayTab,
    handleGatewayAction,
  };
}
