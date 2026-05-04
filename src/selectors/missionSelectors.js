import { useMissionStore } from '../store/missionStore'

export const getActiveMissions = () => {
  return useMissionStore.getState().missions.filter(m => m.status === 'active')
}

export const getCompletedMissions = () => {
  return useMissionStore.getState().missions.filter(m => m.status === 'completed')
}

export const getMissionCompletionRate = () => {
  const missions = useMissionStore.getState().missions || []
  const total = missions.length
  const completed = missions.filter(m => m.status === 'completed').length
  return total > 0 ? Math.round((completed / total) * 100) : 0
}

export const useActiveMissions = () => useMissionStore(s => s.missions.filter(m => m.status === 'active'))
export const useCompletedMissions = () => useMissionStore(s => s.missions.filter(m => m.status === 'completed'))
export const useMissionCount = () => useMissionStore(s => s.missions.length)
export const useActiveMissionCount = () => useMissionStore(s => s.missions.filter(m => m.status === 'active').length)