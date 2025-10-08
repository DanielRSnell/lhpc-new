'use client';

import { Button } from '@/components/ui/button';

interface IndustryHeroProps {
  headline: string;
  subhead: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  trustLine: string;
  badge?: string;
}

export default function IndustryHero({
  headline,
  subhead,
  ctaPrimary,
  ctaPrimaryHref,
  ctaSecondary,
  ctaSecondaryHref,
  trustLine,
  badge,
}: IndustryHeroProps) {
  return (
    <section className="section-padding relative container overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center">
        {badge && (
          <div className="flex items-center rounded-full border p-1 text-xs">
            <span className="bg-muted rounded-full px-3 py-1">{badge}</span>
          </div>
        )}

        <h1 className="text-foreground text-5xl leading-none tracking-tight md:text-6xl lg:text-7xl">
          {headline}
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-snug md:text-lg lg:text-xl">
          {subhead}
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button className="min-w-45" asChild>
            <a href={ctaPrimaryHref}>{ctaPrimary}</a>
          </Button>
          {ctaSecondary && ctaSecondaryHref && (
            <Button className="min-w-45" variant="outline" asChild>
              <a href={ctaSecondaryHref}>{ctaSecondary}</a>
            </Button>
          )}
        </div>

        <div className="text-muted-foreground mt-2 text-center text-sm">
          {trustLine}
        </div>
      </div>
    </section>
  );
}
