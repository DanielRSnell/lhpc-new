export default function SiliconAllocationMockup() {
  return (
    <div className="flex h-full overflow-hidden rounded-lg border shadow-lg">
      <div className="flex flex-1 flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">
            Silicon Allocation
          </h3>
          <p className="mt-1 text-xs text-gray-400">
            Real-time GPU utilization metrics
          </p>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto">
          {[
            { type: 'H100', count: 32, util: 92, temp: 68 },
            { type: 'A100', count: 64, util: 78, temp: 62 },
            { type: 'L40S', count: 16, util: 54, temp: 58 },
            { type: 'A40', count: 24, util: 61, temp: 56 },
          ].map((gpu, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-white/5 p-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white">
                    NVIDIA {gpu.type}
                  </div>
                  <div className="mt-0.5 text-xs text-gray-400">
                    {gpu.count} GPUs active
                  </div>
                </div>
                <div className="text-right text-xs">
                  <div className="text-gray-400">Temp</div>
                  <div className="text-white">{gpu.temp}°C</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="mb-1 text-gray-400">Utilization</div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      style={{ width: `${gpu.util}%` }}
                    />
                  </div>
                  <div className="mt-1 text-white">{gpu.util}%</div>
                </div>
                <div>
                  <div className="mb-1 text-gray-400">Memory</div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      style={{ width: `${gpu.util - 10}%` }}
                    />
                  </div>
                  <div className="mt-1 text-white">{gpu.util - 10}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-300">Fleet Utilization</span>
            <span className="font-semibold text-green-400">74.6%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
