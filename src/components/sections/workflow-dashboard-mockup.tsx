'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import TextLogo from '@/components/layout/text-logo';

export default function WorkflowDashboardMockup() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'history' | 'config'
  >('overview');
  const [selectedRun, setSelectedRun] = useState<number | null>(null);

  return (
    <div className="mt-10 w-full overflow-hidden rounded-lg shadow-2xl md:mt-20 lg:mt-30">
      {/* Main Dashboard Mockup */}
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="flex">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden w-48 border-r border-white/10 p-4 lg:block">
            <div className="mb-6 flex items-center gap-2">
              <TextLogo textClassName="text-sm" />
            </div>

            <div className="space-y-1 text-sm">
              <div className="rounded px-3 py-2 text-gray-400">Dashboard</div>
              <div className="rounded bg-white/10 px-3 py-2 text-white">
                Workflows
              </div>
              <div className="rounded px-3 py-2 text-gray-400">
                Compute Pools
              </div>
              <div className="rounded px-3 py-2 text-gray-400">
                Silicon Allocation
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1 className="mb-2 text-xl font-semibold text-white md:text-2xl">
                  AI Model Training Pipeline
                </h1>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-500">ID: wf-2847</span>
                  <span className="rounded-full bg-green-500/10 px-2 py-1 text-green-400">
                    Active
                  </span>
                  <span className="rounded-full bg-red-500/10 px-2 py-1 text-red-400">
                    High Priority
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Execute
              </motion.button>
            </div>

            {/* Tabs */}
            <div className="mb-6 flex gap-6 border-b border-white/10 text-sm">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'history', label: 'Execution History' },
                { id: 'config', label: 'Configuration' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as 'overview' | 'history' | 'config')
                  }
                  className="relative pb-3 transition-colors"
                >
                  <span
                    className={
                      activeTab === tab.id ? 'text-white' : 'text-gray-500'
                    }
                  >
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Content Grid */}
                  <div className="grid gap-4 lg:grid-cols-3">
                    {/* Workflow Details */}
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur lg:col-span-2">
                      <h3 className="mb-3 text-sm font-semibold text-white">
                        Workflow Details
                      </h3>
                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="mb-1 text-gray-500">Description</div>
                          <div className="text-gray-300">
                            Distributed training pipeline for computer vision
                            models
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="mb-1 text-gray-500">Created By</div>
                            <div className="text-gray-300">Engineering Team</div>
                          </div>
                          <div>
                            <div className="mb-1 text-gray-500">Total Runs</div>
                            <div className="text-gray-300">127</div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-2 text-gray-500">Tags</div>
                          <div className="flex gap-2">
                            <span className="rounded border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-blue-400">
                              ml-training
                            </span>
                            <span className="rounded border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-blue-400">
                              gpu-workload
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Executions */}
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <h3 className="mb-3 text-sm font-semibold text-white">
                        Recent Runs
                      </h3>
                      <div className="space-y-3">
                        {[
                          { status: 'Completed', id: 127 },
                          { status: 'Failed', id: 126 },
                          { status: 'Completed', id: 125 },
                        ].map((run, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedRun(run.id)}
                            className={`cursor-pointer rounded border p-3 text-xs transition-colors ${
                              selectedRun === run.id
                                ? 'border-purple-500/50 bg-purple-500/10'
                                : 'border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-gray-300">
                                Run #{run.id}
                              </span>
                              <span
                                className={
                                  run.status === 'Completed'
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                }
                              >
                                {run.status}
                              </span>
                            </div>
                            <div className="text-gray-500">
                              Duration: 01:32:18
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <h3 className="mb-3 text-sm font-semibold text-white">
                      Workflow Steps
                    </h3>
                    <div className="space-y-2">
                      {[
                        'Data Preparation',
                        'Model Training',
                        'Validation',
                      ].map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between rounded border border-white/10 p-3 text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-gray-300">
                              {i + 1}
                            </div>
                            <span className="text-gray-300">{step}</span>
                          </div>
                          <span className="text-green-400">Completed</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'history' && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Execution History
                  </h3>
                  <div className="space-y-3">
                    {[
                      { id: 127, status: 'Completed', date: 'Dec 18, 2024' },
                      { id: 126, status: 'Failed', date: 'Dec 17, 2024' },
                      { id: 125, status: 'Completed', date: 'Dec 16, 2024' },
                      { id: 124, status: 'Completed', date: 'Dec 15, 2024' },
                    ].map((execution) => (
                      <motion.div
                        key={execution.id}
                        whileHover={{ x: 4 }}
                        className="flex items-center justify-between rounded border border-white/10 p-4 text-sm"
                      >
                        <div>
                          <div className="text-white">Run #{execution.id}</div>
                          <div className="text-xs text-gray-500">
                            {execution.date}
                          </div>
                        </div>
                        <span
                          className={`text-sm ${
                            execution.status === 'Completed'
                              ? 'text-green-400'
                              : 'text-red-400'
                          }`}
                        >
                          {execution.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'config' && (
                <motion.div
                  key="config"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Configuration
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="mb-2 text-gray-400">Resource Limits</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Max GPUs</span>
                          <span className="text-white">8</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Memory Limit</span>
                          <span className="text-white">512 GB</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Timeout</span>
                          <span className="text-white">48 hours</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 text-gray-400">
                        Environment Variables
                      </div>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="rounded bg-black/30 p-2">
                          BATCH_SIZE=32
                        </div>
                        <div className="rounded bg-black/30 p-2">
                          LEARNING_RATE=0.001
                        </div>
                        <div className="rounded bg-black/30 p-2">
                          EPOCHS=100
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
