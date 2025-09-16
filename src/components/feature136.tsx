import { Shield, Lock, CheckCircle, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Feature136 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid place-content-center gap-10 lg:grid-cols-2">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 lg:items-start">
            <Badge
              variant="outline"
              className="flex items-center gap-1 px-2.5 py-1.5 text-sm"
            >
              <Trophy className="h-auto w-4" />
              Government Ready
            </Badge>
            <h2 className="text-center text-3xl font-semibold lg:text-left lg:text-4xl">
              Trusted by Federal Agencies
            </h2>
            <p className="text-center text-muted-foreground lg:text-left lg:text-lg">
              LaunchHPC provides secure, compliant AI/HPC infrastructure for
              mission-critical government workloads. From classified research to
              defense simulations, our platform meets the highest security standards
              while delivering unmatched performance.
            </p>

            <div className="mt-9 flex w-full flex-col justify-center gap-6 md:flex-row lg:justify-start">
              <div className="flex justify-between gap-6">
                <div className="mx-auto">
                  <p className="mb-1.5 text-3xl font-bold">99.99%</p>
                  <p className="text-muted-foreground">Uptime SLA</p>
                </div>
                <Separator orientation="vertical" className="h-auto" />
                <div className="mx-auto">
                  <p className="mb-1.5 text-3xl font-bold">24/7</p>
                  <p className="text-muted-foreground">Support</p>
                </div>
              </div>
              <Separator
                orientation="vertical"
                className="hidden h-auto md:block"
              />
              <Separator orientation="horizontal" className="block md:hidden" />
              <div className="flex justify-between gap-6">
                <div className="mx-auto">
                  <p className="mb-1.5 text-3xl font-bold">FISMA</p>
                  <p className="text-muted-foreground">Compliant</p>
                </div>
                <Separator orientation="vertical" className="h-auto" />
                <div className="mx-auto">
                  <p className="mb-1.5 text-3xl font-bold">IL-5</p>
                  <p className="text-muted-foreground">Authorized</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/dashboard.png"
            alt="LaunchHPC Government Security Dashboard"
            className="ml-auto max-h-[450px] w-full rounded-xl object-cover"
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex flex-col items-center gap-2 lg:flex-row">
                <Shield className="h-auto w-6" />
                <h3 className="text-center text-lg font-medium lg:text-left">
                  Security First
                </h3>
              </div>
              <p className="text-center text-sm text-muted-foreground md:text-base lg:text-left">
                End-to-end encryption, zero-trust architecture, and continuous
                compliance monitoring for government workloads.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex flex-col items-center gap-2 lg:flex-row">
                <Lock className="h-auto w-6" />
                <h3 className="text-center text-lg font-medium lg:text-left">
                  Classified Ready
                </h3>
              </div>
              <p className="text-center text-sm text-muted-foreground md:text-base lg:text-left">
                Air-gapped deployments, SCIF compatibility, and multi-level
                security controls for sensitive government operations.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex flex-col items-center gap-2 lg:flex-row">
                <CheckCircle className="h-auto w-6" />
                <h3 className="text-center text-lg font-medium lg:text-left">
                  Audit Ready
                </h3>
              </div>
              <p className="text-center text-sm text-muted-foreground md:text-base lg:text-left">
                Comprehensive logging, automated compliance reports, and
                third-party security certifications for government audits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature136 };
