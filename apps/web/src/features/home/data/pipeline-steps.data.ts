export interface StepItem {
  id: number;
  stepNumber: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  badgeEn: string;
  badgeBn: string;
  icon: string;
  image: string;
  highlightEn: string;
  highlightBn: string;
}

export const EMPLOYER_PIPELINE_STEPS: StepItem[] = [
  {
    id: 1,
    stepNumber: "01",
    titleEn: "Requirement",
    titleBn: "চাহিদা নির্ধারণ",
    descEn: "Understanding your project timeline, specific technical trade headcount, and consular accreditation needs.",
    descBn: "আপনার প্রজেক্ট টাইমলাইন, নির্দিষ্ট টেকনিক্যাল ট্রেডের কর্মীর সংখ্যা ও কনস্যুলার রিকয়ারমেন্ট বিশ্লেষণ।",
    badgeEn: "Project Scoping",
    badgeBn: "রিকয়ারমেন্ট অডিট",
    icon: "assignment",
    image: "/images/pipeline/step1_audit.webp",
    highlightEn: "Customized Job Matrix",
    highlightBn: "কাস্টমাইজড জব ম্যাট্রিক্স",
  },
  {
    id: 2,
    stepNumber: "02",
    titleEn: "Sourcing",
    titleBn: "ট্যালেন্ট সোর্সিং",
    descEn: "Rapidly mobilizing verified candidates from our nationwide accredited database & technical training hubs.",
    descBn: "আমাদের দেশব্যাপী সার্টিফাইড ডাটাবেজ ও আধুনিক ট্রেনিং সেন্টার থেকে দক্ষ প্রার্থী বাছাই ও সংহতকরণ।",
    badgeEn: "Talent Pool",
    badgeBn: "ট্যালেন্ট পুল",
    icon: "groups",
    image: "/images/pipeline/step2_sourcing.webp",
    highlightEn: "Pre-Vetted Database",
    highlightBn: "যাচাইকৃত ডাটাবেজ",
  },
  {
    id: 3,
    stepNumber: "03",
    titleEn: "Screening",
    titleBn: "ট্রেড টেস্ট ও স্ক্রিনিং",
    descEn: "Rigorous practical assessments at our test centers, GAMCA medical clearance, and background vetting.",
    descBn: "আমাদের টেকনিক্যাল সেন্টারে হ্যান্ডস-অন প্র্যাকটিক্যাল টেস্ট, গামকা মেডিকেল ও কনস্যুলার বায়োমেট্রিক স্ক্রিনিং।",
    badgeEn: "Skill Verification",
    badgeBn: "দক্ষতা যাচাই",
    icon: "verified",
    image: "/images/pipeline/step3_tradetest.webp",
    highlightEn: "100% Practical Grading",
    highlightBn: "১০০% প্র্যাকটিক্যাল গ্রেডিং",
  },
  {
    id: 4,
    stepNumber: "04",
    titleEn: "Deployment",
    titleBn: "অন-সাইট মোবিলাইজেশন",
    descEn: "Seamless BMET smart clearance, express ticketing, airport concierge, and direct on-site mobilization.",
    descBn: "সরকারি বিএমইটি স্মার্ট ক্লিয়ারেন্স, এক্সপ্রেস টিকেটিং, এয়ারপোর্ট সাপোর্ট ও কর্মস্থলে সফল যোগদান।",
    badgeEn: "Rapid Mobilization",
    badgeBn: "দ্রুত মোবিলাইজেশন",
    icon: "flight_takeoff",
    image: "/images/pipeline/step4_airport.webp",
    highlightEn: "14-21 Day Turnaround",
    highlightBn: "১৪-২১ দিনে ফ্লাইট",
  },
];

export const CANDIDATE_PIPELINE_STEPS: StepItem[] = [
  {
    id: 1,
    stepNumber: "01",
    titleEn: "Registration",
    titleBn: "নিবন্ধন ও প্রোফাইল",
    descEn: "Submit verified trade certificates and passport details through our digital gateway or regional hubs.",
    descBn: "আপনার পাসপোর্ট ও কারিগরি অভিজ্ঞতার সনদপত্র আমাদের অনলাইন গেটওয়ে বা সরাসরি অফিসে জমা দিন।",
    badgeEn: "Profile Logging",
    badgeBn: "প্রোফাইল নিবন্ধন",
    icon: "app_registration",
    image: "/images/pipeline/step1_audit.webp",
    highlightEn: "Free Documentation Check",
    highlightBn: "বিনামূল্যে ফাইল যাচাই",
  },
  {
    id: 2,
    stepNumber: "02",
    titleEn: "Trade Assessment",
    titleBn: "দক্ষতা পরীক্ষা",
    descEn: "Hands-on trade testing at certified technical bays with government-standard grading and zero fees.",
    descBn: "আমাদের আধুনিক ল্যাবে ব্যবহারিক দক্ষতা পরীক্ষা ও আন্তর্জাতিক মানদণ্ডে ফ্রি গ্রেডিং মূল্যায়ন।",
    badgeEn: "Practical Test",
    badgeBn: "ব্যবহারিক পরীক্ষা",
    icon: "construction",
    image: "/images/pipeline/step3_tradetest.webp",
    highlightEn: "Zero Assessment Fees",
    highlightBn: "কোনো পরীক্ষার ফি নেই",
  },
  {
    id: 3,
    stepNumber: "03",
    titleEn: "Clearance",
    titleBn: "মেডিকেল ও সরকারি ভিসা",
    descEn: "Complete GAMCA medical, consular biometric logging, and 100% legal government BMET smart card.",
    descBn: "গামকা মেডিকেল ফিটনেস, দ্রুততম ই-ভিসা সত্যায়ন এবং সরকারি বিএমইটি স্মার্ট ইমিগ্রেশন কার্ড গ্রহণ।",
    badgeEn: "Legal Visa",
    badgeBn: "আইনি সুরক্ষা",
    icon: "badge",
    image: "/images/pipeline/step2_sourcing.webp",
    highlightEn: "BMET Smart Protected",
    highlightBn: "সরকারি বিএমইটি সুরক্ষা",
  },
  {
    id: 4,
    stepNumber: "04",
    titleEn: "Departure",
    titleBn: "ফ্লাইট ও যোগদান",
    descEn: "Pre-departure cultural briefing, airport escort assistance, and safe corporate onboarding abroad.",
    descBn: "ফ্লাইটের পূর্বে ব্রিফিং, ঢাকা এয়ারপোর্টে সহায়তা এবং বিদেশে কর্মস্থলে সুরক্ষিতভাবে যোগদান।",
    badgeEn: "Airport Escort",
    badgeBn: "ফ্লাইট ও অভ্যর্থনা",
    icon: "connecting_airports",
    image: "/images/pipeline/step4_airport.webp",
    highlightEn: "Guaranteed Contract Terms",
    highlightBn: "নিরাপদ কর্মচুক্তি গ্যারান্টি",
  },
];
