import { Sparkles, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'

export default function OracleEngine(){
  const alerts = useIntelStore(s => s.alerts)
  const sentiment = useIntelStore(s => s.sentiment)
  const forecasts = useIntelStore(s => s.forecasts)
  const getCriticalAlerts = useIntelStore(s => s.getCriticalAlerts)
  
  const criticalCount = getCriticalAlerts().length
  const overallConfidence = sentiment.overall
  
  return (
    <section className="rounded-3xl border border-yellow-300/10 bg-yellow-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="w-4 h-4 text-yellow-200"/>
        <h3 className="text-white font-semibold">Oracle Engine</h3>
      </div>
      
      {criticalCount > 0 && (
        <div className="mb-4 p-3 rounded-xl bg-signal-red/10 border border-signal-red/20">
          <span className="text-signal-red text-sm font-medium">{criticalCount} Critical Alerts</span>
        </div>
      )}
      
      <div className="text-5xl font-bold text-white">{overallConfidence}%</div>
      <div className="text-white/50 mt-2">National Sentiment Score</div>
      
      <div className="mt-6 space-y-2">
        {forecasts.slice(0, 3).map(f => {
          const TrendIcon = f.confidence > 75 ? TrendingUp : f.confidence > 50 ? Minus : TrendingDown
          return (
            <div key={f.metric} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
              <span className="text-white/70 text-sm">{f.metric}</span>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">{f.projection}</span>
                <TrendIcon className={`w-4 h-4 ${f.confidence > 75 ? 'text-capital-green' : 'text-white/50'}`} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}