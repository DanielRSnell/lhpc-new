import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const newsItems = [
  {
    id: 1,
    logo: {
      src: '/images/logos/forbes.svg',
      alt: 'Forbes',
      width: 162,
      height: 42,
      className: 'invert dark:invert-0',
    },
    title:
      'Amalgamy is transforming enterprise AI infrastructure with intelligent orchestration that scales from edge to exascale. Zero-trust security meets unparalleled performance.',
    readMoreLink: '#',
  },
  {
    id: 2,
    logo: {
      src: '/images/logos/tc.svg',
      alt: 'TechCrunch',
      width: 84,
      height: 42,
    },
    title:
      'Amalgamy delivers true multi-cloud freedom for AI workloads. Enterprise teams can now orchestrate massive compute resources across AWS, Azure, and GCP seamlessly.',
    readMoreLink: '#',
  },
  {
    id: 3,
    logo: {
      src: '/images/logos/the-guardian.svg',
      alt: 'The Guardian',
      width: 127.8,
      height: 48,
      className: 'invert dark:invert-0',
    },
    title:
      'Enterprise-grade, AI-powered, and remarkably intuitive. Amalgamy makes high-performance computing accessible to organizations of any size. This is the future of compute orchestration.',
    readMoreLink: '#',
  },
];

export default function AboutNews() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container">
        <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
          Amalgamy in the news
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.id} className="space-y-3">
              <img
                src={item.logo.src}
                alt={item.logo.alt}
                width={item.logo.width}
                height={item.logo.height}
                className={cn`object-contain ${item.logo.className}`}
              />

              <p className="text-accent-foreground text-lg leading-snug">
                {item.title}
              </p>

              <Button
                variant="ghost"
                asChild
                className="group gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95"
              >
                <a href={item.readMoreLink}>
                  Read more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
