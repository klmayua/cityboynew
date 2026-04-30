import { useQueueStore } from '../../store/queueStore'

export default function ExecutionLog(){
  const queue=useQueueStore(s=>s.queue)

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-white font-semibold mb-5">
        Execution Log
      </h3>

      <div className="space-y-3">
        {(queue.length ? queue : [{title:'No command queued'}]).map((q,i)=>(
          <div
            key={q.id || i}
            className="rounded-2xl bg-white/5 px-4 py-3 text-white"
          >
            {q.title} • {q.status || 'idle'}
          </div>
        ))}
      </div>
    </section>
  )
}