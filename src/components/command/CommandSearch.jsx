import { Search, Command, Users, Landmark, Shield, Radio, Bot, Play, Settings } from 'lucide-react'
import { useState } from 'react'

const quickResults = [
  { type: 'workspace', label: 'Go to Capital', icon: Landmark, action: () => {} },
  { type: 'workspace', label: 'Go to Operations', icon: Shield, action: () => {} },
  { type: 'workspace', label: 'Go to Citizens', icon: Users, action: () => {} },
  { type: 'workspace', label: 'Go to Media', icon: Radio, action: () => {} },
  { type: 'command', label: 'Run Mobilization', icon: Play, action: () => {} },
  { type: 'command', label: 'View Pipeline', icon: Command, action: () => {} },
  { type: 'command', label: 'Deploy Capital', icon: Landmark, action: () => {} },
  { type: 'command', label: 'Trigger Automation', icon: Bot, action: () => {} },
  { type: 'settings', label: 'System Settings', icon: Settings, action: () => {} },
]

export default function CommandSearch(){
  const [focused, setFocused] = useState(false)
  const [query, setQuery] = useState('')
  
  return (
    <div className="relative">
      <div className={`rounded-2xl border ${focused ? 'border-command-blue/50' : 'border-white/10'} bg-white/[0.03] px-4 py-3 flex items-center gap-3 transition-colors`}>
        <Search size={16} className={focused ? 'text-command-blue' : 'text-white/50'}/>
        <input
          placeholder="Search commands, workspaces, data..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="bg-transparent outline-none text-white w-full text-sm placeholder:text-white/30"
        />
      </div>
      {focused && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-[#0B1728] p-2 z-50 max-h-[280px] overflow-y-auto">
          <div className="text-[10px] text-white/40 uppercase tracking-wider px-2 py-1">Quick Actions</div>
          {quickResults.slice(0, 6).map((item, i) => {
            const Icon = item.icon
            return (
              <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-left">
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