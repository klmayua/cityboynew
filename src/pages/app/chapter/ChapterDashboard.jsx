import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useMissionStore } from '../../../store/missionStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Users, Map, Wallet, FileText, MessageCircle, Heart, UserPlus,
  Calendar, Shield, Globe, ArrowRight, Filter, Plus
} from 'lucide-react'

function LocalKPIs() {
  const chapters = usePeopleStore(s => s.chapters) || []
  const volunteers = usePeopleStore(s => s.volunteers) || []

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Members</p>
        <p className="text-2xl font-bold text-white">{chapters.reduce((sum, c) => sum + (c.members || 0), 0)}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Active Volunteers</p>
        <p className="text-2xl font-bold text-emerald-400">{volunteers.filter(v => v.status === 'active').length}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Pending Tasks</p>
        <p className="text-2xl font-bold text-yellow-400">{12}</p>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs">Budget Requests</p>
        <p className="text-2xl font-bold text-[#D4AF37]">{5}</p>
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
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold">
              {v.name?.[0] || 'V'}
            </div>
            <div className="flex-1">
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

function LocalTreasury() {
  const allocations = useCapitalStore(s => s.allocations) || []

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Wallet className="w-4 h-4 text-[#D4AF37]" />
        Local Treasury
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Received</p>
          <p className="text-xl font-bold text-white">₦24.5M</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Deployed</p>
          <p className="text-xl font-bold text-emerald-400">₦18.2M</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-400 text-xs mb-2">Pending Requests</p>
        <div className="space-y-2">
          {allocations.filter(a => a.status === 'pending').slice(0, 2).map(a => (
            <div key={a.id} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
              <span className="text-white text-sm">{a.mission}</span>
              <span className="text-yellow-400 text-sm">{a.allocated}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EventsCalendar() {
  const events = [
    { title: 'Chapter Meeting', date: 'Tomorrow, 6PM' },
    { title: 'Volunteer Training', date: 'Sat, 10AM' },
    { title: 'Town Hall', date: 'Sun, 2PM' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-[#D4AF37]" />
        Events Calendar
      </h3>
      <div className="space-y-3">
        {events.map((e, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <div>
              <p className="text-white text-sm">{e.title}</p>
              <p className="text-gray-400 text-xs">{e.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <UserPlus className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
        <span className="text-white text-xs">Recruit</span>
      </button>
      <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <Map className="w-5 h-5 text-purple-400 mx-auto mb-1" />
        <span className="text-white text-xs">Mission</span>
      </button>
      <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <Wallet className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
        <span className="text-white text-xs">Budget</span>
      </button>
      <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <FileText className="w-5 h-5 text-blue-400 mx-auto mb-1" />
        <span className="text-white text-xs">Report</span>
      </button>
    </div>
  )
}

export default function LocalOperations() {
  const { user } = useAuthStore()

  return (
    <CityBoyOSShell role="chapter" title="Local Operations">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Chapter Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Chapter Lead'}</p>
      </div>

      <LocalKPIs />
      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <VolunteerRoster />
        <MissionsBoard />
        <LocalTreasury />
        <EventsCalendar />
      </div>
    </CityBoyOSShell>
  )
}