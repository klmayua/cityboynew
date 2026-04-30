import { ThumbsUp, ThumbsDown, Minus } from 'lucide-react'

export default function SentimentGauge({ sentiment }) {
  const { positive, negative, neutral } = sentiment

  return (
    <div className="bg-surface border border-white/8 rounded-3xl p-6">
      <h3 className="text-white font-semibold mb-4">Sentiment Gauge</h3>
      <div className="relative pt-8">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-signal-green" />
              <span className="text-signal-green font-semibold">{positive}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-5 h-5 text-white/40" />
              <span className="text-white/60 font-semibold">{neutral}%</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsDown className="w-5 h-5 text-signal-red" />
              <span className="text-signal-red font-semibold">{negative}%</span>
            </div>
          </div>
        </div>
        <div className="h-3 bg-surface-2 rounded-full overflow-hidden flex">
          <div className="h-full bg-signal-green" style={{ width: `${positive}%` }} />
          <div className="h-full bg-white/20" style={{ width: `${neutral}%` }} />
          <div className="h-full bg-signal-red" style={{ width: `${negative}%` }} />
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {sentiment.issues.map((issue, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-white/80 text-sm">{issue.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">{issue.mention} mentions</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  issue.trend === 'up'
                    ? 'bg-signal-green/20 text-signal-green'
                    : issue.trend === 'down'
                    ? 'bg-signal-red/20 text-signal-red'
                    : 'bg-white/10 text-white/60'
                }`}
              >
                {issue.trend === 'up' ? '↑' : issue.trend === 'down' ? '↓' : '→'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}