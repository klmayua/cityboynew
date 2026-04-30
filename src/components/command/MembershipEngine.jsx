import { Users } from 'lucide-react'
import { usePeopleStore } from '../../store/peopleStore'

export default function MembershipEngine(){
  const total = usePeopleStore(s=>s.totalCitizens)

  return (
    <section className="rounded-3xl border border-indigo-400/10 bg-indigo-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Users className="w-4 h-4 text-indigo-300"/>
        <h3 className="text-white font-semibold">Membership Engine</h3>
      </div>

      <div className="text-5xl font-bold text-white">{total}</div>
      <div className="text-white/50 mt-2">Total Citizens</div>
    </section>
  )
}