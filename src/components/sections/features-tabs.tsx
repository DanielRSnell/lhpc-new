'use client';

import { useState } from 'react';

import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const FeaturesTabsSection = () => {
  const [activeTab, setActiveTab] = useState('reporting');

  const TABS_DATA = [
    {
      id: 'reporting',
      title: 'Real-Time Analytics Dashboard',
      description:
        'Comprehensive monitoring and analytics to track resource utilization and job performance.',
      image: {
        src: '/images/home/features-tabs/1.webp',
        width: 550,
        height: 544,
      },
      className:
        'self-end justify-self-end justify-end items-end flex md:mt-16 md:ps-16 mt-10 ps-10 w-full',
    },
    {
      id: 'stack',
      title: 'Multi-Cloud Infrastructure',
      description:
        'Deploy across AWS, Azure, GCP, and on-premises with unified management.',
      image: {
        src: '/images/home/features-tabs/2.webp',
        width: 380,
        height: 525,
      },
      className: 'w-full h-full flex justify-center items-center p-14 lg:p-0',
    },
    {
      id: 'automations',
      title: 'AI-Powered Orchestration',
      description:
        'Intelligent workload scheduling and resource optimization across your entire fleet.',
      image: {
        src: '/images/home/features-tabs/3.webp',
        width: 550,
        height: 544,
      },
      className:
        'self-end justify-self-end justify-end items-end flex md:mt-15 md:ps-15 mt-10 ps-10 w-full',
    },
  ];

  return (
    <section className="section-padding container grid max-w-screen-xl lg:grid-cols-2 lg:gap-18">
      {/* Left: Text & Tabs */}
      <div className="flex flex-col justify-between gap-3">
        <div className="space-y-6 text-balance lg:max-w-lg">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Built for <br className="hidden lg:block" />
            enterprise <br className="hidden lg:block" />
            AI/HPC workloads
          </h2>
          <span className="text-xl leading-7 font-bold">
            Complete Infrastructure Visibility
          </span>
          <p className="text-muted-foreground mt-3 text-lg leading-snug">
            Every job is monitored end-to-end - from resource allocation to
            completion. Full audit trails and compliance reporting included.
          </p>
        </div>
        {/* Tabs Section */}
        <div className="">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="relative h-auto w-full flex-col bg-transparent p-0">
              {TABS_DATA.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    '!border-border relative w-full cursor-pointer flex-col items-start rounded-none border-0 border-b !bg-transparent px-0 py-6 transition-all hover:opacity-80',
                    activeTab === tab.id && 'pb-4',
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        'text-muted-foreground text-lg transition-colors',
                        activeTab === tab.id && 'text-accent-foreground',
                      )}
                    >
                      {tab.title}
                    </span>
                    <AnimatePresence>
                      {activeTab === tab.id && (
                        <motion.div
                          key="arrow"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <ArrowRight className="size-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Animated underline */}
                  <AnimatePresence>
                    {activeTab === tab.id && (
                      <motion.div
                        key="underline"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: true, amount: 1 }}
                        className="from-chart-1 via-chart-2 to-chart-3 absolute bottom-0 left-0 h-0.5 w-1/2 origin-left translate-y-1/2 rounded-full bg-gradient-to-r"
                      />
                    )}
                  </AnimatePresence>

                  {/* Mobile card - only show under active tab */}
                  {activeTab === tab.id && (
                    <Card className="to-muted/30 via-muted/20 mt-3 h-96 w-full overflow-hidden rounded-sm bg-gradient-to-t from-transparent p-0 sm:h-132 lg:hidden">
                      <CardContent
                        className={cn('relative flex h-full w-full p-0')}
                      >
                        <motion.div
                          key={tab.id}
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                            opacity: { duration: 0.35 },
                            scale: { duration: 0.5 },
                          }}
                          className={cn(tab.className, 'shrink-0')}
                        >
                          <motion.div
                            initial={{ filter: 'blur(8px)' }}
                            animate={{ filter: 'blur(0px)' }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <img
                              src={tab.image.src}
                              alt={tab.title}
                              width={tab.image.width}
                              height={tab.image.height}
                              className="object-contain invert dark:invert-0"
                            />
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Right: Image on Gradient - Desktop Only */}
      <Card className="to-muted/30 via-muted/20 hidden h-142 flex-1 overflow-hidden rounded-xl bg-gradient-to-t from-transparent p-0 lg:flex lg:max-xl:justify-end">
        <CardContent className="relative h-full w-full p-0">
          <AnimatePresence mode="sync">
            {TABS_DATA.filter((tab) => tab.id === activeTab).map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, scale: 0.97, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { duration: 0.35 },
                  scale: { duration: 0.5 },
                }}
                className={cn(tab.className, 'shrink-0')}
              >
                <img
                  src={tab.image.src}
                  alt={tab.title}
                  width={tab.image.width}
                  height={tab.image.height}
                  className="object-contain invert dark:invert-0"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeaturesTabsSection;
