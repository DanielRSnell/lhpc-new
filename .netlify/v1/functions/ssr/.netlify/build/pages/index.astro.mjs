import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_Cm1t2m2d.mjs';
import { A as AIAutomation } from '../chunks/ai-automation_DqI4h14g.mjs';
import { F as Features } from '../chunks/features_C4DpqYjt.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowRight, ChartPie, ChartBar, Activity, Zap, Brain, GitBranch } from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription } from '../chunks/card_Dgj0kdKs.mjs';
import { T as Tabs, b as TabsList, c as TabsTrigger, C as ChartContainer, a as ChartTooltip } from '../chunks/tabs_DDhi8nj4.mjs';
import { c as cn, B as Button, $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
import { LineChart, CartesianGrid, XAxis, YAxis, Line, AreaChart, Area } from 'recharts';
import { N as NumberTicker } from '../chunks/number-ticker_y_RsPyzb.mjs';
import { C as Carousel, a as CarouselContent, b as CarouselItem } from '../chunks/carousel_Dp0h94_E.mjs';
import { S as Separator } from '../chunks/separator_DmaRZI4O.mjs';
export { renderers } from '../renderers.mjs';

const FeaturesTabsSection = () => {
  const [activeTab, setActiveTab] = useState("reporting");
  const TABS_DATA = [
    {
      id: "reporting",
      title: "Real-Time Analytics Dashboard",
      description: "Comprehensive monitoring and analytics to track resource utilization and job performance.",
      image: {
        src: "/images/home/features-tabs/1.webp",
        width: 550,
        height: 544
      },
      className: "self-end justify-self-end justify-end items-end flex md:mt-16 md:ps-16 mt-10 ps-10 w-full"
    },
    {
      id: "stack",
      title: "Multi-Cloud Infrastructure",
      description: "Deploy across AWS, Azure, GCP, and on-premises with unified management.",
      image: {
        src: "/images/home/features-tabs/2.webp",
        width: 380,
        height: 525
      },
      className: "w-full h-full flex justify-center items-center p-14 lg:p-0"
    },
    {
      id: "automations",
      title: "AI-Powered Orchestration",
      description: "Intelligent workload scheduling and resource optimization across your entire fleet.",
      image: {
        src: "/images/home/features-tabs/3.webp",
        width: 550,
        height: 544
      },
      className: "self-end justify-self-end justify-end items-end flex md:mt-15 md:ps-15 mt-10 ps-10 w-full"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "section-padding container grid max-w-screen-xl lg:grid-cols-2 lg:gap-18", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-balance lg:max-w-lg", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xxl leading-tight tracking-tight md:text-5xl", children: [
          "Built for ",
          /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
          "enterprise ",
          /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
          "AI/HPC workloads"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xl leading-7 font-bold", children: "Complete Infrastructure Visibility" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 text-lg leading-snug", children: "Every job is monitored end-to-end - from resource allocation to completion. Full audit trails and compliance reporting included." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Tabs, { value: activeTab, onValueChange: setActiveTab, children: /* @__PURE__ */ jsx(TabsList, { className: "relative h-auto w-full flex-col bg-transparent p-0", children: TABS_DATA.map((tab) => /* @__PURE__ */ jsxs(
        TabsTrigger,
        {
          value: tab.id,
          className: cn(
            "!border-border relative w-full cursor-pointer flex-col items-start rounded-none border-0 border-b !bg-transparent px-0 py-6 transition-all hover:opacity-80",
            activeTab === tab.id && "pb-4"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "text-muted-foreground text-lg transition-colors",
                    activeTab === tab.id && "text-accent-foreground"
                  ),
                  children: tab.title
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: activeTab === tab.id && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -8 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -8 },
                  transition: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  },
                  children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" })
                },
                "arrow"
              ) })
            ] }),
            /* @__PURE__ */ jsx(AnimatePresence, { children: activeTab === tab.id && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scaleX: 0 },
                whileInView: { opacity: 1, scaleX: 1 },
                exit: { opacity: 0, scaleX: 0 },
                transition: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                },
                viewport: { once: true, amount: 1 },
                className: "from-chart-1 via-chart-2 to-chart-3 absolute bottom-0 left-0 h-0.5 w-1/2 origin-left translate-y-1/2 rounded-full bg-gradient-to-r"
              },
              "underline"
            ) }),
            activeTab === tab.id && /* @__PURE__ */ jsx(Card, { className: "to-muted/30 via-muted/20 mt-3 h-96 w-full overflow-hidden rounded-sm bg-gradient-to-t from-transparent p-0 sm:h-132 lg:hidden", children: /* @__PURE__ */ jsx(
              CardContent,
              {
                className: cn("relative flex h-full w-full p-0"),
                children: /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.97 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.95 },
                    transition: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      opacity: { duration: 0.35 },
                      scale: { duration: 0.5 }
                    },
                    className: cn(tab.className, "shrink-0"),
                    children: /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { filter: "blur(8px)" },
                        animate: { filter: "blur(0px)" },
                        transition: { duration: 0.4, delay: 0.1 },
                        children: /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: tab.image.src,
                            alt: tab.title,
                            width: tab.image.width,
                            height: tab.image.height,
                            className: "object-contain invert dark:invert-0"
                          }
                        )
                      }
                    )
                  },
                  tab.id
                )
              }
            ) })
          ]
        },
        tab.id
      )) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "to-muted/30 via-muted/20 hidden h-142 flex-1 overflow-hidden rounded-xl bg-gradient-to-t from-transparent p-0 lg:flex lg:max-xl:justify-end", children: /* @__PURE__ */ jsx(CardContent, { className: "relative h-full w-full p-0", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "sync", children: TABS_DATA.filter((tab) => tab.id === activeTab).map((tab) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.97, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        exit: { opacity: 0, scale: 0.95 },
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.35 },
          scale: { duration: 0.5 }
        },
        className: cn(tab.className, "shrink-0"),
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: tab.image.src,
            alt: tab.title,
            width: tab.image.width,
            height: tab.image.height,
            className: "object-contain invert dark:invert-0"
          }
        )
      },
      tab.id
    )) }) }) })
  ] });
};

const MAIN_CHART_DATA = [
  { month: "Jan", views: 170, clicks: 30 },
  { month: "Feb", views: 135, clicks: 62 },
  { month: "Mar", views: 130, clicks: 68 },
  { month: "Apr", views: 135, clicks: 75 },
  { month: "May", views: 136, clicks: 64 },
  { month: "Jun", views: 130, clicks: 78 },
  { month: "Jul", views: 140, clicks: 110 },
  { month: "Aug", views: 152, clicks: 125 },
  { month: "Sep", views: 190, clicks: 145 },
  { month: "Oct", views: 225, clicks: 165 },
  { month: "Nov", views: 230, clicks: 155 },
  { month: "Dec", views: 280, clicks: 200 }
];
const SMALL_CHART_DATA = [
  { day: 1, runs: 2e3 },
  { day: 2, runs: 3100 },
  { day: 3, runs: 3600 },
  { day: 4, runs: 3400 },
  { day: 5, runs: 5600 },
  { day: 6, runs: 4800 },
  { day: 7, runs: 5812 },
  { day: 9, runs: 6812 },
  { day: 10, runs: 9812 },
  { day: 11, runs: 12012 }
];
const Features2 = () => {
  const cardRef = useRef(null);
  const isChartInView = useInView(cardRef, { once: true, amount: 0.5 });
  return /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "container space-y-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xxl mb-10 max-w-2xl leading-none tracking-tight text-balance md:text-5xl lg:mx-auto lg:mb-15 lg:text-center lg:text-6xl", children: "Complete visibility and control over your compute infrastructure" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5", children: [
      /* @__PURE__ */ jsx(
        Card,
        {
          ref: cardRef,
          className: "dark:to-muted/30 dark:via-muted/10 to-background via-card from-card relative col-span-1 overflow-hidden bg-gradient-to-t p-6 lg:col-span-2 lg:p-8 dark:from-transparent",
          children: /* @__PURE__ */ jsxs(CardContent, { className: "relative h-full gap-6 p-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex max-w-xs flex-col gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2", children: /* @__PURE__ */ jsx(ChartPie, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-accent-foreground text-lg font-bold lg:text-xl", children: "Real-Time Resource Monitoring" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-snug lg:text-lg", children: "Monitor GPU utilization, job queues, and system performance across all your infrastructure in real-time." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pointer-events-auto h-48 w-full lg:absolute lg:right-0 lg:bottom-0 lg:h-80", children: isChartInView && /* @__PURE__ */ jsx(
              ChartContainer,
              {
                config: {
                  views: {
                    label: "Views",
                    color: "var(--chart-2)"
                  },
                  clicks: {
                    label: "Clicks",
                    color: "var(--chart-4)"
                  }
                },
                className: "h-full w-full [&_.recharts-yAxis_.recharts-cartesian-axis-tick-value]:hidden [&_.recharts-yAxis_.recharts-cartesian-axis-tick-value]:lg:block",
                children: /* @__PURE__ */ jsxs(
                  LineChart,
                  {
                    data: MAIN_CHART_DATA,
                    margin: { right: 24, left: 0 },
                    className: "-ml-14 lg:-ml-6",
                    children: [
                      /* @__PURE__ */ jsx(
                        CartesianGrid,
                        {
                          strokeDasharray: "none",
                          stroke: "var(--border)",
                          opacity: 0.3,
                          horizontal: true,
                          vertical: false,
                          horizontalCoordinatesGenerator: (props) => [
                            props.yAxis.scale(50),
                            props.yAxis.scale(100),
                            props.yAxis.scale(150),
                            props.yAxis.scale(200)
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        XAxis,
                        {
                          dataKey: "month",
                          tickLine: false,
                          axisLine: true,
                          tickMargin: 8,
                          tick: { fill: "var(--border)", opacity: 0.7 },
                          tickFormatter: (value, index) => {
                            if (index === 3 || index === 6 || index === 9) {
                              return value;
                            }
                            return "";
                          },
                          interval: 0,
                          padding: { left: 0, right: 0 },
                          stroke: "var(--border)"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        YAxis,
                        {
                          tickLine: false,
                          axisLine: true,
                          tickMargin: 8,
                          tick: { fill: "var(--border)", opacity: 0.5 },
                          ticks: [50, 100, 150],
                          stroke: "var(--border)",
                          domain: [0, 200]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        ChartTooltip,
                        {
                          content: ({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return /* @__PURE__ */ jsx("div", { className: "bg-background flex flex-col items-center gap-2 rounded-lg border p-3 text-xs shadow-md", children: [
                                {
                                  label: "Views",
                                  value: payload[0]?.value,
                                  change: "+74%",
                                  changeClass: "inline-block rounded-sm bg-green-600/15 px-2 py-1  font-medium text-green-500"
                                },
                                {
                                  label: "Clicks",
                                  value: payload[1]?.value,
                                  change: "-52%",
                                  changeClass: "inline-block rounded-sm bg-red-600/15 px-2 py-1  font-medium text-red-400"
                                }
                              ].map((item) => /* @__PURE__ */ jsxs(
                                "div",
                                {
                                  className: "flex items-center gap-3",
                                  children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: item.label }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                                      /* @__PURE__ */ jsx("span", { className: "text-accent-foreground font-medium", children: item.value }),
                                      /* @__PURE__ */ jsx("span", { className: item.changeClass, children: item.change })
                                    ] })
                                  ]
                                },
                                item.label
                              )) });
                            }
                            return null;
                          }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Line,
                        {
                          dataKey: "views",
                          type: "monotone",
                          stroke: "var(--chart-2)",
                          strokeWidth: 2,
                          dot: false,
                          activeDot: {
                            r: 6,
                            fill: "var(--chart-2)",
                            stroke: "var(--chart-2)",
                            strokeWidth: 2
                          }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Line,
                        {
                          dataKey: "clicks",
                          type: "monotone",
                          stroke: "var(--chart-4)",
                          strokeWidth: 2,
                          dot: false,
                          activeDot: {
                            r: 6,
                            fill: "var(--chart-4)",
                            stroke: "var(--chart-4)",
                            strokeWidth: 2
                          }
                        }
                      )
                    ]
                  }
                )
              }
            ) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(Card, { className: "dark:to-muted/50 dark:via-muted/10 to-background via-card from-card relative col-span-1 overflow-hidden bg-gradient-to-br p-6 lg:p-8 dark:from-transparent", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col gap-6 p-0 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2", children: /* @__PURE__ */ jsx(ChartBar, { className: "h-4.5 w-4.5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-accent-foreground text-lg font-bold lg:text-xl", children: "Intelligent Workload Management" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-snug lg:text-lg", children: "AI-powered scheduling automatically optimizes job placement for maximum efficiency and cost savings." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-5 lg:items-stretch", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold lg:text-sm", children: "Total jobs" }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(
                  NumberTicker,
                  {
                    startValue: 3600,
                    value: 3812,
                    className: "text-4xxl font-medium lg:text-5xl"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "rounded-full bg-green-600/10 px-1.5 py-0.5 text-xs font-medium text-green-400", children: "+10.4%" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs lg:mt-2", children: "Last 7 days" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative flex-1", children: isChartInView && /* @__PURE__ */ jsx(
              ChartContainer,
              {
                config: {
                  runs: {
                    label: "Runs",
                    color: "var(--chart-2)"
                  }
                },
                className: "h-full w-full",
                children: /* @__PURE__ */ jsxs(
                  AreaChart,
                  {
                    data: SMALL_CHART_DATA,
                    margin: { top: 0, right: 0, left: 0, bottom: 0 },
                    children: [
                      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
                        "linearGradient",
                        {
                          id: "runGradient",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            /* @__PURE__ */ jsx(
                              "stop",
                              {
                                offset: "0%",
                                stopColor: "var(--chart-2)",
                                stopOpacity: 0.4
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "stop",
                              {
                                offset: "100%",
                                stopColor: "var(--chart-2)",
                                stopOpacity: 0
                              }
                            )
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsx(
                        Area,
                        {
                          dataKey: "runs",
                          stroke: "var(--chart-2)",
                          fill: "url(#runGradient)",
                          strokeWidth: 2,
                          dot: false,
                          type: "monotone"
                        }
                      )
                    ]
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(Separator, { className: "mt-5 mb-8 lg:mt-6" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: [
            {
              label: "Failed Jobs",
              value: "12",
              change: "-15%",
              changeClass: "bg-green-800/10 text-green-800"
            },
            {
              label: "Successful Jobs",
              value: "15,842",
              change: "+23%",
              changeClass: "bg-green-800/10 text-green-800"
            },
            {
              label: "Avg Queue Time",
              value: "1.2m",
              change: "-64%",
              changeClass: "bg-green-800/10 text-green-800"
            }
          ].map((stat, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col justify-between md:gap-1",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground leading-tighter text-xs md:text-sm", children: stat.label }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl font-medium md:text-2xl", children: stat.value }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "rounded-full text-xs font-medium",
                        stat.changeClass
                      ),
                      children: stat.change
                    }
                  )
                ] })
              ]
            },
            idx
          )) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(FeatureCarousel, {}),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        className: "border-input bg-accent max-w-64 flex-1 border",
        children: "Try LaunchHPC"
      }
    ) })
  ] }) });
};
const featureCards = [
  {
    icon: Activity,
    title: "Resource Monitoring",
    description: "Real-time visibility into GPU utilization, memory usage, and job performance across all systems."
  },
  {
    icon: Zap,
    title: "Multi-Cloud Orchestration",
    description: "Seamlessly manage workloads across on-premises, AWS, Azure, GCP, and edge infrastructure."
  },
  {
    icon: Brain,
    title: "AI-Powered Optimization",
    description: "Machine learning algorithms automatically optimize resource allocation and job scheduling."
  },
  {
    icon: GitBranch,
    title: "Workload Portability",
    description: "Run the same workloads anywhere with consistent performance and security guarantees."
  }
];
const FeatureCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const onSelect = useCallback((api2) => {
    setCurrent(api2.selectedScrollSnap());
  }, []);
  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    Carousel,
    {
      setApi,
      opts: {
        align: "start",
        loop: false
      },
      children: /* @__PURE__ */ jsx(CarouselContent, { className: "cursor-grab snap-x snap-mandatory", children: featureCards.map((card, idx) => {
        const IconComponent = card.icon;
        return /* @__PURE__ */ jsx(CarouselItem, { className: "min-w-xs basis-1/4 snap-start", children: /* @__PURE__ */ jsx(
          Card,
          {
            className: cn(
              "bg-card border-0 dark:bg-transparent",
              current === idx && "dark:from-muted/50 dark:via-muted/10 to-card via-card from-background bg-gradient-to-r dark:to-transparent"
            ),
            children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col gap-2.5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsx(IconComponent, { className: cn("h-4 w-4") }),
                /* @__PURE__ */ jsx("h4", { className: cn("text-lg leading-tight"), children: card.title })
              ] }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: cn(
                    "text-muted-foreground hidden text-sm leading-snug md:block"
                  ),
                  children: card.description
                }
              )
            ] })
          }
        ) }, idx);
      }) })
    }
  );
};

function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "section-padding relative", children: /* @__PURE__ */ jsxs("div", { className: "relative container", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-10 lg:flex-row lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex max-w-3xl flex-1 flex-col items-start gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-full border p-1 text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-muted rounded-full px-3 py-1", children: "What's New?" }),
          /* @__PURE__ */ jsx("span", { className: "px-3", children: "LaunchHPC Platform Now Available" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl", children: [
          "Unified AI/HPC orchestration for",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "every environment" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-snug md:text-lg lg:text-xl", children: "LaunchHPC delivers secure, scalable compute orchestration across on-premises, cloud, and hybrid infrastructures. One platform for all your AI and HPC workloads." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4.5", children: [
          /* @__PURE__ */ jsx(Button, { className: "flex-1 md:min-w-45", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/demo", children: "Get Started" }) }),
          /* @__PURE__ */ jsx(Button, { className: "flex-1 md:min-w-45", variant: "outline", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/demo", children: "Request Demo" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center text-sm", children: "Trusted by enterprises · Government ready" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/dashboard.png",
        alt: "App screenshot",
        className: "ring-foreground/5 mt-10 w-full rounded-xs shadow-2xl ring-6 invert md:mt-20 md:rounded-sm md:px-[1px] md:ring-16 lg:mt-30 dark:invert-0",
        width: 1440,
        height: 905
      }
    ),
    /* @__PURE__ */ jsx(GradientSVG, { className: "absolute top-0 right-0 -z-10 origin-right scale-30 md:scale-50 lg:scale-100" })
  ] }) });
}
function GradientSVG({ ...props }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 1342,
      height: 1199,
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#D9D9D9",
            d: "M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#a)",
            d: "M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "url(#b)",
            strokeWidth: 0.631,
            d: "M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#c)",
            d: "m875.715 420.318 203.405-357.96c50.52-10.487-50.57 96.246 0 186.332 80.45 143.304 298.36 312.903 256.86 419.243-67.58 173.19-306.7 49.523-396.529 0-71.863-39.618-72.434-181.585-63.736-247.615Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#d)",
            d: "m46.623 746.37 908.336-619.388 130.381-66.714-46.89 196.709-156.685 413.622c-27.829 50.066-111.545 120.16-223.775 0-98.592-105.557-466.882-3.975-611.367 75.771L.814 777.607c10.115-9.59 25.82-20.205 45.809-31.237Z"
          }
        ),
        /* @__PURE__ */ jsx("g", { filter: "url(#e)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#f)",
            d: "m883.093 595.649 164.727-565.43 4.66 326.52-169.387 238.91Z"
          }
        ) }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "a",
              x1: 1027.3,
              x2: 1027.73,
              y1: 587.333,
              y2: 1198.11,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#9D83E7" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.516, stopColor: "#D445E7" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "b",
              x1: 1027.3,
              x2: 1027.3,
              y1: 587.333,
              y2: 1197.77,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#10CBF4" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#10CBF4", stopOpacity: 0 })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "c",
              x1: 871.897,
              x2: 1188.44,
              y1: 575.509,
              y2: 575.628,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#9259ED" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.514, stopColor: "#CF54EE" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FB8684" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "d",
              x1: 676.669,
              x2: 677.051,
              y1: 60.268,
              y2: 757.516,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#B956EE" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#9672FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "f",
              x1: 1020.81,
              x2: 814.267,
              y1: 202.771,
              y2: 477.618,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#FB07FF" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.505, stopColor: "#FF6847" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FF474A" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "e",
              width: 228.968,
              height: 625.009,
              x: 853.303,
              y: 0.429,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                /* @__PURE__ */ jsx(
                  "feGaussianBlur",
                  {
                    result: "effect1_foregroundBlur_401_39842",
                    stdDeviation: 14.895
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical
        },
        className
      ),
      children: Array(repeat).fill(0).map((_, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse
          }),
          children
        },
        i
      ))
    }
  );
}

const REVIEWS = [
  {
    name: "Dr. Sarah Chen",
    username: "@sarah_hpc",
    body: "@LaunchHPC reduced our AI training job queue times by 60%. Multi-cloud orchestration that actually works.",
    img: "https://avatar.vercel.sh/sarah_hpc"
  },
  {
    name: "Marcus Rodriguez",
    username: "@cloudarch_marcus",
    body: "Finally unified our AWS, Azure, and on-prem GPU clusters with @LaunchHPC. One dashboard, zero vendor lock-in.",
    img: "https://avatar.vercel.sh/cloudarch_marcus"
  },
  {
    name: "Lisa Park",
    username: "@lisapark_ai",
    body: "@LaunchHPC automatically scaled our workloads during peak research season. Saved us $50k in cloud costs.",
    img: "https://avatar.vercel.sh/lisapark_ai"
  },
  {
    name: "DevOps_Mike",
    username: "@mike_devops",
    body: "Security compliance made easy. @LaunchHPC gives us FedRAMP-ready orchestration with zero-trust architecture.",
    img: "https://avatar.vercel.sh/mike_devops"
  },
  {
    name: "Prof. James Liu",
    username: "@prof_liu_cs",
    body: "@LaunchHPC democratized HPC access for our entire computer science department. Students love the intuitive interface.",
    img: "https://avatar.vercel.sh/prof_liu_cs"
  },
  {
    name: "Taylor Kim",
    username: "@taylor_sysadmin",
    body: "@LaunchHPC's AI optimization increased our GPU utilization from 70% to 95%. Game-changing resource efficiency.",
    img: "https://avatar.vercel.sh/taylor_sysadmin"
  }
];
const firstRow = REVIEWS.slice(0, REVIEWS.length / 2);
const secondRow = REVIEWS.slice(REVIEWS.length / 2);
const Testimonials = () => {
  return /* @__PURE__ */ jsxs("section", { className: "container flex flex-col gap-y-10 overflow-x-hidden py-10 md:py-15 lg:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex max-w-lg flex-col gap-15 text-balance", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xxl leading-tight tracking-tight md:text-5xl", children: "Trusted by leading organizations" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-7.5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-snug", children: "From Fortune 500 enterprises to cutting-edge research institutions, teams rely on LaunchHPC for mission-critical AI and HPC workloads." }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            asChild: true,
            className: "text-accent-foreground group gap-3 !px-0 hover:!bg-transparent hover:opacity-90",
            children: /* @__PURE__ */ jsxs("a", { href: "#", children: [
              "Join them today",
              /* @__PURE__ */ jsx(ArrowRight, { className: "size-5 transition-transform group-hover:translate-x-1" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))] flex flex-1 flex-col gap-2.25 overflow-hidden mask-l-from-50% mask-l-to-100%", children: [
      /* @__PURE__ */ jsx(
        Marquee,
        {
          pauseOnHover: true,
          className: "py-0 [--duration:20s] [--gap:calc(var(--spacing)*2.25)]",
          children: firstRow.map((review) => /* @__PURE__ */ jsx(ReviewCard, { ...review }, review.username))
        }
      ),
      /* @__PURE__ */ jsx(
        Marquee,
        {
          reverse: true,
          pauseOnHover: true,
          className: "py-0 [--duration:20s] [--gap:calc(var(--spacing)*2.25)]",
          children: secondRow.map((review) => /* @__PURE__ */ jsx(ReviewCard, { ...review }, review.username))
        }
      )
    ] })
  ] });
};
const ReviewCard = ({
  img,
  name,
  username,
  body
}) => {
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: cn(
        "hover:bg-accent/60 max-w-xs cursor-pointer gap-4 bg-transparent p-6 md:max-w-sm md:p-8",
        "transition-colors duration-200"
      ),
      children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex items-center gap-4 p-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "rounded-full",
              width: 32,
              height: 32,
              alt: `${name} avatar`,
              src: img
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-bold", children: name }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-muted-foreground text-xs", children: username })
          ] })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx("blockquote", { className: "text-sm leading-snug", children: body.split(/(@LaunchHPC)/g).map(
          (part, index) => part === "@LaunchHPC" ? /* @__PURE__ */ jsx("span", { className: "text-chart-1", children: part }, index) : part
        ) }) })
      ]
    }
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", Hero, {})} ${renderComponent($$result2, "Features", Features, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/features", "client:component-export": "default" })} ${renderComponent($$result2, "Features2", Features2, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/features2", "client:component-export": "default" })} ${renderComponent($$result2, "AIAutomation", AIAutomation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/ai-automation", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturesTabsSection", FeaturesTabsSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/features-tabs", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/testimonials", "client:component-export": "default" })} ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/index.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
