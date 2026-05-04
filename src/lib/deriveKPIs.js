import { useCapitalStore } from '../store/capitalStore'
import { useMissionStore } from '../store/missionStore'
import { usePeopleStore } from '../store/peopleStore'
import { useIntelStore } from '../store/intelStore'
import { useSystemStore } from '../store/systemStore'

function parseNaira(str) {
  if (!str) return 0
  const clean = str.replace(/₦/g, '').replace(/B/g, '').replace(/M/g, '')
  return parseFloat(clean) || 0
}

function deriveKPIs() {
  const capital = useCapitalStore.getState()
  const missions = useMissionStore.getState()
  const people = usePeopleStore.getState()
  const intel = useIntelStore.getState()
  const system = useSystemStore.getState()

  const treasury = capital?.treasury || {}
  const missionList = missions?.missions || []
  const volunteerList = people?.volunteers || []
  const alertList = intel?.alerts || []
  const notifList = system?.notifications || []
  const sentiment = intel?.sentiment?.overall || 0

  const totalVolunteers = volunteerList.length
  const activeVolunteers = volunteerList.filter(v => v.status === 'active').length

  const totalMissions = missionList.length
  const activeMissions = missionList.filter(m => m.status === 'active').length
  const completedMissions = missionList.filter(m => m.status === 'completed').length

  const treasuryTotal = treasury.total || '₦0'
  const treasuryCommitted = treasury.committed || '₦0'
  const treasuryDeployable = treasury.deployable || '₦0'

  const committed = parseNaira(treasuryCommitted)
  const deployable = parseNaira(treasuryDeployable)
  const total = parseNaira(treasuryTotal)
  const capitalVelocity = total > 0 ? Math.round((committed / total) * 100) : 0

  const unreadAlerts = alertList.filter(a => !a.read).length
  const unreadNotifications = notifList.filter(n => !n.read).length

  const operationalReadiness = Math.min(100, Math.round(
    (activeVolunteers * 0.3) +
    (activeMissions * 0.25) +
    ((100 - unreadAlerts) * 0.25) +
    (sentiment * 0.2)
  ))

  const missionSuccessRate = totalMissions > 0
    ? Math.round((completedMissions / totalMissions) * 100)
    : 0

  return {
    volunteerCount: totalVolunteers,
    activeVolunteerCount: activeVolunteers,
    missionCount: totalMissions,
    activeMissionCount: activeMissions,
    completedMissionCount: completedMissions,
    treasuryTotal,
    treasuryCommitted,
    treasuryDeployable,
    capitalVelocity,
    alertCount: unreadAlerts,
    unreadNotifications,
    sentimentScore: sentiment,
    operationalReadiness,
    missionSuccessRate,
  }
}

export { deriveKPIs }

export const KPI_DEFINITIONS = {
  volunteerCount: { label: 'Total Network', format: 'number' },
  activeVolunteerCount: { label: 'Active Volunteers', format: 'number' },
  missionCount: { label: 'Total Missions', format: 'number' },
  activeMissionCount: { label: 'Active Missions', format: 'number' },
  completedMissionCount: { label: 'Completed Missions', format: 'number' },
  treasuryTotal: { label: 'Total Treasury', format: 'currency' },
  treasuryCommitted: { label: 'Committed Capital', format: 'currency' },
  treasuryDeployable: { label: 'Deployable Capital', format: 'currency' },
  capitalVelocity: { label: 'Capital Velocity', format: 'percentage' },
  alertCount: { label: 'Pending Alerts', format: 'number' },
  unreadNotifications: { label: 'Unread Notifications', format: 'number' },
  sentimentScore: { label: 'Sentiment Score', format: 'percentage' },
  operationalReadiness: { label: 'Operational Readiness', format: 'percentage' },
  missionSuccessRate: { label: 'Mission Success Rate', format: 'percentage' },
}