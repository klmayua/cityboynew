import OperatingSystemShell from '../../../layouts/OperatingSystemShell'
import { useAuthStore } from '../../../store/authStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { Wallet, TrendingUp, FileText, Map, MessageSquare } from 'lucide-react'

function DonationHistory() {
  const donors = usePeopleStore(s => s.donors) || []
  const transactions = useCapitalStore(s => s.transactions) || []

  const recent = transactions.slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Wallet className="w-4 h-4 text-[#D4AF37]" />
        Contribution History
      </h3>
      <div className="space-y-3">
        {recent.map(tx => (
          <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm">{tx.type || 'Transaction'}</p>
              <p className="text-gray-400 text-xs">{tx.date}</p>
            </div>
            <span className="text-emerald-400 font-medium">{tx.amount || '₦0'}</span>
          </div>
        ))}
        {recent.length === 0 && (
          <p className="text-gray-500 text-center py-4">No transactions</p>
        )}
      </div>
    </div>
  )
}

function ImpactScorecard() {
  const missions = useMissionStore(s => s.missions) || []
  const totalFunded = missions.reduce((sum, m) => sum + (parseInt(m.funded?.replace(/[^\d]/g, '')) || 0), 0)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        Impact Scorecard
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Missions Funded</p>
          <p className="text-xl font-bold text-white">{missions.length}</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-white/5">
          <p className="text-gray-400 text-xs">Total Impact</p>
          <p className="text-xl font-bold text-emerald-400">₦{totalFunded}M</p>
        </div>
      </div>
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
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white text-sm">{m.title}</p>
                <p className="text-gray-400 text-xs">{m.category}</p>
              </div>
              <span className="text-emerald-400 text-sm">{m.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${m.progress}%` }} />
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

function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
        <Wallet className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
        <span className="text-white text-sm">Contribute</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
        <FileText className="w-6 h-6 text-blue-400 mx-auto mb-2" />
        <span className="text-white text-sm">Receipts</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
        <MessageSquare className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
        <span className="text-white text-sm">Messages</span>
      </button>
    </div>
  )
}

export default function DonorDashboard() {
  const { user } = useAuthStore()

  return (
    <OperatingSystemShell role="donor">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Donor Dashboard</h1>
        <p className="text-gray-400">Welcome back, {user?.name || 'Donor'}</p>
      </div>

      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <DonationHistory />
        <ImpactScorecard />
        <SponsoredMissions />
      </div>
    </OperatingSystemShell>
  )
}