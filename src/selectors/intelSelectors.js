import { useIntelStore } from '../store/intelStore'

export const getUnreadAlerts = () => {
  return useIntelStore.getState().alerts.filter(a => !a.read)
}

export const getSentimentScore = () => {
  return useIntelStore.getState().sentiment.overall
}

export const useAlerts = () => useIntelStore(s => s.alerts)
export const useUnreadAlerts = () => useIntelStore(s => s.alerts.filter(a => !a.read))
export const useAlertCount = () => useIntelStore(s => s.alerts.filter(a => !a.read).length)
export const useSentimentScore = () => useIntelStore(s => s.sentiment.overall)
export const useSentimentBreakdown = () => useIntelStore(s => s.sentiment.breakdown)
export const useForecasts = () => useIntelStore(s => s.forecasts)
export const useTrends = () => useIntelStore(s => s.trends)