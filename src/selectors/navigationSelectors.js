import { useCapitalStore } from '../store/capitalStore'
import { useMissionStore } from '../store/missionStore'
import { usePeopleStore } from '../store/peopleStore'
import { useIntelStore } from '../store/intelStore'
import { useSystemStore } from '../store/systemStore'

export const useNavBadgeCounts = () => ({
  allocations: useCapitalStore(s => s.allocations.filter(a => a.status === 'pending').length),
  missions: useMissionStore(s => s.missions.filter(m => m.status === 'active').length),
  volunteers: usePeopleStore(s => s.volunteers.length),
  alerts: useIntelStore(s => s.alerts.filter(a => !a.read).length),
  notifications: useSystemStore(s => s.notifications.filter(n => !n.read).length),
})

export const useCommandDockBadgeCounts = () => ({
  capital: useCapitalStore(s => s.allocations.filter(a => a.status === 'pending').length),
  operations: useMissionStore(s => s.missions.filter(m => m.status === 'active').length),
  citizens: usePeopleStore(s => s.volunteers.length),
  oracle: useIntelStore(s => s.alerts.filter(a => !a.read).length),
})