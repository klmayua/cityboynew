import CommandShell from '../../../layouts/CommandShell'
import CommandDock from '../../../components/command/CommandDock'
import CommandPalette from '../../../components/command/CommandPalette'
import MobileCommandDrawer from '../../../components/command/MobileCommandDrawer'
import CommandSearch from '../../../components/command/CommandSearch'
import WorkspaceRenderer from '../../../components/command/WorkspaceRenderer'

export default function CommandOverview(){
  return (
    <CommandShell
      title="Command Center"
      subtitle="Operating System"
    >
      <MobileCommandDrawer />

      <div className="grid xl:grid-cols-[260px_1fr] gap-6">
        <div className="hidden xl:block">
          <CommandDock />
        </div>

        <main className="space-y-6 min-w-0">
          <CommandSearch />
          <WorkspaceRenderer />
        </main>
      </div>

      <CommandPalette />
    </CommandShell>
  )
}