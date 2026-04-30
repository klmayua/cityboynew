import { create } from 'zustand'

export const useNotificationStore=create((set)=>({
  notifications:[],

  push:(note)=>set(state=>({
    notifications:[
      {
        id:Date.now(),
        createdAt:new Date().toISOString(),
        ...note
      },
      ...state.notifications
    ].slice(0,100)
  })),

  dismiss:(id)=>set(state=>({
    notifications:state.notifications.filter(
      n=>n.id!==id
    )
  }))
}))