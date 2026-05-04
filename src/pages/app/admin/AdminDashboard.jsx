import OperatingSystemShell from '../../../layouts/OperatingSystemShell'
import { useAuthStore } from '../../../store/authStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useSystemStore } from '../../../store/systemStore'
import { Users, Shield, FileText, Activity, Settings, Cpu } from 'lucide-react'

function UserManagement() {
  const volunteers = usePeopleStore(s => s.volunteers) || []
  const donors = usePeopleStore(s => s.donors) || []
  const partners = usePeopleStore(s => s.partners) || []

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Users className="w-4 h-4 text-[#D4AF37]" />
        User Management
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-2xl font-bold text-white">{volunteers.length}</p>
          <p className="text-gray-400 text-xs">Volunteers</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-2xl font-bold text-emerald-400">{donors.length}</p>
          <p className="text-gray-400 text-xs">Donors</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-2xl font-bold text-purple-400">{partners.length}</p>
          <p className="text-gray-400 text-xs">Partners</p>
        </div>
      </div>
    </div>
  )
}

function RoleManagement() {
  const roles = ['leadership', 'executive', 'command', 'intelligence', 'chapter', 'volunteer', 'donor', 'partner', 'admin']

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-cyan-400" />
        Role Management
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {roles.map(role => (
          <div key={role} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
            <span className="text-white text-sm capitalize">{role}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AuditLogs() {
  const logs = useSystemStore(s => s.auditLogs) || []
  const recent = logs.slice(0, 8)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-4 h-4 text-blue-400" />
        Audit Logs
      </h3>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {recent.map(log => (
          <div key={log.id} className="p-2 rounded-lg bg-white/5">
            <div className="flex justify-between">
              <span className="text-white text-sm">{log.action}</span>
              <span className="text-gray-400 text-xs">{log.user}</span>
            </div>
            <p className="text-gray-500 text-xs">{log.details}</p>
          </div>
        ))}
        {recent.length === 0 && (
          <p className="text-gray-500 text-center py-4">No audit logs</p>
        )}
      </div>
    </div>
  )
}

function SystemHealth() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Cpu className="w-4 h-4 text-emerald-400" />
        System Health
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <span className="text-gray-400">Auth Store</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <span className="text-gray-400">People Store</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <span className="text-gray-400">Mission Store</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <span className="text-gray-400">Capital Store</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <span className="text-gray-400">Intel Store</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <span className="text-gray-400">System Store</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
      </div>
    </div>
  )
}

function RuntimeInspector() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Activity className="w-4 h-4 text-purple-400" />
        Runtime Inspector
      </h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <span className="text-gray-400">Seed Status</span>
          <span className="text-emerald-400">POPULATED</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <span className="text-gray-400">Demo Users</span>
          <span className="text-[#D4AF37]">9 LOADED</span>
        </div>
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
        <span className="text-white text-xs">Users</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Shield className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
        <span className="text-white text-xs">Roles</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <FileText className="w-5 h-5 text-purple-400 mx-auto mb-1" />
        <span className="text-white text-xs">Audit</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Settings className="w-5 h-5 text-gray-400 mx-auto mb-1" />
        <span className="text-white text-xs">Settings</span>
      </button>
    </div>
  )
}

export default function AdminDashboard() {
  const { user } = useAuthStore()

  return (
    <OperatingSystemShell role="admin">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Admin Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Admin'}</p>
      </div>

      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <UserManagement />
        <RoleManagement />
        <SystemHealth />
        <RuntimeInspector />
        <AuditLogs />
      </div>
    </OperatingSystemShell>
  )
}