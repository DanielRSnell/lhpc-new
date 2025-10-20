import { FileCheck, Shield } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Cta19 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col rounded-xl border lg:flex-row">
          <div className="grow px-8 py-8 lg:px-16">
            <Badge variant="outline">Government Solution</Badge>
            <div className="mt-4 max-w-xl">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Ready to Deploy Secure HPC for Your Agency?
              </h2>
              <p className="text-muted-foreground mt-4 md:text-lg">
                Amalgamy meets the most stringent government security
                requirements while delivering unmatched HPC performance. From
                classified research to defense simulations, we provide the
                secure foundation your mission-critical workloads demand.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Request Security Brief</Button>
              <Button variant="outline">Schedule Clearance Demo</Button>
            </div>
          </div>
          <div className="flex grow basis-5/12 flex-col justify-between border-t lg:border-t-0 lg:border-l">
            <a
              href="/docs"
              className="hover:bg-muted/50 flex h-full items-center px-9 py-6 transition-colors lg:justify-center"
            >
              <div className="flex gap-4">
                <FileCheck
                  className="size-8 shrink-0 md:size-10"
                  strokeWidth={1.5}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold md:text-xl">
                    Compliance Documentation
                  </h3>
                  <p className="text-muted-foreground max-w-lg md:text-lg">
                    Review our FISMA compliance, FedRAMP authorization, and
                    security certifications.
                  </p>
                </div>
              </div>
            </a>
            <Separator />
            <a
              href="/demo"
              className="hover:bg-muted/50 flex h-full items-center px-9 py-6 transition-colors lg:justify-center"
            >
              <div className="flex gap-4">
                <Shield
                  className="size-8 shrink-0 md:size-10"
                  strokeWidth={1.5}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold md:text-xl">
                    Security Demonstration
                  </h3>
                  <p className="text-muted-foreground max-w-lg md:text-lg">
                    Experience our secure platform with a classified environment
                    demonstration tailored for government needs.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta19 };
