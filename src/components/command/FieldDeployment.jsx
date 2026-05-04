import { Truck } from 'lucide-react'
import { useMissionStore } from '../../store/missionStore'

export default function FieldDeployment(){
  const missions = useMissionStore(s => s.missions)
  const getMissionStats = useMissionStore(s => s.getMissionStats)
  const stats = getMissionStats()

  return (
    <section className="rounded-3xl border border-lime-400/10 bg-lime-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Truck className="w-4 h-4 text-lime-300"/>
        <h3 className="text-white font-semibold">Field Deployment</h3>
      </div>

      <div className="text-5xl font-bold text-white">{stats.totalVolunteers}</div>
      <div className="text-white/50 mt-2">Active Units</div>
    </section>
  )
}