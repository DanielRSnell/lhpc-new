# Contact Page Simplification - Change Request

**Date:** January 2025
**Status:** Pending
**Priority:** Medium

## Overview

Simplify the contact page to focus solely on demo booking through the Cal.com widget. Remove all form fields, marketing copy, and extra sections. The page should be minimal and conversion-focused.

## Current State

The contact page (`/contact`) currently includes:
- Hero section with marketing copy
- Contact form with multiple fields
- Additional sections and CTAs
- Potentially redundant content

## Desired State

The new contact page should contain **only**:

1. **Page Title** (H1)
2. **Subtitle** (brief description/subhead)
3. **Cal.com Widget** (embedded booking interface)

### Proposed Content

**Title:** "Schedule a Demo with LaunchHPC"

**Subtitle:** "Book a personalized demo with our team to see how LaunchHPC can transform your AI/HPC infrastructure"

**Cal.com Widget:**
- Link: `team/thisway/launch-hpc`
- Layout: Month view
- Namespace: `launch-hpc`
- No fallback CTA (already removed from CalComWidget component)

## Technical Implementation

### File to Modify
- `/src/pages/contact.astro`

### Approach
1. Replace entire contact page with simple layout
2. Use existing `CalComWidget` component
3. Keep same URL (`/contact`)
4. Maintain SEO metadata (title, description, OG tags)

### Recommended Structure

```astro
---
export const prerender = true;
import DefaultLayout from '@/layouts/DefaultLayout.astro';
import CalComWidget from '@/components/sections/calcom-widget';
---

<DefaultLayout
  title="Contact LaunchHPC - Schedule a Demo"
  description="Book a personalized demo with the LaunchHPC team. See how our AI/HPC orchestration platform can transform your infrastructure."
>
  <section class="section-padding container max-w-screen-xl">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="text-5xl leading-tight tracking-tight md:text-6xl lg:text-7xl">
        Schedule a Demo with LaunchHPC
      </h1>
      <p class="text-muted-foreground mt-6 text-lg md:text-xl">
        Book a personalized demo with our team to see how LaunchHPC can transform your AI/HPC infrastructure
      </p>
    </div>
  </section>

  <CalComWidget
    client:load
    title="Choose Your Time"
    subhead="Select a time that works best for you and we'll send you a calendar invite"
    calLink="team/thisway/launch-hpc"
  />
</DefaultLayout>
```

## Benefits

1. **Simplified User Experience:** Remove friction and cognitive load
2. **Higher Conversion Rate:** Single clear CTA (book demo)
3. **Faster Load Time:** Less content to render
4. **Easier Maintenance:** Minimal content to update
5. **Consistent Across Site:** All CTAs lead to same booking experience

## SEO Considerations

- Maintain page title and meta description
- Keep `/contact` URL (no redirect needed)
- Update sitemap priority if needed
- Ensure Open Graph tags remain

## Migration Notes

- Backup existing contact page before changes
- Check for internal links pointing to contact form (update if needed)
- Verify Cal.com widget displays correctly
- Test on mobile devices
- Monitor conversion rates post-launch

## Success Metrics

- **Conversion Rate:** % of visitors who book a demo
- **Time on Page:** Should decrease (less content to read)
- **Bounce Rate:** Monitor for changes
- **Demo Bookings:** Track total bookings from contact page

---

## Related Files

- `/src/pages/contact.astro` - Main contact page
- `/src/components/sections/calcom-widget.tsx` - Cal.com widget component
- Navigation links pointing to `/contact`

---

**End of Change Request**
