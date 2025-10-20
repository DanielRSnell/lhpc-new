'use client';

import {
  Check,
  Cpu,
  Cloud,
  Users,
  Shield,
  Clock,
  Zap,
  Globe,
  Lock,
} from 'lucide-react';

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

const DemoRequest = () => {
  return (
    <section className="section-padding relative">
      <div className="relative container">
        <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center rounded-full border p-1 text-xs">
            <span className="bg-muted rounded-full px-3 py-1">Get Started</span>
            <span className="px-3">Schedule Your Demo</span>
          </div>

          <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
            See Amalgamy in action with a{' '}
            <span className="text-gradient">personalized demo</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl leading-snug md:text-lg lg:text-xl">
            Experience how Amalgamy transforms AI/HPC workload orchestration
            across hybrid cloud environments. Get a tailored demonstration of
            our platform.
          </p>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Cpu className="text-muted-foreground size-4 stroke-[1.5]" />
              <span className="text-muted-foreground">Enterprise Grade</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="text-muted-foreground size-4 stroke-[1.5]" />
              <span className="text-muted-foreground">Multi-Cloud Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-muted-foreground size-4 stroke-[1.5]" />
              <span className="text-muted-foreground">500+ Teams</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-muted-foreground size-4 stroke-[1.5]" />
              <span className="text-muted-foreground">SOC 2 Certified</span>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
          <div className="w-full pb-10 md:space-y-10 md:pb-0">
            <div className="hidden md:block">
              <div className="space-y-16 pb-20 lg:pb-0">
                <div className="mt-16 space-y-6">
                  <p className="text-sm font-semibold">What you'll discover:</p>
                  <div className="flex items-center space-x-2.5">
                    <Check className="text-muted-foreground size-4 shrink-0 stroke-[1.5]" />
                    <p className="text-sm">
                      Live demonstration of multi-cloud orchestration
                      capabilities
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="text-muted-foreground size-4 shrink-0 stroke-[1.5]" />
                    <p className="text-sm">
                      Custom deployment strategy for your infrastructure
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="text-muted-foreground size-4 shrink-0 stroke-[1.5]" />
                    <p className="text-sm">
                      ROI analysis and performance optimization insights
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="text-muted-foreground size-4 shrink-0 stroke-[1.5]" />
                    <p className="text-sm">
                      Enterprise security and compliance features walkthrough
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-accent flex h-8 w-8 items-center justify-center rounded">
                      <span className="text-accent-foreground text-xs font-bold">
                        AWS
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">
                      AWS
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-accent flex h-8 w-8 items-center justify-center rounded">
                      <span className="text-accent-foreground text-xs font-bold">
                        GCP
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">
                      Google Cloud
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-accent flex h-8 w-8 items-center justify-center rounded">
                      <span className="text-accent-foreground text-xs font-bold">
                        K8s
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">
                      Kubernetes
                    </span>
                  </div>
                </div>

                {/* Context Information Cards */}
                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="bg-accent/50 space-y-2 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="text-muted-foreground size-4 stroke-[1.5]" />
                      <h4 className="text-sm font-medium">Demo Duration</h4>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      45-60 minutes personalized session with our solution
                      architects
                    </p>
                  </div>

                  <div className="bg-accent/50 space-y-2 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="text-muted-foreground size-4 stroke-[1.5]" />
                      <h4 className="text-sm font-medium">Live Environment</h4>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Real-time demonstration using actual HPC workloads and
                      data
                    </p>
                  </div>

                  <div className="bg-accent/50 space-y-2 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="text-muted-foreground size-4 stroke-[1.5]" />
                      <h4 className="text-sm font-medium">
                        Global Availability
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Available across all time zones with regional expertise
                    </p>
                  </div>

                  <div className="bg-accent/50 space-y-2 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Lock className="text-muted-foreground size-4 stroke-[1.5]" />
                      <h4 className="text-sm font-medium">Secure Session</h4>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Enterprise-grade security with NDA protection available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center lg:mt-2.5">
            <div className="relative flex w-full max-w-[42rem] min-w-[20rem] flex-col items-center overflow-visible">
              <form className="z-10 w-full space-y-6">
                <div className="border-border bg-accent/20 w-full space-y-8 rounded-xl border px-8 py-10 shadow-sm backdrop-blur-sm">
                  {/* Contact Information Section */}
                  <div className="space-y-4">
                    <h3 className="border-border border-b pb-2 text-lg font-semibold">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-2.5 text-sm font-medium">
                          <label htmlFor="fullName">Full name</label>
                        </div>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <div className="mb-2.5 text-sm font-medium">
                          <label htmlFor="jobTitle">Job title</label>
                        </div>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          placeholder="CTO, DevOps Engineer, etc."
                        />
                      </div>

                      <div>
                        <div className="mb-2.5 text-sm font-medium">
                          <label htmlFor="email">Work email</label>
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john.doe@company.com"
                        />
                      </div>

                      <div>
                        <div className="mb-2.5 text-sm font-medium">
                          <label htmlFor="phone">Phone number</label>
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information Section */}
                  <div className="space-y-4">
                    <h3 className="border-border border-b pb-2 text-lg font-semibold">
                      Company Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-2.5 text-sm font-medium">
                          <label htmlFor="company">Company</label>
                        </div>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Organization"
                        />
                      </div>

                      <div>
                        <div className="mb-2.5 text-sm font-medium">
                          <label htmlFor="companySize">Company size</label>
                        </div>
                        <Select>
                          <SelectTrigger id="companySize" name="companySize">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">
                              11-50 employees
                            </SelectItem>
                            <SelectItem value="51-200">
                              51-200 employees
                            </SelectItem>
                            <SelectItem value="201-1000">
                              201-1000 employees
                            </SelectItem>
                            <SelectItem value="1000+">
                              1000+ employees
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Technical Requirements Section */}
                  <div className="space-y-4">
                    <h3 className="border-border border-b pb-2 text-lg font-semibold">
                      Technical Requirements
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-2.5 text-sm font-medium">
                          <label htmlFor="useCase">Primary use case</label>
                        </div>
                        <Select>
                          <SelectTrigger id="useCase" name="useCase">
                            <SelectValue placeholder="Select primary use case" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ml-training">
                              ML Model Training
                            </SelectItem>
                            <SelectItem value="simulation">
                              HPC Simulations
                            </SelectItem>
                            <SelectItem value="data-processing">
                              Data Processing
                            </SelectItem>
                            <SelectItem value="research">
                              Research Computing
                            </SelectItem>
                            <SelectItem value="rendering">
                              Rendering & Graphics
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <div className="mb-2.5 text-sm font-medium">
                          <label htmlFor="infrastructure">
                            Current infrastructure
                          </label>
                        </div>
                        <Select>
                          <SelectTrigger
                            id="infrastructure"
                            name="infrastructure"
                          >
                            <SelectValue placeholder="Select current setup" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="on-premises">
                              On-premises only
                            </SelectItem>
                            <SelectItem value="cloud-only">
                              Cloud only
                            </SelectItem>
                            <SelectItem value="hybrid">Hybrid cloud</SelectItem>
                            <SelectItem value="multi-cloud">
                              Multi-cloud
                            </SelectItem>
                            <SelectItem value="planning">
                              Planning infrastructure
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div className="space-y-4">
                    <h3 className="border-border border-b pb-2 text-lg font-semibold">
                      Additional Information
                    </h3>
                    <div>
                      <div className="mb-2.5 text-sm font-medium">
                        <label htmlFor="message">
                          Tell us about your specific needs{' '}
                          <span className="text-muted-foreground">
                            (Optional)
                          </span>
                        </label>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full resize-none rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Describe your current challenges, expected workload scale, or any specific requirements..."
                      />
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-end space-y-3 pt-4">
                    <Button type="submit" size="lg">
                      Request Demo
                    </Button>
                    <div className="text-muted-foreground text-center text-xs">
                      We'll contact you within 1 business day to schedule your
                      personalized demo. Read our{' '}
                      <a
                        href="/privacy"
                        className="hover:text-foreground underline transition-colors"
                      >
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
      </div>
    </section>
  );
};

export default DemoRequest;
