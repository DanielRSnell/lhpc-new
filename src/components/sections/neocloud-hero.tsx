'use client';

import { motion } from 'motion/react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { Terminal } from '@/components/ui/terminal';

const OBSERVABILITY_DATA = [
  { time: '00:00', utilization: 72 },
  { time: '04:00', utilization: 68 },
  { time: '08:00', utilization: 85 },
  { time: '10:00', utilization: 91 },
  { time: '12:00', utilization: 94 },
  { time: '14:00', utilization: 89 },
  { time: '16:00', utilization: 92 },
  { time: '16:00', utilization: 95 },
  { time: '18:00', utilization: 88 },
  { time: '18:00', utilization: 86 },
  { time: '20:00', utilization: 82 },
  { time: '22:00', utilization: 78 },
  { time: '24:00', utilization: 75 },
];

export default function NeocloudHero() {
  return (
    <section className="section-padding relative container overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center">
        <div className="flex items-center rounded-full border p-1 text-xs">
          <span className="bg-muted rounded-full px-3 py-1">
            Industry Focus
          </span>
          <span className="px-3">Neocloud Solutions</span>
        </div>

        <h1 className="text-foreground text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
          Maximize neocloud infrastructure efficiency and{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient">revenue growth</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-snug md:text-lg lg:text-xl">
          LaunchHPC empowers neoclouds like CoreWeave and Lambda Labs to
          optimize resource utilization, reduce operational costs, and scale
          AI/HPC workloads intelligently.
        </p>
      </div>

      {/* Chart Visualization */}
      <div className="relative mt-10 h-54 w-full md:-mt-20 md:h-96 lg:h-140">
        <ChartContainer
          config={{
            utilization: {
              label: 'GPU Utilization',
              color: 'var(--chart-2)',
            },
          }}
          className="h-full w-full"
        >
          <AreaChart data={OBSERVABILITY_DATA}>
            <defs>
              <linearGradient id="viewsGradient" x1="0" y1="0" x2="1" y2="0">
                <stop
                  offset="0%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="50%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="100%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.3}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="none"
              stroke="var(--border)"
              opacity={0.2}
              horizontal={true}
              vertical={false}
              horizontalCoordinatesGenerator={(props) => {
                return [
                  props.yAxis.scale(50),
                  props.yAxis.scale(100),
                  props.yAxis.scale(200),
                  props.yAxis.scale(300),
                  props.yAxis.scale(400),
                  props.yAxis.scale(500),
                ];
              }}
            />
            <XAxis hide />
            <YAxis width={1} stroke="var(--border)" opacity={0.2} />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background flex flex-col items-center gap-2 rounded-lg border p-3 text-xs shadow-md">
                      {[
                        {
                          label: 'GPU Utilization',
                          value: `${payload[0]?.value}%`,
                          change: '+12%',
                          changeClass:
                            'inline-block rounded-sm bg-green-600/15 px-2 py-1 font-medium text-green-500',
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
            <Area
              dataKey="utilization"
              type="monotone"
              stroke="url(#viewsGradient)"
              strokeWidth={3}
              fill="url(#viewsGradient)"
              activeDot={{
                r: 3,
                fill: 'var(--chart-2)',
                stroke: 'var(--chart-2)',
              }}
            />
          </AreaChart>
        </ChartContainer>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 1,
            ease: 'easeOut',
          }}
          className="absolute right-4 -bottom-4 z-10 w-120 origin-bottom-right scale-30 sm:scale-40 md:right-8 md:scale-60 lg:-bottom-10 lg:scale-80 xl:scale-90"
        >
          <Terminal className="w-full" />
        </motion.div>
      </div>
      {/* CTA Buttons */}
      <div className="mx-auto mt-10 max-w-md space-y-3 md:mt-20">
        <div className="flex gap-4.5">
          <Button className="flex-1 md:min-w-45" asChild>
            <a href="/demo">Get Started</a>
          </Button>
          <Button className="flex-1 md:min-w-45" variant="outline" asChild>
            <a href="/demo">Request Demo</a>
          </Button>
        </div>
        <div className="text-center text-sm">
          Powering leading neoclouds · 99.9% uptime SLA
        </div>
      </div>
    </section>
  );
}
