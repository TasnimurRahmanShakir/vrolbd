import { ApplicationFormData } from "../schemas/application.schema";

export type { ApplicationFormData };

export interface ApplicationSubmissionResult {
  dossierId: string;
  timestamp: string;
  status: "REGISTERED" | "SECURITY_CHECK_PENDING";
  trackingCode: string;
}

export interface ApplicationModalProps {
  jobId?: string;
  jobTitle?: string;
  onClose: () => void;
}
