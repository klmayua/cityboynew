import { create } from 'zustand'

const initialAlerts = [
  { id: 1, type: 'critical', title: 'Funding Gap Detected', message: 'Northern Agriculture initiative requires additional ₦200M', timestamp: '2026-04-20T14:30:00', read: false },
  { id: 2, type: 'warning', title: 'Volunteer Shortage', message: 'Kano chapter needs 50 more volunteers', timestamp: '2026-04-19T09:15:00', read: false },
  { id: 3, type: 'info', title: 'Milestone Reached', message: 'Kaduna Water - 75% complete', timestamp: '2026-04-18T16:45:00', read: true },
]

const initialSentiment = {
  overall: 78,
  trend: 'up',
  breakdown: [
    { region: 'South West', score: 82, trend: 'up' },
    { region: 'North Central', score: 76, trend: 'stable' },
    { region: 'South East', score: 79, trend: 'up' },
    { region: 'North East', score: 71, trend: 'up' },
    { region: 'South South', score: 74, trend: 'stable' },
  ]
}

const initialHeatmap = [
  { region: 'Lagos', intensity: 95, activity: 1240 },
  { region: 'Abuja', intensity: 88, activity: 890 },
  { region: 'Kano', intensity: 72, activity: 540 },
  { region: 'Port Harcourt', intensity: 65, activity: 320 },
  { region: 'Ibadan', intensity: 58, activity: 210 },
]

const initialTrends = [
  { topic: 'Infrastructure Development', volume: 12400, sentiment: 82 },
  { topic: 'Youth Employment', volume: 9800, sentiment: 76 },
  { topic: 'Healthcare Access', volume: 7200, sentiment: 84 },
  { topic: 'Agricultural Revival', volume: 5600, sentiment: 79 },
  { topic: 'Digital Education', volume: 4300, sentiment: 88 },
]

const initialForecasts = [
  { metric: 'Volunteer Growth', current: '18,420', projection: '25,000', confidence: 85 },
  { metric: 'Project Completion', current: '78%', projection: '92%', confidence: 72 },
  { metric: 'Donor Retention', current: '82%', projection: '88%', confidence: 78 },
]

export const useIntelStore = create((set, get) => ({
  alerts: initialAlerts,
  sentiment: initialSentiment,
  heatmap: initialHeatmap,
  trends: initialTrends,
  forecasts: initialForecasts,

  raiseAlert: (type, title, message) => {
    const newAlert = {
      id: Date.now(),
      type,
      title,
      message,
      timestamp: new Date().toISOString(),
      read: false
    }
    set(state => ({ alerts: [newAlert, ...state.alerts] }))
  },

  markAlertRead: (alertId) => {
    set(state => ({
      alerts: state.alerts.map(a => a.id === alertId ? { ...a, read: true } : a)
    }))
  },

  markAllRead: () => {
    set(state => ({
      alerts: state.alerts.map(a => ({ ...a, read: true }))
    }))
  },

  updateSentiment: (region, score) => {
    set(state => ({
      sentiment: {
        ...state.sentiment,
        breakdown: state.sentiment.breakdown.map(b => 
          b.region === region ? { ...b, score } : b
        ),
        overall: Math.round(
          state.sentiment.breakdown.reduce((sum, b) => 
            b.region === region ? sum + score : sum + b.score, 0
          ) / state.sentiment.breakdown.length
        )
      }
    }))
  },

  generateForecast: (metric, projection, confidence) => {
    set(state => ({
      forecasts: state.forecasts.map(f => 
        f.metric === metric ? { ...f, projection, confidence } : f
      )
    }))
  },

  getUnreadCount: () => get().alerts.filter(a => !a.read).length,
  getCriticalAlerts: () => get().alerts.filter(a => a.type === 'critical'),
  getHeatmapSorted: () => [...get().heatmap].sort((a, b) => b.intensity - a.intensity),

  setAlerts: (alerts) => set({ alerts }),
  setSentiment: (sentiment) => set({ sentiment }),
  setHeatmap: (heatmap) => set({ heatmap }),
  setTrends: (trends) => set({ trends }),
  setForecasts: (forecasts) => set({ forecasts }),
}))
