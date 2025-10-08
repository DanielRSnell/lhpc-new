# About Page Update - Change Request

**Date:** January 2025
**Status:** Pending
**Priority:** High

## Overview

Update the About page to accurately reflect LaunchHPC's product positioning, company information, and value proposition based on the comprehensive product positioning document. Replace placeholder content with real company information and update the main image to use the data center photo.

## Current State

The About page (`/about`) may contain:
- Generic placeholder content
- Outdated company information
- Incorrect or missing product positioning
- Placeholder images

## Desired State

The About page should be a comprehensive overview of LaunchHPC and ThisWay Global, including:

1. **Hero Section**
   - **Headline:** "Unified AI/HPC Orchestration for Every Environment"
   - **Subhead:** Product vision and core value proposition
   - **Main Image:** `/public/data-center.jpg` (replace current hero image)

2. **Company Overview Section**
   - **Title:** "About ThisWay Global"
   - **Content:** Company background, founding story, mission
   - **Key Points:**
     - Founded by Angela Hood
     - Award-winning AI and HPC technology company
     - Partnerships with NVIDIA, AWS, Microsoft, IBM
     - Democratizing access to advanced computing

3. **Product Vision Section**
   - **Title:** "The LaunchHPC Vision"
   - **Content:** Agentic workflow orchestration platform overview
   - **Key Points:**
     - First platform unifying operators, technical experts, and non-technical users
     - Maximize GPU utilization, accelerate revenue, ensure sovereignty
     - No vendor lock-in

4. **Core Capabilities Section**
   - **Title:** "Platform Capabilities"
   - **Content:** 3-column grid of core features
   - **Features:**
     - Agentic UX (Sully) - Plain language workflows
     - Workflow Portability - Write once, run anywhere
     - High-Performance Multi-Tenancy - Bare-metal sharing
     - Intelligent Orchestration - AI-powered scheduling
     - Hybrid Bursting - Seamless cloud extension
     - Deep Observability - Real-time monitoring
     - Enterprise Security - Zero-trust architecture
     - OEM-Agnostic - Multi-vendor support

5. **Target Personas Section**
   - **Title:** "Built for Every Role"
   - **Content:** 4 persona cards
   - **Personas:**
     1. **Infrastructure Operators** - Maximize revenue and utilization
     2. **Technical Experts** - Build portable workflows
     3. **Non-Technical Users** - Access AI/HPC without learning complex tools
     4. **Enterprise Leaders** - Ensure ROI, sovereignty, compliance

6. **Leadership Team Section**
   - **Title:** "Meet Our Leadership Team"
   - **Content:** Photo grid of key leadership members from team.json
   - **Featured Leaders:**
     - Angela Hood - Founder & CEO
     - Chris Kennedy - Chief Technology Officer
     - Alex Shmelev - Chief Innovations Officer
     - Justin Hood - Chief Operating Officer
     - Lisa Rawls - Chief Financial Officer
     - Danielle Bodalski - Chief HR Officer
     - Chris Ramirez - Director of Sales
     - Craig [Last Name TBD] - [Role TBD]
     - Joel [Last Name TBD] - [Role TBD]
   - **Display:** Photo, name, title, optional LinkedIn link
   - **Note:** Need to add Craig and Joel to team.json if not present

7. **Competitive Differentiation Section**
   - **Title:** "The LaunchHPC Advantage"
   - **Content:** What makes LaunchHPC unique
   - **Key Points:**
     - vs. DIY Stacks: Unified platform vs. brittle assembly
     - vs. OEM Consoles: OEM-agnostic vs. vendor lock-in
     - vs. Hyperscalers: Bare-metal vs. virtualized
     - vs. Traditional Cluster Managers: Modern agentic UX vs. dated interfaces

8. **Industries Served Section**
   - **Title:** "Industries We Serve"
   - **Content:** Grid of industry cards linking to industry pages
   - **Industries:**
     - Neoclouds
     - Public Sector
     - Research Institutions
     - OEM Partners
     - Financial Services (Coming Soon)
     - Manufacturing (Coming Soon)

9. **ROI & Value Section**
   - **Title:** "Measurable Impact"
   - **Content:** Stats and proof points
   - **Metrics:**
     - 20-30% utilization gains
     - Days vs. weeks for onboarding
     - Bare-metal performance
     - Reduced cloud spend
     - Avoid vendor lock-in

10. **Design Partner Program Section**
    - **Title:** "Join Our Design Partner Program"
    - **Content:** Early access benefits
    - **Benefits:**
      - Early access to new features
      - Joint roadmap influence
      - Co-marketing opportunities
      - Priority support

11. **CTA Section**
    - **Title:** "Ready to Get Started?"
    - **CTAs:**
      - Schedule a Demo (primary)
      - View Documentation (secondary)
      - Contact Sales (tertiary)

## Technical Implementation

### File to Modify
- `/src/pages/about.astro`

### Assets
- **Hero Image:** `/public/data-center.jpg`
- Ensure image is optimized for web (ideally < 500KB)
- Use lazy loading for performance

### Components to Use
- Reuse existing section components where applicable
- Create new `PersonaCard.tsx` component if needed
- Use existing `Card`, `Button`, `Badge` UI components

### Content Sources
- Primary: `/docs/about_lhpc.md`
- Company info from existing materials
- ROI metrics from product positioning

## SEO Considerations

### Meta Data
- **Title:** "About LaunchHPC - Unified AI/HPC Orchestration Platform"
- **Description:** "LaunchHPC by ThisWay Global delivers agentic workflow orchestration across any infrastructure. Founded by Angela Hood, partnering with NVIDIA, AWS, Microsoft, and IBM."
- **Keywords:** AI/HPC orchestration, workflow portability, bare-metal multi-tenancy, sovereign computing
- **Open Graph Image:** Use data-center.jpg or create dedicated OG image

### Structured Data
- Organization schema
- Product schema
- BreadcrumbList schema

## Design Guidelines

### Visual Hierarchy
1. Hero with data center image (full-width)
2. Company overview (centered, max-width)
3. Product vision (centered, max-width)
4. Core capabilities (grid layout)
5. Personas (4-column grid)
6. Competitive advantages (comparison table or cards)
7. Industries (grid with images/icons)
8. ROI stats (highlight boxes)
9. Design partner CTA (centered)
10. Final CTA (centered with buttons)

### Typography
- H1: 72px (desktop) / 48px (mobile)
- H2: 48px (desktop) / 36px (mobile)
- H3: 32px (desktop) / 24px (mobile)
- Body: 18px (desktop) / 16px (mobile)

### Spacing
- Section padding: 120px vertical (desktop) / 80px (mobile)
- Component spacing: 64px between major sections
- Card grids: 24px gap

### Color Usage
- Use gradient for key headlines
- Accent color for CTAs
- Muted backgrounds for alternating sections

## Content Outline

### Hero Section Content

**Headline:**
"Unified AI/HPC Orchestration for Every Environment"

**Subhead:**
"LaunchHPC is the first agentic workflow orchestration platform that unifies operators, technical experts, and non-technical users around shared, portable workflows—maximizing GPU utilization, accelerating revenue, and ensuring sovereignty without vendor lock-in."

**Image:** Data center photo showing modern infrastructure

---

### Company Overview Content

**Title:** "About ThisWay Global"

**Body:**
LaunchHPC is developed by ThisWay Global, an award-winning AI and HPC technology company revolutionizing industries with innovative solutions. Founded by Angela Hood and backed by partnerships with NVIDIA, Amazon Web Services, Microsoft, and IBM, ThisWay Global delivers enterprise-grade platforms that democratize access to advanced computing.

Our mission is to break down barriers to AI/HPC adoption, enabling organizations of all sizes to harness the power of high-performance computing without vendor lock-in, complexity, or sovereignty concerns.

---

### Core Capabilities Content

1. **Agentic UX (Sully)**
   - Plain language workflow generation
   - Auto-generated interfaces
   - No-code access for non-technical users
   - Intelligent assistance

2. **Workflow Portability**
   - Write once, run anywhere
   - Multi-environment support (on-prem, cloud, edge)
   - Hardware agnostic
   - Consistent performance everywhere

3. **High-Performance Multi-Tenancy**
   - Bare-metal sharing without virtualization
   - Secure policy-driven isolation
   - Fair scheduling and prioritization
   - Revenue optimization

4. **Intelligent Orchestration**
   - AI-powered scheduling
   - Parallel execution (HPC + AI containers)
   - Resource optimization
   - Dynamic scaling

5. **Hybrid Bursting**
   - Seamless cloud extension
   - Unified management
   - Cost optimization
   - No workflow refactoring

6. **Deep Observability**
   - Real-time monitoring
   - Job performance tracking
   - Compliance reporting
   - Utilization analytics

7. **Enterprise Security**
   - Zero-trust architecture
   - Hardware-level isolation
   - End-to-end encryption
   - StateRAMP compliance roadmap

8. **OEM-Agnostic Architecture**
   - Multi-vendor support
   - Unified API
   - Future-proof
   - No vendor lock-in

---

### Target Personas Content

**Infrastructure Operators**
- **Goal:** Maximize revenue and utilization
- **Pain:** Idle GPUs, slow onboarding, limited multi-tenancy
- **Value:** 20-30% utilization gains, rapid tenant onboarding

**Technical Experts**
- **Goal:** Build efficient workflows across environments
- **Pain:** Rebuilding workflows, slow hardware adoption, vendor lock-in
- **Value:** Capture once, deploy anywhere; immediate silicon access

**Non-Technical Users**
- **Goal:** Use AI/HPC without learning complex tools
- **Pain:** Steep learning curves, dependency on technical teams
- **Value:** Plain language workflows, auto-generated interfaces

**Enterprise Leaders**
- **Goal:** Ensure ROI, sovereignty, compliance
- **Pain:** Vendor lock-in, limited visibility, compliance risks
- **Value:** OEM-agnostic, deep observability, compliance-ready

---

### Competitive Differentiation Content

**The LaunchHPC Unique Advantage**

The only platform combining:
- ✓ Agentic UX for non-technical users
- ✓ Workflow portability across environments
- ✓ Bare-metal multi-tenancy without virtualization
- ✓ Hybrid bursting capabilities
- ✓ Deep observability and optimization
- ✓ OEM-agnostic architecture

**vs. DIY Stacks**
- DIY: Brittle, costly to maintain, slow hardware adoption
- LaunchHPC: Unified platform, rapid updates, immediate silicon support

**vs. OEM Consoles**
- OEM: Vendor lock-in, limited interoperability
- LaunchHPC: OEM-agnostic, works across all vendors

**vs. Hyperscaler Services**
- Hyperscalers: Virtualized, expensive, sovereignty-breaking
- LaunchHPC: Bare-metal performance, cost-effective, full control

**vs. Traditional Cluster Managers**
- Traditional: Costly licenses, limited AI/HPC convergence
- LaunchHPC: Modern agentic UX, converged AI+HPC, bare-metal multi-tenancy

---

### ROI Content

**Measurable Impact:**

- **20-30% More Throughput** - Intelligent orchestration maximizes utilization
- **Days vs. Weeks** - Rapid onboarding accelerates time-to-value
- **Bare-Metal Performance** - No virtualization overhead
- **Reduced Cloud Spend** - Hybrid bursting optimization
- **Avoid Vendor Lock-In** - OEM-agnostic architecture
- **Future-Proof** - Immediate adoption of new silicon

---

### Design Partner Program Content

**Title:** "Join Our Design Partner Program"

**Subhead:** "Shape the future of AI/HPC orchestration"

**Benefits:**
- ⭐ Early access to new features
- 🤝 Joint roadmap influence based on your needs
- 📢 Co-marketing opportunities and case studies
- 🎯 Priority support with dedicated training

**CTA:** "Apply for Design Partner Program"

---

### Final CTA Content

**Title:** "Ready to Transform Your AI/HPC Infrastructure?"

**Subhead:** "Get started with LaunchHPC today"

**CTAs:**
- Schedule a Demo (primary button) → /contact
- View Documentation (secondary button) → /docs
- Contact Sales (tertiary link) → /contact

---

## Image Requirements

### Hero Image (data-center.jpg)
- **Location:** `/public/data-center.jpg`
- **Dimensions:** Minimum 1920px wide
- **Format:** JPG (optimized for web)
- **File Size:** < 500KB recommended
- **Alt Text:** "Modern data center with high-performance computing infrastructure"
- **Usage:** Hero background or featured image

### Other Images (Optional)
- Company logo variations
- Team photo (if available)
- Partner logos (NVIDIA, AWS, Microsoft, IBM)
- Industry icons/illustrations
- Product screenshots

---

## Navigation Updates

Ensure the About page is accessible from:
- Main navigation (if not already)
- Footer navigation
- Mobile menu

---

## Success Metrics

### Engagement
- Time on page
- Scroll depth
- Click-through to industry pages
- CTA conversion rate

### SEO
- Organic traffic to /about
- Ranking for "AI/HPC orchestration"
- Backlinks to about page

### Conversions
- Demo bookings from about page
- Design partner applications
- Documentation visits

---

## Related Files

- `/src/pages/about.astro` - Main about page
- `/public/data-center.jpg` - Hero image
- `/_docs/about_lhpc.md` - Content source
- `/src/components/sections/*` - Reusable section components

---

## Notes

- Ensure all content is accurate and approved by stakeholders
- Consider adding customer testimonials if available
- May want to include awards/recognition section
- Consider adding timeline/milestones section
- Link to industry pages for deeper dives
- Ensure mobile responsiveness
- Test page load performance with large hero image
- Consider adding video overview if available

---

**End of Change Request**
