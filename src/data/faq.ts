export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'What kind of businesses do you work with?',
    answer:
      'Established or growing businesses that care about design quality and need a stronger digital presence — often in architecture, interiors, hospitality, professional services, real estate, wellness or beauty. The studio is not locked to one industry.',
  },
  {
    question: 'How does a typical project work?',
    answer:
      'Every project moves through the same operating model: strategy, design, build, launch, grow. You work directly with the person designing and building the site — there is no account layer in between.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'It depends on scope — a landing page can take 1–2 weeks, a larger multi-page website closer to 6–10 weeks. Timelines are confirmed once the scope is defined, not before.',
  },
  {
    question: 'Do you work with an existing website, or only new builds?',
    answer:
      'Both. New Websites and Website Redesign cover ground-up builds and rebuilds of an existing site. Website Care & Growth covers ongoing updates to a site that already exists.',
  },
  {
    question: 'What platform do you build on?',
    answer:
      'The right foundation depends on the project — past work spans WordPress, Shopify, Wix, Squarespace and hand-built HTML/CSS. There is no default stack applied to every client regardless of fit.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes — Website Care & Growth is a post-launch partnership covering new pages, content publishing, technical fixes and ongoing UX/UI improvements, either as a monthly retainer or hourly.',
  },
];
