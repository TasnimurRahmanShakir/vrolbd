"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { CountryFlag } from "@/components/ui/country-flag";
import { SectionHeader } from "@/components/common/section-header";
import { useJobs } from "@/features/jobs/hooks/use-jobs";
import { ApplicationModal } from "@/features/applications/components/application-modal";
import { Job } from "@/features/jobs/types/job.types";
import { useLanguageStore } from "@/stores/language.store";
import {
  jobListContainerVariants,
  jobRowVariants,
  VIEWPORT_CONFIG,
} from "@/lib/motion";

function formatCountry(name: string): string {
  if (name === "United Arab Emirates") return "UAE";
  if (name === "Kingdom of Saudi Arabia") return "Saudi Arabia";
  return name;
}

export function LiveMarqueeJobsSection() {
  const { language } = useLanguageStore();

  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [modalMode, setModalMode] = useState<"details" | "apply">("details");

  // Filtering states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { data: allJobs = [], isLoading } = useJobs({
    search: "",
    category: "All",
    country: "All",
    page: 1,
    limit: 20,
  });

  // Extract unique countries and categories from real jobs data
  const availableCountries = useMemo(() => {
    const set = new Set<string>();
    allJobs.forEach((j) => set.add(j.country));
    return ["All", ...Array.from(set)];
  }, [allJobs]);

  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    allJobs.forEach((j) => set.add(j.category));
    return ["All", ...Array.from(set)];
  }, [allJobs]);

  // Client-side filtering for instantaneous reactivity
  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCountry = selectedCountry === "All" || job.country === selectedCountry;
      const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;

      return matchesSearch && matchesCountry && matchesCategory;
    });
  }, [allJobs, searchQuery, selectedCountry, selectedCategory]);

  const handleOpenDetails = (job: Job) => {
    setModalMode("details");
    setActiveJob(job);
  };

  const handleOpenApply = (job: Job, e: React.MouseEvent) => {
    e.stopPropagation();
    setModalMode("apply");
    setActiveJob(job);
  };

  const hasActiveFilters = searchQuery !== "" || selectedCountry !== "All" || selectedCategory !== "All";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCountry("All");
    setSelectedCategory("All");
  };

  return (
    <section id="opportunities" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 🏛️ 1. Section Header: Left-Aligned Editorial with View All Button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <SectionHeader
          tag={language === "bn" ? "চলমান চাকরির সুযোগ" : "Current Job Openings"}
          tagIcon="work"
          heading={language === "bn" ? "বিদেশে আপনার কাঙ্ক্ষিত চাকরি খুঁজুন" : "Explore Overseas Jobs"}
          subheading={
            language === "bn"
              ? "শীর্ষস্থানীয় আন্তর্জাতিক কোম্পানিগুলোতে নিশ্চিত বেতন, আবাসন ও সরকারি অনুমোদনসহ নির্ভরযোগ্য চাকরির সুযোগ।"
              : "Verified jobs in top global companies with confirmed salaries, free accommodation, and complete legal visa processing."
          }
        />

        {/* View All Jobs Gateway Button */}
        <div className="shrink-0 flex items-center gap-3">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#080C14] hover:bg-slate-800 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg group"
          >
            <span>{language === "bn" ? "সব জব দেখুন" : "View All Openings"}</span>
            <Icon name="arrow_forward" size={16} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 🔍 2. Compact, Integrated Job Search & Filter Interface */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#DAC0A3]/40 p-3 sm:p-4 shadow-[0_4px_20px_-4px_rgba(16,44,87,0.06)] mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          {/* Keyword Search Input */}
          <div className="sm:col-span-5 relative">
            <Icon name="search" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === "bn" ? "পদের নাম বা ট্রেড দিয়ে খুঁজুন (যেমন: Welder, Nurse, Engineer)..." : "Search job title or trade (e.g. Welder, Nurse, Engineer)..."}
              className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-500 font-medium focus:outline-none focus:border-[#102C57] focus:bg-white focus:ring-1 focus:ring-[#102C57]/20 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 p-1"
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>

          {/* Country Filter Custom Dropdown with Real Vector Flags */}
          <div className="sm:col-span-3 relative" ref={countryDropdownRef}>
            <button
              type="button"
              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 font-medium flex items-center justify-between gap-2 text-left focus:outline-none focus:border-[#102C57] focus:bg-white transition-all cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-2 truncate">
                {selectedCountry === "All" ? (
                  <>
                    <Icon name="public" size={16} className="text-[#8C6A2B] shrink-0" />
                    <span className="font-semibold text-slate-800">
                      {language === "bn" ? "সব দেশ (All Countries)" : "All Countries"}
                    </span>
                  </>
                ) : (
                  <>
                    <CountryFlag country={selectedCountry} className="w-5 h-3.5" />
                    <span className="font-bold text-slate-900 truncate">{formatCountry(selectedCountry)}</span>
                  </>
                )}
              </div>
              <Icon
                name="expand_more"
                size={18}
                className={`text-slate-600 transition-transform duration-200 shrink-0 ${
                  isCountryDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Custom Dropdown Menu with Graphical Flags */}
            {isCountryDropdownOpen && (
              <div className="absolute z-50 mt-1.5 w-full min-w-[200px] bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
                {availableCountries.map((c) => {
                  const isSelected = selectedCountry === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(c);
                        setIsCountryDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-xs flex items-center justify-between gap-2.5 transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[#C5A059]/10 text-[#8C6A2B] font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        {c === "All" ? (
                          <Icon name="public" size={16} className="text-slate-400 shrink-0" />
                        ) : (
                          <CountryFlag country={c} className="w-5 h-3.5" />
                        )}
                        <span className="truncate">
                          {c === "All" ? (language === "bn" ? "সব দেশ (All Countries)" : "All Countries") : formatCountry(c)}
                        </span>
                      </div>
                      {isSelected && (
                        <Icon name="check" size={15} className="text-[#8C6A2B] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Industry Category Filter Select */}
          <div className="sm:col-span-3 relative">
            <Icon name="work" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all cursor-pointer appearance-none"
            >
              {availableCategories.map((cat) => (
                <option key={cat} value={cat} className="bg-white text-slate-900">
                  {cat === "All" ? (language === "bn" ? "সব ক্যাটাগরি (All Industries)" : "All Industries") : cat}
                </option>
              ))}
            </select>
            <Icon name="expand_more" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Clear / Reset Filter Button */}
          <div className="sm:col-span-1 flex items-center justify-end">
            {hasActiveFilters ? (
              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                title="Reset Filters"
              >
                <Icon name="refresh" size={16} />
                <span className="sm:hidden">{language === "bn" ? "রিসেট" : "Reset"}</span>
              </button>
            ) : (
              <div className="w-full py-2.5 text-center text-[11px] font-mono text-slate-400">
                {filteredJobs.length} {language === "bn" ? "টি" : "jobs"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 💼 3. Spacious Minimal Card Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-64 rounded-2xl bg-white border border-slate-200 animate-pulse" />
          ))}
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="py-16 px-6 text-center rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Icon name="search_off" size={28} />
          </div>
          <h4 className="text-lg font-bold font-serif text-[#080C14]">
            {language === "bn" ? "কোনো চাকরি পাওয়া যায়নি" : "No Openings Match Your Filter"}
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {language === "bn"
              ? "অনুগ্রহ করে অন্য কি-ওয়ার্ড বা দেশ দিয়ে চেষ্টা করুন অথবা সব ফিল্টার রিসেট করুন।"
              : "Try adjusting your search keyword or selected destination country to view active jobs."}
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-[#080C14] text-white text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 cursor-pointer mt-2"
          >
            <Icon name="restart_alt" size={16} className="text-[#C5A059]" />
            <span>{language === "bn" ? "ফিল্টার রিসেট করুন" : "Reset Filters"}</span>
          </button>
        </div>
      ) : (
        <motion.div
          variants={jobListContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredJobs.slice(0, 6).map((job: Job) => {
            return (
              <motion.div
                key={job.id}
                variants={jobRowVariants}
                className="group relative rounded-2xl bg-white border border-[#DAC0A3]/40 hover:border-[#DAC0A3] hover:shadow-[0_12px_28px_-6px_rgba(197,160,89,0.18)] p-5 sm:p-5.5 shadow-[0_4px_16px_-4px_rgba(16,44,87,0.05)] transition-all duration-300 flex flex-col justify-between overflow-hidden text-slate-800"
              >
                <div>
                  {/* Row 1: Category Tag & Employment Type */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#102C57]/10 text-[#102C57] border border-[#102C57]/20 shrink-0">
                      {job.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600">
                      {job.type}
                    </span>
                  </div>

                  {/* Row 2: Job Title */}
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#102C57] leading-snug tracking-tight mb-1.5">
                    {job.title}
                  </h3>

                  {/* Row 3: Destination Country & City */}
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium mb-3">
                    <CountryFlag country={job.country} className="w-4 h-3 rounded-xs shrink-0" />
                    <span className="truncate">{job.city}, {formatCountry(job.country)}</span>
                  </div>

                  {/* Row 4: Salary & Vacancies Block */}
                  <div className="mb-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold block">
                        {language === "bn" ? "নির্ধারিত বেতন" : "Monthly Tax-Free Salary"}
                      </span>
                      <span className="text-sm sm:text-base font-bold font-mono text-[#102C57]">
                        {job.salary}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold block">
                        {language === "bn" ? "শূন্যপদ" : "Openings"}
                      </span>
                      <span className="text-xs font-bold text-[#102C57]">
                        {job.positions} {language === "bn" ? "টি" : "Seats"}
                      </span>
                    </div>
                  </div>

                  {/* Row 5: Minimal Supporting Perk */}
                  {job.benefits && job.benefits.length > 0 && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium truncate mb-1">
                      <Icon name="check_circle" size={13} className="text-[#8C6A2B] shrink-0" />
                      <span className="truncate">{job.benefits[0]}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Footer: Only clicking Details or Apply opens modal */}
                <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenDetails(job)}
                    className="text-xs font-semibold text-[#102C57] hover:text-[#8C6A2B] transition-colors cursor-pointer py-1.5 flex items-center gap-1"
                  >
                    <span>{language === "bn" ? "বিস্তারিত" : "Details"}</span>
                    <Icon name="chevron_right" size={14} className="text-slate-400" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleOpenApply(job, e)}
                    className="px-4 py-2 rounded-xl bg-[#102C57] hover:bg-[#102C57]/90 text-[#F8F0E5] border border-[#DAC0A3]/30 text-xs font-bold transition-all shadow-xs hover:shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{language === "bn" ? "আবেদন করুন" : "Apply Now"}</span>
                    <Icon name="arrow_forward" size={12} className="text-[#DAC0A3]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* 📋 Application & Job Details Modal */}
      {activeJob && (
        <ApplicationModal
          job={activeJob}
          initialMode={modalMode}
          onClose={() => setActiveJob(null)}
        />
      )}
    </section>
  );
}
