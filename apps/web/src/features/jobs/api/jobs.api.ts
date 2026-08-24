import { Job, JobFilter } from "../schemas/job.schema";

// Seeded enterprise jobs for VROLBD
const MOCK_JOBS: Job[] = [
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
];

export async function fetchJobs(filter?: JobFilter): Promise<Job[]> {
  // Simulate network latency for async lifecycle showcase
  await new Promise((res) => setTimeout(res, 400));

  let filtered = [...MOCK_JOBS];
  if (filter?.search) {
    const s = filter.search.toLowerCase();
    filtered = filtered.filter(
      (j) =>
        j.title.toLowerCase().includes(s) ||
        j.country.toLowerCase().includes(s) ||
        j.category.toLowerCase().includes(s)
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
