# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese sewing factory website (峰田ソーイング) built with **Next.js 15**, **Tailwind CSS v4**, and **shadcn/ui**. It's a modern static website showcasing a sewing factory's services, capabilities, and company information, designed for GitHub Pages deployment.

## Architecture

**Next.js App Router Structure:**
- Next.js 15 with TypeScript and App Router
- Tailwind CSS v4 for styling
- shadcn/ui component library
- Static site generation with `output: 'export'`
- Responsive design with mobile-first approach

**Key Files & Directories:**
- `src/app/` - App Router pages
  - `page.tsx` - Homepage
  - `about/page.tsx` - Company information
  - `services/page.tsx` - Business services
  - `factory/page.tsx` - Factory introduction
  - `gallery/page.tsx` - Product gallery
  - `testimonials/page.tsx` - Customer testimonials
  - `faq/page.tsx` - Frequently asked questions
  - `contact/page.tsx` - Contact form and info
- `src/components/` - Shared components
  - `Navigation.tsx` - Header and navigation with hamburger menu
  - `Footer.tsx` - Site footer
  - `Layout.tsx` - Page layout wrapper
- `next.config.ts` - Next.js configuration for static export
- `tailwind.config.ts` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration

## Development

**Build Commands:**
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build and export static site
- `npm run lint` - Run ESLint

**Static Export Configuration:**
- `output: 'export'` in next.config.ts
- `trailingSlash: true` for GitHub Pages compatibility
- `images: { unoptimized: true }` for static hosting
- Static files output to `out/` directory

**Styling System:**
- Tailwind CSS v4 with custom design tokens
- Primary color: `blue-700` (#1d4ed8)
- Responsive breakpoints: `md:` (768px+), `lg:` (1024px+)
- Component-based styling with hover states and transitions

## Component Architecture

**Layout System:**
- `Layout` component wraps all pages
- Provides consistent navigation, footer, and CTA button
- Fixed header with mobile hamburger menu
- Responsive navigation that transforms on desktop

**Responsive Design:**
- Mobile-first approach with Tailwind classes
- Hamburger menu on mobile, horizontal nav on desktop
- Grid layouts that adapt to screen size
- Hover effects and micro-interactions

## Common Tasks

**Adding New Pages:**
1. Create `src/app/[page-name]/page.tsx`
2. Import and use `Layout` component
3. Add navigation link to `Navigation.tsx` and `Footer.tsx`
4. Follow existing page structure and styling patterns

**Static Deployment:**
1. Run `npm run build` to generate static files
2. Deploy `out/` directory to GitHub Pages
3. Ensure all paths use relative URLs for proper routing

**Styling Guidelines:**
- Use Tailwind utility classes for styling
- Follow existing color scheme with `blue-700` primary
- Implement hover states and transitions
- Ensure responsive design across all breakpoints

## Content Notes

- Site is entirely in Japanese
- Company name: 峰田ソーイング (Mineta Sewing)  
- Business focus: High-quality sewing, small-batch production, domestic manufacturing
- Professional corporate design with blue color scheme
- All content maintains consistency with original site structure