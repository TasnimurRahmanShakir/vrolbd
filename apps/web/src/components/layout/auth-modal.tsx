"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui/icon";
import { useAuthModal, UseAuthModalProps } from "./hooks/use-auth-modal";

export function AuthModal(props: UseAuthModalProps) {
  const { isOpen, onClose } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const {
    mode,
    setMode,
    email,
    setEmail,
    password,
    setPassword,
    fullName,
    setFullName,
    phone,
    setPhone,
    submitted,
    t,
    handleSubmit,
  } = useAuthModal(props);

  if (!isOpen || !mounted) return null;

  const modal = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050B14]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-[#0F233D] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={t.close}
        >
          <Icon name="close" size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold mb-3">
            <Icon name="lock" size={14} />
            <span>{mode === "login" ? "Secure Portal" : "Candidate Gateway"}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
            {mode === "login" ? t.loginTitle : t.registerTitle}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {mode === "login" ? t.loginSubtitle : t.registerSubtitle}
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto animate-bounce">
              <Icon name="check_circle" size={32} />
            </div>
            <h4 className="text-base font-bold text-white">
              {mode === "login" ? "Welcome back!" : "Profile created successfully!"}
            </h4>
            <p className="text-xs text-slate-300">Synchronizing consular clearances...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.fullName}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Mohammad Rafiqul Islam"
                      className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.phone}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1700-000000"
                      className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.email}
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="candidate@vrolbd.com"
                  className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.password}
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icon name={mode === "login" ? "login" : "how_to_reg"} size={16} />
              <span>{mode === "login" ? t.signInBtn : t.registerBtn}</span>
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setMode(mode === "login" ? "register" : "login")}
                className="text-xs text-[#C5A059] hover:underline transition-colors"
              >
                {mode === "login" ? t.switchToRegister : t.switchToLogin}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
