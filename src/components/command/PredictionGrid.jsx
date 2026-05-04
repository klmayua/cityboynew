import { BarChart3 } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'

export default function PredictionGrid(){
  const forecasts = useIntelStore(s => s.forecasts)

  return (
    <section className="rounded-3xl border border-blue-300/10 bg-blue-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <BarChart3 className="w-4 h-4 text-blue-200"/>
        <h3 className="text-white font-semibold">Prediction Grid</h3>
      </div>

      <div className="text-5xl font-bold text-white">{forecasts.length}</div>
      <div className="text-white/50 mt-2">Live Scenarios</div>
    </section>
  )
}