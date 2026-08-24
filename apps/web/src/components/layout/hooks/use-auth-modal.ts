import { useState, useEffect } from "react";
import { useLanguageStore, translations } from "@/stores/language.store";

export interface UseAuthModalProps {
  isOpen: boolean;
  initialMode?: "login" | "register";
  onClose: () => void;
}

export interface UseAuthModalReturn {
  mode: "login" | "register";
  setMode: React.Dispatch<React.SetStateAction<"login" | "register">>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  submitted: boolean;
  t: (typeof translations)["en"]["auth"];
  handleSubmit: (e: React.FormEvent) => void;
}

export function useAuthModal({
  isOpen,
  initialMode = "login",
  onClose,
}: UseAuthModalProps): UseAuthModalReturn {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { language } = useLanguageStore();
  const t = translations[language].auth;

  useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
  }, [initialMode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 1500);
  };

  return {
    mode,
    setMode,
    email,
    setEmail,
    password,
    setPassword,
    fullName,
    setFullName,
    phone,
    setPhone,
    submitted,
    t,
    handleSubmit,
  };
}
