"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header, Footer, LanguageWrapper } from "@/components/layout";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { KineticOdometer } from "@/components/common/kinetic-odometer";
import { VisionariesSection } from "@/features/home/components/visionaries-section";
import { B2BEnterpriseCTASection } from "@/features/home/components/b2b-enterprise-cta-section";
import { useLanguageStore, translations } from "@/stores/language.store";

export default function AboutPage() {
  const { language } = useLanguageStore();
  const t = translations[language].aboutPage;

  return (
    <LanguageWrapper>
      <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-x-clip pt-20">
        {/* Ambient Radial Atmospheric Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
        <div className="absolute top-[400px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

        {/* Global Navigation */}
        <Header />

        {/* 🏛️ 1. Hero Authority Section */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Government License Authority Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F243B] border border-[#C5A059]/40 shadow-md"
            >
              <Icon name="verified_user" size={16} className="text-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#E2CB8F]">
                {t.badge}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-[1.15]"
            >
              <span className="text-white block">{t.headlineLead}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] block mt-1">
                {t.headlineAccent}
              </span>
            </motion.h1>

            {/* Subheading Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
            >
              {t.heroDesc}
            </motion.p>
          </div>

          {/* 📊 Key Milestones Odometer Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-[#0F243B]/85 backdrop-blur-xl border border-[#C5A059]/30 shadow-2xl"
          >
            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                <KineticOdometer value="18+" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statYears}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                <KineticOdometer value="50000+" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statDeployed}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                <KineticOdometer value="14 Days" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statTurnaround}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono block">
                <KineticOdometer value="99.4%" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statRetention}</span>
            </div>
          </motion.div>
        </section>

        {/* 
          Eye-Relief Slate-50 Section Foundation
        */}
        <div className="w-full bg-[#F4F6F9] text-slate-800 relative pt-12 pb-16 transition-colors border-t border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 space-y-16">
            
            {/* 📜 2. Mission, Vision & Zero-Exploitation Charter Bento */}
            <section className="space-y-8">
              <SectionHeader
                tag={t.missionTag}
                tagIcon="flag"
                heading={t.missionHeading}
                subheading={t.missionSubheading}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mission Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:border-[#C5A059] transition-all space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#C5A059] flex items-center justify-center shadow-md">
                    <Icon name="rocket_launch" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors">
                    {t.cardMissionTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t.cardMissionDesc}
                  </p>
                </div>

                {/* Vision Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:border-[#C5A059] transition-all space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#C5A059] flex items-center justify-center shadow-md">
                    <Icon name="visibility" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors">
                    {t.cardVisionTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t.cardVisionDesc}
                  </p>
                </div>

                {/* Charter Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:border-[#C5A059] transition-all space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#C5A059] flex items-center justify-center shadow-md">
                    <Icon name="shield_with_heart" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors">
                    {t.cardCharterTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t.cardCharterDesc}
                  </p>
                </div>

                {/* ISO Quality Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:border-[#C5A059] transition-all space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#C5A059] flex items-center justify-center shadow-md">
                    <Icon name="verified" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors">
                    {t.cardQualityTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t.cardQualityDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* 🏗️ 3. State-of-the-Art Technical Infrastructure */}
            <section className="space-y-8">
              <SectionHeader
                tag={t.infraTag}
                tagIcon="domain"
                heading={t.infraHeading}
                subheading={t.infraSubheading}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="precision_manufacturing" size={22} />
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "৬জি ও পাইপ ওয়েল্ডিং ল্যাব" : "6G & Pipe Welding Bay"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "অ্যারামকো ও আন্তর্জাতিক এসটিএস কোডে সার্টিফাইড পাইপ, টিআইজি ও এমআইজি টেস্ট বুথ।"
                      : "Aramco & ASME certified test booths for multi-axis TIG, MIG, and high-pressure alloy pipe fabrication."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="hvac" size={22} />
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "সেন্ট্রাল এইচভিএসি ও চিলার ল্যাব" : "Central HVAC & Chiller Rigs"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "মেগাপ্রজেক্ট ও বহুতল ভবনের সেন্ট্রাল চিলার, ডাক্ট ও বিএমএস কন্ট্রোল সিস্টেম টেস্ট।"
                      : "Commercial chiller overhaul, duct fabrication, and BMS automated thermostatic test systems."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="electric_bolt" size={22} />
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "হাই-ভোল্টেজ ও পিএলসি অটোমেশন" : "Industrial High-Voltage & PLC"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "ইন্ডাস্ট্রিয়াল সাবস্টেশন, মোটর ওয়্যারিং ও সিমেন্স/স্নাইডার পিএলসি প্রোগ্রামিং।"
                      : "Substation commissioning, 3-phase industrial switchgear, and PLC diagnostic rigs."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="hotel" size={22} />
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "৫-স্টার হসপিটালিটি ট্রেনিং সুইট" : "5-Star Luxury Hospitality Suite"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "আন্তর্জাতিক এফঅ্যান্ডবি, ব্যাংকোয়েট ও শেফ ট্রেনিং কিচেন।"
                      : "Simulated concierge front desk, HACCP culinary kitchens, and fine dining service training."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="medical_services" size={22} />
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "নার্সিং ও আইসিইউ সিমুলেশন" : "Clinical Nursing & ICU Simulation"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "কুয়েত এমওএইচ ও সৌদি স্বাস্থ্য মন্ত্রণালয়ের বিএলএস/এসিএলএস ক্লিনিক্যাল ল্যাব।"
                      : "MOH compliant acute critical care monitoring, emergency trauma response, and medical English training."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="forklift" size={22} />
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "হেভি ইকুইপমেন্ট ও হাইড্রোলিক্স" : "Heavy Machinery & Hydraulics"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "ক্যাট ও কোমাতসু এক্সকাভেটর, ক্রেন ও হাইড্রোলিক ডায়াগনস্টিক ট্রেইনিং ইয়ার্ড।"
                      : "Crawler cranes, heavy excavators, telehandlers, and hydraulic pressure testing yards."}
                  </p>
                </div>
              </div>
            </section>

            {/* 👥 4. Board of Directors (The Visionaries Section) */}
            <div className="border-t border-slate-200/80 pt-10">
              <VisionariesSection />
            </div>

            {/* 🌐 5. Global Diplomatic Footprint & Offices */}
            <section className="space-y-8 border-t border-slate-200/80 pt-10">
              <SectionHeader
                tag={t.corridorTag}
                tagIcon="public"
                heading={t.corridorHeading}
                subheading={t.corridorSubheading}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#8C6A2B] border border-[#C5A059]/30 inline-block mb-1">
                    Dhaka Headquarters
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F]">VROLBD Corporate Tower</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banani Commercial Area, Dhaka 1213, Bangladesh. Comprehensive candidate biometric screening, central trade testing, and ministry consular hub.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 inline-block mb-1">
                    UAE & GCC Regional Office
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F]">Dubai Business Bay</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prime Tower, Business Bay, Dubai, UAE. Overseeing employer mobilization, MoHRE compliance, and corporate client support across the Emirates.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-700 border border-blue-500/30 inline-block mb-1">
                    Saudi Corridor Office
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F]">Riyadh King Fahd Corridor</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    King Fahd Road, Riyadh, KSA. Fast-track Qiwa electronic visa endorsement and NEOM / Red Sea mega-project site boarding coordination.
                  </p>
                </div>
              </div>
            </section>

            {/* 🚀 6. Enterprise Manpower Call to Action */}
            <div className="pt-4">
              <B2BEnterpriseCTASection />
            </div>

          </div>
        </div>

        {/* Global Footer with Developed by Jolforing */}
        <Footer />
      </main>
    </LanguageWrapper>
  );
}
