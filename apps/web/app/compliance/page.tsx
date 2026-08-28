"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { KineticOdometer } from "@/components/common/kinetic-odometer";
import { B2BEnterpriseCTASection } from "@/features/home/components/b2b-enterprise-cta-section";
import { useLanguageStore, translations } from "@/stores/language.store";

export default function CompliancePage() {
  const { language } = useLanguageStore();
  const t = translations[language].compliancePage;

  return (
    <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-x-clip pt-20">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
      <div className="absolute top-[380px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

        {/* 📜 Government BMET & ISO Compliance Accreditation Composition (100% Seamless Full-Width Gradient Blend) */}
        <div className="absolute top-0 left-0 right-0 w-full h-[620px] sm:h-[700px] lg:h-[760px] pointer-events-none overflow-hidden select-none z-0">
          <Image
            src="/images/bmet-realistic-composition.webp"
            alt="BMET Government License & ISO 9001:2015 Accreditation"
            fill
            unoptimized
            priority
            className="object-cover object-right opacity-35 sm:opacity-50 [mask-image:linear-gradient(to_right,transparent_0%,transparent_30%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,1)_100%)]"
          />
          {/* Seamless Deep Navy Multi-Layer Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F] via-35% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/40" />
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
              <Icon name="verified_user" size={16} className="text-[#C5A059]" />
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

          {/* 📊 Key Compliance Odometers */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-[#0F243B]/85 backdrop-blur-xl border border-[#C5A059]/30 shadow-2xl"
          >
            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                <KineticOdometer value="100%" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statAuditScore}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono block">
                $0 Fee
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statZeroFees}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                <KineticOdometer value="100%" />
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statSmartCard}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F]/60 border border-white/5 space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono block">
                24/7
              </span>
              <span className="text-xs text-slate-300 font-medium block">{t.statHelpline}</span>
            </div>
          </motion.div>
        </section>

        {/* 
          Eye-Relief Section Foundation
        */}
        <div className="w-full bg-[#F4F6F9] text-slate-800 relative pt-12 pb-16 transition-colors border-t border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 space-y-16">

            {/* 🛡️ 2. Six Pillars of Ethical Recruitment */}
            <section className="space-y-8">
              <SectionHeader
                tag={t.pillarsTag}
                tagIcon="policy"
                heading={t.pillarsHeading}
                subheading={t.pillarsSubheading}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Pillar 1 */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/compliance/pillar1_zero_fee.webp"
                        alt="Employer-Pays Principle"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] flex items-center justify-center shadow-sm">
                        <Icon name="payments" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          ILO Zero-Fee Principle
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors mb-2">
                      {language === "bn" ? "১. নিয়োগকারী-প্রদত্ত শূন্য ফি নীতি" : "1. Employer-Pays Principle"}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "bn"
                        ? "আন্তর্জাতিক শ্রম সংস্থা (ILO) নির্দেশিকা অনুসারে প্রার্থীদের কাছ থেকে কোনো প্রকার রিক্রুটমেন্ট ফি নেওয়া হয় না। সম্পূর্ণ খরচ নিয়োগকারী প্রতিষ্ঠান বহন করে।"
                        : "Strict adherence to ILO Fair Recruitment Guidelines where all recruitment and mobilization fees are borne by the employer, never the jobseeker."}
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/compliance/pillar2_bmet_license.webp"
                        alt="Government License 1173 & BMET"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] flex items-center justify-center shadow-sm">
                        <Icon name="verified_user" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          Ministry License RL-1173
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors mb-2">
                      {language === "bn" ? "২. সরকারি লাইসেন্স ১১৭৩ ও বিএমইটি" : "2. Government License 1173 & BMET"}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "bn"
                        ? "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয় এবং বিএমইটি অনুমোদিত শতভাগ বৈধ ও সরকারি চ্যানেলে ভিসা অনুমোদন।"
                        : "Operating with unblemished standing under Recruiting License 1173, approved by the Ministry of Expatriates' Welfare & Overseas Employment."}
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/compliance/pillar3_contract.webp"
                        alt="Transparent Bilingual Contracts"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] flex items-center justify-center shadow-sm">
                        <Icon name="description" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          Bilingual English & বাংলা
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors mb-2">
                      {language === "bn" ? "৩. স্বচ্ছ দ্বিভাষিক নিয়োগ চুক্তি" : "3. Transparent Bilingual Contracts"}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "bn"
                        ? "ফ্লাইটের পূর্বেই বেতন, কাজের কর্মঘণ্টা, ফ্রি আবাসন ও চিকিৎসা সুবিধা স্পষ্ট বাংলায় ও ইংরেজিতে লিখিত চুক্তিনামা প্রার্থীর হাতে তুলে দেওয়া হয়।"
                        : "Legally binding employment contracts in both English and Bengali detailing wages, work hours, overtime, medical care, and free boarding."}
                    </p>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/compliance/pillar4_gamca_medical.webp"
                        alt="GAMCA Medical & Biometric Audit"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] flex items-center justify-center shadow-sm">
                        <Icon name="health_and_safety" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          GCC GAMCA Approved
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors mb-2">
                      {language === "bn" ? "৪. গামকা ও বায়োমেট্রিক অডিট" : "4. GAMCA Medical & Biometric Audit"}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "bn"
                        ? "অনুমোদিত মেডিকেল সেন্টারে পুঙ্খানুপুঙ্খ স্বাস্থ্য পরীক্ষা ও স্বরাষ্ট্র মন্ত্রণালয়ের এনআইডি/পাসপোর্ট বায়োমেট্রিক ভেরিফিকেশন।"
                        : "100% pre-departure health screening via authorized GCC GAMCA centers with biometric identity verification to prevent fraud."}
                    </p>
                  </div>
                </div>

                {/* Pillar 5 */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/compliance/pillar5_orientation.webp"
                        alt="Pre-Departure Legal Orientation"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] flex items-center justify-center shadow-sm">
                        <Icon name="school" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          Pre-Flight Labor Briefing
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors mb-2">
                      {language === "bn" ? "৫. প্রি-ডিপার্চার ওরিয়েন্টেশন" : "5. Pre-Departure Legal Orientation"}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "bn"
                        ? "গন্তব্য দেশের শ্রম আইন, ভাষা, সংস্কৃতির প্রশিক্ষণ এবং যেকোনো আইনি প্রয়োজনে দূতাবাস সহায়তা সংক্রান্ত বিস্তারিত ব্রিফিং।"
                        : "Mandatory pre-flight workshops covering host-nation labor laws, cultural etiquette, workplace safety, and consular emergency channels."}
                    </p>
                  </div>
                </div>

                {/* Pillar 6 */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src="/images/compliance/pillar6_welfare.webp"
                        alt="Post-Arrival Welfare & Escrow"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] flex items-center justify-center shadow-sm">
                        <Icon name="support_agent" size={20} />
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                          24/7 GCC On-Ground Helpdesk
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A192F] font-serif group-hover:text-[#8C6A2B] transition-colors mb-2">
                      {language === "bn" ? "৬. সার্বক্ষণিক প্রবাসী সুরক্ষা ও ওয়েলফেয়ার" : "6. Post-Arrival Welfare & Escrow"}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "bn"
                        ? "রিয়াদ, দুবাই ও দোহার স্থানীয় গ্রাউন্ড টিমের মাধ্যমে কর্মীদের সার্বক্ষণিক খোঁজখবর ও যেকোনো অভিযোগ নিষ্পত্তির তাৎক্ষণিক ব্যবস্থা।"
                        : "Permanent liaison desks across Riyadh, Dubai, and Doha offering continuous worker welfare support, grievance resolution, and repatriation safety."}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 📜 3. Accreditations & Ministry Clearances */}
            <section className="space-y-8 border-t border-slate-200/80 pt-10">
              <SectionHeader
                tag={t.certTag}
                tagIcon="badge"
                heading={t.certHeading}
                subheading={t.certSubheading}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="account_balance" size={22} />
                  </span>
                  <h4 className="text-sm font-bold text-[#0A192F]">Ministry of Expatriates' Welfare</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Government Recruiting Agency License 1173 with permanent active operational authorization.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="credit_card" size={22} />
                  </span>
                  <h4 className="text-sm font-bold text-[#0A192F]">BMET Smart Card System</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct integration with Bureau of Manpower, Employment and Training for biometric smart card issuance.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="verified" size={22} />
                  </span>
                  <h4 className="text-sm font-bold text-[#0A192F]">ISO 9001:2015 Certification</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Audited Quality Management System ensuring standard operational protocols and candidate data protection.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <span className="p-2 rounded-xl bg-[#C5A059]/15 text-[#8C6A2B] inline-block mb-1">
                    <Icon name="corporate_fare" size={22} />
                  </span>
                  <h4 className="text-sm font-bold text-[#0A192F]">Saudi Qiwa & UAE MoHRE</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct electronic integration with host country labor ministries for authentic digital contract attestation.
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
    </main>
  );
}
