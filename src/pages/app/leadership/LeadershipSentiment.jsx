import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useIntelStore } from '../../../store/intelStore'
import { 
  TrendingUp, TrendingDown, Minus, Globe, MessageSquare, 
  BarChart3, Users, Newspaper, Monitor, ArrowUp, ArrowDown,
  AlertTriangle, Filter, Download, Activity
} from 'lucide-react'

function SentimentGauge({ score, label }) {
  const getColor = (score) => {
    if (score >= 80) return 'text-emerald-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getBgColor = (score) => {
    if (score >= 80) return 'bg-emerald-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="glass-dark rounded-xl p-6 border border-white/10">
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <div className="flex items-end gap-3">
        <p className={`text-4xl font-bold ${getColor(score)}`}>{score}</p>
        <span className="text-gray-500 text-sm mb-2">/100</span>
      </div>
      <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all ${getBgColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}

function RegionSentiment({ region, score, trend }) {
  const TrendIcon = trend === 'up' ? ArrowUp : trend === 'down' ? ArrowDown : Minus
  const trendColor = trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-gray-400'

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
      <div className="flex items-center gap-3">
        <Globe className="w-4 h-4 text-gray-400" />
        <span className="text-white text-sm">{region}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${
              score >= 80 ? 'bg-emerald-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
        <span className="text-white text-sm font-medium w-8">{score}</span>
        <TrendIcon className={`w-4 h-4 ${trendColor}`} />
      </div>
    </div>
  )
}

function TrendCard({ topic, volume, sentiment }) {
  const getSentimentColor = (sentiment) => {
    if (sentiment >= 80) return 'text-emerald-400'
    if (sentiment >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div>
        <p className="text-white font-medium">{topic}</p>
        <p className="text-gray-400 text-sm">{volume.toLocaleString()} mentions</p>
      </div>
      <div className="text-right">
        <p className={`text-lg font-bold ${getSentimentColor(sentiment)}`}>{sentiment}</p>
        <p className="text-gray-500 text-xs">sentiment</p>
      </div>
    </div>
  )
}

function IntelligenceSentiment() {
  const navigate = useNavigate()
  const { sentiment, trends, forecasts, heatmap } = useIntelStore()
  const [timeframe, setTimeframe] = useState('7d')

  const gaugeData = [
    { label: 'Overall Sentiment', value: sentiment.overall },
    { label: 'Social Media', value: 82 },
    { label: 'News Coverage', value: 71 },
    { label: 'Public Opinion', value: 76 },
  ]

  return (
    <CityBoyOSShell role="leadership" title="Sentiment Intelligence">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white font-semibold">Sentiment Intelligence</h1>
          <p className="text-gray-400">Public mood tracking and media analysis</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="cursor-pointer px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {gaugeData.map(gauge => (
          <SentimentGauge key={gauge.label} score={gauge.value} label={gauge.label} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#D4AF37]" />
            Regional Sentiment
          </h3>
          <div className="space-y-2">
            {sentiment.breakdown.map(region => (
              <RegionSentiment 
                key={region.region} 
                region={region.region} 
                score={region.score} 
                trend={region.trend} 
              />
            ))}
          </div>
        </div>

        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            Trending Topics
          </h3>
          <div className="space-y-3">
            {trends.map(topic => (
              <TrendCard 
                key={topic.topic} 
                topic={topic.topic} 
                volume={topic.volume} 
                sentiment={topic.sentiment} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            Top Regions by Activity
          </h3>
          <div className="space-y-3">
            {heatmap.map(region => (
              <div key={region.region} className="flex items-center justify-between">
                <span className="text-white text-sm">{region.region}</span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-xs">{region.activity} actions</span>
                  <div className="w-16 h-1.5 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${region.intensity}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-dark rounded-xl p-5 border border-white/10 col-span-2">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
            Projections
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {forecasts.map(forecast => (
              <div key={forecast.metric} className="p-4 rounded-lg bg-white/5">
                <p className="text-gray-400 text-xs mb-1">{forecast.metric}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white">{forecast.current}</span>
                  <span className="text-gray-500 text-xs">→</span>
                  <span className="text-emerald-400 text-sm">{forecast.projection}</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex-1 h-1 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${forecast.confidence}%` }}
                    />
                  </div>
                  <span className="text-gray-500 text-xs">{forecast.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default IntelligenceSentiment