import { Check } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact1 = () => {
  return (
    <section className="relative py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)] [background-size:8px_8px]"></div>
      <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="text-4xl font-medium lg:text-5xl">
              Book free demo now
            </h1>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
              In non libero bibendum odio pellentesque ullamcorper. Aenean
              condimentum, dolor commodo pulvinar bibendum.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-6">
                <div className="mt-16 flex overflow-hidden">
                  <Avatar className="size-11">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                    <AvatarFallback>SB</AvatarFallback>
                  </Avatar>
                  <Avatar className="-ml-4 size-11">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
                    <AvatarFallback>RA</AvatarFallback>
                  </Avatar>
                  <Avatar className="-ml-4 size-11">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold">What you can expect:</p>
                  <div className="flex items-center space-x-2.5">
                    <Check className="text-muted-foreground size-5 shrink-0" />
                    <p className="text-sm">
                      Detailed product presentation tailored to you
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="text-muted-foreground size-5 shrink-0" />
                    <p className="text-sm">
                      Consulting on your messaging strategy
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="text-muted-foreground size-5 shrink-0" />
                    <p className="text-sm">
                      Answers to all the questions you have
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-12">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg"
                  alt="placeholder"
                  className="h-6"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
                  alt="placeholder"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:mt-2.5">
          <div className="relative flex w-full max-w-[30rem] min-w-[20rem] flex-col items-center overflow-visible md:min-w-[24rem]">
            <form className="z-10 space-y-6">
              <div className="border-border bg-background w-full space-y-6 rounded-xl border px-6 py-10 shadow-sm">
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="fullName">Full name</label>
                  </div>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Joe Average"
                  />
                </div>
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="company">Company</label>
                  </div>
                  <Input id="company" name="company" placeholder="Acme Corp" />
                </div>
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="phone">Phone number</label>
                  </div>
                  <Input id="phone" name="phone" placeholder="12 3456 7890" />
                </div>
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="email">Email (busienss)</label>
                  </div>
                  <Input
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="country">Country</label>
                  </div>
                  <Select>
                    <SelectTrigger id="country" name="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aus">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="companySize">Company size</label>
                  </div>
                  <Select>
                    <SelectTrigger id="companySize" name="companySize">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10</SelectItem>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="200+">200+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="id">
                      How did you hear about us?{' '}
                      <span className="text-muted-foreground">(Optional)</span>
                    </label>
                  </div>
                  <Select>
                    <SelectTrigger id="referral" name="referral">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Web Search</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full flex-col justify-end space-y-3 pt-2">
                  <Button type="submit" asChild>
                    <a href="/demo">Book demo</a>
                  </Button>
                  <div className="text-muted-foreground text-xs">
                    For more information about how we handle your personal
                    information, please visit our{' '}
                    <a href="/demo" className="underline">
                      privacy policy
                    </a>
                    .
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact1 };
