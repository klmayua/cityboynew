import { Radar } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'

export default function SignalDesk(){
  const signals = useIntelStore(s=>s.signals)

  return (
    <section className="rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Radar className="w-4 h-4 text-cyan-200"/>
        <h3 className="text-white font-semibold">Signal Desk</h3>
      </div>

      <div className="space-y-3">
        {(signals.length ? signals : [{id:1,title:'No fresh signal'}]).map(s=>(
          <div key={s.id} className="rounded-2xl bg-white/[0.03] px-4 py-3 text-white">
            {s.title}
          </div>
        ))}
      </div>
    </section>
  )
}