import { useState } from "react";
import { useLanguageStore, translations } from "@/stores/language.store";

export interface UseHeaderReturn {
  language: "en" | "bn";
  toggleLanguage: () => void;
  t: (typeof translations)["en"]["nav"];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  authModalState: {
    isOpen: boolean;
    mode: "login" | "register";
  };
  handleOpenAuth: (mode: "login" | "register") => void;
  handleCloseAuth: () => void;
}

export function useHeader(): UseHeaderReturn {
  const { language, toggleLanguage } = useLanguageStore();
  const t = translations[language].nav;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{
    isOpen: boolean;
    mode: "login" | "register";
  }>({
    isOpen: false,
    mode: "login",
  });

  const handleOpenAuth = (mode: "login" | "register") => {
    setAuthModalState({ isOpen: true, mode });
    setMobileMenuOpen(false);
  };

  const handleCloseAuth = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return {
    language,
    toggleLanguage,
    t,
    mobileMenuOpen,
    setMobileMenuOpen,
    authModalState,
    handleOpenAuth,
    handleCloseAuth,
  };
}
