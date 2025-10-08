# Product Page Change Request

**Document Owner:** Content Team
**Status:** DRAFT
**Last Updated:** January 2025
**Priority:** HIGH

---

## Overview

This document details the content changes needed to align the product page with LaunchHPC's positioning. The current product page focuses heavily on observability and monitoring, but should emphasize the core differentiators: bare-metal multi-tenancy, workflow portability, OEM-agnostic architecture, and revenue optimization for operators.

**Key Changes:**
- Shift from "monitoring platform" to "orchestration platform with deep observability"
- Emphasize bare-metal multi-tenancy and revenue optimization
- Add workflow portability as primary feature
- Include OEM-agnostic messaging (Dell, Supermicro, NVIDIA, AMD, Intel, HPE)
- Focus on operator, technical team, and enterprise leader personas
- Add quantified business outcomes (20-30% gains, days vs. weeks)

---

## Section 1: Product Hero Section

**File:** `src/components/sections/product-hero.tsx`

### Current Content

```
Badge: "What's New? LaunchHPC Platform"
Headline: "Monitor your entire fleet in real time with comprehensive observability"
Subhead: "LaunchHPC provides complete visibility into GPU utilization, job queues, and system health across all your AI/HPC infrastructure."
CTAs: "Get Started" + "Request Demo"
Trust Line: "Trusted by 150+ enterprises worldwide"
Visual: GPU Utilization Chart + Terminal Window
```

### Proposed Changes

```
Badge: "What's New? LaunchHPC Platform" (KEEP)

Headline: "Bare-metal orchestration that maximizes GPU revenue and ensures sovereignty"

Subhead: "LaunchHPC delivers workflow portability, multi-tenant infrastructure, and OEM-agnostic orchestration—achieve 20-30% utilization gains while maintaining full control across Dell, Supermicro, NVIDIA, AMD, and Intel hardware."

CTAs:
- Primary: "Schedule a Demo" (href="/contact")
- Secondary: "Contact Sales" (href="/contact")

Trust Line: "Partnered with Dell, Supermicro, NVIDIA, AMD, Intel, and HPE"

Visual: Keep GPU Utilization Chart + Terminal Window (good visual)
```

### Rationale
- Lead with "bare-metal orchestration" and "GPU revenue" instead of monitoring
- Include all key differentiators upfront
- Add quantified outcome (20-30%)
- Mention specific OEM partners for credibility
- Update CTAs to match actual navigation
- Replace generic "150+ enterprises" with partner validation

---

## Section 2: Product Dashboard Section

**File:** `src/components/sections/product-dashboard.tsx`

### Current Content

```
Heading: "Enterprise-grade monitoring and control for AI/HPC workloads"
Tagline: "COMPLETE VISIBILITY ACROSS YOUR ENTIRE INFRASTRUCTURE"

Feature Cards (4):
1. Job Execution Logs - Track job timing and retry data
2. Real-Time Infrastructure Feed - Monitor fleet in real time
3. System-Level Debugging - Drill down into system metrics
4. Custom Metrics & Alerts - Set up custom monitoring

Visual: Dashboard screenshot
```

### Proposed Changes

```
Heading: "The only platform combining bare-metal multi-tenancy, workflow portability, and OEM-agnostic orchestration"

Tagline: "MAXIMIZE UTILIZATION. ENSURE SOVEREIGNTY. AVOID VENDOR LOCK-IN."

Feature Cards (4 - REWRITE):

1. Bare-Metal Multi-Tenancy
   Icon: Server/Database
   Title: "Bare-Metal Multi-Tenancy"
   Description: "Secure tenant isolation without virtualization overhead—onboard new tenants in days and achieve 20-30% higher utilization rates through intelligent scheduling."
   CTA: "Contact Us" → "/contact"

2. Workflow Portability
   Icon: GitBranch
   Title: "Workflow Portability"
   Description: "Build workflows once and deploy across any environment—on-premises clusters, neoclouds, sovereign clouds, or edge infrastructure with zero refactoring."
   CTA: "Contact Us" → "/contact"

3. OEM-Agnostic Architecture
   Icon: Layers
   Title: "OEM-Agnostic Architecture"
   Description: "Works across Dell, HPE, Supermicro, NVIDIA, AMD, and Intel—future-proof your infrastructure investments and adopt new silicon immediately without refactoring."
   CTA: "Contact Us" → "/contact"

4. Deep Observability
   Icon: Activity (keep current icon)
   Title: "Deep Observability"
   Description: "Real-time visibility into GPU utilization, job performance, and resource allocation—data-driven optimization recommendations across your entire infrastructure."
   CTA: "Contact Us" → "/contact"

Visual: Keep Dashboard screenshot (good visual reference)
```

### Rationale
- Reframe heading to emphasize unique platform capabilities
- Lead with bare-metal multi-tenancy (revenue optimization)
- Include workflow portability (write once, run anywhere)
- Add OEM-agnostic with specific vendor names
- Keep observability but as supporting capability, not primary focus
- Update tagline to reflect three key outcomes

---

## Section 3: Product Features Section

**File:** `src/components/sections/product-features.tsx`

### Current Content

```
Heading: "Complete Infrastructure Visibility — When You Need It"
Subhead: "Most orchestration platforms hide the details. LaunchHPC shows you what matters — resource utilization, job performance, and system health — in real-time."

Feature Cards (5):
1. Real-Time Job Monitoring - Visualize job performance
2. Export Performance Data - Export metrics as CSV/JSON/XLS
3. Resource Utilization Tracking - Track GPU utilization and spot issues
4. Multi-Cloud Platform Integration - Unified monitoring across AWS/Azure/GCP
5. AI Optimization Insights - Monitor AI-driven scheduling decisions
```

### Proposed Changes

```
Heading: "Complete platform capabilities for operators, technical teams, and enterprise leaders"

Subhead: "LaunchHPC delivers the only platform combining revenue optimization, technical flexibility, and sovereignty—all while maintaining bare-metal performance."

Feature Cards (6 - EXPANDED AND REWRITTEN):

1. Multi-Tenant Revenue Optimization
   Title: "Multi-Tenant Revenue Optimization"
   Description: "Maximize infrastructure monetization with secure bare-metal multi-tenancy—fair scheduling, instant provisioning, comprehensive billing, and tenant onboarding in days."
   Visual: Keep animated progress bars or create new revenue-focused visual

2. Workflow Portability & Reuse
   Title: "Workflow Portability & Reuse"
   Description: "Capture workflows once and replay across on-premises, neoclouds, sovereign clouds, and edge—eliminate rebuilding for each platform while maintaining consistent performance."
   Visual: Workflow diagram showing single workflow across multiple environments

3. Hardware-Agnostic Freedom
   Title: "Hardware-Agnostic Freedom"
   Description: "Works seamlessly with Dell, HPE, Supermicro, NVIDIA, AMD, and Intel hardware—no vendor lock-in, immediate access to new silicon, and freedom to choose the best hardware for each use case."
   Visual: Multiple vendor logos or hardware icons

4. Hybrid Bursting Capabilities
   Title: "Hybrid Bursting Capabilities"
   Description: "Seamlessly extend on-premises workloads to neoclouds when demand spikes—unified management, cost optimization, and no workflow refactoring required."
   Visual: Hybrid cloud diagram

5. Real-Time Observability
   Title: "Real-Time Observability"
   Description: "Complete visibility into GPU utilization, job queues, and system health across all infrastructure—export performance data, track resource utilization, and get AI-driven optimization recommendations."
   Visual: Keep current dashboard/chart visuals (good)

6. Enterprise Security & Compliance
   Title: "Enterprise Security & Compliance"
   Description: "Zero-trust architecture with hardware-level isolation and end-to-end encryption—StateRAMP roadmap for public sector compliance, comprehensive audit trails, and sovereign deployment options."
   Visual: Security badges or compliance icons
```

### Rationale
- Expand from 5 to 6 cards to cover all core capabilities
- Lead with revenue optimization (operator focus)
- Add workflow portability as second feature
- Hardware-agnostic freedom as third (sovereignty angle)
- Hybrid bursting as fourth (cost optimization)
- Keep observability but as fifth feature, not first
- Add security/compliance as sixth (enterprise/public sector)
- Update heading to reference three personas
- All descriptions include specific benefits and outcomes

---

## Section 4: Use Case Section (NEW)

**File:** Create new `src/components/sections/product-use-cases.tsx`
**Location:** Insert after Product Features section, before Product Logs

### Content

```
Section Heading: "Built for real-world infrastructure challenges"
Subhead: "From neocloud operators to federal agencies to global enterprises—LaunchHPC solves the hardest orchestration problems."

Use Case Cards (4):

1. For Infrastructure Operators
   Icon: Server
   Headline: "Maximize Multi-Tenant Revenue"
   Description: "Neocloud providers and data center operators use LaunchHPC to achieve 20-30% utilization gains through bare-metal multi-tenancy. Onboard new tenants in days with secure isolation, fair scheduling, and comprehensive billing."
   Metrics:
   • 20-30% utilization increase
   • Days vs. weeks tenant onboarding
   • Zero virtualization overhead
   CTA: "Contact Us" → "/contact"

2. For Technical Teams
   Headline: "Write Once, Run Anywhere"
   Icon: Code
   Description: "HPC engineers and DevOps teams use LaunchHPC to capture workflows once and deploy across any environment—on-premises, neoclouds, sovereign clouds, or edge. Eliminate rebuilding for each platform and adopt new GPUs immediately."
   Metrics:
   • Workflow portability across all environments
   • Immediate new silicon adoption
   • Consistent performance guarantees
   CTA: "Contact Us" → "/contact"

3. For Enterprise Leaders
   Icon: Shield
   Headline: "Ensure Sovereignty, Avoid Lock-In"
   Description: "CIOs and CTOs use LaunchHPC to maintain full control with OEM-agnostic architecture across Dell, HPE, Supermicro, NVIDIA, AMD, and Intel. Deploy on-premises or in sovereign clouds while future-proofing infrastructure investments."
   Metrics:
   • No vendor lock-in
   • Full data sovereignty
   • StateRAMP compliance roadmap
   CTA: "Contact Us" → "/contact"

4. For Public Sector
   Icon: Flag/Building
   Headline: "Mission-Critical Secure Computing"
   Description: "Federal agencies, defense organizations, and SLED institutions use LaunchHPC to maintain data sovereignty while delivering world-class HPC performance. StateRAMP roadmap ensures compliance for classified workloads."
   Metrics:
   • Data sovereignty guaranteed
   • StateRAMP compliance roadmap
   • On-premises or sovereign cloud
   CTA: "Contact Us" → "/contact"
```

### Design Notes
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Each card has icon, headline, description, 3 metrics, and CTA
- Metrics displayed as bullet points with icons
- Gradient background per card to differentiate use cases
- Keep descriptions concise (2-3 sentences)

### Rationale
- Addresses different personas with specific use cases
- Quantifies outcomes where possible
- Shows breadth of LaunchHPC applicability
- Provides social proof across sectors
- Links to future solution pages
- Demonstrates platform flexibility

---

## Section 5: Product Logs Section (UPDATE)

**File:** `src/components/sections/product-logs.tsx`

### Current Content

```
Section has partner/integration logos showing AWS, Azure, GCP, GitHub, Slack, etc.
Generic cloud and SaaS tool logos
```

### Proposed Changes

```
Update section to show:

Section Heading: "OEM and technology partners"
Subhead: "LaunchHPC works seamlessly with industry-leading hardware manufacturers and infrastructure platforms."

Partner Categories (2 sections):

HARDWARE PARTNERS:
- Dell: https://img.logo.dev/dell.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- Supermicro: https://img.logo.dev/supermicro.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- NVIDIA: https://img.logo.dev/nvidia.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- AMD: https://img.logo.dev/amd.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- Intel: https://img.logo.dev/intel.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- HPE: https://img.logo.dev/hpe.com?token=pk_JuRpzKiHQniWr0CmqpMOBA

INFRASTRUCTURE PLATFORMS:
- AWS: https://img.logo.dev/aws.amazon.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- Microsoft Azure: https://img.logo.dev/azure.microsoft.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- Google Cloud: https://img.logo.dev/cloud.google.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- Red Hat: https://img.logo.dev/redhat.com?token=pk_JuRpzKiHQniWr0CmqpMOBA
- Kubernetes: (use existing icon or logo.dev)
- Docker: (use existing icon or logo.dev)

REMOVE:
- Generic SaaS tools (Slack, Trello, Figma, Spotify, etc.)
- Replace with actual infrastructure and HPC partners
```

### Rationale
- Show real hardware and infrastructure partners
- Remove generic SaaS tool logos that aren't relevant
- Separate hardware partners from infrastructure platforms
- Use logo.dev API for consistency
- Demonstrates OEM-agnostic positioning
- Shows enterprise-grade partnership ecosystem

---

## Section 6: Final CTA Section (NEW)

**File:** Create new `src/components/sections/product-cta.tsx`
**Location:** Add to end of product page, before footer

### Content

```
Section Background: Gradient or accent background

Heading: "Ready to maximize your GPU infrastructure?"

Subhead: "Join Dell, Supermicro, and NVIDIA partners in delivering enterprise-grade AI/HPC orchestration."

CTAs (2):
- Primary: "Schedule a Demo" (href="/contact")
- Secondary: "Contact Sales" (href="/contact")

Additional Info:
"See how LaunchHPC delivers 20-30% utilization gains with bare-metal multi-tenancy and workflow portability."

Visual: Optional abstract background or partner logos
```

### Design Notes
- Full-width section with contrasting background
- Centered content with large heading
- Two prominent CTA buttons side by side
- Additional info text below CTAs
- Optional: Floating partner logos in background

### Rationale
- Clear next step for interested visitors
- Reinforces partner validation
- Quantifies value proposition one final time
- Provides two paths: sales (buyers) and docs (technical)

---

## Page Structure Update

**File:** `src/pages/product.astro`

### Current Structure

```astro
<ProductHero />
<ProductDashboard />
<ProductFeatures />
<ProductLogs />
```

### Proposed Structure

```astro
<ProductHero />
<ProductDashboard />
<ProductFeatures />
<ProductUseCases /> <!-- NEW -->
<ProductLogs /> <!-- UPDATED -->
<ProductCTA /> <!-- NEW -->
```

### Imports to Add

```typescript
import ProductUseCases from '@/components/sections/product-use-cases';
import ProductCTA from '@/components/sections/product-cta';
```

---

## Meta Data Updates

**File:** `src/pages/product.astro`

### Current Meta

```
title: "Product - LaunchHPC AI/HPC Orchestration Platform"
description: "Discover LaunchHPC's unified AI/HPC orchestration platform. Explore features like intelligent workload scheduling, real-time monitoring, and enterprise-grade security."
```

### Proposed Meta

```
title: "LaunchHPC Platform - Bare-Metal AI/HPC Orchestration with Workflow Portability"
description: "Maximize GPU utilization with LaunchHPC's bare-metal multi-tenancy, workflow portability, and OEM-agnostic orchestration. Achieve 20-30% gains across Dell, Supermicro, NVIDIA, AMD, and Intel hardware."
```

### Rationale
- Lead with differentiators in title
- Include quantified outcome in description
- Mention specific OEM partners for SEO
- Focus on "bare-metal" and "workflow portability"

---

## Content Guidelines

### Tone & Voice:
- **Technical credibility:** Include specific vendor names and metrics
- **Outcome-focused:** Lead with business value, not just features
- **Confident:** Assert category leadership and unique positioning
- **Specific:** Use "20-30%", "days vs. weeks", not vague claims

### Key Messaging Principles:
1. **Lead with differentiation:** Bare-metal, portability, OEM-agnostic
2. **Quantify value:** Include ROI metrics wherever possible
3. **Name partners:** Dell, Supermicro, NVIDIA for credibility
4. **Emphasize sovereignty:** No vendor lock-in, full control
5. **Three personas:** Operators (revenue), technical teams (efficiency), leaders (sovereignty)

### Terminology Consistency:
- "Bare-metal multi-tenancy" (not "bare metal" or "baremetal")
- "Workflow portability" (not "portable workflows")
- "OEM-agnostic" (not "vendor-agnostic" or "hardware-agnostic")
- "20-30% utilization gains" (consistent metric)
- "Days vs. weeks" (for onboarding time)
- "On-premises" (hyphenated, not "on-prem" in formal copy)

---

## Implementation Priority

### Phase 1 (Critical - Week 1):
1. ✅ Product Hero updates (messaging shift)
2. ✅ Product Dashboard rewrite (4 core features)
3. ✅ Product Features expansion (6 features)

### Phase 2 (High Priority - Week 2):
4. ✅ Product Use Cases section (NEW - 4 personas)
5. ✅ Product Logs update (real partners only)
6. ✅ Product CTA section (NEW)

### Phase 3 (Polish - Week 3):
7. ✅ Meta data updates
8. ✅ Visual asset updates (if needed)
9. ✅ Internal linking to solution pages

---

## Visual Assets Needed

### Logo Assets (logo.dev API):
Using token: `pk_JuRpzKiHQniWr0CmqpMOBA`

**Hardware Partners:**
- Dell: `https://img.logo.dev/dell.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`
- Supermicro: `https://img.logo.dev/supermicro.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`
- NVIDIA: `https://img.logo.dev/nvidia.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`
- AMD: `https://img.logo.dev/amd.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`
- Intel: `https://img.logo.dev/intel.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`
- HPE: `https://img.logo.dev/hpe.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`

**Infrastructure Platforms:**
- AWS: `https://img.logo.dev/aws.amazon.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`
- Azure: `https://img.logo.dev/azure.microsoft.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`
- GCP: `https://img.logo.dev/cloud.google.com?token=pk_JuRpzKiHQniWr0CmqpMOBA`

### Diagrams Needed:
1. **Workflow Portability Diagram:** Show single workflow deploying to multiple environments
2. **Hybrid Bursting Diagram:** Show on-prem extending to cloud
3. **Multi-Tenant Architecture:** Show secure isolation without virtualization

---

## Success Metrics

### Engagement Metrics:
- Time on page increase by 30%+
- Scroll depth to Use Cases section > 70%
- CTA click-through rate increase by 50%+

### Conversion Metrics:
- Contact form submissions from product page increase by 60%+
- Documentation views from product page increase by 40%+
- Demo requests increase by 50%+

### Message Clarity:
- User surveys: "Clear understanding of LaunchHPC differentiators" > 85%
- Sales feedback: Warmer leads with better platform understanding

---

## Open Questions

1. **Partner Logo Usage:** Confirm we have permission to display Dell, Supermicro, NVIDIA, AMD, Intel, HPE logos
2. **Contact Page Cal.com Integration:** Ensure `/contact` page has Cal.com embed set up for demo scheduling
3. **Metrics Validation:** Can we substantiate "20-30% utilization gains" and "days vs. weeks" claims with customer data?
4. **StateRAMP Status:** What's the current status and timeline for StateRAMP compliance?

## Notes on Link Strategy

**All CTAs lead to `/contact`:** Since we're integrating Cal.com for demo scheduling on the contact page, all CTA buttons throughout the product page now direct to `/contact`. This provides a unified conversion path where visitors can:
- Schedule a demo via Cal.com embed
- Submit a contact form
- Get in touch with sales team

This approach eliminates mock/dead-end links and creates a clear path to conversion.

---

## Next Steps

1. **Content Review:** Stakeholder approval of proposed changes
2. **Design Mockups:** Create visuals for new sections (Use Cases, updated Features)
3. **Development Estimate:** Size the implementation effort
4. **Partner Approval:** Secure logo usage permissions
5. **Legal Review:** Validate competitive claims and metrics
6. **Content Writing:** Finalize all copy
7. **Implementation:** Execute in phases per priority

---

**Document Status:** Ready for stakeholder review
**Next Review Date:** [To be scheduled]
**Approvers:** Content Team, Product Marketing, Sales Leadership, Legal
