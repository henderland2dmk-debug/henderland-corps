import { Capability } from '@/types';

export const CAPABILITIES: Capability[] = [
  {
    id: 'app-development',
    number: '01',
    title: 'App Development',
    subtitle: 'Native & Modern Mobile Systems',
    description:
      'Designing and engineering performant Android applications with Kotlin, Jetpack Compose, modular architecture, and offline-first state synchronization.',
    iconName: 'Smartphone',
    items: [
      'Native Android Development (Kotlin & Jetpack)',
      'High-Performance UI & Intuitive Interactions',
      'Local Storage & Offline-First Data Sync',
      'Google Play Production Deployment & Release Lifecycle'
    ]
  },
  {
    id: 'digital-products',
    number: '02',
    title: 'Digital Products',
    subtitle: 'End-to-End Product Engineering',
    description:
      'Translating problem spaces into purposeful digital utilities, habit tools, and student platforms designed for real-world adoption and engagement.',
    iconName: 'Layers',
    items: [
      'User Journey Mapping & Ergonomic UX Design',
      'Feature Scoping, Prototyping & Agile Sprints',
      'Telemetry, Crash Analytics & Iterative Refinement',
      'Sustainable Product Evolution & User Retention'
    ]
  },
  {
    id: 'web-solutions',
    number: '03',
    title: 'Web Solutions',
    subtitle: 'Ultra-Fast Digital Platforms',
    description:
      'Building responsive corporate websites, high-speed Jamstack web apps, and modern digital hubs utilizing Next.js, TypeScript, and modern edge runtimes.',
    iconName: 'Globe',
    items: [
      'Next.js (App Router) & Strict TypeScript Ecosystems',
      'Edge-Rendered Performance & Core Web Vitals Optimization',
      'Responsive Architectural Layouts & High-DPI Polish',
      'Zero-Downtime Deployment & Modern Cloud Infrastructure'
    ]
  },
  {
    id: 'creative-technology',
    number: '04',
    title: 'Creative Technology',
    subtitle: 'Modern Visuals & Micro-Interactions',
    description:
      'Crafting refined digital visual identities, interactive canvas components, fluid motion physics, and sleek minimalist interfaces that leave lasting impressions.',
    iconName: 'Sparkles',
    items: [
      'Hardware-Accelerated Motion & Framer Motion Kinetics',
      'Mathematical Typography Hierarchy & Spatial Systems',
      'Subtle Dark-Theme Lighting & Glassmorphic Accents',
      'Interactive Design Systems & Tokenized Component Kits'
    ]
  }
];
