"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";
import { Combobox } from "@/components/ui/combobox";
import { useFloatingSearch } from "../hooks/use-floating-search";

export function HeroFloatingSearch() {
  const {
    language,
    country,
    setCountry,
    industry,
    setIndustry,
    skillLevel,
    setSkillLevel,
    countryOptions,
    industryOptions,
    skillOptions,
    handleSearch,
  } = useFloatingSearch();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <form
        onSubmit={handleSearch}
        className="w-full bg-[#0A192F] border border-[#C5A059]/40 rounded-2xl p-2.5 sm:p-3.5 shadow-[0_20px_50px_rgba(10,25,47,0.45)] hover:border-[#C5A059] transition-all duration-300 relative z-30"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-3 lg:gap-0">
          
          {/* Segment 1: Country Combobox */}
          <div className="lg:col-span-4 px-3 sm:px-4 py-1 lg:border-r lg:border-white/10">
            <Combobox
              options={countryOptions}
              value={country}
              onChange={setCountry}
              label={language === "bn" ? "গন্তব্য করিডোর" : "Destination"}
              icon="public"
              placeholder={language === "bn" ? "দেশ নির্বাচন করুন" : "Select Country"}
              variant="dark"
            />
          </div>

          {/* Segment 2: Industry Combobox */}
          <div className="lg:col-span-4 px-3 sm:px-4 py-1 lg:border-r lg:border-white/10">
            <Combobox
              options={industryOptions}
              value={industry}
              onChange={setIndustry}
              label={language === "bn" ? "কাজের ক্ষেত্র / খাত" : "Industry"}
              icon="business_center"
              placeholder={language === "bn" ? "খাত নির্বাচন করুন" : "Select Industry"}
              variant="dark"
            />
          </div>

          {/* Segment 3: Skill Level Combobox */}
          <div className="lg:col-span-3 px-3 sm:px-4 py-1">
            <Combobox
              options={skillOptions}
              value={skillLevel}
              onChange={setSkillLevel}
              label={language === "bn" ? "দক্ষতার স্তর" : "Skill Level"}
              icon="psychology"
              placeholder={language === "bn" ? "দক্ষতা নির্বাচন করুন" : "Select Level"}
              variant="dark"
            />
          </div>

          {/* Segment 4: Search CTA Button */}
          <div className="lg:col-span-1 flex items-center justify-end px-2 py-1">
            <button
              type="submit"
              className="w-full lg:w-12 h-12 rounded-xl bg-[#C5A059] hover:bg-[#D4AF37] text-[#0A192F] flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer font-bold gap-2"
              title={language === "bn" ? "চাকরি খুঁজুন" : "Search Opportunities"}
              aria-label="Search"
            >
              <Icon name="search" size={22} />
              <span className="lg:hidden text-xs uppercase tracking-wider font-bold">
                {language === "bn" ? "খুঁজুন" : "Search"}
              </span>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
