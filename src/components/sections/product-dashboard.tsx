'use client';

import { Activity, ArrowRight, Bug, Clock, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const FEATURE_CARDS = [
  {
    title: 'Job Execution Logs',
    description:
      'Track how long each job takes across different GPU clusters, with detailed timestamps and retry data.',
    icon: Clock,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'Real-Time Infrastructure Feed',
    description:
      'Monitor your entire fleet in real time — resource utilization, job status, alerts — no refresh needed.',
    icon: Activity,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'System-Level Debugging',
    description:
      'Drill down into any system to inspect resource usage, job queues, and performance metrics at each level.',
    icon: Bug,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'Custom Metrics & Alerts',
    description:
      'Set up custom monitoring for specific workloads and track their performance across your infrastructure.',
    icon: Settings,
    cta: 'Learn more',
    href: '#',
  },
];

export default function ProductDashboard() {
  return (
    <section className="section-padding relative container !pt-0">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
          Enterprise-grade monitoring and control for AI/HPC workloads
        </h2>
      </div>

      {/* Main Dashboard Image */}
      <img
        src="/dashboard.png"
        alt="LaunchHPC Dashboard"
        width={1440}
        height={905}
        className="mx-auto mt-10 mask-b-from-50% mask-b-to-95% invert md:mt-16 dark:invert-0"
      />

      {/* Tagline */}
      <h3 className="text-muted-foreground mt-4 text-center uppercase">
        COMPLETE VISIBILITY ACROSS YOUR ENTIRE INFRASTRUCTURE
      </h3>

      {/* Feature Cards */}
      <div className="mx-auto mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {FEATURE_CARDS.map((card, index) => {
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
                <div>
                  <Button
                    variant="ghost"
                    asChild
                    className="group mt-6 h-12 gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95"
                  >
                    <a href={card.href}>
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
