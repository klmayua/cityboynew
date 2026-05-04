import { LayoutGrid } from 'lucide-react'
import { useMissionStore } from '../../store/missionStore'
import { useCapitalStore } from '../../store/capitalStore'
import { useIntelStore } from '../../store/intelStore'
import { usePeopleStore } from '../../store/peopleStore'

export default function WorkspaceSwitcher() {
  const missionStore = useMissionStore(s => s)
  const capitalStore = useCapitalStore(s => s)
  const intelStore = useIntelStore(s => s)
  const peopleStore = usePeopleStore(s => s)

  const workspaces = [
    { id: 'national', name: 'Mission OS', count: missionStore.missions.length },
    { id: 'warroom', name: 'Capital OS', count: capitalStore.allocations.length },
    { id: 'finance', name: 'Intel OS', count: intelStore.alerts.length },
    { id: 'partners', name: 'People OS', count: peopleStore.volunteers.length },
  ]

  return (
    <div className="flex items-center gap-2 px-3 h-10 rounded-xl border border-white/[0.1] bg-white/[0.03]">
      <LayoutGrid className="w-4 h-4 text-gold" />
      <select
        className="bg-transparent outline-none text-sm text-white cursor-pointer"
      >
        {workspaces.map((w) => (
          <option key={w.id} value={w.id}>{w.name} ({w.count})</option>
        ))}
      </select>
    </div>
  )
}