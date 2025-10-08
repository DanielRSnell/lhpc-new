'use client';

import { TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ROIMetric {
  metric: string;
  description: string;
}

interface ROISectionProps {
  title: string;
  metrics: ROIMetric[];
}

export default function ROISection({ title, metrics }: ROISectionProps) {
  return (
    <section className="section-padding bg-accent/30 container max-w-screen-xl">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
              <div className="bg-chart-2/10 flex size-12 items-center justify-center rounded-full">
                <TrendingUp className="text-chart-2 size-6" />
              </div>
              <div className="text-2xl font-bold">{item.metric}</div>
              <div className="text-muted-foreground text-sm">
                {item.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
