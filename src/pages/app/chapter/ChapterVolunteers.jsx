import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Heart, Clock, Award, TrendingUp, MapPin, ChevronRight,
  Plus, Search, Filter, Users, Calendar
} from 'lucide-react'

function VolunteerCard({ volunteer }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/app/chapter/volunteers?volunteer=${volunteer.id}`)}
      className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
          <Heart className="w-5 h-5 text-rose-400" />
        </div>
        <div>
          <p className="text-white font-medium">{volunteer.name}</p>
          <p className="text-gray-400 text-sm">{volunteer.chapter}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-xs">{volunteer.hours}h</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-3 h-3 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">{volunteer.score}</span>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </button>
  )
}

function ChapterVolunteers() {
  const navigate = useNavigate()
  const { volunteers } = usePeopleStore()
  const [search, setSearch] = useState('')

  const filtered = volunteers.filter(v => v.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <CityBoyOSShell role="chapter" title="Volunteers">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Chapter Volunteers</h1>
        <p className="text-gray-400">Manage chapter volunteers</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
          </div>
          <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-black text-sm font-medium rounded-lg">
            <Plus className="w-4 h-4" />Recruit
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(v => <VolunteerCard key={v.id} volunteer={v} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <Heart className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No volunteers found</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default ChapterVolunteers