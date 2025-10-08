# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a LaunchHPC marketing website built using the LaunchHPC Astro Template (originally from shadcnblocks.com). The site uses Astro 5.x with React components, Tailwind CSS, and shadcn/ui components. The project maintains the original design while focusing entirely on LaunchHPC's AI/HPC orchestration platform.

## ⚠️ CRITICAL: Team Data Protection

**NEVER modify `src/config/team.json` unless explicitly requested.** This file contains accurate, real team member information including:

- Names, roles, and departments
- Email addresses and LinkedIn profiles
- Biographical information and professional backgrounds
- Profile image paths

This data represents actual ThisWay Global employees and executives. Only make changes when specifically asked to update team information.

## Key Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Format and lint code (Prettier + ESLint)

# Content Management
npm run astro        # Access Astro CLI commands
```

## Architecture Overview

### Core Technologies

- **Astro 5.x**: Static site generator with component islands
- **React 19**: For interactive components (with `client:load` directive)
- **Tailwind CSS 4.x**: Styling with custom CSS variables
- **shadcn/ui**: Component library ported to Astro
- **Starlight**: Documentation system integration

### Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (Button, Card, etc.)
│   ├── sections/     # Page sections (Hero, Features, etc.)
│   ├── layout/       # Header, Footer, Navigation
│   └── magicui/      # Animation components
├── content/
│   ├── docs/         # Starlight documentation pages
│   └── changelog/    # Changelog entries (MDX)
├── layouts/          # Astro layouts
├── pages/            # Astro pages and routes
├── lib/              # Utilities and helpers
├── hooks/            # React hooks
└── styles/           # Global CSS
```

### Content System

- **Starlight Integration**: Documentation at `/docs` route with sidebar navigation (uses .md files in `src/content/docs/`)
- **MDX Content**: Changelog entries use MDX with frontmatter (`src/content/changelog/`)
- **Dynamic Imports**: React components loaded with `client:load` directive for interactivity
- **Static Prerendering**: Pages use `export const prerender = true` for static generation

### Key Configuration Files

- `astro.config.mjs`: Astro configuration with Starlight, React, Tailwind, and Netlify adapter
- `components.json`: shadcn/ui configuration with @shadcnblocks registry
- `tsconfig.json`: TypeScript configuration with path aliases (@/, @components/, @layouts/, @lib/)
- `tailwind.config`: Tailwind 4.x with CSS variable-based theming

## LaunchHPC Content Strategy

This site has been fully updated from a generic automation tool to LaunchHPC's AI/HPC orchestration platform. All content has been transformed to focus on enterprise-grade compute orchestration.

### Primary Content Files

- `src/components/sections/hero.tsx` - Main hero section
- `src/components/sections/features.tsx` - Feature highlights
- `src/components/sections/features2.tsx` - Secondary features
- `src/components/sections/ai-automation.tsx` - AI automation focus
- `src/components/sections/about-*.tsx` - About page sections
- `src/content/docs/*.mdx` - Documentation content

### LaunchHPC Context (from ABOUT_LHPC.md)

LaunchHPC is an AI/HPC orchestration platform targeting multiple personas:

- **OEMs** (Supermicro, Dell, HPE): Hardware-to-solution partnerships
- **Neoclouds** (CoreWeave, Lambda Labs): Infrastructure efficiency and revenue growth
- **Enterprises**: Unified compute across fragmented landscapes
- **Federal/Defense**: Mission-critical secure computing
- **SLED**: Democratized HPC for research and education
- **Partners** (Red Hat, NVIDIA): Integrated solution delivery

## shadcn MCP Integration - MANDATORY USAGE

**CRITICAL**: This project MUST use ONLY components and blocks from the @shadcnblocks registry. Custom component creation is prohibited unless no suitable block exists in the registry.

### Available Registries

- `@shadcn`: Standard shadcn/ui components
- `@shadcnblocks`: Premium blocks and templates (requires API key)

### MANDATORY shadcn MCP Commands

```bash
# Search for components/blocks (REQUIRED FIRST STEP)
mcp__shadcn__search_items_in_registries(registries: ["@shadcnblocks"], query: "hero")
mcp__shadcn__search_items_in_registries(registries: ["@shadcnblocks"], query: "pricing")
mcp__shadcn__search_items_in_registries(registries: ["@shadcnblocks"], query: "enterprise")
mcp__shadcn__search_items_in_registries(registries: ["@shadcnblocks"], query: "cta")

# View component details (REQUIRED BEFORE INSTALLATION)
mcp__shadcn__view_items_in_registries(items: ["@shadcnblocks/pricing-section"])

# Find usage examples (RECOMMENDED)
mcp__shadcn__get_item_examples_from_registries(registries: ["@shadcnblocks"], query: "pricing-demo")

# Get add commands (REQUIRED FOR INSTALLATION)
mcp__shadcn__get_add_command_for_items(items: ["@shadcnblocks/hero-section"])
```

### MANDATORY Workflow for Adding New Sections

1. **ALWAYS** search @shadcnblocks registry first for relevant blocks
2. **NEVER** create custom components without exhausting shadcnblocks options
3. View component details and examples before installation
4. Get the CLI add command and run it with proper conflict resolution
5. Customize ONLY content for LaunchHPC context (keep all structure/design)
6. Integrate into appropriate pages

### Component Installation Rules

- **ALWAYS** use `echo "y" | npx shadcn@latest add ...` to auto-accept overwrite prompts
- **NEVER** skip searching the registry for existing solutions
- **ALWAYS** prefer @shadcnblocks components over custom implementations
- If installation conflicts occur, resolve by accepting overwrites unless explicitly harmful

### Content Replacement Guidelines

- **Keep Design**: Maintain visual hierarchy, animations, and UI patterns
- **Replace Text**: Update all copy to LaunchHPC messaging and use cases
- **Preserve Media Placeholders**: Leave image sources as-is for later replacement
- **Maintain Component Structure**: Keep React component patterns and props

## Development Notes

### React Component Usage

- Components requiring interactivity use `client:load` directive in Astro pages
- TypeScript is used throughout for type safety
- Custom hooks in `src/hooks/` for React functionality
- Import paths use TypeScript aliases: `@/components`, `@/lib`, `@/layouts`, etc.

### Styling Approach

- Tailwind CSS 4.x with custom CSS variables for theming
- Component-scoped styling using Tailwind classes
- Dark/light mode support through CSS variables
- Global styles in `src/styles/global.css`

### Content Management

- Starlight handles documentation routing and navigation automatically
- Documentation pages are markdown files (.md) in `src/content/docs/`
- Changelog entries use MDX (.mdx) in `src/content/changelog/`
- MDX files support rich formatting, code blocks, and React components

### Build and Deployment

- Output mode: `static` (fully static site generation)
- Adapter: Netlify (`@astrojs/netlify`)
- All pages use `export const prerender = true` for static generation
- Build creates static HTML that can be deployed to any static host

## Environment Setup

Required:
- Node.js 18+
- npm or pnpm

Environment Variables:
- `SHADCNBLOCKS_API_KEY` - **Required** for installing premium blocks from @shadcnblocks registry (set in components.json)

The site should run immediately after `npm install && npm run dev` with no additional configuration required.
