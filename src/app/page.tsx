import React from 'react';
import { BackgroundGrid } from '@/components/BackgroundGrid';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CompanyOverview } from '@/components/CompanyOverview';
import { About } from '@/components/About';
import { EcosystemStructure } from '@/components/EcosystemStructure';
import { Ventures } from '@/components/Ventures';
import { Work } from '@/components/Work';
import { Capabilities } from '@/components/Capabilities';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#07111F] text-[#F4F6FA] selection:bg-[#43D9F5]/25 selection:text-white">
      {/* Precision ambient background grid & interactive lighting */}
      <BackgroundGrid />

      {/* Corporate Sticky Navbar */}
      <Navbar />

      {/* Core Sections */}
      <div className="relative z-10 flex flex-col">
        {/* Section A: Home / Hero (Brand, Tagline, CTAs & Architectural Visual) */}
        <Hero />

        {/* Section B: Horizontal Information Strip */}
        <CompanyOverview />

        {/* Section C: About Us (Mandate & 3 Guiding Pillars) */}
        <About />

        {/* Section D: Our Structure (Parent Brand -> Current Venture -> Android Product) */}
        <EcosystemStructure />

        {/* Section E: Our Venture (HENDERLAND CREATIONS spotlight & verified links) */}
        <Ventures />

        {/* Section F: Featured Product & Work (SASTRAcal on Google Play & Venture) */}
        <Work />

        {/* Section G: Core Areas (4 Disciplines) */}
        <Capabilities />

        {/* Section H: Team (The People Behind The Creation + 3 Silhouette Profiles) */}
        <Team />

        {/* Section I: Contact (Official channels & direct builder links) */}
        <Contact />

        {/* Section J: Executive Footer */}
        <Footer />
      </div>
    </main>
  );
}
