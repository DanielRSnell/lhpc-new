'use client';

import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Solution {
  title: string;
  description: string;
  benefit?: string;
}

interface SolutionSectionProps {
  title: string;
  solutions: Solution[];
}

export default function SolutionSection({
  title,
  solutions,
}: SolutionSectionProps) {
  return (
    <section className="section-padding bg-accent/30 container max-w-screen-xl">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader className="gap-2.5">
              <div className="bg-chart-2/10 flex size-10 items-center justify-center rounded-md border border-chart-2/20">
                <Check className="text-chart-2 size-5" />
              </div>
              <CardTitle className="text-xl">{solution.title}</CardTitle>
              {solution.benefit && (
                <div className="text-chart-2 text-sm font-medium">
                  {solution.benefit}
                </div>
              )}
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                {solution.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
