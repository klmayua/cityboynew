import { useState, useEffect } from 'react'
import { AlertTriangle, Info, XCircle, Bell } from 'lucide-react'

const alertConfig = {
  critical: { 
    icon: XCircle, 
    color: 'text-signal-red', 
    bg: 'bg-signal-red/[0.08]', 
    border: 'border-signal-red/30',
    dot: 'bg-signal-red',
    label: 'Critical',
  },
  warning: { 
    icon: AlertTriangle, 
    color: 'text-gold', 
    bg: 'bg-gold/[0.08]', 
    border: 'border-gold/30',
    dot: 'bg-gold',
    label: 'Warning',
  },
  info: { 
    icon: Info, 
    color: 'text-secondary', 
    bg: 'bg-secondary/[0.08]', 
    border: 'border-secondary/30',
    dot: 'bg-secondary',
    label: 'Info',
  },
}

export default function AlertRail({ alerts }) {
  const [visibleAlerts, setVisibleAlerts] = useState(alerts)
  const [dismissed, setDismissed] = useState([])

  useEffect(() => {
    setVisibleAlerts(alerts.filter(a => !dismissed.includes(a.id)))
  }, [alerts, dismissed])

  return (
    <div 
      className="rounded-3xl border border-white/[0.08] p-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(11,22,40,0.9) 0%, rgba(16,32,56,0.7) 100%)',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-gold" />
          <h3 className="text-white text-lg font-semibold tracking-tight">Live Alerts</h3>
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-white/60">
          {visibleAlerts.length}
        </span>
      </div>

      <div className="space-y-2.5">
        {visibleAlerts.slice(0, 5).map((alert) => {
          const config = alertConfig[alert.type]
          const Icon = config.icon
          
          return (
            <div
              key={alert.id}
              className={`relative rounded-xl p-4 border ${config.border} ${config.bg} transition-all duration-300 hover:scale-[1.01]`}
            >
              <div className="flex items-start gap-3">
                <div className="relative mt-0.5">
                  <span className={`w-2 h-2 rounded-full ${config.dot} animate-pulse`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${config.color}`}>
                      {config.label}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/40 text-xs">{alert.time}</span>
                  </div>
                  <p className="text-white text-sm leading-relaxed">{alert.message}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {visibleAlerts.length === 0 && (
        <div className="text-center py-8">
          <span className="text-white/30 text-sm">No active alerts</span>
        </div>
      )}
    </div>
  )
}