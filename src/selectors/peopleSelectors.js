import { usePeopleStore } from '../store/peopleStore'

export const getActiveVolunteers = () => {
  return usePeopleStore.getState().volunteers.filter(v => v.status === 'active')
}

export const getChapterCount = () => {
  return usePeopleStore.getState().chapters.length
}

export const useActiveVolunteers = () => usePeopleStore(s => s.volunteers.filter(v => v.status === 'active'))
export const useVolunteerCount = () => usePeopleStore(s => s.volunteers.length)
export const useChapterCount = () => usePeopleStore(s => s.chapters.length)
export const useLeaderboard = () => usePeopleStore(s => s.leaderboard)