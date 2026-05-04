import { create } from 'zustand'
import { useMissionStore } from './missionStore'
import { useSystemStore } from './systemStore'

const initialMembers = [
  { id: 1, name: 'Amina Yusuf', role: 'Chapter Lead', chapter: 'Lagos Central', score: 12400, hours: 840, status: 'active' },
  { id: 2, name: 'Tunde Adebayo', role: 'Volunteer', chapter: 'Abuja Metro', score: 8200, hours: 520, status: 'active' },
  { id: 3, name: 'Chidi Okonkwo', role: 'Organizer', chapter: 'Lagos Central', score: 7850, hours: 412, status: 'active' },
  { id: 4, name: 'Fatima Bello', role: 'Volunteer', chapter: 'Kano North', score: 6100, hours: 380, status: 'active' },
  { id: 5, name: 'Emeka Obi', role: 'Chapter Lead', chapter: 'Enugu East', score: 5900, hours: 290, status: 'active' },
]

const initialChapters = [
  { id: 1, name: 'Lagos Central', state: 'Lagos', members: 2400, leads: ['Amina', 'Chidi'], status: 'active' },
  { id: 2, name: 'Abuja Metro', state: 'FCT', members: 1850, leads: ['Tunde', 'Bola'], status: 'active' },
  { id: 3, name: 'Kano North', state: 'Kano', members: 1200, leads: ['Yusuf'], status: 'active' },
  { id: 4, name: 'Enugu East', state: 'Enugu', members: 980, leads: ['Adaora'], status: 'active' },
  { id: 5, name: 'Port Harcourt', state: 'Rivers', members: 720, leads: ['Ebuka'], status: 'active' },
  { id: 6, name: 'Ibadan South', state: 'Oyo', members: 650, leads: ['Bukky'], status: 'active' },
]

const initialPartners = [
  { id: 1, name: 'Shell Petroleum', type: 'Corporate', status: 'approved', contribution: '₦500M' },
  { id: 2, name: 'MTN Foundation', type: 'Corporate', status: 'approved', contribution: '₦350M' },
  { id: 3, name: 'Nigerian Breweries', type: 'Corporate', status: 'pending', contribution: '₦200M' },
]

const initialDonors = [
  { id: 1, name: 'Dr. Aliko Dangote', level: 'Platinum', totalDonated: '₦2.5B', lastDonation: '₦500M' },
  { id: 2, name: 'OTG Ventures', level: 'Gold', totalDonated: '₦800M', lastDonation: '₦200M' },
  { id: 3, name: 'Anonymous Trust', level: 'Silver', totalDonated: '₦150M', lastDonation: '₦50M' },
]

export const usePeopleStore = create((set, get) => ({
  members: initialMembers,
  volunteers: initialMembers.filter(m => m.role === 'Volunteer'),
  chapters: initialChapters,
  partners: initialPartners,
  donors: initialDonors,
  leaderboard: [...initialMembers].sort((a, b) => b.score - a.score),
  conversionRate: 24,

  assignVolunteer: (volunteerId, chapterId) => {
    const volunteer = get().volunteers.find(v => v.id === volunteerId)
    const chapter = get().chapters.find(c => c.id === chapterId)
    if (!volunteer || !chapter) return
    
    set(state => ({
      volunteers: state.volunteers.map(v => 
        v.id === volunteerId ? { ...v, chapter: chapter.name } : v
      )
    }))
    
    const missionStore = useMissionStore.getState()
    if (missionStore) {
      missionStore.assignTeam(null, [volunteerId])
    }
    
    const systemStore = useSystemStore.getState()
    if (systemStore) {
      systemStore.notify('info', volunteer.name + ' assigned to ' + chapter.name)
      systemStore.audit('VOLUNTEER_ASSIGNED', 'Chapter Lead', volunteer.name + ' assigned to ' + chapter.name)
      systemStore.pushActivity('volunteer_assigned', 'Chapter Lead', chapter.name)
    }
  },

  createChapter: (chapterData) => {
    const newChapter = { id: Date.now(), ...chapterData, members: 0, status: 'active' }
    set(state => ({ chapters: [...state.chapters, newChapter] }))
  },

  approvePartner: (partnerId) => {
    set(state => ({
      partners: state.partners.map(p => p.id === partnerId ? { ...p, status: 'approved' } : p)
    }))
  },

  registerDonor: (donorData) => {
    const newDonor = { id: Date.now(), ...donorData, status: 'active' }
    set(state => ({ donors: [...state.donors, newDonor] }))
  },

  updateScore: (memberId, points) => {
    set(state => ({
      members: state.members.map(m => 
        m.id === memberId ? { ...m, score: m.score + points } : m
      ),
      leaderboard: state.members
        .map(m => m.id === memberId ? { ...m, score: m.score + points } : m)
        .sort((a, b) => b.score - a.score)
    }))
  },

  getChapterStats: () => {
    const chapters = get().chapters
    return {
      total: chapters.length,
      active: chapters.filter(c => c.status === 'active').length,
      totalMembers: chapters.reduce((sum, c) => sum + c.members, 0)
    }
  },

  getLeaderboard: (limit = 10) => {
    return get().leaderboard.slice(0, limit)
  },

  setVolunteers: (volunteers) => set({ volunteers }),
  setChapters: (chapters) => set({ chapters }),
  setMembers: (members) => set({ members }),
  setDonors: (donors) => set({ donors }),
  setPartners: (partners) => set({ partners }),
  setLeaderboard: (leaderboard) => set({ leaderboard }),
}))
