export interface ServiceOffer {
  slug: string;
  index: string;
  name: string;
  summary: string;
  whoFor: string;
  typicalScope: string[];
  weHandle: string[];
  deliverables: string[];
}

export const services: ServiceOffer[] = [
  {
    slug: 'new-websites',
    index: '01',
    name: 'New Websites',
    summary:
      'For companies that need a website built from the ground up — from first structure to launch.',
    whoFor:
      'Businesses without an existing website, or with one that no longer represents a starting point worth keeping.',
    typicalScope: [
      'Strategy and content direction',
      'Information architecture',
      'UX and UI design',
      'Responsive design across devices',
      'CMS implementation',
      'Forms and integrations',
      'SEO foundations',
      'Analytics setup',
      'QA and launch',
    ],
    weHandle: [
      'Structuring the site around how the business actually communicates and sells',
      'Designing interfaces built for real content, not placeholder text',
      'Building a responsive, production-ready site',
      'Setting up a content structure the client can manage after handover',
      'Preparing the site for search and measurement from day one',
    ],
    deliverables: [
      'Sitemap and information architecture',
      'UX wireframes',
      'UI design system for the site',
      'Fully responsive, built website',
      'Working forms and integrations',
      'SEO foundations and analytics setup',
    ],
  },
  {
    slug: 'website-redesign',
    index: '02',
    name: 'Website Redesign',
    summary:
      'For companies whose existing website no longer reflects the business, its positioning, or how it wants to be perceived.',
    whoFor:
      'Businesses with a live website that has become outdated, inconsistent, hard to manage, or misaligned with where the business is now.',
    typicalScope: [
      'Website audit',
      'UX restructuring',
      'Information hierarchy',
      'UI redesign',
      'Rebuild',
      'Content migration',
      'Redirects',
      'SEO preservation',
      'Responsive QA',
    ],
    weHandle: [
      'Auditing the current site for structural, UX and content problems',
      'Rebuilding the information hierarchy around what matters most to visitors',
      'Redesigning the interface without discarding what already performs',
      'Migrating existing content without losing what already works',
      'Preserving indexed URLs and search equity through careful redirects',
    ],
    deliverables: [
      'Website audit findings',
      'Revised sitemap and hierarchy',
      'Redesigned UI system',
      'Rebuilt, responsive website',
      'Content migration and redirect map',
    ],
  },
  {
    slug: 'landing-pages',
    index: '03',
    name: 'Landing Pages',
    summary:
      'For campaigns, service launches, offers and lead generation that need a page built to convert, not just to exist.',
    whoFor:
      'Businesses running a specific campaign, launching a new service, or needing a dedicated page for a paid or referral channel.',
    typicalScope: [
      'Messaging hierarchy',
      'Conversion structure',
      'UX/UI design',
      'CTA architecture',
      'Responsive build',
      'Lead forms',
      'Analytics and tracking',
    ],
    weHandle: [
      'Structuring the page around a single, clear objective',
      'Designing a messaging hierarchy that leads to the call to action',
      'Building lead forms that connect to how the business actually follows up',
      'Setting up tracking so performance can be measured, not guessed at',
    ],
    deliverables: [
      'Messaging and conversion structure',
      'UX/UI design for the page',
      'Responsive, built landing page',
      'Connected lead form',
      'Analytics and tracking setup',
    ],
  },
  {
    slug: 'website-care-growth',
    index: '04',
    name: 'Website Care & Growth',
    summary:
      'A post-launch partnership for businesses that need their website maintained, extended and improved over time.',
    whoFor:
      'Businesses with a live website that needs an ongoing owner — someone who can add pages, publish content and keep it technically sound.',
    typicalScope: [
      'New pages',
      'Website updates',
      'Content publishing',
      'Blog implementation',
      'On-page optimization',
      'Analytics monitoring',
      'Technical fixes',
      'Ongoing UX/UI improvements',
      'Landing pages',
      'Website management',
    ],
    weHandle: [
      'Acting as the ongoing point of contact for the website',
      'Publishing new content and pages as the business needs them',
      'Monitoring analytics and flagging what the data shows',
      'Making incremental UX/UI improvements based on how the site is actually used',
      'Handling technical fixes before they become visible problems',
    ],
    deliverables: [
      'A defined monthly or project-based scope of work',
      'New pages and content as needed',
      'Ongoing technical maintenance',
      'Periodic analytics review',
    ],
  },
];

export interface AdditionalSupportItem {
  name: string;
  description: string;
}

export const additionalDigitalSupport: AdditionalSupportItem[] = [
  {
    name: 'Campaign assets',
    description: 'Supporting visuals built to match a specific campaign or launch page.',
  },
  {
    name: 'Social media graphics',
    description: 'Graphics adapted from the website system for use on social channels.',
  },
  {
    name: 'Digital launch assets',
    description: 'Supporting materials needed around a website launch.',
  },
];

export interface ProcessStage {
  index: string;
  name: string;
  description: string;
}

export const lifecycleStages: ProcessStage[] = [
  {
    index: '01',
    name: 'Strategy',
    description:
      'We define what the website needs to do, for whom, and how it fits the business behind it.',
  },
  {
    index: '02',
    name: 'Design',
    description:
      'Information architecture, UX and UI decisions are made together, with implementation in mind from the start.',
  },
  {
    index: '03',
    name: 'Build',
    description:
      'The site is built to be responsive, fast, and manageable — not just visually finished.',
  },
  {
    index: '04',
    name: 'Launch',
    description:
      'QA, redirects, analytics and search foundations are checked before anything goes live.',
  },
  {
    index: '05',
    name: 'Grow',
    description:
      'After launch, the website is maintained, extended and improved as the business changes.',
  },
];

export const engagementProcess: ProcessStage[] = [
  { index: '01', name: 'Discover', description: 'Understand the business, the goal of the website, and the constraints around it.' },
  { index: '02', name: 'Structure', description: 'Define the sitemap, information architecture and content hierarchy.' },
  { index: '03', name: 'Design', description: 'Design the UX and UI system across the required pages and states.' },
  { index: '04', name: 'Build', description: 'Build the site to be responsive, accessible and ready for real content.' },
  { index: '05', name: 'Launch', description: 'QA, test, and move the site live with search and analytics foundations in place.' },
  { index: '06', name: 'Evolve', description: 'Maintain, extend and improve the website as the business grows.' },
];

export const capabilities: string[] = [
  'Strategy',
  'Information Architecture',
  'UX/UI',
  'Responsive Design',
  'CMS Builds',
  'Website Migration',
  'Forms & Integrations',
  'SEO Foundations',
  'Analytics',
  'QA',
  'Launch',
  'Content Implementation',
  'Ongoing Management',
];

export const differentiators = [
  {
    name: 'End-to-End Ownership',
    description: 'The work does not stop at the design file. It carries through to a built, launched, working website.',
  },
  {
    name: 'Design With Production In Mind',
    description: 'UX and UI decisions are made with implementation, responsiveness and content management in mind from the start.',
  },
  {
    name: 'Built For After Launch',
    description: 'Structure, analytics, search foundations and future pages are considered from the first draft, not added later.',
  },
  {
    name: 'Direct Collaboration',
    description: 'Clients work directly with the person designing and building the experience — no account layers in between.',
  },
];

export const experienceCapabilities: string[] = [
  'UX/UI',
  'Web Design',
  'Responsive Design',
  'WordPress',
  'Elementor',
  'Shopify',
  'Wix',
  'Squarespace',
  'HTML/CSS',
  'Website Migration',
  'Website Launch',
  'QA',
  'Content Implementation',
  'Lead Forms',
  'CRM Integrations',
  'GA4',
  'Google Tag Manager',
  'Google Search Console',
  'On-page SEO',
  'Website Management',
];

export const projectTypeOptions = [
  'New Website',
  'Website Redesign',
  'Landing Page',
  'Website Care & Growth',
  'Not Sure Yet',
] as const;

export const budgetRangeOptions = [
  'Under $3,000',
  '$3,000 – $6,000',
  '$6,000 – $12,000',
  '$12,000+',
  'Not sure yet',
] as const;

export const timelineOptions = [
  'As soon as possible',
  'Within 1–2 months',
  'Within 3–6 months',
  'No fixed timeline',
] as const;
