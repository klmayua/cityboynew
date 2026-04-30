import { Library } from 'lucide-react'
import { useLegacyStore } from '../../store/legacyStore'

export default function LegacyPanel(){
  const impact = useLegacyStore(s=>s.impactScore)

  return (
    <section className="rounded-3xl border border-amber-400/10 bg-amber-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Library className="w-4 h-4 text-amber-300"/>
        <h3 className="text-white font-semibold">Legacy Engine</h3>
      </div>

      <div className="text-5xl font-bold text-white">
        {impact}
      </div>

      <div className="mt-2 text-white/50 text-sm">
        Institutional Impact Score
      </div>
    </section>
  )
}