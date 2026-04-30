import { Briefcase } from 'lucide-react'
import { useCrmStore } from '../../store/crmStore'

export default function PipelineBoard(){
  const leads=useCrmStore(s=>s.leads)

  return (
    <section className="rounded-3xl border border-violet-300/10 bg-violet-300/[0.03] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Briefcase className="w-4 h-4 text-violet-200"/>
        <h3 className="text-white font-semibold">
          Pipeline
        </h3>
      </div>

      <div className="space-y-3">
        {(leads.length ? leads : [{name:'No active lead'}]).map((lead,i)=>(
          <div key={lead.id || i} className="rounded-2xl bg-white/5 px-4 py-3 text-white">
            {lead.name}
          </div>
        ))}
      </div>
    </section>
  )
}