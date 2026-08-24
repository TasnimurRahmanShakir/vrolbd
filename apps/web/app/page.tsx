import React from "react";
import { Icon } from "@/components/ui/icon";
import { HeroSection } from "@/features/home/components/hero-section";
import { JobsInteractiveSection } from "@/features/jobs/components/jobs-interactive-section";
import { ErrorBoundary } from "@/components/common/error-boundary";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-hidden">
      {/* Ambient Radial Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
      <div className="absolute top-[750px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* Top Enterprise Navigation */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E2CB8F] via-[#C5A059] to-[#8C6A2B] p-0.5 shadow-lg">
              <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
                <Icon name="flight_takeoff" className="text-[#C5A059] text-xl" />
              </div>
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-wider text-white font-['Outfit']">
                VROL<span className="text-[#C5A059]">BD</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
                Overseas Deployment Architecture
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-slate-300">
            <a href="#corridors" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
              <Icon name="public" size={16} className="text-[#C5A059]" />
              Corridors
            </a>
            <a href="#capabilities" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
              <Icon name="analytics" size={16} className="text-[#C5A059]" />
              Capability Matrix
            </a>
            <a href="#opportunities" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
              <Icon name="work_outline" size={16} className="text-[#C5A059]" />
              Requisitions
            </a>
            <a href="#compliance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
              <Icon name="verified_user" size={16} className="text-[#C5A059]" />
              Compliance
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#opportunities"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-xl shadow-lg"
            >
              <Icon name="bolt" size={16} />
              <span>Apply Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: Left Copy & Right Interactive World Map */}
      <HeroSection />

      {/* Main Content Area */}
      <div className="px-6 max-w-[1440px] mx-auto space-y-24 pb-24">

        {/* Phase 2: Asymmetric Bento Grid / Enterprise Capabilities */}
        <section id="capabilities">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A059] block mb-2">
              Enterprise Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Why Tier-1 Employers Rely on VROLBD
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Government-licensed recruitment infrastructure designed to eliminate overseas manpower compliance risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Bento 1: Biometric Screening */}
            <div className="md:col-span-2 p-8 rounded-3xl glass-card glass-card-hover relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                  Institutional Verification
                </span>
                <span className="p-2.5 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059]">
                  <Icon name="fingerprint" size={24} />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-3">
                Biometric Vetting & Trade Center Testing
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Candidates undergo practical multi-axis skill tests across our certified technical institutes in Dhaka and Chittagong prior to consular submission.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
                <div>
                  <span className="block text-lg font-bold text-[#C5A059]">100%</span>
                  <span className="text-[11px] text-slate-400">GAMCA Medical</span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-white">Zero</span>
                  <span className="text-[11px] text-slate-400">Trade Forgery</span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-[#C5A059]">BMET</span>
                  <span className="text-[11px] text-slate-400">Smart Clearance</span>
                </div>
              </div>
            </div>

            {/* Bento 2: Consular Speed */}
            <div className="p-8 rounded-3xl glass-card glass-card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mb-6">
                  <Icon name="rocket_launch" className="text-[#C5A059] text-2xl" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
                  Consular Pipeline
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-2">Express E-Visa</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated Qiwa, Musaned, MOHRE, and QVC visa attestation with embassy concierge handling.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#C5A059]">
                <span>14-Day Cycle Time</span>
                <Icon name="arrow_forward" size={14} />
              </div>
            </div>

            {/* Bento 3: Ethical Recruitment */}
            <div className="p-8 rounded-3xl glass-card glass-card-hover flex flex-col justify-between" id="compliance">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#173B61]/50 border border-white/10 flex items-center justify-center mb-6">
                  <Icon name="gavel" className="text-[#C5A059] text-2xl" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
                  Ethical Protocol
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-2">ILO & BMET</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Strict employer-pay hiring models with zero worker exploitation and 100% legal wage protections.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#C5A059]">
                <span>Fair Recruitment</span>
                <Icon name="verified" size={14} />
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3: Live Requisitions Section with TanStack Query & Async Lifecycle */}
        <section id="opportunities" className="pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A059] block mb-2">
                Active Deployment Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                Global Manpower Requisitions
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Explore open vacancies with pre-approved governmental work visas, competitive tax-free wages, and full corporate boarding.
            </p>
          </div>

          <ErrorBoundary>
            <JobsInteractiveSection />
          </ErrorBoundary>
        </section>

        {/* Phase 4: B2B Enterprise Manpower Gateway */}
        <section id="b2b-gateway" className="p-8 md:p-12 rounded-3xl glass-panel border border-[#C5A059]/30 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A059] block mb-2">
                For Overseas Employers & Megaprojects
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-3">
                Mobilize 50 to 5,000+ Skilled Workers Within 30 Days
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Receive customized candidate dossiers, conduct on-site or digital interviews, and leverage our turnkey consular dispatch pipeline.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" size={16} className="text-[#C5A059]" />
                  Dedicated Account Director
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" size={16} className="text-[#C5A059]" />
                  Trade Test Facility Access
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" size={16} className="text-[#C5A059]" />
                  Diplomatic Attestation
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
              <a
                href="#opportunities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-2xl shadow-xl"
              >
                <Icon name="send" size={18} />
                <span>Submit Manpower Request</span>
              </a>
              <a
                href="mailto:contact@vrolbd.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all rounded-2xl"
              >
                <Icon name="mail" size={18} className="text-[#C5A059]" />
                <span>Direct Executive Line</span>
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Enterprise Footer */}
      <footer className="w-full glass-panel border-t border-white/10 py-12 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C5A059] flex items-center justify-center text-[#0A192F]">
              <Icon name="domain" size={18} />
            </div>
            <div>
              <span className="font-bold text-white">VROLBD Overseas Recruitment Ltd.</span>
              <p className="text-[10px] text-slate-500">Corporate Headquarters: Dhaka • Dubai • Riyadh • Doha</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Icon name="verified" size={16} className="text-[#C5A059]" />
              ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Icon name="gavel" size={16} className="text-[#C5A059]" />
              Government License RL-2849 / Lic. 1173
            </span>
          </div>

          <p>© 2026 VROLBD Systems. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
