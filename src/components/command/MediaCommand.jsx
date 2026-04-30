import { RadioTower } from 'lucide-react'
import { useExecutiveStore } from '../../store/executiveStore'

export default function MediaCommand(){
  const press = useExecutiveStore(s=>s.pressMomentum)

  return (
    <section className="rounded-3xl border border-fuchsia-400/10 bg-fuchsia-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <RadioTower className="w-4 h-4 text-fuchsia-300"/>
        <h3 className="text-white font-semibold">Media Command</h3>
      </div>

      <div className="text-5xl font-bold text-white">{press}%</div>
      <div className="text-white/50 mt-2">Momentum Index</div>
    </section>
  )
}