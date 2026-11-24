import { Philosophy, TeamMember } from '@/types';

export const COMPANY = {
  name: 'HENDERLAND CORPS',
  monogram: 'HC',
  legalName: 'Henderland Corps',
  domain: 'henderlandcorps.in',
  url: 'https://henderlandcorps.in',
  tagline: 'Building Ideas. Creating Possibilities.',
  positioning:
    'A modern multidisciplinary company focused on developing innovative products, digital experiences, creative solutions and independent ventures.',
  heroDescription:
    'We are a multidisciplinary venture studio transforming ideas into meaningful products, digital experiences and creative solutions.',
  aboutHeading: 'Beyond Ideas. Into Creation.',
  aboutDescription: [
    'HENDERLAND CORPS is an independent venture-driven company built around innovation, creativity and execution.',
    'We believe meaningful ideas deserve to become reality. Through technology, product development and creative exploration, we aim to transform concepts into solutions that create lasting value.',
    'Our approach combines independent thinking, technical capabilities and an entrepreneurial mindset.'
  ],
  // Verified Official Channels & Links
  ventureName: 'HENDERLAND CREATIONS',
  ventureUrl: 'https://ncrafts.cc/henderland-creations/',
  playDeveloperUrl: 'https://play.google.com/store/apps/developer?hl=en_IN&id=Henderland+Creations',
  instagramClipsUrl: 'https://www.instagram.com/henderlandclips/',
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ganesh D',
    handle: '@h.d.ganesh',
    instagramUrl: 'https://www.instagram.com/h.d.ganesh/',
    initials: 'GD'
  },
  {
    name: 'Durga Muthu Kumar',
    handle: '@ig._mdmk',
    instagramUrl: 'https://www.instagram.com/ig._mdmk/',
    initials: 'DMK'
  },
  {
    name: 'Nishanth A',
    handle: '@nishanth_pro_official',
    instagramUrl: 'https://www.instagram.com/nishanth_pro_official/',
    initials: 'NA'
  }
];

export const PHILOSOPHIES: Philosophy[] = [
  {
    number: '01',
    title: 'INNOVATION',
    subtitle: 'Challenging Conventions',
    description: 'Exploring possibilities and challenging conventional approaches.'
  },
  {
    number: '02',
    title: 'EXECUTION',
    subtitle: 'Functional Reality',
    description: 'Transforming ideas into functional products and meaningful experiences.'
  },
  {
    number: '03',
    title: 'EVOLUTION',
    subtitle: 'Continuous Growth',
    description: 'Continuously learning, building and expanding into new opportunities.'
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Structure', href: '#structure' },
  { name: 'Venture', href: '#venture' },
  { name: 'Our Work', href: '#work' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Contact', href: '#contact' }
];
