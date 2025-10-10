export default function WorkflowConfigMockup() {
  return (
    <div className="flex h-full overflow-hidden rounded-lg border shadow-lg">
      <div className="flex flex-1 flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">
            Workflow Configuration
          </h3>
          <p className="mt-1 text-xs text-gray-400">
            Deploy anywhere • Zero refactoring
          </p>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-sm font-medium text-white">
              Resource Requirements
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">GPUs per node</span>
                <span className="text-white">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Memory</span>
                <span className="text-white">256 GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Storage</span>
                <span className="text-white">2 TB NVMe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network</span>
                <span className="text-white">400 Gbps</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-sm font-medium text-white">
              Target Environments
            </div>
            <div className="flex flex-wrap gap-2">
              {['On-Premises', 'CoreWeave', 'Lambda Labs', 'AWS'].map(
                (env) => (
                  <span
                    key={env}
                    className="rounded border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-xs text-blue-400"
                  >
                    {env}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-sm font-medium text-white">
              Scheduling
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Priority</span>
                <span className="text-white">High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Runtime</span>
                <span className="text-white">48h</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Portability Status</span>
              <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">
                Ready to deploy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
