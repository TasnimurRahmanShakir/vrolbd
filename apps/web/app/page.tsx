import React from "react";
import { HeroSection } from "@/features/home/components/hero-section";
import { DeploymentPipelineSection } from "@/features/home/components/deployment-pipeline-section";
import { IndustryBentoSection } from "@/features/home/components/industry-bento-section";
import { LeadershipOrgChart } from "@/features/home/components/leadership-org-chart";
import { LiveMarqueeJobsSection } from "@/features/home/components/live-marquee-jobs-section";
import { B2BEnterpriseCTASection } from "@/features/home/components/b2b-enterprise-cta-section";
import { ErrorBoundary } from "@/components/common/error-boundary";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-slate-100 relative overflow-x-clip pt-16 sm:pt-20">
      {/* Ambient Atmospheric Accents matching VROLBD Logo (Deep Obsidian & Warm Gold) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-[#C5A059]/10 via-[#0E1422]/60 to-[#080C14] blur-[140px] pointer-events-none" />
      <div className="absolute top-[350px] right-[-120px] w-[550px] h-[550px] bg-[#C5A059]/8 rounded-full blur-[170px] pointer-events-none" />

      {/* Hero Section: Full-Page Cinematic Hero with Sequential Entrance & Trust Ribbon */}
      <HeroSection />

      {/* 
        Eye-Relief Light Tone Zone
        Soft off-white/slate-50 foundation with dark charcoal typography and warm gold accents
      */}
      <div className="w-full bg-[#F8FAFC] text-slate-800 relative transition-colors border-t border-slate-200/80">

        {/* Section 2: Leadership Architecture & Visionaries */}
        <div className="border-b border-slate-200/80">
          <LeadershipOrgChart />
        </div>

        {/* Section 3: Industry Workforce Disciplines */}
        <div className="bg-[#FAF8F5]/80 border-b border-slate-200/80">
          <IndustryBentoSection />
        </div>

        {/* Section 4: 4-Step Deployment Pipeline */}
        <div className="border-b border-slate-200/80">
          <DeploymentPipelineSection />
        </div>

        {/* Section 5: Active Employment Openings */}
        <div className="bg-[#FAF8F5]/80 border-b border-slate-200/80">
          <ErrorBoundary>
            <LiveMarqueeJobsSection />
          </ErrorBoundary>
        </div>

        {/* Section 6: B2B Enterprise Recruitment Gateway */}
        <div>
          <B2BEnterpriseCTASection />
        </div>

      </div>
    </main>
  );
}
