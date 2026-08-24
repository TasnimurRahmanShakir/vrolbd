import { useState } from "react";
import { useLanguageStore, translations } from "@/stores/language.store";
import { useJobs } from "@/features/jobs/hooks/use-jobs";
import { Job } from "@/features/jobs/types/job.types";

export interface UseMarqueeJobsReturn {
  jobs: Job[] | undefined;
  isLoading: boolean;
  activeJob: Job | null;
  setActiveJob: (job: Job | null) => void;
  language: "en" | "bn";
  t: (typeof translations)["en"]["marquee"];
}

export function useMarqueeJobs(): UseMarqueeJobsReturn {
  const { language } = useLanguageStore();
  const t = translations[language].marquee;
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  const { data: jobs, isLoading } = useJobs({
    search: "",
    category: "All",
    country: "All",
    page: 1,
    limit: 12,
  });

  return {
    jobs,
    isLoading,
    activeJob,
    setActiveJob,
    language,
    t,
  };
}
