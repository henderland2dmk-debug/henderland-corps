'use client';

import React from 'react';

interface HCLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const HCLogo: React.FC<HCLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const sizeMap = {
    sm: { icon: 30, text: 'text-xs tracking-[0.25em]', sub: 'text-[9px]' },
    md: { icon: 38, text: 'text-sm tracking-[0.28em]', sub: 'text-[10px]' },
    lg: { icon: 50, text: 'text-base tracking-[0.32em]', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer select-none ${className}`}>
      {/* Precision Geometric Monogram */}
      <div className="relative flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        >
          {/* Subtle outer shield/bracket frame with cyan-tinted gradient */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="9"
            stroke="url(#navyCyanBorder)"
            strokeWidth="1.2"
            className="transition-colors duration-300 group-hover:stroke-[#43D9F5]/70"
          />

          {/* Precision H Monogram stem 1 */}
          <line
            x1="14"
            y1="12"
            x2="14"
            y2="36"
            stroke="url(#metallicGradient)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* H Monogram stem 2 */}
          <line
            x1="24"
            y1="12"
            x2="24"
            y2="36"
            stroke="url(#metallicGradient)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* H Crossbar */}
          <line
            x1="14"
            y1="24"
            x2="24"
            y2="24"
            stroke="url(#cyanAccentGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Precision C Monogram wrapping around */}
          <path
            d="M36 17C35 14 31 12 27 12C20 12 18 18 18 24C18 30 20 36 27 36C32 36 35 34 36 31"
            stroke="url(#silverHighlightGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Core Accent Dot in Cyan */}
          <circle cx="34" cy="24" r="1.6" fill="#43D9F5" />

          {/* Gradients */}
          <defs>
            <linearGradient id="navyCyanBorder" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#43D9F5" stopOpacity="0.5" />
              <stop offset="0.5" stopColor="#4D8DFF" stopOpacity="0.25" />
              <stop offset="1" stopColor="#AAB6C5" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="metallicGradient" x1="14" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F4F6FA" />
              <stop offset="0.6" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="cyanAccentGradient" x1="14" y1="24" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#43D9F5" />
              <stop offset="1" stopColor="#4D8DFF" />
            </linearGradient>
            <linearGradient id="silverHighlightGradient" x1="18" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F4F6FA" />
              <stop offset="0.5" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#64748b" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient glow behind logo on hover */}
        <div className="absolute inset-0 rounded-lg bg-[#43D9F5]/10 filter blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Brand Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-semibold text-[#F4F6FA] uppercase font-sans ${currentSize.text} tracking-[0.25em] transition-colors duration-300 group-hover:text-white`}>
            Henderland
          </span>
          <span className={`text-[#AAB6C5] font-medium uppercase tracking-[0.35em] ${currentSize.sub} flex items-center gap-1.5`}>
            <span>Corps</span>
            <span className="w-1 h-1 rounded-full bg-[#43D9F5]/70" />
          </span>
        </div>
      )}
    </div>
  );
};
