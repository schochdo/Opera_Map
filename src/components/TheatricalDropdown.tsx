import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface TheatricalDropdownOption {
  value: string;
  label: string;
  count?: number;
}

interface TheatricalDropdownProps {
  value: string;
  options: TheatricalDropdownOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  align?: 'left' | 'right' | 'full';
  className?: string;
}

export const TheatricalDropdown: React.FC<TheatricalDropdownProps> = ({
  value,
  options,
  onChange,
  placeholder,
  icon,
  align = 'left',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);
  const isFiltered = value !== 'ALL' && value !== '';

  return (
    <div ref={containerRef} className={`relative w-full ${isOpen ? 'z-40' : ''} ${className}`}>
      {/* ── TRIGGER BUTTON ── */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-1.5 rounded-md border text-xs py-1.5 px-2.5 font-serif transition-all duration-150 cursor-pointer text-left select-none ${
          isFiltered
            ? 'border-amber-400 bg-gradient-to-r from-[#1c2d47] via-[#2c1722] to-[#1c2d47] text-amber-200 ring-1 ring-amber-400/50 shadow-md shadow-amber-950/30'
            : isOpen
            ? 'border-amber-400/80 bg-[#19283f] text-slate-100 ring-1 ring-amber-500/30'
            : 'border-slate-700/80 bg-[#142236] text-slate-200 hover:border-amber-500/50 hover:bg-[#1a2b44]'
        }`}
      >
        <span className="flex items-center gap-1.5 truncate min-w-0">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder || 'Select...'}
          </span>
        </span>

        <span className="flex items-center gap-1 shrink-0 ml-1">
          {selectedOption && selectedOption.count !== undefined && (
            <span
              className={`text-[10px] font-sans px-1.5 py-0.2 rounded-full border transition-colors ${
                isFiltered
                  ? 'bg-amber-500/25 text-amber-200 border-amber-400/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700/60'
              }`}
            >
              {selectedOption.count}
            </span>
          )}
          <ChevronDown
            className={`h-3 w-3 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-amber-300' : isFiltered ? 'text-amber-300' : 'text-slate-400'
            }`}
          />
        </span>
      </button>

      {/* ── CUSTOM THEATRICAL POPOVER MENU (Rich Blue, Velvet Crimson & Antique Gold) ── */}
      {isOpen && (
        <div
          className={`absolute z-50 mt-1 max-h-64 overflow-y-auto rounded-lg border border-amber-400/60 shadow-2xl shadow-black/95 backdrop-blur-md animate-in fade-in zoom-in-95 duration-100 ${
            align === 'right'
              ? 'right-0 min-w-full w-max max-w-[320px]'
              : align === 'full'
              ? 'left-0 right-0'
              : 'left-0 min-w-full w-max max-w-[320px]'
          }`}
          style={{
            background: 'linear-gradient(180deg, #131f33 0%, #0e1726 100%)',
          }}
        >
          {/* Subtle top gold illuminator rim */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />

          <div className="p-1 space-y-0.5">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md text-xs font-serif text-left transition-all duration-100 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500/25 via-red-950/40 to-amber-500/15 text-amber-200 font-bold border-l-2 border-amber-400 ring-1 ring-amber-400/30'
                      : 'text-slate-200 hover:text-amber-200 hover:bg-gradient-to-r hover:from-[#1e304d] hover:via-[#331622] hover:to-[#1e304d] hover:border-l-2 hover:border-amber-400/60'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate min-w-0">
                    {isSelected && (
                      <Check className="h-3 w-3 text-amber-300 shrink-0" />
                    )}
                    <span className="truncate">{option.label}</span>
                  </span>

                  {option.count !== undefined && (
                    <span
                      className={`text-[10px] font-sans px-1.5 py-0.2 rounded-full border shrink-0 ${
                        isSelected
                          ? 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700/60'
                      }`}
                    >
                      {option.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
