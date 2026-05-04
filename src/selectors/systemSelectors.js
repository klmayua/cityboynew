import { useSystemStore } from '../store/systemStore'

export const getUnreadNotifications = () => {
  return useSystemStore.getState().notifications.filter(n => !n.read)
}

export const getRecentActivity = (limit = 10) => {
  return useSystemStore.getState().activityFeed.slice(0, limit)
}

export const useNotifications = () => useSystemStore(s => s.notifications)
export const useUnreadNotifications = () => useSystemStore(s => s.notifications.filter(n => !n.read))
export const useNotificationCount = () => useSystemStore(s => s.notifications.filter(n => !n.read).length)
export const useActivityFeed = () => useSystemStore(s => s.activityFeed)
export const useRecentActivity = (limit = 10) => useSystemStore(s => s.activityFeed.slice(0, limit))
export const useAuditLogs = () => useSystemStore(s => s.auditLogs)