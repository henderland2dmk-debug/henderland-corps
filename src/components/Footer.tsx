'use client';

import React, { useState } from 'react';
import { HCLogo } from './HCLogo';
import { COMPANY, NAV_LINKS } from '@/data/company';
import { LegalModal } from './LegalModal';
import { ArrowUp, ArrowUpRight, Globe, Smartphone } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

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
    <footer className="relative border-t border-white/[0.08] bg-[#07111F] pt-20 pb-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <HCLogo size="md" showWordmark={true} />

            <p className="text-sm font-light text-[#F4F6FA] max-w-sm">
              {COMPANY.tagline}
            </p>

            <p className="text-xs text-[#AAB6C5] font-light leading-relaxed max-w-md">
              {COMPANY.positioning}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#AAB6C5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A]" />
              <span>OFFICIAL DOMAIN: <span className="text-[#43D9F5]">{COMPANY.domain}</span></span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#43D9F5]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm text-[#AAB6C5] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Channels Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#43D9F5]">
                Official Channels
              </h4>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101C2C] border border-white/[0.08] text-[10px] font-mono text-[#AAB6C5] hover:text-white hover:border-[#43D9F5]/40 transition-all cursor-pointer"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3 text-[#43D9F5]" />
              </button>
            </div>

            <ul className="space-y-3">
              <li>
                <a
                  href={COMPANY.ventureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#F4F6FA] hover:text-white transition-colors flex items-center justify-between group p-3 rounded-xl bg-[#101C2C]/60 border border-white/[0.06] hover:border-[#43D9F5]/30"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-3.5 h-3.5 text-[#43D9F5]" />
                    <span>Henderland Creations</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AAB6C5] group-hover:text-[#43D9F5] transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href={COMPANY.playDeveloperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#F4F6FA] hover:text-white transition-colors flex items-center justify-between group p-3 rounded-xl bg-[#101C2C]/60 border border-white/[0.06] hover:border-[#43D9F5]/30"
                >
                  <div className="flex items-center gap-2.5">
                    <Smartphone className="w-3.5 h-3.5 text-[#4D8DFF]" />
                    <span>Google Play Developer Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AAB6C5] group-hover:text-[#4D8DFF] transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href={COMPANY.instagramClipsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#F4F6FA] hover:text-white transition-colors flex items-center justify-between group p-3 rounded-xl bg-[#101C2C]/60 border border-white/[0.06] hover:border-[#43D9F5]/30"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>Henderland Clips (@henderlandclips)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AAB6C5] group-hover:text-[#A78BFA] transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#AAB6C5]">
          <div>
            © 2026 {COMPANY.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalType('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalType('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Operation
            </button>
            <span>•</span>
            <span className="text-[#43D9F5]">{COMPANY.domain}</span>
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
