import { ApplicationFormData, ApplicationSubmissionResult } from "../types/application.types";

export async function submitApplication(
  data: ApplicationFormData
): Promise<ApplicationSubmissionResult> {
  // Simulate processing network request
  await new Promise((res) => setTimeout(res, 800));

  return {
    dossierId: `VROL-${Math.floor(100000 + Math.random() * 900000)}`,
    timestamp: new Date().toISOString(),
    status: "SECURITY_CHECK_PENDING",
    trackingCode: `TRK-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
  };
}
