'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';
import {
  ArrowUpRight,
  CheckCircle,
  ExternalLink,
  Smartphone,
  Activity,
  Flame,
  Dumbbell,
  CalendarCheck,
  ShieldCheck,
  Check
} from 'lucide-react';

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sastracalProject = PROJECTS.find((p) => p.id === 'sastracal') || PROJECTS[0];
  const creationsProject = PROJECTS.find((p) => p.id === 'henderland-creations-initiative') || PROJECTS[1];

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const sastracalFeatures = [
    {
      title: 'Nutrition Tracking',
      desc: 'Log and monitor daily food and macronutrient breakdown.',
      icon: <Activity className="w-4 h-4 text-[#43D9F5]" />,
    },
    {
      title: 'Calorie Tracking',
      desc: 'Accurately balance caloric intake against metabolic goals.',
      icon: <Flame className="w-4 h-4 text-[#4D8DFF]" />,
    },
    {
      title: 'Fitness Tracking',
      desc: 'Log workout sessions, sets, and overall active progress.',
      icon: <Dumbbell className="w-4 h-4 text-[#A78BFA]" />,
    },
    {
      title: 'Habit Tracking',
      desc: 'Build positive health routines and monitor consistency.',
      icon: <CalendarCheck className="w-4 h-4 text-[#39D98A]" />,
    },
  ];

  return (
    <section id="work" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#43D9F5] uppercase">
          04 // Verified Products & Portfolio
        </span>
        <div className="h-[1px] w-12 bg-[#43D9F5]/40" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F4F6FA] uppercase leading-tight">
            <span className="text-metallic">Featured</span> Product & Work
          </h2>
        </div>

        <div className="max-w-md text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed">
          Showcasing authentic digital products and initiatives developed by our technology venture, <strong className="text-white">HENDERLAND CREATIONS</strong>.
        </div>
      </div>

      {/* Primary Feature: SASTRAcal Dedicated Android Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl bg-gradient-to-b from-[#101C2C] via-[#0E1826] to-[#07111F] border border-[#43D9F5]/30 hover:border-[#43D9F5]/60 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-[0_25px_60px_rgba(7,17,31,0.9)] mb-14 transition-all duration-500"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#43D9F5]/10 via-[#4D8DFF]/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#39D98A]/15 border border-[#39D98A]/30 text-[11px] font-mono uppercase tracking-[0.2em] text-[#39D98A] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A] animate-pulse" />
              <span>FLAGSHIP PRODUCT // LIVE ON GOOGLE PLAY</span>
            </span>
          </div>

          <div className="text-[11px] font-mono tracking-[0.2em] text-[#AAB6C5] uppercase">
            Platform: Android // Kotlin
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Product Info & Actions */}
          <div className="lg:col-span-7">
            {/* Logo + Title Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#07111F] border border-white/[0.12] p-2 flex items-center justify-center shrink-0 shadow-inner">
                <Image
                  src="/sastracal-logo.png"
                  alt="SASTRAcal App Logo"
                  width={68}
                  height={68}
                  className="object-contain rounded-xl"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#43D9F5]">
                  Health & Fitness / Android Application
                </span>
                <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight uppercase">
                  SASTRAcal
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base font-light text-[#F4F6FA] tracking-wide">
              Smart nutrition, calorie, fitness and habit-tracking application built for SASTRA University students.
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#AAB6C5] font-light leading-relaxed">
              SASTRAcal helps users log meals, monitor calorie intake and maintain daily routines through a simple, high-velocity digital experience. Developed and published by HENDERLAND CREATIONS on the Google Play Store.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.sastragym.sastragym"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#07111F] font-semibold text-xs tracking-[0.16em] uppercase hover:bg-[#F4F6FA] hover:shadow-[0_0_25px_rgba(67,217,245,0.4)] transition-all duration-300 group shadow-lg cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-[#07111F]" />
                <span>View on Google Play</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={() => handleOpenProject(sastracalProject)}
                className="px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] text-[#AAB6C5] hover:text-white transition-colors cursor-pointer"
              >
                Project Dossier →
              </button>
            </div>
          </div>

          {/* Right Column: 4 Feature Pillars Grid */}
          <div className="lg:col-span-5 bg-[#07111F]/70 border border-white/[0.08] rounded-2xl p-6 sm:p-7 backdrop-blur-sm shadow-inner">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#43D9F5]">
                Core Features
              </span>
              <span className="text-[10px] font-mono text-[#AAB6C5] uppercase">
                4 Key Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {sastracalFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#101C2C]/60 border border-white/[0.06] flex items-start gap-3 hover:border-white/[0.15] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#07111F] shrink-0 border border-white/[0.06]">
                    {feat.icon}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-white block uppercase tracking-wider">
                      {feat.title}
                    </span>
                    <span className="text-[11px] text-[#AAB6C5] font-light block mt-0.5 leading-snug">
                      {feat.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Secondary Initiative Card: HENDERLAND CREATIONS Venture Relationship */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-[#101C2C]/50 border border-white/[0.08] p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-[#07111F] border border-white/[0.1] p-2 flex items-center justify-center shrink-0">
            <Image
              src="/henderland-creations-logo.png"
              alt="Henderland Creations Logo"
              width={54}
              height={54}
              className="object-contain"
            />
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#43D9F5]">
              Initiative // Creative & Technology Studio
            </span>
            <h4 className="text-xl sm:text-2xl font-light text-white uppercase mt-0.5">
              Henderland Creations
            </h4>
            <p className="text-xs sm:text-sm text-[#AAB6C5] font-light max-w-xl mt-1 leading-relaxed">
              The creative and technology-driven venture of HENDERLAND CORPS, focused on developing practical Android applications and thoughtfully built digital products.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://ncrafts.cc/henderland-creations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.16em] bg-white text-[#07111F] hover:bg-[#F4F6FA] transition-all shadow-md cursor-pointer"
          >
            <span>Explore Henderland Creations</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      {/* Modal for Details */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
