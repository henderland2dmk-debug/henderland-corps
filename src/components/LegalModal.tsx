'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';
import { COMPANY } from '@/data/company';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  isOpen,
  onClose,
}) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07080a]/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0d0f14] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                Corporate Governance // {COMPANY.domain}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-white uppercase tracking-tight">
              {isPrivacy ? 'Privacy & Data Governance' : 'Terms of Corporate Operation'}
            </h3>

            <div className="h-[1px] w-full bg-white/[0.08] my-6" />

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {isPrivacy ? (
                <>
                  <p>
                    <strong>1. Scope of Policy:</strong> HENDERLAND CORPS operates as a venture studio and corporate holding entity. This Privacy Policy governs all communications, inquiries, and technical interactions conducted through our official domain ({COMPANY.domain}).
                  </p>
                  <p>
                    <strong>2. Confidentiality & Data Protection:</strong> All communications transmitted through our executive inquiry desks are treated with strict commercial confidentiality. We do not sell, rent, or distribute partner or client data to third-party commercial brokers.
                  </p>
                  <p>
                    <strong>3. Data Minimization:</strong> We only collect corporate contact details, organization identifiers, and project descriptions necessary to evaluate strategic alignments and respond to business proposals.
                  </p>
                  <p>
                    <strong>4. Inquiries & Rights:</strong> To request data rectification, disclosure, or deletion, representatives may connect through our official channels listed on {COMPANY.domain}.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Intellectual Property:</strong> All brand trademarks, monograms, system architectures, proprietary venture identities (including HENDERLAND CREATIONS), and content presented on this domain are the exclusive intellectual property of HENDERLAND CORPS.
                  </p>
                  <p>
                    <strong>2. Venture Architecture:</strong> HENDERLAND CORPS develops and operates independent ventures. Statements regarding prospective products or research initiatives reflect forward-looking strategic intent and do not constitute binding public offerings.
                  </p>
                  <p>
                    <strong>3. Acceptable Use:</strong> Unauthorized scraping, vulnerability probing, or denial-of-service attempts targeting {COMPANY.domain} are strictly prohibited and monitored under applicable cyber security statutes.
                  </p>
                  <p>
                    <strong>4. Corporate Jurisdiction:</strong> These terms are governed under the corporate and commercial laws governing HENDERLAND CORPS operations in India.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
              >
                Acknowledge & Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
