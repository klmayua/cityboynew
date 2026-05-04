import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Wallet, TrendingUp, DollarSign, Map, ChevronRight, 
  Plus, Search, BarChart3
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

function DonationCard({ donation }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/app/donor/portfolio?donation=${donation.id}`)}
      className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-medium">{donation.name}</p>
          <p className="text-gray-400 text-sm">{donation.level}</p>
        </div>
        <p className="text-[#D4AF37] font-semibold">{donation.totalDonated}</p>
      </div>
      <div className="mt-2 text-gray-500 text-xs">Last: {donation.lastDonation}</div>
    </button>
  )
}

function DonorDashboard() {
  const navigate = useNavigate()
  const { donors } = usePeopleStore()
  const { treasury, transactions } = useCapitalStore()
  const { missions } = useMissionStore()

  const totalDonated = donors.reduce((sum, d) => {
    const val = parseFloat(d.totalDonated.replace(/[₦MB]/g, ''))
    const mult = d.totalDonated.includes('B') ? 1000 : 1
    return sum + (val * mult)
  }, 0)

  return (
    <CityBoyOSShell role="donor" title="Donor Dashboard">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Donor Dashboard</h1>
        <p className="text-gray-400">Track your giving and impact</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Given" value={totalDonated >= 1000 ? `₦${(totalDonated/1000).toFixed(1)}B` : `₦${totalDonated}M`} icon={DollarSign} color="text-[#D4AF37]" />
        <StatCard label="Projects Funded" value={missions?.length || 0} icon={Map} color="text-blue-400" />
        <StatCard label="Impact Score" value="92" icon={TrendingUp} color="text-emerald-400" />
        <StatCard label="Active Allocations" value={transactions?.length || 0} icon={BarChart3} color="text-purple-400" />
      </div>

      <div className="glass-dark rounded-xl p-5 border border-white/10">
        <h3 className="text-white font-semibold mb-4">Your Donations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {donors.map(d => <DonationCard key={d.id} donation={d} />)}
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default DonorDashboard