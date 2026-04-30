import { GitBranch } from 'lucide-react'

export default function WorkflowChain(){
  return (
    <section className="rounded-3xl border border-purple-300/10 bg-purple-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <GitBranch className="w-4 h-4 text-purple-200"/>
        <h3 className="text-white font-semibold">Workflow Chain</h3>
      </div>

      <div className="text-white/70 leading-relaxed">
        Trigger routing.
        Event chaining.
        Silent execution.
        Autonomous dispatch.
      </div>
    </section>
  )
}