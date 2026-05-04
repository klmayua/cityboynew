import OperatingSystemShell from '../../../layouts/OperatingSystemShell'
import { useAuthStore } from '../../../store/authStore'
import { useMissionStore } from '../../../store/missionStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useIntelStore } from '../../../store/intelStore'
import { useSystemStore } from '../../../store/systemStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import { Cpu, Users, Map, Wallet, AlertTriangle, TrendingUp, Activity, Target } from 'lucide-react'

function KPICard({ label, value, icon: Icon, color }) {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className={`text-2xl font-bold ${color || 'text-white'}`}>{value}</p>
        </div>
        <Icon className={`w-8 h-8 ${color || 'text-gray-400'}`} />
      </div>
    </div>
  )
}

function MissionProgressBoard() {
  const missions = useMissionStore(s => s.missions) || []
  const active = missions.filter(m => m.status === 'active').slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Map className="w-4 h-4 text-[#D4AF37]" />
        Active Missions
      </h3>
      <div className="space-y-4">
        {active.map(m => (
          <div key={m.id} className="p-3 rounded-lg bg-white/5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-white font-medium">{m.title}</p>
                <p className="text-gray-400 text-xs">{m.category} • {m.states?.join(', ')}</p>
              </div>
              <span className="text-emerald-400 text-sm">{m.progress}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#D4AF37] rounded-full"
                style={{ width: `${m.progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{m.volunteers} volunteers</span>
              <span>{m.funded} / {m.funding}</span>
            </div>
          </div>
        ))}
        {active.length === 0 && (
          <p className="text-gray-500 text-center py-4">No active missions</p>
        )}
      </div>
    </div>
  )
}

function TreasurySummary() {
  const treasury = useCapitalStore(s => s.treasury) || {}

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Wallet className="w-4 h-4 text-[#D4AF37]" />
        Treasury
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Total</p>
          <p className="text-white font-semibold">{treasury.total || '₦0'}</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Deployable</p>
          <p className="text-emerald-400 font-semibold">{treasury.deployable || '₦0'}</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Committed</p>
          <p className="text-blue-400 font-semibold">{treasury.committed || '₦0'}</p>
        </div>
      </div>
    </div>
  )
}

function RiskAlerts() {
  const alerts = useIntelStore(s => s.alerts) || []
  const critical = alerts.filter(a => !a.read && a.type === 'critical').slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-red-400" />
        Risk Alerts
      </h3>
      <div className="space-y-3">
        {critical.map(alert => (
          <div key={alert.id} className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-white text-sm">{alert.title}</p>
            <p className="text-gray-400 text-xs">{alert.message}</p>
          </div>
        ))}
        {critical.length === 0 && (
          <p className="text-gray-500 text-center py-4">No critical alerts</p>
        )}
      </div>
    </div>
  )
}

function AIRecommendations() {
  const kpis = deriveKPIs()
  const alerts = useIntelStore(s => s.alerts) || []

  const recommendations = []

  if (kpis?.activeVolunteerCount < 100) {
    recommendations.push({ severity: 'high', text: 'Volunteer growth needed' })
  }
  if (kpis?.activeMissionCount < 10) {
    recommendations.push({ severity: 'medium', text: 'Launch more active missions' })
  }
  if (alerts?.filter(a => !a.read).length > 10) {
    recommendations.push({ severity: 'medium', text: 'Review pending alerts' })
  }

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Target className="w-4 h-4 text-[#D4AF37]" />
        AI Recommendations
      </h3>
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/5">
            <p className="text-white text-sm">{rec.text}</p>
            <span className={`text-xs ${rec.severity === 'high' ? 'text-red-400' : 'text-yellow-400'}`}>
              {rec.severity} priority
            </span>
          </div>
        ))}
        {recommendations.length === 0 && (
          <p className="text-gray-500 text-center py-4">No urgent recommendations</p>
        )}
      </div>
    </div>
  )
}

export default function LeadershipDashboard() {
  const { user } = useAuthStore()
  const kpis = deriveKPIs()

  return (
    <OperatingSystemShell role="leadership">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Leadership Dashboard</h1>
        <p className="text-gray-400">Welcome back, {user?.name || 'Leader'}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <KPICard label="Total Volunteers" value={kpis?.volunteerCount || 0} icon={Users} color="text-blue-400" />
        <KPICard label="Active Missions" value={kpis?.activeMissionCount || 0} icon={Map} color="text-emerald-400" />
        <KPICard label="Treasury" value={kpis?.treasuryTotal} icon={Wallet} color="text-[#D4AF37]" />
        <KPICard label="Sentiment" value={`${kpis?.sentimentScore || 0}%`} icon={TrendingUp} color="text-cyan-400" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MissionProgressBoard />
        <TreasurySummary />
        <RiskAlerts />
        <AIRecommendations />
      </div>
    </OperatingSystemShell>
  )
}