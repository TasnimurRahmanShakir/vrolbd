import { z } from "zod";

export const ApplicationFormSchema = z.object({
  jobId: z.string().min(1, "Please select a target position"),
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  passportNumber: z
    .string()
    .min(6, "Valid passport number is required")
    .regex(/^[A-Z0-9]+$/i, "Must contain only letters and numbers"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  experienceYears: z
    .number({ message: "Years of experience is required" })
    .min(0, "Cannot be negative")
    .max(50, "Invalid experience value"),
  tradeSkill: z.string().min(2, "Primary trade skill is required"),
  declarationAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and government clearance declaration"),
});

export type ApplicationFormData = z.infer<typeof ApplicationFormSchema>;
