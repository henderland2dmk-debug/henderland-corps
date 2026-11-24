'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code, Smartphone, Layers, Terminal } from 'lucide-react';

export const ArchitecturalVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#43D9F5]/10 via-[#4D8DFF]/15 to-[#A78BFA]/5 rounded-3xl filter blur-3xl opacity-70 pointer-events-none" />

      {/* Outer Geometric Frame / Structural Brackets */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.08] bg-[#101C2C]/50 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(7,17,31,0.8)]">
        {/* Architectural Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(67, 217, 245, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(77, 141, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top Architectural Data Bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#AAB6C5] border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#43D9F5] animate-pulse" />
            <span className="text-white font-medium">HC ARCHITECTURE // V.STUDIO</span>
          </div>
          <span className="text-[#43D9F5]/80">GRID: 32×32 ISO</span>
        </div>

        {/* Center: Isometric High-Tech Glass Tower / Architectural Geometric Core */}
        <div className="relative z-10 my-auto flex items-center justify-center py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] aspect-[4/5] flex items-center justify-center"
          >
            <svg
              viewBox="0 0 340 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_20px_35px_rgba(7,17,31,0.9)]"
            >
              {/* Gradients */}
              <defs>
                <linearGradient id="glassFacadeLeft" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#162438" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#101C2C" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#07111F" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="glassFacadeRight" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#223755" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#162438" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0C1726" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="glassRoof" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#43D9F5" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#4D8DFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.3" />
                </linearGradient>

                <linearGradient id="cyanPillar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#43D9F5" />
                  <stop offset="100%" stopColor="#4D8DFF" />
                </linearGradient>

                <linearGradient id="neonFloorGlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#43D9F5" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#4D8DFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#43D9F5" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Base Isometric Ground Foundation Plate */}
              <polygon
                points="170,390 320,310 170,230 20,310"
                fill="#0B1524"
                stroke="rgba(67, 217, 245, 0.25)"
                strokeWidth="1.5"
              />
              <polygon
                points="170,410 320,330 320,310 170,390"
                fill="#07111F"
                stroke="rgba(67, 217, 245, 0.15)"
                strokeWidth="1"
              />
              <polygon
                points="170,410 20,330 20,310 170,390"
                fill="#050C16"
                stroke="rgba(67, 217, 245, 0.15)"
                strokeWidth="1"
              />

              {/* Tower Body - Modern Angular Glass Architecture */}
              {/* Left Facade */}
              <polygon
                points="170,90 20,175 20,310 170,230"
                fill="url(#glassFacadeLeft)"
                stroke="rgba(67, 217, 245, 0.3)"
                strokeWidth="1.2"
              />

              {/* Right Facade */}
              <polygon
                points="170,90 320,175 320,310 170,230"
                fill="url(#glassFacadeRight)"
                stroke="rgba(77, 141, 255, 0.35)"
                strokeWidth="1.2"
              />

              {/* Roof Penthouse / Glass Spire */}
              <polygon
                points="170,40 240,80 170,90 100,80"
                fill="url(#glassRoof)"
                stroke="#43D9F5"
                strokeWidth="1.5"
              />

              {/* Central Architectural Ridge (Vertical spine) */}
              <line
                x1="170"
                y1="40"
                x2="170"
                y2="230"
                stroke="url(#cyanPillar)"
                strokeWidth="2.5"
              />

              {/* Left Structural Spines */}
              <line x1="70" y1="147" x2="70" y2="283" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="120" y1="118" x2="120" y2="257" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Right Structural Spines */}
              <line x1="220" y1="118" x2="220" y2="257" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="270" y1="147" x2="270" y2="283" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Illuminated Floor Slabs (Levels 1 to 6) */}
              {/* Floor 1 */}
              <line x1="20" y1="285" x2="170" y2="215" stroke="rgba(67, 217, 245, 0.4)" strokeWidth="1.5" />
              <line x1="170" y1="215" x2="320" y2="285" stroke="rgba(77, 141, 255, 0.4)" strokeWidth="1.5" />

              {/* Floor 2 */}
              <line x1="20" y1="250" x2="170" y2="185" stroke="rgba(67, 217, 245, 0.5)" strokeWidth="1.5" />
              <line x1="170" y1="185" x2="320" y2="250" stroke="rgba(77, 141, 255, 0.5)" strokeWidth="1.5" />

              {/* Floor 3 - Accent Cyan Floor */}
              <line x1="20" y1="215" x2="170" y2="155" stroke="#43D9F5" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="170" y1="155" x2="320" y2="215" stroke="#4D8DFF" strokeWidth="2" strokeDasharray="4 2" />

              {/* Floor 4 */}
              <line x1="20" y1="180" x2="170" y2="125" stroke="rgba(67, 217, 245, 0.4)" strokeWidth="1.5" />
              <line x1="170" y1="125" x2="320" y2="180" stroke="rgba(77, 141, 255, 0.4)" strokeWidth="1.5" />

              {/* Modern Glass Windows Pattern on Left Facade */}
              <rect x="40" y="235" width="16" height="8" rx="1" fill="#43D9F5" fillOpacity="0.4" />
              <rect x="65" y="222" width="16" height="8" rx="1" fill="#43D9F5" fillOpacity="0.6" />
              <rect x="90" y="208" width="16" height="8" rx="1" fill="#43D9F5" fillOpacity="0.3" />
              <rect x="115" y="195" width="16" height="8" rx="1" fill="#43D9F5" fillOpacity="0.7" />

              <rect x="40" y="200" width="16" height="8" rx="1" fill="#4D8DFF" fillOpacity="0.5" />
              <rect x="65" y="186" width="16" height="8" rx="1" fill="#43D9F5" fillOpacity="0.8" />
              <rect x="90" y="172" width="16" height="8" rx="1" fill="#4D8DFF" fillOpacity="0.4" />
              <rect x="115" y="160" width="16" height="8" rx="1" fill="#43D9F5" fillOpacity="0.9" />

              {/* Modern Glass Windows Pattern on Right Facade */}
              <rect x="195" y="195" width="16" height="8" rx="1" fill="#4D8DFF" fillOpacity="0.7" />
              <rect x="220" y="208" width="16" height="8" rx="1" fill="#43D9F5" fillOpacity="0.5" />
              <rect x="245" y="222" width="16" height="8" rx="1" fill="#4D8DFF" fillOpacity="0.8" />
              <rect x="270" y="235" width="16" height="8" rx="1" fill="#43D9F5" fillOpacity="0.4" />

              {/* Subtly Integrated HC Corporate Monogram on Central Glass Facade */}
              <g transform="translate(142, 105) scale(0.75)">
                {/* Monogram Backplate Glass Badge */}
                <rect
                  x="0"
                  y="0"
                  width="74"
                  height="74"
                  rx="16"
                  fill="#07111F"
                  fillOpacity="0.9"
                  stroke="#43D9F5"
                  strokeWidth="1.8"
                />

                {/* H */}
                <line x1="22" y1="20" x2="22" y2="54" stroke="#F4F6FA" strokeWidth="4" strokeLinecap="round" />
                <line x1="38" y1="20" x2="38" y2="54" stroke="#F4F6FA" strokeWidth="4" strokeLinecap="round" />
                <line x1="22" y1="37" x2="38" y2="37" stroke="#43D9F5" strokeWidth="3.5" strokeLinecap="round" />

                {/* C */}
                <path
                  d="M58 27C56 22 50 19 43 19C32 19 28 28 28 37C28 46 32 55 43 55C50 55 56 52 58 47"
                  stroke="#4D8DFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Accent Indicator Dot */}
                <circle cx="56" cy="37" r="2.5" fill="#43D9F5" />
              </g>

              {/* Vertical Laser Beacon Beam from Rooftop Spire */}
              <line x1="170" y1="40" x2="170" y2="0" stroke="#43D9F5" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="170" cy="40" r="3.5" fill="#43D9F5" />
            </svg>

            {/* Floating Architectural Telemetry Chips */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-2 px-3 py-1.5 rounded-xl bg-[#101C2C]/90 border border-[#43D9F5]/30 backdrop-blur-md shadow-lg flex items-center gap-2"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#43D9F5]" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono tracking-widest text-[#AAB6C5] uppercase">VENTURE HUB</span>
                <span className="text-[11px] font-medium text-[#F4F6FA]">HENDERLAND CREATIONS</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-xl bg-[#101C2C]/90 border border-[#4D8DFF]/30 backdrop-blur-md shadow-lg flex items-center gap-2"
            >
              <Layers className="w-3.5 h-3.5 text-[#4D8DFF]" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono tracking-widest text-[#AAB6C5] uppercase">CORE PRODUCT</span>
                <span className="text-[11px] font-medium text-[#F4F6FA]">SASTRAcal // ANDROID</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Architectural Specs Strip */}
        <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#AAB6C5]">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">DISCIPLINE: SOFTWARE STUDIO</span>
            <span className="text-slate-600">|</span>
            <span>PROD: 2026</span>
          </div>
          <span className="text-[#39D98A] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A]" />
            ONLINE
          </span>
        </div>
      </div>
    </div>
  );
};
