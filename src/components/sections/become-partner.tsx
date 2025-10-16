'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function BecomePartner() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'partners' });
      cal('ui', { hideEventTypeDetails: true, layout: 'month_view' });
    })();
  }, []);

  return (
    <section className="section-padding container">
      <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Content */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xxl leading-none tracking-tight md:text-6xl">
            Become a Partner Today
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Join our growing ecosystem of technology leaders, OEMs, and cloud providers. Together, we&apos;re transforming enterprise compute orchestration and delivering measurable value to organizations worldwide.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Partnership Benefits</h3>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Access to cutting-edge AI/HPC orchestration technology</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Co-marketing and go-to-market opportunities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Technical integration and support resources</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Revenue sharing and joint business development</span>
              </li>
            </ul>
            <p className="text-muted-foreground pt-2 text-sm">
              Select a day and time to schedule your partnership consultation.
            </p>
          </div>
        </div>

        {/* Right: Cal.com Embed */}
        <div className="flex items-center justify-center">
          <div
            className="w-full overflow-hidden rounded-lg border bg-white dark:bg-black"
            style={{ height: '500px' }}
          >
            <Cal
              namespace="partners"
              calLink="team/thisway/partners"
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              config={{ layout: 'month_view' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
