import { z } from "zod";

export const JobSchema = z.object({
  id: z.string(),
  title: z.string(),
  country: z.string(),
  city: z.string(),
  category: z.string(),
  salary: z.string(),
  positions: z.number().int().positive(),
  deadline: z.string(),
  type: z.enum(["Full-Time", "Contract", "Seasonal"]),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
});

export type Job = z.infer<typeof JobSchema>;

export const JobFilterSchema = z.object({
  search: z.string().optional(),
  country: z.string().optional(),
  category: z.string().optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().default(10),
});

export type JobFilter = z.infer<typeof JobFilterSchema>;
