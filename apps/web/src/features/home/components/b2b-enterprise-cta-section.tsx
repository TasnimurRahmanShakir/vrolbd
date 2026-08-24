"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";

export function B2BEnterpriseCTASection() {
  const { language } = useLanguageStore();
  const t = translations[language].b2bCta;
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [headcountNeed, setHeadcountNeed] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="b2b-gateway" className="py-10 md:py-14 px-4 sm:px-6 max-w-[1440px] mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#0F243B] to-[#173B61] text-white p-8 sm:p-12 md:p-16 border border-[#C5A059]/40 shadow-2xl overflow-hidden">
        
        {/* Glow Ambient Lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#173B61]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Enterprise Invitation */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-white/15">
              <Icon name="corporate_fare" size={16} />
              <span>{t.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white leading-tight">
              {t.heading}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              {t.subheading}
            </p>

            {/* Quick Trust Badges */}
            <div className="pt-4 grid grid-cols-2 gap-3 max-w-md">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <Icon name="verified_user" size={20} className="text-[#C5A059]" />
                <span className="text-xs font-semibold text-slate-200">BMET License 1173</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <Icon name="security" size={20} className="text-[#C5A059]" />
                <span className="text-xs font-semibold text-slate-200">ISO 9001:2015</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Demand Intake Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#06101E]/90 border border-white/15 backdrop-blur-xl shadow-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Icon name="check_circle" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Requisition Transmitted</h3>
                  <p className="text-xs text-slate-300">Our Executive Manpower Director will contact you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company / EPC Contractor Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Al-Futtaim Construction / Saudi Binladin"
                      className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Official Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="procurement@contractor.com"
                        className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Required Headcount *
                      </label>
                      <input
                        type="text"
                        required
                        value={headcountNeed}
                        onChange={(e) => setHeadcountNeed(e.target.value)}
                        placeholder="e.g. 250 Welders & Electricians"
                        className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] text-[#0A192F] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-all cursor-pointer"
                  >
                    <Icon name="send" size={16} />
                    <span>{t.btnRequest}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
