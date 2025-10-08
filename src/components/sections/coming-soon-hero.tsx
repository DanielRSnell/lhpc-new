'use client';

interface ComingSoonHeroProps {
  badge?: string;
  industry: string;
  headline: string;
  headlineGradient: string;
  description: string;
}

export default function ComingSoonHero({
  badge = 'Coming Soon',
  industry,
  headline,
  headlineGradient,
  description,
}: ComingSoonHeroProps) {
  return (
    <section className="section-padding relative container overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center">
        <div className="flex items-center rounded-full border p-1 text-xs">
          <span className="bg-muted rounded-full px-3 py-1">
            {badge}
          </span>
          <span className="px-3">{industry}</span>
        </div>

        <h1 className="text-foreground text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
          {headline}{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient">{headlineGradient}</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-snug md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
