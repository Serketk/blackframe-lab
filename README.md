# BLACKFRAME LAB

The website for BLACKFRAME LAB, an independent web design studio. Built with Astro, TypeScript and modern CSS — no UI framework, minimal client-side JavaScript.

## Tech stack

- [Astro](https://astro.build) (static output)
- TypeScript
- Plain CSS (custom properties, no Tailwind)
- Astro Content Collections for the Insights articles
- [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) for the project inquiry form

## Local setup

Requires Node.js 22.19+ and npm.

```bash
npm install
```

Start the dev server (defaults to `http://localhost:4321`):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

The static site is output to `dist/`. Preview the production build locally:

```bash
npm run preview
```

Type-check the project (Astro + TypeScript):

```bash
npm run check
```

## Deploying to Netlify

1. Push this repository to GitHub/GitLab/Bitbucket, or drag-and-drop the `dist/` folder into Netlify for a one-off deploy.
2. In Netlify, create a new site from the repository. Build settings are already defined in `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Netlify detects the `<form name="project-inquiry" data-netlify="true">` in `/start-a-project` automatically at build/deploy time — no extra configuration is required for form submissions to start working once the site is live. Submissions (and spam caught by the honeypot field) appear under **Site configuration → Forms** in the Netlify dashboard.
4. Update `site` in `astro.config.mjs` and `siteMeta.url` in `src/data/nav.ts` to your final production domain once you know it (used for canonical URLs, Open Graph tags, and the sitemap).

No SPA redirect rules are configured or needed — this is a fully static, multi-page site, and Netlify's default 404 handling picks up `dist/404.html` automatically.

## Editing site copy

Most copy lives in structured data files, not hard-coded in pages:

- **Navigation, brand name, tagline, contact email:** [`src/data/nav.ts`](src/data/nav.ts)
- **Services (New Websites, Redesign, Landing Pages, Care & Growth), capabilities, process steps, differentiators, form dropdown options:** [`src/data/services.ts`](src/data/services.ts)
- **Case studies / portfolio projects:** [`src/data/projects.ts`](src/data/projects.ts)
- **Studio page prose:** directly in [`src/pages/studio.astro`](src/pages/studio.astro)
- **Privacy policy:** directly in [`src/pages/privacy.astro`](src/pages/privacy.astro)

Editing any of these files updates every page that references them (e.g. changing a service in `services.ts` updates both the homepage "Core Offer" section and the `/services` page).

## Adding a new project (case study)

1. Open [`src/data/projects.ts`](src/data/projects.ts).
2. Add a new object to the `projects` array following the existing `Project` shape — `slug`, `title`, `type`, `category`, `year`, `scope`, `summary`, `disclosure`, and the full case-study sections (`context`, `challenge`, `strategy`, `informationArchitecture`, `ux`, `visualSystem`, `keyScreens`, `responsive`, `buildSystem`, `outcome`).
3. Set `featured: true` if it should appear in the "Selected Work" section on the homepage (only the first 3 featured projects are shown there).
4. **Always fill in `type` and `disclosure` honestly.** Every project must be clearly labeled as `Self-Initiated Project`, `Concept Project`, or `Unsolicited Redesign`, with a disclosure sentence — this is a hard content rule for the site, not just a style choice.
5. The page at `/work/[slug]` and its meta/SEO tags are generated automatically — no new page file is needed.
6. Add the project's images (see below) and swap them into the relevant `ImagePlaceholder` usages if you convert the case study to use real imagery.

## Replacing project images

The site ships with structured placeholder image blocks (`src/components/ImagePlaceholder.astro`) instead of real photography, so there's nothing to break visually before real assets exist. To swap in real images:

1. Add your image files under `public/images/work/<project-slug>/`.
2. In `src/components/ProjectCard.astro`, `src/components/ProjectHero.astro`, and `src/layouts/CaseStudyLayout.astro`, replace the relevant `<ImagePlaceholder ... />` usage with a real `<img>` (or Astro's `<Image>` component if you add `@astrojs/image` later), making sure to set explicit `width`/`height` (or a wrapping `aspect-ratio`) to avoid layout shift.
3. Replace `public/images/og/default.svg` with a real 1200×630 PNG/JPG for social share previews, and update the `image` prop passed to `<Seo />` per page if you want per-page OG images.

## Adding a new Insight article

Articles are Markdown files in `src/content/insights/`, defined as an Astro Content Collection (schema in `src/content.config.ts`).

1. Create a new file, e.g. `src/content/insights/your-article-slug.md`. The filename becomes the URL slug (`/insights/your-article-slug`).
2. Add frontmatter matching the schema:

   ```md
   ---
   title: "Your article title"
   intro: "One or two sentences shown on article cards and in the meta description."
   date: 2026-01-15
   readingTime: "5 min read"
   topic: "Strategy"
   related: "why-beautiful-websites-still-fail"   # optional — filename slug of a related article
   draft: false                                    # optional — set true to hide from all listings
   ---

   Article body in Markdown goes here.
   ```

3. That's it — the article automatically appears in `/insights`, in the homepage's latest-3 list (sorted by `date`), and gets its own SEO metadata and `Article` structured data.

## Project structure

```
src/
  components/    Reusable UI pieces (Header, Footer, ProjectCard, ServiceSection, InquiryForm, etc.)
  layouts/       Page shells (BaseLayout, CaseStudyLayout, ArticleLayout)
  pages/         File-based routes
  data/          Structured content: nav, services, projects
  content/       Markdown content collection (Insights articles)
  styles/        Global CSS and design tokens
public/          Static assets (favicon, robots.txt, OG image, images)
```

## Notes on content honesty

The portfolio work shown on this site consists of self-initiated concept projects and one independent unsolicited redesign — not commissioned client work. Every project page discloses this clearly and prominently, and no fabricated metrics, client names, testimonials, or team members are used anywhere on the site. Keep this intact when adding real client work: mark real, commissioned projects distinctly from concept work.
