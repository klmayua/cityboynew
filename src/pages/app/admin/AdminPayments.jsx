import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { 
  DollarSign, TrendingUp, Search, Filter, ChevronRight,
  ArrowUpRight, ArrowDownRight
} from 'lucide-react'

function PaymentRow({ payment }) {
  const isIncoming = payment.type === 'inflow'
  
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
      <div>
        <p className="text-white font-medium">{payment.description}</p>
        <p className="text-gray-400 text-sm">{payment.date}</p>
      </div>
      <p className={`font-semibold ${isIncoming ? 'text-emerald-400' : 'text-red-400'}`}>
        {isIncoming ? '+' : '-'}{payment.amount}
      </p>
    </div>
  )
}

function AdminPayments() {
  const { transactions } = useCapitalStore()
  
  const payments = [
    { id: 1, type: 'inflow', description: 'Shell Petroleum - Q1', amount: '₦500M', date: '2026-04-15' },
    { id: 2, type: 'inflow', description: 'MTN Foundation', amount: '₦350M', date: '2026-04-10' },
    { id: 3, type: 'outflow', description: 'Kaduna Water Project', amount: '₦45M', date: '2026-04-08' },
  ]

  return (
    <CityBoyOSShell role="admin" title="Payments">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Payment Ledger</h1>
        <p className="text-gray-400">All financial transactions</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Received</p>
          <p className="text-2xl font-bold text-emerald-400">₦1.5B</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Disbursed</p>
          <p className="text-2xl font-bold text-red-400">₦850M</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Net</p>
          <p className="text-2xl font-bold text-[#D4AF37]">₦650M</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Transactions</p>
          <p className="text-2xl font-bold text-white">156</p>
        </div>
      </div>

      <div className="space-y-3">
        {payments.map(p => <PaymentRow key={p.id} payment={p} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default AdminPayments