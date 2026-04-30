import { ShieldCheck } from 'lucide-react'
import { useAuditStore } from '../../store/auditStore'

export default function AuditTrail(){
  const logs=useAuditStore(s=>s.logs)

  return (
    <section className="rounded-3xl border border-emerald-300/10 bg-emerald-300/[0.03] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <ShieldCheck className="w-4 h-4 text-emerald-200"/>
        <h3 className="text-white font-semibold">
          Audit Trail
        </h3>
      </div>

      <div className="space-y-3">
        {(logs.length ? logs : [{action:'No logs'}]).map((log,i)=>(
          <div
            key={log.id || i}
            className="rounded-2xl bg-white/5 px-4 py-3 text-white"
          >
            {log.action}
          </div>
        ))}
      </div>
    </section>
  )
}