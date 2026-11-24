import React from 'react';
import { BackgroundGrid } from '@/components/BackgroundGrid';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Ventures } from '@/components/Ventures';
import { Team } from '@/components/Team';
import { Work } from '@/components/Work';
import { Capabilities } from '@/components/Capabilities';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#07080a] text-slate-100 selection:bg-slate-200/20 selection:text-white">
      {/* Precision ambient background grid & interactive lighting */}
      <BackgroundGrid />

      {/* Corporate Sticky Navbar */}
      <Navbar />

      {/* Core Sections */}
      <div className="relative z-10 flex flex-col">
        {/* Section A: Home / Hero */}
        <Hero />

        {/* Section B: About Us */}
        <About />

        {/* Section C: Our Venture (HENDERLAND CREATIONS spotlight & verified links) */}
        <Ventures />

        {/* Section D: Team (The People Behind The Creation) */}
        <Team />

        {/* Section E: Our Work (Verified products: SASTRAcal & Henderland Creations) */}
        <Work />

        {/* Section F: Capabilities */}
        <Capabilities />

        {/* Section G: Contact (Official channels & direct builder links) */}
        <Contact />

        {/* Section H: Executive Footer */}
        <Footer />
      </div>
    </main>
  );
}
