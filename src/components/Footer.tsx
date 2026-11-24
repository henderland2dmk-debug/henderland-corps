'use client';

import React, { useState } from 'react';
import { HCLogo } from './HCLogo';
import { COMPANY, NAV_LINKS } from '@/data/company';
import { getAllVentures } from '@/data/ventures';
import { LegalModal } from './LegalModal';
import { ArrowUp, ArrowUpRight, Globe, Shield, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);
  const ventures = getAllVentures();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050608] pt-20 pb-12 px-6 sm:px-8">
      {/* Top ambient glow */}
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <HCLogo size="md" showWordmark={true} />

            <p className="text-sm font-light text-slate-300 max-w-sm">
              {COMPANY.tagline}
            </p>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-md">
              {COMPANY.positioning}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>OFFICIAL DOMAIN: {COMPANY.domain}</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400">
              Ventures
            </h4>
            <ul className="space-y-2.5">
              {ventures.map((v) => (
                <li key={v.id}>
                  <a
                    href="#venture"
                    onClick={(e) => handleNavClick(e, '#venture')}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span>{v.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                Centralized Studio
              </span>
              <span className="text-xs text-slate-400">
                Independent Structure
              </span>
            </div>
          </div>

          {/* Inquiries & Direct Desk */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400">
              Corporate Desk
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <a
                href={`mailto:${COMPANY.contactEmail}`}
                className="hover:text-white transition-colors block"
              >
                {COMPANY.contactEmail}
              </a>
              <p className="text-slate-500 text-[11px] font-sans">
                {COMPANY.location}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {COMPANY.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalType('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalType('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Operation
            </button>
            <span>•</span>
            <span>henderlandcorps.in</span>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      <LegalModal
        type={legalType}
        isOpen={legalType !== null}
        onClose={() => setLegalType(null)}
      />
    </footer>
  );
};
