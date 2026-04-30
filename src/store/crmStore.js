import { create } from 'zustand'

export const useCrmStore=create((set)=>({
  leads:[],
  donors:[],
  partners:[],
  addLead:(lead)=>set(state=>({
    leads:[
      {
        id:Date.now(),
        stage:'prospect',
        createdAt:new Date().toISOString(),
        ...lead
      },
      ...state.leads
    ]
  })),
  convertLead:(id)=>set(state=>({
    leads:state.leads.map(l=>
      l.id===id ? {...l,stage:'converted'} : l
    )
  }))
}))