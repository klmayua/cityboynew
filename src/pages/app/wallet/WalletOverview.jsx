import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { 
  Wallet, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  DollarSign, CreditCard, BarChart3, PieChart, Activity,
  Clock, CheckCircle, XCircle, Filter, Download, Search,
  ArrowRight, Building2, Users, MapPin, Calendar
} from 'lucide-react'

function BalanceCard({ title, value, subtitle, icon: Icon, color, trend }) {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm">{title}</p>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      {subtitle && (
        <div className={`flex items-center gap-1 text-xs ${trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-gray-500'}`}>
          {trend === 'up' && <ArrowUpRight className="w-3 h-3" />}
          {trend === 'down' && <ArrowDownRight className="w-3 h-3" />}
          {subtitle}
        </div>
      )}
    </div>
  )
}

function TransactionRow({ transaction }) {
  const typeStyles = {
    inflow: { icon: ArrowUpRight, color: 'text-emerald-400', sign: '+' },
    outflow: { icon: ArrowDownRight, color: 'text-red-400', sign: '-' },
    disbursement: { icon: ArrowDownRight, color: 'text-red-400', sign: '-' },
    donation: { icon: ArrowUpRight, color: 'text-emerald-400', sign: '+' },
    grant: { icon: ArrowUpRight, color: 'text-blue-400', sign: '+' },
  }
  const style = typeStyles[transaction.type] || typeStyles.inflow
  const TypeIcon = style.icon

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all cursor-pointer">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center`}>
          <TypeIcon className={`w-5 h-5 ${style.color}`} />
        </div>
        <div>
          <p className="text-white font-medium">{transaction.mission || transaction.source || transaction.type}</p>
          <p className="text-gray-400 text-xs">{new Date(transaction.date).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-semibold ${style.color}`}>{style.sign}{transaction.amount}</p>
        <p className="text-gray-500 text-xs capitalize">{transaction.status}</p>
      </div>
    </div>
  )
}

function AllocationItem({ allocation }) {
  const statusColors = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    approved: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    disbursed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    completed: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
      <div className="flex-1">
        <p className="text-white font-medium">{allocation.mission}</p>
        <div className="flex items-center gap-2 mt-1">
          <MapPin className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400 text-xs">Nigeria</span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[#D4AF37] font-semibold">{allocation.allocated}</p>
        <span className={`px-2 py-0.5 rounded text-xs border ${statusColors[allocation.status]}`}>
          {allocation.status}
        </span>
      </div>
    </div>
  )
}

function WalletOverview() {
  const navigate = useNavigate()
  const { treasury, allocations, transactions, revenueStreams } = useCapitalStore()
  const [activeTab, setActiveTab] = useState('overview')

  const parseValue = (str) => {
    if (!str) return 0
    const clean = str.replace(/₦/g, '').replace(/,/g, '')
    if (clean.includes('B')) return parseFloat(clean) * 1000
    if (clean.includes('M')) return parseFloat(clean)
    return parseFloat(clean)
  }

  const formatValue = (num) => {
    if (num >= 1000) return `₦${(num / 1000).toFixed(1)}B`
    return `₦${Math.round(num)}M`
  }

  const totalInflow = transactions
    .filter(t => t.type === 'donation' || t.type === 'grant')
    .reduce((sum, t) => sum + parseValue(t.amount), 0)

  const totalOutflow = transactions
    .filter(t => t.type === 'disbursement')
    .reduce((sum, t) => sum + parseValue(t.amount), 0)

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'allocations', label: 'Allocations' },
  ]

  return (
    <CityBoyOSShell role="leadership" title="Treasury">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Treasury</h1>
        <p className="text-gray-400">Capital management and financial oversight</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <BalanceCard 
          title="Total Treasury" 
          value={treasury.total} 
          icon={Wallet}
          color="text-[#D4AF37]"
          subtitle="+12% from last quarter"
          trend="up"
        />
        <BalanceCard 
          title="Deployable" 
          value={treasury.deployable} 
          icon={DollarSign}
          color="text-emerald-400"
          subtitle="Available for allocation"
        />
        <BalanceCard 
          title="Committed" 
          value={treasury.committed} 
          icon={BarChart3}
          color="text-blue-400"
          subtitle="Active allocations"
        />
        <BalanceCard 
          title="Net Flow" 
          value={formatValue(totalInflow - totalOutflow)} 
          icon={TrendingUp}
          color="text-emerald-400"
          subtitle={`+${formatValue(totalInflow)} inflow`}
          trend="up"
        />
      </div>

      <div className="glass-dark rounded-xl border border-white/10 mb-6">
        <div className="flex border-b border-white/10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-5">
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Revenue Streams
                </h3>
                <div className="space-y-3">
                  {revenueStreams.map(stream => (
                    <div key={stream.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm">{stream.name}</p>
                          <p className="text-gray-500 text-xs capitalize">{stream.status}</p>
                        </div>
                      </div>
                      <p className="text-[#D4AF37] font-medium">{stream.monthly}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-[#D4AF37]" />
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-gray-400">Total Transactions</span>
                    <span className="text-white font-medium">{transactions.length}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-gray-400">Active Allocations</span>
                    <span className="text-white font-medium">{allocations.length}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-gray-400">Revenue Streams</span>
                    <span className="text-white font-medium">{revenueStreams.length}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="space-y-3">
              {transactions.slice(0, 10).map(tx => (
                <TransactionRow key={tx.id} transaction={tx} />
              ))}
              {transactions.length === 0 && (
                <p className="text-gray-500 text-center py-8">No transactions</p>
              )}
            </div>
          )}

          {activeTab === 'allocations' && (
            <div className="space-y-3">
              {allocations.map(alloc => (
                <AllocationItem key={alloc.id} allocation={alloc} />
              ))}
              {allocations.length === 0 && (
                <p className="text-gray-500 text-center py-8">No allocations</p>
              )}
            </div>
          )}
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default WalletOverview