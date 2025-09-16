import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Clock, Activity, Bug, Settings, ArrowRight, Folder, BadgeCheck, ChevronsUpDown, Share, FileSpreadsheet, Download, Search } from 'lucide-react';
import { B as Button, c as cn, $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, c as CardDescription } from '../chunks/card_Dgj0kdKs.mjs';
import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { FaAws, FaMicrosoft, FaGoogle, FaGithub, FaSlack, FaDropbox, FaTrello, FaLinkedin, FaTwitter, FaFigma, FaSpotify, FaApple, FaStripe, FaSalesforce, FaMailchimp, FaIntercom, FaShopify, FaDiscord, FaWandSparkles, FaDroplet } from 'react-icons/fa6';
import { AreaChart, Area, LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts';
import { N as NumberTicker } from '../chunks/number-ticker_y_RsPyzb.mjs';
import { B as Badge } from '../chunks/badge_oigLpaa9.mjs';
import { C as ChartContainer, a as ChartTooltip, T as Tabs, b as TabsList, c as TabsTrigger, d as TabsContent } from '../chunks/tabs_DDhi8nj4.mjs';
import { T as Terminal } from '../chunks/terminal_DxRS0OBo.mjs';
import { S as Separator } from '../chunks/separator_DmaRZI4O.mjs';
import { I as Input } from '../chunks/input_CvJkumpX.mjs';
export { renderers } from '../renderers.mjs';

const FEATURE_CARDS$1 = [
  {
    title: "Job Execution Logs",
    description: "Track how long each job takes across different GPU clusters, with detailed timestamps and retry data.",
    icon: Clock,
    cta: "Learn more",
    href: "#"
  },
  {
    title: "Real-Time Infrastructure Feed",
    description: "Monitor your entire fleet in real time — resource utilization, job status, alerts — no refresh needed.",
    icon: Activity,
    cta: "Learn more",
    href: "#"
  },
  {
    title: "System-Level Debugging",
    description: "Drill down into any system to inspect resource usage, job queues, and performance metrics at each level.",
    icon: Bug,
    cta: "Learn more",
    href: "#"
  },
  {
    title: "Custom Metrics & Alerts",
    description: "Set up custom monitoring for specific workloads and track their performance across your infrastructure.",
    icon: Settings,
    cta: "Learn more",
    href: "#"
  }
];
function ProductDashboard() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding relative container !pt-0", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-3xl flex-col items-center text-center", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl", children: "Enterprise-grade monitoring and control for AI/HPC workloads" }) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/dashboard.png",
        alt: "LaunchHPC Dashboard",
        width: 1440,
        height: 905,
        className: "mx-auto mt-10 mask-b-from-50% mask-b-to-95% invert md:mt-16 dark:invert-0"
      }
    ),
    /* @__PURE__ */ jsx("h3", { className: "text-muted-foreground mt-4 text-center uppercase", children: "COMPLETE VISIBILITY ACROSS YOUR ENTIRE INFRASTRUCTURE" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: FEATURE_CARDS$1.map((card, index) => {
      const IconComponent = card.icon;
      return /* @__PURE__ */ jsxs(
        Card,
        {
          className: "group bg-accent/80 gap-4 border-none shadow-none",
          children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "gap-2.5", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-card/50 flex size-10 items-center justify-center rounded-md border", children: /* @__PURE__ */ jsx(IconComponent, { className: "size-4.5 opacity-70" }) }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: card.title })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-1 flex-col", children: [
              /* @__PURE__ */ jsx(CardDescription, { className: "text-muted-foreground flex-1 text-sm", children: card.description }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  asChild: true,
                  className: "group mt-6 h-12 gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95",
                  children: /* @__PURE__ */ jsxs("a", { href: card.href, children: [
                    "Learn more",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
                  ] })
                }
              ) })
            ] })
          ]
        },
        index
      );
    }) })
  ] });
}

const FEATURE_CARDS = [
  {
    title: "Real-Time Job Monitoring",
    description: "Visualize how each job performs across your infrastructure",
    image: "/images/product/debugging.png"
  },
  {
    title: "Export Performance Data",
    description: "Export job metrics, utilization data as CSV, JSON, or XLS",
    image: "/images/product/export.png"
  },
  {
    title: "Resource Utilization Tracking",
    description: "Track GPU utilization, memory usage, and spot performance issues",
    image: "/images/product/performance.png"
  },
  {
    title: "Multi-Cloud Platform Integration",
    description: "Unified monitoring across AWS, Azure, GCP, and on-premises",
    image: "/images/product/integrate.png"
  },
  {
    title: "AI Optimization Insights",
    description: "Monitor AI-driven scheduling decisions and resource allocation",
    image: "/images/product/ai-usage.png"
  }
];
function ProductFeatures() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding container max-w-screen-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xxl leading-tight tracking-tight md:text-5xl", children: "Complete Infrastructure Visibility — When You Need It" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 text-lg leading-snug", children: "Most orchestration platforms hide the details. LaunchHPC shows you what matters — resource utilization, job performance, and system health — in real-time." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-6", children: FEATURE_CARDS.map((card, index) => /* @__PURE__ */ jsx(
      FeatureCard,
      {
        title: card.title,
        description: card.description,
        className: cn(
          "lg:col-span-2",
          (index === 4 || index === 3) && `!h-auto flex-col-reverse justify-between gap-6 lg:col-span-3 lg:flex-row-reverse lg:items-center [&_.card-header]:lg:max-w-50`
        ),
        children: renderCardContent(index)
      },
      card.title
    )) })
  ] });
}
function renderCardContent(index) {
  switch (index) {
    case 0:
      return /* @__PURE__ */ jsx(Card1, {});
    case 1:
      return /* @__PURE__ */ jsx(Card2, {});
    case 2:
      return /* @__PURE__ */ jsx(Card3, {});
    case 3:
      return /* @__PURE__ */ jsx(Card4, {});
    case 4:
      return /* @__PURE__ */ jsx(Card5, {});
    default:
      return null;
  }
}
function FeatureCard({
  title,
  description,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: cn(
        "to-muted/10 via-muted/5 relative justify-between gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-transparent p-8 md:h-[400px]",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(CardContent, { className: "relative p-0", children }),
        /* @__PURE__ */ jsxs(CardHeader, { className: "card-header p-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-accent-foreground text-xl font-bold", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-snug", children: description })
        ] })
      ]
    }
  );
}
function Card1() {
  const performanceData = [
    { label: "0ms", startOffset: 0, width: 85, delay: 0.2 },
    { label: "166ms", startOffset: 15, width: 55, delay: 0.4 },
    { label: "333ms", startOffset: 25, width: 70, delay: 0.6 },
    { label: "500ms", startOffset: 5, width: 40, delay: 0.8 },
    { label: "", startOffset: 30, width: 35, delay: 1 },
    { label: "", startOffset: 45, width: 25, delay: 1.2 },
    { label: "", startOffset: 55, width: 40, delay: 1.4 }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-xl border-t p-5 shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex items-center gap-4", children: [
      /* @__PURE__ */ jsxs("button", { className: "bg-muted/30 flex items-center gap-2 rounded-sm border px-2 py-1", children: [
        /* @__PURE__ */ jsx(FaDroplet, { className: "size-2" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Button" })
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "bg-muted/30 flex items-center gap-2 rounded-sm border px-2 py-1", children: [
        /* @__PURE__ */ jsx(FaDroplet, { className: "size-2" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Button" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[0.625rem]", children: [
        /* @__PURE__ */ jsx("span", { children: "0ms" }),
        /* @__PURE__ */ jsx("span", { children: "166ms" }),
        /* @__PURE__ */ jsx("span", { children: "333ms" }),
        /* @__PURE__ */ jsx("span", { children: "500ms" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: performanceData.map((item, index) => /* @__PURE__ */ jsx("div", { className: "relative h-2", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: `from-chart-1 to-chart-3 absolute top-0 h-2 origin-left rounded-xs bg-gradient-to-r`,
          style: {
            left: `${item.startOffset}%`,
            width: `${item.width}%`
          },
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          viewport: { once: true, amount: 0.3 },
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: item.delay
          }
        }
      ) }, index)) })
    ] })
  ] });
}
function Card2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const exportOptions = [
    { label: "Share URL", icon: Share, shortcut: "⌘ T" },
    { label: "Export to XLS", icon: FileSpreadsheet, shortcut: "⌘ A" },
    { label: "Export to CSV", icon: Download, shortcut: "⌘ J" },
    { label: "AI Adjust", icon: FaWandSparkles, shortcut: "⌘ Q" }
  ];
  const chartData = [
    { name: "Jan", value1: 400, value2: 240 },
    { name: "Feb", value1: 300, value2: 139 },
    { name: "Mar", value1: 200, value2: 300 },
    { name: "Apr", value1: 278, value2: 390 },
    { name: "May", value1: 189, value2: 480 },
    { name: "Jun", value1: 239, value2: 380 }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full overflow-hidden px-5 pb-5", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-5 border mask-b-from-50% mask-b-to-100% p-2 opacity-30", children: /* @__PURE__ */ jsx(
      ChartContainer,
      {
        config: {
          value1: {
            label: "Series 1",
            color: "var(--chart-1)"
          },
          value2: {
            label: "Series 2",
            color: "var(--chart-2)"
          }
        },
        className: "h-full w-full",
        children: /* @__PURE__ */ jsxs(LineChart, { data: chartData, margin: { left: -24 }, children: [
          /* @__PURE__ */ jsx(
            CartesianGrid,
            {
              strokeDasharray: "3 3",
              stroke: "var(--border)",
              opacity: 0.3
            }
          ),
          /* @__PURE__ */ jsx(
            XAxis,
            {
              dataKey: "name",
              axisLine: false,
              tickLine: false,
              tick: { fill: "var(--muted-foreground)", fontSize: 12 }
            }
          ),
          /* @__PURE__ */ jsx(
            YAxis,
            {
              axisLine: false,
              tickLine: false,
              tick: { fill: "var(--muted-foreground)", fontSize: 12 }
            }
          ),
          /* @__PURE__ */ jsx(
            Line,
            {
              type: "monotone",
              dataKey: "value1",
              stroke: "var(--chart-1)",
              strokeWidth: 2,
              dot: false
            }
          ),
          /* @__PURE__ */ jsx(
            Line,
            {
              type: "monotone",
              dataKey: "value2",
              stroke: "var(--chart-2)",
              strokeWidth: 2,
              dot: false
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { ref, className: "mx-auto w-fit", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-accent relative z-10 mb-4 flex w-fit items-center gap-2 rounded-sm border-s-2 border-t-2 px-3 py-1.5 text-xs",
          initial: { opacity: 0, y: -10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: {
            duration: 0.4,
            ease: "easeOut"
          },
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: isInView ? { rotate: 180 } : { rotate: 0 },
                transition: { duration: 0.3, delay: 0.2 },
                children: /* @__PURE__ */ jsx(ChevronsUpDown, { className: "size-3" })
              }
            ),
            "10 days ago"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "bg-accent relative z-10 max-w-fit space-y-2 rounded-md border p-1 backdrop-blur-sm",
          initial: {
            opacity: 0,
            scaleY: 0,
            transformOrigin: "top center"
          },
          whileInView: {
            opacity: 1,
            scaleY: 1
          },
          viewport: { once: true, amount: 0.3 },
          transition: {
            duration: 0.4,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
            // Custom easing for dropdown feel
          },
          children: exportOptions.map((option, index) => {
            const isAIAdjust = option.label === "AI Adjust";
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: cn(
                  "flex cursor-pointer items-center gap-3 rounded-sm px-2 py-1.5 text-xs transition-colors",
                  isAIAdjust ? "hover:bg-card/50 focus:bg-card/40" : "focus:bg-muted focus:text-accent-foreground hover:bg-muted/50"
                ),
                initial: { opacity: 0, x: -5 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, amount: 0.3 },
                transition: {
                  duration: 0.3,
                  delay: 0.6 + index * 0.1,
                  // Start after dropdown opens
                  ease: "easeOut"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    option.icon,
                    {
                      className: cn(
                        "size-4",
                        isAIAdjust ? "text-chart-1" : "text-muted-foreground"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "flex-1",
                        isAIAdjust ? "text-gradient font-medium" : ""
                      ),
                      children: option.label
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "ms-2 text-xs",
                        isAIAdjust ? "text-gradient" : "text-muted-foreground"
                      ),
                      children: option.shortcut
                    }
                  )
                ]
              },
              index
            );
          })
        }
      )
    ] })
  ] });
}
function Card3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return /* @__PURE__ */ jsxs("div", { ref, className: "relative overflow-hidden px-5 pb-5 lg:h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute", children: [
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xl", children: "Successful Jobs" }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
        isInView && /* @__PURE__ */ jsx(
          NumberTicker,
          {
            startValue: 15600,
            value: 18472,
            className: "text-4xxl font-bold"
          }
        ),
        /* @__PURE__ */ jsx(Badge, { variant: "info", className: "rounded-full text-sm", children: "+18%" })
      ] })
    ] }),
    isInView && /* @__PURE__ */ jsx(
      ChartContainer,
      {
        config: {
          runs: {
            label: "Runs",
            color: "var(--chart-2)"
          }
        },
        className: "h-full",
        children: /* @__PURE__ */ jsxs(
          AreaChart,
          {
            data: [
              { month: "Jan", runs: 8200 },
              { month: "Feb", runs: 12100 },
              { month: "Mar", runs: 14600 },
              { month: "Apr", runs: 16400 },
              { month: "May", runs: 17600 },
              { month: "Jun", runs: 18e3 },
              { month: "Jul", runs: 18472 }
            ],
            children: [
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "runGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
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
              ] }) }),
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
    )
  ] });
}
function Card4() {
  const ref = useRef(null);
  const integrationLogos = [
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: FaMicrosoft, name: "Azure", color: "#00A1F1" },
    { icon: FaGoogle, name: "GCP", color: "#4285F4" },
    { icon: FaGithub, name: "GitHub", color: "#909090" },
    { icon: FaSlack, name: "Slack", color: "#4A154B" },
    { icon: FaDropbox, name: "Storage", color: "#0061FF" },
    { icon: FaTrello, name: "Kubernetes", color: "#0079BF" },
    { icon: FaLinkedin, name: "LinkedIn", color: "#0A66C2" },
    { icon: FaTwitter, name: "Twitter", color: "#1DA1F2" },
    { icon: FaFigma, name: "Docker", color: "#F24E1E" },
    { icon: FaSpotify, name: "Terraform", color: "#1DB954" },
    { icon: FaApple, name: "Prometheus", color: "#000000" },
    { icon: FaStripe, name: "Grafana", color: "#635BFF" },
    { icon: FaSalesforce, name: "Jenkins", color: "#00A1E0" },
    { icon: FaMailchimp, name: "Ansible", color: "#FFE01B" },
    { icon: FaIntercom, name: "OpenShift", color: "#0049C7" },
    { icon: FaShopify, name: "NVIDIA", color: "#7AB55C" },
    { icon: FaDiscord, name: "AMD", color: "#5865F2" }
  ];
  return /* @__PURE__ */ jsx("div", { ref, className: "relative h-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "grid w-fit grid-cols-9 gap-1 sm:gap-x-2 sm:gap-y-3 md:grid-cols-6", children: integrationLogos.map((logo, index) => /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "bg-muted/40 hover:bg-accent/50 flex aspect-square size-6 items-center justify-center rounded-sm border transition-colors sm:size-8.5",
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, amount: 0.3 },
      transition: {
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut"
      },
      children: /* @__PURE__ */ jsx(logo.icon, { className: "size-2.5", fill: logo.color })
    },
    logo.name
  )) }) });
}
function Card5() {
  const ref = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref,
        className: "after:bg-accent relative overflow-hidden rounded-sm before:absolute before:inset-0 before:bg-gradient-to-tr before:from-[var(--chart-1)]/10 before:via-[var(--chart-2)] before:to-[var(--chart-3)] after:absolute after:inset-[1px] after:rounded-sm",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: {
          duration: 0.5,
          ease: "easeOut"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-1.5 px-3 py-2.5", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex items-center gap-1.5",
              initial: { opacity: 0, x: -15 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: {
                duration: 0.4,
                delay: 0.2,
                ease: "easeOut"
              },
              children: [
                /* @__PURE__ */ jsx(Folder, { className: "fill-destructive text-destructive size-3" }),
                /* @__PURE__ */ jsx("h3", { className: "text-[0.625rem] font-bold", children: "Job Scheduler" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex items-center gap-1.5",
              initial: { opacity: 0, x: -15 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: {
                duration: 0.4,
                delay: 0.3,
                ease: "easeOut"
              },
              children: [
                /* @__PURE__ */ jsx(BadgeCheck, { className: "size-3 text-emerald-500" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-[0.625rem]", children: "Optimal resource allocation for AI training job" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.p,
      {
        className: "text-muted-foreground mt-4 text-[0.625rem]",
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: {
          duration: 0.4,
          delay: 0.4,
          ease: "easeOut"
        },
        children: [
          "AI Decision:",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Schedule job on GPU cluster 3" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "bg-accent absolute right-0 bottom-0 z-10 -translate-x-1/4 translate-y-1/4 rounded-sm border border-s border-t p-2 shadow-xl lg:right-auto lg:left-0",
        initial: { opacity: 0, x: 30, y: -30 },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: {
          duration: 0.6,
          delay: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-[0.625rem]", children: "GPU Utilization" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(NumberTicker, { startValue: 87, value: 94, className: "text-sm" }),
            "%",
            /* @__PURE__ */ jsx("span", { className: "rounded-full bg-green-600/10 px-1.5 py-0.25 text-[0.6rem] font-medium text-green-600", children: "+8%" })
          ] })
        ]
      }
    )
  ] });
}

const OBSERVABILITY_DATA = [
  { time: "00:00", utilization: 72 },
  { time: "04:00", utilization: 68 },
  { time: "08:00", utilization: 85 },
  { time: "10:00", utilization: 91 },
  { time: "12:00", utilization: 94 },
  { time: "14:00", utilization: 89 },
  { time: "16:00", utilization: 92 },
  { time: "16:00", utilization: 95 },
  { time: "18:00", utilization: 88 },
  { time: "18:00", utilization: 86 },
  { time: "20:00", utilization: 82 },
  { time: "22:00", utilization: 78 },
  { time: "24:00", utilization: 75 }
];
function ProductHero() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding relative container overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-full border p-1 text-xs", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-muted rounded-full px-3 py-1", children: "What's New?" }),
        /* @__PURE__ */ jsx("span", { className: "px-3", children: "LaunchHPC Platform" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-foreground text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl", children: [
        "Monitor your entire fleet in real time with",
        " ",
        /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "comprehensive observability" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl leading-snug md:text-lg lg:text-xl", children: "LaunchHPC provides complete visibility into GPU utilization, job queues, and system health across all your AI/HPC infrastructure." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-10 h-54 w-full md:-mt-20 md:h-96 lg:h-140", children: [
      /* @__PURE__ */ jsx(
        ChartContainer,
        {
          config: {
            utilization: {
              label: "GPU Utilization",
              color: "var(--chart-2)"
            }
          },
          className: "h-full w-full",
          children: /* @__PURE__ */ jsxs(AreaChart, { data: OBSERVABILITY_DATA, children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "viewsGradient", x1: "0", y1: "0", x2: "1", y2: "0", children: [
              /* @__PURE__ */ jsx(
                "stop",
                {
                  offset: "0%",
                  stopColor: "var(--chart-1)",
                  stopOpacity: 0.2
                }
              ),
              /* @__PURE__ */ jsx(
                "stop",
                {
                  offset: "50%",
                  stopColor: "var(--chart-2)",
                  stopOpacity: 0.2
                }
              ),
              /* @__PURE__ */ jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: "var(--chart-3)",
                  stopOpacity: 0.3
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(
              CartesianGrid,
              {
                strokeDasharray: "none",
                stroke: "var(--border)",
                opacity: 0.2,
                horizontal: true,
                vertical: false,
                horizontalCoordinatesGenerator: (props) => {
                  return [
                    props.yAxis.scale(50),
                    props.yAxis.scale(100),
                    props.yAxis.scale(200),
                    props.yAxis.scale(300),
                    props.yAxis.scale(400),
                    props.yAxis.scale(500)
                  ];
                }
              }
            ),
            /* @__PURE__ */ jsx(XAxis, { hide: true }),
            /* @__PURE__ */ jsx(YAxis, { width: 1, stroke: "var(--border)", opacity: 0.2 }),
            /* @__PURE__ */ jsx(
              ChartTooltip,
              {
                content: ({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return /* @__PURE__ */ jsx("div", { className: "bg-background flex flex-col items-center gap-2 rounded-lg border p-3 text-xs shadow-md", children: [
                      {
                        label: "GPU Utilization",
                        value: `${payload[0]?.value}%`,
                        change: "+12%",
                        changeClass: "inline-block rounded-sm bg-green-600/15 px-2 py-1 font-medium text-green-500"
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
              Area,
              {
                dataKey: "utilization",
                type: "monotone",
                stroke: "url(#viewsGradient)",
                strokeWidth: 3,
                fill: "url(#viewsGradient)",
                activeDot: {
                  r: 3,
                  fill: "var(--chart-2)",
                  stroke: "var(--chart-2)"
                }
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95, y: 20 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: { once: true },
          transition: {
            duration: 0.4,
            delay: 1,
            ease: "easeOut"
          },
          className: "absolute right-4 -bottom-4 z-10 w-120 origin-bottom-right scale-30 sm:scale-40 md:right-8 md:scale-60 lg:-bottom-10 lg:scale-80 xl:scale-90",
          children: /* @__PURE__ */ jsx(Terminal, { className: "w-full" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-10 max-w-md space-y-3 md:mt-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4.5", children: [
        /* @__PURE__ */ jsx(Button, { className: "flex-1 md:min-w-45", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/demo", children: "Get Started" }) }),
        /* @__PURE__ */ jsx(Button, { className: "flex-1 md:min-w-45", variant: "outline", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/demo", children: "Request Demo" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center text-sm", children: "Trusted by 150+ enterprises worldwide" })
    ] })
  ] });
}

function ProductLogs() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding container grid max-w-screen-xl gap-8 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-between gap-3", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xxl leading-none tracking-tight text-balance md:text-6xl lg:max-w-xs", children: [
        "Complete ",
        /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
        /* @__PURE__ */ jsxs("span", { className: "text-gradient", children: [
          "Infrastructure ",
          /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
          " Logs"
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-accent-foreground text-xl font-bold", children: "Comprehensive System Monitoring" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 max-w-lg text-lg leading-snug", children: "Every job is tracked across your entire infrastructure - from resource allocation to completion with detailed performance metrics and error analysis." }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          asChild: true,
          className: "group mt-6 h-12 gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95 md:mt-12",
          children: /* @__PURE__ */ jsxs("a", { href: "#", children: [
            "View monitoring dashboard",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
          ] })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(Card, { className: "to-muted/30 via-muted/20 flex h-96 flex-1 overflow-hidden rounded-xl bg-gradient-to-t from-transparent p-0 sm:h-132", children: /* @__PURE__ */ jsx(CardContent, { className: "relative flex items-center justify-center p-0", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.97, y: 20, filter: "blur(8px)" },
        whileInView: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true, amount: 0.5 },
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.35 },
          scale: { duration: 0.5 }
        },
        className: "w-full origin-bottom-right pt-10 pl-20",
        children: /* @__PURE__ */ jsx(TerminalWithHeader, {})
      }
    ) }) })
  ] });
}
function TerminalWithHeader() {
  const [activeTab, setActiveTab] = useState("logs");
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsx(Card, { className: "bg-accent absolute top-5 -left-5 h-full w-full overflow-hidden" }),
    /* @__PURE__ */ jsxs(Card, { className: "bg-accent relative z-10 gap-0 overflow-hidden rounded-e-none border-r-0 shadow-xl", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "border-border gap-3 border-b", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-foreground font-medium", children: [
          "Job Logs - AI Training",
          /* @__PURE__ */ jsx("br", {}),
          "Workload #2847"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "info", children: "Processing" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-[0.625rem]", children: "Started: Sep 4, 2025 — 14:23:45" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between gap-10", children: [
          /* @__PURE__ */ jsx(
            Tabs,
            {
              value: activeTab,
              onValueChange: setActiveTab,
              className: "w-auto",
              children: /* @__PURE__ */ jsxs(TabsList, { className: "bg-input/20 h-7 rounded-md", children: [
                /* @__PURE__ */ jsx(
                  TabsTrigger,
                  {
                    value: "logs",
                    className: "dark:data-[state=active]:bg-accent cursor-pointer rounded-sm border-none text-[0.625rem]",
                    children: "System Logs"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TabsTrigger,
                  {
                    value: "errors",
                    disabled: true,
                    className: "dark:data-[state=active]:bg-accent cursor-pointer rounded-sm border-none text-[0.625rem]",
                    children: "Metrics"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Separator,
                  {
                    orientation: "vertical",
                    className: "bg-input mx-2 !h-5"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TabsTrigger,
                  {
                    value: "payloads",
                    disabled: true,
                    className: "dark:data-[state=active]:bg-accent cursor-pointer rounded-sm border-none text-[0.625rem]",
                    children: "Resources"
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative w-40", children: [
            /* @__PURE__ */ jsx(Search, { className: "text-muted-foreground absolute top-1/2 left-3 size-3 -translate-y-1/2" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Filter by GPU ID, Job ID",
                className: "!bg-background/20 border-input/60 h-7 rounded-sm ps-7 !text-[0.625rem] placeholder:opacity-40"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, className: "w-full", children: [
        /* @__PURE__ */ jsx(TabsContent, { value: "logs", className: "m-0", children: /* @__PURE__ */ jsx(Terminal, { className: "w-full rounded-none border-none" }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "errors", className: "m-0", children: /* @__PURE__ */ jsx("div", { className: "flex h-80 items-start justify-start p-4", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: "GPU utilization: 94% | Memory: 89%" }) }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "payloads", className: "m-0", children: /* @__PURE__ */ jsx("div", { className: "flex h-80 items-start justify-start p-4", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: "8x NVIDIA H100 | 640GB HBM3 | 5.2 PFlops" }) }) })
      ] }) })
    ] })
  ] });
}

const $$Product = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Product - LaunchHPC AI/HPC Orchestration Platform", "description": "Discover LaunchHPC's unified AI/HPC orchestration platform. Explore features like intelligent workload scheduling, real-time monitoring, and enterprise-grade security." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductHero", ProductHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/product-hero", "client:component-export": "default" })} ${renderComponent($$result2, "ProductDashboard", ProductDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/product-dashboard", "client:component-export": "default" })} ${renderComponent($$result2, "ProductFeatures", ProductFeatures, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/product-features", "client:component-export": "default" })} ${maybeRenderHead()}<div class="relative"> <div class="to-accent/50 bg-chart-1 absolute top-0 left-0 -z-3 hidden size-40 -translate-x-1/4 -translate-y-1/2 rounded-full will-change-transform lg:block"></div> ${renderComponent($$result2, "ProductLogs", ProductLogs, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/product-logs", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/product.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/product.astro";
const $$url = "/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Product,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
