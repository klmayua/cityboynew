import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useMissionStore } from '../../../store/missionStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { useSystemStore } from '../../../store/systemStore'
import { useIntelStore } from '../../../store/intelStore'
import { 
  Users, Shield, Activity, Cpu, Database, Server, Clock, 
  RefreshCw, Settings, Download, FileText, ChevronRight
} from 'lucide-react'

function AdminHealth() {
  const { notifications } = useSystemStore()
  const stats = [
    { label: 'API Latency', value: '45ms', status: 'healthy' },
    { label: 'Database', value: '98%', status: 'healthy' },
    { label: 'Cache Hit Rate', value: '94%', status: 'healthy' },
    { label: 'Active Connections', value: '124', status: 'healthy' },
  ]
  
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Activity className="w-4 h-4 text-emerald-400" />
        System Health
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
  )
}

function AdminRuntime() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Cpu className="w-4 h-4 text-blue-400" />
        Runtime Status
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between p-3 rounded-lg bg-white/5">
          <span className="text-gray-400">Uptime</span>
          <span className="text-white">99.9%</span>
        </div>
        <div className="flex justify-between p-3 rounded-lg bg-white/5">
          <span className="text-gray-400">Memory Usage</span>
          <span className="text-white">2.4GB / 8GB</span>
        </div>
        <div className="flex justify-between p-3 rounded-lg bg-white/5">
          <span className="text-gray-400">CPU Usage</span>
          <span className="text-white">12%</span>
        </div>
      </div>
    </div>
  )
}

function AdminSeed() {
  const { seedRuntime } = require('../../../lib/seedRuntime')
  
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <RefreshCw className="w-4 h-4 text-purple-400" />
        Data Seeding
      </h3>
      <p className="text-gray-400 text-sm mb-4">Refresh runtime data stores with seed values.</p>
      <button className="cursor-pointer px-4 py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg">
        Run Seed
      </button>
    </div>
  )
}

function AdminConfig() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Settings className="w-4 h-4 text-gray-400" />
        Configuration
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between p-3 rounded-lg bg-white/5">
          <span className="text-gray-400">Environment</span>
          <span className="text-emerald-400">Production</span>
        </div>
        <div className="flex justify-between p-3 rounded-lg bg-white/5">
          <span className="text-gray-400">Version</span>
          <span className="text-white">1.0.0</span>
        </div>
      </div>
    </div>
  )
}

function AdminExports() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Download className="w-4 h-4 text-[#D4AF37]" />
        Data Exports
      </h3>
      <div className="space-y-2">
        {['Users Export', 'Transactions Export', 'Missions Export', 'Audit Log'].map(item => (
          <button key={item} className="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10">
            <span className="text-white text-sm">{item}</span>
            <Download className="w-4 h-4 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  )
}

function AdminLogs() {
  const logs = [
    { id: 1, action: 'User login', user: 'admin@cityboy.os', time: '2 min ago' },
    { id: 2, action: 'Data export', user: 'superadmin', time: '15 min ago' },
    { id: 3, action: 'Config update', user: 'admin@cityboy.os', time: '1 hour ago' },
    { id: 4, action: 'Seed refresh', user: 'system', time: '3 hours ago' },
  ]
  
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-4 h-4 text-gray-400" />
        System Logs
      </h3>
      <div className="space-y-2">
        {logs.map(log => (
          <div key={log.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm">{log.action}</p>
              <p className="text-gray-500 text-xs">{log.user}</p>
            </div>
            <span className="text-gray-500 text-xs">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AdminAudit() {
  const audits = [
    { id: 1, action: 'Funding approved', actor: 'Executive', target: 'Kaduna Water', time: '1 hour ago' },
    { id: 2, action: 'User created', actor: 'Admin', target: 'volunteer@email.com', time: '3 hours ago' },
    { id: 3, action: 'Chapter approved', actor: 'Leadership', target: 'Enugu East', time: '1 day ago' },
  ]
  
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-red-400" />
        Audit Trail
      </h3>
      <div className="space-y-2">
        {audits.map(audit => (
          <div key={audit.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm">{audit.action}</p>
              <p className="text-gray-500 text-xs">{audit.actor} → {audit.target}</p>
            </div>
            <span className="text-gray-500 text-xs">{audit.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AdminDashboard() {
  const { user } = useAuthStore()
  const { members, chapters, volunteers, donors } = usePeopleStore()
  const { missions } = useMissionStore()
  const { treasury, transactions } = useCapitalStore()
  const { alerts } = useIntelStore()

  return (
    <CityBoyOSShell role="admin" title="Control Tower">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Admin Control Tower</h1>
        <p className="text-gray-400">Platform-wide administration</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Users</p>
          <p className="text-2xl font-bold text-white">{(members?.length || 0) + (donors?.length || 0)}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Chapters</p>
          <p className="text-2xl font-bold text-white">{chapters?.length || 0}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Active Missions</p>
          <p className="text-2xl font-bold text-white">{missions?.length || 0}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">System Alerts</p>
          <p className="text-2xl font-bold text-red-400">{alerts?.length || 0}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <AdminHealth />
        <AdminRuntime />
        <AdminSeed />
        <AdminConfig />
        <AdminAudit />
        <AdminExports />
      </div>
    </CityBoyOSShell>
  )
}

export default AdminDashboard