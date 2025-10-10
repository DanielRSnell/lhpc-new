export default function ComputePoolsMockup() {
  return (
    <div className="flex h-full overflow-hidden rounded-lg border shadow-lg">
      <div className="flex flex-1 flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Compute Pools</h3>
          <button className="rounded bg-purple-600 px-3 py-1.5 text-sm text-white">
            + New Pool
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto">
          {[
            { name: 'GPU Training Pool', gpus: 64, util: 87, status: 'active' },
            { name: 'Research Compute', gpus: 32, util: 72, status: 'active' },
            { name: 'Inference Pool', gpus: 16, util: 45, status: 'active' },
            { name: 'Dev Environment', gpus: 8, util: 34, status: 'active' },
          ].map((pool, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <div className="font-medium text-white">{pool.name}</div>
                  <div className="mt-1 text-xs text-gray-400">
                    {pool.gpus} GPUs • Multi-tenant
                  </div>
                </div>
                <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">
                  {pool.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Utilization</span>
                  <span className="text-white">{pool.util}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    style={{ width: `${pool.util}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
