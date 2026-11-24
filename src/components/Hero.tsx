'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Smartphone, Code2, Sparkles, Building2 } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { ArchitecturalVisual } from './ArchitecturalVisual';

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
      {/* Ambient Decorative Blue-Cyan Blur */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#43D9F5]/10 via-[#4D8DFF]/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

      {/* Hero Meta Header Strip */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5"
        >
          {/* Small label: MULTIDISCIPLINARY VENTURE STUDIO */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#101C2C] border border-[#43D9F5]/30 text-[11px] font-mono tracking-[0.2em] uppercase text-[#F4F6FA] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#43D9F5] animate-pulse" />
            <span>MULTIDISCIPLINARY VENTURE STUDIO</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono tracking-[0.18em] text-[#AAB6C5] uppercase">
            <span>OFFICIAL DOMAIN: {COMPANY.domain}</span>
            <span className="text-slate-600">|</span>
            <span className="text-[#43D9F5]">ACTIVE INCUBATION</span>
          </div>
        </motion.div>
      </div>

      {/* Main 2-Column Hero Body */}
      <div className="my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Side: Brand Identity, Tagline, Description & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Large Heading: HENDERLAND CORPS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] uppercase text-[#F4F6FA] leading-[1.02]">
              <span className="block font-extralight tracking-tight text-metallic">
                Henderland
              </span>
              <span className="block font-semibold tracking-[-0.01em] text-white">
                Corps.
              </span>
            </h1>
          </motion.div>

          {/* Tagline: Building Ideas. Creating Possibilities. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-7"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#F4F6FA] tracking-tight flex items-center gap-3">
              <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-[#43D9F5] to-[#4D8DFF]" />
              <span>{COMPANY.tagline}</span>
            </p>
          </motion.div>

          {/* Short description explaining company's technology & product-development focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl"
          >
            <p className="text-base sm:text-lg text-[#AAB6C5] font-light leading-relaxed">
              We are a modern venture studio focused on developing innovative Android applications, high-performance digital products, and thoughtfully engineered software solutions through our dedicated venture, <strong className="font-medium text-[#F4F6FA]">HENDERLAND CREATIONS</strong>.
            </p>
          </motion.div>

          {/* Two CTAs: Explore Our Venture & See Our Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            {/* Primary Button 1: Explore Our Venture */}
            <button
              onClick={() => scrollTo('venture')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#07111F] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#F4F6FA] hover:shadow-[0_0_30px_rgba(67,217,245,0.4)] transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Our Venture</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#07111F]" />
            </button>

            {/* Secondary Button 2: See Our Work */}
            <button
              onClick={() => scrollTo('work')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#101C2C]/90 text-[#F4F6FA] border border-[#43D9F5]/30 font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#162438] hover:border-[#43D9F5] transition-all duration-300 group cursor-pointer shadow-md"
            >
              <span>See Our Work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 text-[#43D9F5]" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Premium Architectural Visual */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <ArchitecturalVisual />
        </motion.div>
      </div>

      {/* Hero Footnote / Architectural Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-[#AAB6C5]"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#AAB6C5]/70">Core Mandate</span>
          <span className="text-xs sm:text-sm text-[#F4F6FA] font-medium mt-1">App & Digital Product Studio</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#AAB6C5]/70">Current Venture</span>
          <span className="text-xs sm:text-sm text-[#F4F6FA] font-medium mt-1">Henderland Creations</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#AAB6C5]/70">Flagship Product</span>
          <span className="text-xs sm:text-sm text-[#F4F6FA] font-medium mt-1">SASTRAcal (Google Play)</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#AAB6C5]/70">Official Domain</span>
          <span className="text-xs sm:text-sm text-[#43D9F5] font-medium mt-1 font-mono text-[11px] sm:text-xs">
            {COMPANY.domain}
          </span>
        </div>
      </motion.div>
    </section>
  );
};
