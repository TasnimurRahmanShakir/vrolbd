"use client";

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";

interface CountryOption {
  value: string;
  labelEn: string;
  labelBn: string;
  flag: string;
}

const DESTINATION_COUNTRIES: CountryOption[] = [
  { value: "Saudi Arabia", labelEn: "Saudi Arabia (KSA)", labelBn: "সৌদি আরব (KSA)", flag: "🇸🇦" },
  { value: "United Arab Emirates", labelEn: "United Arab Emirates (UAE)", labelBn: "সংযুক্ত আরব আমিরাত (UAE)", flag: "🇦🇪" },
  { value: "Qatar", labelEn: "Qatar", labelBn: "কাতার", flag: "🇶🇦" },
  { value: "Kuwait", labelEn: "Kuwait", labelBn: "কুয়েত", flag: "🇰🇼" },
  { value: "Oman", labelEn: "Oman", labelBn: "ওমান", flag: "🇴🇲" },
  { value: "Bahrain", labelEn: "Bahrain", labelBn: "বাহরাইন", flag: "🇧🇭" },
  { value: "Malaysia", labelEn: "Malaysia", labelBn: "মালয়েশিয়া", flag: "🇲🇾" },
  { value: "Romania & Europe", labelEn: "Romania & Eastern Europe", labelBn: "রোমানিয়া ও পূর্ব ইউরোপ", flag: "🇷🇴" },
  { value: "Japan & East Asia", labelEn: "Japan & East Asia", labelBn: "জাপান ও পূর্ব এশিয়া", flag: "🇯🇵" },
  { value: "Other Country", labelEn: "Other Global Corridor", labelBn: "অন্যান্য আন্তর্জাতিক করিডোর", flag: "🌐" },
];

export function B2BEnterpriseCTASection() {
  const { language } = useLanguageStore();
  const t = translations[language].b2bCta;
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    contactPerson: "",
    companyName: "",
    workEmail: "",
    phone: "",
    destinationCountry: "Saudi Arabia",
    headcountNeed: "",
    message: "",
  });

  // Combobox State
  const [isComboboxOpen, setIsComboboxOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const comboboxRef = useRef<HTMLDivElement>(null);

  // Close combobox when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target as Node)) {
        setIsComboboxOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = DESTINATION_COUNTRIES.filter((country) => {
    const query = searchQuery.toLowerCase();
    return (
      country.labelEn.toLowerCase().includes(query) ||
      country.labelBn.toLowerCase().includes(query) ||
      country.value.toLowerCase().includes(query)
    );
  });

  const selectedCountryObj =
    DESTINATION_COUNTRIES.find((c) => c.value === formData.destinationCountry) ??
    DESTINATION_COUNTRIES[0] ?? {
      value: "Saudi Arabia",
      labelEn: "Saudi Arabia (KSA)",
      labelBn: "সৌদি আরব (KSA)",
      flag: "🇸🇦",
    };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        contactPerson: "",
        companyName: "",
        workEmail: "",
        phone: "",
        destinationCountry: "Saudi Arabia",
        headcountNeed: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-10 md:py-16 px-4 sm:px-6 max-w-[1440px] mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#0F243B] to-[#173B61] text-white p-6 sm:p-10 md:p-14 border border-[#C5A059]/40 shadow-2xl overflow-hidden">
        
        {/* Glow Ambient Lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#173B61]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Enterprise Invitation & Quick Contacts */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-white/15">
              <Icon name="corporate_fare" size={16} />
              <span>{t.tag}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Outfit'] text-white leading-tight">
              {t.heading}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.subheading}
            </p>

            {/* Direct Contact Options */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                {language === "bn" ? "জরুরি এক্সিকিউটিভ যোগাযোগ" : "Direct Corporate Hotline"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                <a
                  href="tel:+8802226639178"
                  className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
                >
                  <Icon name="call" size={15} className="text-[#C5A059] shrink-0" />
                  <span>02-226639178-79 (Off.)</span>
                </a>
                <a
                  href="tel:+8801916600239"
                  className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
                >
                  <Icon name="smartphone" size={15} className="text-[#C5A059] shrink-0" />
                  <span>01916600239 (Mob.)</span>
                </a>
                <a
                  href="mailto:info@vrolbd.com"
                  className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
                >
                  <Icon name="mail" size={15} className="text-[#C5A059] shrink-0" />
                  <span>info@vrolbd.com</span>
                </a>
                <a
                  href="https://www.vrolbd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#C5A059] transition-colors text-[#E2CB8F]"
                >
                  <Icon name="language" size={15} className="text-[#C5A059] shrink-0" />
                  <span>www.vrolbd.com</span>
                </a>
              </div>
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <Icon name="verified_user" size={20} className="text-[#C5A059] shrink-0" />
                <span className="text-xs font-semibold text-slate-200">BMET License 1173</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <Icon name="security" size={20} className="text-[#C5A059] shrink-0" />
                <span className="text-xs font-semibold text-slate-200">ISO 9001:2015</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Demand Intake Form with Combobox */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#06101E]/95 border border-white/15 backdrop-blur-xl shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 shadow-lg shadow-emerald-500/10 animate-bounce">
                    <Icon name="check_circle" size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {language === "bn" ? "রিকুইজিশন সফলভাবে গ্রহণ করা হয়েছে" : "Requisition Transmitted Successfully"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    {language === "bn"
                      ? "আমাদের এক্সিকিউটিভ ডিরেক্টর শীঘ্রই আপনার ইমেইল ও ফোনে প্রজেক্ট কোটেশন ও ক্যান্ডিডেট প্রোফাইল সহ যোগাযোগ করবেন।"
                      : "Our Executive Manpower Director will contact you via email and phone within 2 business hours with candidate profiles & mobilization timelines."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Contact Person & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {language === "bn" ? "প্রতিনিধির নাম *" : "Contact Person / Rep. Name *"}
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder={language === "bn" ? "উদা: ইঞ্জিনিয়ার রফিক আহমেদ (এইচআর)" : "e.g. Eng. Tariq Al-Mansoor (HR Director)"}
                        className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {language === "bn" ? "কোম্পানি / কনট্রাক্টর নাম *" : "Company / EPC Contractor Name *"}
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Al-Futtaim Construction / Binladin Group"
                        className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Work Email & Phone / WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {language === "bn" ? "অফিশিয়াল ইমেইল *" : "Official Work Email *"}
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        required
                        value={formData.workEmail}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {language === "bn" ? "ফোন / হোয়াটসঅ্যাপ নম্বর *" : "Phone / WhatsApp (with Country Code) *"}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 50 123 4567 / +880 17..."
                        className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Deployment Country Combobox & Headcount */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Custom Styled Combobox */}
                    <div className="relative" ref={comboboxRef}>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {language === "bn" ? "গন্তব্য দেশ / করিডোর *" : "Destination Country / Corridor *"}
                      </label>

                      {/* Trigger Button */}
                      <button
                        type="button"
                        onClick={() => setIsComboboxOpen(!isComboboxOpen)}
                        className={`w-full bg-[#0A192F] border ${
                          isComboboxOpen ? "border-[#C5A059] ring-1 ring-[#C5A059]/40" : "border-white/15"
                        } rounded-xl px-3.5 py-2.5 text-xs text-white flex items-center justify-between gap-2 text-left focus:outline-none transition-all cursor-pointer shadow-inner`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span className="text-base">{selectedCountryObj.flag}</span>
                          <span className="truncate">
                            {language === "bn" ? selectedCountryObj.labelBn : selectedCountryObj.labelEn}
                          </span>
                        </span>
                        <Icon
                          name="keyboard_arrow_down"
                          size={18}
                          className={`text-[#C5A059] transition-transform duration-200 shrink-0 ${
                            isComboboxOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isComboboxOpen && (
                        <div className="absolute z-50 mt-1.5 w-full bg-[#06101E] border border-[#C5A059]/40 rounded-xl shadow-2xl backdrop-blur-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                          {/* Search Filter Bar */}
                          <div className="p-2 border-b border-white/10 bg-[#0A192F]/80 flex items-center gap-2">
                            <Icon name="search" size={16} className="text-[#C5A059]" />
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder={
                                language === "bn" ? "করিডোর খুঁজুন..." : "Filter corridor..."
                              }
                              className="w-full bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
                              autoFocus
                            />
                            {searchQuery && (
                              <button
                                type="button"
                                onClick={() => setSearchQuery("")}
                                className="text-slate-400 hover:text-white"
                              >
                                <Icon name="close" size={14} />
                              </button>
                            )}
                          </div>

                          {/* Options List */}
                          <div className="max-h-52 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-white/10">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((country) => {
                                const isSelected = country.value === formData.destinationCountry;
                                return (
                                  <button
                                    key={country.value}
                                    type="button"
                                    onClick={() => {
                                      setFormData((prev) => ({
                                        ...prev,
                                        destinationCountry: country.value,
                                      }));
                                      setIsComboboxOpen(false);
                                      setSearchQuery("");
                                    }}
                                    className={`w-full px-3.5 py-2.5 text-xs text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                                      isSelected
                                        ? "bg-[#C5A059]/20 text-[#C5A059] font-bold"
                                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                                    }`}
                                  >
                                    <span className="flex items-center gap-2.5 truncate">
                                      <span className="text-base">{country.flag}</span>
                                      <span className="truncate">
                                        {language === "bn" ? country.labelBn : country.labelEn}
                                      </span>
                                    </span>
                                    {isSelected && (
                                      <Icon name="check" size={16} className="text-[#C5A059] shrink-0" />
                                    )}
                                  </button>
                                );
                              })
                            ) : (
                              <div className="py-4 text-center text-xs text-slate-400">
                                {language === "bn" ? "কোন করিডোর পাওয়া যায়নি" : "No corridor found"}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {language === "bn" ? "প্রয়োজনীয় কর্মী সংখ্যা ও ট্রেড *" : "Required Headcount & Trades *"}
                      </label>
                      <input
                        type="text"
                        name="headcountNeed"
                        required
                        value={formData.headcountNeed}
                        onChange={handleChange}
                        placeholder={language === "bn" ? "উদা: ১৫০ ওয়েল্ডার ও ইলেক্ট্রিশিয়ান" : "e.g. 150 Welders, Pipefitters & Electricians"}
                        className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message / Specific Requirements */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === "bn" ? "প্রজেক্টের বিবরণ / বিশেষ চাহিদা (ঐচ্ছিক)" : "Job Scope & Project Details (Optional)"}
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        language === "bn"
                          ? "ট্রেড টেস্টের প্রত্যাশা, ভিসার ধরণ, ফ্লাইট ডেডলাইন বা বেতন সংক্রান্ত তথ্য উল্লেখ করতে পারেন..."
                          : "Describe specific trade certifications, mobilization deadline, visa category, or food/accommodation provisions..."
                      }
                      className="w-full bg-[#0A192F] border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] text-[#0A192F] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    <Icon name="send" size={16} />
                    <span>{t.btnRequest}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
