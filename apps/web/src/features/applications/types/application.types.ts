import { ApplicationFormData } from "../schemas/application.schema";
import { Job } from "@/features/jobs/types/job.types";

export type { ApplicationFormData };

export interface ApplicationSubmissionResult {
  applicationId: string;
  timestamp: string;
  status: "REGISTERED" | "SECURITY_CHECK_PENDING";
  trackingCode: string;
}

export interface ApplicationModalProps {
  jobId?: string;
  jobTitle?: string;
  job?: Job | null;
  initialMode?: "details" | "apply";
  onClose: () => void;
}
