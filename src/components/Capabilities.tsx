'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from '@/data/capabilities';
import { Cpu, Code2, Globe, Layers, Sparkles, ShieldCheck, Check } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-slate-300" />,
    Code2: <Code2 className="w-5 h-5 text-slate-300" />,
    Globe: <Globe className="w-5 h-5 text-slate-300" />,
    Layers: <Layers className="w-5 h-5 text-slate-300" />,
    Sparkles: <Sparkles className="w-5 h-5 text-slate-300" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-slate-300" />,
  };

  return (
    <section id="capabilities" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
              04 // Multidisciplinary Capabilities
            </span>
            <div className="h-[1px] w-12 bg-slate-700" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
            <span className="text-metallic">Core</span> Capabilities
          </h2>
        </div>

        <div className="max-w-md text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
          Comprehensive multidisciplinary competencies enabling rapid transition from abstract hypothesis to scalable digital software and market reality.
        </div>
      </div>

      {/* Capabilities 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CAPABILITIES.map((cap, idx) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/[0.08] hover:border-slate-300/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top ambient hover line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">
                  {cap.number}
                </span>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all">
                  {iconMap[cap.iconName]}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-medium tracking-tight text-white uppercase group-hover:text-metallic transition-all duration-300">
                {cap.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1 mb-4">
                {cap.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                {cap.description}
              </p>

              {/* Items List */}
              <div className="space-y-2 pt-4 border-t border-white/[0.05]">
                {cap.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                    <Check className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500">
              <span>Standard // Production Grade</span>
              <span className="text-slate-400">0{idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
