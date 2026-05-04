import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { 
  DollarSign, TrendingUp, TrendingDown, Clock, CheckCircle, XCircle,
  Filter, Download, Plus, ChevronRight, Wallet, BarChart3,
  ArrowUpRight, ArrowDownRight, Building2, Users, MapPin
} from 'lucide-react'

function FundingCard({ title, value, subtitle, icon: Icon, color, trend }) {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-400 text-sm">{title}</p>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      {subtitle && (
        <div className={`flex items-center gap-1 text-xs ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {subtitle}
        </div>
      )}
    </div>
  )
}

function AllocationRow({ allocation, onApprove, onDecline }) {
  const statusStyles = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    approved: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    declined: 'bg-red-500/20 text-red-400 border-red-500/30',
    disbursed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    partial: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="flex-1">
        <p className="text-white font-medium">{allocation.mission}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[#D4AF37] font-semibold">{allocation.allocated}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400 text-sm capitalize">{allocation.status}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {allocation.status === 'pending' && (
          <>
            <button 
              onClick={() => onApprove(allocation.id)}
              className="cursor-pointer px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-xs rounded hover:bg-emerald-500/30"
            >
              Approve
            </button>
            <button 
              onClick={() => onDecline(allocation.id)}
              className="cursor-pointer px-3 py-1.5 bg-red-500/20 text-red-400 text-xs rounded hover:bg-red-500/30"
            >
              Decline
            </button>
          </>
        )}
        <span className={`px-2 py-1 rounded text-xs border ${statusStyles[allocation.status]}`}>
          {allocation.status}
        </span>
      </div>
    </div>
  )
}

function TransactionRow({ transaction }) {
  const typeIcons = {
    disbursement: ArrowDownRight,
    donation: ArrowUpRight,
    grant: ArrowUpRight,
  }

  const typeColors = {
    disbursement: 'text-red-400',
    donation: 'text-emerald-400',
    grant: 'text-blue-400',
  }

  const TypeIcon = typeIcons[transaction.type] || DollarSign

  return (
    <div className="flex items-center justify-between p-3 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center`}>
          <TypeIcon className={`w-4 h-4 ${typeColors[transaction.type]}`} />
        </div>
        <div>
          <p className="text-white text-sm">{transaction.mission || transaction.source}</p>
          <p className="text-gray-500 text-xs capitalize">{transaction.type}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-white font-medium ${typeColors[transaction.type]}`}>
          {transaction.type === 'disbursement' ? '-' : '+'}{transaction.amount}
        </p>
        <p className="text-gray-500 text-xs">{transaction.date}</p>
      </div>
    </div>
  )
}

function RevenueStreamCard({ stream }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <p className="text-white font-medium">{stream.name}</p>
          <p className="text-gray-400 text-xs capitalize">{stream.status}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[#D4AF37] font-semibold">{stream.monthly}</p>
        <p className="text-gray-500 text-xs">/month</p>
      </div>
    </div>
  )
}

function ExecutiveFunding() {
  const navigate = useNavigate()
  const { treasury, allocations, transactions, revenueStreams, approveFunding } = useCapitalStore()
  const setAllocations = useCapitalStore(s => s.setAllocations)
  const [filter, setFilter] = useState('all')
  const [showNewRequest, setShowNewRequest] = useState(false)

  const filteredAllocations = allocations.filter(a => 
    filter === 'all' || a.status === filter
  )

  const handleApprove = (id) => {
    approveFunding(id)
  }

  const handleDecline = (id) => {
    setAllocations(allocations.map(a => 
      a.id === id ? { ...a, status: 'declined' } : a
    ))
  }

  const pendingCount = allocations.filter(a => a.status === 'pending').length
  const totalDisbursed = allocations
    .filter(a => a.status === 'disbursed' || a.status === 'partial')
    .reduce((sum, a) => {
      const val = parseFloat(a.allocated.replace(/[₦M]/g, ''))
      return sum + (a.allocated.includes('B') ? val * 1000 : val)
    }, 0)

  return (
    <CityBoyOSShell role="leadership" title="Funding">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Funding & Treasury</h1>
        <p className="text-gray-400">Manage allocations, disbursements, and capital flow</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <FundingCard 
          title="Total Treasury" 
          value={treasury.total} 
          icon={Wallet} 
          color="text-[#D4AF37]"
          subtitle="+12% this quarter"
          trend="up"
        />
        <FundingCard 
          title="Deployable" 
          value={treasury.deployable} 
          icon={DollarSign} 
          color="text-emerald-400"
          subtitle="Available for allocation"
        />
        <FundingCard 
          title="Committed" 
          value={treasury.committed} 
          icon={TrendingUp} 
          color="text-blue-400"
        />
        <FundingCard 
          title="Pending Approval" 
          value={pendingCount} 
          icon={Clock} 
          color="text-yellow-400"
          subtitle="requests waiting"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-dark rounded-xl p-5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
                Allocation Requests
              </h3>
              <button 
                onClick={() => setShowNewRequest(!showNewRequest)}
                className="cursor-pointer flex items-center gap-1 px-3 py-1.5 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg"
              >
                <Plus className="w-4 h-4" />
                New Request
              </button>
            </div>
            
            <div className="flex gap-2 mb-4">
              <button 
                onClick={() => setFilter('all')}
                className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${
                  filter === 'all' ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('pending')}
                className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${
                  filter === 'pending' ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'
                }`}
              >
                Pending
              </button>
              <button 
                onClick={() => setFilter('disbursed')}
                className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${
                  filter === 'disbursed' ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'
                }`}
              >
                Disbursed
              </button>
              <button 
                onClick={() => setFilter('declined')}
                className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${
                  filter === 'declined' ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'
                }`}
              >
                Declined
              </button>
            </div>

            <div className="space-y-3">
              {filteredAllocations.map(allocation => (
                <AllocationRow 
                  key={allocation.id} 
                  allocation={allocation}
                  onApprove={handleApprove}
                  onDecline={handleDecline}
                />
              ))}
            </div>
          </div>

          <div className="glass-dark rounded-xl p-5 border border-white/10">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <ArrowDownRight className="w-4 h-4 text-red-400" />
              Recent Transactions
            </h3>
            <div className="divide-y divide-white/5">
              {transactions.slice(0, 6).map(tx => (
                <TransactionRow key={tx.id} transaction={tx} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-dark rounded-xl p-5 border border-white/10">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Revenue Streams
            </h3>
            <div className="space-y-3">
              {revenueStreams.map(stream => (
                <RevenueStreamCard key={stream.id} stream={stream} />
              ))}
            </div>
          </div>

          <div className="glass-dark rounded-xl p-5 border border-white/10">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#D4AF37]" />
              Quick Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Total Disbursed</span>
                <span className="text-white font-medium">₦{(totalDisbursed / 1000).toFixed(1)}B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Active Allocations</span>
                <span className="text-white font-medium">{allocations.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Donors</span>
                <span className="text-white font-medium">{revenueStreams.filter(s => s.status === 'active').length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default ExecutiveFunding