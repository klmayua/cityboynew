import { create } from 'zustand'

export const useIntelStore = create((set)=>({
  sentiment: 64,
  threatLevel: 18,
  opportunities: 9,
  narratives: [],
  watchlist: [],
  signals: [],

  pushSignal:(signal)=>set(state=>({
    signals:[signal,...state.signals].slice(0,50)
  }))
}))