import { create } from 'zustand'

const initialMissions = [
  { 
    id: 1, 
    title: 'Kaduna Clean Water Initiative', 
    category: 'Infrastructure',
    status: 'active',
    funding: '₦450M',
    funded: '₦380M',
    volunteers: 124,
    states: ['Kaduna'],
    progress: 78,
    startDate: '2025-10-01',
    endDate: '2026-06-30'
  },
  { 
    id: 2, 
    title: 'Lagos Digital Learning Hubs', 
    category: 'Education',
    status: 'active',
    funding: '₦280M',
    funded: '₦180M',
    volunteers: 86,
    states: ['Lagos'],
    progress: 52,
    startDate: '2025-11-15',
    endDate: '2026-08-30'
  },
  { 
    id: 3, 
    title: 'Northern Agriculture Revival', 
    category: 'Agriculture',
    status: 'active',
    funding: '₦620M',
    funded: '₦420M',
    volunteers: 210,
    states: ['Kano', 'Katsina', 'Borno'],
    progress: 34,
    startDate: '2025-12-01',
    endDate: '2026-12-31'
  },
]

const initialProjects = [
  { id: 1, name: 'Kano-Kaduna Highway Section A', budget: '₦2.4B', status: 'in-progress', completion: 45 },
  { id: 2, name: 'Abuja Metro Solar Grid', budget: '₦890M', status: 'in-progress', completion: 72 },
  { id: 3, name: 'Port Harcourt General Hospital Expansion', budget: '₦1.2B', status: 'planning', completion: 12 },
]

const initialQueue = [
  { id: 1, title: 'Rural Health Centers - Phase 2', priority: 'high', daysInQueue: 45 },
  { id: 2, title: 'Youth Skills Training - Lagos', priority: 'medium', daysInQueue: 32 },
  { id: 3, title: 'Market Electrification - North', priority: 'high', daysInQueue: 28 },
]

export const useMissionStore = create((set, get) => ({
  missions: initialMissions,
  projects: initialProjects,
  queue: initialQueue,
  assignments: [],

  createMission: (missionData) => {
    const newMission = { 
      id: Date.now(), 
      status: 'planning',
      progress: 0,
      volunteers: 0,
      funded: '₦0',
      ...missionData 
    }
    set(state => ({ missions: [...state.missions, newMission] }))
  },

  fundMission: (missionId, amount) => {
    set(state => ({
      missions: state.missions.map(m => 
        m.id === missionId 
          ? { ...m, funded: m.funded + amount, funding: m.funding }
          : m
      )
    }))
  },

  assignTeam: (missionId, volunteerIds) => {
    set(state => ({
      missions: state.missions.map(m =>
        m.id === missionId
          ? { ...m, volunteers: m.volunteers + volunteerIds.length }
          : m
      ),
      assignments: [...state.assignments, { missionId, volunteerIds, date: new Date().toISOString() }]
    }))
  },

  updateProgress: (missionId, progress) => {
    set(state => ({
      missions: state.missions.map(m =>
        m.id === missionId ? { ...m, progress: Math.min(100, progress) } : m
      )
    }))
  },

  completeMission: (missionId) => {
    set(state => ({
      missions: state.missions.map(m =>
        m.id === missionId ? { ...m, status: 'completed', progress: 100 } : m
      )
    }))
  },

  addToQueue: (project) => {
    set(state => ({ queue: [...state.queue, { id: Date.now(), ...project, daysInQueue: 0 }] }))
  },

  getMissionStats: () => {
    const missions = get().missions
    return {
      total: missions.length,
      active: missions.filter(m => m.status === 'active').length,
      completed: missions.filter(m => m.status === 'completed').length,
      totalVolunteers: missions.reduce((sum, m) => sum + m.volunteers, 0)
    }
  },

  getActiveMissions: () => get().missions.filter(m => m.status === 'active'),
  getQueue: () => get().queue,

  setMissions: (missions) => set({ missions }),
  setProjects: (projects) => set({ projects }),
  setQueue: (queue) => set({ queue }),
}))
