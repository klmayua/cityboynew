import { Activity } from 'lucide-react'
import { usePeopleStore } from '../../store/peopleStore'

export default function ViralityIndex(){
  const rate = usePeopleStore(s=>s.conversionRate)

  return (
    <section className="rounded-3xl border border-pink-400/10 bg-pink-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Activity className="w-4 h-4 text-pink-300"/>
        <h3 className="text-white font-semibold">Virality Index</h3>
      </div>

      <div className="text-5xl font-bold text-white">{rate}%</div>
      <div className="text-white/50 mt-2">Conversion Velocity</div>
    </section>
  )
}