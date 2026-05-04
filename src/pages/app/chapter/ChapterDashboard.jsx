import OperatingSystemShell from '../../../layouts/OperatingSystemShell'
import { useAuthStore } from '../../../store/authStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useMissionStore } from '../../../store/missionStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { Users, Map, Wallet, FileText, MessageSquare, UserPlus } from 'lucide-react'

function LocalKPIs() {
  const chapters = usePeopleStore(s => s.chapters) || []
  const volunteers = usePeopleStore(s => s.volunteers) || []

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Chapter Members</p>
        <p className="text-2xl font-bold text-white">{chapters.length}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Active Volunteers</p>
        <p className="text-2xl font-bold text-emerald-400">{volunteers.filter(v => v.status === 'active').length}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Pending Tasks</p>
        <p className="text-2xl font-bold text-yellow-400">{Math.floor(Math.random() * 20) + 5}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Budget Requests</p>
        <p className="text-2xl font-bold text-[#D4AF37]">{Math.floor(Math.random() * 10) + 1}</p>
      </div>
    </div>
  )
}

function VolunteerRoster() {
  const volunteers = usePeopleStore(s => s.volunteers) || []
  const active = volunteers.filter(v => v.status === 'active').slice(0, 8)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Users className="w-4 h-4 text-[#D4AF37]" />
        Volunteer Roster
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {active.map(v => (
          <div key={v.id} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium">
              {v.name?.[0] || 'V'}
            </div>
            <div>
              <p className="text-white text-sm">{v.name}</p>
              <p className="text-gray-400 text-xs">{v.role}</p>
            </div>
          </div>
        ))}
        {active.length === 0 && (
          <p className="text-gray-500 col-span-2 text-center py-4">No volunteers</p>
        )}
      </div>
    </div>
  )
}

function MissionsBoard() {
  const missions = useMissionStore(s => s.missions) || []
  const active = missions.filter(m => m.status === 'active').slice(0, 4)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Map className="w-4 h-4 text-emerald-400" />
        Local Missions
      </h3>
      <div className="space-y-3">
        {active.map(m => (
          <div key={m.id} className="p-3 rounded-lg bg-white/5">
            <div className="flex justify-between">
              <p className="text-white text-sm">{m.title}</p>
              <span className="text-emerald-400 text-xs">{m.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${m.progress}%` }} />
            </div>
          </div>
        ))}
        {active.length === 0 && (
          <p className="text-gray-500 text-center py-4">No missions</p>
        )}
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <UserPlus className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
        <span className="text-white text-xs">Recruit</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Map className="w-5 h-5 text-purple-400 mx-auto mb-1" />
        <span className="text-white text-xs">Missions</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Wallet className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
        <span className="text-white text-xs">Budget</span>
      </button>
      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <FileText className="w-5 h-5 text-blue-400 mx-auto mb-1" />
        <span className="text-white text-xs">Reports</span>
      </button>
    </div>
  )
}

export default function ChapterDashboard() {
  const { user } = useAuthStore()

  return (
    <OperatingSystemShell role="chapter">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Chapter Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Chapter Lead'}</p>
      </div>

      <LocalKPIs />
      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <VolunteerRoster />
        <MissionsBoard />
      </div>
    </OperatingSystemShell>
  )
}