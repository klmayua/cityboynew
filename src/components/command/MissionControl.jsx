import { Target, Users, Clock, MapPin, AlertCircle } from 'lucide-react'
import { useMissionStore } from '../../store/missionStore'

const priorityConfig = {
  critical: { color: 'text-signal-red', bg: 'bg-signal-red/10', label: 'CRITICAL' },
  high: { color: 'text-signal-orange', bg: 'bg-signal-orange/10', label: 'HIGH' },
  medium: { color: 'text-command-blue', bg: 'bg-command-blue/10', label: 'MEDIUM' },
  low: { color: 'text-white/50', bg: 'bg-white/5', label: 'LOW' },
}

const statusConfig = {
  active: { color: 'text-capital-green', dot: 'bg-capital-green' },
  pending: { color: 'text-white/50', dot: 'bg-white/30' },
}

export default function MissionControl(){
  const missions = useMissionStore(s => s.missions)
  const getMissionStats = useMissionStore(s => s.getMissionStats)
  const stats = getMissionStats()
  
  return (
    <section className="rounded-3xl border border-red-400/10 bg-gradient-to-br from-red-400/[0.04] to-red-400/[0.01] p-4 md:p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-4 h-4 text-red-300"/>
        <h3 className="text-white font-semibold text-sm md:text-base">Operations Command</h3>
        <span className="ml-auto text-[10px] text-red-300/60 uppercase tracking-wider flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse" />
          {missions.filter(m => m.status === 'active').length} Active
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4">
        <div className="rounded-xl bg-red-300/[0.06] border border-red-300/10 p-2 md:p-3 text-center">
          <div className="text-white/50 text-[10px]">Deployments</div>
          <div className="text-white text-lg md:text-xl font-bold">{stats.totalVolunteers}</div>
        </div>
        <div className="rounded-xl bg-red-300/[0.06] border border-red-300/10 p-2 md:p-3 text-center">
          <div className="text-white/50 text-[10px]">Success</div>
          <div className="text-capital-green text-lg md:text-xl font-bold">{stats.completed}</div>
        </div>
        <div className="rounded-xl bg-red-300/[0.06] border border-red-300/10 p-2 md:p-3 text-center">
          <div className="text-white/50 text-[10px]">Response</div>
          <div className="text-white text-lg md:text-xl font-bold">{stats.active}</div>
        </div>
      </div>

      <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
        {missions.slice(0, 8).map(m => {
          const status = statusConfig[m.status] || statusConfig.pending
          const priority = m.category === 'Infrastructure' ? priorityConfig.high : priorityConfig.medium
          return (
            <div key={m.id} className="rounded-xl bg-white/[0.02] border border-white/5 p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                  <span className="text-white text-xs font-medium">{m.title}</span>
                </div>
                <span className={`text-[9px] px-1.5 py-0.5 rounded ${priority.bg} ${priority.color}`}>
                  {priority.label}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-[10px]">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-white/40" />
                  <span className="text-white/60">{m.states?.[0]}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-white/40" />
                  <span className="text-white/60">{m.volunteers}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-white/40" />
                  <span className="text-white/60">{m.endDate?.slice(5)}</span>
                </div>
                <div className="text-right">
                  <span className="text-command-blue">{m.progress}%</span>
                </div>
              </div>
              <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full" style={{ width: m.progress + '%' }} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}