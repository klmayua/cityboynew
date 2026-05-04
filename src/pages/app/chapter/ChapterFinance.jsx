import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { 
  DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight,
  PieChart, BarChart3, Download, Filter
} from 'lucide-react'

function StatBox({ label, value, change, trend }) {
  return (
    <div className="glass-dark rounded-xl p-4 border border-white/10">
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
      {change && (
        <div className={`flex items-center gap-1 text-xs ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      )}
    </div>
  )
}

function TransactionRow({ tx }) {
  const isInflow = tx.type === 'donation' || tx.type === 'grant'
  return (
    <div className="flex items-center justify-between p-3 border-b border-white/5">
      <div>
        <p className="text-white text-sm">{tx.source || tx.mission}</p>
        <p className="text-gray-500 text-xs">{tx.date}</p>
      </div>
      <span className={isInflow ? 'text-emerald-400' : 'text-red-400'}>
        {isInflow ? '+' : '-'}{tx.amount}
      </span>
    </div>
  )
}

function ChapterFinance() {
  const { treasury, transactions, allocations } = useCapitalStore()
  
  const localTotal = '₦45M'
  const localSpent = '₦12M'
  const localRemaining = '₦33M'

  return (
    <CityBoyOSShell role="chapter" title="Finance">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Chapter Finance</h1>
        <p className="text-gray-400">Local treasury and financial tracking</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatBox label="Chapter Budget" value={localTotal} change="+₦5M" trend="up" />
        <StatBox label="Spent" value={localSpent} />
        <StatBox label="Remaining" value={localRemaining} />
        <StatBox label="Allocations" value={allocations.length} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4">Recent Transactions</h3>
          <div className="divide-y divide-white/5">
            {transactions.slice(0, 6).map(tx => <TransactionRow key={tx.id} tx={tx} />)}
          </div>
        </div>
        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4">Allocation Status</h3>
          <div className="space-y-3">
            {allocations.slice(0, 5).map(a => (
              <div key={a.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div><p className="text-white text-sm">{a.mission}</p><p className="text-gray-500 text-xs">{a.status}</p></div>
                <p className="text-[#D4AF37]">{a.allocated}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default ChapterFinance