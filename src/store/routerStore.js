import { create } from 'zustand'

export const useRouterStore = create((set)=>({
  activeSpace:'overview',
  spaces:[
    'overview',
    'capital',
    'power',
    'operations',
    'citizens',
    'intelligence',
    'media',
    'automation',
    'oracle',
    'execution',
    'admin'
  ],
  go:(space)=>set({activeSpace:space})
}))