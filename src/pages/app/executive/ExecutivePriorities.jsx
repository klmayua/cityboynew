import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { 
  Target, CheckCircle, Clock, Filter, Search, ChevronRight,
  AlertTriangle, TrendingUp
} from 'lucide-react'

function PriorityCard({ priority }) {
  const statusColors = {
    critical: 'border-l-red-500',
    high: 'border-l-yellow-500',
    medium: 'border-l-blue-500',
    low: 'border-l-gray-500',
  }
  
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 border-l-4 ${statusColors[priority.status]} hover:bg-white/10 transition-all cursor-pointer`}>
      <div className="flex items-center gap-3">
        <Target className="w-5 h-5 text-gray-400" />
        <div>
          <p className="text-white font-medium">{priority.title}</p>
          <p className="text-gray-400 text-sm">{priority.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`px-2 py-1 rounded text-xs ${priority.status === 'critical' ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-gray-400'}`}>
          {priority.status}
        </span>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  )
}

function ExecutivePriorities() {
  const { missions } = useMissionStore()
  const [filter, setFilter] = useState('all')

  const priorities = [
    { id: 1, title: 'Q2 Volunteer Recruitment', description: 'Increase volunteer count by 500', status: 'critical' },
    { id: 2, title: 'Chapter Expansion', description: 'Launch 5 new chapters', status: 'high' },
    { id: 3, title: 'Partner Pipeline', description: 'Secure 3 new corporate partners', status: 'medium' },
    { id: 4, title: 'Digital Transformation', description: 'Migrate legacy systems', status: 'low' },
    { id: 5, title: 'Impact Reporting', description: 'Q1 impact report delivery', status: 'high' },
  ]

  const filtered = filter === 'all' ? priorities : priorities.filter(p => p.status === filter)

  return (
    <CityBoyOSShell role="executive" title="Priorities">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Strategic Priorities</h1>
        <p className="text-gray-400">Executive priority management</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total</p>
          <p className="text-2xl font-bold text-white">{priorities.length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-red-500/30">
          <p className="text-gray-400 text-xs">Critical</p>
          <p className="text-2xl font-bold text-red-400">{priorities.filter(p => p.status === 'critical').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-yellow-500/30">
          <p className="text-gray-400 text-xs">High</p>
          <p className="text-2xl font-bold text-yellow-400">{priorities.filter(p => p.status === 'high').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Medium</p>
          <p className="text-2xl font-bold text-blue-400">{priorities.filter(p => p.status === 'medium').length}</p>
        </div>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          {['all', 'critical', 'high', 'medium', 'low'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${filter === f ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'}`}>
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(p => <PriorityCard key={p.id} priority={p} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default ExecutivePriorities