'use client';

import { ArrowRight, type LucideIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIcon;
  cta?: string;
  href?: string;
}

interface Screenshot {
  src: string;
  alt: string;
}

interface IndustryDashboardProps {
  title: string;
  tagline: string;
  screenshots: Screenshot[];
  featureCards: FeatureCard[];
}

export default function IndustryDashboard({
  title,
  tagline,
  screenshots,
  featureCards,
}: IndustryDashboardProps) {
  return (
    <section className="section-padding relative container !pt-0">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>

      {/* Feature Screenshots */}
      <div className="mx-auto mt-10 grid gap-4 md:mt-16 md:grid-cols-3">
        {screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={screenshot.src}
            alt={screenshot.alt}
            className="rounded-lg border shadow-lg"
          />
        ))}
      </div>

      {/* Tagline */}
      <h3 className="text-muted-foreground mt-8 text-center uppercase">
        {tagline}
      </h3>

      {/* Feature Cards */}
      <div className="mx-auto mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Card
              key={index}
              className="group bg-accent/80 gap-4 border-none shadow-none"
            >
              <CardHeader className="gap-2.5">
                <div className="bg-card/50 flex size-10 items-center justify-center rounded-md border">
                  <IconComponent className="size-4.5 opacity-70" />
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="text-muted-foreground flex-1 text-sm">
                  {card.description}
                </CardDescription>
                {card.href && (
                  <div>
                    <Button
                      variant="ghost"
                      asChild
                      className="group mt-6 h-12 gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95"
                    >
                      <a href={card.href}>
                        {card.cta || 'Learn more'}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
