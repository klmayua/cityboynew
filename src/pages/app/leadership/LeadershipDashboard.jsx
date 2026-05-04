import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { useMissionStore } from '../../../store/missionStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useIntelStore } from '../../../store/intelStore'
import { useSystemStore } from '../../../store/systemStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Cpu, Users, Map, Wallet, AlertTriangle, TrendingUp, Activity, Target, Zap,
  DollarSign, Globe, Shield, FileText, MessageCircle, CheckCircle,
  ArrowUpRight, ArrowDownRight, Bell, Download, Search, Filter
} from 'lucide-react'
import { useState } from 'react'

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa',
  'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
  'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
]

function KPICard({ label, value, change, changeType, icon: Icon, color }) {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-400 text-sm">{label}</p>
        <Icon className={`w-5 h-5 ${color || 'text-gray-400'}`} />
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      {change && (
        <div className={`flex items-center gap-1 text-xs ${changeType === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {changeType === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      )}
    </div>
  )
}

function NigeriaMap() {
  const chapters = usePeopleStore(s => s.chapters) || []
  const [selectedState, setSelectedState] = useState(null)

  const getStateColor = (stateName) => {
    if (!chapters.length) return 'bg-emerald-500'
    const chapter = chapters.find(c => c.state === stateName)
    if (!chapter) return 'bg-gray-600'
    return chapter.members > 200 ? 'bg-emerald-500' : chapter.members > 100 ? 'bg-yellow-500' : 'bg-red-500'
  }

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Globe className="w-4 h-4 text-[#D4AF37]" />
        National Heat Map
      </h3>
      <div className="grid grid-cols-6 gap-2">
        {nigerianStates.slice(0, 36).map(state => (
          <button
            key={state}
            onClick={() => setSelectedState(state === selectedState ? null : state)}
            className={`p-2 rounded-lg text-xs text-center transition-all ${
              selectedState === state ? 'ring-2 ring-[#D4AF37]' : ''
            } ${getStateColor(state)} text-white hover:opacity-80`}
          >
            {state.slice(0, 3)}
          </button>
        ))}
      </div>
      {selectedState && (
        <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-semibold">{selectedState}</p>
              <p className="text-gray-400 text-sm">{chapters.find(c => c.state === selectedState)?.members || 0} members</p>
            </div>
            <button className="cursor-pointer px-3 py-1.5 bg-[#D4AF37] text-black text-sm font-medium rounded-lg">
              View Chapter
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-emerald-500"></div> Strong</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-yellow-500"></div> Moderate</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-500"></div> Needs Support</div>
      </div>
    </div>
  )
}

function ExecutiveDecisionPanel() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-[#D4AF37]" />
        Executive Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
<button className="cursor-pointer p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 text-sm">
          </button>
          <button className="cursor-pointer p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 text-blue-400 text-sm">
          </button>
          <button className="cursor-pointer p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 text-purple-400 text-sm">
          </button>
          <button className="cursor-pointer p-3 rounded-lg bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-400 text-sm">
          <Zap className="w-4 h-4 mb-1" />
          Emergency Mobilize
        </button>
      </div>
    </div>
  )
}

function WarRoomScenarios() {
  const scenarios = [
    { id: 1, name: 'Flood Response', status: 'ready', priority: 'high' },
    { id: 2, name: 'Civil Unrest', status: 'standby', priority: 'critical' },
    { id: 3, name: 'Election Support', status: 'planning', priority: 'medium' },
    { id: 4, name: 'Health Campaign', status: 'active', priority: 'high' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-red-400" />
        War Room Scenarios
      </h3>
      <div className="space-y-3">
        {scenarios.map(scenario => (
          <div key={scenario.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                scenario.status === 'active' ? 'bg-emerald-400' :
                scenario.status === 'ready' ? 'bg-blue-400' :
                scenario.status === 'standby' ? 'bg-yellow-400' : 'bg-gray-400'
              }`}></div>
              <div>
                <p className="text-white text-sm">{scenario.name}</p>
                <p className="text-gray-500 text-xs capitalize">{scenario.status}</p>
              </div>
            </div>
            <button className="cursor-pointer px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg">
              Simulate
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function LiveNationalFeed() {
  const activity = useSystemStore(s => s.activityFeed) || []
  const recent = activity.slice(0, 8)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Activity className="w-4 h-4 text-[#D4AF37]" />
        Live National Feed
      </h3>
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {recent.map(item => (
          <div key={item.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5"></div>
            <div className="flex-1">
              <p className="text-white text-sm capitalize">{item.action?.replace(/_/g, ' ')}</p>
              <p className="text-gray-400 text-xs">{item.actor} → {item.target}</p>
            </div>
            <span className="text-[#D4AF37] text-xs">{item.amount || '-'}</span>
          </div>
        ))}
        {recent.length === 0 && (
          <p className="text-gray-500 text-center py-4">No recent activity</p>
        )}
      </div>
    </div>
  )
}

function BoardReports() {
  const reports = [
    { id: 1, name: 'Weekly Executive Summary', format: 'PDF' },
    { id: 2, name: 'Treasury Position', format: 'XLS' },
    { id: 3, name: 'Mission Tracker', format: 'PPT' },
    { id: 4, name: 'Partner ROI Analysis', format: 'PDF' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-4 h-4 text-[#D4AF37]" />
        Board Reports
      </h3>
      <div className="space-y-2">
        {reports.map(report => (
          <button key={report.id} className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 text-left">
            <span className="text-white text-sm">{report.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs bg-white/10 px-2 py-0.5 rounded">{report.format}</span>
              <Download className="w-4 h-4 text-gray-400" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function ApprovalQueue() {
  const allocations = useCapitalStore(s => s.allocations) || []
  const pending = allocations.filter(a => a.status === 'pending').slice(0, 4)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-yellow-400" />
        Approval Queue
      </h3>
      <div className="space-y-3">
        {pending.map(a => (
          <div key={a.id} className="p-3 rounded-lg bg-white/5">
            <div className="flex justify-between mb-2">
              <p className="text-white text-sm">{a.mission}</p>
              <span className="text-[#D4AF37] text-sm">{a.allocated}</span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-1.5 bg-emerald-500/20 text-emerald-400 text-xs rounded hover:bg-emerald-500/30">
                Approve
              </button>
              <button className="flex-1 py-1.5 bg-red-500/20 text-red-400 text-xs rounded hover:bg-red-500/30">
                Decline
              </button>
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

function AlertRail() {
  const alerts = useIntelStore(s => s.alerts) || []
  const critical = alerts.filter(a => a.type === 'critical' && !a.read).slice(0, 4)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-red-400" />
        Critical Alerts
      </h3>
      <div className="space-y-3">
        {critical.map(alert => (
          <div key={alert.id} className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-white text-sm">{alert.title}</p>
            <p className="text-gray-400 text-xs">{alert.message}</p>
          </div>
        ))}
        {critical.length === 0 && (
          <p className="text-emerald-500 text-center py-4">No critical alerts</p>
        )}
      </div>
    </div>
  )
}

export default function NationalCommandCenter() {
  const { user } = useAuthStore()
  const kpis = deriveKPIs()
  const chapters = usePeopleStore(s => s.chapters) || []

  return (
    <CityBoyOSShell role="leadership" title="National Command Center">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">National Command Center</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Chairman'}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <KPICard label="Active States" value={chapters.length || 36} change="+2 this month" changeType="up" icon={Globe} color="text-emerald-400" />
        <KPICard label="Live Missions" value={kpis?.activeMissionCount || 0} change="+5 this week" changeType="up" icon={Map} color="text-blue-400" />
        <KPICard label="Treasury" value={kpis?.treasuryTotal || '₦0'} change="+12%" changeType="up" icon={Wallet} color="text-[#D4AF37]" />
        <KPICard label="Volunteers" value={kpis?.activeVolunteerCount || 0} change="+180" changeType="up" icon={Users} color="text-purple-400" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <NigeriaMap />
          <div className="grid grid-cols-2 gap-4">
            <ExecutiveDecisionPanel />
            <WarRoomScenarios />
          </div>
        </div>

        <div className="space-y-6">
          <ApprovalQueue />
          <AlertRail />
          <LiveNationalFeed />
          <BoardReports />
        </div>
      </div>
    </CityBoyOSShell>
  )
}