import { create } from 'zustand'

export const useAuditStore=create((set)=>({
  logs:[],
  log:(entry)=>set(state=>({
    logs:[
      {
        id:Date.now(),
        time:new Date().toISOString(),
        ...entry
      },
      ...state.logs
    ].slice(0,500)
  }))
}))