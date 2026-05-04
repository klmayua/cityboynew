import { Plus, Download, Users, Briefcase, Radio } from 'lucide-react'
import { useCapitalStore } from '../../store/capitalStore'
import { useMissionStore } from '../../store/missionStore'
import { useSystemStore } from '../../store/systemStore'

const iconMap = {
  new: Plus,
  mobilize: Users,
  partner: Briefcase,
  broadcast: Radio,
  export: Download,
}

export default function QuickActionsRail() {
  const capitalStore = useCapitalStore(s => s)
  const missionStore = useMissionStore(s => s)
  const systemStore = useSystemStore(s => s)

  const actions = [
    { key: 'new', icon: Plus, label: 'New Project', store: missionStore },
    { key: 'mobilize', icon: Users, label: 'Mobilize', store: missionStore },
    { key: 'partner', icon: Briefcase, label: 'Partner', store: capitalStore },
    { key: 'broadcast', icon: Radio, label: 'Broadcast', store: systemStore },
    { key: 'export', icon: Download, label: 'Export', store: capitalStore },
  ]

  return (
    <div className="fixed right-6 bottom-6 z-[70] hidden lg:flex flex-col gap-3">
      {actions.map((a) => {
        const Icon = a.icon
        return (
          <button
            key={a.key}
            onClick={() => a.store.notify?.('info', a.label + ' triggered')}
            className="group h-12 px-4 rounded-2xl border border-gold/[0.2] bg-[#08111fdd] backdrop-blur-xl hover:border-gold/[0.5] transition-all flex items-center gap-3 shadow-xl"
          >
            <Icon className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-[140px] transition-all whitespace-nowrap text-sm text-white/[0.85]">
              {a.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}