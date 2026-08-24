"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";
import { ApplicationModalProps } from "../types/application.types";
import { useApplicationModal } from "../hooks/use-application-modal";

export function ApplicationModal(props: ApplicationModalProps) {
  const { jobId = "job-101", jobTitle = "Senior MEP Project Engineer", onClose } = props;

  const {
    form: {
      register,
      formState: { errors },
    },
    successDossier,
    isPending,
    isError,
    errorMessage,
    onSubmit,
  } = useApplicationModal({
    jobId,
    jobTitle,
    onClose,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B14]/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl p-6 md:p-8 rounded-3xl glass-panel border border-[#C5A059]/30 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isPending}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          type="button"
          aria-label="Close dialog"
        >
          <Icon name="close" size={20} />
        </button>

        {successDossier ? (
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto mb-4">
              <Icon name="verified" className="text-[#C5A059] text-3xl" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
              Deployment Candidate Registered
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">Dossier Successfully Logged</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
              Your candidate profile for <strong className="text-white">{jobTitle}</strong> has been transmitted to the VROLBD Global Verification Desk.
            </p>

            <div className="p-4 rounded-xl bg-[#0F2B48]/60 border border-white/10 mb-6 text-left space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Dossier Reference:</span>
                <span className="font-mono font-bold text-[#C5A059]">{successDossier.dossierId}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Security Clearance Token:</span>
                <span className="font-mono font-bold text-white">{successDossier.trackingCode}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-xl shadow-lg"
            >
              <Icon name="done_all" size={16} />
              Acknowledge & Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
                Overseas Deployment Application
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">{jobTitle}</h2>
              <p className="text-xs text-slate-400 mt-1">
                Please provide accurate governmental and credential verification data.
              </p>
            </div>

            {isError && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                <Icon name="error" size={18} className="text-red-400 shrink-0" />
                <span>{errorMessage || "Transmission failed. Please review your details and retry."}</span>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              <input type="hidden" {...register("jobId")} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    {...register("fullName")}
                    placeholder="e.g. Rafiqul Islam"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F2B48]/80 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Passport / Govt ID Number *
                  </label>
                  <input
                    {...register("passportNumber")}
                    placeholder="e.g. EA0849201"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F2B48]/80 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                  {errors.passportNumber && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.passportNumber.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="candidate@vrolbd.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F2B48]/80 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Direct Contact / WhatsApp *
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="+880 1700-000000"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F2B48]/80 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Trade / Specialization *
                  </label>
                  <input
                    {...register("tradeSkill")}
                    placeholder="e.g. Electrical Engineering"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F2B48]/80 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                  {errors.tradeSkill && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.tradeSkill.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Years of Field Experience *
                  </label>
                  <input
                    type="number"
                    {...register("experienceYears", { valueAsNumber: true })}
                    min={0}
                    max={50}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F2B48]/80 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                  {errors.experienceYears && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.experienceYears.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("declarationAccepted")}
                    className="mt-0.5 rounded border-white/20 text-[#C5A059] focus:ring-[#C5A059]"
                  />
                  <span className="text-[11px] text-slate-300 leading-tight">
                    I confirm that the submitted documentation is genuine and authorize VROLBD to perform background and diplomatic verification.
                  </span>
                </label>
                {errors.declarationAccepted && (
                  <span className="text-[11px] text-red-400 mt-1 block">
                    {errors.declarationAccepted.message}
                  </span>
                )}
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isPending}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] disabled:opacity-50 transition-all rounded-xl shadow-lg"
                >
                  {isPending ? (
                    <>
                      <Icon name="progress_activity" size={16} className="animate-spin" />
                      <span>Transmitting Dossier...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="send" size={16} />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
