import { useQuery } from "@tanstack/react-query";
import { jobKeys } from "@/lib/query-keys";
import { fetchJobs } from "../api/jobs.api";
import { JobFilter } from "../schemas/job.schema";

export function useJobs(filters?: JobFilter) {
  return useQuery({
    queryKey: jobKeys.list(filters as Record<string, unknown>),
    queryFn: () => fetchJobs(filters),
  });
}
