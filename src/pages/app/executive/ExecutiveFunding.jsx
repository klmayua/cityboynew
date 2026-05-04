import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { 
  CreditCard, TrendingUp, DollarSign, CheckCircle, Clock,
  Filter, Search, ChevronRight, Plus
} from 'lucide-react'

function AllocationRow({ allocation }) {
  const statusColors = {
    pending: 'text-yellow-400',
    approved: 'text-emerald-400',
    declined: 'text-red-400',
  }

  return (
    <button className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div>
        <p className="text-white font-medium">{allocation.mission}</p>
        <p className="text-gray-400 text-sm">{allocation.allocated}</p>
      </div>
      <span className={`px-2 py-1 rounded text-xs ${statusColors[allocation.status]} bg-white/10`}>
        {allocation.status}
      </span>
    </button>
  )
}

function ExecutiveFunding() {
  const { allocations, approveFunding } = useCapitalStore()
  const setAllocations = useCapitalStore(s => s.setAllocations)
  const [filter, setFilter] = useState('all')

  const filtered = allocations.filter(a => filter === 'all' || a.status === filter)

  const handleApprove = (id) => {
    approveFunding(id)
  }

  return (
    <CityBoyOSShell role="executive" title="Funding">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Funding Approvals</h1>
        <p className="text-gray-400">Manage capital allocations</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Allocations</p>
          <p className="text-2xl font-bold text-white">{allocations.length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-yellow-500/30">
          <p className="text-gray-400 text-xs">Pending</p>
          <p className="text-2xl font-bold text-yellow-400">{allocations.filter(a => a.status === 'pending').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-emerald-500/30">
          <p className="text-gray-400 text-xs">Approved</p>
          <p className="text-2xl font-bold text-emerald-400">{allocations.filter(a => a.status === 'disbursed').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Value</p>
          <p className="text-2xl font-bold text-[#D4AF37]">₦1.7B</p>
        </div>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          {['all', 'pending', 'approved', 'declined'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${filter === f ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'}`}>
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(a => <AllocationRow key={a.id} allocation={a} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default ExecutiveFunding