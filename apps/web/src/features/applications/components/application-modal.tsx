"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";
import { ApplicationModalProps } from "../types/application.types";
import { useApplicationModal } from "../hooks/use-application-modal";

export function ApplicationModal(props: ApplicationModalProps) {
  const {
    jobId = "job-101",
    jobTitle = "Senior MEP Project Engineer",
    job,
    initialMode = "details",
    onClose,
  } = props;

  const { language } = useLanguageStore();
  const t = translations[language].jobModal;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    form: {
      register,
      formState: { errors },
    },
    viewMode,
    setViewMode,
    selectedFile,
    handleFileSelect,
    fileError,
    successResult,
    isPending,
    isError,
    errorMessage,
    onSubmit,
  } = useApplicationModal({
    jobId,
    jobTitle,
    initialMode,
    onClose,
  });

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && !isPending) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#050B14]/85 backdrop-blur-md"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#0A192F] text-white rounded-3xl border border-[#C5A059]/35 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden max-h-[88vh] flex flex-col"
      >
        {/* 📌 Pinned Header Navigation Bar */}
        <div className="px-6 py-3.5 bg-[#0F243B] border-b border-white/10 flex items-center justify-between gap-4 shrink-0">
          {!successResult ? (
            <div className="inline-flex p-1 rounded-full bg-[#0A192F] border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode("details")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "details"
                    ? "bg-[#C5A059] text-[#0A192F] shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.tabDetails}
              </button>
              <button
                type="button"
                onClick={() => setViewMode("apply")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "apply"
                    ? "bg-[#C5A059] text-[#0A192F] shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.tabApply}
              </button>
            </div>
          ) : (
            <span className="text-xs font-mono font-bold text-[#C5A059] flex items-center gap-1.5">
              <Icon name="verified" size={16} />
              <span>{t.successBadge}</span>
            </span>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            disabled={isPending}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-auto cursor-pointer"
            type="button"
            aria-label="Close dialog"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* 📜 Scrollable Middle Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1 space-y-6">
          {successResult ? (
            /* ------------------ SUCCESS VIEW ------------------ */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                <Icon name="verified" className="text-[#C5A059] text-3xl" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                  {t.successBadge}
                </span>
                <h3 className="text-2xl font-bold font-serif text-white mt-1">
                  {t.successTitle}
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                  {t.successSub}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F243B] border border-[#C5A059]/30 text-left space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-white/10">
                  <span className="text-slate-400">{t.appRef}</span>
                  <span className="font-mono font-bold text-[#C5A059] text-sm">
                    {successResult.applicationId}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-white/10">
                  <span className="text-slate-400">{t.trackingToken}</span>
                  <span className="font-mono font-bold text-white">
                    {successResult.trackingCode}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>{t.targetPost}</span>
                  <span className="font-semibold text-slate-200">{jobTitle}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 transition-transform hover:scale-[1.02] rounded-xl shadow-lg cursor-pointer"
                >
                  <Icon name="done_all" size={16} />
                  <span>{t.btnAcknowledge}</span>
                </button>
              </div>
            </div>
          ) : viewMode === "details" ? (
            /* ------------------ PROFESSIONAL ITEMIZED DETAILS VIEW ------------------ */
            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-2.5 pb-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                    {job?.category || "Requisition"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {job?.type || "Full-Time"}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  {jobTitle}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Icon name="location_on" size={16} className="text-[#C5A059]" />
                    {job ? `${job.city}, ${job.country}` : "GCC Corridors"}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[#C5A059] font-bold">
                    <Icon name="payments" size={16} />
                    {job?.salary || "Competitive Tax-Free"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="group" size={16} className="text-slate-400" />
                    {job ? `${job.positions} ${t.positionsCount}` : `10+ ${t.positionsCount}`}
                  </span>
                </div>
              </div>

              {/* Position Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                  {t.overview}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {job?.description ||
                    "Join premier international corporate mega-projects with government-accredited employment contracts, competitive tax-free earnings, and verified corporate boarding."}
                </p>
              </div>

              {/* 📋 Itemized Key Responsibilities */}
              {job?.responsibilities && job.responsibilities.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
                    <Icon name="task_alt" size={15} />
                    <span>{t.responsibilities}</span>
                  </h4>
                  <ul className="space-y-2 pl-1">
                    {job.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 📋 Itemized Requirements & Qualifications */}
              {job?.requirements && job.requirements.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
                    <Icon name="verified" size={15} />
                    <span>{t.requirements}</span>
                  </h4>
                  <ul className="space-y-2 pl-1">
                    {job.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E2CB8F] mt-2 shrink-0" />
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Corporate Benefits */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0F243B] to-[#173B61] border border-[#C5A059]/30 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
                  <Icon name="military_tech" size={16} />
                  <span>{t.verifiedPackage}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <Icon name="flight_takeoff" size={15} className="text-[#C5A059]" />
                    <span>{t.benefitAirfare}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="home_work" size={15} className="text-[#C5A059]" />
                    <span>{t.benefitHousing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="health_and_safety" size={15} className="text-[#C5A059]" />
                    <span>{t.benefitMedical}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="badge" size={15} className="text-[#C5A059]" />
                    <span>{t.benefitBmet}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ------------------ APPLY NOW FORM VIEW ------------------ */
            <div>
              <div className="mb-5 space-y-1">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                  {t.formHeading}
                </span>
                <h2 className="text-xl font-bold font-serif text-white">{jobTitle}</h2>
                <p className="text-xs text-slate-400">
                  {t.formSubheading}
                </p>
              </div>

              {isError && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                  <Icon name="error" size={18} className="text-red-400 shrink-0" />
                  <span>{errorMessage || "Application submission failed. Please review your details and retry."}</span>
                </div>
              )}

              <form id="application-form" onSubmit={onSubmit} className="space-y-4">
                <input type="hidden" {...register("jobId")} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.fullName}
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder={t.fullNamePlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F243B] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.passport}
                    </label>
                    <input
                      {...register("passportNumber")}
                      placeholder={t.passportPlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F243B] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
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
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F243B] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.phone}
                    </label>
                    <input
                      {...register("phone")}
                      placeholder={t.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F243B] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
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
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.trade}
                    </label>
                    <input
                      {...register("tradeSkill")}
                      placeholder={t.tradePlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F243B] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    {errors.tradeSkill && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.tradeSkill.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.experience}
                    </label>
                    <input
                      type="number"
                      {...register("experienceYears", { valueAsNumber: true })}
                      min={0}
                      max={50}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F243B] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    {errors.experienceYears && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.experienceYears.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* 📄 MANDATORY CV / RESUME UPLOAD SECTION */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-300">
                      {t.cvLabel} <span className="text-[#C5A059] font-normal">{t.cvMandatory}</span>
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono">PDF, DOC, DOCX (Max 10MB)</span>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      handleFileSelect(file);
                    }}
                  />

                  {selectedFile ? (
                    <div className="p-3.5 rounded-xl bg-[#0F243B] border border-[#C5A059]/50 flex items-center justify-between gap-3 shadow-sm">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                          <Icon name="description" size={20} />
                        </div>
                        <div className="truncate">
                          <span className="block text-xs font-bold text-white truncate">
                            {selectedFile.name}
                          </span>
                          <span className="block text-[10px] text-slate-400 font-mono">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • {t.cvAttached}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          handleFileSelect(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                        title="Remove file"
                      >
                        <Icon name="delete" size={18} />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`p-4 rounded-xl border-2 border-dashed transition-all duration-200 text-center cursor-pointer flex flex-col items-center justify-center gap-1.5 group ${
                        fileError
                          ? "border-red-400/80 bg-red-500/5"
                          : "border-white/20 hover:border-[#C5A059] bg-[#0F243B]/60 hover:bg-[#0F243B]"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#C5A059]/20 group-hover:text-[#C5A059] text-slate-300 flex items-center justify-center transition-colors">
                        <Icon name="cloud_upload" size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white group-hover:text-[#C5A059] transition-colors block">
                          {t.cvPrompt}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {t.cvHint}
                        </span>
                      </div>
                    </div>
                  )}

                  {fileError && (
                    <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                      <Icon name="error" size={14} />
                      <span>{fileError}</span>
                    </span>
                  )}
                </div>

                {/* Declaration Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("declarationAccepted")}
                      className="mt-0.5 rounded border-white/20 text-[#C5A059] focus:ring-[#C5A059]"
                    />
                    <span className="text-[11px] text-slate-300 leading-tight">
                      {t.declaration}
                    </span>
                  </label>
                  {errors.declarationAccepted && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.declarationAccepted.message}
                    </span>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>

        {/* 📌 Pinned Footer Action Bar */}
        {!successResult && (
          <div className="px-6 py-3.5 bg-[#0F243B] border-t border-white/10 flex items-center justify-between gap-3 shrink-0">
            {viewMode === "details" ? (
              <>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.btnClose}
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("apply")}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 transition-transform hover:scale-[1.02] rounded-xl shadow-lg cursor-pointer"
                >
                  <Icon name="send" size={15} />
                  <span>{t.btnProceed}</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setViewMode("details")}
                  disabled={isPending}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.btnBack}
                </button>
                <button
                  form="application-form"
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 disabled:opacity-50 transition-all rounded-xl shadow-lg cursor-pointer"
                >
                  {isPending ? (
                    <>
                      <Icon name="progress_activity" size={15} className="animate-spin" />
                      <span>{t.btnSubmitting}</span>
                    </>
                  ) : (
                    <>
                      <Icon name="send" size={15} />
                      <span>{t.btnSubmit}</span>
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
