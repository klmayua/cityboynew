import { create } from 'zustand'

export const useSystemBus = create((set,get)=>({
  events: [],
  workflows: {},
  listeners: {},
  pulse: 0,

  emit:(type,payload={})=>{
    const evt = {
      id: crypto.randomUUID?.() || Math.random().toString(36).slice(2),
      type,
      payload,
      ts: Date.now()
    }

    set(state=>({
      events:[evt,...state.events].slice(0,300),
      pulse: state.pulse + 1
    }))

    const listeners = get().listeners[type] || []
    listeners.forEach(fn=>fn(evt))
  },

  subscribe:(type,handler)=>{
    set(state=>({
      listeners:{
        ...state.listeners,
        [type]: [...(state.listeners[type]||[]), handler]
      }
    }))
  },

  unsubscribe:(type,handler)=>{
    set(state=>({
      listeners:{
        ...state.listeners,
        [type]: (state.listeners[type]||[])
          .filter(fn=>fn!==handler)
      }
    }))
  }
}))