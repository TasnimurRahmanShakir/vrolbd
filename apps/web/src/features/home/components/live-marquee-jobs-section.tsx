"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { useMarqueeJobs } from "../hooks/use-marquee-jobs";
import { ApplicationModal } from "@/features/applications/components/application-modal";
import { Job } from "@/features/jobs/types/job.types";

export function LiveMarqueeJobsSection() {
  const { jobs, isLoading, activeJob, setActiveJob, t } = useMarqueeJobs();
  const [isPaused, setIsPaused] = useState(false);
  const [modalMode, setModalMode] = useState<"details" | "apply">("details");

  const displayJobs = jobs && jobs.length > 0 ? [...jobs, ...jobs] : [];

  const handleOpenDetails = (job: Job) => {
    setModalMode("details");
    setActiveJob(job);
  };

  const handleOpenApply = (job: Job, e: React.MouseEvent) => {
    e.stopPropagation();
    setModalMode("apply");
    setActiveJob(job);
  };

  return (
    <section id="opportunities" className="py-10 md:py-14 max-w-[1440px] mx-auto overflow-hidden">
      {/* 🏛️ Reusable Left-Aligned Section Header */}
      <div className="px-4 sm:px-6">
        <SectionHeader
          tag={t.tag}
          tagIcon="trending_up"
          heading={t.heading}
          subheading={t.subheading}
          rightElement={
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/60 text-[11px] font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.pauseHint}</span>
            </span>
          }
        />
      </div>

      {/* Infinite Horizontal Stream */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Edge Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4F6F9] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4F6F9] to-transparent z-10 pointer-events-none" />

        {isLoading ? (
          <div className="flex gap-6 px-6 overflow-hidden">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="w-80 h-52 rounded-2xl bg-white border border-slate-200 animate-pulse shrink-0"
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: isPaused || activeJob !== null ? undefined : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 32,
                ease: "linear",
              },
            }}
          >
            {displayJobs.map((job: Job, idx: number) => (
              <motion.div
                key={`${job.id}-${idx}`}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-84 sm:w-92 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 shrink-0 flex flex-col justify-between cursor-pointer group"
                onClick={() => handleOpenDetails(job)}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <Icon name="location_on" size={14} className="text-[#8C6A2B]" />
                      {job.city}, {job.country}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#8C6A2B] border border-[#C5A059]/30">
                      {job.category.split(" ")[0]}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0A192F] group-hover:text-[#8C6A2B] transition-colors line-clamp-1 mb-2 font-serif">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {job.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-100 text-slate-600 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Tax-Free Net</span>
                    <span className="text-sm font-extrabold text-[#8C6A2B] font-mono">{job.salary}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleOpenApply(job, e)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <Icon name="send" size={13} />
                    <span>{t.applyBtn}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Interactive Job Details & Application Modal */}
      {activeJob && (
        <ApplicationModal
          jobId={activeJob.id}
          jobTitle={activeJob.title}
          job={activeJob}
          initialMode={modalMode}
          onClose={() => setActiveJob(null)}
        />
      )}
    </section>
  );
}
