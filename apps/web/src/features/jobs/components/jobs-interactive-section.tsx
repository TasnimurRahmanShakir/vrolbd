"use client";

import React, { useState } from "react";
import { useJobs } from "../hooks/use-jobs";
import { Icon } from "@/components/ui/icon";
import { AsyncBoundary } from "@/components/common/async-boundary";
import { ApplicationModal } from "@/features/applications/components/application-modal";
import { Job } from "../schemas/job.schema";

const CATEGORIES = ["All", "Engineering & Construction", "Hospitality & Tourism", "Industrial & Manufacturing", "Healthcare & Medical"];
const COUNTRIES = ["All", "United Arab Emirates", "Qatar", "Kingdom of Saudi Arabia", "Kuwait"];

export function JobsInteractiveSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeApplyingJob, setActiveApplyingJob] = useState<Job | null>(null);

  const { data: jobs, isLoading, isError, error, refetch, isRefetching } = useJobs({
    search: searchQuery,
    category: selectedCategory,
    country: selectedCountry,
    page: 1,
    limit: 10,
  });

  return (
    <div className="w-full">
      {/* Search & Filter Bar */}
      <div className="p-4 md:p-6 rounded-2xl glass-panel mb-8 border border-white/10 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Icon name="search" size={20} className="text-[#C5A059]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search overseas opportunities (e.g. Engineer, Healthcare, Dubai)..."
              className="w-full pl-10 pr-4 py-3 text-xs md:text-sm rounded-xl bg-[#0F2B48]/90 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#C5A059] transition-all"
            />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3.5 py-3 text-xs rounded-xl bg-[#0F2B48]/90 border border-white/10 text-slate-200 focus:outline-none focus:border-[#C5A059]"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="bg-[#0A192F]">
                  {cat === "All" ? "All Sectors" : cat}
                </option>
              ))}
            </select>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-3.5 py-3 text-xs rounded-xl bg-[#0F2B48]/90 border border-white/10 text-slate-200 focus:outline-none focus:border-[#C5A059]"
            >
              {COUNTRIES.map((ctry) => (
                <option key={ctry} value={ctry} className="bg-[#0A192F]">
                  {ctry === "All" ? "All Corridors" : ctry}
                </option>
              ))}
            </select>

            <button
              onClick={() => refetch()}
              type="button"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#C5A059] transition-all flex items-center justify-center"
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
              className="p-6 rounded-2xl glass-card glass-card-hover relative flex flex-col justify-between group"
            >
              {job.featured && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40">
                  <Icon name="star" size={12} fill />
                  Priority Deployment
                </span>
              )}

              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <span className="inline-flex items-center gap-1">
                    <Icon name="location_on" size={16} className="text-[#C5A059]" />
                    {job.city}, {job.country}
                  </span>
                  <span>•</span>
                  <span>{job.category}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors mb-2">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-2">
                <div>
                  <span className="text-[11px] text-slate-400 block">Compensation Package</span>
                  <span className="text-sm font-semibold text-[#C5A059]">{job.salary}</span>
                </div>

                <button
                  onClick={() => setActiveApplyingJob(job)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-xl shadow-md"
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
