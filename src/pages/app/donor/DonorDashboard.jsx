import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { useSystemStore } from '../../../store/systemStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Wallet, TrendingUp, FileText, Map, MessageCircle, Download,
  DollarSign, Shield, ArrowRight, Calendar, Building2, Gift,
  ArrowUpRight, Globe, Users, Filter
} from 'lucide-react'

function DonationHistory() {
  const transactions = useCapitalStore(s => s.transactions) || []
  const recent = transactions.slice(0, 6)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-[#D4AF37]" />
        Contribution History
      </h3>
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {recent.map(tx => (
          <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm capitalize">{tx.type}</p>
              <p className="text-gray-500 text-xs">{tx.date}</p>
            </div>
            <span className="text-emerald-400 font-medium">{tx.amount}</span>
          </div>
        ))}
        {recent.length === 0 && (
          <p className="text-gray-500 text-center py-4">No contributions yet</p>
        )}
      </div>
    </div>
  )
}

function ImpactScorecard() {
  const missions = useMissionStore(s => s.missions) || []
  const kpis = deriveKPIs()

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        Impact Scorecard
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-2xl font-bold text-white">{missions.length}</p>
          <p className="text-gray-400 text-xs">Missions Funded</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-2xl font-bold text-emerald-400">{kpis?.missionSuccessRate || 0}%</p>
          <p className="text-gray-400 text-xs">Completion Rate</p>
        </div>
      </div>
      <button className="w-full mt-4 py-3 bg-[#D4AF37] text-black font-medium rounded-lg hover:bg-[#B8962E] flex items-center justify-center gap-2">
        <ArrowRight className="w-4 h-4" /> View Full Impact Report
      </button>
    </div>
  )
}

function SponsoredMissions() {
  const missions = useMissionStore(s => s.missions) || []
  const active = missions.filter(m => m.status === 'active').slice(0, 4)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Map className="w-4 h-4 text-[#D4AF37]" />
        Sponsored Missions
      </h3>
      <div className="space-y-3">
        {active.map(m => (
          <div key={m.id} className="p-3 rounded-lg bg-white/5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-white text-sm">{m.title}</p>
                <p className="text-gray-400 text-xs">{m.category}</p>
              </div>
              <span className="text-emerald-400 text-sm">{m.progress}%</span>
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
          <p className="text-gray-500 text-center py-4">No active missions</p>
        )}
      </div>
    </div>
  )
}

function GovernanceReports() {
  const reports = [
    { name: 'Q1 2026 Financial Statement', date: 'Mar 31, 2026', type: 'PDF' },
    { name: 'Treasury Audit Report', date: 'Mar 15, 2026', type: 'PDF' },
    { name: 'Partner Compliance Report', date: 'Feb 28, 2026', type: 'PDF' },
    { name: 'Impact Attribution Summary', date: 'Feb 15, 2026', type: 'XLS' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-blue-400" />
        Governance & Reports
      </h3>
      <div className="space-y-2">
        {reports.map((r, i) => (
          <button key={i} className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 text-left flex items-center justify-between">
            <div>
              <p className="text-white text-sm">{r.name}</p>
              <p className="text-gray-500 text-xs">{r.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-gray-400">{r.type}</span>
              <Download className="w-4 h-4 text-gray-400" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function SponsorshipRecommendations() {
  const recs = [
    { title: 'Kaduna Clean Water', impact: 'High', amount: '₦450M' },
    { title: 'Lagos Digital Hubs', impact: 'Medium', amount: '₦280M' },
    { title: 'Northern Agriculture', impact: 'High', amount: '₦620M' },
  ]

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Gift className="w-4 h-4 text-purple-400" />
        Sponsorship Recommendations
      </h3>
      <div className="space-y-3">
        {recs.map((r, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/5 hover:bg-white/10">
            <div className="flex justify-between mb-1">
              <p className="text-white text-sm">{r.title}</p>
              <span className="text-emerald-400 text-xs">{r.impact}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#D4AF37] font-medium">{r.amount}</span>
              <button className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs rounded hover:bg-[#D4AF37]/30">
                Sponsor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DonateCTA() {
  return (
    <div className="glass-dark rounded-xl p-5 border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
      <h3 className="text-white font-semibold mb-2">Make an Impact</h3>
      <p className="text-gray-400 text-sm mb-4">Your contribution powers national transformation.</p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {['₦50K', '₦100K', '₦500K'].map(amt => (
          <button key={amt} className="py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all">
            {amt}
          </button>
        ))}
      </div>
      <button className="w-full py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#B8962E]">
        Contribute Now
      </button>
    </div>
  )
}

export default function CapitalImpact() {
  const { user } = useAuthStore()

  return (
    <CityBoyOSShell role="donor" title="Capital Impact">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Capital Impact Dashboard</h1>
        <p className="text-gray-400">Welcome, {user?.name || 'Donor'}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DonationHistory />
          <SponsoredMissions />
          <GovernanceReports />
        </div>

        <div className="space-y-6">
          <ImpactScorecard />
          <SponsorshipRecommendations />
          <DonateCTA />
        </div>
      </div>
    </CityBoyOSShell>
  )
}