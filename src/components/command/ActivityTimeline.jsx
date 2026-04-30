import { useCommandMemory } from '../../store/commandMemory'

export default function ActivityTimeline() {
  const recentActions = useCommandMemory(s => s.recentActions)

  return (
    <section className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 min-h-[var(--panel-min-h)]">
      <h3 className="text-white font-semibold mb-6">Recent Activity</h3>

      {recentActions.length === 0 && (
        <div className="text-white/[0.4] text-sm py-8 text-center">
          No recent activity
        </div>
      )}

      <div className="space-y-5">
        {recentActions.slice(0, 8).map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
            <div>
              <div className="text-sm text-white">{item.title}</div>
              <div className="text-xs text-white/[0.35] mt-1">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}