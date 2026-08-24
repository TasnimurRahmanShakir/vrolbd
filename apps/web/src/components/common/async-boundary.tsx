"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";

export interface AsyncBoundaryProps<T> {
  isLoading: boolean;
  isError: boolean;
  error?: Error | null;
  data?: T[] | null;
  isEmpty?: boolean;
  isRefetching?: boolean;
  onRetry?: () => void;
  loadingFallback?: React.ReactNode;
  emptyFallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
  children: React.ReactNode;
}

export function AsyncBoundary<T>({
  isLoading,
  isError,
  error,
  data,
  isEmpty,
  isRefetching,
  onRetry,
  loadingFallback,
  emptyFallback,
  errorFallback,
  children,
}: AsyncBoundaryProps<T>) {
  if (isLoading) {
    return (
      loadingFallback ?? (
        <div className="flex flex-col items-center justify-center min-h-[220px] p-8 glass-panel rounded-2xl animate-pulse">
          <Icon name="progress_activity" className="animate-spin text-[#C5A059] text-4xl mb-4" />
          <p className="text-sm font-medium text-slate-300">Retrieving intelligence...</p>
        </div>
      )
    );
  }

  if (isError) {
    return (
      errorFallback ?? (
        <div className="flex flex-col items-center justify-center min-h-[220px] p-8 glass-panel rounded-2xl border border-red-500/20 text-center">
          <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
            <Icon name="error" className="text-red-400 text-2xl" />
          </div>
          <h4 className="text-base font-semibold text-white mb-1">Unable to Load Data</h4>
          <p className="text-xs text-slate-400 max-w-sm mb-4">
            {error?.message || "An unexpected error occurred while loading this section. Please try again."}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-lg shadow-md"
            >
              <Icon name="refresh" size={16} />
              Retry Request
            </button>
          )}
        </div>
      )
    );
  }

  const determinedEmpty = isEmpty ?? (Array.isArray(data) && data.length === 0);

  if (determinedEmpty) {
    return (
      emptyFallback ?? (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-8 glass-panel rounded-2xl text-center">
          <div className="w-12 h-12 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center mb-3">
            <Icon name="inventory_2" className="text-slate-400 text-2xl" />
          </div>
          <h4 className="text-sm font-semibold text-slate-200 mb-1">No Records Found</h4>
          <p className="text-xs text-slate-400">There are no active records matching your current criteria.</p>
        </div>
      )
    );
  }

  return (
    <div className="relative">
      {isRefetching && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A192F]/80 border border-[#C5A059]/30 text-[#C5A059] text-[11px] backdrop-blur-md">
          <Icon name="sync" size={14} className="animate-spin" />
          <span>Updating</span>
        </div>
      )}
      {children}
    </div>
  );
}
