import { Crown, Users, TrendingUp, Zap, Shield, Activity, Target, Globe, Radio } from 'lucide-react'
import { useCommandStore } from '../../store/commandStore'

export default function FounderCockpit(){
  const metrics = useCommandStore(s=>s.metrics)
  
  const kpis = [
    { icon: Users, label: 'Total Network', value: (metrics.members / 1000000).toFixed(2) + 'M', sub: '+12.4% mo', color: 'text-command-blue' },
    { icon: TrendingUp, label: 'Capital Deployed', value: '₦' + (metrics.capitalDeployed / 1000000000).toFixed(1) + 'B', sub: '57% deployed', color: 'text-capital-green' },
    { icon: Activity, label: 'Missions', value: metrics.missionsActive, sub: metrics.completionRate + '% success', color: 'text-signal-orange' },
    { icon: Globe, label: 'Chapters', value: metrics.chapters, sub: metrics.statesActive + ' states', color: 'text-oracle-purple' },
    { icon: Target, label: 'Approval', value: metrics.approvalProjection + '%', sub: '+3.2% forecast', color: 'text-prestige-gold' },
    { icon: Shield, label: 'Integrity', value: metrics.integrityScore + '', sub: 'audit score', color: 'text-command-blue' },
  ]

  return (
    <section className="rounded-3xl border border-yellow-300/10 bg-gradient-to-br from-yellow-300/[0.04] to-yellow-300/[0.01] p-4 md:p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-4">
        <Crown className="w-4 h-4 text-yellow-300"/>
        <h3 className="text-white font-semibold text-sm md:text-base">Founder Cockpit</h3>
        <span className="ml-auto text-[10px] text-yellow-300/60 uppercase tracking-wider">Live</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon
          return (
            <div key={i} className="rounded-2xl bg-yellow-300/[0.03] border border-yellow-300/10 p-2 md:p-3">
              <div className={`${kpi.color} mb-1`}>
                <Icon className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              <div className="text-white text-xs md:text-sm font-bold">{kpi.value}</div>
              <div className="text-white/40 text-[10px] md:text-xs">{kpi.label}</div>
              <div className="text-yellow-300/60 text-[9px] md:text-[10px] mt-1">{kpi.sub}</div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-yellow-300/10">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-white/50">Network Power</span>
          <span className="text-command-blue font-semibold">{((metrics.members / 548230) * 100).toFixed(0)}% Active</span>
        </div>
        <div className="mt-2 h-1.5 bg-yellow-300/10 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-300/80 rounded-full" style={{ width: '94%' }} />
        </div>
      </div>
    </section>
  )
}