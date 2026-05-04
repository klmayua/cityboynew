import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { 
  DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, ChevronRight
} from 'lucide-react'

function BudgetRow({ budget }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
      <div>
        <p className="text-white font-medium">{budget.category}</p>
        <p className="text-gray-400 text-sm">{budget.items} items</p>
      </div>
      <div className="text-right">
        <p className="text-[#D4AF37] font-semibold">{budget.allocated}</p>
        <p className="text-gray-500 text-xs">{budget.spent} spent</p>
      </div>
    </div>
  )
}

function ExecutiveBudgets() {
  const { treasury } = useCapitalStore()
  
  const budgets = [
    { id: 1, category: 'Operations', allocated: '₦2.5B', spent: '₦1.8B', items: 12 },
    { id: 2, category: 'Capital Projects', allocated: '₦4.2B', spent: '₦2.1B', items: 8 },
    { id: 3, category: 'Volunteer Support', allocated: '₦800M', spent: '₦450M', items: 24 },
    { id: 4, category: 'Administrative', allocated: '₦350M', spent: '₦180M', items: 6 },
  ]

  return (
    <CityBoyOSShell role="executive" title="Budgets">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Budget Allocation</h1>
        <p className="text-gray-400">FY 2026 budget overview</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Budget</p>
          <p className="text-2xl font-bold text-white">{treasury.total}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-emerald-500/30">
          <p className="text-gray-400 text-xs">Deployable</p>
          <p className="text-2xl font-bold text-emerald-400">{treasury.deployable}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-blue-500/30">
          <p className="text-gray-400 text-xs">Committed</p>
          <p className="text-2xl font-bold text-blue-400">{treasury.committed}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Reserved</p>
          <p className="text-2xl font-bold text-white">{treasury.reserved}</p>
        </div>
      </div>

      <div className="glass-dark rounded-xl p-5 border border-white/10">
        <h3 className="text-white font-semibold mb-4">Budget Categories</h3>
        <div className="space-y-3">
          {budgets.map(b => <BudgetRow key={b.id} budget={b} />)}
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default ExecutiveBudgets