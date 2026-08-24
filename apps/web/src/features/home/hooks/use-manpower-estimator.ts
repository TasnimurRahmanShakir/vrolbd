import { useState, useMemo, useEffect } from "react";
import { useLanguageStore, translations } from "@/stores/language.store";
import {
  ESTIMATOR_TRADES,
  ESTIMATOR_COUNTRIES,
  EstimatorTradeBenchmark,
  EstimatorCountryBenchmark,
} from "../data/estimator-benchmarks.data";
import { ComboboxOption } from "@/components/ui/combobox";

export interface UseManpowerEstimatorReturn {
  countryKey: string;
  setCountryKey: (val: string) => void;
  tradeKey: string;
  setTradeKey: (val: string) => void;
  headcount: number;
  setHeadcount: (val: number) => void;
  countryOptions: ComboboxOption[];
  tradeOptions: ComboboxOption[];
  isScanning: boolean;
  computedDays: number;
  readyDossiers: number;
  dailyTestingCapacity: number;
  triggerRecalculate: () => void;
  language: "en" | "bn";
  t: (typeof translations)["en"]["estimator"];
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  handleRequestQuote: () => void;
}

export function useManpowerEstimator(): UseManpowerEstimatorReturn {
  const { language } = useLanguageStore();
  const t = translations[language].estimator;

  const [countryKey, setCountryKey] = useState("ksa");
  const [tradeKey, setTradeKey] = useState("welders_fabricators");
  const [headcount, setHeadcount] = useState(150);
  const [isScanning, setIsScanning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const countryOptions: ComboboxOption[] = useMemo(
    () =>
      ESTIMATOR_COUNTRIES.map((c) => ({
        value: c.countryKey,
        label: language === "bn" ? c.labelBn : c.labelEn,
        subLabel: c.consularSystem,
        icon: "public",
      })),
    [language]
  );

  const tradeOptions: ComboboxOption[] = useMemo(
    () =>
      ESTIMATOR_TRADES.map((tr) => ({
        value: tr.tradeKey,
        label: language === "bn" ? tr.labelBn : tr.labelEn,
        icon: "construction",
      })),
    [language]
  );

  const defaultCountry: EstimatorCountryBenchmark = ESTIMATOR_COUNTRIES[0]!;
  const defaultTrade: EstimatorTradeBenchmark = ESTIMATOR_TRADES[0]!;

  const selectedCountry: EstimatorCountryBenchmark = useMemo(
    () => ESTIMATOR_COUNTRIES.find((c) => c.countryKey === countryKey) ?? defaultCountry,
    [countryKey, defaultCountry]
  );

  const selectedTrade: EstimatorTradeBenchmark = useMemo(
    () => ESTIMATOR_TRADES.find((tr) => tr.tradeKey === tradeKey) ?? defaultTrade,
    [tradeKey, defaultTrade]
  );

  const computedDays = useMemo(() => {
    const volumeFactor = headcount > 500 ? 1.3 : headcount > 200 ? 1.15 : 1.0;
    const days = Math.round(selectedTrade.baseDays * selectedCountry.visaSpeedFactor * volumeFactor);
    return Math.max(10, days);
  }, [selectedCountry, selectedTrade, headcount]);

  const readyDossiers = useMemo(() => {
    return Math.max(headcount * 2, selectedTrade.readyDossiers);
  }, [selectedTrade, headcount]);

  const dailyTestingCapacity = useMemo(() => {
    return selectedTrade.dailyTestCap;
  }, [selectedTrade]);

  const triggerRecalculate = () => {
    setIsScanning(true);
    const timer = setTimeout(() => {
      setIsScanning(false);
    }, 1200);
    return () => clearTimeout(timer);
  };

  const handleRequestQuote = () => {
    const opportunitiesSection = document.getElementById("b2b-gateway");
    if (opportunitiesSection) {
      opportunitiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    countryKey,
    setCountryKey,
    tradeKey,
    setTradeKey,
    headcount,
    setHeadcount,
    countryOptions,
    tradeOptions,
    isScanning,
    computedDays,
    readyDossiers,
    dailyTestingCapacity,
    triggerRecalculate,
    language,
    t,
    isModalOpen,
    setIsModalOpen,
    handleRequestQuote,
  };
}
