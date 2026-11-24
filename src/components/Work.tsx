'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Code, Layers, Sparkles, Terminal, Activity } from 'lucide-react';

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

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
              03 // Selected Deployments & Systems
            </span>
            <div className="h-[1px] w-12 bg-slate-700" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
            <span className="text-metallic">Discover</span> Our Work
          </h2>
        </div>

        <div className="max-w-md text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
          High-performance digital products, scalable software platforms, and creative technologies engineered under the Henderland umbrella.
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleOpenProject(project)}
              className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#0e1117] to-[#090b0e] border border-white/[0.08] hover:border-slate-300/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Top ambient hover sheen */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                    {project.category}
                  </span>
                  
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-emerald-400 transition-colors" />
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-metallic transition-all duration-300 uppercase">
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-400 font-light leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Action Footnote */}
              <div className="mt-8 pt-5 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span className="text-[11px] uppercase tracking-wider">Inspect Blueprint</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
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
