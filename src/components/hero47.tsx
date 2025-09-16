import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Hero47Props {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero47 = ({
  heading = 'LaunchHPC for Government',
  subheading = ' Secure AI/HPC Infrastructure',
  description = 'Mission-critical AI and high-performance computing orchestration platform designed for federal agencies, defense contractors, and government organizations. FISMA compliant with FedRAMP authorization pathway.',
  buttons = {
    primary: {
      text: 'Request Security Briefing',
      url: '/demo',
    },
    secondary: {
      text: 'View Compliance Docs',
      url: '/docs',
    },
  },
  image = {
    src: '/dashboard.png',
    alt: 'LaunchHPC Government Dashboard',
  },
}: Hero47Props) => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h2 className="text-foreground text-5xl font-semibold md:text-5xl lg:text-8xl">
            <span>{heading}</span>
            <span className="text-muted-foreground">{subheading}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
            <Button asChild variant="link" className="underline">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute top-2.5 left-1/2! h-[92%]! w-[69%]! -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-[50%_0%]"
            />
          </div>
          <img
            className="relative z-10"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
            width={450}
            height={889}
            alt="iphone"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero47 };
