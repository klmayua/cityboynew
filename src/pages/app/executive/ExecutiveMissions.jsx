import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Map, Users, Target, ChevronRight, Plus, Search, Filter,
  TrendingUp, Clock, Calendar
} from 'lucide-react'

function MissionRow({ mission }) {
  return (
    <button className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Map className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <p className="text-white font-medium">{mission.title}</p>
          <p className="text-gray-400 text-sm">{mission.description}</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-500" />
    </button>
  )
}

function ExecutiveMissions() {
  const { missions } = useMissionStore()
  const [search, setSearch] = useState('')

  const filtered = missions?.filter(m => m.title?.toLowerCase().includes(search.toLowerCase())) || []

  return (
    <CityBoyOSShell role="executive" title="Missions">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Mission Oversight</h1>
        <p className="text-gray-400">Executive mission management</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total</p>
          <p className="text-2xl font-bold text-white">{filtered.length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-emerald-500/30">
          <p className="text-gray-400 text-xs">Active</p>
          <p className="text-2xl font-bold text-emerald-400">{filtered.length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-yellow-500/30">
          <p className="text-gray-400 text-xs">Planning</p>
          <p className="text-2xl font-bold text-yellow-400">0</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Volunteers</p>
          <p className="text-2xl font-bold text-white">1250</p>
        </div>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search missions..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
        </div>
      </div>

      <div className="space-y-3">
        {(filtered || []).map(m => <MissionRow key={m.id} mission={m} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <Map className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No missions found</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default ExecutiveMissions