'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';

import { TypingAnimation } from '@/components/magicui/typing-animation';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

// Default timing constants
const DEFAULT_TYPING_SPEED = 40; // milliseconds per character
const DEFAULT_LINE_PAUSE_DURATION = 0; // pause between lines
const DEFAULT_INITIAL_DELAY = 400; // delay before typing starts
const DEFAULT_CURSOR_BLINK_RATE = 500; // cursor blinking interval
const DEFAULT_TYPING_START_DELAY = 200; // delay before typing begins when in view

interface TerminalProps {
  className?: string;
  typingSpeed?: number;
  linePauseDuration?: number;
  initialDelay?: number;
  cursorBlinkRate?: number;
  typingStartDelay?: number;
}

export function Terminal({
  className,
  typingSpeed = DEFAULT_TYPING_SPEED,
  linePauseDuration = DEFAULT_LINE_PAUSE_DURATION,
  initialDelay = DEFAULT_INITIAL_DELAY,
  cursorBlinkRate = DEFAULT_CURSOR_BLINK_RATE,
  typingStartDelay = DEFAULT_TYPING_START_DELAY,
}: TerminalProps) {
  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, {
    once: true,
    margin: '0px 0px -100px 0px',
  });

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typingStarted, setTypingStarted] = useState(false);

  const logEntries = [
    {
      time: '14:32:00',
      message: 'Initializing HPC workload: "Protein Folding Simulation"',
    },
    { time: '14:32:00', message: 'Environment: Hybrid Cloud + On-Premises' },
    {
      time: '14:32:01',
      message: 'Loaded cluster configuration: 256 GPU nodes available',
    },
    { time: '14:32:02', message: 'Authenticating with compute clusters...' },
    { time: '14:32:03', message: 'Connected to AWS cluster: 64 A100 GPUs online' },
    { time: '14:32:04', message: 'Connected to on-prem cluster: 128 H100 GPUs online' },
    { time: '14:32:05', message: 'Connected to GCP cluster: 64 V100 GPUs online' },
    { time: '14:32:06', message: 'Resource allocation: 128 GPUs requested for job' },
    { time: '14:32:08', message: 'Optimal placement: 96 H100s + 32 A100s allocated' },
    { time: '14:32:09', message: 'Container orchestration: Pulling NVIDIA NGC images' },
    { time: '14:32:12', message: 'Job queued: Position 1 of 3 in priority queue' },
    {
      time: '14:32:15',
      message: 'Job started: PID 847251 across 8 compute nodes',
    },
    { time: '14:32:16', message: 'Real-time monitoring: GPU utilization 94.2%' },
    { time: '14:32:17', message: 'Checkpoint saved: Iteration 1000/10000 complete' },
    { time: '14:32:19', message: 'Performance metrics logged to LaunchHPC dashboard' },
    { time: '14:32:20', message: 'Alert: Temperature threshold exceeded on node-07' },
    { time: '14:32:21', message: 'Auto-scaling: Migrating workload from node-07' },
    { time: '14:32:23', message: 'Job execution continuing on remaining nodes' },
  ];

  // Start typing animation when in view
  useEffect(() => {
    if (isInView && !typingStarted) {
      const timer = setTimeout(() => {
        setTypingStarted(true);
      }, typingStartDelay);
      return () => clearTimeout(timer);
    }
  }, [isInView, typingStarted, typingStartDelay]);

  // Track typing progress and cursor position
  useEffect(() => {
    if (!typingStarted) return;

    const totalDelay =
      logEntries
        .slice(0, currentLineIndex)
        .reduce((acc, entry) => acc + entry.message.length * typingSpeed, 0) +
      currentLineIndex * linePauseDuration;

    const currentEntryDelay =
      logEntries[currentLineIndex]?.message.length * typingSpeed || 0;

    const timer = setTimeout(
      () => {
        if (currentLineIndex < logEntries.length - 1) {
          setCurrentLineIndex((prev) => prev + 1);
        }
      },
      totalDelay + currentEntryDelay + linePauseDuration,
    );

    return () => clearTimeout(timer);
  }, [typingStarted, currentLineIndex, typingSpeed, linePauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkRate);
    return () => clearInterval(cursorInterval);
  }, [cursorBlinkRate]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <aside
      ref={terminalRef}
      className={cn(
        'bg-accent text-muted-foreground border-input/50 overflow-hidden rounded-md border',
        className,
      )}
    >
      {/* Header */}
      <motion.div
        className="border-input/30 grid grid-cols-[6rem_1fr_1rem] items-center gap-3 border-b px-4 py-1.5 text-xs"
        variants={headerVariants}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <motion.div variants={headerVariants}>
          <span>Date</span>
        </motion.div>
        <motion.div
          className="flex items-center gap-3"
          variants={headerVariants}
        >
          <span className="text-[0.625rem]">▶</span>
          <span>Message</span>
        </motion.div>
        <motion.div className="flex justify-end" variants={headerVariants}>
          <Popover>
            <PopoverTrigger asChild>
              <motion.button
                className="hover:bg-muted rounded p-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEllipsisVertical className="h-3 w-3" />
              </motion.button>
            </PopoverTrigger>
            <PopoverContent
              className="bg-popover/80 w-40 p-1 backdrop-blur-sm"
              align="end"
            >
              <div className="space-y-1">
                <button className="hover:bg-accent hover:text-accent-foreground w-full rounded px-3 py-1 text-left text-xs transition-colors">
                  Clear logs
                </button>
                <button className="hover:bg-accent hover:text-accent-foreground w-full rounded px-3 py-1 text-left text-xs transition-colors">
                  Export logs
                </button>
                <button className="hover:bg-accent hover:text-accent-foreground w-full rounded px-3 py-1 text-left text-xs transition-colors">
                  Settings
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </motion.div>
      </motion.div>

      {/* Log entries with fixed height */}
      <div className="h-80 overflow-hidden bg-[#f2dcdc] pt-2 text-xs dark:bg-[hsl(0,33%,10%)]">
        {logEntries.map((entry, index) => (
          <div
            key={index}
            className="grid min-h-[1.5rem] grid-cols-[6rem_1fr_1rem] items-start gap-3 px-4 py-1"
          >
            <div className="flex items-center whitespace-nowrap">
              <div className="bg-destructive me-0.5 h-2 w-0.25" />
              <span className="ms-1">Nov 12</span>
              <span>{entry.time}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-[0.625rem]">▶</span>
              <div className="flex min-h-[1.2rem] items-start leading-relaxed">
                {typingStarted && index <= currentLineIndex && (
                  <TypingAnimation
                    duration={typingSpeed}
                    delay={initialDelay + index * 500}
                    as="span"
                    className="text-xs leading-relaxed font-normal"
                  >
                    {entry.message}
                  </TypingAnimation>
                )}
                <span
                  className={`ml-1 w-2 ${
                    index === currentLineIndex && typingStarted && showCursor
                      ? 'animate-pulse'
                      : 'opacity-0'
                  }`}
                  style={{ color: 'var(--chart-1)' }}
                >
                  |
                </span>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </aside>
  );
}
