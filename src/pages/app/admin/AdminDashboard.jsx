import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useSystemStore } from '../../../store/systemStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Users, Shield, FileText, Activity, Settings, Cpu, Download,
  Plus, Search, Filter, RefreshCw, AlertTriangle, CheckCircle,
  XCircle, LogOut, Lock, Database, Server
} from 'lucide-react'
import { useState } from 'react'

function UserManagement() {
  const volunteers = usePeopleStore(s => s.volunteers) || []
  const donors = usePeopleStore(s => s.donors) || []
  const partners = usePeopleStore(s => s.partners) || []
  const [search, setSearch] = useState('')

  const users = [
    ...volunteers.slice(0, 3).map(v => ({ ...v, type: 'volunteer' })),
    ...donors.slice(0, 2).map(d => ({ ...d, type: 'donor' })),
    ...partners.slice(0, 2).map(p => ({ ...p, type: 'partner' })),
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <Users className="w-4 h-4 text-[#D4AF37]" />
          User Management
        </h3>
        <button className="px-3 py-1.5 bg-[#D4AF37] text-black text-sm rounded-lg hover:bg-[#B8962E] flex items-center gap-1">
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>
      
      <div className="relative mb-4">
        <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500"
        />
      </div>

      <div className="space-y-2">
        {users.map((u, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium">
                {u.name?.[0] || 'U'}
              </div>
              <div>
                <p className="text-white text-sm">{u.name}</p>
                <p className="text-gray-400 text-xs capitalize">{u.type}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-white/10 rounded">
                <LogOut className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded">
                <XCircle className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RoleManagement() {
  const roles = [
    { name: 'leadership', users: 1, permissions: '*' },
    { name: 'executive', users: 3, permissions: 'approve, deploy' },
    { name: 'command', users: 5, permissions: 'broadcast, execute' },
    { name: 'chapter', users: 36, permissions: 'manage, coordinate' },
    { name: 'volunteer', users: 500, permissions: 'view, join' },
    { name: 'donor', users: 120, permissions: 'donate, report' },
    { name: 'partner', users: 40, permissions: 'fund, coordinate' },
    { name: 'admin', users: 2, permissions: '*' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-cyan-400" />
        Role Management
      </h3>
      <div className="space-y-2">
        {roles.map(role => (
          <div key={role.name} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-gray-400" />
              <span className="text-white text-sm capitalize">{role.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-xs">{role.users} users</span>
              <span className="text-gray-500 text-xs">{role.permissions}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SystemHealth() {
  const kpis = deriveKPIs()

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Activity className="w-4 h-4 text-emerald-400" />
        System Health
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 rounded-lg bg-emerald-500/10">
          <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
          <p className="text-white text-sm">API</p>
          <p className="text-emerald-400 text-xs">Healthy</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-emerald-500/10">
          <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
          <p className="text-white text-sm">Database</p>
          <p className="text-emerald-400 text-xs">Healthy</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-emerald-500/10">
          <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
          <p className="text-white text-sm">Cache</p>
          <p className="text-emerald-400 text-xs">Healthy</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Response Time</span>
          <span className="text-white">124ms</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span className="text-gray-400">Uptime</span>
          <span className="text-emerald-400">99.98%</span>
        </div>
      </div>
    </div>
  )
}

function RuntimeInspector() {
  const stores = [
    { name: 'authStore', status: 'active', keys: 12 },
    { name: 'peopleStore', status: 'active', keys: 500 },
    { name: 'missionStore', status: 'active', keys: 75 },
    { name: 'capitalStore', status: 'active', keys: 1000 },
    { name: 'intelStore', status: 'active', keys: 220 },
    { name: 'systemStore', status: 'active', keys: 150 },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <Cpu className="w-4 h-4 text-purple-400" />
          Runtime Inspector
        </h3>
        <button className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-lg hover:bg-white/20 flex items-center gap-1">
          <RefreshCw className="w-3 h-3" /> Refresh
        </button>
      </div>
      <div className="space-y-2">
        {stores.map(s => (
          <div key={s.name} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-gray-400" />
              <span className="text-white text-sm">{s.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-xs">{s.keys} keys</span>
              <span className="text-emerald-400 text-xs">{s.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AuditLogs() {
  const logs = useSystemStore(s => s.auditLogs) || []
  const recent = logs.slice(0, 6)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-4 h-4 text-blue-400" />
        Audit Logs
      </h3>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {recent.map((log, i) => (
          <div key={i} className="p-2 rounded-lg bg-white/5">
            <div className="flex justify-between">
              <span className="text-white text-sm">{log.action}</span>
              <span className="text-gray-500 text-xs">{log.user}</span>
            </div>
            <p className="text-gray-500 text-xs">{log.details}</p>
          </div>
        ))}
        {recent.length === 0 && (
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="p-2 rounded-lg bg-white/5">
                <div className="flex justify-between">
                  <span className="text-white text-sm">ACTION_{i}</span>
                  <span className="text-gray-500 text-xs">User{i}</span>
                </div>
                <p className="text-gray-500 text-xs">Details for action {i}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="w-full mt-4 py-2 border border-white/20 text-gray-400 text-sm rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center gap-1">
        <Download className="w-4 h-4" /> Export Logs
      </button>
    </div>
  )
}

function SeedControls() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <RefreshCw className="w-4 h-4 text-[#D4AF37]" />
        Seed Controls
      </h3>
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-white/5">
          <div className="flex justify-between">
            <span className="text-white text-sm">Volunteers</span>
            <span className="text-emerald-400">500</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-white/5">
          <div className="flex justify-between">
            <span className="text-white text-sm">Chapters</span>
            <span className="text-emerald-400">36</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-white/5">
          <div className="flex justify-between">
            <span className="text-white text-sm">Missions</span>
            <span className="text-emerald-400">75</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-white/5">
          <div className="flex justify-between">
            <span className="text-white text-sm">Transactions</span>
            <span className="text-emerald-400">1000</span>
          </div>
        </div>
      </div>
      <button className="w-full mt-4 py-2 bg-red-500/20 text-red-400 text-sm rounded-lg hover:bg-red-500/30 flex items-center justify-center gap-1">
        <RefreshCw className="w-4 h-4" /> Reset Seed
      </button>
    </div>
  )
}

export default function ControlTower() {
  const { user } = useAuthStore()

  return (
    <CityBoyOSShell role="admin" title="Control Tower">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Admin Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Admin'}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <UserManagement />
          <RoleManagement />
        </div>
        <div className="space-y-6">
          <SystemHealth />
          <RuntimeInspector />
          <SeedControls />
          <AuditLogs />
        </div>
      </div>
    </CityBoyOSShell>
  )
}