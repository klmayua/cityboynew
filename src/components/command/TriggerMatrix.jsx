import { Workflow } from 'lucide-react'
import { useSystemBus } from '../../store/systemBus'

export default function TriggerMatrix(){
  const events = useSystemBus(s=>s.events)

  return (
    <section className="rounded-3xl border border-orange-300/10 bg-orange-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Workflow className="w-4 h-4 text-orange-200"/>
        <h3 className="text-white font-semibold">Trigger Matrix</h3>
      </div>

      <div className="space-y-3">
        {(events.length ? events.slice(0,4) : [{id:1,type:'No trigger'}]).map(e=>(
          <div key={e.id} className="rounded-2xl bg-white/[0.03] px-4 py-3 text-white">
            {e.type}
          </div>
        ))}
      </div>
    </section>
  )
}