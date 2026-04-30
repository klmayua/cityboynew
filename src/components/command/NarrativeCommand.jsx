import { Megaphone } from 'lucide-react'
import { useOrchestratorStore } from '../../store/orchestratorStore'

export default function NarrativeCommand(){
  const narratives = useOrchestratorStore(s=>s.narratives)

  return (
    <section className="rounded-3xl border border-rose-300/10 bg-rose-300/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Megaphone className="w-4 h-4 text-rose-200"/>
        <h3 className="text-white font-semibold">Narrative Command</h3>
      </div>

      <div className="text-5xl font-bold text-white">{narratives.length}</div>
      <div className="text-white/50 mt-2">Active Narratives</div>
    </section>
  )
}