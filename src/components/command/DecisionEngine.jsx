import { Brain } from 'lucide-react'
import { useOrchestratorStore } from '../../store/orchestratorStore'

export default function DecisionEngine(){
  const autonomy = useOrchestratorStore(s=>s.autonomyLevel)

  return (
    <section className="rounded-3xl border border-purple-300/10 bg-purple-300/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Brain className="w-4 h-4 text-purple-200"/>
        <h3 className="text-white font-semibold">Decision Engine</h3>
      </div>

      <div className="text-5xl font-bold text-white">{autonomy}%</div>
      <div className="text-white/50 mt-2">Autonomy Level</div>
    </section>
  )
}