import OperatingSystemShell from '../../../layouts/OperatingSystemShell'
import { useAuthStore } from '../../../store/authStore'
import { useIntelStore } from '../../../store/intelStore'
import { useSystemStore } from '../../../store/systemStore'
import { Eye, TrendingUp, AlertTriangle, Radar, Activity, Target, Search, Bell } from 'lucide-react'

function OSINTStream() {
  const alerts = useIntelStore(s => s.alerts) || []
  const recent = alerts.slice(0, 8)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Eye className="w-4 h-4 text-cyan-400" />
        OSINT Stream
      </h3>
      <div className="space-y-2">
        {recent.map(alert => (
          <div key={alert.id} className={`p-3 rounded-lg ${
            alert.type === 'critical' ? 'bg-red-500/10 border border-red-500/20' :
            alert.type === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/20' :
            'bg-white/5'
          }`}>
            <div className="flex items-center justify-between">
              <p className="text-white text-sm">{alert.title}</p>
              <span className={`text-xs ${
                alert.type === 'critical' ? 'text-red-400' :
                alert.type === 'warning' ? 'text-yellow-400' : 'text-gray-400'
              }`}>
                {alert.type}
              </span>
            </div>
            <p className="text-gray-400 text-xs">{alert.message}</p>
          </div>
        ))}
        {recent.length === 0 && (
          <p className="text-gray-500 text-center py-4">No alerts</p>
        )}
      </div>
    </div>
  )
}

function TrendRadar() {
  const sentiment = useIntelStore(s => s.sentiment) || {}
  const breakdown = sentiment?.breakdown || []

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Radar className="w-4 h-4 text-cyan-400" />
        Regional Sentiment
      </h3>
      <div className="space-y-3">
        {breakdown.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">{item.region}</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.trend === 'up' ? 'bg-emerald-400' :
                    item.trend === 'down' ? 'bg-red-400' : 'bg-yellow-400'
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <span className="text-white text-sm w-8">{item.score}</span>
            </div>
          </div>
        ))}
        {breakdown.length === 0 && (
          <p className="text-gray-500 text-center py-4">No data</p>
        )}
      </div>
    </div>
  )
}

function AnomalyDetector() {
  const alerts = useIntelStore(s => s.alerts) || []
  const critical = alerts.filter(a => a.type === 'critical' && !a.read)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-red-400" />
        Anomaly Detector
      </h3>
      <div className="text-center p-4">
        <div className={`text-4xl font-bold ${critical.length > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
          {critical.length}
        </div>
        <p className="text-gray-400 text-sm">Critical anomalies detected</p>
      </div>
    </div>
  )
}

function NarrativeMonitor() {
  const sentiment = useIntelStore(s => s.sentiment) || {}
  const overall = sentiment?.overall || 0

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        Narrative Monitor
      </h3>
      <div className="text-center p-4">
        <div className="text-4xl font-bold text-emerald-400">{overall}</div>
        <p className="text-gray-400 text-sm">Overall sentiment score</p>
      </div>
    </div>
  )
}

function ThreatBoard() {
  const alerts = useIntelStore(s => s.alerts) || []
  const threats = alerts.filter(a => a.severity === 'critical' || a.severity === 'high').slice(0, 4)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Target className="w-4 h-4 text-red-400" />
        Threat Board
      </h3>
      <div className="space-y-2">
        {threats.map(threat => (
          <div key={threat.id} className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-white text-sm">{threat.title}</p>
            <p className="text-gray-400 text-xs">{threat.severity} priority</p>
          </div>
        ))}
        {threats.length === 0 && (
          <p className="text-gray-500 text-center py-4">No active threats</p>
        )}
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Search className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
        <span className="text-white text-xs">Scan</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Activity className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
        <span className="text-white text-xs">Monitor</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <AlertTriangle className="w-5 h-5 text-red-400 mx-auto mb-1" />
        <span className="text-white text-xs">Alerts</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Bell className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
        <span className="text-white text-xs">Notify</span>
      </button>
    </div>
  )
}

export default function IntelligenceDashboard() {
  const { user } = useAuthStore()

  return (
    <OperatingSystemShell role="intelligence">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Intelligence Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Analyst'}</p>
      </div>

      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <OSINTStream />
        <TrendRadar />
        <AnomalyDetector />
        <NarrativeMonitor />
        <ThreatBoard />
      </div>
    </OperatingSystemShell>
  )
}