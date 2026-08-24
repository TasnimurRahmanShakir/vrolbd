import { useState, useMemo, useEffect } from "react";
import { useJobs } from "./use-jobs";
import { ComboboxOption } from "@/components/ui/combobox";
import { Job } from "../types/job.types";
import { JOB_CATEGORIES, JOB_COUNTRIES } from "../data/job-categories.data";

export interface UseJobsSectionReturn {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  activeModalJob: Job | null;
  setActiveModalJob: React.Dispatch<React.SetStateAction<Job | null>>;
  modalInitialMode: "details" | "apply";
  setModalInitialMode: React.Dispatch<React.SetStateAction<"details" | "apply">>;
  handleOpenDetails: (job: Job) => void;
  handleOpenApply: (job: Job) => void;
  categoryOptions: ComboboxOption[];
  countryOptions: ComboboxOption[];
  typeOptions: ComboboxOption[];
  sortOptions: ComboboxOption[];
  jobs: Job[] | undefined;
  paginatedJobs: Job[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  totalCount: number;
  startIndex: number;
  endIndex: number;
  resetFilters: () => void;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  isRefetching: boolean;
}

export function useJobsSection(): UseJobsSectionReturn {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  
  const [activeModalJob, setActiveModalJob] = useState<Job | null>(null);
  const [modalInitialMode, setModalInitialMode] = useState<"details" | "apply">("details");

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

  const typeOptions: ComboboxOption[] = useMemo(
    () => [
      { value: "All", label: "All Job Types", icon: "work" },
      { value: "Full-Time", label: "Full-Time", icon: "schedule" },
      { value: "Contract", label: "Contract", icon: "handshake" },
      { value: "Seasonal", label: "Seasonal", icon: "calendar_month" },
    ],
    []
  );

  const sortOptions: ComboboxOption[] = useMemo(
    () => [
      { value: "default", label: "Default Order", icon: "sort" },
      { value: "positions_desc", label: "Most Open Positions", icon: "group" },
      { value: "featured", label: "Priority Deployment", icon: "star" },
    ],
    []
  );

  const { data: rawJobs, isLoading, isError, error, refetch, isRefetching } = useJobs({
    search: searchQuery,
    category: selectedCategory,
    country: selectedCountry,
  });

  // Client-side filtering and sorting
  const filteredJobs = useMemo(() => {
    if (!rawJobs) return [];
    let list = [...rawJobs];

    if (selectedType !== "All") {
      list = list.filter((j) => j.type === selectedType);
    }

    if (sortBy === "positions_desc") {
      list.sort((a, b) => b.positions - a.positions);
    } else if (sortBy === "featured") {
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [rawJobs, selectedType, sortBy]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedCountry, selectedType, sortBy, pageSize]);

  const totalCount = filteredJobs.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const startIndex = totalCount === 0 ? 0 : (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalCount);

  const paginatedJobs = useMemo(() => {
    return filteredJobs.slice(startIndex, endIndex);
  }, [filteredJobs, startIndex, endIndex]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedCountry("All");
    setSelectedType("All");
    setSortBy("default");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleOpenDetails = (job: Job) => {
    setModalInitialMode("details");
    setActiveModalJob(job);
  };

  const handleOpenApply = (job: Job) => {
    setModalInitialMode("apply");
    setActiveModalJob(job);
  };

  return {
    selectedCategory,
    setSelectedCategory,
    selectedCountry,
    setSelectedCountry,
    selectedType,
    setSelectedType,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    activeModalJob,
    setActiveModalJob,
    modalInitialMode,
    setModalInitialMode,
    handleOpenDetails,
    handleOpenApply,
    categoryOptions,
    countryOptions,
    typeOptions,
    sortOptions,
    jobs: filteredJobs,
    paginatedJobs,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    totalCount,
    startIndex,
    endIndex,
    resetFilters,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  };
}
