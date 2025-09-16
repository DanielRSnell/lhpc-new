'use client';

import { useState } from 'react';

import {
  Activity,
  Brain,
  Briefcase,
  Building,
  Check,
  Minus,
  Rocket,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type PlanType = 'basic' | 'business' | 'enterprise';

interface Plan {
  name: string;
  type: PlanType;
  icon: React.ElementType;
  price: {
    monthly: number;
    yearly: number;
  };
  button: {
    text: string;
    variant: 'default' | 'outline';
    href: string;
  };
  features: {
    core: {
      name: string;
      value: string | boolean;
    }[];
    automation: {
      name: string;
      value: string | boolean;
    }[];
  };
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    type: 'basic',
    icon: Rocket,
    price: {
      monthly: 14,
      yearly: 140,
    },
    button: {
      text: 'Button',
      variant: 'default',
      href: '/signup',
    },
    features: {
      core: [
        { name: 'Flow Builder', value: true },
        { name: 'Local script support', value: false },
        { name: 'Scheduled Triggers', value: false },
        { name: 'Flow export/import', value: 'Limited' },
        { name: 'Observability dashboard', value: false },
        { name: 'Offline Mode', value: false },
        { name: 'Version history', value: 'Limited' },
      ],
      automation: [
        { name: 'Basic AI Prompts', value: true },
        { name: 'Auto Node generation', value: 'Limited' },
        { name: 'Real time logs', value: false },
        { name: 'Smart flow suggestions', value: false },
        { name: 'Historical logs', value: 'Limited\n1 month only' },
        { name: 'Multi-Step Logic blocks', value: false },
        { name: 'Database', value: false },
      ],
    },
  },
  {
    name: 'Pro',
    type: 'business',
    icon: Briefcase,
    price: {
      monthly: 49,
      yearly: 490,
    },
    button: {
      text: 'Button',
      variant: 'default',
      href: '/signup',
    },
    features: {
      core: [
        { name: 'Flow Builder', value: true },
        { name: 'Local script support', value: false },
        { name: 'Scheduled Triggers', value: true },
        { name: 'Flow export/import', value: 'Limited\nXML supported' },
        { name: 'Observability dashboard', value: true },
        { name: 'Offline Mode', value: false },
        { name: 'Version history', value: true },
      ],
      automation: [
        { name: 'Basic AI Prompts', value: true },
        { name: 'Auto Node generation', value: 'Limited' },
        { name: 'Real time logs', value: true },
        { name: 'Smart flow suggestions', value: false },
        { name: 'Historical logs', value: 'Limited\n3 months only' },
        { name: 'Multi-Step Logic blocks', value: 'Limited\n32 LOGICs' },
        { name: 'Database', value: false },
      ],
    },
  },
  {
    name: 'Team',
    type: 'enterprise',
    icon: Building,
    price: {
      monthly: 29,
      yearly: 290,
    },
    button: {
      text: 'Button',
      variant: 'default',
      href: '/demo',
    },
    features: {
      core: [
        { name: 'Flow Builder', value: true },
        { name: 'Local script support', value: true },
        { name: 'Scheduled Triggers', value: true },
        { name: 'Flow export/import', value: 'Unlimited\nAll file types' },
        { name: 'Observability dashboard', value: true },
        { name: 'Offline Mode', value: true },
        { name: 'Version history', value: true },
      ],
      automation: [
        { name: 'Basic AI Prompts', value: true },
        { name: 'Auto Node generation', value: true },
        { name: 'Real time logs', value: true },
        { name: 'Smart flow suggestions', value: true },
        { name: 'Historical logs', value: 'Full Log\n6 months only' },
        { name: 'Multi-Step Logic blocks', value: 'Unlimited' },
        { name: 'Database', value: true },
      ],
    },
  },
];

const CATEGORY_CONFIG = {
  core: {
    name: 'Core Features',
    icon: Activity,
  },
  automation: {
    name: 'Automation and AI',
    icon: Brain,
  },
};

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('0');

  return (
    <section className="section-padding relative container space-y-15 md:space-y-20 lg:space-y-30">
      <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
        <h1 className="md:text-6xxl text-5xl leading-none tracking-tight text-balance">
          Pricing designed to <br className="hidden sm:block" />
          <span className="text-gradient">scale with you!</span>
        </h1>

        <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
          LaunchHPC is an open-source desktop app that lets you build and run
          automations directly on your machine. No fluff just fast, visual
          workflows powered by you.
        </p>
      </div>

      {/* Mobile Pricing Table */}
      <div className="lg:hidden">
        <div className="mb-8 grid gap-6">
          {PLANS.map((planItem) => (
            <PricingCard key={planItem.name} plan={planItem} />
          ))}
        </div>

        {/* Mobile Feature Comparison */}
        <FeatureComparison
          layout="mobile"
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
        />
      </div>

      {/* Desktop Pricing Table */}
      <div className="hidden overflow-x-auto lg:block">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-4 gap-6">
            <div className="p-0"></div>
            {PLANS.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
          <FeatureComparison layout="desktop" />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  plan,
  className,
}: {
  plan: Plan;
  className?: string;
}) => {
  const isPro = plan.name === 'Pro';

  return (
    <Card
      className={cn(
        'relative overflow-hidden shadow-none dark:bg-[#07070e]',
        isPro &&
          'before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-tr before:from-[var(--chart-1)]/10 before:via-[var(--chart-2)] before:to-[var(--chart-3)] before:mask-b-from-40% before:mask-b-to-80%',
        isPro &&
          'after:bg-card after:absolute after:inset-[1px] after:rounded-[calc(var(--radius)-1px)] dark:after:bg-[#07070e]',
        className,
      )}
    >
      <div
        className={cn(
          'relative z-10 flex h-full flex-col justify-between gap-6',
        )}
      >
        <div className="flex h-full items-center justify-between gap-6 lg:flex-col lg:items-start">
          <CardHeader className="flex-1 gap-4">
            <CardTitle className="text-3xl tracking-tight md:text-4xl">
              {plan.name}
            </CardTitle>
            <CardDescription className="text-base leading-snug md:text-lg lg:text-xl">
              {plan.name === 'Free' &&
                'Perfect for passion projects & simple products'}
              {plan.name === 'Pro' && 'Advanced tools for growing businesses'}
              {plan.name === 'Team' &&
                'Collaborative features for teams and large organisations'}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col items-baseline gap-1 font-medium tracking-tight md:flex-row">
            <span className="font-azeret-mono text-4xxl leading-none md:text-5xl lg:text-6xl">
              ${plan.price.monthly}
            </span>
            <span className="text-muted-foreground text-lg md:text-xl">
              / month
            </span>
          </CardContent>
        </div>
        <CardFooter className="">
          <Button variant="secondary" className="h-12 w-full" asChild>
            <a href={plan.button.href}>{plan.button.text}</a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === 'boolean') {
    return (
      <div
        className={cn(
          `flex size-5.5 items-center justify-center rounded-full`,
          value ? 'bg-secondary' : 'bg-muted',
        )}
      >
        {value ? (
          <Check className={cn('size-3.5')} />
        ) : (
          <Minus className={cn('size-3.5')} />
        )}
      </div>
    );
  }

  return (
    <div>
      {typeof value === 'string'
        ? value.split('\n').map((line, idx) =>
            idx === 0 ? (
              <span key={idx} className="text-accent-foreground text-sm">
                {line}
              </span>
            ) : (
              <span key={idx} className="text-muted-foreground block text-xs">
                {line}
              </span>
            ),
          )
        : value}
    </div>
  );
};

const FeatureComparison = ({
  layout = 'mobile',
  selectedPlan,
  onPlanChange,
}: {
  layout?: 'mobile' | 'desktop';
  selectedPlan?: string;
  onPlanChange?: (planIndex: string) => void;
}) => {
  if (layout === 'mobile') {
    const selectedPlanIndex = parseInt(selectedPlan || '0');
    const plan = PLANS[selectedPlanIndex];

    return (
      <div className="space-y-14">
        {Object.entries(plan.features).map(([category, features], index) => {
          const categoryInfo =
            CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];

          return (
            <div key={category} className="space-y-5.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                    <categoryInfo.icon className="size-4.5" />
                  </div>
                  <h3 className="">{categoryInfo.name}</h3>
                </div>
                {index === 0 && (
                  <Select value={selectedPlan} onValueChange={onPlanChange}>
                    <SelectTrigger className="text-muted-foreground w-22 gap-3 border-0 px-4 text-center">
                      {PLANS[selectedPlanIndex].name}
                    </SelectTrigger>
                    <SelectContent>
                      {PLANS.map((planItem, index) => (
                        <SelectItem key={index} value={index.toString()}>
                          {planItem.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div className="">
                {features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <span className="text-foreground font-medium">
                      {feature.name}
                    </span>
                    <div className="w-22">
                      <FeatureValue value={feature.value} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="space-y-14">
      {Object.entries(CATEGORY_CONFIG).map(([categoryKey, categoryInfo]) => {
        const categoryKeyTyped = categoryKey as keyof typeof CATEGORY_CONFIG;

        return (
          <div key={categoryKey} className="">
            <div className="flex items-center gap-1.5 ps-6 pb-5.5">
              <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                <categoryInfo.icon className="size-4.5" />
              </div>
              <h3 className="">{categoryInfo.name}</h3>
            </div>
            {PLANS[0].features[categoryKeyTyped].map(
              (feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={cn(
                    'grid border-t py-4 lg:grid-cols-4',
                    featureIndex === 0 && 'border-t-0',
                  )}
                >
                  <span className="inline-flex items-center ps-6 font-medium">
                    {feature.name}
                  </span>
                  <div className="col-span-3 grid grid-cols-3">
                    {PLANS.map((plan, planIndex) => {
                      const planFeature =
                        plan.features[categoryKeyTyped][featureIndex];
                      return (
                        <div key={planIndex} className="flex items-center">
                          <FeatureValue value={planFeature.value} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ),
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PricingSection;
