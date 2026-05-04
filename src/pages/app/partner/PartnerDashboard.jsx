import OperatingSystemShell from '../../../layouts/OperatingSystemShell'
import { useAuthStore } from '../../../store/authStore'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import { Building2, TrendingUp, FileText, MessageSquare, Users } from 'lucide-react'

function ActivePartnerships() {
  const partners = usePeopleStore(s => s.partners) || []
  const active = partners.filter(p => p.status === 'active').slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Building2 className="w-4 h-4 text-[#D4AF37]" />
        Active Partnerships
      </h3>
      <div className="space-y-3">
        {active.map(p => (
          <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm">{p.name}</p>
              <p className="text-gray-400 text-xs">{p.type}</p>
            </div>
            <span className={`px-2 py-1 rounded text-xs ${p.tier === 'platinum' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-white/10 text-gray-400'}`}>
              {p.tier}
            </span>
          </div>
        ))}
        {active.length === 0 && (
          <p className="text-gray-500 text-center py-4">No active partnerships</p>
        )}
      </div>
    </div>
  )
}

function ProjectSponsorships() {
  const missions = useMissionStore(s => s.missions) || []
  const active = missions.filter(m => m.status === 'active').slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Users className="w-4 h-4 text-emerald-400" />
        Project Sponsorships
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
          <p className="text-gray-500 text-center py-4">No sponsorships</p>
        )}
      </div>
    </div>
  )
}

function ROIReporting() {
  const kpis = deriveKPIs()

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        ROI Reporting
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Mission Success</p>
          <p className="text-xl font-bold text-emerald-400">{kpis?.missionSuccessRate || 0}%</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Impact Score</p>
          <p className="text-xl font-bold text-[#D4AF37]">{kpis?.sentimentScore || 0}</p>
        </div>
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <Building2 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
        <span className="text-white text-sm">Partnerships</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <FileText className="w-6 h-6 text-blue-400 mx-auto mb-2" />
        <span className="text-white text-sm">Reports</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50">
        <MessageSquare className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
        <span className="text-white text-sm">Messages</span>
      </button>
    </div>
  )
}

export default function PartnerDashboard() {
  const { user } = useAuthStore()

  return (
    <OperatingSystemShell role="partner">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Partner Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Partner'}</p>
      </div>

      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <ActivePartnerships />
        <ProjectSponsorships />
        <ROIReporting />
      </div>
    </OperatingSystemShell>
  )
}