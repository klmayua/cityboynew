import { Flame } from 'lucide-react'
import { useExecutiveStore } from '../../store/executiveStore'

export default function HeatMap(){
  const heat = useExecutiveStore(s=>s.chapterHeat)

  return (
    <section className="rounded-3xl border border-orange-400/10 bg-orange-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Flame className="w-4 h-4 text-orange-300"/>
        <h3 className="text-white font-semibold">Chapter Heat</h3>
      </div>

      <div className="space-y-3">
        {heat.map(item=>(
          <div key={item.name}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/70">{item.name}</span>
              <span className="text-white">{item.score}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-orange-300" style={{width:`${item.score}%`}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}