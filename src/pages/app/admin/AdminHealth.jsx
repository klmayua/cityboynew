import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useSystemStore } from '../../../store/systemStore'
import { Activity } from 'lucide-react'

export default function AdminHealth() {
  const { notifications } = useSystemStore()
  const stats = [
    { label: 'API Latency', value: '45ms', status: 'healthy' },
    { label: 'Database', value: '98%', status: 'healthy' },
    { label: 'Cache Hit Rate', value: '94%', status: 'healthy' },
    { label: 'Active Connections', value: '124', status: 'healthy' },
  ]

  const healthInfo = [
    { label: 'Server Status', value: 'Operational', color: 'text-emerald-400' },
    { label: 'API Status', value: 'Operational', color: 'text-emerald-400' },
    { label: 'Database Status', value: 'Healthy', color: 'text-emerald-400' },
    { label: 'Cache Status', value: 'Active', color: 'text-emerald-400' },
  ]

  return (
    <CityBoyOSShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">System Health</h1>
        <p className="text-gray-400 mb-6">Real-time system monitoring and status</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {healthInfo.map(item => (
            <div key={item.label} className="glass rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">{item.label}</p>
              <p className={`text-lg font-semibold ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            System Metrics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(stat => (
              <div key={stat.label} className="p-3 rounded-lg bg-white/5">
                <p className="text-gray-400 text-xs">{stat.label}</p>
                <p className="text-white font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CityBoyOSShell>
  )
}