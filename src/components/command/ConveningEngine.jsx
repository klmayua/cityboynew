import { CalendarDays } from 'lucide-react'
import { useExecutiveStore } from '../../store/executiveStore'

export default function ConveningEngine(){
  const meetings = useExecutiveStore(s=>s.meetings)

  return (
    <section className="rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <CalendarDays className="w-4 h-4 text-cyan-300"/>
        <h3 className="text-white font-semibold">Convening Engine</h3>
      </div>

      <div className="space-y-3">
        {(meetings.length ? meetings : [{id:1,title:'No meetings scheduled'}]).map(item=>(
          <div key={item.id} className="rounded-2xl bg-white/[0.03] px-4 py-3 text-white">
            {item.title}
          </div>
        ))}
      </div>
    </section>
  )
}