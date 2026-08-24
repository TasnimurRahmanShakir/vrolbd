
export const jobKeys = {
  all: ["jobs"] as const,
  lists: () => [...jobKeys.all, "list"] as const,
  list: (filters: Record<string, unknown> = {}) => [...jobKeys.lists(), filters] as const,
  details: () => [...jobKeys.all, "detail"] as const,
  detail: (id: string | number) => [...jobKeys.details(), id] as const,
};

export const applicationKeys = {
  all: ["applications"] as const,
  lists: () => [...applicationKeys.all, "list"] as const,
  list: (filters: Record<string, unknown> = {}) => [...applicationKeys.lists(), filters] as const,
  details: () => [...applicationKeys.all, "detail"] as const,
  detail: (id: string | number) => [...applicationKeys.details(), id] as const,
};

export const candidateKeys = {
  all: ["candidates"] as const,
  lists: () => [...candidateKeys.all, "list"] as const,
  list: (filters: Record<string, unknown> = {}) => [...candidateKeys.lists(), filters] as const,
  details: () => [...candidateKeys.all, "detail"] as const,
  detail: (id: string | number) => [...candidateKeys.details(), id] as const,
};
