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
