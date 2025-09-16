'use client';

import { ArrowRight } from 'lucide-react';

import { Marquee } from '@/components/magicui/marquee';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const REVIEWS = [
  {
    name: 'Dr. Sarah Chen',
    username: '@sarah_hpc',
    body: '@LaunchHPC reduced our AI training job queue times by 60%. Multi-cloud orchestration that actually works.',
    img: 'https://avatar.vercel.sh/sarah_hpc',
  },
  {
    name: 'Marcus Rodriguez',
    username: '@cloudarch_marcus',
    body: 'Finally unified our AWS, Azure, and on-prem GPU clusters with @LaunchHPC. One dashboard, zero vendor lock-in.',
    img: 'https://avatar.vercel.sh/cloudarch_marcus',
  },
  {
    name: 'Lisa Park',
    username: '@lisapark_ai',
    body: '@LaunchHPC automatically scaled our workloads during peak research season. Saved us $50k in cloud costs.',
    img: 'https://avatar.vercel.sh/lisapark_ai',
  },
  {
    name: 'DevOps_Mike',
    username: '@mike_devops',
    body: 'Security compliance made easy. @LaunchHPC gives us FedRAMP-ready orchestration with zero-trust architecture.',
    img: 'https://avatar.vercel.sh/mike_devops',
  },
  {
    name: 'Prof. James Liu',
    username: '@prof_liu_cs',
    body: '@LaunchHPC democratized HPC access for our entire computer science department. Students love the intuitive interface.',
    img: 'https://avatar.vercel.sh/prof_liu_cs',
  },
  {
    name: 'Taylor Kim',
    username: '@taylor_sysadmin',
    body: "@LaunchHPC's AI optimization increased our GPU utilization from 70% to 95%. Game-changing resource efficiency.",
    img: 'https://avatar.vercel.sh/taylor_sysadmin',
  },
];

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2);
const secondRow = REVIEWS.slice(REVIEWS.length / 2);
const Testimonials = () => {
  return (
    <section className="container flex flex-col gap-y-10 overflow-x-hidden py-10 md:py-15 lg:flex-row">
      <div className="flex max-w-lg flex-col gap-15 text-balance">
        <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
          Trusted by leading organizations
        </h2>
        <div className="space-y-7.5">
          <p className="text-muted-foreground text-lg leading-snug">
            From Fortune 500 enterprises to cutting-edge research institutions,
            teams rely on LaunchHPC for mission-critical AI and HPC workloads.
          </p>

          <Button
            variant="ghost"
            asChild
            className="text-accent-foreground group gap-3 !px-0 hover:!bg-transparent hover:opacity-90"
          >
            <a href="#">
              Join them today
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))] flex flex-1 flex-col gap-2.25 overflow-hidden mask-l-from-50% mask-l-to-100%">
        <Marquee
          pauseOnHover
          className="py-0 [--duration:20s] [--gap:calc(var(--spacing)*2.25)]"
        >
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="py-0 [--duration:20s] [--gap:calc(var(--spacing)*2.25)]"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card
      className={cn(
        'hover:bg-accent/60 max-w-xs cursor-pointer gap-4 bg-transparent p-6 md:max-w-sm md:p-8',
        'transition-colors duration-200',
      )}
    >
      <CardHeader className="flex items-center gap-4 p-0">
        <img
          className="rounded-full"
          width={32}
          height={32}
          alt={`${name} avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <CardTitle className="text-sm font-bold">{name}</CardTitle>
          <CardDescription className="text-muted-foreground text-xs">
            {username}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <blockquote className="text-sm leading-snug">
          {body.split(/(@LaunchHPC)/g).map((part, index) =>
            part === '@LaunchHPC' ? (
              <span key={index} className="text-chart-1">
                {part}
              </span>
            ) : (
              part
            ),
          )}
        </blockquote>
      </CardContent>
    </Card>
  );
};
