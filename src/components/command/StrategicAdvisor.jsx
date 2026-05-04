import { Lightbulb } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'

export default function StrategicAdvisor(){
  const trends = useIntelStore(s => s.trends)

  return (
    <section className="rounded-3xl border border-indigo-300/10 bg-indigo-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Lightbulb className="w-4 h-4 text-indigo-200"/>
        <h3 className="text-white font-semibold">Strategic Advisor</h3>
      </div>

      <div className="text-5xl font-bold text-white">{trends.length}</div>
      <div className="text-white/50 mt-2">Active Intelligence Trends</div>
    </section>
  )
}