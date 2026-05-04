import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Wallet, DollarSign, TrendingUp, Map, ChevronRight, 
  Calendar, BarChart3
} from 'lucide-react'

function AllocationCard({ allocation }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="flex items-start justify-between">
        <div><p className="text-white font-medium">{allocation.mission}</p><p className="text-gray-400 text-sm">{allocation.status}</p></div>
        <p className="text-[#D4AF37] font-semibold">{allocation.allocated}</p>
      </div>
    </div>
  )
}

function DonorPortfolio() {
  const { allocations } = useCapitalStore()
  const { donors } = usePeopleStore()
  return (
    <CityBoyOSShell role="donor" title="Portfolio">
      <div className="mb-6"><h1 className="text-2xl text-white font-semibold">Your Portfolio</h1><p className="text-gray-400">Track your donations and impact</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allocations.map(a => <AllocationCard key={a.id} allocation={a} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default DonorPortfolio