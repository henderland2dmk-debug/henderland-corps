import { Venture } from '@/types';

/**
 * CENTRALIZED VENTURE ARCHITECTURE
 * 
 * HENDERLAND CORPS operates with a centralized venture architecture.
 * HENDERLAND CREATIONS is the active creative and technology-driven venture.
 */
export const VENTURES: Venture[] = [
  {
    id: 'henderland-creations',
    name: 'HENDERLAND CREATIONS',
    tagline: 'The creative and technology-driven venture of HENDERLAND CORPS.',
    status: 'Active',
    isPrimary: true,
    description:
      'HENDERLAND CREATIONS is the creative and technology-driven venture of HENDERLAND CORPS, focused on developing practical Android applications, digital products and thoughtfully built technology solutions.',
    extendedDescription:
      'Operating as the dedicated engineering and creative studio of HENDERLAND CORPS, HENDERLAND CREATIONS builds practical mobile applications, modern digital products, and thoughtful software experiences designed for direct real-world utility.',
    focusAreas: [
      'Android Application Development',
      'Digital Products',
      'Practical Software Solutions',
      'Creative Technology'
    ],
    externalUrl: 'https://ncrafts.cc/henderland-creations/',
    playStoreUrl: 'https://play.google.com/store/apps/developer?hl=en_IN&id=Henderland+Creations',
    stats: [
      { label: 'Studio Venture', value: 'Henderland Creations' },
      { label: 'Core Platform', value: 'Android & Web' },
      { label: 'Active Product', value: 'SASTRAcal' },
      { label: 'Venture Status', value: 'Active' }
    ]
  }
];

export const getPrimaryVenture = (): Venture => {
  return VENTURES.find((v) => v.isPrimary) || VENTURES[0];
};

export const getAllVentures = (): Venture[] => {
  return VENTURES;
};

export const getVentureById = (id: string): Venture | undefined => {
  return VENTURES.find((v) => v.id === id);
};
