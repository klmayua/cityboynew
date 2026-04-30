import { create } from 'zustand'

export const useCommandMemory = create((set, get) => ({
  workspace: 'national',
  notifications: [
    { id: 1, type: 'success', title: 'Funding milestone reached', time: '2m ago', read: false },
    { id: 2, type: 'warning', title: 'Chapter Lagos reporting delay', time: '11m ago', read: false },
    { id: 3, type: 'info', title: 'New partner application received', time: '27m ago', read: true },
  ],
  recentActions: [
    { id: 1, type: 'workspace', title: 'Switched to War Room', time: '1h ago' },
    { id: 2, type: 'search', title: 'Searched: Abuja projects', time: '2h ago' },
    { id: 3, type: 'execute', title: 'Exported Q1 report', time: '3h ago' },
    { id: 4, type: 'action', title: 'New project created', time: '4h ago' },
    { id: 5, type: 'view', title: 'Viewed partner metrics', time: '5h ago' },
  ],
  pinnedProjects: [1, 3],
  recommendationClicks: [],
  commandHistory: ['Go to Overview', 'Go to War Room', 'Export Report'],
  recentSearches: ['Abuja', 'Funding', 'Partners'],
  unreadCount: 2,

  setWorkspace: (workspace) => set({ workspace }),

  markNotificationRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ),
    unreadCount: Math.max(0, state.unreadCount - 1)
  })),

  pushNotification: (notification) => set((state) => ({
    notifications: [{ ...notification, id: Date.now(), read: false, time: 'Just now' }, ...state.notifications].slice(0, 50),
    unreadCount: state.unreadCount + 1
  })),

  logAction: (action) => set((state) => ({
    recentActions: [{ ...action, id: Date.now(), time: 'Just now' }, ...state.recentActions].slice(0, 100),
    commandHistory: [action.title, ...state.commandHistory.filter(h => h !== action.title)].slice(0, 50)
  })),

  addSearch: (query) => set((state) => ({
    recentSearches: [
      query,
      ...state.recentSearches.filter(q => q !== query)
    ].slice(0, 10)
  })),

  pinProject: (id) => set((state) => ({
    pinnedProjects: [...new Set([...state.pinnedProjects, id])]
  })),

  unpinProject: (id) => set((state) => ({
    pinnedProjects: state.pinnedProjects.filter(p => p !== id)
  })),

  clickRecommendation: (id) => set((state) => ({
    recommendationClicks: [...state.recommendationClicks, id]
  })),

  clearNotifications: () => set({ notifications: [], unreadCount: 0 })
}))