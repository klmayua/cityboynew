import { Search, Command, Users, Landmark, Shield, Radio, Bot, Play, Settings } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMissionStore } from '../../store/missionStore'
import { usePeopleStore } from '../../store/peopleStore'
import { useCapitalStore } from '../../store/capitalStore'
import { useSystemStore } from '../../store/systemStore'

const navItems = [
  { type: 'workspace', label: 'Go to Capital', icon: Landmark, path: '/app/command/capital' },
  { type: 'workspace', label: 'Go to Operations', icon: Shield, path: '/app/command/operations' },
  { type: 'workspace', label: 'Go to Citizens', icon: Users, path: '/app/command/citizens' },
  { type: 'workspace', label: 'Go to Media', icon: Radio, path: '/app/command/media' },
  { type: 'command', label: 'Run Mobilization', icon: Play, action: 'mobilize' },
  { type: 'command', label: 'View Pipeline', icon: Command, action: 'pipeline' },
  { type: 'command', label: 'Deploy Capital', icon: Landmark, action: 'deploy' },
  { type: 'command', label: 'Trigger Automation', icon: Bot, action: 'automate' },
  { type: 'settings', label: 'System Settings', icon: Settings, action: 'settings' },
]

export default function CommandSearch(){
  const [focused, setFocused] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  
  const missions = useMissionStore(s => s.missions)
  const members = usePeopleStore(s => s.members)
  const allocations = useCapitalStore(s => s.allocations)
  const notify = useSystemStore(s => s.notify)

  const handleAction = (item) => {
    if (item.path) {
      navigate(item.path)
    } else if (item.action) {
      notify('info', item.label + ' triggered')
    }
  }

  const filteredItems = navItems.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6)

  return (
    <div className="relative">
      <div className={`rounded-2xl border ${focused ? 'border-command-blue/50' : 'border-white/10'} bg-white/[0.03] px-4 py-3 flex items-center gap-3 transition-colors`}>
        <Search size={16} className={focused ? 'text-command-blue' : 'text-white/50'}/>
        <input
          placeholder="Search commands, workspaces, data..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          className="bg-transparent outline-none text-white w-full text-sm placeholder:text-white/30"
        />
      </div>
      {focused && query && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-[#0B1728] p-2 z-50 max-h-[280px] overflow-y-auto">
          <div className="text-[10px] text-white/40 uppercase tracking-wider px-2 py-1">Quick Actions</div>
          {filteredItems.map((item, i) => {
            const Icon = item.icon
            return (
              <button 
                key={i} 
                onClick={() => handleAction(item)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-left"
              >
                <Icon className="w-4 h-4 text-white/50" />
                <span className="text-white text-sm">{item.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}