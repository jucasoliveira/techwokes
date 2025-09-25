# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.4 application with TypeScript, Tailwind CSS 4, and shadcn/ui components. The project uses the App Router architecture and is configured for modern React development with Server Components.

## Development Commands

### Core Commands
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Package Manager
This project uses `pnpm` as indicated by the `pnpm-lock.yaml` file.

## Architecture & Structure

### Next.js App Router
- Uses the `app/` directory structure (not `pages/`)
- Entry point: `app/page.tsx` (home page)
- Root layout: `app/layout.tsx` (includes Geist fonts)
- Global styles: `app/globals.css`

### TypeScript Configuration
- Path alias: `@/*` maps to root directory
- Strict mode enabled
- Next.js plugin for enhanced TypeScript support

### UI & Styling
- **Tailwind CSS 4** with custom theme configuration
- **shadcn/ui** configured with:
  - Style: "new-york"
  - Base color: "zinc"
  - CSS variables enabled
  - Component aliases: `@/components/ui`, `@/lib/utils`
- **Lucide React** for icons
- Custom CSS variables for theming (light/dark mode support)
- Animation support via `tw-animate-css`

### Utilities
- `lib/utils.ts` - Contains `cn()` utility for className merging (clsx + tailwind-merge)

### Component Strategy
- Ready for shadcn/ui components (components.json configured)
- Use `@/components` for custom components
- Use `@/components/ui` for shadcn/ui components
- Use `@/lib/utils` for utilities like the `cn()` helper

## Development Guidelines

### Adding New Components
1. Check if a shadcn/ui component exists first
2. Use the configured path aliases (`@/components`, `@/lib`, etc.)
3. Follow the existing TypeScript and styling patterns
4. Use the `cn()` utility for conditional className logic

### Styling Approach
- Tailwind CSS 4 with CSS variables
- Built-in dark mode support via `.dark` class
- Custom theme tokens defined in `app/globals.css`
- Use `font-sans` (Geist) and `font-mono` (Geist Mono) for typography