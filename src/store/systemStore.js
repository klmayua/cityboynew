import { create } from 'zustand'

const initialNotifications = [
  { id: 1, type: 'success', message: 'Kaduna Water Phase 1 completed', timestamp: '2026-04-20T10:00:00', read: false },
  { id: 2, type: 'info', message: 'New volunteer joined Lagos Chapter', timestamp: '2026-04-19T15:30:00', read: false },
  { id: 3, type: 'warning', message: 'Funding deadline approaching - Northern Agriculture', timestamp: '2026-04-18T09:00:00', read: true },
]

const initialAuditLogs = [
  { id: 1, action: 'MISSION_CREATED', user: 'Admin', details: 'Rural Health Initiative launched', timestamp: '2026-04-20T11:30:00' },
  { id: 2, action: 'FUNDING_APPROVED', user: 'Executive', details: '₦450M approved for Kaduna Water', timestamp: '2026-04-19T14:20:00' },
  { id: 3, action: 'PARTNER_ADDED', user: 'Admin', details: 'Shell Petroleum onboarding complete', timestamp: '2026-04-18T16:45:00' },
  { id: 4, action: 'VOLUNTEER_ASSIGNED', user: 'Chapter Lead', details: '50 volunteers assigned to Lagos Digital Hubs', timestamp: '2026-04-17T10:15:00' },
]

const initialActivityFeed = [
  { id: 1, action: 'donation_received', actor: 'Shell Petroleum', amount: '₦120M', timestamp: '2026-04-20T14:30:00' },
  { id: 2, action: 'mission_completed', actor: 'Kaduna Chapter', target: 'Water Project Phase 1', timestamp: '2026-04-20T10:00:00' },
  { id: 3, action: 'volunteer_joined', actor: 'Amina Yusuf', chapter: 'Lagos Central', timestamp: '2026-04-19T16:45:00' },
  { id: 4, action: 'partner_approved', actor: 'MTN Foundation', timestamp: '2026-04-19T11:20:00' },
]

export const useSystemStore = create((set, get) => ({
  notifications: initialNotifications,
  auditLogs: initialAuditLogs,
  commandHistory: [],
  activityFeed: initialActivityFeed,

  notify: (type, message) => {
    const newNotif = {
      id: Date.now(),
      type,
      message,
      timestamp: new Date().toISOString(),
      read: false
    }
    set(state => ({ 
      notifications: [newNotif, ...state.notifications],
      activityFeed: [
        { id: Date.now(), action: 'notification', actor: 'System', target: message, timestamp: newNotif.timestamp },
        ...state.activityFeed
      ]
    }))
  },

  audit: (action, user, details) => {
    const newLog = {
      id: Date.now(),
      action,
      user,
      details,
      timestamp: new Date().toISOString()
    }
    set(state => ({ auditLogs: [newLog, ...state.auditLogs] }))
  },

  logCommand: (command) => {
    const log = {
      id: Date.now(),
      command,
      timestamp: new Date().toISOString()
    }
    set(state => ({ commandHistory: [...state.commandHistory, log] }))
  },

  pushActivity: (action, actor, target, amount = null) => {
    const activity = {
      id: Date.now(),
      action,
      actor,
      target,
      amount,
      timestamp: new Date().toISOString()
    }
    set(state => ({ activityFeed: [activity, ...state.activityFeed] }))
  },

  markNotificationRead: (notifId) => {
    set(state => ({
      notifications: state.notifications.map(n => 
        n.id === notifId ? { ...n, read: true } : n
      )
    }))
  },

  clearNotifications: () => {
    set(state => ({ notifications: [] }))
  },

  getUnreadNotifications: () => get().notifications.filter(n => !n.read),
  getRecentActivity: (limit = 10) => get().activityFeed.slice(0, limit),
  getAuditLogs: (limit = 20) => get().auditLogs.slice(0, limit),

  setNotifications: (notifications) => set({ notifications }),
  setAuditLogs: (auditLogs) => set({ auditLogs }),
  setActivityFeed: (activityFeed) => set({ activityFeed }),
  setCommandHistory: (commandHistory) => set({ commandHistory }),
}))
