import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { 
  CheckCircle, XCircle, Clock, Filter, Search, ChevronRight,
  DollarSign, TrendingUp
} from 'lucide-react'

function ApprovalCard({ approval, onApprove, onDecline }) {
  const statusColors = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    approved: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    declined: 'bg-red-500/20 text-red-400 border-red-500/30',
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <div>
          <p className="text-white font-medium">{approval.mission}</p>
          <p className="text-gray-400 text-sm">{approval.allocated}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {approval.status === 'pending' && (
          <>
            <button onClick={() => onApprove(approval.id)} className="cursor-pointer px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-xs rounded hover:bg-emerald-500/30">Approve</button>
            <button onClick={() => onDecline(approval.id)} className="cursor-pointer px-3 py-1.5 bg-red-500/20 text-red-400 text-xs rounded hover:bg-red-500/30">Decline</button>
          </>
        )}
        <span className={`px-2 py-1 rounded text-xs border ${statusColors[approval.status]}`}>{approval.status}</span>
      </div>
    </div>
  )
}

function ExecutiveApprovals() {
  const { allocations, approveFunding } = useCapitalStore()
  const setAllocations = useCapitalStore(s => s.setAllocations)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const approvalItems = allocations.filter(a => search === '' || a.mission.toLowerCase().includes(search.toLowerCase()))
  const filtered = filter === 'all' ? approvalItems : approvalItems.filter(a => a.status === filter)

  const handleApprove = (id) => approveFunding(id)
  const handleDecline = (id) => {
    setAllocations(allocations.map(a => a.id === id ? { ...a, status: 'declined' } : a))
  }

  const pendingCount = allocations.filter(a => a.status === 'pending').length

  return (
    <CityBoyOSShell role="executive" title="Approvals">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Approval Queue</h1>
        <p className="text-gray-400">Pending approvals requiring executive action</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Pending</p>
          <p className="text-2xl font-bold text-yellow-400">{pendingCount}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-emerald-500/30">
          <p className="text-gray-400 text-xs">Approved</p>
          <p className="text-2xl font-bold text-emerald-400">{allocations.filter(a => a.status === 'disbursed').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-red-500/30">
          <p className="text-gray-400 text-xs">Declined</p>
          <p className="text-2xl font-bold text-red-400">{allocations.filter(a => a.status === 'declined').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Value</p>
          <p className="text-2xl font-bold text-[#D4AF37]">₦1.7B</p>
        </div>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search approvals..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
          </div>
          <Filter className="w-4 h-4 text-gray-400" />
          {['all', 'pending', 'approved', 'declined'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${filter === f ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'}`}>
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(a => <ApprovalCard key={a.id} approval={a} onApprove={handleApprove} onDecline={handleDecline} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <CheckCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No approvals match your filter</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default ExecutiveApprovals