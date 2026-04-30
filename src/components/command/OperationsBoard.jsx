import { ClipboardList } from 'lucide-react'
import { useTaskStore } from '../../store/taskStore'

export default function OperationsBoard(){
  const tasks=useTaskStore(s=>s.tasks)

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <ClipboardList className="w-4 h-4 text-white"/>
        <h3 className="text-white font-semibold">
          Operations Board
        </h3>
      </div>

      <div className="space-y-3">
        {(tasks.length ? tasks : [{title:'No active task'}]).map((t,i)=>(
          <div
            key={t.id || i}
            className="rounded-2xl bg-white/5 px-4 py-3 text-white"
          >
            {t.title}
          </div>
        ))}
      </div>
    </section>
  )
}