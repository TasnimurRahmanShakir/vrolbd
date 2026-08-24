export interface IndustrySector {
  id: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  icon: string;
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
    descEn: "Certified structural steel welders, 6G pipefitters, electricians, carpenters, and civil site technicians for global megaprojects.",
    descBn: "আন্তর্জাতিক মেগাপ্রজেক্টের জন্য সার্টিফাইড ৬জি ওয়েল্ডার, পাইপফিটার, মেসন, ইলেকট্রিশিয়ান ও টেকনিশিয়ান।",
    icon: "construction",
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
    descEn: "Graduate engineers, HVAC commissioning technicians, and instrumentation specialists.",
    descBn: "গ্র্যাজুয়েট সিভিল/মেকানিক্যাল ইঞ্জিনিয়ার, এইচভিএসি টেকনিশিয়ান ও অটোমেশন স্পেশালিস্ট।",
    icon: "engineering",
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
    descEn: "Multilingual culinary chefs, F&B service staff, baristas, front desk concierge, and housekeeping teams for 5-star hotel resorts in Dubai, Riyadh, and Doha.",
    descBn: "দুবাই, রিয়াদ ও দোহার ফাইভ-স্টার রিসোর্ট ও রেস্তোরাঁর জন্য এক্সিকিউটিভ শেফ, ওয়েটার, বারিস্তা ও ফ্রন্ট ডেস্ক কর্মী।",
    icon: "hotel",
    colSpan: "col-span-1",
    rolesEn: ["Executive Sous Chefs", "F&B Baristas", "Concierge Executives"],
    rolesBn: ["এক্সিকিউটিভ শেফ", "এফঅ্যান্ডবি বারিস্তা", "কনসিয়ার্জ এক্সিকিউটিভ"],
    metricNumber: "6.2K+",
    metricLabelEn: "Hotel Staff Deployed",
    metricLabelBn: "হোটেল স্টাফ কর্মী",
  },
  {
    id: "healthcare",
    titleEn: "Healthcare, Nursing & Clinical Support",
    titleBn: "স্বাস্থ্যসেবা ও নার্সিং খাত",
    descEn: "Registered ICU/CCU nurses, clinical care technicians, paramedics, and elderly care specialists certified for MOH and private hospital deployment.",
    descBn: "সরকারি স্বাস্থ্য মন্ত্রণালয় (MOH) ও প্রাইভেট হাসপাতালের জন্য বিএসসি নার্স, ল্যাব টেকনিশিয়ান ও কেয়ারগিভার।",
    icon: "medical_services",
    colSpan: "col-span-2",
    rolesEn: ["Registered Staff Nurses", "ICU Specialists", "Dialysis Technicians", "Certified Caregivers"],
    rolesBn: ["রেজিস্টার্ড স্টাফ নার্স", "আইসিইউ স্পেশালিস্ট", "ডায়ালাইসিস টেকনিশিয়ান", "সার্টিফাইড কেয়ারগিভার"],
    metricNumber: "4.1K+",
    metricLabelEn: "Healthcare Personnel",
    metricLabelBn: "স্বাস্থ্যকর্মী ডিপ্লয়মেন্ট",
  },
  {
    id: "manufacturing",
    titleEn: "Manufacturing & Industrial Assembly",
    titleBn: "ম্যানুফ্যাকচারিং ও শিল্প কারখানা",
    descEn: "Semiconductor cleanroom staff, automotive assembly technicians, and CNC machinery operators for plants in Malaysia, Japan, and Romania.",
    descBn: "মালয়েশিয়া, জাপান ও রোমানিয়ার কারখানার জন্য সেমিকন্ডাক্টর অপারেটর, অটোমোটিভ অ্যাসেম্বলার ও সিএনসি টেকনিশিয়ান।",
    icon: "precision_manufacturing",
    colSpan: "col-span-1",
    rolesEn: ["CNC Machine Operators", "Cleanroom Assembly", "Quality Inspectors"],
    rolesBn: ["সিএনসি মেশিন অপারেটর", "ক্লিনরুম অ্যাসেম্বলার", "কোয়ালিটি ইন্সপেক্টর"],
    metricNumber: "7.9K+",
    metricLabelEn: "Factory Operators",
    metricLabelBn: "ফ্যাক্টরি অপারেটর",
  },
  {
    id: "heavy_transport",
    titleEn: "Heavy Logistics & Fleet Operators",
    titleBn: "ভারী পরিবহন ও লজিস্টিকস",
    descEn: "Gulf-license certified heavy trailer drivers, crane operators, and forklift specialists for port logistics and mega infrastructure projects.",
    descBn: "জিসিসি ড্রাইভিং লাইসেন্সধারী হেভি ট্রেলার ড্রাইভার, ক্রেন অপারেটর ও ফর্কলিফট চালক।",
    icon: "local_shipping",
    colSpan: "col-span-1",
    rolesEn: ["Heavy Trailer Drivers", "Tower Crane Operators", "Forklift Certified"],
    rolesBn: ["হেভি ট্রেলার ড্রাইভার", "টাওয়ার ক্রেন অপারেটর", "ফর্কলিফট চালক"],
    metricNumber: "5.5K+",
    metricLabelEn: "Certified Drivers",
    metricLabelBn: "লাইসেন্সধারী চালক",
  },
];
