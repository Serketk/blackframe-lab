export interface PricingPackage {
  slug: string;
  index: string;
  name: string;
  priceRange: string;
  timeline: string;
  description: string;
  includes: string[];
  bestFor: string;
}

/**
 * Price ranges below are starting placeholders, not final quotes.
 * Replace with real numbers before launch — see README.
 */
export const pricingPackages: PricingPackage[] = [
  {
    slug: 'landing-page',
    index: '01',
    name: 'Landing Page',
    priceRange: '$900 – $2,000',
    timeline: '1–2 weeks',
    description: 'A single, focused page built around one campaign, offer, or service.',
    bestFor: 'A specific launch, ad campaign, or lead-generation offer that needs its own page.',
    includes: [
      'Messaging and conversion structure',
      'UX/UI design for one page',
      'Responsive, built page',
      'One lead form connected to email',
      'Basic analytics setup',
    ],
  },
  {
    slug: 'one-page-site',
    index: '02',
    name: 'One-Page Site',
    priceRange: '$1,200 – $2,800',
    timeline: '1–3 weeks',
    description: 'A complete single-page website covering everything a small business needs to say.',
    bestFor: 'A business that needs a real online presence but not a multi-page structure yet.',
    includes: [
      'Content structure across page sections',
      'UX/UI design',
      'Responsive, built site',
      'Contact form',
      'SEO foundations and analytics setup',
    ],
  },
  {
    slug: 'small-website',
    index: '03',
    name: 'Small Website',
    priceRange: '$2,800 – $5,500',
    timeline: '3–5 weeks',
    description: 'A multi-page website — typically 3 to 6 pages — with a simple content structure.',
    bestFor: 'Established businesses that need a proper website: home, services, about, contact, and a few more.',
    includes: [
      'Sitemap and information architecture',
      'UX/UI design across all pages',
      'Responsive, built website',
      'CMS setup for simple content updates',
      'Forms and integrations',
      'SEO foundations and analytics setup',
    ],
  },
  {
    slug: 'large-website',
    index: '04',
    name: 'Large Website',
    priceRange: '$6,000 – $15,000+',
    timeline: '6–10 weeks',
    description: 'A full-scope website — many pages, deeper content structure, more moving parts.',
    bestFor: 'Businesses with a broad service or product range, multiple audiences, or a content-heavy site including a blog.',
    includes: [
      'Full strategy and information architecture',
      'UX/UI design system across the site',
      'Responsive, built website',
      'CMS implementation for ongoing content',
      'Forms, integrations and CRM connections',
      'SEO foundations and analytics setup',
      'QA across devices before launch',
    ],
  },
  {
    slug: 'edits-revisions',
    index: '05',
    name: 'Edits & Revisions',
    priceRange: '$85/hr, or from $350/mo',
    timeline: 'Ongoing',
    description: 'Updates, fixes and small additions to a website that already exists — one-off or ongoing.',
    bestFor: 'A live website that needs new pages, content updates, or technical fixes without a full rebuild.',
    includes: [
      'Content and page updates',
      'New pages as needed',
      'Technical fixes',
      'Small UX/UI improvements',
      'Optional monthly care retainer instead of hourly billing',
    ],
  },
];
