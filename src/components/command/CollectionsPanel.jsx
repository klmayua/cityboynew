import { Wallet } from 'lucide-react'
import { useRevenueStore } from '../../store/revenueStore'

export default function CollectionsPanel(){
  const invoices=useRevenueStore(s=>s.invoices)

  return (
    <section className="rounded-3xl border border-amber-300/10 bg-amber-300/[0.03] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Wallet className="w-4 h-4 text-amber-200"/>
        <h3 className="text-white font-semibold">
          Collections
        </h3>
      </div>

      <div className="text-5xl font-bold text-white">
        {invoices.length}
      </div>

      <div className="text-white/50 mt-2">
        Open Invoices
      </div>
    </section>
  )
}