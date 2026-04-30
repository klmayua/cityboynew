import { Suspense } from 'react'
import { useRouterStore } from '../../store/routerStore'
import { workspaces } from '../../config/workspaces'

export default function WorkspaceRenderer(){
  const active = useRouterStore(s=>s.activeSpace)
  const ActiveComponent = workspaces[active] || workspaces.overview

  return (
    <Suspense
      fallback={
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-white/60">
          Loading workspace...
        </div>
      }
    >
      <ActiveComponent />
    </Suspense>
  )
}