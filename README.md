# Amalgamy Website

Enterprise-grade AI/HPC orchestration platform marketing website built with Astro and shadcn/ui components.

- [Live Website](https://amalgamy.ai)
- [Documentation](https://amalgamy.ai/docs)

## About Amalgamy

Amalgamy is an enterprise-grade AI/HPC orchestration platform designed for managing complex compute workloads across multi-cloud environments. Built for DevOps engineers, infrastructure architects, and HPC administrators, Amalgamy provides intelligent orchestration, zero-trust security, and real-time monitoring for mission-critical AI and high-performance computing workloads.

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

## Tech Stack

- **Astro 5.x** - Static site generator with component islands
- **React 19** - For interactive components
- **Tailwind CSS 4.x** - Utility-first CSS framework with custom CSS variables
- **shadcn/ui** - High-quality components ported to Astro
- **Starlight** - Documentation system with advanced features
- **TypeScript** - Type safety throughout the codebase

## Project Structure

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

## Content Management

### Documentation (`src/content/docs/`)

The website includes comprehensive documentation built with [Starlight](https://starlight.astro.build/), featuring:

- **Installation Guide** - Setup and deployment instructions
- **Platform Overview** - Understanding Amalgamy architecture
- **Getting Started** - Quick start guide for new users
- Automatic navigation, search functionality, and responsive design
- Support for rich markdown formatting and code highlighting

### Changelog (`src/content/changelog/`)

Structured changelog system using MDX files with:

- Version history and release notes
- Feature announcements and updates
- Clean formatting and organization
- Support for markdown content and rich formatting

## Key Features

- **Multi-cloud Orchestration** - AWS, Azure, GCP support
- **AI-Powered Optimization** - Intelligent workload placement
- **Zero-Trust Security** - End-to-end encryption and access controls
- **Real-Time Monitoring** - Comprehensive observability
- **Enterprise-Ready** - SLA guarantees and enterprise support

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and format code
npm run lint

# Access Astro CLI
npm run astro
```

## Deployment

This website can be deployed to any platform that supports Astro applications:

- [Netlify](https://netlify.com) - Recommended for static deployment
- [Vercel](https://vercel.com) - Excellent for Astro applications
- [Cloudflare Pages](https://pages.cloudflare.com) - Fast global CDN

## License

© 2025 Amalgamy by ThisWay Global - All rights reserved.
