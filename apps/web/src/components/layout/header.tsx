"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { useHeader } from "./hooks/use-header";
import { AuthModal } from "./auth-modal";

export function Header() {
  const {
    language,
    toggleLanguage,
    t,
    mobileMenuOpen,
    setMobileMenuOpen,
    authModalState,
    handleOpenAuth,
    handleCloseAuth,
  } = useHeader();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0A192F] border-b border-white/10 shadow-xl transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E2CB8F] via-[#C5A059] to-[#8C6A2B] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
                <Icon name="flight_takeoff" className="text-[#C5A059] text-xl" />
              </div>
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-wider text-white font-['Outfit'] block">
                VROL<span className="text-[#C5A059]">BD</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-slate-400 font-semibold leading-tight">
                {language === "bn" ? "ওভারসিজ রিক্রুটমেন্ট আর্কিটেকচার" : "Overseas Deployment Architecture"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-slate-300">
            <Link
              href="/"
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 py-1"
            >
              <Icon name="home" size={16} className="text-[#C5A059]" />
              <span>{t.home}</span>
            </Link>
            <Link
              href="/about"
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 py-1"
            >
              <Icon name="info" size={16} className="text-[#C5A059]" />
              <span>{t.about}</span>
            </Link>
            <Link
              href="/jobs"
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 py-1"
            >
              <Icon name="travel_explore" size={16} className="text-[#C5A059]" />
              <span>{t.jobSearch}</span>
            </Link>
            <Link
              href="/corridors"
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 py-1"
            >
              <Icon name="public" size={16} className="text-[#C5A059]" />
              <span>{t.corridors}</span>
            </Link>
            <Link
              href="/compliance"
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 py-1"
            >
              <Icon name="verified_user" size={16} className="text-[#C5A059]" />
              <span>{t.compliance}</span>
            </Link>
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Bilingual Toggle Button (বাংলা / EN) */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="relative inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 transition-all backdrop-blur-md cursor-pointer hover:border-[#C5A059]/40"
              title="Toggle Language / ভাষা পরিবর্তন করুন"
              aria-label="Toggle language between Bangla and English"
            >
              <Icon name="language" size={16} className="text-[#C5A059]" />
              <div className="flex items-center gap-1">
                <span className={`transition-colors ${language === "bn" ? "text-[#C5A059] font-bold" : "text-slate-400"}`}>
                  বাংলা
                </span>
                <span className="text-slate-500">/</span>
                <span className={`transition-colors ${language === "en" ? "text-[#C5A059] font-bold" : "text-slate-400"}`}>
                  EN
                </span>
              </div>
            </button>

            {/* Login Button */}
            <button
              onClick={() => handleOpenAuth("login")}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C5A059]/40 transition-all rounded-xl cursor-pointer"
            >
              <Icon name="login" size={15} className="text-[#C5A059]" />
              <span>{t.login}</span>
            </button>

            {/* Register Button */}
            <button
              onClick={() => handleOpenAuth("register")}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 transition-all rounded-xl shadow-lg cursor-pointer"
            >
              <Icon name="person_add" size={15} />
              <span>{t.register}</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0A192F] shadow-2xl px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-3 text-xs font-medium uppercase tracking-wider text-slate-200">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#C5A059] transition-colors"
              >
                <Icon name="home" size={18} className="text-[#C5A059]" />
                <span>{t.home}</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#C5A059] transition-colors"
              >
                <Icon name="info" size={18} className="text-[#C5A059]" />
                <span>{t.about}</span>
              </Link>
              <Link
                href="/jobs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#C5A059] transition-colors"
              >
                <Icon name="travel_explore" size={18} className="text-[#C5A059]" />
                <span>{t.jobSearch}</span>
              </Link>
              <Link
                href="/corridors"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#C5A059] transition-colors"
              >
                <Icon name="public" size={18} className="text-[#C5A059]" />
                <span>{t.corridors}</span>
              </Link>
              <Link
                href="/compliance"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#C5A059] transition-colors"
              >
                <Icon name="verified_user" size={18} className="text-[#C5A059]" />
                <span>{t.compliance}</span>
              </Link>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5 sm:hidden">
              <button
                onClick={() => handleOpenAuth("login")}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/5 border border-white/15 rounded-xl"
              >
                <Icon name="login" size={16} className="text-[#C5A059]" />
                <span>{t.login}</span>
              </button>
              <button
                onClick={() => handleOpenAuth("register")}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] rounded-xl shadow-lg"
              >
                <Icon name="person_add" size={16} />
                <span>{t.register}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Auth Modal */}
      <AuthModal
        isOpen={authModalState.isOpen}
        initialMode={authModalState.mode}
        onClose={handleCloseAuth}
      />
    </>
  );
}
