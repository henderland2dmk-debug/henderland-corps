'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, CheckCircle, ExternalLink } from 'lucide-react';

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="work" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
              03 // Verified Products & Initiatives
            </span>
            <div className="h-[1px] w-12 bg-slate-700" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
            <span className="text-metallic">Discover</span> Our Work
          </h2>
        </div>

        <div className="max-w-md text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
          Authentic Android applications, digital products, and creative studio initiatives engineered by HENDERLAND CREATIONS.
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/[0.06]">
        {PROJECT_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/[0.03] text-slate-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.07]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid: 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl bg-gradient-to-b from-[#0e1117] to-[#090b0e] border border-white/[0.08] hover:border-slate-300/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Top ambient hover sheen */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    {project.category}
                  </span>
                  
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/20 border border-emerald-800/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white group-hover:text-metallic transition-all duration-300 uppercase">
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                {project.features && project.features.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
                      Key Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400 font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-[0.16em] bg-white text-black hover:bg-slate-200 transition-all duration-300 group shadow-md cursor-pointer"
                >
                  <span>{project.actionLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={() => handleOpenProject(project)}
                  className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer px-3 py-2"
                >
                  Overview Details →
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
