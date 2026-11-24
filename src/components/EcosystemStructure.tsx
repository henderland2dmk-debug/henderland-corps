'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, ExternalLink, ShieldCheck, Smartphone, Building2 } from 'lucide-react';
import { HCLogo } from './HCLogo';
import { COMPANY } from '@/data/company';

export const EcosystemStructure: React.FC = () => {
  return (
    <section id="structure" className="relative py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#43D9F5] uppercase">
          02 // Studio Architecture
        </span>
        <div className="h-[1px] w-12 bg-[#43D9F5]/40" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F4F6FA] uppercase leading-tight"
          >
            <span className="text-metallic">Our</span> Corporate Structure
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-md text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed"
        >
          A unified hierarchy linking the parent holding brand, dedicated engineering venture, and deployed mobile applications.
        </motion.p>
      </div>

      {/* Connected 3-Card Ecosystem Diagram */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
        {/* Card 1: Parent Brand — HENDERLAND CORPS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-3xl bg-gradient-to-b from-[#101C2C] to-[#0B1524] border border-white/[0.1] hover:border-[#43D9F5]/50 p-8 flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(7,17,31,0.8)]"
        >
          {/* Top ambient hover line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#43D9F5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#43D9F5] px-3 py-1 rounded-full bg-[#43D9F5]/10 border border-[#43D9F5]/25">
                01 // Parent Brand
              </span>
              <Building2 className="w-5 h-5 text-[#AAB6C5]" />
            </div>

            {/* Actual HC Logo Monogram */}
            <div className="w-20 h-20 rounded-2xl bg-[#07111F] border border-white/[0.12] flex items-center justify-center mb-6 shadow-inner p-2">
              <HCLogo size="lg" showWordmark={false} />
            </div>

            <h3 className="text-2xl font-light text-white tracking-tight uppercase group-hover:text-metallic transition-all duration-300">
              Henderland Corps
            </h3>

            <p className="text-xs font-mono text-[#AAB6C5] mt-1 uppercase tracking-wider">
              Multidisciplinary Venture Studio
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed">
              The founding corporate parent entity governing strategic capital, brand identity, and venture incubation.
            </p>
          </div>

          <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#AAB6C5]">
            <span>ROLE: PARENT HOLDING</span>
            <span className="text-white font-medium">henderlandcorps.in</span>
          </div>
        </motion.div>

        {/* Card 2: Current Venture — HENDERLAND CREATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="group relative rounded-3xl bg-gradient-to-b from-[#101C2C] to-[#0B1524] border border-[#43D9F5]/30 hover:border-[#43D9F5] p-8 flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(67,217,245,0.15)]"
        >
          {/* Top ambient hover line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#43D9F5] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#43D9F5] px-3 py-1 rounded-full bg-[#43D9F5]/15 border border-[#43D9F5]/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43D9F5] animate-pulse" />
                <span>02 // Current Venture</span>
              </span>
              <span className="text-[10px] font-mono text-[#39D98A] uppercase">Active</span>
            </div>

            {/* Actual Henderland Creations Logo Image */}
            <div className="w-20 h-20 rounded-2xl bg-[#07111F] border border-white/[0.12] flex items-center justify-center mb-6 shadow-inner p-2 overflow-hidden">
              <Image
                src="/henderland-creations-logo.png"
                alt="Henderland Creations Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            <h3 className="text-2xl font-light text-white tracking-tight uppercase group-hover:text-gradient-cyan transition-all duration-300">
              Henderland Creations
            </h3>

            <p className="text-xs font-mono text-[#43D9F5] mt-1 uppercase tracking-wider">
              Engineering & Digital Product Studio
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed">
              The creative and technology-driven venture of HENDERLAND CORPS focused on developing practical Android apps and digital products.
            </p>
          </div>

          <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#AAB6C5]">
            <a
              href="https://ncrafts.cc/henderland-creations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#43D9F5] hover:text-white transition-colors"
            >
              <span>Explore Venture</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] text-[#AAB6C5]">PRIMARY VENTURE</span>
          </div>
        </motion.div>

        {/* Card 3: Android Product — SASTRAcal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative rounded-3xl bg-gradient-to-b from-[#101C2C] to-[#0B1524] border border-white/[0.1] hover:border-[#39D98A]/50 p-8 flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(57,217,138,0.12)]"
        >
          {/* Top ambient hover line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39D98A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#39D98A] px-3 py-1 rounded-full bg-[#39D98A]/10 border border-[#39D98A]/30">
                03 // Android Product
              </span>
              <Smartphone className="w-5 h-5 text-[#39D98A]" />
            </div>

            {/* Actual SASTRAcal Logo Image */}
            <div className="w-20 h-20 rounded-2xl bg-[#07111F] border border-white/[0.12] flex items-center justify-center mb-6 shadow-inner p-2 overflow-hidden">
              <Image
                src="/sastracal-logo.png"
                alt="SASTRAcal Application Logo"
                width={70}
                height={70}
                className="object-contain rounded-xl"
              />
            </div>

            <h3 className="text-2xl font-light text-white tracking-tight uppercase group-hover:text-metallic transition-all duration-300">
              SASTRAcal
            </h3>

            <p className="text-xs font-mono text-[#39D98A] mt-1 uppercase tracking-wider">
              Health & Fitness Android App
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed">
              Smart nutrition, calorie, fitness and habit-tracking application built for SASTRA University students, live on Google Play.
            </p>
          </div>

          <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#AAB6C5]">
            <a
              href="https://play.google.com/store/apps/details?id=com.sastragym.sastragym"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#39D98A] hover:text-white transition-colors"
            >
              <span>View on Google Play</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] text-[#AAB6C5]">PUBLISHED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
