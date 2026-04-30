import { create } from 'zustand'

export const useExecutiveStore = create((set)=>({
  briefings: [],
  notifications: [],
  meetings: [],
  pressMomentum: 42,
  chapterHeat: [
    { name:'Lagos', score:88 },
    { name:'Abuja', score:76 },
    { name:'Port Harcourt', score:61 },
    { name:'Kano', score:57 },
    { name:'Enugu', score:49 }
  ],

  addBriefing:(brief)=>set(state=>({
    briefings:[brief,...state.briefings]
  })),

  addNotification:(note)=>set(state=>({
    notifications:[note,...state.notifications]
  })),

  addMeeting:(meeting)=>set(state=>({
    meetings:[meeting,...state.meetings]
  }))
}))