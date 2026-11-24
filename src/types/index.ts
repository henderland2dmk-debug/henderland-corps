export interface Venture {
  id: string;
  name: string;
  tagline: string;
  status: 'Active' | 'Expanding' | 'Incubation' | 'Strategic';
  isPrimary?: boolean;
  foundedYear: string;
  description: string;
  extendedDescription?: string;
  coreAreas: string[];
  disciplines: {
    title: string;
    description: string;
  }[];
  externalUrl?: string;
  internalRoute?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  accentColor?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Digital Products' | 'Software Applications' | 'Web Development' | 'Creative Projects';
  ventureId: string;
  tagline: string;
  description: string;
  longDescription?: string;
  status: 'Live' | 'In Development' | 'Private Beta' | 'Architected';
  year: string;
  metrics?: string;
  technologies: string[];
  deliverables: string[];
  featured?: boolean;
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  items: string[];
}

export interface Philosophy {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}
