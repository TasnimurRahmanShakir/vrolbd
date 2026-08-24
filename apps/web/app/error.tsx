"use client";

import { useEffect } from "react";
import { Icon } from "@/components/ui/icon";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error telemetry
    console.error("Route level error captured:", error.message);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-[#0A192F] text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full p-8 md:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mx-auto mb-6">
          <Icon name="shield_with_heart" className="text-[#C5A059] text-3xl" />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059] mb-2 block">
          Enterprise Security & Resiliency
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Session Interrupted
        </h1>
        <p className="text-sm text-slate-300 mb-8 leading-relaxed">
          The requested system operation encountered an unexpected condition. Our enterprise monitoring system has recorded the event.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-xl shadow-lg"
          >
            <Icon name="refresh" size={18} />
            Try Again
          </button>
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-xl"
          >
            <Icon name="home" size={18} />
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
