export interface Venture {
  id: string;
  name: string;
  tagline: string;
  status: 'Active' | 'Expanding' | 'Incubation' | 'Strategic';
  isPrimary?: boolean;
  description: string;
  extendedDescription?: string;
  focusAreas: string[];
  externalUrl?: string;
  playStoreUrl?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  ventureId: string;
  tagline: string;
  description: string;
  features?: string[];
  status: string;
  externalUrl: string;
  actionLabel: string;
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  handle: string;
  instagramUrl: string;
  initials: string;
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
