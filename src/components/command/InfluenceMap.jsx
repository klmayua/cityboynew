import { Network } from 'lucide-react'
import { usePowerStore } from '../../store/powerStore'

export default function InfluenceMap(){
  const influence = usePowerStore(s=>s.influenceIndex)

  return (
    <section className="rounded-3xl border border-blue-400/10 bg-blue-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Network className="w-4 h-4 text-blue-300"/>
        <h3 className="text-white font-semibold">Influence Engine</h3>
      </div>

      <div className="text-5xl font-bold text-white">
        {influence}
      </div>

      <div className="mt-2 text-white/50 text-sm">
        Strategic Influence Index
      </div>
    </section>
  )
}