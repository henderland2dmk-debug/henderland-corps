'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY, PHILOSOPHIES } from '@/data/company';
import { Lightbulb, Cog, TrendingUp, Sparkles, Shield, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Lightbulb className="w-5 h-5 text-slate-300" />,
    '02': <Cog className="w-5 h-5 text-slate-300" />,
    '03': <TrendingUp className="w-5 h-5 text-slate-300" />,
  };

  return (
    <section id="about" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
          01 // About Henderland Corps
        </span>
        <div className="h-[1px] w-12 bg-slate-700" />
      </div>

      {/* Main Grid: Headline & Strategic Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight uppercase"
          >
            <span className="text-metallic block">Beyond Ideas.</span>
            <span className="text-slate-100 font-medium block">Into Creation.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-2">
              <Compass className="w-4 h-4 text-slate-300" />
              <span>Studio Mandate</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              We operate not as an agency, but as an autonomous corporate engine. We incubate, engineer, and deploy high-conviction ventures from the inside out.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Corporate Description */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          {COMPANY.aboutDescription.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={idx === 0 ? 'text-slate-100 font-normal text-lg sm:text-xl' : 'text-slate-400'}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      {/* The 3 Philosophy Cards */}
      <div className="mt-20">
        <div className="flex items-center justify-between mb-8 border-b border-white/[0.06] pb-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
            Our Guiding Pillars
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
            Triad of Operation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PHILOSOPHIES.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/[0.08] hover:border-slate-300/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle metallic hairline sheen on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-[0.25em] text-slate-400 group-hover:text-white transition-colors duration-300">
                    {item.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:bg-white/[0.08] transition-colors duration-300">
                    {iconMap[item.number]}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-2 uppercase group-hover:text-metallic transition-all duration-300">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-4">
                  {item.subtitle}
                </span>

                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                <span>Pillar 0{idx + 1}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-slate-400">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
