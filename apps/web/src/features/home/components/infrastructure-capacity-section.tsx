"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { useLanguageStore } from "@/stores/language.store";

interface CapacityCard {
  id: string;
  icon: string;
  image: string;
  badgeEn: string;
  badgeBn: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  statNumber: string;
  statLabelEn: string;
  statLabelBn: string;
  featuresEn: string[];
  featuresBn: string[];
}

const CAPACITY_DATA: CapacityCard[] = [
  {
    id: "trade-lab",
    icon: "precision_manufacturing",
    image: "/images/sectors/engineering.webp",
    badgeEn: "Direct Physical Facility",
    badgeBn: "নিজস্ব কারিগরি ল্যাব",
    titleEn: "Multi-Axis Trade Testing Bay",
    titleBn: "নিজস্ব মাল্টি-অ্যাক্সিস ট্রেড টেস্টিং সেন্টার",
    descEn:
      "Fully equipped workshop in Dhaka with dedicated Aramco/ASME standard 6G welding test booths, industrial 3-phase electrical rigs, central chiller HVAC overhaul, and civil carpentry bays.",
    descBn:
      "ঢাকায় অ্যারামকো ও আন্তর্জাতিক মানসম্পন্ন নিজস্ব ৬জি ওয়েল্ডিং বুথ, সেন্ট্রাল চিলার এইচভিএসি, ইন্ডাস্ট্রিয়াল ইলেকট্রিক্যাল ওয়্যারিং ও সিভিল ট্রেড টেস্ট ল্যাব।",
    statNumber: "350+",
    statLabelEn: "Daily Testing Capacity",
    statLabelBn: "দৈনিক টেস্ট সক্ষমতা",
    featuresEn: ["Aramco & AWS 6G Welder Testing", "HVAC & Chiller Diagnostic Rigs", "PLC Automation & Wiring Bays"],
    featuresBn: ["৬জি পাইপ ও টিআইজি ওয়েল্ডিং টেস্ট", "সেন্ট্রাল চিলার ও ডাক্ট ফেব্রিকেশন", "পিএলসি ও ৩-ফেজ ইলেকট্রিক্যাল ল্যাব"],
  },
  {
    id: "medical-cell",
    icon: "health_and_safety",
    image: "/images/sectors/healthcare.webp",
    badgeEn: "Pre-Departure Screening",
    badgeBn: "মেডিকেল ও বায়োমেট্রিক সেল",
    titleEn: "GAMCA Medical & Biometric Cell",
    titleBn: "অনুমোদিত গামকা মেডিকেল ও বায়োমেট্রিক ডেস্ক",
    descEn:
      "Streamlined candidate coordination directly with authorized GCC GAMCA centers and embassy biometric centers, ensuring 100% pre-departure health compliance and zero post-arrival medical repatriation.",
    descBn:
      "অনুমোদিত গামকা সেন্টার ও দূতাবাস বায়োমেট্রিক সেন্টারের সাথে সরাসরি সমন্বয়। শতভাগ শারীরিক ফিটনেস নিশ্চিতকরণ এবং বিদেশে পৌঁছানোর পর আনফিট হওয়ার কোনো ঝুঁকি থাকে না।",
    statNumber: "99.8%",
    statLabelEn: "First-Time Medical Clearance",
    statLabelBn: "প্রথমবারেই মেডিকেল পাসের হার",
    featuresEn: ["GAMCA GCC Approved Protocols", "Consular Biometric Fingerprinting", "Drug & Infectious Screenings"],
    featuresBn: ["অনুমোদিত গামকা মেডিকেল স্ক্রিনিং", "দূতাবাস বায়োমেট্রিক ডিজিটাল সহায়তা", "পূর্ণাঙ্গ শারীরিক ও ডোপ টেস্ট"],
  },
  {
    id: "welfare-hub",
    icon: "handshake",
    image: "/images/sectors/hospitality.webp",
    badgeEn: "Worker Dignity & Protection",
    badgeBn: "প্রাক-বহির্গমন ও কল্যাণ কেন্দ্র",
    titleEn: "Pre-Departure Briefing & Welfare Center",
    titleBn: "প্রাক-বহির্গমন ওরিয়েন্টেশন ও স্মার্ট কার্ড সেন্টার",
    descEn:
      "Comprehensive cultural orientation, workplace safety briefings, verified contract explanations, and official Ministry BMET Smart Card issuance before airport welfare boarding.",
    descBn:
      "গন্তব্য দেশের আইনকানুন ও নিরাপত্তা ওরিয়েন্টেশন, নিয়োগ চুক্তির শর্তাবলী বাংলায় স্পষ্ট ব্যাখ্যা এবং প্রবাসী কল্যাণ মন্ত্রণালয়ের সরকারি বিএমইটি স্মার্ট কার্ড প্রদান।",
    statNumber: "100%",
    statLabelEn: "BMET Smart Card Protected",
    statLabelBn: "বিএমইটি স্মার্ট কার্ড সুরক্ষা",
    featuresEn: ["BMET Legal Insurance Registration", "Language & Workplace Culture Training", "Airport Welfare Escort Desk"],
    featuresBn: ["সরকারি বিএমইটি স্মার্ট কার্ড ও ইন্স্যুরেন্স", "কর্মক্ষেত্র ভাষা ও সংস্কৃতি প্রশিক্ষণ", "বিমানবন্দর বিদায় ও আগমন সাপোর্ট"],
  },
];

export function InfrastructureCapacitySection() {
  const { language } = useLanguageStore();

  return (
    <section id="infrastructure" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <SectionHeader
          tag={language === "bn" ? "বাস্তব অবকাঠামো ও সক্ষমতা" : "Physical Infrastructure & Readiness"}
          tagIcon="domain"
          heading={
            language === "bn"
              ? "নিজস্ব ট্রেড টেস্টিং ল্যাব ও রিক্রুটমেন্ট সক্ষমতা"
              : "Testing Infrastructure & Deployment Readiness"
          }
          subheading={
            language === "bn"
              ? "বিদেশে কর্মী পাঠানোর পূর্বে ঢাকায় আমাদের নিজস্ব ল্যাবে কারিগরি দক্ষতা, শারীরিক সুস্থতা ও আইনগত ছাড়পত্র নিশ্চিত করা হয়।"
              : "Rigorous on-ground testing workshops, authorized medical screening, and government compliance cells guarantee zero-failure deployments."
          }
        />
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {CAPACITY_DATA.map((card) => (
          <div
            key={card.id}
            className="rounded-3xl bg-white border border-[#B2B6BD]/50 hover:border-[#FDC600] shadow-[0_4px_20px_-4px_rgba(8,7,8,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(253,198,0,0.18)] transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              {/* Image banner with overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={card.image}
                  alt={language === "bn" ? card.titleBn : card.titleEn}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#FDC600]/40 text-[#FDC600] text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                    <Icon name={card.icon} size={14} className="text-[#FDC600]" />
                    <span>{language === "bn" ? card.badgeBn : card.badgeEn}</span>
                  </span>
                </div>

                {/* Metric Overlay */}
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-end justify-between text-white">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FDC600] block leading-none">
                      {card.statNumber}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">
                      {language === "bn" ? card.statLabelBn : card.statLabelEn}
                    </span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Icon name="check" size={16} className="text-[#FDC600]" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#080708] leading-tight group-hover:text-[#B8860B] transition-colors">
                  {language === "bn" ? card.titleBn : card.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === "bn" ? card.descBn : card.descEn}
                </p>

                {/* Feature checklist */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {(language === "bn" ? card.featuresBn : card.featuresEn).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Icon name="check_circle" size={15} className="text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>{language === "bn" ? "স্থান: ঢাকা হেডকোয়ার্টার" : "Location: Dhaka HQ"}</span>
              <span className="text-[#8C6A2B] font-bold font-mono">Pritom Zaman Tower</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
