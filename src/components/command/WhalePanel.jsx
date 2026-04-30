import { Crown } from 'lucide-react'
import { useWhaleStore } from '../../store/whaleStore'

export default function WhalePanel(){
  const whales = useWhaleStore(s=>s.whales)

  return (
    <section className="rounded-3xl border border-purple-500/10 bg-purple-500/[0.03] p-6 min-h-[280px] sm:min-h-[320px] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.25)] transition-all duration-300 hover:border-gold/20">
      <div className="flex items-center gap-2 mb-5">
        <Crown className="w-4 h-4 text-purple-300"/>
        <h3 className="text-white font-semibold">
          Strategic Circle
        </h3>
      </div>

      <div className="space-y-3">
        {whales.map(w=>(
          <div key={w.id} className="rounded-2xl bg-white/[0.03] p-4">
            <div className="text-white font-medium">
              {w.name}
            </div>
            <div className="text-xs text-white/50 mt-2">
              {w.tier} • Influence {w.influence}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}