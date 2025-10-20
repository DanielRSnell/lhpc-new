'use client';

import { Activity, ArrowRight, ChartPie, GitBranch, Shield } from 'lucide-react';

import ComputePoolsMockup from '@/components/mockups/compute-pools-mockup';
import SiliconAllocationMockup from '@/components/mockups/silicon-allocation-mockup';
import WorkflowConfigMockup from '@/components/mockups/workflow-config-mockup';
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
    title: 'Bare-Metal Multi-Tenancy',
    description:
      'Secure tenant isolation without virtualization overhead—onboard new tenants in days and maximize revenue per GPU with 57-85% higher utilization.',
    icon: Shield,
    cta: 'Learn more',
    href: '/contact',
  },
  {
    title: 'Workflow Portability',
    description:
      'Write workflows once, deploy anywhere—on-premises clusters, neoclouds, sovereign clouds, or edge environments with consistent performance.',
    icon: GitBranch,
    cta: 'Learn more',
    href: '/contact',
  },
  {
    title: 'OEM-Agnostic Architecture',
    description:
      'Works seamlessly across Supermicro, NVIDIA, AMD, Intel, Oracle, and AWS—future-proof your infrastructure without vendor lock-in.',
    icon: Activity,
    cta: 'Learn more',
    href: '/contact',
  },
  {
    title: 'Deep Observability',
    description:
      'Real-time visibility into GPU utilization, job performance, and resource allocation with data-driven optimization recommendations.',
    icon: ChartPie,
    cta: 'Learn more',
    href: '/contact',
  },
];

export default function ProductDashboard() {
  return (
    <section className="section-padding relative container !pt-0">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
          Four core capabilities that maximize revenue and ensure sovereignty
        </h2>
      </div>

      {/* Feature Screenshots */}
      <div className="mx-auto mt-10 grid grid-rows-1 gap-4 md:mt-16 md:grid-cols-3">
        <ComputePoolsMockup />
        <WorkflowConfigMockup />
        <SiliconAllocationMockup />
      </div>

      {/* Tagline */}
      <h3 className="text-muted-foreground mt-8 text-center uppercase">
        BARE-METAL PERFORMANCE WITHOUT VENDOR LOCK-IN
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
