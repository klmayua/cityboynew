import { create } from 'zustand'

export const useWhaleStore = create(()=>({
  whales: [
    {
      id: 1,
      name: 'Founding Circle',
      tier: 'Strategic Patron',
      influence: 98,
      capital: '₦500M+'
    },
    {
      id: 2,
      name: 'Institutional Ally',
      tier: 'Capital Partner',
      influence: 88,
      capital: '₦250M+'
    },
    {
      id: 3,
      name: 'Sovereign Prospect',
      tier: 'High Influence',
      influence: 91,
      capital: '₦1B+'
    }
  ]
}))