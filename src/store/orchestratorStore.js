import { create } from 'zustand'

export const useOrchestratorStore = create((set)=>({
  automations: [],
  narratives: [],
  decisions: [],
  memoryScore: 0,
  autonomyLevel: 12,

  addDecision:(decision)=>set(state=>({
    decisions:[decision,...state.decisions].slice(0,100)
  })),

  addNarrative:(story)=>set(state=>({
    narratives:[story,...state.narratives].slice(0,100)
  }))
}))