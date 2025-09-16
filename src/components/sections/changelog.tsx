'use client';

import { Bell } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import type { ChangelogEntryData } from '@/lib/changelog';

interface ChangelogProps {
  entries: ChangelogEntryData[];
}

export default function Changelog({ entries }: ChangelogProps) {
  return (
    <section className="section-padding container max-w-5xl space-y-24">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="space-y-3">
          <h1 className="text-4xxl leading-tight font-medium tracking-tight">
            Changelog
          </h1>
          <p className="text-muted-foreground text-lg leading-snug">
            New updates and product improvements
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="bg-muted/40 h-12 gap-2 !px-4 text-base font-normal"
        >
          Subscribe for updates
          <Bell className="h-4 w-4" />
        </Button>
      </div>

      <div className="[--sidebar-width:150px]">
        {/* Changelog entries with timeline */}
        <div className="relative">
          {entries.map((entry, index) => (
            <div key={entry.id} className="flex gap-5 md:gap-12">
              {/* Date column with dot */}
              <div className="relative mt-0.5 shrink-0 md:mt-1.5 md:w-[var(--sidebar-width)]">
                <time className="text-muted-foreground hidden md:inline-block">
                  {entry.date}
                </time>
                <div className="bg-background border-input absolute top-0 right-0 z-10 grid size-5 translate-x-1/2 place-items-center rounded-full border">
                  <div className="bg-secondary size-2 rounded-full" />
                </div>
                <div className="absolute top-0 right-0 h-full w-0.25 bg-[repeating-linear-gradient(to_bottom,var(--input)_0px,var(--input)_8px,transparent_12px,transparent_20px)]" />
              </div>

              {/* Content */}
              <div
                className={cn(
                  'mb-16 flex-1',
                  index === entries.length - 1 && 'mb-0',
                )}
              >
                <time className="text-muted-foreground mb-10 inline-block md:hidden">
                  {entry.date}
                </time>
                <h2 className="text-2xl leading-tight font-medium">
                  {entry.title}
                </h2>

                {/* Content rendered by Astro */}
                <div
                  className="changelog-content mt-4 space-y-4"
                  id={`changelog-content-${entry.id}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button
            variant="secondary"
            className="mt-25 h-12 w-full md:w-[calc(100%-var(--sidebar-width))]"
          >
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
}
