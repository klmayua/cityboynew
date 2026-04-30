import { Landmark } from 'lucide-react'
import { useRevenueStore } from '../../store/revenueStore'

export default function RevenuePanel(){
  const revenue=useRevenueStore(s=>s.monthlyRevenue)

  return (
    <section className="rounded-3xl border border-emerald-300/10 bg-emerald-300/[0.03] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Landmark className="w-4 h-4 text-emerald-200"/>
        <h3 className="text-white font-semibold">
          Revenue
        </h3>
      </div>

      <div className="text-5xl font-bold text-white">
        ₦{revenue.toLocaleString()}
      </div>

      <div className="text-white/50 mt-2">
        Monthly Flow
      </div>
    </section>
  )
}