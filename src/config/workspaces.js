import { lazy } from 'react'

export const workspaces = {
  overview: lazy(()=>import('../workspaces/OverviewSpace')),
  capital: lazy(()=>import('../workspaces/CapitalSpace')),
  operations: lazy(()=>import('../workspaces/OperationsSpace')),
  citizens: lazy(()=>import('../workspaces/CitizensSpace')),
  media: lazy(()=>import('../workspaces/MediaSpace')),
  oracle: lazy(()=>import('../workspaces/OracleSpace')),
  automation: lazy(()=>import('../workspaces/AutomationSpace')),
  execution: lazy(()=>import('../workspaces/ExecutionSpace')),
  admin: lazy(()=>import('../workspaces/AdminSpace')),
}