export type ProjectType = 'Self-Initiated Project' | 'Concept Project' | 'Unsolicited Redesign';

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  category: string;
  year: string;
  scope: string[];
  summary: string;
  featured: boolean;
  disclosure: string;
  context: string[];
  challenge: string[];
  strategy: string[];
  informationArchitecture: {
    intro: string;
    structure: string[];
  };
  ux: string[];
  visualSystem: {
    typography: string;
    grid: string;
    components: string;
    imageDirection: string;
  };
  keyScreens: { label: string; description: string }[];
  responsive: string;
  buildSystem: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: 'archetype-studio',
    title: 'Archetype Studio',
    type: 'Self-Initiated Project',
    category: 'Architecture / Interior Studio',
    year: '2025',
    scope: [
      'Strategy',
      'Information Architecture',
      'UX/UI',
      'Responsive Design',
      'Website System',
      'SEO Foundations',
    ],
    summary:
      'A premium website system for an architecture and interior studio, built to present a body of work with the same restraint as the work itself.',
    featured: true,
    disclosure:
      'Self-Initiated Concept Project. Archetype Studio is a fictional practice created to explore how an architecture and interior studio could present its work online.',
    context: [
      'Architecture and interior studios are judged on craft, yet many of their websites undersell the work — cluttered navigation, inconsistent image treatment, and copy that reads like a general contractor rather than a design authority.',
      'This project explores what a studio site looks like when the website is treated as a design object in its own right, not an afterthought to the portfolio PDF.',
    ],
    challenge: [
      'Present a broad range of project types — residential, hospitality, commercial — under one coherent visual identity without flattening what makes each project distinct.',
      'Give imagery room to carry the work while still providing enough structure for a visitor to understand scope, location and services at a glance.',
    ],
    strategy: [
      'Position the studio around process and point of view, not just finished imagery — visitors should understand how the studio thinks before they reach the project gallery.',
      'Structure the site so that a prospective client (architect-led project) and a design-literate collaborator (other studios, press) both find what they need within two clicks.',
    ],
    informationArchitecture: {
      intro:
        'The sitemap is deliberately shallow — depth is created through content density on each page, not through nested navigation.',
      structure: [
        'Home — positioning, selected work, studio philosophy',
        'Work — filterable index of projects by type',
        'Project — full case presentation per project',
        'Studio — practice background and approach',
        'Contact — direct inquiry path',
      ],
    },
    ux: [
      'A single, sticky project index lets visitors scan the full body of work without a paginated gallery breaking their attention.',
      'Each project page opens with a full-bleed hero image and a fixed meta panel (location, year, scope) that stays legible without competing with the imagery.',
      'Contact is reachable from every screen through a single, understated persistent link — no popups, no scroll-triggered modals.',
    ],
    visualSystem: {
      typography:
        'A single editorial sans-serif carries both display and body text, differentiated through scale, weight and spacing rather than a second decorative typeface.',
      grid:
        'A 12-column responsive grid with generous outer margins on desktop, collapsing to a single-column rhythm on mobile without changing the visual language.',
      components:
        'A restrained component set — project cards, meta panels, and a single CTA pattern — reused consistently rather than designed per page.',
      imageDirection:
        'Large-format, evenly lit photography with consistent aspect ratios across the grid, so the eye reads the collection rather than individual crops.',
    },
    keyScreens: [
      { label: 'Home — hero and selected work', description: 'Full-width introduction followed by a three-project selection with minimal supporting copy.' },
      { label: 'Work index', description: 'A dense, image-led grid with type and year as the only visible metadata until hover.' },
      { label: 'Project detail', description: 'Full-bleed imagery sequence with a fixed meta panel and long-form project narrative.' },
    ],
    responsive:
      'Desktop treats imagery as the primary navigation cue; mobile reduces the grid to a single column and moves meta information above the image sequence so context loads before visuals.',
    buildSystem: [
      'Content structured so each project is a self-contained entry — new work can be added without touching shared templates.',
      'Image containers reserve aspect ratio up front to avoid layout shift as galleries load.',
      'SEO foundations include descriptive project titles, structured headings, and metadata per project page.',
    ],
    outcome:
      'The final system demonstrates how an architecture or interior studio could support a clearer, more scalable and more coherent digital presence — one where the website reads with the same intention as the work it presents.',
  },
  {
    slug: 'still-house-wellness',
    title: 'Still House Wellness',
    type: 'Self-Initiated Project',
    category: 'Premium Wellness Service',
    year: '2025',
    scope: [
      'Conversion Strategy',
      'Information Hierarchy',
      'UX/UI',
      'CTA System',
      'Responsive Design',
    ],
    summary:
      'A conversion-focused landing page for a premium wellness service, designed to move a visitor from first impression to booked consultation without friction.',
    featured: true,
    disclosure:
      'Self-Initiated Concept Project. Still House Wellness is a fictional service created to explore a conversion-focused landing page structure for premium wellness businesses.',
    context: [
      'Premium wellness services often rely on referral and reputation, but still need a landing page that can carry a paid campaign or a direct link from social without leaking intent halfway through the page.',
      'This project explores a landing page built specifically for that scenario — a single service, a single audience, a single next step.',
    ],
    challenge: [
      'Communicate a premium, considered tone without slowing down the path to booking a consultation.',
      'Structure enough information to build trust — approach, what to expect, practicalities — while keeping the page short enough to hold attention on a single scroll session.',
    ],
    strategy: [
      'Order the page around the questions a prospective client actually has, in the order they have them: what is this, is it for me, what happens next, how do I start.',
      'Use one consistent call to action throughout, repeated at natural decision points rather than introduced once and forgotten.',
    ],
    informationArchitecture: {
      intro:
        'As a single landing page, the architecture is vertical rather than hierarchical — each section exists to answer one question before introducing the next.',
      structure: [
        'Hero — service and core value statement',
        'What to expect — the experience, step by step',
        'Who it is for — qualifying the visitor in or out early',
        'Booking — the primary conversion point',
      ],
    },
    ux: [
      'A persistent, unobtrusive booking CTA remains available in the header without becoming a sticky banner that fights the page for attention.',
      'Trust-building content (approach, practicalities) is placed before the booking form, not after, so the form meets a visitor who already has context.',
      'Form fields are kept to the minimum needed to start a conversation, with clear framing on what happens after submission.',
    ],
    visualSystem: {
      typography:
        'A calmer type scale than the studio’s architecture case — slightly larger line height and softer contrast, reflecting the tone of the service.',
      grid:
        'A narrower single-column content grid on desktop, intentionally avoiding a busy multi-column layout to keep focus linear.',
      components:
        'A repeating CTA button pattern, a step-based "what to expect" component, and a single-purpose booking form.',
      imageDirection:
        'Soft, natural-light photography treated consistently in tone to avoid the page feeling like a stock-image assembly.',
    },
    keyScreens: [
      { label: 'Hero', description: 'Single value statement with immediate access to the primary CTA.' },
      { label: 'What to expect', description: 'A step-based walkthrough of the service experience.' },
      { label: 'Booking section', description: 'A short, low-friction form paired with practical details.' },
    ],
    responsive:
      'The single-column structure translates directly to mobile with minimal adaptation; CTA placement is tuned so the button is always reachable within a thumb-friendly zone.',
    buildSystem: [
      'Built as a standalone, fast-loading template that could sit outside the main site structure for campaign use.',
      'Form logic and validation kept intentionally simple to reduce abandonment.',
      'Tracking considerations documented for form submissions and CTA clicks.',
    ],
    outcome:
      'The final system demonstrates how a premium wellness service could support a clearer conversion path — one built around the visitor’s actual questions rather than a generic landing page template.',
  },
  {
    slug: 'meridian-partners',
    title: 'Meridian Partners',
    type: 'Unsolicited Redesign',
    category: 'Professional Services',
    year: '2025',
    scope: [
      'Website Audit',
      'UX Restructuring',
      'Information Architecture',
      'UI Redesign',
      'Responsive Experience',
    ],
    summary:
      'An independent redesign exploring how a professional services website could better reflect the seniority and clarity of the practice behind it.',
    featured: true,
    disclosure:
      'Independent unsolicited redesign. BLACKFRAME LAB is not affiliated with or commissioned by the featured brand. Meridian Partners is a placeholder name used to represent the type of professional services business this redesign addresses.',
    context: [
      'Many professional services websites accumulate pages, services and messaging over years without a structural review, resulting in a site that is comprehensive but hard to navigate.',
      'This redesign responds to that pattern — a fictional but representative professional services website with dense content, unclear hierarchy and dated UI.',
    ],
    challenge: [
      'Reduce apparent complexity without removing the depth of information a prospective client actually needs before making contact.',
      'Modernize the interface without adopting a generic template look that would undersell the seniority of the practice.',
    ],
    strategy: [
      'Regroup services around client outcomes rather than internal department names, which is how the original structure was organized.',
      'Move credibility signals (experience, approach) earlier in the visitor journey, ahead of the dense service listings.',
    ],
    informationArchitecture: {
      intro:
        'The redesign consolidates a fragmented, deeply nested navigation into a flatter structure organized around three clear entry points.',
      structure: [
        'Home — positioning and entry points to services, approach, contact',
        'Services — restructured around outcomes',
        'Approach — how engagements work, replacing a scattered "about" structure',
        'Contact — a single, clear inquiry path',
      ],
    },
    ux: [
      'Replaced a mega-menu with a simplified navigation that surfaces only top-level categories, moving supporting detail into the pages themselves.',
      'Introduced consistent page templates so every service page follows the same reading pattern, reducing cognitive load across the site.',
      'Rebuilt forms and contact points so every page has a clear, low-friction way to start a conversation.',
    ],
    visualSystem: {
      typography:
        'Replaced a dated serif/sans combination with a single confident sans-serif system, using weight and scale to carry the hierarchy the old site relied on color for.',
      grid:
        'Introduced a consistent grid and spacing scale across all templates, replacing inconsistent per-page layouts.',
      components:
        'Standardized cards, section headers and CTA patterns so new pages could be added without design drift.',
      imageDirection:
        'Shifted from generic stock imagery to a restrained, consistent photographic and iconographic direction appropriate to a professional services context.',
    },
    keyScreens: [
      { label: 'Home', description: 'Restructured hero and service entry points replacing a dense, text-heavy original layout.' },
      { label: 'Services index', description: 'Outcome-based grouping replacing a department-based service list.' },
      { label: 'Service detail template', description: 'A consistent template applied across all service pages.' },
    ],
    responsive:
      'The original site’s desktop-first tables and multi-column layouts were rebuilt as responsive components that reflow cleanly on mobile rather than shrinking in place.',
    buildSystem: [
      'Proposed a component-based template system so services could be added or retired without a full redesign each time.',
      'Documented a redirect strategy to preserve existing indexed URLs through the information architecture change.',
      'Outlined SEO preservation considerations alongside the structural changes.',
    ],
    outcome:
      'The final system demonstrates how a professional services website could support a clearer, more scalable and more coherent digital presence — restructured around client outcomes rather than internal organization.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
