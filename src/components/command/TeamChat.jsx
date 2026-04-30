import { MessageSquare } from 'lucide-react'
import { useCommsStore } from '../../store/commsStore'

export default function TeamChat(){
  const threads=useCommsStore(s=>s.threads)

  return (
    <section className="rounded-3xl border border-sky-300/10 bg-sky-300/[0.03] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <MessageSquare className="w-4 h-4 text-sky-200"/>
        <h3 className="text-white font-semibold">
          Team Comms
        </h3>
      </div>

      <div className="space-y-3">
        {(threads.length ? threads : [{body:'No messages'}]).map((m,i)=>(
          <div
            key={m.id || i}
            className="rounded-2xl bg-white/5 px-4 py-3 text-white"
          >
            {m.body}
          </div>
        ))}
      </div>
    </section>
  )
}