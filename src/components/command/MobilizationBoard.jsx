import { Users, MapPin, Target, Clock } from 'lucide-react'

const missions = [
  { id: 1, title: 'Lagos Central Outreach', volunteers: 45, target: 60, location: 'Lagos', status: 'active', time: '2h left' },
  { id: 2, title: 'Abuja Voter Registration', volunteers: 32, target: 50, location: 'Abuja', status: 'active', time: '4h left' },
  { id: 3, title: 'Kano Community Clean-up', volunteers: 28, target: 30, location: 'Kano', status: 'nearly_complete', time: '1h left' },
  { id: 4, title: 'Port Harcourt Awareness', volunteers: 18, target: 40, location: 'Rivers', status: 'active', time: '6h left' },
]

export default function MobilizationBoard({ chapters }) {
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
                mission.status === 'nearly_complete' ? 'bg-signal-green/20 text-signal-green' : 'bg-gold/20 text-gold'
              }`}>
                {mission.status === 'nearly_complete' ? 'Nearly Complete' : 'Active'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{mission.volunteers}/{mission.target}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{mission.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{mission.time}</span>
              </div>
            </div>
            <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full"
                style={{ width: `${(mission.volunteers / mission.target) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}