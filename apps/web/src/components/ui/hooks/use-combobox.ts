import React, { useState, useRef, useEffect, useMemo } from "react";
import { ComboboxOption } from "../combobox";

export interface UseComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  searchable?: boolean;
}

export interface UseComboboxReturn {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  selectedOption: ComboboxOption | undefined;
  filteredOptions: ComboboxOption[];
  handleSelect: (val: string) => void;
  toggleOpen: () => void;
}

export function useCombobox({
  options,
  value,
  onChange,
  searchable = true,
}: UseComboboxProps): UseComboboxReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value]
  );

  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return options;
    const q = searchQuery.toLowerCase();
    return options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(q) ||
        (opt.subLabel && opt.subLabel.toLowerCase().includes(q))
    );
  }, [options, searchQuery]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when popover opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
    }
  }, [isOpen, searchable]);

  // Escape key handler
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    setIsOpen,
    searchQuery,
    setSearchQuery,
    containerRef,
    searchInputRef,
    selectedOption,
    filteredOptions,
    handleSelect,
    toggleOpen,
  };
}
