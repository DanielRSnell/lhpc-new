import { ArrowRight, Check } from 'lucide-react';

import { Separator } from '@/components/ui/separator';

const Pricing36 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex h-full flex-col rounded-4xl bg-gradient-to-r from-blue-500 to-purple-500 p-px">
              <div className="bg-background h-full rounded-[31px] p-8">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold">Standard Plan</p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-6xl font-bold">
                    Custom
                    <span className="text-muted-foreground text-base font-semibold">
                      pricing
                    </span>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    AI/HPC orchestration for growing teams and workloads
                  </p>
                </div>
                <Separator className="my-6" />
                <ul className="space-y-6">
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Multi-cloud orchestration</p>
                      <p className="text-muted-foreground text-sm">
                        Deploy and manage workloads across AWS, Azure, and GCP
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Real-time monitoring</p>
                      <p className="text-muted-foreground text-sm">
                        Monitor compute resources and workload performance in
                        real-time
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">AI-powered optimization</p>
                      <p className="text-muted-foreground text-sm">
                        Intelligent workload placement and resource optimization
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">24/7 technical support</p>
                      <p className="text-muted-foreground text-sm">
                        Expert HPC and AI infrastructure support with guaranteed
                        response times
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href="/demo"
                className="text-background group flex items-center justify-center gap-1.5 py-3 text-center font-medium"
              >
                Contact Sales
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-primary flex h-full flex-col rounded-4xl p-px">
              <div className="bg-background h-full rounded-[31px] p-8">
                <p className="text-xl font-semibold">Enterprise Plan</p>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-6xl font-bold">
                    Contact
                    <span className="text-muted-foreground text-base font-semibold">
                      for pricing
                    </span>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Enterprise-grade AI/HPC orchestration at scale
                  </p>
                </div>
                <Separator className="my-6" />
                <ul className="space-y-6">
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Unlimited GPU clusters</p>
                      <p className="text-muted-foreground text-sm">
                        Scale compute resources without limits across any
                        infrastructure
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">
                        Zero-trust security architecture
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Enterprise-grade security with compliance reporting
                        (FedRAMP, SOC 2)
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">
                        Custom integrations & API access
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Integrate with existing tools and build custom solutions
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Dedicated success manager</p>
                      <p className="text-muted-foreground text-sm">
                        Receive personalized guidance from dedicated specialists
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href="/demo"
                className="text-background group flex items-center justify-center gap-1.5 py-3 text-center font-medium"
              >
                Contact Us
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing36 };
