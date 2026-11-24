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
        🌾 Eye-Soothed Editorial Linen Zone
        Eliminates stark eye-strain and yellow glare with gentle natural paper tones (#FBFBFA & #F2EFE9)
        Provides AAA high-contrast navy typography (#102C57) and clear section separation
      */}
      <div className="w-full bg-[#FBFBFA] text-[#102C57] relative transition-colors border-t border-[#102C57]/15">

        {/* Section 2: Leadership Architecture & Visionaries (Base Tone #FBFBFA) */}
        <div className="bg-[#FBFBFA]">
          <LeadershipOrgChart />
        </div>

        {/* Subtle Gold Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

        {/* Section 3: Industry Workforce Disciplines (Zebra Tone: Gentle Linen #F2EFE9) */}
        <div className="bg-[#F2EFE9]/90 border-y border-[#102C57]/8">
          <IndustryBentoSection />
        </div>

        {/* Subtle Gold Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

        {/* Section 4: 4-Step Deployment Pipeline (Base Tone #FBFBFA) */}
        <div className="bg-[#FBFBFA]">
          <DeploymentPipelineSection />
        </div>

        {/* Subtle Gold Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

        {/* Section 5: Active Employment Openings (Zebra Tone: Gentle Linen #F2EFE9) */}
        <div className="bg-[#F2EFE9]/90 border-y border-[#102C57]/8">
          <ErrorBoundary>
            <LiveMarqueeJobsSection />
          </ErrorBoundary>
        </div>

        {/* Subtle Gold Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

        {/* Section 6: B2B Enterprise Recruitment Gateway (Base Tone #FBFBFA) */}
        <div className="bg-[#FBFBFA]">
          <B2BEnterpriseCTASection />
        </div>

      </div>
    </main>
  );
}
