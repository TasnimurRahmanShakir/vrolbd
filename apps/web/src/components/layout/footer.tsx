"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";

export function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language].footer;

  return (
    <footer className="w-full glass-panel border-t border-white/10 bg-[#071324]/90 backdrop-blur-xl relative overflow-hidden">
      {/* Subtle top atmospheric accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-16 pb-12 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E2CB8F] via-[#C5A059] to-[#8C6A2B] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
                  <Icon name="flight_takeoff" className="text-[#C5A059] text-xl" />
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white font-['Outfit'] block">
                  VROL<span className="text-[#C5A059]">BD</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
                  Overseas Recruitment Ltd.
                </span>
              </div>
            </div>

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
                <a href="#" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {language === "bn" ? "হোমপেজ" : "Home"}
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {t.jobSearch}
                </a>
              </li>
              <li>
                <a href="#corridors" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {language === "bn" ? "আন্তর্জাতিক করিডোর" : "Global Corridors"}
                </a>
              </li>
              <li>
                <a href="#b2b-gateway" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="chevron_right" size={14} className="text-[#C5A059]" />
                  {t.b2bSolutions}
                </a>
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
                <a href="#compliance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="verified_user" size={14} className="text-[#C5A059]" />
                  {t.ethicalRecruitment}
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="fingerprint" size={14} className="text-[#C5A059]" />
                  {t.tradeTesting}
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="shield" size={14} className="text-[#C5A059]" />
                  {t.bmetClearance}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="policy" size={14} className="text-[#C5A059]" />
                  {t.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Icon name="description" size={14} className="text-[#C5A059]" />
                  {t.termsOfService}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Global Network */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              {t.contact}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Icon name="location_on" size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span>{t.dhakaOffice}</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="public" size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span>{t.uaeOffice} • {t.saudiOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="call" size={16} className="text-[#C5A059] shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-[#C5A059] font-medium text-white transition-colors">
                  +880 (02) 883-9910
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="mail" size={16} className="text-[#C5A059] shrink-0" />
                <a href="mailto:info@vrolbd.com" className="hover:text-[#C5A059] text-white transition-colors">
                  info@vrolbd.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400">
              {t.hq}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
