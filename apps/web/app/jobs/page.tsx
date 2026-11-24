"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { JobsInteractiveSection } from "@/features/jobs/components/jobs-interactive-section";
import { B2BEnterpriseCTASection } from "@/features/home/components/b2b-enterprise-cta-section";
import { useLanguageStore } from "@/stores/language.store";

export default function JobsPage() {
  const { language } = useLanguageStore();

  return (
    <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-x-clip pt-20">
      {/* Ambient Radial Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
      <div className="absolute top-[350px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

        {/* 👷 Global Career Opportunities & Professional Engineering Background */}
        <div className="absolute top-0 right-0 w-full sm:w-[70%] lg:w-[55%] h-[560px] sm:h-[620px] pointer-events-none overflow-hidden select-none z-0">
          <Image
            src="/images/jobs-career-hero.webp"
            alt="International Career Opportunities & Workforce Recruitment"
            fill
            unoptimized
            priority
            className="object-cover object-center opacity-70 sm:opacity-85 [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0.85)_40%,transparent_100%)]"
          />
          {/* Protective Left & Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/50" />
        </div>

        {/* 🏛️ 1. Hero Header Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl space-y-4 relative z-10">
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
          🌫️ Centralized Token Light Zone for Clean Tabular Browsing
        */}
        <div 
          className="w-full bg-canvas-base text-brand-black relative pt-10 pb-16 transition-colors border-t border-black/10"
          style={{ backgroundColor: "var(--canvas-base, #F7F4F3)", color: "var(--brand-black, #080708)" }}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 space-y-10">

            {/* 💬 Direct WhatsApp Candidate Fast-Track Help Desk (Solves No-CV Barrier) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#B2B6BD]/50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                  <Icon name="chat" size={24} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-brand-black leading-tight">
                    {language === "bn" ? "সিভি নেই? সরাসরি WhatsApp-এ আবেদন করুন" : "No CV Ready? Apply Directly on WhatsApp"}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === "bn" 
                      ? "পাসপোর্ট ও ট্রেড স্কিলের বিবরণ সরাসরি আমাদের অফিসিয়াল নম্বরে পাঠিয়ে প্রাথমিক স্ক্রিনিং নিশ্চিত করুন।"
                      : "Send your passport copy and trade details directly to our verified recruitment desk."}
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/8801916600229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all hover:scale-[1.02] shrink-0"
              >
                <Icon name="send" size={15} />
                <span>{language === "bn" ? "WhatsApp-এ মেসেজ পাঠান" : "Direct WhatsApp Apply"}</span>
              </a>
            </div>
            
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

            {/* 🔍 Candidate Application Tracking & Visa Status Desk */}
            <div id="tracking" className="p-6 sm:p-8 rounded-3xl bg-white border border-[#B2B6BD]/50 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080708]/8 border border-black/15 text-[11px] font-bold text-[#080708]">
                  <Icon name="verified" size={14} className="text-[#B8860B]" />
                  <span>{language === "bn" ? "ভিসা ও আবেদন ট্র্যাকিং" : "Application & Visa Tracking"}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#080708]">
                  {language === "bn" ? "ইতিমধ্যে আবেদন করেছেন? স্ট্যাটাস জানুন" : "Already Applied? Track Your Visa File Status"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === "bn"
                    ? "আপনার পাসপোর্ট নম্বর বা রেফারেন্স টোকেন দিয়ে সরাসরি আমাদের কমপ্লায়েন্স হেল্পডেস্কে যোগাযোগ করে মেডিকেল, ভিসা স্ট্যাম্পিং বা ফ্লাইটের সর্বশেষ আপডেট জানুন।"
                    : "Track your medical clearance, consular visa endorsement, and BMET Smart Card flight status directly with your passport number."}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://wa.me/8801916600239?text=Hello%2C%20I%20want%20to%20track%20my%20visa%20application%20status."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#080708] hover:bg-[#1a191a] text-white border border-[#FDC600]/40 text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  <Icon name="search" size={15} className="text-[#FDC600]" />
                  <span>{language === "bn" ? "ফাইল স্ট্যাটাস চেক করুন" : "Track File on WhatsApp"}</span>
                </a>
              </div>
            </div>

            {/* 🚀 B2B Enterprise CTA */}
            <div className="pt-4 border-t border-[#B2B6BD]/30">
              <B2BEnterpriseCTASection />
            </div>

          </div>
      </div>
    </main>
  );
}
