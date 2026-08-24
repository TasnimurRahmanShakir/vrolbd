import { Job, JobFilter } from "../schemas/job.schema";

// Seeded enterprise jobs for VROLBD
export const MOCK_JOBS: Job[] = [
  {
    id: "job-101",
    title: "Senior MEP Project Engineer",
    country: "United Arab Emirates",
    city: "Dubai",
    category: "Engineering & Construction",
    salary: "18,000 - 24,000 AED / mo",
    positions: 12,
    deadline: "2026-10-15",
    type: "Full-Time",
    tags: ["High-Rise", "HVAC", "Aramco Certified"],
    featured: true,
    description:
      "Lead MEP project engineering for premier high-rise commercial developments in Dubai Business Bay. Direct HVAC, plumbing, electrical, and BMS execution with multinational engineering consortiums.",
    responsibilities: [
      "Supervise multi-axis MEP site installation and commissioning teams",
      "Verify technical compliance with Dubai Municipality and ASHRAE standards",
      "Coordinate with main civil contractors on clash analysis and Revit BIM models",
      "Manage site quality inspections, submittals, and material approvals",
    ],
    requirements: [
      "B.Sc. in Mechanical or Electrical Engineering",
      "Minimum 5+ years of Gulf or high-rise project execution experience",
      "Proficiency in AutoCAD, Revit MEP, and project scheduling",
      "Valid passport with GAMCA medical readiness",
    ],
    benefits: [
      "Company-provided executive family/single housing allowance",
      "Comprehensive international health insurance & annual return flight tickets",
      "Tax-free monthly salary with annual performance bonus",
      "100% government BMET smart card protected employment visa",
    ],
  },
  {
    id: "job-102",
    title: "Hospitality Operations Supervisor",
    country: "Qatar",
    city: "Doha",
    category: "Hospitality & Tourism",
    salary: "8,500 - 11,000 QAR / mo",
    positions: 30,
    deadline: "2026-09-30",
    type: "Contract",
    tags: ["5-Star Luxury", "Bilingual", "Food & Beverage"],
    featured: true,
    description:
      "Manage front-of-house, banquet, and culinary operations across luxury 5-star hotel resorts in Doha. Ensure exemplary guest experiences adhering to international luxury hospitality standards.",
    responsibilities: [
      "Oversee daily F&B service standards, staff scheduling, and VIP banquet logistics",
      "Ensure HACCP food safety compliance and luxury service protocol adherence",
      "Conduct daily team briefings and cross-cultural customer service training",
      "Handle guest feedback and escalate concierge resolutions efficiently",
    ],
    requirements: [
      "Diploma or Degree in Hotel Management / Tourism",
      "Minimum 3+ years in 4-star or 5-star hospitality environments",
      "Fluent verbal English communication (Arabic is an added advantage)",
      "Strong leadership and guest relationship competencies",
    ],
    benefits: [
      "Free 5-star luxury staff accommodation & corporate dining buffet",
      "Full medical coverage and pre-departure flight dispatch",
      "Gratuity benefits and end-of-service bonuses under Qatar Labor Law",
      "Guaranteed career promotion pathways across hotel chain",
    ],
  },
  {
    id: "job-103",
    title: "Heavy Equipment Automation Specialist",
    country: "Kingdom of Saudi Arabia",
    city: "Riyadh",
    category: "Industrial & Manufacturing",
    salary: "14,000 - 19,000 SAR / mo",
    positions: 25,
    deadline: "2026-11-01",
    type: "Full-Time",
    tags: ["NEOM Logistics", "Hydraulics", "PLC Control"],
    featured: false,
    description:
      "Deploy automation, telematics, and heavy hydraulic maintenance across mega-infrastructure construction fleets supporting Saudi Vision 2030 and NEOM corridor logistics.",
    responsibilities: [
      "Perform diagnostic programming and PLC calibration on heavy earthmoving fleets",
      "Maintain hydraulic systems, electronic transmission controls, and sensors",
      "Execute preventive maintenance cycles to ensure 99% fleet uptime",
      "Lead field technical recovery teams during high-capacity operations",
    ],
    requirements: [
      "Diploma/B.Sc. in Mechatronics, Automobile, or Mechanical Engineering",
      "4+ years of hands-on experience with CAT, Komatsu, or Liebherr machinery",
      "Valid trade test certification from an accredited technical institute",
      "Ability to work in dynamic mega-project environments",
    ],
    benefits: [
      "Full corporate desert camp living accommodations with air conditioning",
      "Tax-free salary with generous overtime multiplier",
      "Annual 30-day paid leave with round-trip flight tickets",
      "Fast-track Saudi Qiwa electronic visa processing",
    ],
  },
  {
    id: "job-104",
    title: "Certified Nursing Specialist (ICU/ER)",
    country: "Kuwait",
    city: "Kuwait City",
    category: "Healthcare & Medical",
    salary: "1,200 - 1,600 KWD / mo",
    positions: 50,
    deadline: "2026-10-20",
    type: "Full-Time",
    tags: ["Ministry of Health", "BLS/ACLS", "English Fluent"],
    featured: true,
    description:
      "Deliver critical intensive care, trauma resuscitation, and patient management at Kuwait Ministry of Health (MOH) and accredited tertiary care hospital networks.",
    responsibilities: [
      "Provide acute critical care monitoring for ICU, CCU, and emergency patients",
      "Administer medication, arterial line management, and ventilator monitoring",
      "Collaborate with multidisciplinary physician teams on treatment plans",
      "Maintain strict infection control protocols and clinical electronic health records",
    ],
    requirements: [
      "B.Sc. in Nursing with valid Bangladesh Nursing & Midwifery Council registration",
      "Minimum 3 years of clinical ICU/ER experience in a tertiary hospital",
      "Valid BLS (Basic Life Support) and ACLS certifications",
      "Clear GAMCA medical certificate and Kuwait MOH eligibility",
    ],
    benefits: [
      "Fully furnished government staff residential apartments",
      "Generous shift allowance and comprehensive government pension tier",
      "Annual 45 days paid vacation with family air passage allowance",
      "Free medical services throughout Kuwait government hospitals",
    ],
  },
  {
    id: "job-105",
    title: "6G TIG & High-Pressure Pipe Welder",
    country: "Kingdom of Saudi Arabia",
    city: "Jubail",
    category: "Engineering & Construction",
    salary: "9,000 - 13,000 SAR / mo",
    positions: 45,
    deadline: "2026-10-30",
    type: "Full-Time",
    tags: ["Aramco Standard", "Alloy Steel", "X-Ray Tested"],
    featured: true,
    description:
      "Execute high-pressure pipe welding across petrochemical refinery expansions in Jubail Industrial City. Must pass 100% X-Ray and hydrostatic pressure tests on carbon and stainless steel joints.",
    responsibilities: [
      "Weld 6G position high-pressure steam and gas piping using GTAW / SMAW",
      "Preheat and maintain interpass temperature controls as per WPS specs",
      "Perform beveling, fit-up inspections, and root pass penetration",
      "Ensure adherence to Saudi Aramco safety and hot-work permits",
    ],
    requirements: [
      "Minimum 4+ years of refinery, offshore, or power plant welding experience",
      "Must pass Vision Recruiting multi-axis trade test center X-Ray test in Dhaka",
      "Valid GAMCA medical fitness certificate",
    ],
    benefits: [
      "Full corporate camp accommodations, dining, and daily transport",
      "High overtime rate multiplier with tax-free monthly savings",
      "Annual round-trip airfare and BMET smart card insurance",
    ],
  },
  {
    id: "job-106",
    title: "Executive Sous Chef (Continental & Arabic)",
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    category: "Hospitality & Tourism",
    salary: "14,000 - 18,500 AED / mo",
    positions: 8,
    deadline: "2026-11-15",
    type: "Full-Time",
    tags: ["5-Star Resort", "HACCP Master", "Menu Development"],
    featured: false,
    description:
      "Direct culinary brigades across luxury beachfront luxury resorts in Abu Dhabi. Manage culinary innovation, VIP banqueting, and HACCP compliance.",
    responsibilities: [
      "Supervise kitchen stations, meat preparation, and international buffets",
      "Manage kitchen procurement, inventory turnover, and food cost margins",
      "Enforce food hygiene, temperature logs, and luxury plating standards",
    ],
    requirements: [
      "Degree or Diploma in Culinary Arts with 6+ years in 5-star hotel kitchens",
      "HACCP certified with fluent English communication",
      "Proven leadership of multinational culinary teams",
    ],
    benefits: [
      "Executive family visa sponsorship and housing allowance",
      "Full health insurance, gratuity tier, and performance bonus",
      "Annual 30 days paid leave with executive business airfare",
    ],
  },
  {
    id: "job-107",
    title: "Industrial Electrical & BMS Commissioning Engineer",
    country: "Oman",
    city: "Muscat",
    category: "Engineering & Construction",
    salary: "1,100 - 1,500 OMR / mo",
    positions: 15,
    deadline: "2026-10-25",
    type: "Full-Time",
    tags: ["Substation", "Schneider BMS", "SCADA Control"],
    featured: false,
    description:
      "Oversee 33kV/11kV electrical substation testing, switchgear commissioning, and building management automation for Muscat international commercial hubs.",
    responsibilities: [
      "Conduct transformer dielectric tests, relay calibrations, and CT/PT testing",
      "Program and commission Schneider/Siemens BMS automated controllers",
      "Prepare as-built electrical schematics and client handover documentation",
    ],
    requirements: [
      "B.Sc. in Electrical & Electronic Engineering (EEE)",
      "4+ years of industrial substation or high-voltage commissioning experience",
      "Valid passport with GAMCA clearance",
    ],
    benefits: [
      "Company-furnished executive apartment and vehicle allowance",
      "Annual flight tickets, complete medical insurance, and end-of-service gratuity",
    ],
  },
  {
    id: "job-108",
    title: "Heavy Scaffolding Inspector & Supervisor (CISRS)",
    country: "Qatar",
    city: "Ras Laffan",
    category: "Industrial & Manufacturing",
    salary: "7,500 - 10,500 QAR / mo",
    positions: 35,
    deadline: "2026-11-10",
    type: "Contract",
    tags: ["LNG Plant", "CISRS Level 3", "Offshore Safety"],
    featured: true,
    description:
      "Direct heavy industrial tube and coupler scaffolding erection, load testing, and tag inspections across the North Field LNG expansion project in Qatar.",
    responsibilities: [
      "Inspect suspended, cantilever, and complex industrial scaffolding structures",
      "Issue scaffold green safety tags and maintain daily load registers",
      "Lead toolbox safety talks and enforce 100% tie-off safety protocols",
    ],
    requirements: [
      "CISRS Level 2 or Level 3 Scaffolding Inspector Certification",
      "3+ years experience in oil & gas or mega-industrial facilities",
      "Working knowledge of Qatar Energy safety guidelines",
    ],
    benefits: [
      "Full LNG city corporate accommodation with dining and medical",
      "Tax-free salary with guaranteed minimum overtime hours",
      "Round-trip air ticket with BMET clearance support",
    ],
  },
  {
    id: "job-109",
    title: "Automotive Diagnostics & EV Specialist",
    country: "United Arab Emirates",
    city: "Dubai",
    category: "Industrial & Manufacturing",
    salary: "11,000 - 15,000 AED / mo",
    positions: 20,
    deadline: "2026-11-20",
    type: "Full-Time",
    tags: ["Electric Vehicles", "CAN-Bus", "OBD-II Telematics"],
    featured: false,
    description:
      "Perform high-voltage battery diagnostic testing, inverter repair, and electronic CAN-bus calibration for premier automotive dealership networks in Dubai.",
    responsibilities: [
      "Diagnose EV high-voltage powertrains and hybrid electronic transmission systems",
      "Program ECU firmware updates using OEM specialized diagnostic software",
      "Execute ADAS sensor calibration and electronic wheel alignment checks",
    ],
    requirements: [
      "Diploma in Automobile or Mechatronics Engineering",
      "Certified in High-Voltage EV safety (Level 2 or 3)",
      "3+ years experience in modern dealership service workshops",
    ],
    benefits: [
      "Furnished company housing or executive monthly housing allowance",
      "Annual flight ticket to home country, full medical coverage",
      "OEM factory certified upskilling and training programs",
    ],
  },
  {
    id: "job-110",
    title: "Senior Radiologist & Medical Imaging Technologist",
    country: "Kingdom of Saudi Arabia",
    city: "Dammam",
    category: "Healthcare & Medical",
    salary: "15,000 - 21,000 SAR / mo",
    positions: 10,
    deadline: "2026-12-01",
    type: "Full-Time",
    tags: ["MRI / CT Scan", "Saudi Prometric", "Tertiary Hospital"],
    featured: true,
    description:
      "Operate high-resolution 3T MRI, 128-slice CT scanners, and digital fluoroscopy equipment across leading tertiary private hospital chains in Eastern Province.",
    responsibilities: [
      "Perform advanced diagnostic MRI neuro, musculoskeletal, and cardiac scans",
      "Ensure radiation safety compliance (ALARA) and contrast media administration",
      "Collaborate with consulting radiologists on PACS electronic reports",
    ],
    requirements: [
      "B.Sc. in Medical Imaging / Radiography Technology",
      "Passed Saudi Prometric exam with valid SCFHS classification eligibility",
      "3+ years of tertiary hospital diagnostic imaging experience",
    ],
    benefits: [
      "Furnished family accommodation or high-tier residential stipend",
      "Full family medical coverage and annual return flight tickets",
      "Tax-free salary with paid CME education leave",
    ],
  },
  {
    id: "job-111",
    title: "HVAC Central Plant Master Technician",
    country: "Bahrain",
    city: "Manama",
    category: "Engineering & Construction",
    salary: "750 - 1,050 BHD / mo",
    positions: 18,
    deadline: "2026-11-05",
    type: "Full-Time",
    tags: ["Centrifugal Chillers", "York / Carrier", "AHU Overhaul"],
    featured: false,
    description:
      "Manage central district cooling plants, cooling towers, and centrifugal chillers for major shopping complexes and diplomatic towers in Manama.",
    responsibilities: [
      "Overhaul York, Carrier, and Trane water-cooled centrifugal chillers",
      "Refrigerant leak detection, oil analysis, and compressor rebuilding",
      "Balance chilled water flow rates and inspect VAV air handling systems",
    ],
    requirements: [
      "Diploma in Air Conditioning & Refrigeration (RAC)",
      "4+ years experience with large-scale industrial district cooling systems",
      "Valid trade test certificate and GAMCA medical clearance",
    ],
    benefits: [
      "Furnished company staff housing and daily transport",
      "Free medical services, paid annual vacation, and air tickets",
    ],
  },
  {
    id: "job-112",
    title: "Industrial Logistics & Forklift Fleet Lead",
    country: "Kingdom of Saudi Arabia",
    city: "Jeddah",
    category: "Industrial & Manufacturing",
    salary: "6,500 - 9,000 SAR / mo",
    positions: 40,
    deadline: "2026-10-28",
    type: "Full-Time",
    tags: ["Cold Chain", "WMS Inventory", "Reach Truck"],
    featured: false,
    description:
      "Supervise automated high-bay warehouse logistics, reach truck operations, and cold storage pharmaceutical/food inventory distribution at King Abdullah Port corridor.",
    responsibilities: [
      "Manage fleet of electric reach trucks, VNA forklifts, and pallet jacks",
      "Operate SAP / Oracle WMS barcode scanning and dispatch scheduling",
      "Maintain cold-chain temperature compliance and warehouse safety rules",
    ],
    requirements: [
      "Valid Saudi / GCC heavy forklift driving license",
      "2+ years experience in large FMCG or pharmaceutical distribution hubs",
      "Basic English communication and inventory literacy",
    ],
    benefits: [
      "Free company camp accommodation and dining facilities",
      "Generous shift overtime pay and performance incentives",
      "Government BMET smart card insurance and annual return tickets",
    ],
  },
];

export async function fetchJobs(filter?: JobFilter): Promise<Job[]> {
  // Simulate network latency for async lifecycle showcase
  await new Promise((res) => setTimeout(res, 300));

  let filtered = [...MOCK_JOBS];
  if (filter?.search) {
    const s = filter.search.toLowerCase();
    filtered = filtered.filter(
      (j) =>
        j.title.toLowerCase().includes(s) ||
        j.country.toLowerCase().includes(s) ||
        j.city.toLowerCase().includes(s) ||
        j.category.toLowerCase().includes(s) ||
        j.tags.some((t) => t.toLowerCase().includes(s))
    );
  }
  if (filter?.category && filter.category !== "All") {
    filtered = filtered.filter((j) => j.category === filter.category);
  }
  if (filter?.country && filter.country !== "All") {
    filtered = filtered.filter((j) => j.country === filter.country);
  }
  return filtered;
}
