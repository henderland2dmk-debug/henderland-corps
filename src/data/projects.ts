import { Project } from '@/types';

/**
 * AUTHENTIC PORTFOLIO DATA
 * 
 * Only verified projects and initiatives are showcased here.
 * No fictional or hypothetical projects are included.
 */
export const PROJECTS: Project[] = [
  {
    id: 'sastracal',
    title: 'SASTRAcal',
    category: 'Health & Fitness / Android Application',
    ventureId: 'henderland-creations',
    tagline: 'Smart Nutrition, Calorie, Fitness & Habit Tracking',
    description:
      'SASTRAcal is a smart nutrition, calorie, fitness and habit-tracking application built for SASTRA University students. It helps users log meals, monitor calorie intake and maintain daily routines through a simple digital experience.',
    features: [
      'Nutrition tracking',
      'Calorie tracking',
      'Fitness tracking',
      'Habit tracking'
    ],
    status: 'Live on Google Play',
    externalUrl: 'https://play.google.com/store/apps/details?id=com.sastragym.sastragym',
    actionLabel: 'View on Google Play',
    featured: true
  },
  {
    id: 'henderland-creations-initiative',
    title: 'HENDERLAND CREATIONS',
    category: 'Digital Product Development / Creative Technology',
    ventureId: 'henderland-creations',
    tagline: 'Creative & Technology Studio Venture',
    description:
      'HENDERLAND CREATIONS is the creative and technology-driven venture of HENDERLAND CORPS, focused on developing practical Android applications, digital products and thoughtfully built technology solutions.',
    features: [
      'Android application development',
      'Digital product engineering',
      'Practical software solutions',
      'Creative technology exploration'
    ],
    status: 'Active Venture',
    externalUrl: 'https://ncrafts.cc/henderland-creations/',
    actionLabel: 'Explore Henderland Creations',
    featured: true
  }
];

export const PROJECT_CATEGORIES = [
  'All',
  'Health & Fitness',
  'Digital Product Development'
] as const;
