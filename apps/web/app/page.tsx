import React from "react";
import { Icon } from "@/components/ui/icon";
import { Header, Footer } from "@/components/layout";
import { HeroSection } from "@/features/home/components/hero-section";
import { HeroFloatingSearch } from "@/features/home/components/hero-floating-search";
import { JobsInteractiveSection } from "@/features/jobs/components/jobs-interactive-section";
import { ErrorBoundary } from "@/components/common/error-boundary";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-hidden pt-20">
      {/* Ambient Radial Atmospheric Glow for Hero Area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
      <div className="absolute top-[350px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* Top Enterprise Navigation */}
      <Header />

      {/* Hero Section: Authority Copy & Interactive World Map (Dark Executive Theme) */}
      <HeroSection />

      {/* 
        Eye-Relief Light Tone Zone (Between Hero Section and Footer)
        Soft, soothing off-white/slate-50 foundation with crisp navy typography and warm gold accents
      */}
      <div className="w-full bg-[#F4F6F9] text-slate-800 relative pt-0 pb-20 transition-colors border-t border-slate-200/80">
        {/* Floating Quick Search Bar at the Middle Junction */}
        <div className="relative -top-7 sm:-top-8 lg:-top-9 z-20">
          <HeroFloatingSearch />
        </div>

        {/* Subtle Warm Atmospheric Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-radial from-[#C5A059]/8 via-[#F4F6F9]/0 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-radial from-[#173B61]/5 to-transparent blur-[140px] pointer-events-none" />

        <div className="px-4 sm:px-6 max-w-[1440px] mx-auto space-y-24 relative z-10 pt-6 sm:pt-8">

          {/* Phase 2: Asymmetric Bento Grid / Enterprise Capabilities */}
          <section id="capabilities">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#8C6A2B] block mb-2">
                Enterprise Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-['Outfit']">
                Why Tier-1 Employers Rely on VROLBD
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Government-licensed recruitment infrastructure designed to eliminate overseas manpower compliance risks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Bento 1: Biometric Screening */}
              <div className="md:col-span-2 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C6A2B]">
                    Institutional Verification
                  </span>
                  <span className="p-2.5 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6A2B]">
                    <Icon name="fingerprint" size={24} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F] font-['Outfit'] mb-3">
                  Biometric Vetting & Trade Center Testing
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Candidates undergo practical multi-axis skill tests across our certified technical institutes in Dhaka and Chittagong prior to consular submission.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-center">
                  <div>
                    <span className="block text-lg font-bold text-[#8C6A2B]">100%</span>
                    <span className="text-[11px] text-slate-500 font-medium">GAMCA Medical</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-[#0A192F]">Zero</span>
                    <span className="text-[11px] text-slate-500 font-medium">Trade Forgery</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-[#8C6A2B]">BMET</span>
                    <span className="text-[11px] text-slate-500 font-medium">Smart Clearance</span>
                  </div>
                </div>
              </div>

              {/* Bento 2: Consular Speed */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center mb-6 text-[#8C6A2B]">
                    <Icon name="rocket_launch" className="text-2xl" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">
                    Consular Pipeline
                  </span>
                  <h3 className="text-2xl font-bold text-[#0A192F] mt-1 mb-2">Express E-Visa</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated Qiwa, Musaned, MOHRE, and QVC visa attestation with embassy concierge handling.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-xs font-bold text-[#8C6A2B]">
                  <span>14-Day Cycle Time</span>
                  <Icon name="arrow_forward" size={14} />
                </div>
              </div>

              {/* Bento 3: Ethical Recruitment */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group" id="compliance">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0A192F]/5 border border-[#0A192F]/10 flex items-center justify-center mb-6 text-[#0A192F]">
                    <Icon name="gavel" className="text-2xl" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">
                    Ethical Protocol
                  </span>
                  <h3 className="text-2xl font-bold text-[#0A192F] mt-1 mb-2">ILO & BMET</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strict employer-pay hiring models with zero worker exploitation and 100% legal wage protections.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-xs font-bold text-[#8C6A2B]">
                  <span>Fair Recruitment</span>
                  <Icon name="verified" size={14} />
                </div>
              </div>
            </div>
          </section>

          {/* Phase 3: Live Requisitions Section with TanStack Query & Async Lifecycle */}
          <section id="opportunities" className="pt-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#8C6A2B] block mb-2">
                  Active Deployment Opportunities
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-['Outfit']">
                  Global Manpower Requisitions
                </h2>
              </div>
              <p className="text-xs text-slate-600 max-w-md">
                Explore open vacancies with pre-approved governmental work visas, competitive tax-free wages, and full corporate boarding.
              </p>
            </div>

            <ErrorBoundary>
              <JobsInteractiveSection />
            </ErrorBoundary>
          </section>

          {/* Phase 4: B2B Enterprise Manpower Gateway */}
          <section id="b2b-gateway" className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-[#FAF6EE] border border-[#C5A059]/40 shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#8C6A2B] block mb-2">
                  For Overseas Employers & Megaprojects
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-['Outfit'] mb-3">
                  Mobilize 50 to 5,000+ Skilled Workers Within 30 Days
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Receive customized candidate dossiers, conduct on-site or digital interviews, and leverage our turnkey consular dispatch pipeline.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Icon name="check_circle" size={16} className="text-[#8C6A2B]" />
                    Dedicated Account Director
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="check_circle" size={16} className="text-[#8C6A2B]" />
                    Trade Test Facility Access
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="check_circle" size={16} className="text-[#8C6A2B]" />
                    Diplomatic Attestation
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
                <a
                  href="#opportunities"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-2xl shadow-lg"
                >
                  <Icon name="send" size={18} />
                  <span>Submit Manpower Request</span>
                </a>
                <a
                  href="mailto:contact@vrolbd.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-white hover:bg-slate-100 border border-slate-300 transition-all rounded-2xl shadow-sm"
                >
                  <Icon name="mail" size={18} className="text-[#8C6A2B]" />
                  <span>Direct Executive Line</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Enterprise Footer */}
      <Footer />
    </main>
  );
}
