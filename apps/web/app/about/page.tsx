"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { KineticOdometer } from "@/components/common/kinetic-odometer";
import { AboutHeroWorldMap } from "@/features/about/components/about-hero-world-map";
import { PresidentMessageSection } from "@/features/home/components/president-message-section";
import { B2BEnterpriseCTASection } from "@/features/home/components/b2b-enterprise-cta-section";
import { useLanguageStore, translations } from "@/stores/language.store";

export default function AboutPage() {
  const { language } = useLanguageStore();
  const t = translations[language].aboutPage;

  return (
    <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-x-clip pt-20">
      {/* Ambient Radial Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
      <div className="absolute top-[400px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

        {/* 🗺️ Full-Page Connecting World Map Background (Anchored to Right Edge) */}
        <AboutHeroWorldMap />

        {/* 🏛️ 1. Hero Authority Section */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-4xl space-y-6 relative z-10">
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
          🌫️ Centralized Token Light Zone with Zebra Separation
        */}
        <div 
          className="w-full bg-canvas-base text-brand-black relative pt-12 pb-16 transition-colors border-t border-black/10"
          style={{ backgroundColor: "var(--canvas-base, #F7F4F3)", color: "var(--brand-black, #080708)" }}
        >
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
                {/* 🚀 1. Mission Card (Royal Navy & Gold Gradient) */}
                <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#080708] via-[#121112] to-[#080708] border border-[#FDC600]/40 text-white shadow-xl hover:border-[#FDC600] hover:shadow-[0_22px_45px_rgba(8,7,8,0.35)] transition-all duration-300 hover:-translate-y-1 space-y-4 group relative overflow-hidden">
                  {/* Subtle Golden Ambient Corner Glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FDC600]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FDC600]/25 transition-all" />
                  
                  <div className="w-12 h-12 rounded-2xl bg-[#FDC600]/15 text-[#FDC600] border border-[#FDC600]/30 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon name="rocket_launch" size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#FDC600] transition-colors">
                    {t.cardMissionTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                    {t.cardMissionDesc}
                  </p>
                </div>

                {/* 👁️ 2. Vision Card (Twilight Blue & Cyan Glow Gradient) */}
                <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1929] via-[#091522] to-[#080708] border border-blue-400/30 text-white shadow-xl hover:border-[#FDC600] hover:shadow-[0_22px_45px_rgba(12,25,41,0.35)] transition-all duration-300 hover:-translate-y-1 space-y-4 group relative overflow-hidden">
                  {/* Subtle Blue Ambient Corner Glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-400/25 transition-all" />
                  
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-300 border border-blue-400/30 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon name="visibility" size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#FDC600] transition-colors">
                    {t.cardVisionTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                    {t.cardVisionDesc}
                  </p>
                </div>

                {/* 🛡️ 3. Charter Card (Emerald-Navy Ethical Protocol Gradient) */}
                <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#07201c] via-[#051614] to-[#080708] border border-emerald-500/35 text-white shadow-xl hover:border-emerald-400 hover:shadow-[0_22px_45px_rgba(7,32,28,0.35)] transition-all duration-300 hover:-translate-y-1 space-y-4 group relative overflow-hidden">
                  {/* Subtle Emerald Ambient Corner Glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-400/25 transition-all" />
                  
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon name="shield_with_heart" size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-emerald-300 transition-colors">
                    {t.cardCharterTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                    {t.cardCharterDesc}
                  </p>
                </div>

                {/* 🏆 4. ISO Quality Card (Rich Amber-Gold & Dark Gradient) */}
                <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1c1808] via-[#121112] to-[#080708] border border-[#FDC600]/40 text-white shadow-xl hover:border-[#FDC600] hover:shadow-[0_22px_45px_rgba(253,198,0,0.2)] transition-all duration-300 hover:-translate-y-1 space-y-4 group relative overflow-hidden">
                  {/* Subtle Gold Ambient Corner Glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FDC600]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FDC600]/30 transition-all" />
                  
                  <div className="w-12 h-12 rounded-2xl bg-[#FDC600]/20 text-[#FDC600] border border-[#FDC600]/40 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon name="verified" size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#FDC600] transition-colors">
                    {t.cardQualityTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                    {t.cardQualityDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* 🏗️ 3. State-of-the-Art Technical Infrastructure (Zebra Contrast Rhythm) */}
            <section 
              className="space-y-8 p-6 sm:p-10 rounded-3xl bg-canvas-zebra border border-[#B2B6BD]/40 shadow-xs"
              style={{ backgroundColor: "var(--canvas-zebra, #EAE6E4)" }}
            >
              <SectionHeader
                tag={t.infraTag}
                tagIcon="domain"
                heading={t.infraHeading}
                subheading={t.infraSubheading}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. 6G & Pipe Welding Bay */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#B2B6BD]/50 shadow-md hover:border-[#FDC600] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/sectors/engineering.webp"
                        alt="6G & Pipe Welding Bay"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#FDC600] flex items-center justify-center shadow-sm">
                        <Icon name="precision_manufacturing" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          Aramco & ASME Certified
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#080708] font-serif group-hover:text-[#B8860B] transition-colors mb-2">
                      {language === "bn" ? "৬জি ও পাইপ ওয়েল্ডিং ল্যাব" : "6G & Pipe Welding Bay"}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {language === "bn"
                        ? "অ্যারামকো ও আন্তর্জাতিক এসটিএস কোডে সার্টিফাইড পাইপ, টিআইজি ও এমআইজি টেস্ট বুথ।"
                        : "Aramco & ASME certified test booths for multi-axis TIG, MIG, and high-pressure alloy pipe fabrication."}
                    </p>
                  </div>
                </div>

                {/* 2. Central HVAC & Chiller Rigs */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#B2B6BD]/50 shadow-md hover:border-[#FDC600] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/sectors/construction.webp"
                        alt="Central HVAC & Chiller Rigs"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#FDC600] flex items-center justify-center shadow-sm">
                        <Icon name="hvac" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          BMS Automated Diagnostics
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#080708] font-serif group-hover:text-[#B8860B] transition-colors mb-2">
                      {language === "bn" ? "সেন্ট্রাল এইচভিএসি ও চিলার ল্যাব" : "Central HVAC & Chiller Rigs"}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {language === "bn"
                        ? "মেগাপ্রজেক্ট ও বহুতল ভবনের সেন্ট্রাল চিলার, ডাক্ট ও বিএমএস কন্ট্রোল সিস্টেম টেস্ট।"
                        : "Commercial chiller overhaul, duct fabrication, and BMS automated thermostatic test systems."}
                    </p>
                  </div>
                </div>

                {/* 3. Industrial High-Voltage & PLC */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#B2B6BD]/50 shadow-md hover:border-[#FDC600] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/sectors/manufacturing.webp"
                        alt="Industrial High-Voltage & PLC"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#FDC600] flex items-center justify-center shadow-sm">
                        <Icon name="electric_bolt" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          Siemens & Schneider Automation
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#080708] font-serif group-hover:text-[#B8860B] transition-colors mb-2">
                      {language === "bn" ? "হাই-ভোল্টেজ ও পিএলসি অটোমেশন" : "Industrial High-Voltage & PLC"}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {language === "bn"
                        ? "ইন্ডাস্ট্রিয়াল সাবস্টেশন, মোটর ওয়্যারিং ও সিমেন্স/স্নাইডার পিএলসি প্রোগ্রামিং।"
                        : "Substation commissioning, 3-phase industrial switchgear, and PLC diagnostic rigs."}
                    </p>
                  </div>
                </div>

                {/* 4. 5-Star Luxury Hospitality Suite */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#B2B6BD]/50 shadow-md hover:border-[#FDC600] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/sectors/hospitality.webp"
                        alt="5-Star Luxury Hospitality Suite"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#FDC600] flex items-center justify-center shadow-sm">
                        <Icon name="hotel" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          HACCP Culinary & Concierge
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#080708] font-serif group-hover:text-[#B8860B] transition-colors mb-2">
                      {language === "bn" ? "৫-স্টার হসপিটালিটি ট্রেনিং সুইট" : "5-Star Luxury Hospitality Suite"}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {language === "bn"
                        ? "আন্তর্জাতিক এফঅ্যান্ডবি, ব্যাংকোয়েট ও শেফ ট্রেনিং কিচেন।"
                        : "Simulated concierge front desk, HACCP culinary kitchens, and fine dining service training."}
                    </p>
                  </div>
                </div>

                {/* 5. Clinical Nursing & ICU Simulation */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#B2B6BD]/50 shadow-md hover:border-[#FDC600] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/sectors/healthcare.webp"
                        alt="Clinical Nursing & ICU Simulation"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#FDC600] flex items-center justify-center shadow-sm">
                        <Icon name="medical_services" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          MOH Acute Critical Care
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#080708] font-serif group-hover:text-[#B8860B] transition-colors mb-2">
                      {language === "bn" ? "নার্সিং ও আইসিইউ সিমুলেশন" : "Clinical Nursing & ICU Simulation"}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {language === "bn"
                        ? "কুয়েত এমওএইচ ও সৌদি স্বাস্থ্য মন্ত্রণালয়ের বিএলএস/এসিএলএস ক্লিনিক্যাল ল্যাব।"
                        : "MOH compliant acute critical care monitoring, emergency trauma response, and medical English training."}
                    </p>
                  </div>
                </div>

                {/* 6. Heavy Machinery & Hydraulics */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#B2B6BD]/50 shadow-md hover:border-[#FDC600] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/sectors/heavy_transport.webp"
                        alt="Heavy Machinery & Hydraulics"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#FDC600] flex items-center justify-center shadow-sm">
                        <Icon name="forklift" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          Heavy Hydraulic Diagnostics
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#080708] font-serif group-hover:text-[#B8860B] transition-colors mb-2">
                      {language === "bn" ? "হেভি ইকুইপমেন্ট ও হাইড্রোলিক্স" : "Heavy Machinery & Hydraulics"}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {language === "bn"
                        ? "ক্যাট ও কোমাতসু এক্সকাভেটর, ক্রেন ও হাইড্রোলিক ডায়াগনস্টিক ট্রেইনিং ইয়ার্ড।"
                        : "Crawler cranes, heavy excavators, telehandlers, and hydraulic pressure testing yards."}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 🏛️ 4. Official Leadership Dispatch (Message from the Chairman) */}
            <div className="border-t border-[#B2B6BD]/30">
              <PresidentMessageSection
                ctaHref="/contact"
                ctaLabel={language === "bn" ? "যোগাযোগ ও কর্পোরেট পরামর্শ" : "Contact Leadership"}
              />
            </div>

            {/* 🌐 5. Global Diplomatic Footprint & Offices */}
            <section className="space-y-8 border-t border-[#B2B6BD]/30 pt-10">
              <SectionHeader
                tag={t.corridorTag}
                tagIcon="public"
                heading={t.corridorHeading}
                subheading={t.corridorSubheading}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-[#B2B6BD]/50 shadow-sm space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#080708]/8 text-[#080708] border border-black/15 inline-block mb-1">
                    Dhaka Headquarters
                  </span>
                  <h4 className="text-base font-bold text-[#080708]">Pritom Zaman Tower</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Level-3, 37/2, Purana Paltan, Culvert Road, Dhaka-1000, Bangladesh. Comprehensive candidate biometric screening, central trade testing, and ministry consular hub.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#B2B6BD]/50 shadow-sm space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 inline-block mb-1">
                    UAE & GCC Regional Office
                  </span>
                  <h4 className="text-base font-bold text-[#080708]">Dubai Business Bay</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prime Tower, Business Bay, Dubai, UAE. Overseeing employer mobilization, MoHRE compliance, and corporate client support across the Emirates.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#B2B6BD]/50 shadow-sm space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-700 border border-blue-500/30 inline-block mb-1">
                    Saudi Corridor Office
                  </span>
                  <h4 className="text-base font-bold text-[#080708]">Riyadh King Fahd Corridor</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    King Fahd Road, Riyadh, KSA. Fast-track Qiwa electronic visa endorsement and NEOM / Red Sea mega-project site boarding coordination.
                  </p>
                </div>
              </div>
            </section>

            {/* 🚀 6. Enterprise Manpower Call to Action */}
            <div className="pt-4 border-t border-[#B2B6BD]/30">
              <B2BEnterpriseCTASection />
            </div>

        </div>
      </div>
    </main>
  );
}
