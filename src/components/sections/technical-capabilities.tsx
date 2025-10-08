'use client';

import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

interface TechnicalCapabilitiesProps {
  title: string;
  capabilities: string[];
  subhead?: string;
}

export default function TechnicalCapabilities({
  title,
  capabilities,
  subhead,
}: TechnicalCapabilitiesProps) {
  return (
    <section className="section-padding bg-accent/30 container max-w-screen-xl">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        {subhead && (
          <p className="text-muted-foreground mt-4 text-lg">{subhead}</p>
        )}
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:mt-16 md:grid-cols-2">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: 'easeOut',
            }}
          >
            <Card className="group h-full border-none shadow-sm transition-all hover:shadow-md">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="bg-chart-2/10 border-chart-2/20 group-hover:bg-chart-2/20 flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors">
                  <Check className="text-chart-2 size-5" strokeWidth={2.5} />
                </div>
                <div className="flex-1 pt-1.5">
                  <div className="text-base leading-relaxed">{capability}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
