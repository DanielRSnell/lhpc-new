import { jsx, jsxs } from 'react/jsx-runtime';
import { motion, useInView } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { c as cn } from './DefaultLayout_E2baAWzu.mjs';
import * as PopoverPrimitive from '@radix-ui/react-popover';

function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  ...props
}) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true
  });
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [delay, startOnView]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);
    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);
  return /* @__PURE__ */ jsx(
    MotionComponent,
    {
      ref: elementRef,
      className: cn(
        "text-4xl leading-[5rem] font-bold tracking-[-0.02em]",
        className
      ),
      ...props,
      children: displayedText
    }
  );
}

function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}

const DEFAULT_TYPING_SPEED = 40;
const DEFAULT_LINE_PAUSE_DURATION = 0;
const DEFAULT_INITIAL_DELAY = 400;
const DEFAULT_CURSOR_BLINK_RATE = 500;
const DEFAULT_TYPING_START_DELAY = 200;
function Terminal({
  className,
  typingSpeed = DEFAULT_TYPING_SPEED,
  linePauseDuration = DEFAULT_LINE_PAUSE_DURATION,
  initialDelay = DEFAULT_INITIAL_DELAY,
  cursorBlinkRate = DEFAULT_CURSOR_BLINK_RATE,
  typingStartDelay = DEFAULT_TYPING_START_DELAY
}) {
  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typingStarted, setTypingStarted] = useState(false);
  const logEntries = [
    {
      time: "14:32:00",
      message: 'Initializing HPC workload: "Protein Folding Simulation"'
    },
    { time: "14:32:00", message: "Environment: Hybrid Cloud + On-Premises" },
    {
      time: "14:32:01",
      message: "Loaded cluster configuration: 256 GPU nodes available"
    },
    { time: "14:32:02", message: "Authenticating with compute clusters..." },
    { time: "14:32:03", message: "Connected to AWS cluster: 64 A100 GPUs online" },
    { time: "14:32:04", message: "Connected to on-prem cluster: 128 H100 GPUs online" },
    { time: "14:32:05", message: "Connected to GCP cluster: 64 V100 GPUs online" },
    { time: "14:32:06", message: "Resource allocation: 128 GPUs requested for job" },
    { time: "14:32:08", message: "Optimal placement: 96 H100s + 32 A100s allocated" },
    { time: "14:32:09", message: "Container orchestration: Pulling NVIDIA NGC images" },
    { time: "14:32:12", message: "Job queued: Position 1 of 3 in priority queue" },
    {
      time: "14:32:15",
      message: "Job started: PID 847251 across 8 compute nodes"
    },
    { time: "14:32:16", message: "Real-time monitoring: GPU utilization 94.2%" },
    { time: "14:32:17", message: "Checkpoint saved: Iteration 1000/10000 complete" },
    { time: "14:32:19", message: "Performance metrics logged to LaunchHPC dashboard" },
    { time: "14:32:20", message: "Alert: Temperature threshold exceeded on node-07" },
    { time: "14:32:21", message: "Auto-scaling: Migrating workload from node-07" },
    { time: "14:32:23", message: "Job execution continuing on remaining nodes" }
  ];
  useEffect(() => {
    if (isInView && !typingStarted) {
      const timer = setTimeout(() => {
        setTypingStarted(true);
      }, typingStartDelay);
      return () => clearTimeout(timer);
    }
  }, [isInView, typingStarted, typingStartDelay]);
  useEffect(() => {
    if (!typingStarted) return;
    const totalDelay = logEntries.slice(0, currentLineIndex).reduce((acc, entry) => acc + entry.message.length * typingSpeed, 0) + currentLineIndex * linePauseDuration;
    const currentEntryDelay = logEntries[currentLineIndex]?.message.length * typingSpeed || 0;
    const timer = setTimeout(
      () => {
        if (currentLineIndex < logEntries.length - 1) {
          setCurrentLineIndex((prev) => prev + 1);
        }
      },
      totalDelay + currentEntryDelay + linePauseDuration
    );
    return () => clearTimeout(timer);
  }, [typingStarted, currentLineIndex, typingSpeed, linePauseDuration]);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkRate);
    return () => clearInterval(cursorInterval);
  }, [cursorBlinkRate]);
  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      ref: terminalRef,
      className: cn(
        "bg-accent text-muted-foreground border-input/50 overflow-hidden rounded-md border",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "border-input/30 grid grid-cols-[6rem_1fr_1rem] items-center gap-3 border-b px-4 py-1.5 text-xs",
            variants: headerVariants,
            transition: { duration: 0.3, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsx(motion.div, { variants: headerVariants, children: /* @__PURE__ */ jsx("span", { children: "Date" }) }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "flex items-center gap-3",
                  variants: headerVariants,
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[0.625rem]", children: "▶" }),
                    /* @__PURE__ */ jsx("span", { children: "Message" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(motion.div, { className: "flex justify-end", variants: headerVariants, children: /* @__PURE__ */ jsxs(Popover, { children: [
                /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    className: "hover:bg-muted rounded p-1 transition-colors",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: /* @__PURE__ */ jsx(FaEllipsisVertical, { className: "h-3 w-3" })
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  PopoverContent,
                  {
                    className: "bg-popover/80 w-40 p-1 backdrop-blur-sm",
                    align: "end",
                    children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsx("button", { className: "hover:bg-accent hover:text-accent-foreground w-full rounded px-3 py-1 text-left text-xs transition-colors", children: "Clear logs" }),
                      /* @__PURE__ */ jsx("button", { className: "hover:bg-accent hover:text-accent-foreground w-full rounded px-3 py-1 text-left text-xs transition-colors", children: "Export logs" }),
                      /* @__PURE__ */ jsx("button", { className: "hover:bg-accent hover:text-accent-foreground w-full rounded px-3 py-1 text-left text-xs transition-colors", children: "Settings" })
                    ] })
                  }
                )
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "h-80 overflow-hidden bg-[#f2dcdc] pt-2 text-xs dark:bg-[hsl(0,33%,10%)]", children: logEntries.map((entry, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "grid min-h-[1.5rem] grid-cols-[6rem_1fr_1rem] items-start gap-3 px-4 py-1",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center whitespace-nowrap", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-destructive me-0.5 h-2 w-0.25" }),
                /* @__PURE__ */ jsx("span", { className: "ms-1", children: "Nov 12" }),
                /* @__PURE__ */ jsx("span", { children: entry.time })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "mt-0.5 flex-shrink-0 text-[0.625rem]", children: "▶" }),
                /* @__PURE__ */ jsxs("div", { className: "flex min-h-[1.2rem] items-start leading-relaxed", children: [
                  typingStarted && index <= currentLineIndex && /* @__PURE__ */ jsx(
                    TypingAnimation,
                    {
                      duration: typingSpeed,
                      delay: initialDelay + index * 500,
                      as: "span",
                      className: "text-xs leading-relaxed font-normal",
                      children: entry.message
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `ml-1 w-2 ${index === currentLineIndex && typingStarted && showCursor ? "animate-pulse" : "opacity-0"}`,
                      style: { color: "var(--chart-1)" },
                      children: "|"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", {})
            ]
          },
          index
        )) })
      ]
    }
  );
}

export { Terminal as T };
