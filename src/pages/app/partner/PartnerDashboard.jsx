import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Building2, DollarSign, TrendingUp, MapPin, ChevronRight,
  Plus, Search, Filter, Calendar, Users
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

function SponsorRow({ sponsor, onClick }) {
  const navigate = useNavigate()
  const statusColors = {
    active: 'bg-emerald-500/20 text-emerald-400',
    pending: 'bg-yellow-500/20 text-yellow-400',
    expired: 'bg-gray-500/20 text-gray-400',
  }

  return (
    <button
      onClick={() => onClick(sponsor)}
      className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <p className="text-white font-medium">{sponsor.name}</p>
          <p className="text-gray-400 text-sm capitalize">{sponsor.type}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-[#D4AF37] font-medium">{sponsor.contribution}</p>
          <span className={`px-2 py-0.5 rounded text-xs ${statusColors[sponsor.status]}`}>
            {sponsor.status}
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </button>
  )
}

function PartnerDashboard() {
  const navigate = useNavigate()
  const { partners } = usePeopleStore()
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredPartners = partners.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const activePartners = partners.filter(p => p.status === 'approved')
  const totalContributions = activePartners.reduce((sum, p) => {
    const val = parseFloat(p.contribution.replace(/[₦MB]/g, ''))
    const mult = p.contribution.includes('B') ? 1000 : 1
    return sum + (val * mult)
  }, 0)

  return (
    <CityBoyOSShell role="partner" title="Partner Dashboard">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Partner Dashboard</h1>
        <p className="text-gray-400">Manage partnerships and sponsorships</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Partners" value={partners.length} icon={Building2} color="text-purple-400" />
        <StatCard label="Active" value={activePartners.length} icon={TrendingUp} color="text-emerald-400" />
        <StatCard label="Contributions" value={totalContributions >= 1000 ? `₦${(totalContributions/1000).toFixed(0)}B` : `₦${totalContributions}M`} icon={DollarSign} color="text-[#D4AF37]" />
        <StatCard label="Pending" value={partners.filter(p => p.status === 'pending').length} icon={Calendar} color="text-yellow-400" />
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search partners..."
              className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="cursor-pointer px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
          >
            <option value="all">All Status</option>
            <option value="approved">Active</option>
            <option value="pending">Pending</option>
            <option value="expired">Expired</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {filteredPartners.map(partner => (
          <SponsorRow 
            key={partner.id} 
            sponsor={partner} 
            onClick={(p) => navigate(`/app/partner/sponsorships?partner=${p.id}`)}
          />
        ))}
      </div>

      {filteredPartners.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No partners found</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default PartnerDashboard