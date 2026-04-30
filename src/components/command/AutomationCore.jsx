import { Bot } from 'lucide-react'

export default function AutomationCore(){
  return (
    <section className="rounded-3xl border border-green-300/10 bg-green-300/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Bot className="w-4 h-4 text-green-200"/>
        <h3 className="text-white font-semibold">Automation Core</h3>
      </div>

      <div className="text-white/70 leading-relaxed">
        Trigger chains.
        Automated routing.
        Scheduled action.
        Silent execution.
      </div>
    </section>
  )
}