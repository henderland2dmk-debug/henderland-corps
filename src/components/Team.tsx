'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '@/data/company';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
          Team // Henderland Creations
        </span>
        <div className="h-[1px] w-12 bg-slate-700" />
      </div>

      {/* Section Heading & Supporting Text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight"
          >
            <span className="text-metallic">The People</span> Behind The Creation
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-md text-xs sm:text-sm text-slate-400 font-light leading-relaxed"
        >
          Three individuals working together to build and develop HENDERLAND CREATIONS.
        </motion.p>
      </div>

      {/* 3 Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
            className="group relative p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0e1117] to-[#090b0e] border border-white/[0.08] hover:border-slate-300/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            {/* Top ambient hover sheen */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Header with Initials Badge & Instagram Icon */}
              <div className="flex items-center justify-between mb-8">
                {/* Elegant initials-based placeholder */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.12] group-hover:border-slate-300/50 flex items-center justify-center text-sm font-mono font-medium text-slate-200 transition-all duration-300">
                  {member.initials}
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-slate-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all">
                  <InstagramIcon className="w-4 h-4" />
                </div>
              </div>

              {/* Name & Handle */}
              <h3 className="text-xl font-medium tracking-tight text-white uppercase group-hover:text-metallic transition-all duration-300">
                {member.name}
              </h3>
              
              <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                {member.handle}
              </p>
            </div>

            {/* Action Footnote */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
              <span className="text-[11px] uppercase tracking-wider">Connect on Instagram</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-400 group-hover:text-white" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
