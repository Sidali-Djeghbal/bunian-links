# Bunian — بنيان

[![Astro](https://img.shields.io/badge/Astro-151515?logo=astro&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](#)

A centralized landing page for the Bunian project family — a static site built with Astro that aggregates social profiles, contact links, and information for multiple initiatives under the Bunian umbrella.

**Overview**

- **Project**: Bunian (بنيان) — an initiative hub landing page.
- **Purpose**: Provide a single, shareable page that lists Bunian's branches: *Algerian Tech Makers*, *نفس طبي*, *بعبق القرآن نحيا*, *مغلوبة فانتصر*, and *تذوق كتابا*.

**Key Features**

- **Branch hub**: Each branch has its own section with links to social media, websites, and resources (configured in `src/data/home.ts`).
- **Marquee ticker**: Rotating display of branch names and branding.
- **Componentized UI**: Reusable components under `src/components/home`, enabling easy updates and theming.
- **Fast static site**: Built with Astro for fast static output.
- **Responsive styling**: Tailwind CSS-based utility classes for mobile-first responsiveness.
- **Custom SVG icons**: Lightweight inline SVG icons defined in `src/data/social-icons.ts` (no external icon packs required).
- **Smooth scrolling**: Powered by Lenis for a polished scroll experience.

**Tech Stack**

- Framework: Astro
- Styling: Tailwind CSS
- Language: TypeScript
- Smooth scroll: Lenis
- Package managers: `bun`, `npm`, or `pnpm`

**Getting Started (local)**

```bash
git clone https://github.com/Sidali-Djeghbal/bunian
cd bunian
bun install
bun run dev
```

Common scripts (see `package.json`):

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview"
}
```

**Project Structure (high level)**

- Config: [astro.config.mjs](astro.config.mjs), [tailwind.config.mjs](tailwind.config.mjs), [tsconfig.json](tsconfig.json)
- Public assets: `public/assets/` (images, fonts)
- Pages: [src/pages/index.astro](src/pages/index.astro), [src/pages/404.astro](src/pages/404.astro)
- Layouts: [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- Components: `src/components` and `src/components/home` (UI building blocks)
- Data:
  - [src/data/home.ts](src/data/home.ts) — branch definitions (name, slogan, links, images)
  - [src/data/social-icons.ts](src/data/social-icons.ts) — inline SVG icon definitions
  - [src/data/marquee-titles.ts](src/data/marquee-titles.ts) — marquee text configuration
- Styles: [src/styles/global.css](src/styles/global.css)

**How branches are configured**

1. Open [src/data/home.ts](src/data/home.ts).
2. Each branch has a `name`, `slogan`, `description`, `links` array, and `image`.
3. Add or update entries to add new branches.

Example:

```ts
{
  name: "My Branch",
  title: "Branch Title",
  slogan: "A short slogan",
  description: "A longer description of the branch.",
  links: [
    { name: "Facebook", icon: "fb", url: "https://...", color: "hover:bg-blue-500/10" },
  ],
  accent: "#123456",
  imageSrc: "/assets/my-branch.webp",
  imageAlt: "My Branch",
}
```

**How icons work**

Icons are inline SVGs defined in `src/data/social-icons.ts`. Each key corresponds to an `icon` field in a branch link. To add a new icon, add a new entry with an SVG string.

**Deployment**

- Hosts: Netlify, Cloudflare Pages are recommended for static deployments.
- Build: `bun run build` — output is written to `dist/`.

**Customization**

- Update branch copy in `src/data/home.ts` to change titles, descriptions, and links.
- Edit marquee text in `src/data/marquee-titles.ts`.
- Add or edit components inside `src/components` to change layout or add new sections.
