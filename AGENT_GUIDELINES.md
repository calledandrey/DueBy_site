# DueBy Developer & Agent Guidelines

This document serves as the source of truth for all developers and AI agents working on the DueBy website. Follow these conventions to ensure consistency, performance, and maintainability.

## 1. Tech Stack Overview
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules (`.module.css`) + Global CSS Variables
- **Content:** JSON (Data) + Markdown/MDX (Guides)
- **Analytic/SEO:** Google Analytics 4, Schema.org (JSON-LD)

## 2. Project Structure
- `src/app`: Page routes and layouts. Use `page.tsx`, `layout.tsx`, `loading.tsx`.
- `src/components`: React components.
    - `/ui`: Atomic, reusable UI elements (Buttons, Inputs).
    - `/layout`: Global layout components (Header, Footer).
    - `/sections`: Page-specific sections (Hero, ValueProps).
- `src/lib`: Utility functions, data fetching logic (`posts.ts`, `data.ts`).
- `src/types`: TypeScript interfaces and types.
- `data`: Static JSON data for structural content (Industries, Templates).
- `content`: Markdown files for articles and guides.

## 3. Styling Guidelines
- **Methodology:** Use **CSS Modules** for component-level styling.
- **Variables:** fluidly use CSS variables defined in `src/app/globals.css` (e.g., `var(--primary)`, `var(--muted-foreground)`).
- **Responsive Design:** Mobile-first approach. Use media queries (`@media (min-width: ...)`).
- **Theme:** Support Dark Mode via `prefers-color-scheme`. Global variables handle this automatically.
- **Restriction:** Do NOT use Tailwind CSS unless explicitly authorized for a complete refactor.

## 4. Content Management
- **Industries/Templates:** To add a new industry or template format, edit `data/industries.json` or `data/templates.json`. The site automatically generates static pages based on these files.
- **Guides:** Add new guides as `.md` or `.mdx` files in `content/guides/`. Frontmatter must include `title`, `date`, and `excerpt`.

## 5. SEO & Performance
- **Metadata:** Every page must export a `metadata` object or `generateMetadata` function.
- **Images:** Use `next/image` for all images to ensure optimization.
- **Links:** Use `next/link` for internal navigation.
- **Schema:** Use the `<JsonLd />` component to inject structured data (SoftwareApplication, Article, etc.).

## 6. Code Style
- **TypeScript:** Strict mode is enabled. Define interfaces for all props and data structures.
- **Imports:** Use absolute imports `@/` (e.g., `import { Header } from '@/components/layout/Header'`).
- **Naming:** PascalCase for components (`Hero.tsx`), camelCase for functions/vars.

## 7. Development Workflow
- **Server Check:** **CRITICAL:** Every time code is modified, you MUST verify if the local server (`npm run dev`) is running. If it is not running, you MUST start it immediately.
- **Build Verification:** Always run `npm run build` after creating dynamic routes to verify `generateStaticParams`.
- **Linting:** Respect ESLint rules. Fix errors before committing.
- **Server Communication:** When the server is restarted, you MUST provide instructions and the localhost URL (e.g., `http://localhost:3000`) where the user can verify the application.
