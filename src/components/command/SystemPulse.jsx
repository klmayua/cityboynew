import { Activity } from 'lucide-react'
import { useSystemBus } from '../../store/systemBus'

export default function SystemPulse(){
  const events = useSystemBus(s=>s.events)

  return (
    <section className="rounded-3xl border border-green-300/10 bg-green-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Activity className="w-4 h-4 text-green-200"/>
        <h3 className="text-white font-semibold">System Pulse</h3>
      </div>

      <div className="text-5xl font-bold text-white">{events.length}</div>
      <div className="text-white/50 mt-2">Events Logged</div>
    </section>
  )
}