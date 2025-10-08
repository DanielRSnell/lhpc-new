'use client';

import {
  Boxes,
  Brain,
  Database,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface UseCase {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface UseCasesSectionProps {
  title: string;
  useCases: UseCase[];
}

export default function UseCasesSection({
  title,
  useCases,
}: UseCasesSectionProps) {
  return (
    <section className="section-padding container max-w-screen-xl">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>

      <div className={`mt-10 grid gap-6 md:mt-16 ${useCases.length > 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
        {useCases.map((useCase, index) => {
          const IconComponent = useCase.icon || Workflow;
          return (
            <Card
              key={index}
              className="to-muted/10 via-muted/5 bg-gradient-to-b from-transparent"
            >
              <CardHeader className="gap-2.5">
                <div className="bg-card/50 flex size-12 items-center justify-center rounded-md border">
                  <IconComponent className="size-6 opacity-70" />
                </div>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
