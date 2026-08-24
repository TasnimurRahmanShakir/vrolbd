"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";
import { Combobox } from "@/components/ui/combobox";
import { AsyncBoundary } from "@/components/common/async-boundary";
import { ApplicationModal } from "@/features/applications/components/application-modal";
import { useJobsSection } from "../hooks/use-jobs-section";

export function JobsInteractiveSection() {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedCountry,
    setSelectedCountry,
    searchQuery,
    setSearchQuery,
    activeApplyingJob,
    setActiveApplyingJob,
    categoryOptions,
    countryOptions,
    jobs,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useJobsSection();

  return (
    <div className="w-full">
      {/* Search & Filter Bar */}
      <div className="p-4 md:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-stretch lg:items-center">
          
          {/* Keyword Search */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
              <Icon name="search" size={20} className="text-[#8C6A2B]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search overseas opportunities (e.g. Engineer, Healthcare, Dubai)..."
              className="w-full pl-11 pr-4 py-3 text-xs md:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-xs"
            />
          </div>

          {/* Combobox Filters */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="w-full sm:w-56">
              <Combobox
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="All Sectors"
                variant="light"
              />
            </div>

            <div className="w-full sm:w-52">
              <Combobox
                options={countryOptions}
                value={selectedCountry}
                onChange={setSelectedCountry}
                placeholder="All Corridors"
                variant="light"
              />
            </div>

            <button
              onClick={() => refetch()}
              type="button"
              className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#8C6A2B] transition-all flex items-center justify-center cursor-pointer shadow-xs shrink-0 self-center sm:self-auto w-full sm:w-auto"
              title="Refresh Listings"
              aria-label="Refresh job listings"
            >
              <Icon name="sync" size={20} className={isRefetching ? "animate-spin" : ""} />
            </button>
          </div>
        </div>
      </div>

      {/* Jobs Grid inside AsyncBoundary */}
      <AsyncBoundary
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={jobs}
        isRefetching={isRefetching}
        onRetry={() => refetch()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs?.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
            >
              {job.featured && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#8C6A2B] border border-[#C5A059]/35">
                  <Icon name="star" size={12} fill />
                  Priority Deployment
                </span>
              )}

              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                  <span className="inline-flex items-center gap-1 text-slate-600">
                    <Icon name="location_on" size={15} className="text-[#8C6A2B]" />
                    {job.city}, {job.country}
                  </span>
                  <span>•</span>
                  <span>{job.category}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0A192F] group-hover:text-[#8C6A2B] transition-colors mb-2 font-['Outfit']">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 border border-slate-200/80 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                <div>
                  <span className="text-[11px] text-slate-500 font-medium block">Compensation Package</span>
                  <span className="text-base font-extrabold text-[#8C6A2B] font-mono">{job.salary}</span>
                </div>

                <button
                  onClick={() => setActiveApplyingJob(job)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-xl shadow-md cursor-pointer"
                >
                  <Icon name="send" size={14} />
                  Deploy Dossier
                </button>
              </div>
            </div>
          ))}
        </div>
      </AsyncBoundary>

      {/* Application Modal */}
      {activeApplyingJob && (
        <ApplicationModal
          jobId={activeApplyingJob.id}
          jobTitle={activeApplyingJob.title}
          onClose={() => setActiveApplyingJob(null)}
        />
      )}
    </div>
  );
}
