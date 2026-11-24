'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getAllVentures, getPrimaryVenture } from '@/data/ventures';
import { Venture } from '@/types';
import { VentureModal } from './VentureModal';
import {
  ArrowUpRight,
  ShieldCheck,
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
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
              02 // Venture Studio Portfolio
            </span>
            <div className="h-[1px] w-12 bg-slate-700" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
            <span className="text-metallic">Our</span> Independent Venture
          </h2>
        </div>

        <div className="max-w-md text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
          Operating with focused execution to develop practical Android applications, digital products and thoughtfully built technology solutions.
        </div>
      </div>

      {/* Featured Primary Venture Showcase */}
      {ventures.length === 1 ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#0f1218]/90 via-[#0a0c10]/95 to-[#07080a] border border-white/[0.12] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-slate-300/[0.04] filter blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-slate-500/[0.03] filter blur-3xl pointer-events-none" />

          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] font-mono uppercase tracking-[0.2em] text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Primary Venture // {primaryVenture.status}</span>
              </div>
            </div>

            <div className="text-[11px] font-mono tracking-[0.2em] text-slate-400 uppercase">
              Venture: Henderland Creations
            </div>
          </div>

          {/* Venture Main Identity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                {primaryVenture.name}
              </h3>
              
              <p className="mt-3 text-sm sm:text-base font-light text-slate-300 tracking-wide">
                {primaryVenture.tagline}
              </p>

              <p className="mt-6 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                {primaryVenture.description}
              </p>

              {/* Action Buttons: Verified Links & Dossier */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                {primaryVenture.playStoreUrl && (
                  <a
                    href={primaryVenture.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-medium text-xs tracking-[0.16em] uppercase hover:bg-slate-200 transition-all duration-300 group shadow-lg cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 text-black" />
                    <span>Google Play Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}

                {primaryVenture.externalUrl && (
                  <a
                    href={primaryVenture.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] text-slate-200 border border-white/[0.12] hover:bg-white/[0.08] hover:border-slate-300 font-medium text-xs tracking-[0.16em] uppercase transition-all duration-300 group cursor-pointer"
                  >
                    <span>Reference Site</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                )}

                <button
                  onClick={() => handleOpenModal(primaryVenture)}
                  className="px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  View Details →
                </button>
              </div>
            </div>

            {/* Core Development Areas */}
            <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                  Focus Areas
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  4 Disciplines
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {primaryVenture.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300 font-light hover:bg-white/[0.05] hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono text-slate-500">
                        0{idx + 1}
                      </span>
                      <span>{area}</span>
                    </div>
                    <Check className="w-3.5 h-3.5 text-slate-400" />
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
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-200 mt-1">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ventures.map((venture, idx) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-[#0d0f14] border border-white/[0.1] hover:border-slate-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  {venture.status}
                </span>
                <h3 className="text-2xl font-light text-white uppercase mt-2">{venture.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{venture.tagline}</p>
                <p className="text-sm text-slate-300 mt-4 leading-relaxed font-light">{venture.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => handleOpenModal(venture)}
                  className="text-xs font-mono uppercase tracking-wider text-slate-200 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Venture</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Interactive Venture Modal */}
      <VentureModal
        venture={selectedVenture}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
