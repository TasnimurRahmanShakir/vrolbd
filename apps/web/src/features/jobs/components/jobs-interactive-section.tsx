"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { Combobox } from "@/components/ui/combobox";
import { AsyncBoundary } from "@/components/common/async-boundary";
import { ApplicationModal } from "@/features/applications/components/application-modal";
import { useLanguageStore } from "@/stores/language.store";
import { useJobsSection } from "../hooks/use-jobs-section";

export function JobsInteractiveSection() {
  const { language } = useLanguageStore();
  const {
    selectedCategory,
    setSelectedCategory,
    selectedCountry,
    setSelectedCountry,
    selectedType,
    setSelectedType,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    activeModalJob,
    setActiveModalJob,
    modalInitialMode,
    handleOpenDetails,
    handleOpenApply,
    categoryOptions,
    countryOptions,
    typeOptions,
    sortOptions,
    jobs,
    paginatedJobs,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    totalCount,
    startIndex,
    endIndex,
    resetFilters,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useJobsSection();

  const isFiltered =
    selectedCategory !== "All" ||
    selectedCountry !== "All" ||
    selectedType !== "All" ||
    sortBy !== "default" ||
    searchQuery.trim() !== "";

  const quickTags = [
    { label: "Dubai", value: "Dubai" },
    { label: "Saudi Arabia", value: "Saudi" },
    { label: "6G Welder", value: "Welder" },
    { label: "Healthcare", value: "Nursing" },
    { label: "Hospitality", value: "Hospitality" },
    { label: "MEP Engineer", value: "Engineer" },
  ];

  return (
    <div className="w-full space-y-6">
      {/* 🔍 Search & Multi-Filter Console */}
      <div className="p-5 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5">
        {/* Row 1: Full-Width Search Input */}
        <div className="space-y-2.5">
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#8C6A2B]">
              <Icon name="search" size={22} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === "bn"
                  ? "পদের নাম, কাজের দেশ বা বিশেষ ট্রেড স্কিল দিয়ে সার্চ করুন (যেমন: 6G Welder, Nursing, Dubai)..."
                  : "Search positions, trades, or corridors (e.g. 6G Welder, Nursing, Dubai)..."
              }
              className="w-full pl-12 pr-10 py-3 text-xs sm:text-sm rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                aria-label="Clear search"
              >
                <Icon name="close" size={18} />
              </button>
            )}
          </div>

          {/* Quick-Search Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Icon name="bolt" size={13} className="text-[#8C6A2B]" />
              <span>{language === "bn" ? "জনপ্রিয় সার্চ:" : "Trending:"}</span>
            </span>
            {quickTags.map((tag) => (
              <button
                key={tag.label}
                type="button"
                onClick={() => setSearchQuery(tag.value)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-colors cursor-pointer ${
                  searchQuery.toLowerCase() === tag.value.toLowerCase()
                    ? "bg-[#0A192F] text-[#C5A059] font-bold shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Structured 4-Column Dropdown Toolbar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-3 border-t border-slate-100">
          {/* Sector Filter */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {language === "bn" ? "সেক্টর / শিল্পখাত" : "Industry Sector"}
            </label>
            <Combobox
              options={categoryOptions}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder={language === "bn" ? "সব সেক্টর" : "All Sectors"}
              variant="light"
            />
          </div>

          {/* Corridor Filter */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {language === "bn" ? "গন্তব্য দেশ" : "Target Corridor"}
            </label>
            <Combobox
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              placeholder={language === "bn" ? "সব দেশ" : "All Corridors"}
              variant="light"
            />
          </div>

          {/* Job Type Filter */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {language === "bn" ? "চাকরির ধরন" : "Employment Type"}
            </label>
            <Combobox
              options={typeOptions}
              value={selectedType}
              onChange={setSelectedType}
              placeholder={language === "bn" ? "সব ধরন" : "All Job Types"}
              variant="light"
            />
          </div>

          {/* Sort By Filter */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {language === "bn" ? "সাজানোর ক্রম" : "Sort Sequence"}
            </label>
            <Combobox
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              placeholder={language === "bn" ? "সাজানোর ক্রম" : "Sort By"}
              variant="light"
            />
          </div>
        </div>

        {/* Row 3: Live Count, Active Filters & Refresh Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">
              {language === "bn" ? "উপলব্ধ পদসংখ্যা:" : "Active Requisitions:"}
            </span>
            <span className="px-3 py-0.5 rounded-full bg-[#0A192F] text-[#C5A059] font-bold font-mono">
              {totalCount}
            </span>
            {isFiltered && (
              <span className="text-[11px] text-slate-400 font-medium">
                ({language === "bn" ? "ফিল্টার সক্রিয়" : "Filters Active"})
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {isFiltered && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-600 hover:text-red-700 font-bold bg-red-50 hover:bg-red-100 rounded-xl transition-all cursor-pointer"
              >
                <Icon name="filter_alt_off" size={14} />
                <span>{language === "bn" ? "ফিল্টার ক্লিয়ার করুন" : "Clear All Filters"}</span>
              </button>
            )}

            <button
              onClick={() => refetch()}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0A192F] font-bold text-xs transition-all cursor-pointer shadow-xs"
              title={language === "bn" ? "রিফ্রেশ" : "Refresh Listings"}
              aria-label="Refresh job listings"
            >
              <Icon name="sync" size={15} className={isRefetching ? "animate-spin text-[#8C6A2B]" : ""} />
              <span>{language === "bn" ? "রিফ্রেশ" : "Refresh"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 📊 Tabular + Responsive Listing Area */}
      <AsyncBoundary
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={jobs}
        isRefetching={isRefetching}
        onRetry={() => refetch()}
      >
        {paginatedJobs.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Icon name="search_off" size={28} />
            </div>
            <h3 className="text-base font-bold text-[#0A192F]">
              {language === "bn" ? "কোনো চাকরি পাওয়া যায়নি" : "No Positions Found"}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {language === "bn"
                ? "আপনার সার্চ ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।"
                : "Try adjusting your search criteria or clear active filters to view all open requisitions."}
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Icon name="refresh" size={15} />
              <span>{language === "bn" ? "সব পদ দেখুন" : "View All Openings"}</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            
            {/* 🖥️ Desktop & Tablet Tabular View */}
            <div className="hidden md:block rounded-3xl bg-white border border-slate-200/90 shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0A192F] text-white text-[11px] uppercase tracking-wider font-bold border-b border-white/10">
                      <th className="py-4 px-5">
                        {language === "bn" ? "পদের নাম ও ক্যাটাগরি" : "Position & Discipline"}
                      </th>
                      <th className="py-4 px-4">
                        {language === "bn" ? "দেশ / শহর" : "Corridor / Location"}
                      </th>
                      <th className="py-4 px-4">
                        {language === "bn" ? "চাকরির ধরন ও স্কিল" : "Type & Specialization"}
                      </th>
                      <th className="py-4 px-4">
                        {language === "bn" ? "ট্যাক্স-ফ্রি বেতন" : "Tax-Free Salary"}
                      </th>
                      <th className="py-4 px-4">
                        {language === "bn" ? "আবেদনের শেষ তারিখ" : "Deadline"}
                      </th>
                      <th className="py-4 px-5 text-right">
                        {language === "bn" ? "অ্যাকশন" : "Actions"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {paginatedJobs.map((job) => (
                      <tr
                        key={job.id}
                        onClick={() => handleOpenDetails(job)}
                        className="hover:bg-[#FAF8F5] transition-colors group cursor-pointer"
                      >
                        {/* Position & Category */}
                        <td className="py-4 px-5">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-[#0A192F] group-hover:text-[#8C6A2B] transition-colors font-serif">
                                {job.title}
                              </span>
                              {job.featured && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#8C6A2B] border border-[#C5A059]/30">
                                  <Icon name="star" size={11} fill />
                                  <span>Priority</span>
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-slate-500">
                              <span className="px-2 py-0.5 rounded bg-slate-100 font-medium">
                                {job.category}
                              </span>
                              <span>•</span>
                              <span className="font-semibold text-[#8C6A2B]">
                                {job.positions} {language === "bn" ? "টি পদ" : "Positions"}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Location */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5 font-medium text-slate-700">
                            <Icon name="location_on" size={16} className="text-[#8C6A2B] shrink-0" />
                            <span>{job.city}, {job.country}</span>
                          </div>
                        </td>

                        {/* Type & Tags */}
                        <td className="py-4 px-4">
                          <div className="space-y-1.5">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border border-emerald-500/30">
                              {job.type}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {job.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 text-[10px] rounded bg-slate-100 text-slate-600 border border-slate-200"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>

                        {/* Salary */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-mono font-extrabold text-[#8C6A2B] text-xs sm:text-sm">
                            {job.salary}
                          </div>
                          <span className="text-[10px] text-slate-400 block font-mono">
                            {language === "bn" ? "সম্পূর্ণ আবাসন সহ" : "+ Full Boarding"}
                          </span>
                        </td>

                        {/* Deadline */}
                        <td className="py-4 px-4 whitespace-nowrap text-slate-500 text-[11px] font-mono">
                          <div className="flex items-center gap-1">
                            <Icon name="event" size={14} className="text-slate-400" />
                            <span>{job.deadline}</span>
                          </div>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-2">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenDetails(job);
                              }}
                              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0A192F] font-bold text-xs transition-all cursor-pointer"
                            >
                              {language === "bn" ? "বিস্তারিত" : "Details"}
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenApply(job);
                              }}
                              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 text-[#0A192F] font-bold text-xs shadow-xs transition-all cursor-pointer"
                            >
                              <Icon name="send" size={13} />
                              <span>{language === "bn" ? "আবেদন" : "Apply"}</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 📱 Mobile Responsive Card Stream (Visible on mobile) */}
            <div className="md:hidden space-y-4">
              {paginatedJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => handleOpenDetails(job)}
                  className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#8C6A2B] border border-[#C5A059]/30">
                        {job.category}
                      </span>
                      <h3 className="text-base font-bold text-[#0A192F] font-serif mt-1.5 group-hover:text-[#8C6A2B] transition-colors">
                        {job.title}
                      </h3>
                    </div>
                    {job.featured && (
                      <span className="p-1 rounded-full bg-[#C5A059]/20 text-[#8C6A2B]">
                        <Icon name="star" size={14} fill />
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Icon name="location_on" size={15} className="text-[#8C6A2B]" />
                    <span>{job.city}, {job.country}</span>
                    <span>•</span>
                    <span className="font-semibold text-emerald-700">{job.type}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-mono block">Salary</span>
                      <span className="text-xs font-bold text-[#8C6A2B] font-mono">{job.salary}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenDetails(job);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700"
                      >
                        Details
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenApply(job);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-[#C5A059] text-xs font-bold text-[#0A192F]"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 📄 Pagination & Page Size Control Bar */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Count Indicator */}
              <div className="text-xs text-slate-500 font-medium">
                {language === "bn" ? (
                  <>
                    দেখাচ্ছে <strong className="text-slate-800">{startIndex + 1}</strong> থেকে{" "}
                    <strong className="text-slate-800">{endIndex}</strong> (মোট{" "}
                    <strong className="text-slate-800">{totalCount}</strong> টি পদ)
                  </>
                ) : (
                  <>
                    Showing <strong className="text-slate-800">{startIndex + 1}</strong> to{" "}
                    <strong className="text-slate-800">{endIndex}</strong> of{" "}
                    <strong className="text-slate-800">{totalCount}</strong> requisitions
                  </>
                )}
              </div>

              {/* Page Controls */}
              <div className="flex items-center gap-2">
                {/* Page Size Selector */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mr-2">
                  <span>{language === "bn" ? "প্রতি পাতায়:" : "Rows:"}</span>
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#C5A059] cursor-pointer"
                  >
                    <option value={6}>6</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>

                {/* Previous Page Button */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-all cursor-pointer"
                  aria-label="Previous page"
                >
                  <Icon name="chevron_left" size={18} />
                </button>

                {/* Page Number Chips */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-[#0A192F] text-[#C5A059] shadow-xs"
                        : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next Page Button */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-all cursor-pointer"
                  aria-label="Next page"
                >
                  <Icon name="chevron_right" size={18} />
                </button>
              </div>
            </div>

          </div>
        )}
      </AsyncBoundary>

      {/* 📑 Rich Job Details & Application Modal with Mandatory CV Upload */}
      {activeModalJob && (
        <ApplicationModal
          jobId={activeModalJob.id}
          jobTitle={activeModalJob.title}
          job={activeModalJob}
          initialMode={modalInitialMode}
          onClose={() => setActiveModalJob(null)}
        />
      )}
    </div>
  );
}
