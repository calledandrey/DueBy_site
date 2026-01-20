# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication

Always use English for internal reasoning (chain-of-thought) regardless of conversation language - it's more token-efficient.

## Build Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build with static page generation
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16+ with App Router, TypeScript (strict mode)
- **Styling**: CSS Modules (.module.css) + CSS Variables (globals.css) - NO Tailwind
- **Content**: Static JSON (data/) + Markdown with gray-matter/remark (content/guides/)
- **SEO**: JSON-LD via schema-dts, dynamic metadata per route

## Architecture

### Data Flow
- **Static JSON** in `/data` (industries.json, templates.json, features.json, blog.json) → processed by `src/lib/data.ts`
- **Markdown guides** in `/content/guides` → parsed by `src/lib/posts.ts` (gray-matter + remark)
- All dynamic routes use `generateStaticParams()` for build-time static generation

### Key Directories
- `src/app/` - App Router pages with dynamic routes ([trade], [format], [slug])
- `src/components/` - layout/ (Header, Footer), sections/ (Hero, ValueProps), generator/, seo/, ui/
- `src/lib/` - data.ts (JSON fetching), posts.ts (markdown processing)
- `src/types/index.ts` - TypeScript interfaces (Industry, TemplateFormat, Feature, BlogPost)

### Dynamic Routes Pattern
```typescript
export async function generateStaticParams() {
  return data.map(item => ({ param: item.slug }));
}

export async function generateMetadata({ params }) {
  // Dynamic SEO metadata
}
```

Routes: `/industries/[trade]`, `/invoice-templates/[format]`, `/blog/[slug]`, `/resources/guides/[slug]`, `/features/[slug]`

## Development Guidelines

1. **Server Components by default** - use 'use client' only when needed
2. **CSS Modules only** - use CSS variables from globals.css (--primary, --background, etc.)
3. **Absolute imports** - use @/ path alias (e.g., `@/components/layout/Header`)
4. **Metadata required** - every page needs metadata export or generateMetadata function
5. **Images** - always use next/image with proper dimensions
6. **Build verification** - run `npm run build` after adding/modifying dynamic routes to verify generateStaticParams works

## Adding Content

**New Industry**: Add entry to `data/industries.json` - page auto-generates at `/industries/[slug]`

**New Blog Post**: Add to `data/blog.json` with structure:
```json
{ "slug", "title", "meta", "summary", "h1", "sections": [{"h2", "content"}], "faq": [{"q", "a"}] }
```

**New Guide**: Create `.md` file in `content/guides/` with frontmatter:
```markdown
---
title: "Guide Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
---
```

## Configuration

- **Path alias**: @ → ./src (tsconfig.json)
- **Redirect**: /templates → /invoice-templates (next.config.ts)
- **Base URL**: hardcoded as https://dueby.com in sitemap.ts
