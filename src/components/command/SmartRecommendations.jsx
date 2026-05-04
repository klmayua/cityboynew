import { Sparkles } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'
import { useSystemStore } from '../../store/systemStore'

export default function SmartRecommendations() {
  const alerts = useIntelStore(s => s.alerts)
  const forecasts = useIntelStore(s => s.forecasts)
  const trends = useIntelStore(s => s.trends)
  const notify = useSystemStore(s => s.notify)

  const recommendations = [
    ...alerts.filter(a => a.type === 'critical').map(a => ({
      id: 'alert-' + a.id,
      title: a.title,
      severity: 'high',
      action: a.message
    })),
    ...forecasts.filter(f => f.confidence < 75).map(f => ({
      id: 'forecast-' + f.metric,
      title: f.metric + ' uncertain',
      severity: 'medium',
      action: 'Confidence: ' + f.confidence + '%'
    })),
    ...trends.filter(t => t.sentiment > 80).map(t => ({
      id: 'trend-' + t.topic,
      title: 'Opportunity: ' + t.topic,
      severity: 'low',
      action: 'Sentiment: ' + t.sentiment + '%'
    }))
  ].slice(0, 5)

  const handleClick = (rec) => {
    notify('info', 'Recommendation: ' + rec.title)
  }

  return (
    <section className="rounded-3xl border border-gold/[0.1] bg-gold/[0.03] p-6">
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="w-4 h-4 text-gold" />
        <h3 className="text-white font-semibold">Recommendations</h3>
      </div>

      <div className="space-y-3">
        {recommendations.length === 0 ? (
          <div className="text-white/50 text-sm py-4">No recommendations</div>
        ) : (
          recommendations.map((rec) => (
            <button
              key={rec.id}
              onClick={() => handleClick(rec)}
              className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-left transition-all hover:border-gold/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-white/[0.85]">{rec.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  rec.severity === 'high' ? 'bg-signal-red/20 text-signal-red' :
                  rec.severity === 'medium' ? 'bg-gold/20 text-gold' :
                  'bg-signal-green/20 text-signal-green'
                }`}>
                  {rec.severity}
                </span>
              </div>
              {rec.action && (
                <div className="text-xs text-white/[0.5] mt-2">{rec.action}</div>
              )}
            </button>
          ))
        )}
      </div>
    </section>
  )
}