export interface EstimatorTradeBenchmark {
  tradeKey: string;
  labelEn: string;
  labelBn: string;
  baseDays: number;
  readyDossiers: number;
  dailyTestCap: number;
}

export interface EstimatorCountryBenchmark {
  countryKey: string;
  labelEn: string;
  labelBn: string;
  visaSpeedFactor: number;
  consularSystem: string;
}

export const ESTIMATOR_TRADES: EstimatorTradeBenchmark[] = [
  {
    tradeKey: "welders_fabricators",
    labelEn: "6G Pipe Welders & Structural Fabricators",
    labelBn: "৬জি পাইপ ওয়েল্ডার ও ফ্যাব্রিকেটর",
    baseDays: 14,
    readyDossiers: 1250,
    dailyTestCap: 80,
  },
  {
    tradeKey: "electricians_mep",
    labelEn: "Industrial Electricians & MEP Technicians",
    labelBn: "ইন্ডাস্ট্রিয়াল ইলেকট্রিশিয়ান ও এমইপি",
    baseDays: 15,
    readyDossiers: 940,
    dailyTestCap: 60,
  },
  {
    tradeKey: "hospitality_culinary",
    labelEn: "5-Star Hotel Chefs & F&B Service Staff",
    labelBn: "শেফ, ওয়েটার ও হসপিটালিটি টিম",
    baseDays: 12,
    readyDossiers: 680,
    dailyTestCap: 45,
  },
  {
    tradeKey: "nurses_clinical",
    labelEn: "Registered Nurses & Clinical Support",
    labelBn: "রেজিস্টার্ড নার্স ও স্বাস্থ্যকর্মী",
    baseDays: 20,
    readyDossiers: 420,
    dailyTestCap: 30,
  },
  {
    tradeKey: "general_skilled",
    labelEn: "General Construction Workforce & Riggers",
    labelBn: "সাধারণ দক্ষ নির্মাণ কর্মী ও রিগার",
    baseDays: 10,
    readyDossiers: 3200,
    dailyTestCap: 150,
  },
  {
    tradeKey: "heavy_drivers",
    labelEn: "GCC License Heavy Trailer & Crane Operators",
    labelBn: "হেভি ট্রেলার ড্রাইভার ও ক্রেন অপারেটর",
    baseDays: 14,
    readyDossiers: 580,
    dailyTestCap: 40,
  },
];

export const ESTIMATOR_COUNTRIES: EstimatorCountryBenchmark[] = [
  {
    countryKey: "ksa",
    labelEn: "Kingdom of Saudi Arabia (Qiwa / Musaned)",
    labelBn: "সৌদি আরব (কিওয়া / মুসানেদ)",
    visaSpeedFactor: 1.0,
    consularSystem: "Qiwa E-Visa",
  },
  {
    countryKey: "uae",
    labelEn: "United Arab Emirates (MOHRE / Dubai)",
    labelBn: "সংযুক্ত আরব আমিরাত (মোহরে / দুবাই)",
    visaSpeedFactor: 0.9,
    consularSystem: "MOHRE E-Work Permit",
  },
  {
    countryKey: "qatar",
    labelEn: "State of Qatar (QVC Visa Desk)",
    labelBn: "কাতার (কিউভিসি ভিসা ডেস্ক)",
    visaSpeedFactor: 1.0,
    consularSystem: "QVC Biometric",
  },
  {
    countryKey: "kuwait",
    labelEn: "State of Kuwait (Kuwait City)",
    labelBn: "কুয়েত (কুয়েত সিটি)",
    visaSpeedFactor: 1.15,
    consularSystem: "Consular Attestation",
  },
  {
    countryKey: "malaysia",
    labelEn: "Malaysia (FWCMS / MyFutureJobs)",
    labelBn: "মালয়েশিয়া (এফডব্লিউসিএমএস)",
    visaSpeedFactor: 1.25,
    consularSystem: "FWCMS Biometric",
  },
  {
    countryKey: "romania",
    labelEn: "Romania & European Union (EU Work Permit)",
    labelBn: "রোমানিয়া ও ইউরোপীয় ইউনিয়ন",
    visaSpeedFactor: 1.8,
    consularSystem: "EU IGI Work Permit",
  },
];
