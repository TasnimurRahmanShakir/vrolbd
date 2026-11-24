import React from "react";
import { HeroSection } from "@/features/home/components/hero-section";
import { DeploymentPipelineSection } from "@/features/home/components/deployment-pipeline-section";
import { IndustryBentoSection } from "@/features/home/components/industry-bento-section";
import { InfrastructureCapacitySection } from "@/features/home/components/infrastructure-capacity-section";
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
        🌫️ Centralized Token System Light Zone
        Powered by CSS variables: --canvas-base (#F7F4F3), --canvas-zebra (#EAE6E4), and --brand-black (#080708)
        Edit in apps/web/app/globals.css to update colors everywhere!
      */}
      <div 
        className="w-full bg-canvas-base text-brand-black relative transition-colors border-t border-black/10"
        style={{ backgroundColor: "var(--canvas-base, #F7F4F3)", color: "var(--brand-black, #080708)" }}
      >
        {/* Soft atmospheric gradient feather smoothing transition from dark hero */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black/[0.04] to-transparent pointer-events-none" />

        {/* Section 2: Leadership Architecture & Visionaries (Base Tone) */}
        <div className="bg-canvas-base relative z-10" style={{ backgroundColor: "var(--canvas-base, #F7F4F3)" }}>
          <LeadershipOrgChart />
        </div>

        {/* Subtle Pale Slate Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B2B6BD]/50 to-transparent" />

        {/* Section 3: Industry Workforce Disciplines (Zebra Tone: Muted Pale Slate) */}
        <div 
          className="bg-canvas-zebra border-y border-[#B2B6BD]/30"
          style={{ backgroundColor: "var(--canvas-zebra, #EAE6E4)" }}
        >
          <IndustryBentoSection />
        </div>

        {/* Subtle Pale Slate Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B2B6BD]/50 to-transparent" />

        {/* Section 4: 4-Step Deployment Pipeline (Base Tone) */}
        <div className="bg-canvas-base" style={{ backgroundColor: "var(--canvas-base, #F7F4F3)" }}>
          <DeploymentPipelineSection />
        </div>

        {/* Subtle Pale Slate Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B2B6BD]/50 to-transparent" />

        {/* Section 5: Technical Infrastructure & Testing Center Capacity (Zebra Tone) */}
        <div 
          className="bg-canvas-zebra border-y border-[#B2B6BD]/30"
          style={{ backgroundColor: "var(--canvas-zebra, #EAE6E4)" }}
        >
          <InfrastructureCapacitySection />
        </div>

        {/* Subtle Pale Slate Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B2B6BD]/50 to-transparent" />

        {/* Section 6: Active Overseas Job Vacancies (Base Tone) */}
        <div className="bg-canvas-base" style={{ backgroundColor: "var(--canvas-base, #F7F4F3)" }}>
          <ErrorBoundary>
            <LiveMarqueeJobsSection />
          </ErrorBoundary>
        </div>

        {/* Subtle Pale Slate Transition Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B2B6BD]/50 to-transparent" />

        {/* Section 7: B2B Enterprise Recruitment Gateway (Base Tone) */}
        <div className="bg-canvas-base" style={{ backgroundColor: "var(--canvas-base, #F7F4F3)" }}>
          <B2BEnterpriseCTASection />
        </div>

      </div>
    </main>
  );
}
