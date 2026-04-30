import { ShieldAlert } from 'lucide-react'
import { useExecutiveStore } from '../../store/executiveStore'

export default function WarRoom(){
  const briefings = useExecutiveStore(s=>s.briefings)

  return (
    <section className="rounded-3xl border border-rose-400/10 bg-rose-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <ShieldAlert className="w-4 h-4 text-rose-300"/>
        <h3 className="text-white font-semibold">War Room</h3>
      </div>

      <div className="space-y-3">
        {(briefings.length ? briefings : [{id:1,title:'No active briefing'}]).map(item=>(
          <div key={item.id} className="rounded-2xl bg-white/[0.03] px-4 py-3 text-white">
            {item.title}
          </div>
        ))}
      </div>
    </section>
  )
}