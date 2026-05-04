import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Building2, Users, FileText, TrendingUp, Shield, MessageCircle,
  Calendar, Globe, ArrowRight, Plus, Download, Target, DollarSign
} from 'lucide-react'

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
            <span className={`px-2 py-1 rounded text-xs ${
              p.tier === 'platinum' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' :
              p.tier === 'gold' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-white/10 text-gray-400'
            }`}>
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
            <div className="flex justify-between mb-2">
              <p className="text-white text-sm">{m.title}</p>
              <span className="text-emerald-400 text-xs">{m.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${m.progress}%` }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{m.volunteers} volunteers</span>
              <span>{m.funded}</span>
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
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Mission Success</p>
          <p className="text-2xl font-bold text-emerald-400">{kpis?.missionSuccessRate || 0}%</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Impact Score</p>
          <p className="text-2xl font-bold text-[#D4AF37]">{kpis?.sentimentScore || 0}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-gray-400 text-xs mb-2">Reach Metrics</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Total Reach</span>
            <span className="text-white">2.4M impressions</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Engagement</span>
            <span className="text-white">18% rate</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CampaignOpportunities() {
  const campaigns = [
    { title: 'Clean Water Initiative', category: 'Healthcare', deadline: 'Jun 30' },
    { title: 'Digital Literacy', category: 'Education', deadline: 'Jul 15' },
    { title: 'Youth Employment', category: 'Economic', deadline: 'Aug 1' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Target className="w-4 h-4 text-purple-400" />
        Campaign Opportunities
      </h3>
      <div className="space-y-3">
        {campaigns.map((c, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/5 hover:bg-white/10">
            <p className="text-white text-sm">{c.title}</p>
            <div className="flex justify-between mt-1">
              <span className="text-gray-400 text-xs">{c.category}</span>
              <span className="text-yellow-400 text-xs">Due: {c.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CoBrandMediaGallery() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Globe className="w-4 h-4 text-cyan-400" />
        Co-Brand Media Gallery
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="aspect-square rounded-lg bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Image {i}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 border border-dashed border-white/20 text-gray-400 text-sm rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37]">
        + Upload Media
      </button>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <Building2 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
        <span className="text-white text-sm">Partnerships</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <FileText className="w-6 h-6 text-blue-400 mx-auto mb-2" />
        <span className="text-white text-sm">Reports</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-center">
        <MessageCircle className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
        <span className="text-white text-sm">Messages</span>
      </button>
    </div>
  )
}

export default function AllianceOS() {
  const { user } = useAuthStore()

  return (
    <CityBoyOSShell role="partner" title="Alliance OS">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Partner Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Partner'}</p>
      </div>

      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <ActivePartnerships />
        <ProjectSponsorships />
        <ROIReporting />
        <CampaignOpportunities />
        <CoBrandMediaGallery />
      </div>
    </CityBoyOSShell>
  )
}