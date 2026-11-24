"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore } from "@/stores/language.store";

export default function FloatingContactButtons() {
  const { language } = useLanguageStore();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const whatsappNumber = "8801916600239"; // Official Corporate WhatsApp Number
  const message = encodeURIComponent(
    language === "bn"
      ? "হ্যালো, আমি ভিশন রিক্রুটিং (Vision Recruiting) সার্ভিস সম্পর্কে জানতে আগ্রহী।"
      : "Hello, I would like to inquire about Vision Recruiting overseas services."
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 📱 Mobile Sticky Candidate Action Bar (Visible strictly on mobile screens < 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#080708]/95 backdrop-blur-xl border-t border-[#FDC600]/30 px-3 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.5)] flex items-center justify-between gap-2 safe-area-bottom">
        {/* Hotline Call Button */}
        <a
          href="tel:01916600239"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-[11px] font-bold shadow-2xs active:scale-95 transition-all"
        >
          <Icon name="call" size={15} className="text-[#FDC600]" />
          <span>{language === "bn" ? "কল করুন" : "Call"}</span>
        </a>

        {/* WhatsApp Apply Button (High Visibility Emerald) */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] text-white text-[11px] font-extrabold shadow-md active:scale-95 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Hot Jobs Button */}
        <a
          href="/jobs"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#FDC600] text-[#080708] text-[11px] font-extrabold shadow-md active:scale-95 transition-all"
        >
          <Icon name="work" size={15} />
          <span>{language === "bn" ? "জব খুঁজুন" : "Jobs"}</span>
        </a>
      </div>

      {/* 🖥️ Desktop Floating Controls (Visible on md and above) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3 pointer-events-none">
        {/* 🚀 Animated Go To Top Button */}
        <div
          className={`flex items-center gap-3 transition-all duration-400 ease-out transform ${
            showScrollTop
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-6 scale-75 pointer-events-none"
          }`}
        >
          <span className="inline-block pointer-events-none opacity-0 group-hover/top:opacity-100 transition-all duration-300 translate-x-2 group-hover/top:translate-x-0 bg-[#080708]/95 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg border border-[#FDC600]/40 shadow-xl backdrop-blur-md whitespace-nowrap">
            {language === "bn" ? "উপরে যান" : "Go to top"}
          </span>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Go to top"
            className="group/top relative flex items-center justify-center w-12 h-12 rounded-full bg-[#080708]/90 hover:bg-[#FDC600] text-[#FDC600] hover:text-[#080708] border border-[#FDC600]/50 hover:border-[#FDC600] shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[#FDC600]/40 cursor-pointer"
          >
            <Icon
              name="keyboard_arrow_up"
              size={28}
              className="transition-transform duration-300 group-hover/top:-translate-y-1"
            />
          </button>
        </div>

        {/* 💬 WhatsApp Floating Animated Button */}
        <div className="group/wa flex items-center gap-3 pointer-events-auto">
          {/* Tooltip on hover */}
          <span className="inline-block pointer-events-none opacity-0 group-hover/wa:opacity-100 transition-all duration-300 translate-x-2 group-hover/wa:translate-x-0 bg-[#080708]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#25D366]/40 shadow-xl backdrop-blur-md whitespace-nowrap">
            {language === "bn" ? "হোয়াটসঅ্যাপে চ্যাট করুন" : "Chat on WhatsApp"}
          </span>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/50 hover:scale-110 hover:shadow-[#25D366]/80 transition-all duration-300 cursor-pointer"
          >
            {/* Animated Ping Radar Ring */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

            {/* Glow Halo */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.6)]" />

            {/* Real Official WhatsApp SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="currentColor"
              className="relative z-10 drop-shadow-md transition-transform duration-300 group-hover/wa:rotate-6"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
