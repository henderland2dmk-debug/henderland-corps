'use client';

import React from 'react';
import { Project } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ExternalLink, Code2, Layers, Calendar, Activity } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0f14] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                {project.category}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-800/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {project.status}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-light text-white uppercase tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 font-light mt-1">
              {project.tagline}
            </p>

            <div className="h-[1px] w-full bg-white/[0.08] my-6" />

            {/* In-depth Narrative */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                Project Overview & Architecture
              </h4>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Deliverables */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-3">
                Key Deliverables & Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-3">
                Core Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance Metric Badge */}
            {project.metrics && (
              <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">
                  Studio Benchmark / Metric
                </span>
                <span className="text-xs font-mono font-medium text-slate-200">
                  {project.metrics}
                </span>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">
                Venture: HENDERLAND CREATIONS
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
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
