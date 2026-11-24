import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'aetheria-design-system',
    title: 'Aetheria Design Architecture',
    category: 'Digital Products',
    ventureId: 'henderland-creations',
    tagline: 'Multi-Brand Tokenized UI/UX Framework',
    description:
      'A bespoke corporate design engineering system engineered with strict tokenization, micro-interactions, and high-performance component rendering across modern web ecosystems.',
    longDescription:
      'Aetheria is our proprietary design system built from the ground up to solve complex interface orchestration across corporate ventures. It features mathematical typography scales, sub-millisecond animation primitives, automated accessibility compliance, and strict multi-theme tokens.',
    status: 'Live',
    year: '2025',
    metrics: '99.8% Core Web Vitals',
    technologies: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix Primitives'],
    deliverables: ['Design System', 'Component Library', 'Token Architecture', 'Documentation'],
    featured: true
  },
  {
    id: 'pulsegrid-data-engine',
    title: 'PulseGrid Intelligent Engine',
    category: 'Software Applications',
    ventureId: 'henderland-creations',
    tagline: 'High-Throughput Analytics & Telemetry Engine',
    description:
      'A performant telemetry and event processing engine designed for real-time data visualization, predictive metrics, and low-latency studio workflow tracking.',
    longDescription:
      'Built for mission-critical digital operations, PulseGrid ingests continuous metric streams, runs edge aggregation, and powers executive dashboards with millisecond response latencies and zero UI blocking.',
    status: 'Live',
    year: '2025',
    metrics: '<12ms Query Latency',
    technologies: ['Next.js', 'Distributed Systems', 'WebSockets', 'Chart Engine'],
    deliverables: ['Dashboard Application', 'Stream Processor', 'REST/GraphQL API'],
    featured: true
  },
  {
    id: 'kinesis-web-platform',
    title: 'Kinesis Interactive Experience',
    category: 'Web Development',
    ventureId: 'henderland-creations',
    tagline: 'Immersive Spatial Typography & Dynamic Canvas',
    description:
      'An exploratory interactive web platform uniting fluid shader physics, smooth scrolling kinetics, and editorial typography for premium brand storytelling.',
    longDescription:
      'Kinesis showcases the outer limits of modern browser capabilities without compromising accessibility or mobile battery efficiency. Utilizing hardware-accelerated transforms and responsive geometry shaders.',
    status: 'Live',
    year: '2024',
    metrics: '60 FPS Smooth Render',
    technologies: ['React 19', 'WebGL / Canvas', 'Tailwind CSS', 'GPU Acceleration'],
    deliverables: ['Interactive Web Platform', 'Canvas Engine', 'Fluid Dynamics'],
    featured: true
  },
  {
    id: 'ventureflow-os',
    title: 'VentureFlow Studio Operating System',
    category: 'Software Applications',
    ventureId: 'henderland-creations',
    tagline: 'Venture Lifecycle & Incubation Pipeline',
    description:
      'Internal studio operating framework streamlining product roadmaps, cross-disciplinary sprint milestones, and capital resource allocation.',
    longDescription:
      'VentureFlow is our central operational backbone that codifies how Henderland Corps ideates, validates, prototypes, and scales ventures from raw concept to self-sustaining products.',
    status: 'In Development',
    year: '2026',
    metrics: 'Venture Pipeline 2.0',
    technologies: ['Next.js App Router', 'TypeScript', 'Server Actions', 'Security Layer'],
    deliverables: ['Venture Portal', 'Milestone Engine', 'Document Vault'],
    featured: false
  },
  {
    id: 'omnisphere-creative-lab',
    title: 'OmniSphere Creative Exploration',
    category: 'Creative Projects',
    ventureId: 'henderland-creations',
    tagline: 'Generative Systems & Experimental Media',
    description:
      'A series of experimental digital artifacts, algorithmic brand identities, and sensory audiovisual interfaces developed under our creative R&D branch.',
    longDescription:
      'OmniSphere merges algorithmic geometry with sound synthesis, exploring the future of human-machine creative collaboration and futuristic aesthetic languages.',
    status: 'Live',
    year: '2025',
    metrics: 'R&D Initiative',
    technologies: ['Web Audio API', 'Canvas API', 'Procedural Math', 'SVG Kinetics'],
    deliverables: ['Interactive Artifacts', 'Generative Soundscapes', 'Visual Experiments'],
    featured: false
  },
  {
    id: 'synthetix-core-mesh',
    title: 'Synthetix Cloud Infrastructure',
    category: 'Software Applications',
    ventureId: 'henderland-creations',
    tagline: 'Scalable Micro-Service & API Mesh',
    description:
      'Ultra-resilient serverless API gateway architecture engineered for frictionless multi-tenant venture deployment and automated disaster mitigation.',
    longDescription:
      'Designed to underpin all upcoming Henderland Corps digital ventures, Synthetix guarantees 99.99% uptime, distributed caching, rate-limiting, and zero-trust authentication protocols.',
    status: 'In Development',
    year: '2026',
    metrics: '99.99% Architecture Target',
    technologies: ['Edge Runtime', 'Zero-Trust Auth', 'Global CDN', 'Docker / CI-CD'],
    deliverables: ['Gateway Mesh', 'Security Protocols', 'Auto-Scaling Pods'],
    featured: false
  }
];

export const PROJECT_CATEGORIES = [
  'All',
  'Digital Products',
  'Software Applications',
  'Web Development',
  'Creative Projects'
] as const;
