import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { useMissionStore } from '../../../store/missionStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import { 
  Users, MapPin, TrendingUp, Target, Calendar, Clock,
  Award, ChevronRight, Filter, Search, Plus,
  Globe, Building2, Heart, MessageCircle, Settings, DollarSign
} from 'lucide-react'

function StatCard({ label, value, subtitle, icon: Icon, color }) {
  return (
    <div className="glass-dark rounded-xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-xs">{label}</p>
        <Icon className={`w-4 h-4 ${color}`} />
      </div>
      <p className="text-xl font-bold text-white">{value}</p>
      {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
    </div>
  )
}

function ChapterCard({ chapter }) {
  const navigate = useNavigate()
  const statusColors = {
    active: 'bg-emerald-500',
    inactive: 'bg-gray-500',
    suspended: 'bg-red-500',
  }

  return (
    <button
      onClick={() => navigate(`/app/chapter?state=${chapter.state}`)}
      className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
            <Globe className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <p className="text-white font-medium">{chapter.name}</p>
            <p className="text-gray-400 text-sm">{chapter.state}</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-500" />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400 text-xs">{chapter.members}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400 text-xs">{chapter.leads?.length || 0} leads</span>
        </div>
        <span className={`ml-auto px-2 py-0.5 rounded text-xs ${statusColors[chapter.status]}`}>
          {chapter.status}
        </span>
      </div>
    </button>
  )
}

function ChapterDashboard() {
  const navigate = useNavigate()
  const { chapters, members } = usePeopleStore()
  const kpis = deriveKPIs()
  const [search, setSearch] = useState('')

  const filteredChapters = chapters.filter(c => 
    search ? c.name.toLowerCase().includes(search.toLowerCase()) || 
          c.state.toLowerCase().includes(search.toLowerCase()) : true
  )

  const totalMembers = chapters.reduce((sum, c) => sum + c.members, 0)
  const activeChapters = chapters.filter(c => c.status === 'active').length

  return (
    <CityBoyOSShell role="leadership" title="Chapters">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Chapter Network</h1>
        <p className="text-gray-400">Manage chapters across Nigeria</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Chapters" value={chapters.length} icon={Globe} color="text-[#D4AF37]" />
        <StatCard label="Active Chapters" value={activeChapters} icon={Target} color="text-emerald-400" />
        <StatCard label="Total Members" value={totalMembers.toLocaleString()} icon={Users} color="text-blue-400" />
        <StatCard label="Chapters Lead" value={members.filter(m => m.role === 'Chapter Lead').length} icon={Award} color="text-purple-400" />
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search chapters by name or state..."
              className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500"
            />
          </div>
          <button 
            onClick={() => navigate('/app/chapter?new=true')}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg"
          >
            <Plus className="w-4 h-4" />
            New Chapter
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChapters.map(chapter => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>

      {filteredChapters.length === 0 && (
        <div className="text-center py-12">
          <Globe className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No chapters found</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default ChapterDashboard