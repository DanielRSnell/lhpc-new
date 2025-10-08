'use client';

import { useRef } from 'react';

import { motion } from 'motion/react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCard {
  title: string;
  description: string;
  content?: React.ReactNode;
  className?: string;
}

interface PartnerLogo {
  name: string;
  url: string;
}

interface ProductFeaturesProps {
  title: string;
  description: string;
  featureCards: FeatureCard[];
  partnerLogos?: PartnerLogo[];
}

export default function ProductFeatures({
  title,
  description,
  featureCards,
  partnerLogos,
}: ProductFeaturesProps) {
  return (
    <section className="section-padding container max-w-screen-xl">
      {/* Header */}
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground mt-3 text-lg leading-snug">
          {description}
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-6">
        {featureCards.map((card, index) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
            className={cn(
              'lg:col-span-2',
              card.className,
            )}
          >
            {card.content || (index === 3 && partnerLogos ? <Card4 partnerLogos={partnerLogos} /> : <PlaceholderContent index={index} />)}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        'to-muted/10 via-muted/5 relative justify-between gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-transparent p-8 md:h-[400px]',
        className,
      )}
    >
      <CardContent className="relative p-0">{children}</CardContent>
      <CardHeader className="card-header p-0">
        <h3 className="text-accent-foreground text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-lg leading-snug">
          {description}
        </p>
      </CardHeader>
    </Card>
  );
}

// Placeholder content for cards without custom content
function PlaceholderContent({ index }: { index: number }) {
  return (
    <div className="relative h-48 overflow-hidden rounded-xl border bg-gradient-to-br from-chart-1/10 via-chart-2/10 to-chart-3/10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-chart-1/20 to-chart-3/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: 'easeOut',
        }}
      />
    </div>
  );
}

function Card4({ partnerLogos }: { partnerLogos: PartnerLogo[] }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative h-full overflow-hidden">
      <div className="grid w-fit grid-cols-3 gap-3 sm:gap-4">
        {partnerLogos.map((logo, index) => (
          <motion.div
            key={logo.name}
            className="bg-muted/40 hover:bg-accent/50 flex aspect-square items-center justify-center rounded-lg border p-3 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: 'easeOut',
            }}
          >
            <img src={logo.url} alt={logo.name} className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
