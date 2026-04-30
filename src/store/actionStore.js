import { create } from 'zustand'

export const useActionStore = create((set)=>({
  approvals: [],
  broadcasts: [],
  escalations: [],

  approveFunding:(payload)=>
    set(state=>({
      approvals:[payload,...state.approvals]
    })),

  broadcast:(payload)=>
    set(state=>({
      broadcasts:[payload,...state.broadcasts]
    })),

  escalate:(payload)=>
    set(state=>({
      escalations:[payload,...state.escalations]
    }))
}))