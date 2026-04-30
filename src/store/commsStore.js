import { create } from 'zustand'

export const useCommsStore=create((set)=>({
  threads:[],
  send:(message)=>set(state=>({
    threads:[
      {
        id:Date.now(),
        createdAt:new Date().toISOString(),
        ...message
      },
      ...state.threads
    ]
  }))
}))