'use client';

import { useRef } from 'react';

import type { LucideIcon } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

import { AnimatedBeam } from '@/components/magicui/animated-beam';
import { cn } from '@/lib/utils';

interface WorkflowCard {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  iconColor?: string;
  position: string;
  isGenerating?: boolean;
}

interface AIAutomationProps {
  aiPromptLabel?: string;
  aiPromptText: string;
  headline: string;
  headlineGradient: string;
  description: string;
  cards: WorkflowCard[];
  showStats?: boolean;
}

export default function AIAutomation({
  aiPromptLabel = 'AI Prompt:',
  aiPromptText,
  headline,
  headlineGradient,
  description,
  cards,
  showStats = false,
}: AIAutomationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);

  // Create dynamic refs for each card
  const rightCard1Ref = useRef<HTMLDivElement>(null);
  const rightCard2Ref = useRef<HTMLDivElement>(null);
  const rightCard3Ref = useRef<HTMLDivElement>(null);
  const rightCard4Ref = useRef<HTMLDivElement>(null);

  const cardRefs = [rightCard1Ref, rightCard2Ref, rightCard3Ref, rightCard4Ref];

  return (
    <section className="section-padding container">
      <div
        ref={containerRef}
        className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0"
      >
        {/* Left Content */}
        <div className="relative z-1 flex flex-col gap-4">
          <motion.div
            ref={connectorRef}
            className="after:bg-accent relative mt-10 w-fit rounded-full after:absolute after:inset-[2px] after:rounded-full max-lg:order-3 lg:mt-0"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--chart-1)] via-[var(--chart-2)] to-[var(--chart-3)] blur-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            />
            <motion.div
              className="from-chart-2 to-chart-3 absolute inset-0 top-0 bg-gradient-to-r blur-3xl will-change-transform"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--chart-1)] via-[var(--chart-2)] to-[var(--chart-3)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            />
            <div className="relative z-10 flex items-center gap-2 px-5 py-4 text-xs lg:text-sm">
              <Sparkles className="fill-foreground size-3.5 shrink-0" />
              <div>
                <span className="text-muted-foreground">{aiPromptLabel}</span>{' '}
                <span className="text-accent-foreground">
                  {aiPromptText}
                </span>
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xxl leading-tight tracking-normal md:text-5xl">
            {headline} <br className="hidden md:block" />
            <span className="text-gradient">{headlineGradient}</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl text-lg leading-snug">
            {description}
          </p>
        </div>

        {/* Right Workflow */}
        <div className="relative h-full min-h-[300px]">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                ref={cardRefs[index]}
                className={cn(
                  'z-10 w-fit space-y-2 px-3 py-2.5',
                  card.position,
                  card.isGenerating
                    ? 'after:bg-accent rounded-full before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[var(--chart-1)] before:via-[var(--chart-2)] before:to-[var(--chart-3)] after:absolute after:inset-[1px] after:rounded-full'
                    : 'bg-accent rounded-md shadow-xl',
                )}
              >
                {card.isGenerating ? (
                  <div className="relative z-10 flex items-center gap-1.5">
                    <Sparkles className="fill-foreground size-3" />

                    <h3 className="text-accent-foreground text-[0.625rem] font-semibold lg:text-sm">
                      {card.title}
                    </h3>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      {IconComponent && (
                        <IconComponent
                          className={`size-3 lg:size-3.5 ${card.iconColor}`}
                        />
                      )}
                      <h3 className="text-xs font-bold lg:text-sm">
                        {card.title}
                      </h3>
                    </div>
                    {card.subtitle && (
                      <div className="flex items-center gap-2">
                        <svg className="size-3 text-emerald-600 lg:size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-muted-foreground text-[0.625rem] lg:text-xs">
                          {card.subtitle}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Animated Beams - Only show if we have 4 cards */}
        {cards.length >= 4 && (
          <>
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={connectorRef}
              toRef={rightCard1Ref}
              gradientStartColor="var(--chart-3)"
              gradientStopColor="var(--chart-1)"
              duration={30}
              curvature={0}
            />

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={connectorRef}
              toRef={rightCard2Ref}
              gradientStartColor="var(--chart-3)"
              gradientStopColor="var(--chart-1)"
              duration={30}
              curvature={0}
              className="hidden lg:block"
            />

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={rightCard1Ref}
              toRef={rightCard3Ref}
              gradientStartColor="var(--chart-3)"
              gradientStopColor="var(--chart-1)"
              duration={25}
              curvature={70}
              startYOffset={20}
              endXOffset={30}
            />

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={rightCard2Ref}
              toRef={rightCard3Ref}
              gradientStartColor="var(--chart-3)"
              gradientStopColor="var(--chart-1)"
              duration={20}
              curvature={0}
              className="hidden lg:block"
            />

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={rightCard3Ref}
              toRef={rightCard4Ref}
              gradientStartColor="var(--chart-3)"
              gradientStopColor="var(--chart-1)"
              duration={35}
              curvature={20}
              endXOffset={40}
            />

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={rightCard4Ref}
              toRef={rightCard2Ref}
              gradientStartColor="var(--chart-3)"
              gradientStopColor="var(--chart-1)"
              duration={48}
              curvature={0}
            />
          </>
        )}
      </div>
    </section>
  );
}
