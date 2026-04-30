import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const roles = {
  founder:['*'],
  executive:[
    'approve',
    'assign',
    'broadcast',
    'review',
    'deploy'
  ],
  operator:[
    'execute',
    'update',
    'report'
  ],
  media:[
    'publish',
    'campaign',
    'narrative'
  ],
  analyst:[
    'intel',
    'forecast',
    'brief'
  ]
}

const roleHierarchy = {
  founder: 5,
  executive: 4,
  operator: 3,
  media: 2,
  analyst: 1,
  guest: 0
}

export const useAccessStore=create(
  persist(
    (set,get)=>({
      role:'guest',
      permissions:[],
      setRole:(newRole)=>{
        const currentRole = get().role
        if (roleHierarchy[newRole] === undefined) return
        set({
          role:newRole,
          permissions:roles[newRole] || []
        })
      },
      can:(perm)=>{
        const p=get().permissions
        return p.includes('*') || p.includes(perm)
      },
      getMinRole:(requiredLevel)=>{
        const currentRole = get().role
        return (roleHierarchy[currentRole] || 0) >= requiredLevel
      }
    }),
    {
      name:'titan-access',
      partialize:(state)=>({ role:state.role })
    }
  )
)