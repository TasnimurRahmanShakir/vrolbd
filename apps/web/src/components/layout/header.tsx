"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { useHeader } from "./hooks/use-header";
import { AuthModal } from "./auth-modal";

export function Header() {
  const pathname = usePathname();
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

  const navItems = [
    { href: "/", label: t.home, icon: "home" },
    { href: "/about", label: t.about, icon: "info" },
    { href: "/jobs", label: t.jobSearch, icon: "travel_explore" },
    { href: "/corridors", label: t.corridors, icon: "public" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleMobileScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#080C14]/95 backdrop-blur-md border-b border-white/10 shadow-xl transition-all">
        <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[#C5A059]/30 shadow-lg bg-transparent p-1 flex items-center justify-center group-hover:border-[#C5A059]/70 group-hover:scale-105 transition-all">
              <Image
                src="/VROLBD Logo.png"
                alt="Vision Recruiting & Overseas Ltd."
                width={44}
                height={44}
                className="w-full h-full object-contain brightness-105"
                priority
              />
            </div>
            <div>
              <span className="text-[11px] xs:text-xs sm:text-sm md:text-base font-extrabold tracking-wider text-white font-['Outfit'] block leading-tight">
                VISION RECRUITING <br />
                & OVERSEAS LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active State */}
          <nav className="hidden lg:flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider">
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                    active
                      ? "text-[#E2CB8F] font-bold bg-[#C5A059]/15 border border-[#C5A059]/40 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <Icon
                    name={item.icon}
                    size={16}
                    className={`transition-colors ${active ? "text-[#C5A059]" : "text-slate-400"}`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Bilingual Toggle Button (বাংলা / EN) */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="relative inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[11px] sm:text-xs font-semibold text-slate-200 transition-all backdrop-blur-md cursor-pointer hover:border-[#C5A059]/40 shrink-0"
              title="Toggle Language / ভাষা পরিবর্তন করুন"
              aria-label="Toggle language between Bangla and English"
            >
              <Icon name="language" size={15} className="text-[#C5A059]" />
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

            {/* Login Button (Desktop & Tablet) */}
            <button
              onClick={() => handleOpenAuth("login")}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C5A059]/40 transition-all rounded-xl cursor-pointer shrink-0"
            >
              <Icon name="login" size={15} className="text-[#C5A059]" />
              <span>{t.login}</span>
            </button>

            {/* Contact Us Action Button (Visible on Desktop / Tablet md+, inside Mobile Menu on smaller screens) */}
            <Link
              href="/#contact"
              onClick={handleScrollToContact}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 transition-all rounded-xl shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <Icon name="mail" size={15} />
              <span>{t.contactUs || (language === "bn" ? "যোগাযোগ" : "Contact Us")}</span>
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Active State */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#080C14]/98 backdrop-blur-xl shadow-2xl px-5 py-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-200">
              {navItems.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl transition-all ${
                      active
                        ? "bg-[#C5A059]/20 text-[#E2CB8F] font-bold border border-[#C5A059]/40 shadow-sm"
                        : "hover:bg-white/5 text-slate-300 hover:text-white"
                    }`}
                  >
                    <Icon
                      name={item.icon}
                      size={18}
                      className={active ? "text-[#C5A059]" : "text-slate-400"}
                    />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions: Login & Contact Us */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => handleOpenAuth("login")}
                className="sm:hidden w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all cursor-pointer"
              >
                <Icon name="login" size={16} className="text-[#C5A059]" />
                <span>{t.login}</span>
              </button>
              
              <Link
                href="/#contact"
                onClick={handleMobileScrollToContact}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 rounded-xl shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                <Icon name="mail" size={16} />
                <span>{t.contactUs || (language === "bn" ? "যোগাযোগ" : "Contact Us")}</span>
              </Link>
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
