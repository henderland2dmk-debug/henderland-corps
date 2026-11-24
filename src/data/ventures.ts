import { Venture } from '@/types';

/**
 * CENTRALIZED VENTURE ARCHITECTURE
 * 
 * HENDERLAND CORPS operates as a venture studio.
 * As per corporate mandate, HENDERLAND CREATIONS is currently the single primary active venture.
 * To add future ventures, simply append a new Venture object to the `VENTURES` array.
 * The system automatically scales from single-venture spotlight to multi-venture grid without code changes.
 */
export const VENTURES: Venture[] = [
  {
    id: 'henderland-creations',
    name: 'HENDERLAND CREATIONS',
    tagline: 'The creative & technology engine of HENDERLAND CORPS',
    status: 'Active',
    isPrimary: true,
    foundedYear: '2024',
    description:
      'HENDERLAND CREATIONS is the creative and technology-driven venture of HENDERLAND CORPS, focused on developing digital products, software applications, innovative solutions and creative experiences.',
    extendedDescription:
      'Operating at the intersection of engineering rigor and design precision, HENDERLAND CREATIONS acts as the core creative powerhouse of HENDERLAND CORPS. We conceptualize, prototype, and build proprietary digital products and scalable technological solutions that transform ambitious ideas into high-impact reality.',
    coreAreas: [
      'Digital Product Development',
      'Software Applications',
      'Web Development',
      'Technology Solutions',
      'Creative Projects',
      'Product Innovation',
    ],
    disciplines: [
      {
        title: 'Digital Product Development',
        description: 'End-to-end product design, user research, rapid prototyping, and high-velocity iteration.'
      },
      {
        title: 'Software Applications',
        description: 'Robust, secure, and performant web & multi-platform software solutions.'
      },
      {
        title: 'Web Development',
        description: 'Bespoke web architectures, modern interactive web platforms, and lightning-fast digital environments.'
      },
      {
        title: 'Technology Solutions',
        description: 'Scalable system architecture, cloud integration, API design, and automation pipelines.'
      },
      {
        title: 'Creative Projects',
        description: 'Multidisciplinary creative direction, digital brand systems, and engaging interactive experiences.'
      },
      {
        title: 'Product Innovation',
        description: 'R&D on emerging technologies, experimental interfaces, and transformative business models.'
      }
    ],
    stats: [
      { label: 'Studio Focus', value: 'Creative & Tech' },
      { label: 'Execution Model', value: 'End-to-End' },
      { label: 'Architecture', value: 'Scalable' },
      { label: 'Status', value: 'Active Venture' }
    ],
    accentColor: 'silver'
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
