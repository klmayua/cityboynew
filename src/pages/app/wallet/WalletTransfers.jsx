import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { 
  Wallet, ArrowUpRight, ArrowDownRight, Search, Filter, 
  Download, ChevronRight, Clock
} from 'lucide-react'

function TransferRow({ transfer }) {
  const isPositive = transfer.type !== 'debit'
  return (
    <button className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPositive ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
          {isPositive ? <ArrowUpRight className="w-5 h-5 text-emerald-400" /> : <ArrowDownRight className="w-5 h-5 text-red-400" />}
        </div>
        <div>
          <p className="text-white font-medium">{transfer.description}</p>
          <p className="text-gray-400 text-sm">{transfer.date}</p>
        </div>
      </div>
      <p className={`font-semibold ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
        {isPositive ? '+' : '-'}{transfer.amount}
      </p>
    </button>
  )
}

function WalletTransfers() {
  const { transactions } = useCapitalStore()
  const [search, setSearch] = useState('')
  
  const mockTransfers = [
    { id: 1, type: 'credit', description: 'Donation received', amount: '₦50,000', date: '2026-05-01' },
    { id: 2, type: 'debit', description: 'Chapter allocation', amount: '₦25,000', date: '2026-04-28' },
    { id: 3, type: 'credit', description: 'Referral bonus', amount: '₦10,000', date: '2026-04-25' },
  ]

  return (
    <CityBoyOSShell role="volunteer" title="Transfers">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Transfers</h1>
        <p className="text-gray-400">Transaction history</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search transfers..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
        </div>
      </div>

      <div className="space-y-3">
        {mockTransfers.map(t => <TransferRow key={t.id} transfer={t} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default WalletTransfers