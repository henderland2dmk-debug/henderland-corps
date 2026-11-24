'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY, TEAM_MEMBERS } from '@/data/company';
import {
  Globe,
  Smartphone,
  ArrowUpRight,
  Sparkles,
  Users
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Contact: React.FC = () => {
  const officialChannels = [
    {
      title: 'HENDERLAND CREATIONS',
      label: 'Explore our venture and products.',
      link: COMPANY.ventureUrl,
      icon: <Globe className="w-5 h-5 text-slate-300" />,
      tag: 'Studio Venture'
    },
    {
      title: 'GOOGLE PLAY',
      label: 'Explore our Android applications and releases.',
      link: COMPANY.playDeveloperUrl,
      icon: <Smartphone className="w-5 h-5 text-slate-300" />,
      tag: 'Developer Profile'
    },
    {
      title: 'INSTAGRAM',
      label: 'Follow our creative updates and digital content.',
      link: COMPANY.instagramClipsUrl,
      icon: <InstagramIcon className="w-5 h-5 text-slate-300" />,
      tag: '@henderlandclips'
    }
  ];

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Subtitle */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
          05 // Official Channels
        </span>
        <div className="h-[1px] w-12 bg-slate-700" />
      </div>

      {/* Section Heading & Narrative */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight"
          >
            <span className="text-metallic block">Let's</span> Connect.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-md text-xs sm:text-sm text-slate-400 font-light leading-relaxed"
        >
          Have an idea, a collaboration opportunity or a question about our work? Connect with our team through our official channels.
        </motion.p>
      </div>

      {/* Primary 3 Official Channels Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {officialChannels.map((channel, idx) => (
          <motion.a
            key={channel.title}
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#0e1117] to-[#090b0e] border border-white/[0.08] hover:border-slate-300/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            {/* Top ambient hover line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  {channel.tag}
                </span>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.07] group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all">
                  {channel.icon}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white uppercase group-hover:text-metallic transition-all duration-300">
                {channel.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                {channel.label}
              </p>
            </div>

            <div className="mt-10 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
              <span className="text-[11px] uppercase tracking-wider">Access Channel</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Team Member Direct Channels */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-white">
                Team Direct Channels
              </h4>
              <p className="text-xs text-slate-500 font-light mt-0.5">
                Connect directly with the individual builders behind HENDERLAND CREATIONS.
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            3 Verified Profiles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <a
              key={member.name}
              href={member.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-slate-300/30 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-medium text-slate-200 block group-hover:text-white transition-colors uppercase">
                  {member.name}
                </span>
                <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                  {member.handle}
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
