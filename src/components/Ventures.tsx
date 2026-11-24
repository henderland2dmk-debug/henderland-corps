'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllVentures, getPrimaryVenture } from '@/data/ventures';
import { Venture } from '@/types';
import { VentureModal } from './VentureModal';
import {
  ArrowUpRight,
  Smartphone,
  ExternalLink,
  Check,
  ChevronRight
} from 'lucide-react';

export const Ventures: React.FC = () => {
  const ventures = getAllVentures();
  const primaryVenture = getPrimaryVenture();
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (venture: Venture) => {
    setSelectedVenture(venture);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="venture" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#43D9F5] uppercase">
          03 // Venture Studio Portfolio
        </span>
        <div className="h-[1px] w-12 bg-[#43D9F5]/40" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F4F6FA] uppercase leading-tight">
            <span className="text-metallic">Our</span> Dedicated Venture
          </h2>
        </div>

        <div className="max-w-md text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed">
          Operating with focused execution to develop practical Android applications, digital products and thoughtfully built technology solutions.
        </div>
      </div>

      {/* Featured Primary Venture Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl bg-gradient-to-b from-[#101C2C] via-[#0D1827] to-[#07111F] border border-[#43D9F5]/30 hover:border-[#43D9F5]/60 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_25px_60px_rgba(7,17,31,0.8)] transition-all duration-500"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#43D9F5]/10 filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#4D8DFF]/10 filter blur-3xl pointer-events-none" />

        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1 rounded-full bg-[#43D9F5]/10 border border-[#43D9F5]/30 text-[11px] font-mono uppercase tracking-[0.2em] text-[#43D9F5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A] animate-pulse" />
              <span>Primary Venture // {primaryVenture.status}</span>
            </div>
          </div>

          <div className="text-[11px] font-mono tracking-[0.2em] text-[#AAB6C5] uppercase">
            Venture: Henderland Creations
          </div>
        </div>

        {/* Venture Main Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            {/* Logo + Heading */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-[#07111F] border border-white/[0.1] p-2 flex items-center justify-center shrink-0">
                <Image
                  src="/henderland-creations-logo.png"
                  alt="Henderland Creations Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                {primaryVenture.name}
              </h3>
            </div>
            
            <p className="mt-3 text-sm sm:text-base font-light text-[#F4F6FA] tracking-wide">
              {primaryVenture.tagline}
            </p>

            <p className="mt-5 text-sm sm:text-base text-[#AAB6C5] font-light leading-relaxed">
              {primaryVenture.description}
            </p>

            {/* Action Buttons: Verified Links & Dossier */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {primaryVenture.playStoreUrl && (
                <a
                  href={primaryVenture.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#07111F] font-semibold text-xs tracking-[0.16em] uppercase hover:bg-[#F4F6FA] transition-all duration-300 group shadow-lg cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-[#07111F]" />
                  <span>Google Play Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {primaryVenture.externalUrl && (
                <a
                  href={primaryVenture.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#07111F] text-[#F4F6FA] border border-[#43D9F5]/30 hover:border-[#43D9F5] font-medium text-xs tracking-[0.16em] uppercase transition-all duration-300 group cursor-pointer"
                >
                  <span>Reference Site</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 text-[#43D9F5]" />
                </a>
              )}

              <button
                onClick={() => handleOpenModal(primaryVenture)}
                className="px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] text-[#AAB6C5] hover:text-white transition-colors cursor-pointer"
              >
                Venture Dossier →
              </button>
            </div>
          </div>

          {/* Core Development Areas */}
          <div className="lg:col-span-5 bg-[#07111F]/70 border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-inner">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#43D9F5]">
                Focus Areas
              </span>
              <span className="text-[10px] font-mono text-[#AAB6C5] uppercase">
                4 Disciplines
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {primaryVenture.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#101C2C]/60 border border-white/[0.06] text-xs text-[#F4F6FA] font-light hover:border-white/[0.15] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono text-[#43D9F5]">
                      0{idx + 1}
                    </span>
                    <span>{area}</span>
                  </div>
                  <Check className="w-3.5 h-3.5 text-[#43D9F5]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Metrics Strip */}
        {primaryVenture.stats && (
          <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
            {primaryVenture.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#AAB6C5]">
                  {stat.label}
                </span>
                <span className="text-sm sm:text-base font-medium text-[#F4F6FA] mt-1">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Interactive Venture Modal */}
      <VentureModal
        venture={selectedVenture}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
