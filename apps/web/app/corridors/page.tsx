"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header, Footer, LanguageWrapper } from "@/components/layout";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { KineticOdometer } from "@/components/common/kinetic-odometer";
import { B2BEnterpriseCTASection } from "@/features/home/components/b2b-enterprise-cta-section";
import { useLanguageStore, translations } from "@/stores/language.store";

interface CorridorItem {
  id: string;
  countryEn: string;
  countryBn: string;
  flagIcon: string;
  badgeEn: string;
  badgeBn: string;
  headlineEn: string;
  headlineBn: string;
  descEn: string;
  descBn: string;
  citiesEn: string[];
  citiesBn: string[];
  keySectorsEn: string[];
  keySectorsBn: string[];
  visaPipelineEn: string;
  visaPipelineBn: string;
  avgTimeline: string;
  activeOpenings: number;
}

const CORRIDORS_DATA: CorridorItem[] = [
  {
    id: "ksa",
    countryEn: "Kingdom of Saudi Arabia (KSA)",
    countryBn: "সৌদি আরব (কেএসএ)",
    flagIcon: "flag",
    badgeEn: "Flagship Mega-Corridor",
    badgeBn: "প্রধান মেগা-করিডোর",
    headlineEn: "Saudi Vision 2030 & Industrial Petrochemical Hubs",
    headlineBn: "সৌদি ভিশন ২০৩০ ও মেগাপ্রজেক্ট করিডোর",
    descEn:
      "Direct bilateral electronic visa integration via Saudi Qiwa and Musaned portals. Mobilizing certified 6G welders, heavy earthmoving operators, MEP engineers, and healthcare specialists across NEOM, Red Sea Global, and Jubail petrochemical refineries.",
    descBn:
      "সৌদি কিউয়া (Qiwa) ও মুসানেদ পোর্টালের মাধ্যমে দ্রুত ভিসা প্রসেসিং। নিওম (NEOM), রেড সি প্রজেক্ট ও জুবাইল রিফাইনারিতে সার্টিফাইড ৬জি ওয়েল্ডার, হেভি ইকুইপমেন্ট অপারেটর ও ইঞ্জিনিয়ার নিয়মিত নিয়োজিত হচ্ছে।",
    citiesEn: ["Riyadh", "Jeddah", "Dammam", "Jubail", "NEOM Corridor", "Yanbu"],
    citiesBn: ["রিয়াদ", "জেদ্দা", "দাম্মাম", "জুবাইল", "নিওম করিডোর", "ইয়ানবু"],
    keySectorsEn: ["Mega-Infrastructure", "Petrochemical Refineries", "Industrial Automation", "Critical Care Healthcare"],
    keySectorsBn: ["মেগা-ইনফ্রাস্ট্রাকচার", "পেট্রোকেমিক্যাল রিফাইনারি", "ইন্ডাস্ট্রিয়াল অটোমেশন", "ক্লিনিক্যাল স্বাস্থ্যসেবা"],
    visaPipelineEn: "Saudi Qiwa & Ministry of Human Resources (MHRSD) Verified",
    visaPipelineBn: "সৌদি কিউয়া ও মানবসম্পদ মন্ত্রণালয় অনুমোদিত",
    avgTimeline: "14 - 18 Days",
    activeOpenings: 450,
  },
  {
    id: "uae",
    countryEn: "United Arab Emirates (UAE)",
    countryBn: "সংযুক্ত আরব আমিরাত (ইউএই)",
    flagIcon: "location_city",
    badgeEn: "High-Velocity Corridor",
    badgeBn: "এক্সপ্রেস করিডোর",
    headlineEn: "High-Rise Engineering, Luxury Hospitality & EV Mobility",
    headlineBn: "বহুতল প্রকৌশল, ৫-স্টার হসপিটালিটি ও আধুনিক শিল্প",
    descEn:
      "Seamless MoHRE electronic quota clearances connecting MEP project managers, BMS technicians, 5-star hotel banqueting teams, and automotive EV diagnosticians to Dubai Business Bay and Abu Dhabi mega-developments.",
    descBn:
      "ইউএই মানবসম্পদ মন্ত্রণালয় (MoHRE) অনুমোদিত কাজের ভিসায় দুবাই ও আবুধাবির বহুতল বাণিজ্যিক ভবন, লাক্সারি রিসোর্ট এবং অটোমোবাইল ওয়ার্কশপের জন্য দক্ষ জনশক্তি সরবরাহ।",
    citiesEn: ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah", "Fujairah"],
    citiesBn: ["দুবাই", "আবুধাবি", "শারজাহ", "রাস আল খাইমাহ", "ফুজাইরাহ"],
    keySectorsEn: ["High-Rise MEP Engineering", "Luxury 5-Star Resorts", "Automotive & Electric Vehicles", "Facility Management"],
    keySectorsBn: ["হাই-রাইজ এমইপি ইঞ্জিনিয়ারিং", "লাক্সারি ৫-স্টার রিসোর্ট", "অটোমোবাইল ও ইভি", "ফ্যাসিলিটি ম্যানেজমেন্ট"],
    visaPipelineEn: "MoHRE Pre-Approved Work Permit & Dubai Residency Attestation",
    visaPipelineBn: "MoHRE পূর্ব-অনুমোদিত কাজের ভিসা ও দূতাবাস সত্যায়ন",
    avgTimeline: "12 - 16 Days",
    activeOpenings: 320,
  },
  {
    id: "qatar",
    countryEn: "State of Qatar",
    countryBn: "কাতার",
    flagIcon: "local_gas_station",
    badgeEn: "LNG & Energy Hub",
    badgeBn: "এলএনজি ও এনার্জি হাব",
    headlineEn: "North Field LNG Expansion & Luxury Hospitality Corridors",
    headlineBn: "নর্থ ফিল্ড এলএনজি সম্প্রসারণ ও পর্যটন খাত",
    descEn:
      "Rapid biometric intake through Qatar Visa Center (QVC) Dhaka. Deploying CISRS scaffolding supervisors, pipe fabricators, executive chefs, and concierge staff to Ras Laffan industrial city and Lusail hospitality towers.",
    descBn:
      "ঢাকা কাতার ভিসা সেন্টারের (QVC) মাধ্যমে দ্রুত বায়োমেট্রিক স্ক্রিনিং। রাস লাফান এলএনজি প্রজেক্ট এবং লুসাইল সিটির জন্য স্ক্যাফোল্ডিং ইন্সপেক্টর, ওয়েল্ডার ও শেফ নিয়োজিত হচ্ছে।",
    citiesEn: ["Doha", "Lusail City", "Ras Laffan", "Mesaieed", "Al Khor"],
    citiesBn: ["দোহা", "লুসাইল সিটি", "রাস লাফান", "মেসাইদ", "আল খোর"],
    keySectorsEn: ["LNG Natural Gas Plant", "VIP Banqueting & Concierge", "Ashghal Civil Works", "Heavy Industrial Fabrication"],
    keySectorsBn: ["এলএনজি ন্যাচারাল গ্যাস প্ল্যান্ট", "ভিআইপি ব্যাংকোয়েট ও হোটেল", "আশঘাল গণপূর্ত", "হেভি ইন্ডাস্ট্রিয়াল ফেব্রিকেশন"],
    visaPipelineEn: "Qatar Visa Center (QVC) Fast-Track & Ministry of Labor Clearance",
    visaPipelineBn: "কাতার ভিসা সেন্টার (QVC) ও শ্রম মন্ত্রণালয় অনুমোদিত",
    avgTimeline: "14 - 20 Days",
    activeOpenings: 280,
  },
  {
    id: "kuwait",
    countryEn: "State of Kuwait",
    countryBn: "কুয়েত",
    flagIcon: "medical_services",
    badgeEn: "Healthcare & Refinery",
    badgeBn: "স্বাস্থ্যসেবা ও তেল শোধনাগার",
    headlineEn: "Ministry of Health (MOH) Clinical Nursing & KNPC Refineries",
    headlineBn: "কুয়েত স্বাস্থ্য মন্ত্রণালয় (MOH) নার্সিং ও কেএনপিসি রিফাইনারি",
    descEn:
      "Specialized bilateral government-to-government healthcare pipeline mobilizing B.Sc. certified ICU and emergency trauma nurses directly to Kuwait MOH tertiary hospitals, alongside refinery maintenance crews to Mina Al-Ahmadi.",
    descBn:
      "কুয়েত স্বাস্থ্য মন্ত্রণালয় (MOH) অনুমোদিত সরাসরি সরকারি নার্সিং রিক্রুটমেন্ট। বিএসসি নার্সদের আইসিইউ ও জরুরি বিভাগে এবং দক্ষ টেকনিশিয়ানদের কেএনপিসি অয়েল রিফাইনারিতে পদায়ন।",
    citiesEn: ["Kuwait City", "Mina Al-Ahmadi", "Al Jahra", "Hawalli", "Sabah Al-Ahmad"],
    citiesBn: ["কুয়েত সিটি", "মিনা আল-আহমাদি", "আল জাহরা", "হাওয়ালি", "সাবাহ আল-আহমাদ"],
    keySectorsEn: ["Clinical ICU / ER Nursing", "KNPC Oil Refineries", "High-Voltage Power Stations", "Civil Construction"],
    keySectorsBn: ["ক্লিনিক্যাল আইসিইউ/ইআর নার্সিং", "তেল শোধনাগার রক্ষণাবেক্ষণ", "উচ্চ ভোল্টেজ বিদ্যুৎ সাবস্টেশন", "সিভিল কনস্ট্রাকশন"],
    visaPipelineEn: "Kuwait MOH & Ministry of Foreign Affairs (MOFA) Endorsement",
    visaPipelineBn: "কুয়েত স্বাস্থ্য মন্ত্রণালয় ও পররাষ্ট্র মন্ত্রণালয় সত্যায়িত",
    avgTimeline: "18 - 25 Days",
    activeOpenings: 190,
  },
  {
    id: "oman",
    countryEn: "Sultanate of Oman",
    countryBn: "ওমান",
    flagIcon: "electric_bolt",
    badgeEn: "Substation & Ports",
    badgeBn: "সাবস্টেশন ও বন্দর লজিস্টিকস",
    headlineEn: "Power Transmission, Commercial Cold Storage & Duqm Port",
    headlineBn: "বিদ্যুৎ সঞ্চালন, কোল্ড চেইন ও দুকম বন্দর করিডোর",
    descEn:
      "Connecting substation commissioning engineers, SCADA automation specialists, and port crane operators to Muscat municipal projects and the Duqm Special Economic Zone (SEZAD).",
    descBn:
      "মাস্কাট বাণিজ্যিক প্রকল্প এবং দুকম বিশেষ অর্থনৈতিক অঞ্চলের জন্য সাবস্টেশন ইইই ইঞ্জিনিয়ার, এসসিএডিএ অটোমেশন এক্সপার্ট এবং হেভি ক্রেন অপারেটর সরবরাহ।",
    citiesEn: ["Muscat", "Salalah", "Duqm Economic Zone", "Sohar", "Nizwa"],
    citiesBn: ["মাস্কাট", "সালালাহ", "দুকম অর্থনৈতিক অঞ্চল", "সোহের", "নিজওয়া"],
    keySectorsEn: ["33kV/11kV Substation Commissioning", "Duqm Port Logistics", "District Cooling Plants", "FMCG Cold Storage"],
    keySectorsBn: ["বিদ্যুৎ সাবস্টেশন কমিশনিং", "বন্দর লজিস্টিকস", "সেন্ট্রাল চিলার প্ল্যান্ট", "কোল্ড চেইন ওয়্যারহাউস"],
    visaPipelineEn: "Royal Oman Police (ROP) Electronic Visa & GAMCA Verified",
    visaPipelineBn: "রয়্যাল ওমান পুলিশ ইলেকট্রনিক ভিসা ও গামকা সনদ",
    avgTimeline: "14 - 18 Days",
    activeOpenings: 140,
  },
  {
    id: "bahrain",
    countryEn: "Kingdom of Bahrain",
    countryBn: "বাহরাইন",
    flagIcon: "hvac",
    badgeEn: "Industrial & MEP",
    badgeBn: "শিল্প ও এমইপি",
    headlineEn: "District Cooling Chillers, Aluminum Smelting & Banking Hubs",
    headlineBn: "ডিস্ট্রিক্ট কুলিং চিলার, অ্যালুমিনিয়াম শিল্প ও ব্যাংকিং হাব",
    descEn:
      "Supplying certified master HVAC technicians, centrifugal chiller overhaul teams, and commercial facilities engineers to Manama financial towers and Alba industrial complexes.",
    descBn:
      "মানামা বাণিজ্যিক টাওয়ার এবং আলবা অ্যালুমিনিয়াম কমপ্লেক্সের জন্য সেন্ট্রাল চিলার টেকনিশিয়ান ও বাণিজ্যিক ফ্যাসিলিটি রক্ষণাবেক্ষণ জনশক্তি পদায়ন।",
    citiesEn: ["Manama", "Riffa", "Muharraq", "Sitra Industrial", "Hidd"],
    citiesBn: ["মানামা", "রিফা", "মুহাররাক", "সিত্রা শিল্পাঞ্চল", "হিদ"],
    keySectorsEn: ["Centrifugal District Cooling", "Aluminum Smelting Operations", "Commercial Banking Facilities"],
    keySectorsBn: ["সেন্ট্রিফিউগাল ডিস্ট্রিক্ট কুলিং", "অ্যালুমিনিয়াম শিল্প", "বাণিজ্যিক ফ্যাসিলিটি ম্যানেজমেন্ট"],
    visaPipelineEn: "Bahrain LMRA Electronic Work Visa & Labor Escrow",
    visaPipelineBn: "বাহরাইন এলএমআরএ (LMRA) কাজের ভিসা ও আইনি চুক্তি",
    avgTimeline: "12 - 16 Days",
    activeOpenings: 95,
  },
];

export default function CorridorsPage() {
  const { language } = useLanguageStore();
  const t = translations[language].corridorsPage;
  const [selectedCorridor, setSelectedCorridor] = useState<string>("ksa");

  const activeItem =
    CORRIDORS_DATA.find((c) => c.id === selectedCorridor) ?? CORRIDORS_DATA[0]!;

  return (
    <LanguageWrapper>
      <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-x-clip pt-20">
        {/* Ambient Atmospheric Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
        <div className="absolute top-[380px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

        {/* Global Header */}
        <Header />

        {/* 🏙️ Full-Width Diagonal Sliced Landmarks Composition Background */}
        <div className="absolute top-0 left-0 right-0 h-[620px] sm:h-[720px] lg:h-[780px] pointer-events-none overflow-hidden select-none z-0">
          <Image
            src="/images/corridors_landmarks_banner_v1.webp"
            alt="Global Destination Skylines Composition"
            fill
            unoptimized
            priority
            className="object-cover object-center opacity-85"
          />
          {/* Bottom Fade & Left Text Protection */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/85 via-[#0A192F]/40 to-transparent" />
        </div>

        {/* 🏛️ 1. Hero Section */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-4xl space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F243B] border border-[#C5A059]/40 shadow-md"
            >
              <Icon name="public" size={16} className="text-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#E2CB8F]">
                {t.badge}
              </span>
            </motion.div>

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

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
            >
              {t.heroDesc}
            </motion.p>
          </div>

          {/* 📊 Key Deployment Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-[#0F243B]/85 backdrop-blur-xl border border-[#C5A059]/30 shadow-2xl"
          >
            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                <KineticOdometer value="6+" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statActiveCorridors}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                <KineticOdometer value="100%" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statEmbassyAccreditations}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                <KineticOdometer value="14 Days" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statAverageProcessing}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono block">
                <KineticOdometer value="3500+" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statMonthlyIntake}</span>
            </div>
          </motion.div>
        </section>

        {/* 
          Eye-Relief Section Foundation
        */}
        <div className="w-full bg-[#F4F6F9] text-slate-800 relative pt-12 pb-16 transition-colors border-t border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 space-y-16">

            {/* 🌐 2. Interactive Global Corridors Showcase */}
            <section className="space-y-8">
              <SectionHeader
                tag={t.corridorHeaderTag}
                tagIcon="public"
                heading={t.corridorHeading}
                subheading={t.corridorSubheading}
              />

              {/* Corridor Country Selector Tabs */}
              <div className="flex flex-wrap gap-2.5 p-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
                {CORRIDORS_DATA.map((c) => {
                  const isSelected = selectedCorridor === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCorridor(c.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${isSelected
                          ? "bg-[#0A192F] text-[#C5A059] shadow-md"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                    >
                      <Icon name={c.flagIcon} size={16} />
                      <span>{language === "bn" ? c.countryBn : c.countryEn}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isSelected ? "bg-[#C5A059]/20 text-[#C5A059]" : "bg-slate-200 text-slate-700"
                          }`}
                      >
                        {c.activeOpenings}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Active Corridor Spotlight Glass Card */}
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-8"
              >
                {/* Header Banner */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#8C6A2B] border border-[#C5A059]/30">
                      {language === "bn" ? activeItem.badgeBn : activeItem.badgeEn}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-serif">
                      {language === "bn" ? activeItem.countryBn : activeItem.countryEn}
                    </h2>
                    <p className="text-sm font-semibold text-[#8C6A2B]">
                      {language === "bn" ? activeItem.headlineBn : activeItem.headlineEn}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-mono block">Visa Lead Time</span>
                      <span className="text-sm font-bold text-[#0A192F] font-mono">{activeItem.avgTimeline}</span>
                    </div>
                    <Link
                      href="/jobs"
                      className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-xs font-bold text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 shadow-md transition-all cursor-pointer"
                    >
                      <Icon name="work" size={15} />
                      <span>{t.btnViewJobs}</span>
                    </Link>
                  </div>
                </div>

                {/* Corridor Overview */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {language === "bn" ? "করিডোর সারসংক্ষেপ ও সরকারি চুক্তি" : "Corridor Narrative & Bilateral Pipeline"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
                    {language === "bn" ? activeItem.descBn : activeItem.descEn}
                  </p>
                </div>

                {/* 3 Grid Info Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {/* Cities */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0A192F]">
                      <Icon name="location_on" size={16} className="text-[#8C6A2B]" />
                      <span>{language === "bn" ? "প্রজেক্ট ও শহরসমূহ" : "Major Cities & Project Zones"}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(language === "bn" ? activeItem.citiesBn : activeItem.citiesEn).map((city) => (
                        <span
                          key={city}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white border border-slate-200 text-slate-700 shadow-xs"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Sectors */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0A192F]">
                      <Icon name="business_center" size={16} className="text-[#8C6A2B]" />
                      <span>{language === "bn" ? "প্রধান কর্মসংস্থান খাত" : "High-Demand Industry Sectors"}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(language === "bn" ? activeItem.keySectorsBn : activeItem.keySectorsEn).map((sec) => (
                        <span
                          key={sec}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white border border-slate-200 text-slate-700 shadow-xs"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visa Protocol */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0A192F]">
                      <Icon name="verified_user" size={16} className="text-[#8C6A2B]" />
                      <span>{language === "bn" ? "অনুমোদিত ভিসা চ্যানেল" : "Government Visa Channel"}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {language === "bn" ? activeItem.visaPipelineBn : activeItem.visaPipelineEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* 🛠️ 3. Turnkey Consular Clearance Protocol */}
            <section className="space-y-8 border-t border-slate-200/80 pt-10">
              <SectionHeader
                tag={language === "bn" ? "কনস্যুলার পাইপলাইন" : "Consular Turnkey Protocol"}
                tagIcon="speed"
                heading={
                  language === "bn"
                    ? "৪-ধাপে নিরাপদ ও শতভাগ আইনি ভিসা প্রক্রিয়া"
                    : "4-Stage Government-to-Government Deployment Lifecycle"
                }
                subheading={
                  language === "bn"
                    ? "ট্রেড টেস্টিং থেকে শুরু করে বিমানবন্দর পর্যন্ত প্রতিটি ধাপ মন্ত্রণালয়ের সরাসরি নজরদারিতে সম্পন্ন হয়।"
                    : "From technical verification to airport welfare boarding, every milestone is monitored for zero friction."
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 relative">
                  <span className="w-8 h-8 rounded-full bg-[#0A192F] text-[#C5A059] flex items-center justify-center font-mono font-bold text-xs">
                    01
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "ট্রেড টেস্ট ও স্ক্রিনিং" : "Multi-Axis Trade Testing"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "আধুনিক সিমুলেশন ল্যাবে আন্তর্জাতিক স্ট্যান্ডার্ড অনুযায়ী প্রার্থীর বাস্তব কারিগরি দক্ষতা যাচাই।"
                      : "Candidate technical competence verified in ISO-certified simulation workshops before visa lodging."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 relative">
                  <span className="w-8 h-8 rounded-full bg-[#0A192F] text-[#C5A059] flex items-center justify-center font-mono font-bold text-xs">
                    02
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "গামকা মেডিকেল ও ফিটনেস" : "GAMCA Medical Clearance"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "অনুমোদিত গামকা সেন্টারে পূর্ণাঙ্গ স্বাস্থ্য পরীক্ষা ও ফিটনেস সার্টিফিকেট সংগ্রহ।"
                      : "Authorized GCC medical screening ensuring 100% pre-departure health compliance."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 relative">
                  <span className="w-8 h-8 rounded-full bg-[#0A192F] text-[#C5A059] flex items-center justify-center font-mono font-bold text-xs">
                    03
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "দূতাবাস ভিসা স্ট্যাম্পিং" : "Diplomatic Visa Attestation"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "সরাসরি দূতাবাস ডেস্ক ও সৌদি কিউয়া/ইউএই MoHRE মাধ্যমে দ্রুত ভিসা এন্ডোর্সমেন্ট।"
                      : "Direct consular desk processing ensuring genuine electronic work permits without middlemen."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 relative">
                  <span className="w-8 h-8 rounded-full bg-[#0A192F] text-[#C5A059] flex items-center justify-center font-mono font-bold text-xs">
                    04
                  </span>
                  <h4 className="text-base font-bold text-[#0A192F] font-serif">
                    {language === "bn" ? "বিএমইটি ক্লিয়ারেন্স ও ফ্লাইট" : "BMET Smart Card & Departure"}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "bn"
                      ? "প্রবাসী কল্যাণ মন্ত্রণালয় হতে সরকারি বিএমইটি স্মার্ট কার্ড গ্রহণ এবং ফ্রি এয়ার টিকিট সহ ফ্লাইট।"
                      : "Ministry of Expatriates' Welfare Smart Card clearance, orientation, and airport boarding."}
                  </p>
                </div>
              </div>
            </section>

            {/* 🚀 4. B2B Enterprise CTA */}
            <div className="pt-4 border-t border-slate-200/80">
              <B2BEnterpriseCTASection />
            </div>

          </div>
        </div>

        {/* Global Footer with Jolforing tag */}
        <Footer />
      </main>
    </LanguageWrapper>
  );
}
