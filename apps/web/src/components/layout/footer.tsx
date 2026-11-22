"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";
import FloatingContactButtons from '@/components/layout/FloatingContactButtons';

export function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language].footer;

  return (
    <>
      <FloatingContactButtons />
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full border-t border-white/10 bg-[#060910]/95 backdrop-blur-xl relative overflow-hidden"
      >
      {/* Subtle top atmospheric accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-16 pb-12 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Custom Brand Logo */}
            <Link href="/" className="inline-block group max-w-[260px] sm:max-w-[290px] w-full">
              <div className="rounded-2xl overflow-hidden border border-[#C5A059]/25 shadow-lg bg-transparent p-1.5 group-hover:border-[#C5A059]/60 transition-all duration-300">
                <Image
                  src="/VROLBD Logo.png"
                  alt="Vision Recruiting & Overseas Ltd. (License 1173)"
                  width={320}
                  height={180}
                  className="w-full h-auto object-contain rounded-xl brightness-105 group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                <Icon name="verified" size={15} className="text-[#C5A059]" />
                <span>{t.isoCertified}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 text-[11px] text-[#C5A059] font-medium">
                <Icon name="gavel" size={15} />
                <span>{t.govtLicense}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {language === "bn" ? "হোমপেজ" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {t.jobSearch}
                </Link>
              </li>
              <li>
                <Link href="/corridors" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {language === "bn" ? "আন্তর্জাতিক করিডোর" : "Global Corridors"}
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {language === "bn" ? "কমপ্লায়েন্স ও আইন" : "Compliance & Standards"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Standards */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              {t.legal}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/compliance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="verified_user" size={14} className="text-[#C5A059]" />
                  {t.ethicalRecruitment}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="fingerprint" size={14} className="text-[#C5A059]" />
                  {t.tradeTesting}
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="shield" size={14} className="text-[#C5A059]" />
                  {t.bmetClearance}
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="policy" size={14} className="text-[#C5A059]" />
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="description" size={14} className="text-[#C5A059]" />
                  {t.termsOfService}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Headquarters */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              {t.contact}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              {/* Official Registered Address */}
              <div className="flex items-start gap-2">
                <Icon name="location_on" size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t.dhakaOffice}</span>
              </div>

              {/* Telephone & Mobile */}
              <div className="flex flex-col gap-1.5 pt-1">
                <div className="flex items-center gap-2">
                  <Icon name="call" size={15} className="text-[#C5A059] shrink-0" />
                  <span className="text-slate-400 text-[11px]">Tel:</span>
                  <a href="tel:+8802226639178" className="hover:text-[#C5A059] font-medium text-white transition-colors">
                    02-226639178-79 (Off.)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="smartphone" size={15} className="text-[#C5A059] shrink-0" />
                  <span className="text-slate-400 text-[11px]">Mobile:</span>
                  <a href="tel:+8801916600239" className="hover:text-[#C5A059] font-medium text-white transition-colors">
                    01916600239
                  </a>
                </div>
              </div>

              {/* Official Emails */}
              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-center gap-2">
                  <Icon name="mail" size={15} className="text-[#C5A059] shrink-0" />
                  <a href="mailto:info@vrolbd.com" className="hover:text-[#C5A059] text-white transition-colors">
                    info@vrolbd.com
                  </a>
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <a href="mailto:visionrecruitingltd22@gmail.com" className="hover:text-[#C5A059] text-slate-300 transition-colors text-[11px]">
                    visionrecruitingltd22@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 🌐 Option 1: Full-Width Highlighted Central Corporate Web Banner */}
        <div className="pt-2 border-t border-white/10">
          <a
            href="https://www.vrolbd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0A0E17] via-[#101726] to-[#0A0E17] border border-[#C5A059]/40 hover:border-[#C5A059] shadow-xl hover:shadow-[#C5A059]/20 transition-all duration-300 overflow-hidden"
          >
            {/* Ambient Gold Glow on Hover */}
            <div className="absolute inset-0 bg-radial from-[#C5A059]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Left/Center: Large Highlighted Domain & Credentials */}
            <div className="flex items-center gap-3.5 relative z-10 text-center sm:text-left">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-[#0A192F] transition-all duration-300 shrink-0 shadow-md">
                <Icon name="language" size={24} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6C8] via-[#C5A059] to-[#E2CB8F] tracking-wider group-hover:brightness-110 transition-all">
                  www.vrolbd.com
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                  {language === "bn"
                    ? "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত রিক্রুটিং এজেন্সি • লাইসেন্স RL-1173"
                    : "Govt. Approved Overseas Manpower Recruitment Agency • License RL-1173"}
                </div>
              </div>
            </div>

            {/* Right: Interactive Visit CTA Button */}
            <div className="relative z-10 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#C5A059] text-[#0A192F] font-bold text-xs uppercase tracking-wider shadow-lg group-hover:scale-105 group-hover:bg-[#E2CB8F] transition-all shrink-0">
              <span>{language === "bn" ? "ওয়েবসাইট ভিজিট করুন" : "Visit Official Website"}</span>
              <Icon name="arrow_outward" size={16} />
            </div>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.copyright}</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] text-slate-400">
            <span>{t.hq}</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-1.5 font-medium text-slate-400">
              <span>Developed by</span>
              <a
                href="https://jolforingbd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#C5A059] hover:text-[#E2CB8F] font-bold transition-colors underline decoration-[#C5A059]/40 hover:decoration-[#E2CB8F] underline-offset-4"
              >
                <span>Jolforing</span>
                <Icon name="arrow_outward" size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  </>
  );
}
