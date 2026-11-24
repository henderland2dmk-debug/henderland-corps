import React from 'react';
import { BackgroundGrid } from '@/components/BackgroundGrid';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Ventures } from '@/components/Ventures';
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

        {/* Section C: Our Venture (Centralized architecture with HENDERLAND CREATIONS spotlight) */}
        <Ventures />

        {/* Section D: Our Work */}
        <Work />

        {/* Section E: Capabilities */}
        <Capabilities />

        {/* Section F: Contact */}
        <Contact />

        {/* Section G: Executive Footer */}
        <Footer />
      </div>
    </main>
  );
}
