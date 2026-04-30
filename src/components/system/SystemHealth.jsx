import { Cpu } from 'lucide-react'
import { useExecutionEngine } from '../../store/executionEngineStore'

export default function SystemHealth(){
  const queue=useExecutionEngine(s=>s.queue.length)
  const running=useExecutionEngine(s=>s.running)
  const failed=useExecutionEngine(s=>s.failed.length)

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-2 mb-4">
        <Cpu className="w-4 h-4 text-white"/>
        <h3 className="text-white font-semibold">
          System Health
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white/5 p-4 text-white">
          Queue: {queue}
        </div>
        <div className="rounded-2xl bg-white/5 p-4 text-white">
          Running: {running ? 1 : 0}
        </div>
        <div className="rounded-2xl bg-white/5 p-4 text-white">
          Failed: {failed}
        </div>
      </div>
    </section>
  )
}