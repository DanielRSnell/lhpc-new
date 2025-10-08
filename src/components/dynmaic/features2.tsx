'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { EmblaCarouselType } from 'embla-carousel';
import type { LucideIcon } from 'lucide-react';
import { useInView } from 'motion/react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts';

import { NumberTicker } from '@/components/magicui/number-ticker';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface ChartDataPoint {
  month: string;
  views: number;
  clicks: number;
}

interface SmallChartDataPoint {
  day: number;
  runs: number;
}

interface BottomStat {
  label: string;
  value: string;
  change: string;
  changeClass: string;
}

interface FeatureCarouselCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Features2Props {
  headerTitle: string;

  // First Card (Chart)
  card1Icon: LucideIcon;
  card1Title: string;
  card1Description: string;
  mainChartData: ChartDataPoint[];

  // Second Card (Stats)
  card2Icon: LucideIcon;
  card2Title: string;
  card2Description: string;
  totalJobsValue: number;
  totalJobsStartValue: number;
  totalJobsChange: string;
  smallChartData: SmallChartDataPoint[];
  bottomStats: BottomStat[];

  // Carousel Cards
  featureCards: FeatureCarouselCard[];

  // CTA
  ctaText?: string;
  ctaHref?: string;
  showCta?: boolean;
}

export default function Features2({
  headerTitle,
  card1Icon: Card1Icon,
  card1Title,
  card1Description,
  mainChartData,
  card2Icon: Card2Icon,
  card2Title,
  card2Description,
  totalJobsValue,
  totalJobsStartValue,
  totalJobsChange,
  smallChartData,
  bottomStats,
  featureCards,
  ctaText = 'Try LaunchHPC',
  ctaHref = '/contact',
  showCta = true,
}: Features2Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isChartInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <section className="section-padding">
      <div className="container space-y-8">
        {/* Header */}
        <h2 className="text-4xxl mb-10 max-w-2xl leading-none tracking-tight text-balance md:text-5xl lg:mx-auto lg:mb-15 lg:text-center lg:text-6xl">
          {headerTitle}
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {/* Chart Card - spans 2 columns */}
          <Card
            ref={cardRef}
            className="dark:to-muted/30 dark:via-muted/10 to-background via-card from-card relative col-span-1 overflow-hidden bg-gradient-to-t p-6 lg:col-span-2 lg:p-8 dark:from-transparent"
          >
            <CardContent className="relative h-full gap-6 p-0">
              {/* Content overlay */}
              <div className="relative z-10 flex max-w-xs flex-col gap-3">
                <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                  <Card1Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-accent-foreground text-lg font-bold lg:text-xl">
                  {card1Title}
                </h3>
                <p className="text-muted-foreground leading-snug lg:text-lg">
                  {card1Description}
                </p>
              </div>

              {/* Chart */}
              <div className="pointer-events-auto h-48 w-full lg:absolute lg:right-0 lg:bottom-0 lg:h-80">
                {isChartInView && (
                  <ChartContainer
                    config={{
                      views: {
                        label: 'Views',
                        color: 'var(--chart-2)',
                      },
                      clicks: {
                        label: 'Clicks',
                        color: 'var(--chart-4)',
                      },
                    }}
                    className="h-full w-full [&_.recharts-yAxis_.recharts-cartesian-axis-tick-value]:hidden [&_.recharts-yAxis_.recharts-cartesian-axis-tick-value]:lg:block"
                  >
                    <LineChart
                      data={mainChartData}
                      margin={{ right: 24, left: 0 }}
                      className="-ml-14 lg:-ml-6"
                    >
                      <CartesianGrid
                        strokeDasharray="none"
                        stroke="var(--border)"
                        opacity={0.3}
                        horizontal={true}
                        vertical={false}
                        horizontalCoordinatesGenerator={(props) => [
                          props.yAxis.scale(50),
                          props.yAxis.scale(100),
                          props.yAxis.scale(150),
                          props.yAxis.scale(200),
                        ]}
                      />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={true}
                        tickMargin={8}
                        tick={{ fill: 'var(--border)', opacity: 0.7 }}
                        tickFormatter={(value, index) => {
                          if (index === 3 || index === 6 || index === 9) {
                            return value;
                          }
                          return '';
                        }}
                        interval={0}
                        padding={{ left: 0, right: 0 }}
                        stroke="var(--border)"
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={true}
                        tickMargin={8}
                        tick={{ fill: 'var(--border)', opacity: 0.5 }}
                        ticks={[50, 100, 150]}
                        stroke="var(--border)"
                        domain={[0, 200]}
                      />
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-background flex flex-col items-center gap-2 rounded-lg border p-3 text-xs shadow-md">
                                {[
                                  {
                                    label: 'Views',
                                    value: payload[0]?.value,
                                    change: '+74%',
                                    changeClass:
                                      'inline-block rounded-sm bg-green-600/15 px-2 py-1  font-medium text-green-500',
                                  },
                                  {
                                    label: 'Clicks',
                                    value: payload[1]?.value,
                                    change: '-52%',
                                    changeClass:
                                      'inline-block rounded-sm bg-red-600/15 px-2 py-1  font-medium text-red-400',
                                  },
                                ].map((item) => (
                                  <div
                                    key={item.label}
                                    className="flex items-center gap-3"
                                  >
                                    <span className="text-muted-foreground">
                                      {item.label}
                                    </span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-accent-foreground font-medium">
                                        {item.value}
                                      </span>
                                      <span className={item.changeClass}>
                                        {item.change}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Line
                        dataKey="views"
                        type="monotone"
                        stroke="var(--chart-2)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                          r: 6,
                          fill: 'var(--chart-2)',
                          stroke: 'var(--chart-2)',
                          strokeWidth: 2,
                        }}
                      />
                      <Line
                        dataKey="clicks"
                        type="monotone"
                        stroke="var(--chart-4)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                          r: 6,
                          fill: 'var(--chart-4)',
                          stroke: 'var(--chart-4)',
                          strokeWidth: 2,
                        }}
                      />
                    </LineChart>
                  </ChartContainer>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="dark:to-muted/50 dark:via-muted/10 to-background via-card from-card relative col-span-1 overflow-hidden bg-gradient-to-br p-6 lg:p-8 dark:from-transparent">
            <CardContent className="flex flex-col gap-6 p-0 lg:gap-8">
              <div className="relative z-10 flex flex-col gap-3">
                <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                  <Card2Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-accent-foreground text-lg font-bold lg:text-xl">
                  {card2Title}
                </h3>
                <p className="text-muted-foreground leading-snug lg:text-lg">
                  {card2Description}
                </p>
              </div>

              <div>
                {/* Total Jobs Section */}
                <div className="flex items-center justify-between gap-5 lg:items-stretch">
                  <div className="w-1/2">
                    <span className="text-xs font-bold lg:text-sm">
                      Total jobs
                    </span>
                    <div className="mt-2 flex items-center gap-3">
                      <NumberTicker
                        startValue={totalJobsStartValue}
                        value={totalJobsValue}
                        className="text-4xxl font-medium lg:text-5xl"
                      />
                      <span className="rounded-full bg-green-600/10 px-1.5 py-0.5 text-xs font-medium text-green-400">
                        {totalJobsChange}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs lg:mt-2">
                      Last 7 days
                    </p>
                  </div>

                  {/* Small Chart */}
                  <div className="relative flex-1">
                    {isChartInView && (
                      <ChartContainer
                        config={{
                          runs: {
                            label: 'Runs',
                            color: 'var(--chart-2)',
                          },
                        }}
                        className="h-full w-full"
                      >
                        <AreaChart
                          data={smallChartData}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="runGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="var(--chart-2)"
                                stopOpacity={0.4}
                              />
                              <stop
                                offset="100%"
                                stopColor="var(--chart-2)"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            dataKey="runs"
                            stroke="var(--chart-2)"
                            fill="url(#runGradient)"
                            strokeWidth={2}
                            dot={false}
                            type="monotone"
                          />
                        </AreaChart>
                      </ChartContainer>
                    )}
                  </div>
                </div>

                <Separator className="mt-5 mb-8 lg:mt-6" />

                {/* Bottom Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {bottomStats.map((stat, idx) => (
                    <div
                      className="flex flex-col justify-between md:gap-1"
                      key={idx}
                    >
                      <div className="text-muted-foreground leading-tighter text-xs md:text-sm">
                        {stat.label}
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <span className="text-xl font-medium md:text-2xl">
                          {stat.value}
                        </span>
                        <span
                          className={cn(
                            'rounded-full text-xs font-medium',
                            stat.changeClass,
                          )}
                        >
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards Carousel */}
        <FeatureCarousel featureCards={featureCards} />

        {showCta && (
          <div className="flex justify-center">
            <Button
              variant="secondary"
              className="border-input bg-accent max-w-64 flex-1 border"
              asChild
            >
              <a href={ctaHref}>{ctaText}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

const FeatureCarousel = ({ featureCards }: { featureCards: FeatureCarouselCard[] }) => {
  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);
  }, [api, onSelect]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        loop: false,
      }}
    >
      <CarouselContent className="cursor-grab snap-x snap-mandatory">
        {featureCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <CarouselItem key={idx} className="min-w-xs basis-1/4 snap-start">
              <Card
                className={cn(
                  'bg-card border-0 dark:bg-transparent',
                  current === idx &&
                    'dark:from-muted/50 dark:via-muted/10 to-card via-card from-background bg-gradient-to-r dark:to-transparent',
                )}
              >
                <CardContent className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <IconComponent className={cn('h-4 w-4')} />
                    <h4 className={cn('text-lg leading-tight')}>
                      {card.title}
                    </h4>
                  </div>
                  <p
                    className={cn(
                      'text-muted-foreground hidden text-sm leading-snug md:block',
                    )}
                  >
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
