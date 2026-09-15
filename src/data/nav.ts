export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Studio', href: '/studio' },
  { label: 'Insights', href: '/insights' },
];

export const ctaLink: NavLink = { label: 'Start a Project', href: '/start-a-project' };

export const footerNav: NavLink[] = [
  ...primaryNav,
  { label: 'Privacy', href: '/privacy' },
];

export const siteMeta = {
  name: 'BLACKFRAME LAB',
  shortName: 'BLACKFRAME',
  tagline: 'Websites designed beyond launch.',
  description:
    'BLACKFRAME LAB is an independent web design studio. We design, build and evolve websites for brands that need a stronger digital presence.',
  url: 'https://blackframe-lab.netlify.app',
  email: 'studio@blackframelab.com',
  locale: 'en',
};
