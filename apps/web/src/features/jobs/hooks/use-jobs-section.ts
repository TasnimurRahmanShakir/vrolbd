import { useState, useMemo } from "react";
import { useJobs } from "./use-jobs";
import { ComboboxOption } from "@/components/ui/combobox";
import { Job } from "../types/job.types";
import { JOB_CATEGORIES, JOB_COUNTRIES } from "../data/job-categories.data";

export interface UseJobsSectionReturn {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  activeApplyingJob: Job | null;
  setActiveApplyingJob: React.Dispatch<React.SetStateAction<Job | null>>;
  categoryOptions: ComboboxOption[];
  countryOptions: ComboboxOption[];
  jobs: Job[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  isRefetching: boolean;
}

export function useJobsSection(): UseJobsSectionReturn {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeApplyingJob, setActiveApplyingJob] = useState<Job | null>(null);

  const categoryOptions: ComboboxOption[] = useMemo(
    () =>
      JOB_CATEGORIES.map((cat) => ({
        value: cat,
        label: cat === "All" ? "All Sectors" : cat,
        icon: "business_center",
      })),
    []
  );

  const countryOptions: ComboboxOption[] = useMemo(
    () =>
      JOB_COUNTRIES.map((ctry) => ({
        value: ctry,
        label: ctry === "All" ? "All Corridors" : ctry,
        icon: "public",
      })),
    []
  );

  const { data: jobs, isLoading, isError, error, refetch, isRefetching } = useJobs({
    search: searchQuery,
    category: selectedCategory,
    country: selectedCountry,
    page: 1,
    limit: 10,
  });

  return {
    selectedCategory,
    setSelectedCategory,
    selectedCountry,
    setSelectedCountry,
    searchQuery,
    setSearchQuery,
    activeApplyingJob,
    setActiveApplyingJob,
    categoryOptions,
    countryOptions,
    jobs,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  };
}
