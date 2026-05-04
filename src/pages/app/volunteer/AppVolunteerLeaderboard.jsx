import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  TrendingUp, Award, Users, Medal, ChevronRight, Filter
} from 'lucide-react'

function LeaderboardRow({ rank, member }) {
  const medals = { 1: 'text-[#D4AF37]', 2: 'text-gray-300', 3: 'text-orange-400' }
  const bgColors = { 1: 'bg-[#D4AF37]/20', 2: 'bg-gray-500/20', 3: 'bg-orange-500/20' }
  
  return (
    <button
      onClick={() => window.location.href = `/app/volunteer?member=${member.id}`}
      className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColors[rank] || 'bg-white/10'}`}>
          <span className={`font-bold ${medals[rank] || 'text-white'}`}>{rank}</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
          <span className="text-[#D4AF37] font-semibold text-sm">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="text-white font-medium">{member.name}</p>
          <p className="text-gray-400 text-sm">{member.chapter}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Award className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-[#D4AF37] font-semibold">{member.score?.toLocaleString()}</span>
      </div>
    </button>
  )
}

function AppVolunteerLeaderboard() {
  const { leaderboard, members } = usePeopleStore()
  const [timeFilter, setTimeFilter] = useState('all')

  return (
    <CityBoyOSShell role="volunteer" title="Leaderboard">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Leaderboard</h1>
        <p className="text-gray-400">Top performers this month</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          {['all', 'week', 'month', 'year'].map(t => (
            <button key={t} onClick={() => setTimeFilter(t)} className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${timeFilter === t ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'}`}>
              {t === 'all' ? 'All Time' : t}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {(leaderboard || members || []).slice(0, 20).map((member, idx) => (
          <LeaderboardRow key={member.id} rank={idx + 1} member={member} />
        ))}
      </div>
    </CityBoyOSShell>
  )
}

export default AppVolunteerLeaderboard