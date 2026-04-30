import { create } from 'zustand'

export const useOpsStore = create((set)=>({
  missions: [
    { id: 1, title: 'North Central Mobilization Wave', status: 'active', priority: 'high', progress: 73, volunteers: 420, state: 'Kogi', commander: 'Col. Adebayo', due: '2026-05-01' },
    { id: 2, title: 'Delta State Chapter Infiltration', status: 'active', priority: 'high', progress: 58, volunteers: 280, state: 'Delta', commander: 'Lt. Col. Okonkwo', due: '2026-05-03' },
    { id: 3, title: 'South West Voter Registration Drive', status: 'active', priority: 'medium', progress: 91, volunteers: 820, state: 'Ogun', commander: 'Maj. Adeyemi', due: '2026-04-30' },
    { id: 4, title: 'Abuja Security Advisory Council', status: 'active', priority: 'critical', progress: 42, volunteers: 45, state: 'Abuja', commander: 'Gen. Ibrahim', due: '2026-05-05' },
    { id: 5, title: 'Kano Agricultural Initiative', status: 'active', priority: 'medium', progress: 67, volunteers: 340, state: 'Kano', commander: 'Maj. Sani', due: '2026-05-02' },
    { id: 6, title: 'Rivers Oil Community Outreach', status: 'active', priority: 'high', progress: 33, volunteers: 120, state: 'Rivers', commander: 'Lt. Col. Wike', due: '2026-05-08' },
    { id: 7, title: 'Lagos Youth Skills Program', status: 'active', priority: 'low', progress: 88, volunteers: 640, state: 'Lagos', commander: 'Cmg. Tinubu', due: '2026-04-28' },
    { id: 8, title: 'Enugu Educational Reform', status: 'pending', priority: 'medium', progress: 0, volunteers: 180, state: 'Enugu', commander: 'Maj. Obi', due: '2026-05-10' },
  ],
  deployments: [
    { id: 1, unit: 'Alpha Team', location: 'Kogi', status: 'deployed', eta: '2h' },
    { id: 2, unit: 'Bravo Team', location: 'Delta', status: 'deployed', eta: '4h' },
    { id: 3, unit: 'Charlie Team', location: 'Abuja', status: 'standby', eta: '-' },
    { id: 4, unit: 'Delta Team', location: 'Kano', status: 'deployed', eta: '1h' },
    { id: 5, unit: 'Echo Team', location: 'Rivers', status: 'returning', eta: '30m' },
  ],
  volunteers: 42890,
  activeUnits: 54,
  completionRate: 93,
  responseTime: '18 mins',
  
  addMission:(mission)=>set(state=>({
    missions:[mission,...state.missions]
  })),

  deploy:(unit)=>set(state=>({
    deployments:[unit,...state.deployments]
  }))
}))