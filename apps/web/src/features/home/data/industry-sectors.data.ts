export interface IndustrySector {
  id: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  icon: string;
  image: string;
  colSpan: "col-span-1" | "col-span-2";
  rolesEn: string[];
  rolesBn: string[];
  metricNumber: string;
  metricLabelEn: string;
  metricLabelBn: string;
}

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: "construction",
    titleEn: "Construction & Heavy Infrastructure",
    titleBn: "কনস্ট্রাকশন ও ভারী অবকাঠামো",
    descEn: "Certified welders, electricians, carpenters, and civil technicians for mega projects.",
    descBn: "মেগাপ্রজেক্টের জন্য সার্টিফাইড ওয়েল্ডার, ইলেকট্রিশিয়ান, কার্পেন্টার ও দক্ষ কর্মী।",
    icon: "construction",
    image: "/images/sectors/construction.webp",
    colSpan: "col-span-2",
    rolesEn: ["6G Pipe Welders", "Industrial Electricians", "Shuttering Carpenters", "Rebar Steel Fixers"],
    rolesBn: ["৬জি পাইপ ওয়েল্ডার", "ইন্ডাস্ট্রিয়াল ইলেকট্রিশিয়ান", "শাটারিং কার্পেন্টার", "স্টিল ফিক্সার"],
    metricNumber: "22.8K+",
    metricLabelEn: "Mobilized to GCC & EU",
    metricLabelBn: "নিয়োজিত জনশক্তি",
  },
  {
    id: "engineering",
    titleEn: "Engineering, MEP & Automation",
    titleBn: "প্রকৌশল, এমইপি ও অটোমেশন",
    descEn: "Graduate engineers, HVAC specialists, and industrial automation technicians.",
    descBn: "সিভিল ও মেকানিক্যাল ইঞ্জিনিয়ার, এইচভিএসি এবং অটোমেশন টেকনিশিয়ান।",
    icon: "engineering",
    image: "/images/sectors/engineering.webp",
    colSpan: "col-span-1",
    rolesEn: ["MEP Site Engineers", "HVAC Technicians", "PLC Programmers"],
    rolesBn: ["এমইপি ইঞ্জিনিয়ার", "এইচভিএসি টেকনিশিয়ান", "পিএলসি প্রোগ্রামার"],
    metricNumber: "3.4K+",
    metricLabelEn: "Technical Cadre",
    metricLabelBn: "টেকনিক্যাল ক্যাডার",
  },
  {
    id: "hospitality",
    titleEn: "Luxury Hospitality & Tourism",
    titleBn: "হসপিটালিটি ও পর্যটন খাত",
    descEn: "Executive chefs, F&B service staff, baristas, and front desk teams for luxury hotels.",
    descBn: "ফাইভ-স্টার হোটেলের জন্য শেফ, ওয়েটার, বারিস্তা ও ফ্রন্ট ডেস্ক কর্মী।",
    icon: "hotel",
    image: "/images/sectors/hospitality.webp",
    colSpan: "col-span-1",
    rolesEn: ["Executive Sous Chefs", "F&B Baristas", "Concierge Executives"],
    rolesBn: ["এক্সিকিউটিভ শেফ", "এফঅ্যান্ডবি বারিস্তা", "কনসিয়ার্জ এক্সিকিউটিভ"],
    metricNumber: "6.2K+",
    metricLabelEn: "Hotel Staff Deployed",
    metricLabelBn: "হোটেল কর্মী",
  },
  {
    id: "healthcare",
    titleEn: "Healthcare, Nursing & Clinical Support",
    titleBn: "স্বাস্থ্যসেবা ও নার্সিং খাত",
    descEn: "Registered ICU nurses, clinical technicians, and certified healthcare staff for hospitals.",
    descBn: "হাসপাতালের জন্য সার্টিফাইড নার্স, ল্যাব টেকনিশিয়ান ও স্বাস্থ্যকর্মী।",
    icon: "medical_services",
    image: "/images/sectors/healthcare.webp",
    colSpan: "col-span-2",
    rolesEn: ["Registered Staff Nurses", "ICU Specialists", "Dialysis Technicians", "Certified Caregivers"],
    rolesBn: ["রেজিস্টার্ড স্টাফ নার্স", "আইসিইউ স্পেশালিস্ট", "ডায়ালাইসিস টেকনিশিয়ান", "সার্টিফাইড কেয়ারগিভার"],
    metricNumber: "4.1K+",
    metricLabelEn: "Healthcare Personnel",
    metricLabelBn: "স্বাস্থ্যকর্মী",
  },
  {
    id: "manufacturing",
    titleEn: "Manufacturing & Industrial Assembly",
    titleBn: "ম্যানুফ্যাকচারিং ও শিল্প কারখানা",
    descEn: "Cleanroom operators, automotive assemblers, and CNC machinery technicians.",
    descBn: "শিল্প কারখানার জন্য ক্লিনরুম অপারেটর, অটোমোটিভ অ্যাসেম্বলার ও সিএনসি টেকনিশিয়ান।",
    icon: "precision_manufacturing",
    image: "/images/sectors/manufacturing.webp",
    colSpan: "col-span-2",
    rolesEn: ["CNC Machine Operators", "Cleanroom Assembly", "Quality Inspectors"],
    rolesBn: ["সিএনসি মেশিন অপারেটর", "ক্লিনরুম অ্যাসেম্বলার", "কোয়ালিটি ইন্সপেক্টর"],
    metricNumber: "7.9K+",
    metricLabelEn: "Factory Operators",
    metricLabelBn: "কারখানা কর্মী",
  },
  {
    id: "heavy_transport",
    titleEn: "Heavy Logistics & Fleet Operators",
    titleBn: "ভারী পরিবহন ও লজিস্টিকস",
    descEn: "Licensed heavy trailer drivers, tower crane operators, and forklift specialists.",
    descBn: "লাইসেন্সধারী হেভি ট্রেলার চালক, টাওয়ার ক্রেন অপারেটর ও ফর্কলিফট চালক।",
    icon: "local_shipping",
    image: "/images/sectors/heavy_transport.webp",
    colSpan: "col-span-1",
    rolesEn: ["Heavy Trailer Drivers", "Tower Crane Operators", "Forklift Certified", "Port Logistics"],
    rolesBn: ["হেভি ট্রেলার ড্রাইভার", "টাওয়ার ক্রেন অপারেটর", "ফর্কলিফট চালক", "পোর্ট লজিস্টিকস"],
    metricNumber: "5.5K+",
    metricLabelEn: "Certified Drivers",
    metricLabelBn: "লাইসেন্সধারী চালক",
  },
];
