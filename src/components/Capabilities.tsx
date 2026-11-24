'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from '@/data/capabilities';
import { Smartphone, Layers, Globe, Sparkles, Check } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-5 h-5 text-[#43D9F5]" />,
    Layers: <Layers className="w-5 h-5 text-[#4D8DFF]" />,
    Globe: <Globe className="w-5 h-5 text-[#A78BFA]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#39D98A]" />,
  };

  const accentColorMap: Record<string, string> = {
    Smartphone: 'border-[#43D9F5]/30 group-hover:border-[#43D9F5]',
    Layers: 'border-[#4D8DFF]/30 group-hover:border-[#4D8DFF]',
    Globe: 'border-[#A78BFA]/30 group-hover:border-[#A78BFA]',
    Sparkles: 'border-[#39D98A]/30 group-hover:border-[#39D98A]',
  };

  return (
    <section id="capabilities" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#43D9F5] uppercase">
          05 // Core Areas & Disciplines
        </span>
        <div className="h-[1px] w-12 bg-[#43D9F5]/40" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F4F6FA] uppercase leading-tight">
            <span className="text-metallic">Core</span> Areas
          </h2>
        </div>

        <div className="max-w-md text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed">
          Four dedicated engineering and creative disciplines focused on delivering practical applications, high-performance web products, and modern digital utilities.
        </div>
      </div>

      {/* 4 Capability Cards in 2x2 Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {CAPABILITIES.map((cap, idx) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`group p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#101C2C] to-[#0B1524] border ${
              accentColorMap[cap.iconName] || 'border-white/[0.08]'
            } transition-all duration-500 flex flex-col justify-between relative overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(7,17,31,0.8)]`}
          >
            {/* Top ambient hover line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#43D9F5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Header with Number & Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono tracking-[0.25em] text-[#AAB6C5] group-hover:text-white transition-colors">
                  {cap.number} // DISCIPLINE
                </span>
                <div className="p-3 rounded-2xl bg-[#07111F] border border-white/[0.1] shadow-inner group-hover:scale-105 transition-all">
                  {iconMap[cap.iconName]}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-light tracking-tight text-white uppercase group-hover:text-gradient-cyan transition-all duration-300">
                {cap.title}
              </h3>
              <p className="text-xs font-mono text-[#AAB6C5] uppercase tracking-wider mt-1.5 mb-4">
                {cap.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed mb-6">
                {cap.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-5 border-t border-white/[0.06]">
                {cap.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-[#F4F6FA] font-light">
                    <Check className="w-3.5 h-3.5 text-[#43D9F5] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#AAB6C5]">
              <span>Studio Standard // Production Grade</span>
              <span className="text-[#43D9F5]">0{idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
