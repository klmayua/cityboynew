import { create } from 'zustand'

export const useLegacyStore = create(()=>({
  schools: 0,
  fellowships: 0,
  ventures: 0,
  impactScore: 0
}))