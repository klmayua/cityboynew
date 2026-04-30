import { LayoutGrid } from 'lucide-react'
import { useState } from 'react'

const workspaces = [
  { id: 'national', name: 'National' },
  { id: 'warroom', name: 'War Room' },
  { id: 'finance', name: 'Finance' },
  { id: 'partners', name: 'Partners' },
  { id: 'projects', name: 'Projects' },
]

export default function WorkspaceSwitcher() {
  const [active, setActive] = useState('national')

  return (
    <div className="flex items-center gap-2 px-3 h-10 rounded-xl border border-white/[0.1] bg-white/[0.03]">
      <LayoutGrid className="w-4 h-4 text-gold" />
      <select
        value={active}
        onChange={(e) => setActive(e.target.value)}
        className="bg-transparent outline-none text-sm text-white cursor-pointer"
      >
        {workspaces.map((w) => (
          <option key={w.id} value={w.id}>{w.name}</option>
        ))}
      </select>
    </div>
  )
}