'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles, Shield, Compass } from 'lucide-react';
import { COMPANY } from '@/data/company';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Decorative Ambient Lines */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-slate-200/[0.03] to-transparent rounded-full filter blur-3xl pointer-events-none" />

      {/* Hero Header Meta Tag */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.09] text-[11px] font-mono tracking-[0.2em] uppercase text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse" />
            <span>VENTURE STUDIO // EST. {COMPANY.established}</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono tracking-[0.18em] text-slate-500 uppercase">
            <span>DOMAIN: {COMPANY.domain}</span>
            <span className="text-slate-700">|</span>
            <span>INDEPENDENT VENTURES</span>
          </div>
        </motion.div>
      </div>

      {/* Center Hero Content */}
      <div className="my-auto py-12 lg:py-16">
        <div className="max-w-5xl">
          {/* Main Corporate Wordmark Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] uppercase text-slate-100 leading-[1.02]">
              <span className="block font-extralight tracking-tight text-metallic">
                Henderland
              </span>
              <span className="block font-semibold tracking-[-0.01em] text-white">
                Corps.
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-slate-200 tracking-tight flex items-center gap-3">
              <span className="inline-block w-8 h-[1px] bg-slate-400/50" />
              <span>{COMPANY.tagline}</span>
            </p>
          </motion.div>

          {/* Supporting Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl"
          >
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              {COMPANY.heroDescription}
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            {/* Primary CTA: Explore Our Venture */}
            <button
              onClick={() => scrollTo('venture')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-slate-100 text-[#07080a] font-medium text-xs tracking-[0.2em] uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Our Venture</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA: Discover Our Work */}
            <button
              onClick={() => scrollTo('work')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] text-slate-200 border border-white/[0.15] font-medium text-xs tracking-[0.2em] uppercase hover:bg-white/[0.08] hover:border-slate-300 transition-all duration-300 group cursor-pointer"
            >
              <span>Discover Our Work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Footnote / Architectural Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Core Focus</span>
          <span className="text-xs sm:text-sm text-slate-200 font-medium mt-1">Venture Studio & Lab</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Execution Model</span>
          <span className="text-xs sm:text-sm text-slate-200 font-medium mt-1">Multidisciplinary</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Primary Venture</span>
          <span className="text-xs sm:text-sm text-slate-200 font-medium mt-1">Henderland Creations</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Headquarters</span>
          <span className="text-xs sm:text-sm text-slate-200 font-medium mt-1 font-mono text-[11px] sm:text-xs">
            {COMPANY.coordinates}
          </span>
        </div>
      </motion.div>
    </section>
  );
};
