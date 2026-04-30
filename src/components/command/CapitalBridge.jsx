import { Landmark, TrendingUp, Users, Building, Wallet, ArrowUpRight } from 'lucide-react'
import { useCapitalStore } from '../../store/capitalStore'

export default function CapitalBridge(){
  const { treasury, deployable, monthlyRunRate, revenueStreams, investors } = useCapitalStore()
  
  return (
    <section className="rounded-3xl border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.04] to-emerald-400/[0.01] p-4 md:p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-4">
        <Landmark className="w-4 h-4 text-emerald-300"/>
        <h3 className="text-white font-semibold text-sm md:text-base">Capital Command</h3>
        <span className="ml-auto text-[10px] text-emerald-300/60 uppercase tracking-wider flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
        <div className="rounded-2xl bg-emerald-300/[0.06] border border-emerald-300/10 p-3">
          <div className="text-white/50 text-[10px] mb-1">Treasury</div>
          <div className="text-white text-xl md:text-2xl font-bold">₦{(treasury / 1000000000).toFixed(1)}B</div>
        </div>
        <div className="rounded-2xl bg-emerald-300/[0.06] border border-emerald-300/10 p-3">
          <div className="text-white/50 text-[10px] mb-1">Deployable</div>
          <div className="text-white text-xl md:text-2xl font-bold">₦{(deployable / 1000000000).toFixed(1)}B</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/50">Revenue Streams</span>
          <span className="text-emerald-300">{revenueStreams.length} active</span>
        </div>
        {revenueStreams.slice(0, 4).map(s => (
          <div key={s.id} className="rounded-xl bg-emerald-300/[0.03] border border-emerald-300/10 px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {s.id === 'institutional' && <Building className="w-3.5 h-3.5 text-emerald-300" />}
              {s.id === 'whale' && <Users className="w-3.5 h-3.5 text-prestige-gold" />}
              {s.id === 'recurring' && <Wallet className="w-3.5 h-3.5 text-command-blue" />}
              <span className="text-white text-xs">{s.name}</span>
            </div>
            <div className="text-white text-xs font-semibold">₦{(s.value / 1000000).toFixed(0)}M</div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-emerald-300/10">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-white/50">Monthly Run Rate</span>
          <span className="text-emerald-300 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            ₦{(monthlyRunRate / 1000000).toFixed(0)}M
          </span>
        </div>
      </div>
    </section>
  )
}