import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useIntelStore } from '../../../store/intelStore'
import { 
  TrendingUp, TrendingDown, Minus, Globe, MessageSquare, 
  BarChart3, Users, ArrowUp, ArrowDown, Filter
} from 'lucide-react'

function SentimentGauge({ score, label }) {
  const getColor = (score) => score >= 80 ? 'text-emerald-400' : score >= 60 ? 'text-yellow-400' : 'text-red-400'
  const getBg = (score) => score >= 80 ? 'bg-emerald-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
  
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <p className={`text-4xl font-bold ${getColor(score)}`}>{score}</p>
      <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${getBg(score)}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}

function RegionalSentiment({ region, score, trend }) {
  const TrendIcon = trend === 'up' ? ArrowUp : trend === 'down' ? ArrowDown : Minus
  const trendColor = trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-gray-400'
  
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
      <div className="flex items-center gap-3">
        <Globe className="w-4 h-4 text-gray-400" />
        <span className="text-white">{region}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className={`h-full ${
            score >= 80 ? 'bg-emerald-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
          }`} style={{ width: `${score}%` }} />
        </div>
        <span className="text-white font-medium w-8">{score}</span>
        <TrendIcon className={`w-4 h-4 ${trendColor}`} />
      </div>
    </div>
  )
}

function IntelligenceSentiment() {
  const navigate = useNavigate()
  const { sentiment, trends } = useIntelStore()
  const [timeframe, setTimeframe] = useState('7d')

  return (
    <CityBoyOSShell role="intelligence" title="Sentiment">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white font-semibold">Sentiment Intelligence</h1>
          <p className="text-gray-400">Public mood tracking and media analysis</p>
        </div>
        <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="cursor-pointer px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm">
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SentimentGauge score={sentiment.overall} label="Overall" />
        <SentimentGauge score={82} label="Social Media" />
        <SentimentGauge score={71} label="News Coverage" />
        <SentimentGauge score={76} label="Public Opinion" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#D4AF37]" />
            Regional Sentiment
          </h3>
          <div className="space-y-2">
            {sentiment.breakdown.map(r => (
              <RegionalSentiment key={r.region} region={r.region} score={r.score} trend={r.trend} />
            ))}
          </div>
        </div>

        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            Trending Topics
          </h3>
          <div className="space-y-3">
            {trends.map(t => (
              <div key={t.topic} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <p className="text-white">{t.topic}</p>
                  <p className="text-gray-400 text-sm">{t.volume.toLocaleString()} mentions</p>
                </div>
                <p className={`text-lg font-bold ${
                  t.sentiment >= 80 ? 'text-emerald-400' : t.sentiment >= 60 ? 'text-yellow-400' : 'text-red-400'
                }`}>{t.sentiment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default IntelligenceSentiment