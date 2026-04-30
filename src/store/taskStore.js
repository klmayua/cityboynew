import { create } from 'zustand'

export const useTaskStore=create((set)=>({
  tasks:[],
  createTask:(task)=>set(state=>({
    tasks:[
      {
        id:Date.now(),
        status:'pending',
        createdAt:new Date().toISOString(),
        ...task
      },
      ...state.tasks
    ]
  })),
  completeTask:(id)=>set(state=>({
    tasks:state.tasks.map(t=>
      t.id===id
        ? {...t,status:'done'}
        : t
    )
  }))
}))