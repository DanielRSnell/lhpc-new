'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Button } from '@/components/ui/button';

interface CalComWidgetProps {
  title: string;
  subhead: string;
  calLink?: string;
  fallbackHref?: string;
}

export default function CalComWidget({
  title,
  subhead,
  calLink = 'team/thisway/launch-hpc',
  fallbackHref = '/contact',
}: CalComWidgetProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'launch-hpc' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <section className="section-padding bg-accent/30 container max-w-screen-xl">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">{subhead}</p>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        {/* Cal.com Embed */}
        <div className="rounded-lg border bg-white dark:bg-black" style={{ minHeight: '600px' }}>
          <Cal
            namespace="launch-hpc"
            calLink={calLink}
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{ layout: 'month_view' }}
          />
        </div>
      </div>
    </section>
  );
}
