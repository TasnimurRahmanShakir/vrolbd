import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ApplicationFormData,
  ApplicationFormSchema,
} from "../schemas/application.schema";
import { ApplicationSubmissionResult } from "../types/application.types";
import { useSubmitApplication } from "./use-submit-application";

export type ModalViewMode = "details" | "apply";

export interface UseApplicationModalProps {
  jobId: string;
  jobTitle: string;
  initialMode?: ModalViewMode;
  onClose: () => void;
}

export interface UseApplicationModalReturn {
  form: UseFormReturn<ApplicationFormData>;
  viewMode: ModalViewMode;
  setViewMode: (mode: ModalViewMode) => void;
  selectedFile: File | null;
  handleFileSelect: (file: File | null) => void;
  fileError: string | null;
  successResult: ApplicationSubmissionResult | null;
  isPending: boolean;
  isError: boolean;
  errorMessage: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

export function useApplicationModal({
  jobId,
  jobTitle,
  initialMode = "details",
  onClose,
}: UseApplicationModalProps): UseApplicationModalReturn {
  const [viewMode, setViewMode] = useState<ModalViewMode>(initialMode);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [successResult, setSuccessResult] =
    useState<ApplicationSubmissionResult | null>(null);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(ApplicationFormSchema),
    defaultValues: {
      jobId,
      experienceYears: 3,
      resumeFileName: "",
      declarationAccepted: false,
    },
  });

  const mutation = useSubmitApplication();

  const handleFileSelect = (file: File | null) => {
    if (!file) {
      setSelectedFile(null);
      form.setValue("resumeFileName", "");
      setFileError("CV / Resume is required");
      return;
    }

    // Check size limit: 10MB
    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10MB limit");
      return;
    }

    // Check extension
    const validExts = [".pdf", ".doc", ".docx"];
    const ext = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!validExts.includes(ext)) {
      setFileError("Invalid file type. Please upload a PDF or Word document (.pdf, .doc, .docx)");
      return;
    }

    setFileError(null);
    setSelectedFile(file);
    form.setValue("resumeFileName", file.name, { shouldValidate: true });
  };

  const handleFormSubmit = async (data: ApplicationFormData) => {
    if (!selectedFile) {
      setFileError("Please upload your CV / Resume before submitting");
      return;
    }
    try {
      const res = await mutation.mutateAsync(data);
      setSuccessResult(res);
      form.reset();
    } catch {
      // Handled via mutation.isError
    }
  };

  const onSubmit = form.handleSubmit(handleFormSubmit);

  const errorMessage = mutation.isError
    ? mutation.error instanceof Error
      ? mutation.error.message
      : "Application transmission failed. Please review your details and retry."
    : null;

  return {
    form,
    viewMode,
    setViewMode,
    selectedFile,
    handleFileSelect,
    fileError,
    successResult,
    isPending: mutation.isPending,
    isError: mutation.isError,
    errorMessage,
    onSubmit,
  };
}
