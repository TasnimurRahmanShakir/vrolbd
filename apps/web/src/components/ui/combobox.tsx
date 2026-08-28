"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./icon";
import { useCombobox } from "./hooks/use-combobox";

export interface ComboboxOption {
  value: string;
  label: string;
  subLabel?: string;
  icon?: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  icon?: string;
  searchable?: boolean;
  className?: string;
  variant?: "dark" | "light";
  disabled?: boolean;
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  icon,
  searchable = true,
  className = "",
  variant = "dark",
  disabled = false,
}: ComboboxProps) {
  const {
    isOpen,
    searchQuery,
    setSearchQuery,
    containerRef,
    searchInputRef,
    selectedOption,
    filteredOptions,
    handleSelect,
    toggleOpen,
  } = useCombobox({
    options,
    value,
    onChange,
    searchable,
  });

  const isDark = variant === "dark";

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Combobox Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && toggleOpen()}
        className={`w-full text-left flex items-center justify-between gap-2.5 transition-all duration-200 cursor-pointer outline-none ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <div className="min-w-0 flex-1">
          {label && (
            <span
              className={`block text-[10px] uppercase font-bold tracking-wider leading-none mb-1 ${
                isDark ? "text-[#C5A059]" : "text-[#8C6A2B]"
              }`}
            >
              {label}
            </span>
          )}
          <div className="flex items-center gap-1.5 truncate">
            {selectedOption?.icon && (
              <Icon
                name={selectedOption.icon}
                size={15}
                className={`shrink-0 ${isDark ? "text-[#C5A059]" : "text-[#8C6A2B]"}`}
              />
            )}
            <span
              className={`text-xs sm:text-sm font-semibold truncate ${
                selectedOption
                  ? isDark
                    ? "text-white"
                    : "text-slate-900"
                  : "text-slate-400 font-normal"
              }`}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>
        </div>

        {/* Animated Chevron Indicator */}
        <div
          className={`p-1 text-slate-400 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-[#C5A059]" : ""
          }`}
        >
          <Icon name="expand_more" size={18} />
        </div>
      </button>

      {/* Custom Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute left-0 right-0 top-full mt-2.5 z-[100] rounded-xl shadow-2xl overflow-hidden border ${
              isDark
                ? "bg-[#0A192F] border-[#C5A059]/40 text-slate-100 shadow-[0_20px_50px_rgba(10,25,47,0.6)]"
                : "bg-white border-slate-200 text-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            }`}
            style={{
              minWidth: "240px",
              maxWidth: "100%",
            }}
          >
            {/* Optional Filter Search Input */}
            {searchable && (
              <div
                className={`p-2.5 border-b ${
                  isDark
                    ? "border-white/10 bg-[#0F243B]"
                    : "border-slate-100 bg-slate-50"
                }`}
              >
                <div className="relative flex items-center">
                  <Icon
                    name="search"
                    size={16}
                    className={`absolute left-2.5 pointer-events-none ${
                      isDark ? "text-[#C5A059]" : "text-slate-400"
                    }`}
                  />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search options..."
                    className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-lg focus:outline-none transition-colors ${
                      isDark
                        ? "bg-[#0A192F] border border-white/15 text-white placeholder:text-slate-500 focus:border-[#C5A059]"
                        : "bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#C5A059]"
                    }`}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 text-slate-400 hover:text-white p-0.5"
                    >
                      <Icon name="close" size={14} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Custom Options List */}
            <div className="max-h-60 overflow-y-auto p-1.5 space-y-0.5 scrollbar-thin">
              {filteredOptions.length === 0 ? (
                <div className="py-6 px-4 text-center text-xs text-slate-400">
                  <Icon
                    name="search_off"
                    size={24}
                    className="mx-auto mb-1 text-slate-500 opacity-60"
                  />
                  <span>No matching options found</span>
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = option.value === value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect(option.value)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? isDark
                            ? "bg-[#C5A059]/20 text-[#C5A059] font-bold"
                            : "bg-[#0A192F]/10 text-[#0A192F] font-bold"
                          : isDark
                          ? "text-slate-200 hover:bg-white/10 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {option.icon && (
                          <Icon
                            name={option.icon}
                            size={16}
                            className={
                              isSelected
                                ? "text-[#C5A059]"
                                : isDark
                                ? "text-slate-400"
                                : "text-slate-500"
                            }
                          />
                        )}
                        <div className="text-left truncate">
                          <span className="block truncate">{option.label}</span>
                          {option.subLabel && (
                            <span className="block text-[10px] text-slate-400 font-normal truncate">
                              {option.subLabel}
                            </span>
                          )}
                        </div>
                      </div>

                      {isSelected && (
                        <Icon
                          name="check"
                          size={16}
                          className={`shrink-0 ml-2 ${
                            isDark ? "text-[#C5A059]" : "text-[#0A192F]"
                          }`}
                        />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
