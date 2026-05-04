import { Zap } from 'lucide-react'
import { useMissionStore } from '../../store/missionStore'

export default function ExecutionIndex(){
  const missions = useMissionStore(s => s.missions)
  const getMissionStats = useMissionStore(s => s.getMissionStats)
  const stats = getMissionStats()
  
  const activeRate = stats.total > 0 ? Math.round((stats.active / stats.total) * 100) : 0

  return (
    <section className="rounded-3xl border border-violet-400/10 bg-violet-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Zap className="w-4 h-4 text-violet-300"/>
        <h3 className="text-white font-semibold">Execution Index</h3>
      </div>

      <div className="text-5xl font-bold text-white">{activeRate}%</div>
      <div className="text-white/50 mt-2">Operational Velocity</div>
    </section>
  )
}