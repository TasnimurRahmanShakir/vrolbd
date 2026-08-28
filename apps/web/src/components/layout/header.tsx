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
    { href: "/compliance", label: t.compliance, icon: "verified_user" },
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
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0A192F] border-b border-white/10 shadow-xl transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#C5A059]/30 shadow-lg bg-transparent p-1 flex items-center justify-center group-hover:border-[#C5A059]/70 group-hover:scale-105 transition-all">
              <Image
                src="/VROLBD Logo.png"
                alt="Vision Recruiting & Overseas Ltd."
                width={48}
                height={48}
                className="w-full h-full object-contain brightness-105"
              />
            </div>
            <div>
              <span className="text-base sm:text-md font-extrabold tracking-wider text-white font-['Outfit'] block leading-none">
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
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C5A059]/40 transition-all rounded-xl cursor-pointer"
            >
              <Icon name="login" size={15} className="text-[#C5A059]" />
              <span>{t.login}</span>
            </button>

            {/* Contact Us Action Button with Smooth Scrolling */}
            <Link
              href="/#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 transition-all rounded-xl shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Icon name="mail" size={15} />
              <span>{t.contactUs || (language === "bn" ? "যোগাযোগ" : "Contact Us")}</span>
            </Link>

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

        {/* Mobile Navigation Drawer with Active State */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0A192F] shadow-2xl px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2 text-xs font-medium uppercase tracking-wider text-slate-200">
              {navItems.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl transition-all ${
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
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5 sm:hidden">
              <button
                onClick={() => handleOpenAuth("login")}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/5 border border-white/15 rounded-xl"
              >
                <Icon name="login" size={16} className="text-[#C5A059]" />
                <span>{t.login}</span>
              </button>
              <Link
                href="/#contact"
                onClick={handleMobileScrollToContact}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] rounded-xl shadow-lg"
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
