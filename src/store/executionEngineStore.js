import { create } from 'zustand'
import { createCommand, transition } from '../core/commandEngine'

export const useExecutionEngine=create((set,get)=>({
  queue:[],
  running:null,
  completed:[],
  failed:[],

  enqueue:(payload)=>{
    const command=createCommand(payload)
    set(state=>({
      queue:[command,...state.queue]
    }))
  },

  startNext:()=>{
    const state=get()
    if(state.running) return

    const next=state.queue.at(-1)
    if(!next) return

    set({
      running:transition(next,'running'),
      queue:state.queue.slice(0,-1)
    })
  },

  complete:()=>{
    const state=get()
    if(!state.running) return

    set({
      completed:[
        transition(state.running,'complete'),
        ...state.completed
      ].slice(0,200),
      running:null
    })
  },

  fail:(message)=>{
    const state=get()
    if(!state.running) return

    set({
      failed:[
        transition(state.running,'failed',message),
        ...state.failed
      ].slice(0,200),
      running:null
    })
  }
}))