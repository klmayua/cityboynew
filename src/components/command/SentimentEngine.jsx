import { HeartPulse } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'

export default function SentimentEngine(){
  const sentiment = useIntelStore(s=>s.sentiment)

  return (
    <section className="rounded-3xl border border-emerald-300/10 bg-emerald-300/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <HeartPulse className="w-4 h-4 text-emerald-200"/>
        <h3 className="text-white font-semibold">Public Sentiment</h3>
      </div>

      <div className="text-5xl font-bold text-white">{sentiment}%</div>
      <div className="text-white/50 mt-2">Approval Temperature</div>
    </section>
  )
}