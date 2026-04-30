import { create } from 'zustand'
import { SYSTEM_CONFIG } from '../lib/systemConfig'

export const useQueueStore=create((set)=>({
  queue:[],
  active:null,

  enqueue:(command)=>set(state=>({
    queue:[
      ...state.queue,
      {
        id:Date.now()+Math.random(),
        status:'queued',
        createdAt:new Date().toISOString(),
        ...command
      }
    ].slice(-SYSTEM_CONFIG.LOG_LIMIT)
  })),

  start:(id)=>set(state=>({
    queue:state.queue.map(q=>
      q.id===id
        ? {...q,status:'running'}
        : q
    ),
    active:id
  })),

  complete:(id)=>set(state=>({
    queue:state.queue.map(q=>
      q.id===id
        ? {...q,status:'done'}
        : q
    ),
    active:null
  })),

  fail:(id)=>set(state=>({
    queue:state.queue.map(q=>
      q.id===id
        ? {...q,status:'failed'}
        : q
    ),
    active:null
  }))
}))