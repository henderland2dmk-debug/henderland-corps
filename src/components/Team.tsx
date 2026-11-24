'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '@/data/company';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Team: React.FC = () => {
  // Custom SVG silhouettes matching the requested physical build profiles
  const silhouetteSVGs = {
    // Member 1: Ganesh D - Slightly Lean Build
    'GD': (
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-35 group-hover:opacity-75 transition-opacity duration-500">
        <defs>
          <linearGradient id="leanGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#43D9F5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4D8DFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Head */}
        <circle cx="50" cy="24" r="12" fill="url(#leanGlow)" />
        {/* Neck */}
        <path d="M46 36 L54 36 L53 43 L47 43 Z" fill="url(#leanGlow)" />
        {/* Torso & Shoulders - Lean, angular cut */}
        <path
          d="M33 46 C37 44, 45 43, 50 43 C55 43, 63 44, 67 46 L64 85 C61 95, 57 115, 57 120 L43 120 C43 115, 39 95, 36 85 Z"
          fill="url(#leanGlow)"
        />
        {/* Arms - Slim */}
        <path d="M33 47 L27 80 L32 80 L36 52 Z" fill="url(#leanGlow)" />
        <path d="M67 47 L73 80 L68 80 L64 52 Z" fill="url(#leanGlow)" />
      </svg>
    ),
    // Member 2: Durga Muthu Kumar - Slightly Heavier-Built
    'DMK': (
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-35 group-hover:opacity-75 transition-opacity duration-500">
        <defs>
          <linearGradient id="heavierGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4D8DFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Head */}
        <circle cx="50" cy="23" r="13" fill="url(#heavierGlow)" />
        {/* Neck - Stronger */}
        <path d="M44 36 L56 36 L55 44 L45 44 Z" fill="url(#heavierGlow)" />
        {/* Torso & Shoulders - Broad, heavier, solid build */}
        <path
          d="M26 47 C32 44, 43 43, 50 43 C57 43, 68 44, 74 47 L71 90 C68 102, 63 115, 63 120 L37 120 C37 115, 32 102, 29 90 Z"
          fill="url(#heavierGlow)"
        />
        {/* Arms - Robust */}
        <path d="M26 48 L18 82 L24 82 L29 55 Z" fill="url(#heavierGlow)" />
        <path d="M74 48 L82 82 L76 82 L71 55 Z" fill="url(#heavierGlow)" />
      </svg>
    ),
    // Member 3: Nishanth A - Average Build
    'NA': (
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-35 group-hover:opacity-75 transition-opacity duration-500">
        <defs>
          <linearGradient id="avgGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#39D98A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#43D9F5" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Head */}
        <circle cx="50" cy="24" r="12.5" fill="url(#avgGlow)" />
        {/* Neck */}
        <path d="M45 36 L55 36 L54 43 L46 43 Z" fill="url(#avgGlow)" />
        {/* Torso & Shoulders - Balanced, average proportions */}
        <path
          d="M30 46 C35 44, 44 43, 50 43 C56 43, 65 44, 70 46 L67 87 C64 98, 59 116, 59 120 L41 120 C41 116, 36 98, 33 87 Z"
          fill="url(#avgGlow)"
        />
        {/* Arms - Average */}
        <path d="M30 47 L23 81 L28 81 L33 53 Z" fill="url(#avgGlow)" />
        <path d="M70 47 L77 81 L72 81 L67 53 Z" fill="url(#avgGlow)" />
      </svg>
    ),
  };

  const memberBuildDescriptions: Record<string, string> = {
    'GD': 'Core Builder // Lean Aesthetic',
    'DMK': 'Lead Builder // Strong Foundation',
    'NA': 'Studio Builder // Balanced Execution',
  };

  return (
    <section id="team" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#43D9F5] uppercase">
          06 // Studio Builders & Founders
        </span>
        <div className="h-[1px] w-12 bg-[#43D9F5]/40" />
      </div>

      {/* Section Heading & Supporting Text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F4F6FA] uppercase leading-tight"
          >
            <span className="text-metallic">The People</span> Behind The Creation
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-md text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed"
        >
          Three builders working together to engineer, design, and scale <strong className="text-white">HENDERLAND CREATIONS</strong>.
        </motion.p>
      </div>

      {/* 3 Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.a
            key={member.name}
            href={member.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#101C2C] to-[#0B1524] border border-white/[0.08] hover:border-[#43D9F5]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(7,17,31,0.8)] cursor-pointer"
          >
            {/* Top ambient hover line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#43D9F5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Card Header with Silhouette Visual Window & Instagram Icon */}
              <div className="flex items-start justify-between mb-6">
                {/* Silhouette Art Window */}
                <div className="relative w-20 h-24 rounded-2xl bg-[#07111F] border border-white/[0.1] p-1 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-[#43D9F5]/40 transition-colors">
                  {silhouetteSVGs[member.initials as keyof typeof silhouetteSVGs]}
                  <span className="absolute bottom-1 right-2 text-[9px] font-mono text-[#AAB6C5]/60">
                    {member.initials}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-[#07111F] border border-white/[0.08] text-[#AAB6C5] group-hover:text-white group-hover:border-[#43D9F5]/30 transition-all">
                  <InstagramIcon className="w-4 h-4" />
                </div>
              </div>

              {/* Name & Handle */}
              <h3 className="text-xl font-light tracking-tight text-white uppercase group-hover:text-metallic transition-all duration-300">
                {member.name}
              </h3>
              
              <p className="text-xs font-mono text-[#43D9F5] mt-1 uppercase tracking-wider">
                {member.handle}
              </p>

              <p className="text-[11px] font-mono text-[#AAB6C5] mt-3">
                {memberBuildDescriptions[member.initials] || 'Venture Studio Builder'}
              </p>
            </div>

            {/* Action Footnote */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#AAB6C5] group-hover:text-white transition-colors">
              <span className="text-[11px] uppercase tracking-wider">Connect on Instagram</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#AAB6C5] group-hover:text-[#43D9F5]" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Trio Silhouette Panoramic Composition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl bg-[#101C2C]/50 border border-white/[0.08] p-8 sm:p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm"
      >
        <div className="flex flex-col max-w-md">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#43D9F5]">
            Collective Vision
          </span>
          <h4 className="text-lg sm:text-xl font-light text-white uppercase mt-1">
            Ganesh D • Durga Muthu Kumar • Nishanth A
          </h4>
          <p className="text-xs text-[#AAB6C5] font-light mt-2 leading-relaxed">
            United in engineering practical, meaningful digital experiences through HENDERLAND CREATIONS and HENDERLAND CORPS.
          </p>
        </div>

        {/* 3 Silhouette Lineup Graphic */}
        <div className="relative w-full md:w-72 h-24 flex items-center justify-center gap-4 border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-8">
          <div className="w-16 h-20">{silhouetteSVGs['GD']}</div>
          <div className="w-20 h-22 -mt-1">{silhouetteSVGs['DMK']}</div>
          <div className="w-18 h-20">{silhouetteSVGs['NA']}</div>
        </div>
      </motion.div>
    </section>
  );
};
