import { Sparkles } from 'lucide-react'
import { useOracleStore } from '../../store/oracleStore'

export default function OracleEngine(){
  const confidence = useOracleStore(s=>s.confidence)

  return (
    <section className="rounded-3xl border border-yellow-300/10 bg-yellow-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="w-4 h-4 text-yellow-200"/>
        <h3 className="text-white font-semibold">Oracle Engine</h3>
      </div>

      <div className="text-5xl font-bold text-white">{confidence}%</div>
      <div className="text-white/50 mt-2">Prediction Confidence</div>
    </section>
  )
}