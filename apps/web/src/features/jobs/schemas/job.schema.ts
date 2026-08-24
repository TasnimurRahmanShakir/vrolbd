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
  description: z.string().optional(),
  responsibilities: z.array(z.string()).optional(),
  requirements: z.array(z.string()).optional(),
  benefits: z.array(z.string()).optional(),
});

export type Job = z.infer<typeof JobSchema>;

export const JobFilterSchema = z.object({
  search: z.string().optional(),
  country: z.string().optional(),
  category: z.string().optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().optional(),
});

export type JobFilter = z.infer<typeof JobFilterSchema>;
