import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { useSystemStore } from '../../../store/systemStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Shield, Target, CheckCircle, DollarSign, FileText, TrendingUp, AlertTriangle,
  Users, Globe, Building2, Calendar, MessageCircle, Settings, ArrowRight,
  ArrowUpRight, ArrowDownRight, Clock, Filter, Download, Plus
} from 'lucide-react'

function KPICard({ label, value, change, changeType, icon: Icon, color }) {
  return (
    <div className="glass-dark rounded-xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-xs">{label}</p>
        <Icon className={`w-4 h-4 ${color || 'text-gray-400'}`} />
      </div>
      <p className="text-xl font-bold text-white">{value}</p>
      {change && (
        <div className={`flex items-center gap-1 text-xs ${changeType === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {changeType === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      )}
    </div>
  )
}

function ApprovalQueue() {
  const allocations = useCapitalStore(s => s.allocations) || []
  const pending = allocations.filter(a => a.status === 'pending').slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-yellow-400" />
        Approval Queue
      </h3>
      <div className="space-y-3">
        {pending.map(a => (
          <div key={a.id} className="p-3 rounded-lg bg-white/5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-white text-sm">{a.mission}</p>
                <p className="text-gray-500 text-xs">Requested: {a.date || 'Today'}</p>
              </div>
              <span className="text-[#D4AF37] font-semibold">{a.allocated}</span>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 py-2 bg-emerald-500/20 text-emerald-400 text-sm rounded-lg hover:bg-emerald-500/30 flex items-center justify-center gap-1">
                <CheckCircle className="w-4 h-4" /> Approve
              </button>
              <button className="flex-1 py-2 bg-red-500/20 text-red-400 text-sm rounded-lg hover:bg-red-500/30">
                Decline
              </button>
            </div>
          </div>
        ))}
        {pending.length === 0 && (
          <p className="text-emerald-500 text-center py-4">All caught up! No pending approvals.</p>
        )}
      </div>
    </div>
  )
}

function StrategicPriorities() {
  const priorities = [
    { id: 1, title: 'Q2 Revenue Target', progress: 72, status: 'on-track' },
    { id: 2, title: 'Chapter Expansion', progress: 45, status: 'at-risk' },
    { id: 3, title: 'Partner Onboarding', progress: 88, status: 'on-track' },
    { id: 4, title: 'Volunteer Training', progress: 60, status: 'on-track' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Target className="w-4 h-4 text-[#D4AF37]" />
        Strategic Priorities
      </h3>
      <div className="space-y-4">
        {priorities.map(p => (
          <div key={p.id}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-white text-sm">{p.title}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${
                p.status === 'on-track' ? 'bg-emerald-500/20 text-emerald-400' :
                p.status === 'at-risk' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {p.status.replace('-', ' ')}
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${
                p.status === 'on-track' ? 'bg-emerald-400' :
                p.status === 'at-risk' ? 'bg-red-400' : 'bg-yellow-400'
              }`} style={{ width: `${p.progress}%` }} />
            </div>
            <span className="text-gray-500 text-xs">{p.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RegionalBlockers() {
  const issues = [
    { region: 'North East', issue: 'Volunteer shortage', severity: 'high' },
    { region: 'South West', issue: 'Funding delay', severity: 'medium' },
    { region: 'North West', issue: 'Partner compliance', severity: 'low' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-red-400" />
        Regional Blockers
      </h3>
      <div className="space-y-3">
        {issues.map((issue, i) => (
          <div key={i} className={`p-3 rounded-lg ${
            issue.severity === 'high' ? 'bg-red-500/10 border border-red-500/20' :
            issue.severity === 'medium' ? 'bg-yellow-500/10 border border-yellow-500/20' :
            'bg-white/5'
          }`}>
            <div className="flex justify-between">
              <p className="text-white text-sm">{issue.region}</p>
              <span className={`text-xs ${
                issue.severity === 'high' ? 'text-red-400' :
                issue.severity === 'medium' ? 'text-yellow-400' : 'text-gray-400'
              }`}>{issue.severity}</span>
            </div>
            <p className="text-gray-400 text-xs">{issue.issue}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExecutiveCalendar() {
  const events = [
    { id: 1, title: 'Board Meeting', time: '10:00 AM', today: true },
    { id: 2, title: 'Partner Review', time: '2:00 PM', today: true },
    { id: 3, title: 'Chapter Sync', time: '4:30 PM', today: false },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-[#D4AF37]" />
        Executive Calendar
      </h3>
      <div className="space-y-3">
        {events.map(e => (
          <div key={e.id} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${e.today ? 'bg-emerald-400' : 'bg-gray-400'}`}></div>
              <span className="text-white text-sm">{e.title}</span>
            </div>
            <span className="text-gray-400 text-xs">{e.time}</span>
          </div>
        ))}
        <button className="w-full py-2 border border-dashed border-white/20 text-gray-400 text-sm rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center gap-1">
          <Plus className="w-4 h-4" /> Add Event
        </button>
      </div>
    </div>
  )
}

function ComplianceStatus() {
  const items = [
    { name: 'Financial Audit', status: 'compliant' },
    { name: 'Data Protection', status: 'compliant' },
    { name: 'Partner Due Diligence', status: 'pending' },
    { name: 'Volunteer Backgrounds', status: 'compliant' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-emerald-400" />
        Compliance Status
      </h3>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
            <span className="text-white text-sm">{item.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded ${
              item.status === 'compliant' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProcurementPipeline() {
  const items = [
    { vendor: 'Tech Solutions Ltd', amount: '₦2.4M', status: 'approved' },
    { vendor: 'Event Services', amount: '₦890K', status: 'pending' },
    { vendor: 'Print Media Co', amount: '₦450K', status: 'review' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-[#D4AF37]" />
        Procurement
      </h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm">{item.vendor}</p>
              <p className="text-gray-400 text-xs">{item.amount}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded ${
              item.status === 'approved' ? 'bg-emerald-500/20 text-emerald-400' :
              item.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'
            }`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OperationalCommand() {
  const { user } = useAuthStore()
  const kpis = deriveKPIs()

  return (
    <CityBoyOSShell role="executive" title="Operational Command">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Operational Command</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Executive'}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <KPICard label="Treasury" value={kpis?.treasuryTotal || '₦0'} icon={DollarSign} color="text-[#D4AF37]" />
        <KPICard label="Active Missions" value={kpis?.activeMissionCount || 0} icon={Target} color="text-emerald-400" />
        <KPICard label="Chapters" value={36} icon={Globe} color="text-blue-400" />
        <KPICard label="Partners" value={40} icon={Building2} color="text-purple-400" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ApprovalQueue />
          <StrategicPriorities />
          <div className="grid grid-cols-2 gap-4">
            <RegionalBlockers />
            <ComplianceStatus />
          </div>
        </div>

        <div className="space-y-6">
          <ExecutiveCalendar />
          <ProcurementPipeline />
        </div>
      </div>
    </CityBoyOSShell>
  )
}