import { create } from 'zustand'

export const usePowerStore = create(()=>({
  alliances: [],
  institutions: [],
  governors: [],
  mediaReach: 0,
  influenceIndex: 12
}))