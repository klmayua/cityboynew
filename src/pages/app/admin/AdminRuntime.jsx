import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { Cpu, Server, Clock, Zap } from 'lucide-react'

export default function AdminRuntime() {
  const [systemStatus] = useState({
    uptime: '99.9%',
    memoryUsed: '2.4GB',
    memoryTotal: '8GB',
    cpuUsed: '12%',
    serverTime: new Date().toISOString(),
    region: 'us-east-1',
    podCount: 3,
  })

  return (
    <CityBoyOSShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Runtime Status</h1>
        <p className="text-gray-400 mb-6">Server runtime and resource monitoring</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="glass rounded-xl p-4 border border-white/10">
            <Zap className="w-6 h-6 text-emerald-400 mb-2" />
            <p className="text-gray-400 text-sm">Uptime</p>
            <p className="text-2xl font-bold text-white">{systemStatus.uptime}</p>
          </div>
          <div className="glass rounded-xl p-4 border border-white/10">
            <Server className="w-6 h-6 text-blue-400 mb-2" />
            <p className="text-gray-400 text-sm">Memory</p>
            <p className="text-2xl font-bold text-white">{systemStatus.memoryUsed} / {systemStatus.memoryTotal}</p>
          </div>
          <div className="glass rounded-xl p-4 border border-white/10">
            <Cpu className="w-6 h-6 text-purple-400 mb-2" />
            <p className="text-gray-400 text-sm">CPU Usage</p>
            <p className="text-2xl font-bold text-white">{systemStatus.cpuUsed}</p>
          </div>
        </div>

        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-400" />
            Resource Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between p-3 rounded-lg bg-white/5">
              <span className="text-gray-400">Server Region</span>
              <span className="text-white">{systemStatus.region}</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-white/5">
              <span className="text-gray-400">Active Pods</span>
              <span className="text-white">{systemStatus.podCount}</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-white/5">
              <span className="text-gray-400">Server Time</span>
              <span className="text-white">{new Date().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </CityBoyOSShell>
  )
}