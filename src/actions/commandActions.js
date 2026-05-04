import { useSystemStore } from '../store/systemStore'
import { useMissionStore } from '../store/missionStore'
import { useCapitalStore } from '../store/capitalStore'
import { usePeopleStore } from '../store/peopleStore'
import { useIntelStore } from '../store/intelStore'

function getSystem() {
  const system = useSystemStore.getState()
  return {
    notify: system?.notify || (() => {}),
    audit: system?.audit || (() => {}),
    pushActivity: system?.pushActivity || (() => {}),
    logCommand: system?.logCommand || (() => {}),
  }
}

export function createMission(missionData) {
  const { notify, audit, pushActivity } = getSystem()
  const missions = useMissionStore.getState()
  
  if (missions?.createMission) {
    const missionId = Date.now()
    missions.createMission(missionData)
    
    notify('info', 'Mission created: ' + missionData.title)
    audit('MISSION_CREATED', 'Command', missionData.title)
    pushActivity('mission_created', 'Command', missionData.title)
  }
}

export function mobilizeTeam(missionId, volunteerIds) {
  const missionStore = useMissionStore.getState()
  const { notify, audit, pushActivity } = getSystem()
  
  if (missionStore?.assignTeam) {
    missionStore.assignTeam(missionId, volunteerIds)
    
    notify('info', 'Team mobilized for mission')
    audit('TEAM_MOBILIZED', 'Operations', `${volunteerIds.length} volunteers`)
    pushActivity('team_mobilized', 'Operations', 'Mission')
  }
}

export function initiatePartnership(partnershipData) {
  const peopleStore = usePeopleStore.getState()
  const { notify, audit, pushActivity } = getSystem()
  
  if (peopleStore?.createChapter) {
    peopleStore.createChapter(partnershipData)
    
    notify('success', 'Partnership initiated: ' + partnershipData.name)
    audit('PARTNERSHIP_CREATED', 'Partner', partnershipData.name)
    pushActivity('partnership_created', 'Partner', partnershipData.name)
  }
}

export function broadcastMessage(message, recipients) {
  const { notify, audit, pushActivity } = getSystem()
  
  notify('info', 'Broadcast sent: ' + message)
  audit('BROADCAST_SENT', 'Media', message)
  pushActivity('broadcast_sent', 'Media', message)
}

export function exportReport(reportType) {
  const { notify, audit, pushActivity } = getSystem()
  
  notify('info', 'Report exported: ' + reportType)
  audit('REPORT_EXPORTED', 'Command', reportType)
  pushActivity('report_exported', 'Command', reportType)
}

export function approveFunding(allocationId, missionId) {
  const capitalStore = useCapitalStore.getState()
  const missionStore = useMissionStore.getState()
  const { notify, audit, pushActivity } = getSystem()
  
  if (capitalStore?.approveFunding) {
    const mission = missionStore?.missions?.find(m => m.id === missionId)
    
    capitalStore.approveFunding(allocationId)
    
    if (missionStore?.fundMission && mission) {
      missionStore.fundMission(missionId, '₦0')
    }
    
    notify('success', 'Funding approved')
    audit('FUNDING_APPROVED', 'Financial', allocationId)
    pushActivity('funding_approved', 'Financial', allocationId)
  }
}

export function escalateAlert(alertData, severity) {
  const intelStore = useIntelStore.getState()
  const { notify, audit, pushActivity } = getSystem()
  
  if (intelStore?.raiseAlert) {
    intelStore.raiseAlert(severity || 'critical', alertData.title, alertData.message)
    
    notify('warning', 'Alert escalated: ' + alertData.title)
    audit('ALERT_ESCALATED', 'Intelligence', alertData.title)
    pushActivity('alert_escalated', 'Intelligence', alertData.title)
  }
}

export const COMMAND_ACTIONS = {
  createMission,
  mobilizeTeam,
  initiatePartnership,
  broadcastMessage,
  exportReport,
  approveFunding,
  escalateAlert,
}