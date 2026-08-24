import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ApplicationFormData,
  ApplicationFormSchema,
} from "../schemas/application.schema";
import { ApplicationSubmissionResult } from "../types/application.types";
import { useSubmitApplication } from "./use-submit-application";

export interface UseApplicationModalProps {
  jobId: string;
  jobTitle: string;
  onClose: () => void;
}

export interface UseApplicationModalReturn {
  form: UseFormReturn<ApplicationFormData>;
  successDossier: ApplicationSubmissionResult | null;
  isPending: boolean;
  isError: boolean;
  errorMessage: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

export function useApplicationModal({
  jobId,
  jobTitle,
  onClose,
}: UseApplicationModalProps): UseApplicationModalReturn {
  const [successDossier, setSuccessDossier] =
    useState<ApplicationSubmissionResult | null>(null);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(ApplicationFormSchema),
    defaultValues: {
      jobId,
      experienceYears: 3,
      declarationAccepted: false,
    },
  });

  const mutation = useSubmitApplication();

  const handleFormSubmit = async (data: ApplicationFormData) => {
    try {
      const res = await mutation.mutateAsync(data);
      setSuccessDossier(res);
      form.reset();
    } catch {
      // Handled via mutation.isError
    }
  };

  const onSubmit = form.handleSubmit(handleFormSubmit);

  const errorMessage = mutation.isError
    ? mutation.error instanceof Error
      ? mutation.error.message
      : "Transmission failed. Please review your details and retry."
    : null;

  return {
    form,
    successDossier,
    isPending: mutation.isPending,
    isError: mutation.isError,
    errorMessage,
    onSubmit,
  };
}
