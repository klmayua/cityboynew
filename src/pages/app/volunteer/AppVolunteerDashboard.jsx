import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useSystemStore } from '../../../store/systemStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Map, CheckCircle, FileText, MessageSquare, Award, Clock, Zap, Target,
  Users, TrendingUp, Gift, BookOpen, Wallet, Star, Navigation, Bell, ArrowRight, Flame
} from 'lucide-react'
import { useState } from 'react'

function StatsCard({ label, value, icon: Icon, color }) {
  return (
    <div className="glass-dark rounded-xl p-4 border border-white/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-xs">{label}</p>
          <p className={`text-xl font-bold ${color || 'text-white'}`}>{value}</p>
        </div>
        <Icon className={`w-6 h-6 ${color || 'text-gray-400'}`} />
      </div>
    </div>
  )
}

function MissionQueue() {
  const queue = useMissionStore(s => s.queue) || []
  const missions = useMissionStore(s => s.missions) || []
  const available = [
    ...missions.filter(m => m.status === 'active').slice(0, 5).map(m => ({ ...m, type: 'mission' })),
    ...queue.slice(0, 3).map(q => ({ ...q, type: 'queue' })),
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Target className="w-4 h-4 text-[#D4AF37]" />
        Mission Queue
      </h3>
      <div className="space-y-3">
        {available.map((item, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.category || item.type}</p>
              </div>
              <span className="text-emerald-400 text-sm">{item.progress || 0}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${item.progress || 0}%` }} />
            </div>
            <button className="mt-2 w-full py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Accept Mission
            </button>
          </div>
        ))}
        {available.length === 0 && (
          <p className="text-gray-500 text-center py-4">No missions available</p>
        )}
      </div>
    </div>
  )
}

function CheckInButton() {
  const [checkedIn, setCheckedIn] = useState(false)

  return (
    <button
      onClick={() => setCheckedIn(!checkedIn)}
      className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
        checkedIn
          ? 'bg-emerald-500 text-white'
          : 'bg-[#D4AF37] text-black hover:bg-[#B8962E]'
      }`}
    >
      <CheckCircle className="w-6 h-6" />
      {checkedIn ? 'Checked In!' : 'Check In'}
    </button>
  )
}

function ProfileProgress() {
  const volunteers = usePeopleStore(s => s.volunteers) || []
  const current = volunteers[0] || {}

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4">Your Progress</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">XP Points</span>
          <span className="text-[#D4AF37] font-bold">{current.score || 0}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Hours</span>
          <span className="text-white font-bold">{current.hours || 0}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Missions</span>
          <span className="text-white font-bold">{current.missions || 0}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Streak</span>
          <span className="text-emerald-400 font-bold">5 days</span>
        </div>
        <div className="pt-3 border-t border-white/10">
          <div className="text-xs text-gray-500 mb-2">Level Progress</div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full" style={{ width: '65%' }} />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Level 12</span>
            <span>2400 XP to Level 13</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Badges() {
  const badges = [
    { name: 'First Mission', icon: '🎯', earned: true },
    { name: 'Team Player', icon: '👥', earned: true },
    { name: 'Leader', icon: '⭐', earned: true },
    { name: 'Champion', icon: '🏆', earned: false },
    { name: 'Mentor', icon: '📚', earned: false },
    { name: 'Legend', icon: '🔥', earned: false },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Award className="w-4 h-4 text-[#D4AF37]" />
        Badges
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {badges.map(badge => (
          <div
            key={badge.name}
            className={`p-3 rounded-lg text-center ${
              badge.earned ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/30' : 'bg-white/5 opacity-50'
            }`}
          >
            <div className="text-2xl mb-1">{badge.icon}</div>
            <div className="text-xs text-gray-400">{badge.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NearbyOpportunities() {
  const states = ['Kano', 'Lagos', 'Abuja', 'Enugu', 'Port Harcourt']
  
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Navigation className="w-4 h-4 text-emerald-400" />
        Nearby Opportunities
      </h3>
      <div className="space-y-2">
        {states.map((state, i) => (
          <button key={state} className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 text-left flex items-center justify-between">
            <div>
              <p className="text-white text-sm">{state}</p>
              <p className="text-gray-400 text-xs">{Math.floor(Math.random() * 20) + 5} missions available</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  )
}

function Leaderboard() {
  const volunteers = usePeopleStore(s => s.volunteers) || []
  const top = volunteers.slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
        Leaderboard
      </h3>
      <div className="space-y-2">
        {top.map((v, i) => (
          <div key={v.id} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                i === 0 ? 'bg-[#D4AF37] text-black' :
                i === 1 ? 'bg-gray-300 text-black' :
                i === 2 ? 'bg-amber-600 text-white' :
                'bg-white/10 text-gray-400'
              }`}>
                {i + 1}
              </span>
              <span className="text-white text-sm">{v.name}</span>
            </div>
            <span className="text-[#D4AF37] text-sm">{v.score || 0} XP</span>
          </div>
        ))}
        {top.length === 0 && (
          <p className="text-gray-500 text-center py-4">No volunteers yet</p>
        )}
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <FileText className="w-5 h-5 text-blue-400 mx-auto mb-1" />
        <span className="text-white text-sm">Submit Report</span>
      </button>
      <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
        <span className="text-white text-sm">Refer Friend</span>
      </button>
      <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <Gift className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
        <span className="text-white text-sm">Redeem</span>
      </button>
      <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <MessageSquare className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
        <span className="text-white text-sm">Chat</span>
      </button>
    </div>
  )
}

function WalletCard() {
  const current = usePeopleStore(s => s.volunteers)?.[0] || {}

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10 bg-gradient-to-br from-[#D4AF37]/20 to-transparent">
      <div className="flex items-center justify-between mb-4">
        <Wallet className="w-6 h-6 text-[#D4AF37]" />
        <span className="text-xs text-[#D4AF37]">Active</span>
      </div>
      <p className="text-gray-400 text-xs mb-1">Available Balance</p>
      <p className="text-2xl font-bold text-white">₦{((current.score || 0) / 100).toFixed(0)}</p>
      <button className="mt-4 w-full py-2 bg-[#D4AF37] text-black font-medium rounded-lg hover:bg-[#B8962E]">
        Withdraw
      </button>
    </div>
  )
}

export default function FieldForce() {
  const { user } = useAuthStore()
  const kpis = deriveKPIs()

  return (
    <CityBoyOSShell role="volunteer" title="Field Force">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Field Force Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Volunteer'}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatsCard label="XP Points" value={(usePeopleStore(s => s.volunteers)?.[0]?.score || 0).toLocaleString()} icon={Zap} color="text-[#D4AF37]" />
        <StatsCard label="Hours" value={usePeopleStore(s => s.volunteers)?.[0]?.hours || 0} icon={Clock} color="text-blue-400" />
        <StatsCard label="Missions" value={kpis?.activeMissionCount || 0} icon={Target} color="text-emerald-400" />
        <StatsCard label="Streak" value="5 days" icon={Flame} color="text-orange-400" />
      </div>

      <CheckInButton />

      <QuickActions />

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <MissionQueue />
          <NearbyOpportunities />
        </div>

        <div className="space-y-6">
          <WalletCard />
          <ProfileProgress />
          <Badges />
          <Leaderboard />
        </div>
      </div>
    </CityBoyOSShell>
  )
}