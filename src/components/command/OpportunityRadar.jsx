import { Sparkles } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'

export default function OpportunityRadar(){
  const opportunities = useIntelStore(s=>s.opportunities)

  return (
    <section className="rounded-3xl border border-yellow-300/10 bg-yellow-300/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="w-4 h-4 text-yellow-200"/>
        <h3 className="text-white font-semibold">Opportunity Radar</h3>
      </div>

      <div className="text-5xl font-bold text-white">{opportunities}</div>
      <div className="text-white/50 mt-2">Active Windows</div>
    </section>
  )
}