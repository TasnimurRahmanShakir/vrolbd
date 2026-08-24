import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitApplication } from "../api/application.api";
import { ApplicationFormData } from "../schemas/application.schema";
import { applicationKeys } from "@/lib/query-keys";

export function useSubmitApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ApplicationFormData) => submitApplication(data),
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: applicationKeys.all });
    },
  });
}
