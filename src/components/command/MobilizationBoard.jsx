import { Users, MapPin, Target, Clock } from 'lucide-react'
import { useMissionStore } from '../../store/missionStore'

export default function MobilizationBoard({ chapters }) {
  const missions = useMissionStore(s => s.missions)
  const activeMissions = missions.filter(m => m.status !== 'completed')

  return (
    <div className="bg-surface border border-white/8 rounded-3xl p-6">
      <h3 className="text-white font-semibold mb-4">Mission Dispatch</h3>
      <div className="space-y-4">
        {missions.map((mission) => (
          <div key={mission.id} className="bg-surface-2 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-gold" />
                <p className="text-white font-medium">{mission.title}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                mission.progress >= 75 ? 'bg-signal-green/20 text-signal-green' : 'bg-gold/20 text-gold'
              }`}>
                {mission.progress >= 75 ? 'Nearly Complete' : 'Active'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{mission.states?.[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{mission.volunteers}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{mission.endDate?.slice(5)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}