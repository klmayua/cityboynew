import { create } from 'zustand'

export const useAnalyticsStore=create((set)=>({
  metrics:{
    sessions:0,
    commands:0,
    approvals:0,
    revenue:0,
    activeUsers:0
  },

  bump:(key,value=1)=>set(state=>({
    metrics:{
      ...state.metrics,
      [key]:(state.metrics[key] || 0)+value
    }
  }))
}))