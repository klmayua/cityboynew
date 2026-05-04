import { Radio } from 'lucide-react'
import { useSystemStore } from '../../store/systemStore'

export default function LiveFeed(){
  const activityFeed = useSystemStore(s => s.activityFeed)

  return (
    <section className="rounded-3xl border border-red-500/10 bg-red-500/[0.03] p-6 min-h-[280px] sm:min-h-[320px] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.25)] transition-all duration-300 hover:border-gold/20">
      <div className="flex items-center gap-2 mb-5">
        <Radio className="w-4 h-4 text-red-400 animate-pulse"/>
        <h3 className="text-white font-semibold">
          Live Feed
        </h3>
      </div>

      <div className="space-y-3">
        {activityFeed.slice(0,6).map(item=>(
          <div
            key={item.id}
            className="rounded-2xl bg-white/[0.03] px-4 py-3"
          >
            <div className="text-sm text-white">
              {item.action.replace('_', ' ')}: {item.target}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}