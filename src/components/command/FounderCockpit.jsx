import { Crown, Users, TrendingUp, Zap, Shield, Activity, Target, Globe, Radio } from 'lucide-react'
import { useCapitalStore } from '../../store/capitalStore'
import { useMissionStore } from '../../store/missionStore'
import { usePeopleStore } from '../../store/peopleStore'
import { useIntelStore } from '../../store/intelStore'

export default function FounderCockpit(){
  const treasury = useCapitalStore(s => s.treasury.total)
  const missions = useMissionStore(s => s.missions)
  const volunteers = usePeopleStore(s => s.volunteers)
  const alerts = useIntelStore(s => s.alerts)
  const chapters = usePeopleStore(s => s.chapters)
  const sentiment = useIntelStore(s => s.sentiment.overall)

  const getNumeric = (str) => parseFloat(str?.replace(/₦/g, '').replace(/B/g, '').replace(/M/g, '') || '0')

  const kpis = [
    { icon: Users, label: 'Total Network', value: (volunteers.length * 1000).toLocaleString(), sub: '+12.4% mo', color: 'text-command-blue' },
    { icon: TrendingUp, label: 'Capital Deployed', value: treasury, sub: '57% deployed', color: 'text-capital-green' },
    { icon: Activity, label: 'Missions', value: missions.length, sub: missions.filter(m => m.status === 'active').length + ' active', color: 'text-signal-orange' },
    { icon: Globe, label: 'Chapters', value: chapters.length, sub: chapters.filter(c => c.status === 'active').length + ' active', color: 'text-oracle-purple' },
    { icon: Target, label: 'Approval', value: sentiment + '%', sub: '+3.2% forecast', color: 'text-prestige-gold' },
    { icon: Shield, label: 'Integrity', value: alerts.filter(a => !a.read).length + '', sub: 'pending alerts', color: 'text-command-blue' },
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
          <span className="text-command-blue font-semibold">{Math.round((volunteers.length / 548) * 100)}% Active</span>
        </div>
        <div className="mt-2 h-1.5 bg-yellow-300/10 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-300/80 rounded-full" style={{ width: Math.min(100, (volunteers.length / 548) * 100) + '%' }} />
        </div>
      </div>
    </section>
  )
}