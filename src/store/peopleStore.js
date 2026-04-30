import { create } from 'zustand'

export const usePeopleStore = create((set)=>({
  totalCitizens: 548230,
  verifiedMembers: 214820,
  volunteers: 42890,
  ambassadors: 1180,
  chapters: 418,
  conversionRate: 29,
  retentionRate: 83,
  growthRate: 11,
  referrerMultiplier: 2.7,

  topChapters: [
    { name: 'Lagos Central', members: 48200, growth: 12, rank: 1 },
    { name: 'Abuja Metro', members: 35400, growth: 9, rank: 2 },
    { name: 'Kano North', members: 32100, growth: 14, rank: 3 },
    { name: 'Port Harcourt', members: 24800, growth: 8, rank: 4 },
    { name: 'Ibadan South', members: 22100, growth: 11, rank: 5 },
    { name: 'Enugu East', members: 19200, growth: 7, rank: 6 },
    { name: 'Benin City', members: 16800, growth: 6, rank: 7 },
    { name: 'Abuja North', members: 15200, growth: 10, rank: 8 },
  ],

  referrals: [
    { id: 1, referrer: 'Chidi A.', newMember: 'Emeka O.', state: 'Lagos', date: '2026-04-28', tier: 'gold' },
    { id: 2, referrer: 'Amina B.', newMember: 'Fatima K.', state: 'Kano', date: '2026-04-28', tier: 'silver' },
    { id: 3, referrer: 'Tunde S.', newMember: 'Segun A.', state: 'Abuja', date: '2026-04-27', tier: 'gold' },
    { id: 4, referrer: 'Grace M.', newMember: 'Maryanne O.', state: 'Rivers', date: '2026-04-27', tier: 'bronze' },
    { id: 5, referrer: 'Mike R.', newMember: 'Chinedu E.', state: 'Delta', date: '2026-04-26', tier: 'silver' },
    { id: 6, referrer: 'Sarah J.', newMember: 'Funke B.', state: 'Ogun', date: '2026-04-26', tier: 'gold' },
    { id: 7, referrer: 'David L.', newMember: 'Paul O.', state: 'Enugu', date: '2026-04-25', tier: 'bronze' },
    { id: 8, referrer: 'Anna K.', newMember: 'Grace T.', state: 'Plateau', date: '2026-04-25', tier: 'silver' },
  ],
  
  pipelines: [
    { stage: 'Awareness', count: 142800, rate: 26 },
    { stage: 'Interest', count: 42800, rate: 8 },
    { stage: 'Consideration', count: 18400, rate: 3.4 },
    { stage: 'Onboarding', count: 8200, rate: 1.5 },
    { stage: 'Verified', count: 4280, rate: 0.8 },
  ],

  demographics: {
    youth18to25: 42,
    youth26to35: 31,
    middle36to45: 15,
    older46plus: 12,
    male: 58,
    female: 42,
  },

  onboard:(member)=>set(state=>({
    totalCitizens: state.totalCitizens + 1,
    referrals:[member,...state.referrals]
  }))
}))