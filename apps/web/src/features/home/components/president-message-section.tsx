"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";

interface PresidentMessageSectionProps {
  ctaHref?: string;
  ctaLabel?: string;
}

export function PresidentMessageSection({
  ctaHref = "/contact",
  ctaLabel,
}: PresidentMessageSectionProps = {}) {
  const { language } = useLanguageStore();
  const t = translations[language].presidentMessage;
  const resolvedLabel = ctaLabel || t.learnMore;

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* 🖼️ Minimal Executive Portrait (Syed Miraj Hossain, Chairman) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[240px] sm:max-w-[270px]">
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-md bg-[#0A192F] aspect-[4/5]">
                <Image
                  src="/Syed Miraj Hossain.jpeg"
                  alt={t.name}
                  width={380}
                  height={475}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ✍️ Clean Editorial Statement from Chairman */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#8C6A2B] text-xs font-bold uppercase tracking-wider">
                {/* <Icon name="verified" size={14} className="text-[#8C6A2B]" /> */}
                {t.tag}
              </span>
              {/* <span className="text-xs text-slate-500 font-medium">
                {t.licenseText}
              </span> */}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A192F] tracking-tight leading-snug">
              {t.heading}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t.p1}
            </p>

            {/* Signature & Direct Action CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold font-serif text-[#0A192F]">
                  {t.name}
                </h4>
                <p className="text-xs text-[#8C6A2B] font-semibold mt-0.5">
                  {t.role}
                </p>
                <p className="text-[11px] text-slate-500">
                  {t.company}
                </p>
              </div>

              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#173B61] text-[#C5A059] text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-xs self-start sm:self-auto"
              >
                <span>{resolvedLabel}</span>
                <Icon name="arrow_forward" size={15} />
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
