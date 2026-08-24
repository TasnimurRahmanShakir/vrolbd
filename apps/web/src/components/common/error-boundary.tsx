"use client";

import React, { Component, type ErrorInfo, type ReactNode } from "react";
import { Icon } from "@/components/ui/icon";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // In enterprise production, send to telemetry/monitoring without logging raw sensitive stack traces
    console.error("Layered Component Error Caught:", error.message, errorInfo.componentStack);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[280px] p-8 rounded-2xl glass-panel border border-red-500/30 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
            <Icon name="warning" className="text-red-400 text-3xl" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Interface Component Interrupted</h3>
          <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
            A presentation error occurred while rendering this interface module. Security protocols prevented further cascading issues.
          </p>
          <button
            onClick={this.handleReset}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-xl shadow-lg"
          >
            <Icon name="restart_alt" size={18} />
            Recover Interface
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
