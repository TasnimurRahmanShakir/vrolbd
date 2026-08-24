export interface SearchOptionItem {
  value: string;
  labelEn: string;
  labelBn: string;
  subLabelEn?: string;
  icon: string;
}

export const RAW_COUNTRIES: SearchOptionItem[] = [
  { value: "All", labelEn: "Any Country", labelBn: "যে কোনো দেশ", subLabelEn: "All Global Corridors", icon: "public" },
  { value: "Kingdom of Saudi Arabia", labelEn: "Saudi Arabia (KSA)", labelBn: "সৌদি আরব", subLabelEn: "Riyadh, Jeddah, Dammam", icon: "flag" },
  { value: "United Arab Emirates", labelEn: "United Arab Emirates (UAE)", labelBn: "সংযুক্ত আরব আমিরাত", subLabelEn: "Dubai & Abu Dhabi", icon: "flag" },
  { value: "Qatar", labelEn: "Qatar", labelBn: "কাতার", subLabelEn: "Doha & Lusail", icon: "flag" },
  { value: "Kuwait", labelEn: "Kuwait", labelBn: "কুয়েত", subLabelEn: "Kuwait City", icon: "flag" },
  { value: "Oman", labelEn: "Oman", labelBn: "ওমান", subLabelEn: "Muscat & Salalah", icon: "flag" },
  { value: "Malaysia", labelEn: "Malaysia", labelBn: "মালয়েশিয়া", subLabelEn: "Kuala Lumpur & Penang", icon: "flag" },
  { value: "Japan", labelEn: "Japan", labelBn: "জাপান", subLabelEn: "Tokyo & Osaka", icon: "flag" },
  { value: "Romania", labelEn: "Romania (EU)", labelBn: "রোমানিয়া", subLabelEn: "Bucharest & EU Zone", icon: "flag" },
];

export const RAW_INDUSTRIES: SearchOptionItem[] = [
  { value: "All", labelEn: "Any Industry", labelBn: "যে কোনো খাত", subLabelEn: "All Manpower Sectors", icon: "business_center" },
  { value: "Engineering & Construction", labelEn: "Engineering & Construction", labelBn: "প্রকৌশল ও নির্মাণ", subLabelEn: "Civil, MEP, Electrical, Heavy", icon: "construction" },
  { value: "Hospitality & Tourism", labelEn: "Hospitality & Tourism", labelBn: "হসপিটালিটি ও পর্যটন", subLabelEn: "Hotels, F&B, Culinary, Resorts", icon: "hotel" },
  { value: "Industrial & Manufacturing", labelEn: "Industrial & Manufacturing", labelBn: "শিল্প ও উৎপাদন", subLabelEn: "Factory, Assembly, Technicians", icon: "precision_manufacturing" },
  { value: "Healthcare & Medical", labelEn: "Healthcare & Medical", labelBn: "স্বাস্থ্য ও চিকিৎসা", subLabelEn: "Nursing, Clinical, Paramedics", icon: "medical_services" },
];

export const RAW_SKILL_LEVELS: SearchOptionItem[] = [
  { value: "All", labelEn: "Any Skill Level", labelBn: "সকল দক্ষতার স্তর", subLabelEn: "All Accreditation Tiers", icon: "psychology" },
  { value: "Certified Trade", labelEn: "Certified Trade / Technical", labelBn: "সার্টিফাইড কারিগরি", subLabelEn: "BTEB / Trade Tested", icon: "verified" },
  { value: "Professional", labelEn: "Professional / Engineer", labelBn: "প্রফেশনাল / ইঞ্জিনিয়ার", subLabelEn: "Degree / Diploma Cadre", icon: "engineering" },
  { value: "General Skilled", labelEn: "General Skilled Workforce", labelBn: "সাধারণ দক্ষ কর্মী", subLabelEn: "Experienced Operators", icon: "handyman" },
  { value: "Supervisory", labelEn: "Supervisory & Foreman", labelBn: "সুপারভাইজার ও ফোরম্যান", subLabelEn: "Team Leads & Site Foremen", icon: "badge" },
];
