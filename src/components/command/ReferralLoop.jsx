import { Share2 } from 'lucide-react'
import { usePeopleStore } from '../../store/peopleStore'

export default function ReferralLoop(){
  const referrals = usePeopleStore(s=>s.referrals)

  return (
    <section className="rounded-3xl border border-teal-400/10 bg-teal-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Share2 className="w-4 h-4 text-teal-300"/>
        <h3 className="text-white font-semibold">Referral Loop</h3>
      </div>

      <div className="text-5xl font-bold text-white">{referrals.length}</div>
      <div className="text-white/50 mt-2">Network Referrals</div>
    </section>
  )
}