import { Job, JobFilter } from "../schemas/job.schema";

export type { Job, JobFilter };

export interface JobFilterParams {
  search?: string;
  category?: string;
  country?: string;
  page?: number;
  limit?: number;
}
