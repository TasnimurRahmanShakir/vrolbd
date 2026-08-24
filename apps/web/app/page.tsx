import React from "react";
import { Header, Footer, LanguageWrapper } from "@/components/layout";
import { HeroSection } from "@/features/home/components/hero-section";
import { HeroFloatingSearch } from "@/features/home/components/hero-floating-search";
import { DeploymentPipelineSection } from "@/features/home/components/deployment-pipeline-section";
import { IndustryBentoSection } from "@/features/home/components/industry-bento-section";
import { ManpowerEstimatorSection } from "@/features/home/components/manpower-estimator-section";
import { LiveMarqueeJobsSection } from "@/features/home/components/live-marquee-jobs-section";
import { VisionariesSection } from "@/features/home/components/visionaries-section";
import { B2BEnterpriseCTASection } from "@/features/home/components/b2b-enterprise-cta-section";
import { ErrorBoundary } from "@/components/common/error-boundary";

export default function HomePage() {
  return (
    <LanguageWrapper>
      <main className="min-h-screen bg-[#0A192F] text-slate-100 relative overflow-x-clip pt-20">
        {/* Ambient Radial Atmospheric Glow for Hero Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#173B61]/40 via-[#0A192F]/80 to-[#0A192F] blur-[140px] pointer-events-none" />
        <div className="absolute top-[350px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/5 rounded-full blur-[170px] pointer-events-none" />

        {/* Top Enterprise Navigation */}
        <Header />

        {/* Hero Section: Authority Copy, Dual Gateway & Interactive World Map */}
        <HeroSection />

        {/* 
          Eye-Relief Light Tone Zone (Between Hero Section and Footer)
          Soft, soothing off-white/slate-50 foundation with crisp navy typography and warm gold accents
        */}
        <div className="w-full bg-[#F4F6F9] text-slate-800 relative pt-0 pb-8 transition-colors border-t border-slate-200/80">
          
          {/* Floating Quick Search Bar at the Middle Junction */}
          <div className="relative -top-7 sm:-top-8 lg:-top-9 z-20">
            <HeroFloatingSearch />
          </div>

          {/* Subtle Warm Atmospheric Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-radial from-[#C5A059]/8 via-[#F4F6F9]/0 to-transparent blur-[120px] pointer-events-none" />

          <div className="space-y-3 sm:space-y-6 relative z-10">
            
            {/* Section 2: Animated 4-Step Deployment Pipeline Circuit */}
            <div className="border-b border-slate-200/80 pb-2">
              <DeploymentPipelineSection />
            </div>

            {/* Section 3: Industry Workforce Sectors (The Corporate Bento Grid) */}
            <div className="bg-[#FAF8F5]/80 border-y border-slate-200/80">
              <IndustryBentoSection />
            </div>

            {/* Section 4: Interactive Manpower Mobilization Estimator (The SaaS Widget) */}
            <div className="border-b border-slate-200/80 pb-2">
              <ManpowerEstimatorSection />
            </div>

            {/* Section 5: Live Requisitions (Infinite Marquee Ticker) */}
            <div className="bg-[#FAF8F5]/80 border-y border-slate-200/80">
              <ErrorBoundary>
                <LiveMarqueeJobsSection />
              </ErrorBoundary>
            </div>

            {/* Section 6: The Visionaries (Sticky Scroll Leadership) */}
            <div className="border-b border-slate-200/80 pb-2">
              <VisionariesSection />
            </div>

            {/* Section 7: B2B Enterprise CTA */}
            <div className="pb-4">
              <B2BEnterpriseCTASection />
            </div>

          </div>
        </div>

        {/* Enterprise Footer */}
        <Footer />
      </main>
    </LanguageWrapper>
  );
}
