'use client';

import { ArrowRight, Network, TrendingUp, Activity, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const iconMap = {
  Network,
  TrendingUp,
  Activity,
  Zap,
};

interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
  cta?: string;
  href?: string;
}

interface Screenshot {
  src: string;
  alt: string;
}

interface ProductDashboardProps {
  title: string;
  tagline: string;
  screenshots: Screenshot[];
  featureCards: FeatureCard[];
}

export default function ProductDashboard({
  title,
  tagline,
  screenshots,
  featureCards,
}: ProductDashboardProps) {
  return (
    <section className="section-padding relative container !pt-0">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>

      {/* Tagline */}
      <h3 className="text-muted-foreground mt-8 text-center uppercase">
        {tagline}
      </h3>

      {/* Feature Cards */}
      <div className="mx-auto mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((card, index) => {
          const IconComponent = iconMap[card.iconName as keyof typeof iconMap];
          return (
            <Card
              key={index}
              className="group bg-accent/80 gap-4 border-none shadow-none"
            >
              <CardHeader className="gap-2.5">
                <div className="bg-card/50 flex size-10 items-center justify-center rounded-md border">
                  {IconComponent && <IconComponent className="size-4.5 opacity-70" />}
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="text-muted-foreground flex-1 text-sm">
                  {card.description}
                </CardDescription>
                {card.cta && card.href && (
                  <div>
                    <Button
                      variant="ghost"
                      asChild
                      className="group mt-6 h-12 gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95"
                    >
                      <a href={card.href}>
                        {card.cta}
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
