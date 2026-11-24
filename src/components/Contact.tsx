'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY } from '@/data/company';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Copy,
  Check
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Venture Partnership',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const inquiryOptions = [
    'Venture Partnership',
    'Product Incubation',
    'Technical Collaboration',
    'Corporate Advisory',
    'General Inquiry'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Simulate high-reliability corporate submission
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      inquiryType: 'Venture Partnership',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
              05 // Corporate Dialogue & Inquiries
            </span>
            <div className="h-[1px] w-12 bg-slate-700" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
            <span className="text-metallic">Initiate</span> Contact
          </h2>
        </div>

        <div className="max-w-md text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
          We engage with ambitious founders, institutional partners, and visionary creators. Reach out to discuss collaborative ventures and strategic initiatives.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Corporate Office & Direct Details */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-light uppercase text-white tracking-tight mb-2">
              HENDERLAND CORPS
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Operating headquarters and digital venture research facility. Direct all formal inquiries and investment communications through our corporate desk.
            </p>
          </div>

          {/* Quick Copy Contact Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block mb-1">
                Official Corporate Domain
              </span>
              <span className="text-sm font-mono text-slate-200">
                {COMPANY.domain}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block mb-1">
                Inquiry Email Desk
              </span>
              <div className="flex items-center justify-between gap-3 mt-1">
                <a
                  href={`mailto:${COMPANY.contactEmail}`}
                  className="text-sm sm:text-base font-mono text-white hover:text-slate-300 transition-colors"
                >
                  {COMPANY.contactEmail}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-all cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy corporate email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block mb-1">
                  Response SLA
                </span>
                <span className="text-xs text-slate-300 font-light flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  &lt; 24 Business Hours
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block mb-1">
                  Security
                </span>
                <span className="text-xs text-slate-300 font-light flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  Encrypted Channel
                </span>
              </div>
            </div>
          </div>

          {/* Location & Studio Meta */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Location Coordinates
                </span>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {COMPANY.location}
                </p>
                <p className="text-[11px] font-mono text-slate-500 mt-1">
                  {COMPANY.coordinates}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Corporate Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0f14] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Top ambient hairline */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-light text-white uppercase tracking-tight">
                  Inquiry Dispatched
                </h4>
                <p className="text-sm text-slate-400 font-light max-w-md">
                  Thank you for reaching out to HENDERLAND CORPS. Your communication has been routed to our executive partner desk. We will review and respond promptly.
                </p>
                <div className="pt-6">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="text-lg font-light uppercase tracking-tight text-white mb-1">
                    Send an Inquiry
                  </h4>
                  <p className="text-xs text-slate-400 font-light">
                    Complete the formal brief below. All fields are kept confidential.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-800/40 text-red-300 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Please ensure your name, valid email, and brief are provided.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-300 focus:bg-white/[0.05] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-300 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Organization / Venture
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Dynamics Ltd."
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-300 focus:bg-white/[0.05] transition-all"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#11141c] border border-white/[0.08] text-sm text-slate-100 focus:outline-none focus:border-slate-300 transition-all cursor-pointer"
                    >
                      {inquiryOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0e1117] text-slate-200">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Executive Brief / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Outline the scope, objectives, or intent of your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-300 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-full bg-slate-100 text-[#07080a] font-medium text-xs tracking-[0.2em] uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300 group cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Corporate Inquiry</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
