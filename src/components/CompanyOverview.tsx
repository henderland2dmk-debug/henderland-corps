'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Smartphone, Activity, Sparkles } from 'lucide-react';

export const CompanyOverview: React.FC = () => {
  const items = [
    {
      label: 'Primary Venture',
      value: 'HENDERLAND CREATIONS',
      sub: 'Creative & tech engine',
      icon: <Briefcase className="w-4 h-4 text-[#43D9F5]" />,
    },
    {
      label: 'Core Focus',
      value: 'App Development & Digital Products',
      sub: 'Native Android & modern web',
      icon: <Smartphone className="w-4 h-4 text-[#4D8DFF]" />,
    },
    {
      label: 'Current Product',
      value: 'SASTRAcal',
      sub: 'Live on Google Play',
      icon: <Activity className="w-4 h-4 text-[#39D98A]" />,
    },
    {
      label: 'Future',
      value: 'More Products & Ventures',
      sub: 'Continuous studio expansion',
      icon: <Sparkles className="w-4 h-4 text-[#A78BFA]" />,
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 sm:px-8 py-8 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl bg-[#101C2C]/80 border border-white/[0.08] backdrop-blur-md shadow-[0_10px_35px_rgba(7,17,31,0.5)] p-5 sm:p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.08]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 ${
                idx > 0 ? 'pt-5 sm:pt-0 lg:pl-6' : ''
              }`}
            >
              <div className="p-2.5 rounded-xl bg-[#07111F] border border-white/[0.08] shadow-inner shrink-0 mt-0.5">
                {item.icon}
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#AAB6C5]">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-[#F4F6FA] tracking-tight mt-0.5">
                  {item.value}
                </span>
                <span className="text-xs font-light text-[#AAB6C5]/80 mt-0.5">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
