import { useAnalyticsStore } from '../../store/analyticsStore'

export default function KPIBar(){
  const metrics=useAnalyticsStore(s=>s.metrics)

  const items=[
    ['Sessions',metrics.sessions],
    ['Commands',metrics.commands],
    ['Revenue',metrics.revenue],
    ['Users',metrics.activeUsers]
  ]

  return (
    <section className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map(([label,value])=>(
        <div
          key={label}
          className="rounded-3xl bg-white/[0.03] border border-white/10 p-5"
        >
          <div className="text-white/50 text-sm">{label}</div>
          <div className="text-white text-2xl font-bold mt-2">
            {value}
          </div>
        </div>
      ))}
    </section>
  )
}