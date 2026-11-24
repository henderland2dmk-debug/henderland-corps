'use client';

import React from 'react';
import { Venture } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface VentureModalProps {
  venture: Venture | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VentureModal: React.FC<VentureModalProps> = ({
  venture,
  isOpen,
  onClose,
}) => {
  if (!venture) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07080a]/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0f14] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 custom-scrollbar"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                Studio Venture // {venture.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight uppercase">
              {venture.name}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light mt-2 tracking-wide">
              {venture.tagline}
            </p>

            {/* Divider */}
            <div className="h-[1px] w-full bg-white/[0.08] my-6" />

            {/* Extended Narrative */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                About The Venture
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {venture.extendedDescription || venture.description}
              </p>
            </div>

            {/* Focus Areas Grid */}
            <div className="mt-8">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
                Core Development Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venture.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-300" />
                      <span className="text-xs font-medium text-slate-100 uppercase tracking-wide">
                        {area}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats / Metrics */}
            {venture.stats && (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                {venture.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      {stat.label}
                    </span>
                    <span className="text-sm font-medium text-slate-200 mt-1">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions & Official Links */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {venture.playStoreUrl && (
                  <a
                    href={venture.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider bg-white text-black hover:bg-slate-200 transition-colors"
                  >
                    <span>Google Play Developer Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {venture.externalUrl && (
                  <a
                    href={venture.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors"
                  >
                    <span>Visit Reference Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.18em] text-slate-400 hover:text-white bg-transparent border border-white/[0.08] transition-all cursor-pointer"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
