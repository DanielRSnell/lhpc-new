'use client';

import { AlertCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Challenge {
  title: string;
  description: string;
  metric?: string;
}

interface ChallengesSectionProps {
  title: string;
  challenges: Challenge[];
}

export default function ChallengesSection({
  title,
  challenges,
}: ChallengesSectionProps) {
  return (
    <section className="section-padding container max-w-screen-xl">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-2">
        {challenges.map((challenge, index) => (
          <Card key={index} className="bg-accent/50">
            <CardHeader className="gap-2.5">
              <div className="bg-destructive/10 flex size-10 items-center justify-center rounded-md border border-destructive/20">
                <AlertCircle className="text-destructive size-5" />
              </div>
              <CardTitle className="text-xl">{challenge.title}</CardTitle>
              {challenge.metric && (
                <div className="text-destructive text-sm font-medium">
                  {challenge.metric}
                </div>
              )}
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                {challenge.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
