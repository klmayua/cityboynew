import { Database } from 'lucide-react'
import { useOrchestratorStore } from '../../store/orchestratorStore'

export default function MemoryVault(){
  const score = useOrchestratorStore(s=>s.memoryScore)

  return (
    <section className="rounded-3xl border border-slate-300/10 bg-slate-300/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Database className="w-4 h-4 text-slate-200"/>
        <h3 className="text-white font-semibold">Memory Vault</h3>
      </div>

      <div className="text-5xl font-bold text-white">{score}</div>
      <div className="text-white/50 mt-2">Knowledge Density</div>
    </section>
  )
}