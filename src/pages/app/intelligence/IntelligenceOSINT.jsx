import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { useIntelStore } from '../../../store/intelStore'
import { useSystemStore } from '../../../store/systemStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Eye, TrendingUp, AlertTriangle, Radar, Activity, Target, Search, Bell,
  Shield, MessageCircle, FileText, Zap, Filter, ArrowUp, ArrowDown, Globe
} from 'lucide-react'
import { useState } from 'react'

function OSINTStream() {
  const alerts = useIntelStore(s => s.alerts) || []
  const recent = alerts.slice(0, 8)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Eye className="w-4 h-4 text-cyan-400" />
        OSINT Stream
      </h3>
      <div className="space-y-2 max-h-80 overflow-y-auto">
        {recent.map(alert => (
          <div key={alert.id} className={`p-3 rounded-lg ${
            alert.type === 'critical' ? 'bg-red-500/10 border border-red-500/20' :
            alert.type === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/20' :
            'bg-white/5'
          }`}>
            <div className="flex items-center justify-between">
              <p className="text-white text-sm">{alert.title}</p>
              <span className={`text-xs px-2 py-0.5 rounded ${
                alert.type === 'critical' ? 'bg-red-500/20 text-red-400' :
                alert.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-white/10 text-gray-400'
              }`}>
                {alert.type}
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-1">{alert.message}</p>
          </div>
        ))}
        {recent.length === 0 && (
          <p className="text-gray-500 text-center py-4">No alerts</p>
        )}
      </div>
    </div>
  )
}

function RegionalSentiment() {
  const sentiment = useIntelStore(s => s.sentiment) || {}
  const breakdown = sentiment?.breakdown || []

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Radar className="w-4 h-4 text-cyan-400" />
        Regional Sentiment
      </h3>
      <div className="space-y-4">
        {breakdown.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">{item.region}</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${
                  item.trend === 'up' ? 'bg-emerald-400' :
                  item.trend === 'down' ? 'bg-red-400' : 'bg-yellow-400'
                }`} style={{ width: `${item.score}%` }} />
              </div>
              <span className="text-white text-sm w-8">{item.score}</span>
              {item.trend === 'up' ? <ArrowUp className="w-3 h-3 text-emerald-400" /> :
               item.trend === 'down' ? <ArrowDown className="w-3 h-3 text-red-400" /> : null}
            </div>
          </div>
        ))}
        {breakdown.length === 0 && (
          <div className="grid grid-cols-5 gap-2">
            {['SW', 'NC', 'SE', 'NE', 'SS'].map((r, i) => (
              <div key={r} className="text-center p-2 rounded bg-white/5">
                <p className="text-gray-400 text-xs">{r}</p>
                <p className="text-white font-bold">{60 + i * 8}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function AnomalyDetector() {
  const alerts = useIntelStore(s => s.alerts) || []
  const critical = alerts.filter(a => a.type === 'critical' && !a.read)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-red-400" />
        Anomaly Detector
      </h3>
      <div className="text-center p-6">
        <div className={`text-5xl font-bold ${critical.length > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
          {critical.length}
        </div>
        <p className="text-gray-400 text-sm mt-2">Critical anomalies detected</p>
        {critical.length > 0 && (
          <button className="mt-4 px-4 py-2 bg-red-500/20 text-red-400 text-sm rounded-lg hover:bg-red-500/30">
            View Details
          </button>
        )}
      </div>
    </div>
  )
}

function ThreatBoard() {
  const threats = [
    { id: 1, title: 'Funding Shortage Risk', region: 'North East', severity: 'critical' },
    { id: 2, title: 'Volunteer Exodus', region: 'South West', severity: 'high' },
    { id: 3, title: 'Partner Compliance Gap', region: 'Multiple', severity: 'medium' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-red-400" />
        Threat Board
      </h3>
      <div className="space-y-3">
        {threats.map(t => (
          <div key={t.id} className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="flex justify-between">
              <p className="text-white text-sm">{t.title}</p>
              <span className={`text-xs px-2 py-0.5 rounded ${
                t.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                t.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {t.severity}
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-1">{t.region}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function NarrativeMonitor() {
  const sentiment = useIntelStore(s => s.sentiment) || {}
  const overall = sentiment?.overall || 72

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        Narrative Monitor
      </h3>
      <div className="text-center p-6">
        <div className="text-5xl font-bold text-emerald-400">{overall}</div>
        <p className="text-gray-400 text-sm mt-2">Overall sentiment score</p>
        <div className="mt-4 flex justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-emerald-400"></div>
            Positive
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-gray-400"></div>
            Neutral
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-red-400"></div>
            Negative
          </div>
        </div>
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <Search className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
        <span className="text-white text-xs">Scan</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <Activity className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
        <span className="text-white text-xs">Monitor</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <AlertTriangle className="w-5 h-5 text-red-400 mx-auto mb-1" />
        <span className="text-white text-xs">Alerts</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <FileText className="w-5 h-5 text-blue-400 mx-auto mb-1" />
        <span className="text-white text-xs">Brief</span>
      </button>
    </div>
  )
}

export default function SignalOS() {
  const { user } = useAuthStore()

  return (
    <CityBoyOSShell role="intelligence" title="Signal OS">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Intelligence Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Analyst'}</p>
      </div>

      <QuickActions />

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <OSINTStream />
          <RegionalSentiment />
        </div>
        <div className="space-y-6">
          <AnomalyDetector />
          <NarrativeMonitor />
          <ThreatBoard />
        </div>
      </div>
    </CityBoyOSShell>
  )
}