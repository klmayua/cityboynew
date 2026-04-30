import { Plus, Download, Users, Briefcase, Radio } from 'lucide-react'

const actions = [
  { icon: Plus, label: 'New Project', shortcut: '⌘N' },
  { icon: Users, label: 'Mobilize', shortcut: '⌘M' },
  { icon: Briefcase, label: 'Partner', shortcut: '⌘P' },
  { icon: Radio, label: 'Broadcast', shortcut: '⌘B' },
  { icon: Download, label: 'Export', shortcut: '⌘E' },
]

export default function QuickActionsRail() {
  return (
    <div className="fixed right-6 bottom-6 z-[70] hidden lg:flex flex-col gap-3">
      {actions.map((a) => {
        const Icon = a.icon
        return (
          <button
            key={a.label}
            className="group h-12 px-4 rounded-2xl border border-gold/[0.2] bg-[#08111fdd] backdrop-blur-xl hover:border-gold/[0.5] transition-all flex items-center gap-3 shadow-xl"
          >
            <Icon className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-[140px] transition-all whitespace-nowrap text-sm text-white/[0.85]">
              {a.label}
            </span>
            <span className="text-[10px] text-white/30 ml-auto">{a.shortcut}</span>
          </button>
        )
      })}
    </div>
  )
}