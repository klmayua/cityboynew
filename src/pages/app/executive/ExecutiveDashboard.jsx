import OperatingSystemShell from '../../../layouts/OperatingSystemShell'
import { useAuthStore } from '../../../store/authStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { useSystemStore } from '../../../store/systemStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import { Cpu, CheckSquare, FileText, TrendingUp, AlertCircle, MessageSquare } from 'lucide-react'

function BoardBriefing() {
  const kpis = deriveKPIs()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Treasury</p>
        <p className="text-xl font-bold text-[#D4AF37]">{kpis?.treasuryTotal}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Active Missions</p>
        <p className="text-xl font-bold text-emerald-400">{kpis?.activeMissionCount}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Volunteers</p>
        <p className="text-xl font-bold text-blue-400">{kpis?.activeVolunteerCount}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Sentiment</p>
        <p className="text-xl font-bold text-cyan-400">{kpis?.sentimentScore}%</p>
      </div>
    </div>
  )
}

function ApprovalsQueue() {
  const allocations = useCapitalStore(s => s.allocations) || []
  const pending = allocations.filter(a => a.status === 'pending').slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <CheckSquare className="w-4 h-4 text-[#D4AF37]" />
        Approvals Queue
      </h3>
      <div className="space-y-3">
        {pending.map(a => (
          <div key={a.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm">{a.mission}</p>
              <p className="text-gray-400 text-xs">{a.allocated}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">Approve</button>
              <button className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded">Decline</button>
            </div>
          </div>
        ))}
        {pending.length === 0 && (
          <p className="text-gray-500 text-center py-4">No pending approvals</p>
        )}
      </div>
    </div>
  )
}

function InitiativesTracker() {
  const missions = useMissionStore(s => s.missions) || []
  const active = missions.filter(m => m.status === 'active').slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-4 h-4 text-blue-400" />
        Initiatives Tracker
      </h3>
      <div className="space-y-3">
        {active.map(m => (
          <div key={m.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm">{m.title}</p>
              <p className="text-gray-400 text-xs">{m.category}</p>
            </div>
            <span className="text-emerald-400">{m.progress}%</span>
          </div>
        ))}
        {active.length === 0 && (
          <p className="text-gray-500 text-center py-4">No active missions</p>
        )}
      </div>
    </div>
  )
}

function ExecutionHealth() {
  const kpis = deriveKPIs()
  const readiness = kpis?.operationalReadiness || 0

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        Execution Health
      </h3>
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="none" className="text-white/10" />
            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="none" className="text-emerald-400"
              strokeDasharray={352}
              strokeDashoffset={352 - (352 * readiness / 100)}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{readiness}%</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm">Operational Readiness</p>
      </div>
    </div>
  )
}

function EscalationFeed() {
  const alerts = useSystemStore(s => s.notifications) || []
  const recent = alerts.slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-red-400" />
        Escalation Feed
      </h3>
      <div className="space-y-3">
        {recent.map(n => (
          <div key={n.id} className="p-3 rounded-lg bg-white/5">
            <p className="text-white text-sm">{n.title || n.message}</p>
            <p className="text-gray-400 text-xs">{n.timestamp}</p>
          </div>
        ))}
        {recent.length === 0 && (
          <p className="text-gray-500 text-center py-4">No escalations</p>
        )}
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Cpu className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
        <span className="text-white text-xs">Briefing</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <CheckSquare className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
        <span className="text-white text-xs">Approvals</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <FileText className="w-5 h-5 text-blue-400 mx-auto mb-1" />
        <span className="text-white text-xs">Reports</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <MessageSquare className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
        <span className="text-white text-xs">Comms</span>
      </button>
    </div>
  )
}

export default function ExecutiveDashboard() {
  const { user } = useAuthStore()

  return (
    <OperatingSystemShell role="executive">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Executive Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Executive'}</p>
      </div>

      <BoardBriefing />
      <QuickActions />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <ApprovalsQueue />
        <InitiativesTracker />
        <ExecutionHealth />
        <EscalationFeed />
      </div>
    </OperatingSystemShell>
  )
}