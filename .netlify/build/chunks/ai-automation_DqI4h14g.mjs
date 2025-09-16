import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useId, useState, useEffect, useRef } from 'react';
import { Sparkles, Users, Building2, Folder, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { c as cn } from './DefaultLayout_E2baAWzu.mjs';
import { N as NumberTicker } from './number-ticker_y_RsPyzb.mjs';

const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "var(--chart-2)",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const gradientCoordinates = reverse ? {
    x1: ["90%", "-10%"],
    x2: ["100%", "0%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  } : {
    x1: ["10%", "110%"],
    x2: ["0%", "100%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  };
  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();
        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });
        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        updatePath();
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    updatePath();
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset
  ]);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      fill: "none",
      width: svgDimensions.width,
      height: svgDimensions.height,
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        className
      ),
      viewBox: `0 0 ${svgDimensions.width} ${svgDimensions.height}`,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: pathD,
            stroke: pathColor,
            strokeWidth: pathWidth,
            strokeOpacity: pathOpacity,
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: pathD,
            strokeWidth: pathWidth,
            stroke: `url(#${id})`,
            strokeOpacity: "1",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
          motion.linearGradient,
          {
            className: "transform-gpu",
            id,
            gradientUnits: "userSpaceOnUse",
            initial: {
              x1: "0%",
              x2: "0%",
              y1: "0%",
              y2: "0%"
            },
            animate: {
              x1: gradientCoordinates.x1,
              x2: gradientCoordinates.x2,
              y1: gradientCoordinates.y1,
              y2: gradientCoordinates.y2
            },
            transition: {
              delay,
              duration,
              ease: [0.16, 1, 0.3, 1],
              // https://easings.net/#easeOutExpo
              repeat: Infinity,
              repeatDelay: 0
            },
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: gradientStartColor, stopOpacity: "0" }),
              /* @__PURE__ */ jsx("stop", { stopColor: gradientStartColor }),
              /* @__PURE__ */ jsx("stop", { offset: "32.5%", stopColor: gradientStopColor }),
              /* @__PURE__ */ jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: gradientStopColor,
                  stopOpacity: "0"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};

const stats = [
  {
    value: 2.4,
    suffix: "M+",
    label: "Jobs Processed"
  },
  {
    value: 156,
    suffix: "+",
    label: "Enterprise Customers"
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA"
  }
];
const cards = [
  {
    id: "scheduler",
    title: "Workload Scheduler",
    subtitle: "Analyzing resource availability and job requirements",
    icon: Users,
    iconColor: "text-purple-500",
    position: "absolute top-0 left-0",
    isGenerating: false
  },
  {
    id: "optimizer",
    title: "Resource Optimizer",
    subtitle: "GPU utilization at 94%, recommending scaling",
    icon: Building2,
    iconColor: "text-blue-500",
    position: "absolute top-32 left-0",
    isGenerating: false
  },
  {
    id: "generating",
    title: "AI Orchestrating Jobs",
    subtitle: "",
    icon: null,
    iconColor: "",
    position: "absolute top-18 right-0",
    isGenerating: true
  },
  {
    id: "monitor",
    title: "System Monitor",
    subtitle: "All systems healthy, 1.2M jobs completed today",
    icon: Folder,
    iconColor: "fill-destructive text-destructive",
    position: "absolute right-0 bottom-0",
    isGenerating: false
  }
];
function AIAutomation() {
  const containerRef = useRef(null);
  const connectorRef = useRef(null);
  const rightCard1Ref = useRef(null);
  const rightCard2Ref = useRef(null);
  const rightCard3Ref = useRef(null);
  const rightCard4Ref = useRef(null);
  const cardRefs = [rightCard1Ref, rightCard2Ref, rightCard3Ref, rightCard4Ref];
  return /* @__PURE__ */ jsxs("section", { className: "section-padding container", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: containerRef,
        className: "relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-1 flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                ref: connectorRef,
                className: "after:bg-accent relative mt-10 w-fit rounded-full after:absolute after:inset-[2px] after:rounded-full max-lg:order-3 lg:mt-0",
                initial: { opacity: 0.8 },
                whileInView: { opacity: 1 },
                viewport: { once: true, amount: 1 },
                transition: { duration: 0.8, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 rounded-full bg-gradient-to-r from-[var(--chart-1)] via-[var(--chart-2)] to-[var(--chart-3)] blur-xs",
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      viewport: { once: true, amount: 1 },
                      transition: { duration: 1, ease: "easeOut", delay: 0.3 }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "from-chart-2 to-chart-3 absolute inset-0 top-0 bg-gradient-to-r blur-3xl will-change-transform",
                      initial: { opacity: 0 },
                      whileInView: { opacity: 0.2 },
                      viewport: { once: true, amount: 1 },
                      transition: { duration: 1.2, ease: "easeOut", delay: 0.2 }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 rounded-full bg-gradient-to-r from-[var(--chart-1)] via-[var(--chart-2)] to-[var(--chart-3)]",
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      viewport: { once: true, amount: 1 },
                      transition: { duration: 0.8, ease: "easeOut", delay: 0.1 }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-2 px-5 py-4 text-xs lg:text-sm", children: [
                    /* @__PURE__ */ jsx(Sparkles, { className: "fill-foreground size-3.5 shrink-0" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "AI Prompt:" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-accent-foreground", children: "Optimize GPU allocation for training workloads" })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xxl leading-tight tracking-normal md:text-5xl", children: [
              "Intelligent orchestration with ",
              /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "AI-powered automation" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2 max-w-xl text-lg leading-snug", children: "From infrastructure to insights in minutes. LaunchHPC's AI automatically optimizes resource allocation, job scheduling, and system performance across your entire compute environment." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative h-full min-h-[300px]", children: cards.map((card, index) => {
            const IconComponent = card.icon;
            return /* @__PURE__ */ jsx(
              "div",
              {
                ref: cardRefs[index],
                className: cn(
                  "z-10 w-fit space-y-2 px-3 py-2.5",
                  card.position,
                  card.isGenerating ? "after:bg-accent rounded-full before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[var(--chart-1)] before:via-[var(--chart-2)] before:to-[var(--chart-3)] after:absolute after:inset-[1px] after:rounded-full" : "bg-accent rounded-md shadow-xl"
                ),
                children: card.isGenerating ? /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "fill-foreground size-3" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-accent-foreground text-[0.625rem] font-semibold lg:text-sm", children: card.title })
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    IconComponent && /* @__PURE__ */ jsx(
                      IconComponent,
                      {
                        className: `size-3 lg:size-3.5 ${card.iconColor}`
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "text-xs font-bold lg:text-sm", children: card.title })
                  ] }),
                  card.subtitle && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(BadgeCheck, { className: "size-3 text-emerald-600 lg:size-3.5" }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-[0.625rem] lg:text-xs", children: card.subtitle })
                  ] })
                ] })
              },
              card.id
            );
          }) }),
          /* @__PURE__ */ jsx(
            AnimatedBeam,
            {
              containerRef,
              fromRef: connectorRef,
              toRef: rightCard1Ref,
              gradientStartColor: "var(--chart-3)",
              gradientStopColor: "var(--chart-1)",
              duration: 30,
              curvature: 0
            }
          ),
          /* @__PURE__ */ jsx(
            AnimatedBeam,
            {
              containerRef,
              fromRef: connectorRef,
              toRef: rightCard2Ref,
              gradientStartColor: "var(--chart-3)",
              gradientStopColor: "var(--chart-1)",
              duration: 30,
              curvature: 0,
              className: "hidden lg:block"
            }
          ),
          /* @__PURE__ */ jsx(
            AnimatedBeam,
            {
              containerRef,
              fromRef: rightCard1Ref,
              toRef: rightCard3Ref,
              gradientStartColor: "var(--chart-3)",
              gradientStopColor: "var(--chart-1)",
              duration: 25,
              curvature: 70,
              startYOffset: 20,
              endXOffset: 30
            }
          ),
          /* @__PURE__ */ jsx(
            AnimatedBeam,
            {
              containerRef,
              fromRef: rightCard2Ref,
              toRef: rightCard3Ref,
              gradientStartColor: "var(--chart-3)",
              gradientStopColor: "var(--chart-1)",
              duration: 20,
              curvature: 0,
              className: "hidden lg:block"
            }
          ),
          /* @__PURE__ */ jsx(
            AnimatedBeam,
            {
              containerRef,
              fromRef: rightCard3Ref,
              toRef: rightCard4Ref,
              gradientStartColor: "var(--chart-3)",
              gradientStopColor: "var(--chart-1)",
              duration: 35,
              curvature: 20,
              endXOffset: 40
            }
          ),
          /* @__PURE__ */ jsx(
            AnimatedBeam,
            {
              containerRef,
              fromRef: rightCard4Ref,
              toRef: rightCard2Ref,
              gradientStartColor: "var(--chart-3)",
              gradientStopColor: "var(--chart-1)",
              duration: 48,
              curvature: 0
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl pt-12 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Our numbers say it all:" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-3 justify-between gap-6", children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold md:text-3xl", children: [
          /* @__PURE__ */ jsx(
            NumberTicker,
            {
              value: stat.value,
              decimalPlaces: stat.value % 1 !== 0 ? 1 : 0
            }
          ),
          stat.suffix
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: stat.label })
      ] }, index)) })
    ] })
  ] });
}

export { AIAutomation as A };
