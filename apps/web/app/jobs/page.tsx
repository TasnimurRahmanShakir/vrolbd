"use client";

import React from "react";
import { Header, Footer, LanguageWrapper } from "@/components/layout";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { JobsInteractiveSection } from "@/features/jobs/components/jobs-interactive-section";
import { B2BEnterpriseCTASection } from "@/features/home/components/b2b-enterprise-cta-section";
import { useLanguageStore } from "@/stores/language.store";

export default function JobsPage() {
  const { language } = useLanguageStore();

  return (
    <LanguageWrapper>
      <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-x-clip pt-20">
        {/* Ambient Radial Atmospheric Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
        <div className="absolute top-[350px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

        {/* Global Navigation */}
        <Header />

        {/* 🏛️ 1. Hero Header Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F243B] border border-[#C5A059]/40 shadow-sm">
              <Icon name="travel_explore" size={16} className="text-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#E2CB8F]">
                {language === "bn" ? "চলমান আন্তর্জাতিক রিক্রুটমেন্ট" : "Live Overseas Requisitions"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
              {language === "bn" ? (
                <>
                  সরকারি অনুমোদিত কর্মসংস্থান{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C]">
                    আন্তর্জাতিক চাকরির তালিকা
                  </span>
                </>
              ) : (
                <>
                  Government Accredited{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C]">
                    Global Career Opportunities
                  </span>
                </>
              )}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {language === "bn"
                ? "পূর্ব-অনুমোদিত ভিসা কোটা, আকর্ষণীয় করমুক্ত বেতন এবং কোম্পানি-প্রদত্ত ফ্রি আবাসন ও চিকিৎসা সুবিধা সম্বলিত চলমান আন্তর্জাতিক চাকরির তালিকা।"
                : "Explore verified enterprise openings across GCC & European corridors with 100% BMET Smart Card protection, tax-free wages, and furnished corporate boarding."}
            </p>
          </div>
        </section>

        {/* 
          Eye-Relief Slate-50 Section for Clean Tabular Browsing
        */}
        <div className="w-full bg-[#F4F6F9] text-slate-800 relative pt-10 pb-16 transition-colors border-t border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 space-y-12">
            
            {/* 📊 Interactive Tabular Jobs Component */}
            <div>
              <SectionHeader
                tag={language === "bn" ? "সরাসরি চাকরির ডেটাবেজ" : "Interactive Requisitions Portal"}
                tagIcon="table_chart"
                heading={
                  language === "bn"
                    ? "চলমান পদের সম্পূর্ণ বিবরণ ও আবেদন"
                    : "Comprehensive Position Roster & Direct Intake"
                }
                subheading={
                  language === "bn"
                    ? "সার্চ ও ফিল্টারের মাধ্যমে আপনার উপযুক্ত পদটি বেছে নিয়ে সরাসরি সিভি আপলোড করে আবেদন করুন।"
                    : "Filter by sector, country, and employment type. Click any position to view complete job descriptions or apply directly with your CV."
                }
              />

              <div className="mt-8">
                <JobsInteractiveSection />
              </div>
            </div>

            {/* 🚀 B2B Enterprise CTA */}
            <div className="pt-4 border-t border-slate-200/80">
              <B2BEnterpriseCTASection />
            </div>

          </div>
        </div>

        {/* Enterprise Footer with Jolforing tag */}
        <Footer />
      </main>
    </LanguageWrapper>
  );
}
