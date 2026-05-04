import { Bell, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'
import { useSystemStore } from '../../store/systemStore'

const typeConfig = {
  success: { icon: CheckCircle, color: 'text-capital-green', bg: 'bg-capital-green/10' },
  warning: { icon: AlertTriangle, color: 'text-signal-orange', bg: 'bg-signal-orange/10' },
  info: { icon: Info, color: 'text-command-blue', bg: 'bg-command-blue/10' },
  critical: { icon: AlertCircle, color: 'text-signal-red', bg: 'bg-signal-red/10' },
}

export default function LiveNotifications(){
  const notifications = useSystemStore(s => s.notifications)

  return (
    <section className="rounded-3xl border border-amber-300/10 bg-amber-300/[0.03] p-4 md:p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-4 h-4 text-amber-200 animate-pulse"/>
        <h3 className="text-white font-semibold text-sm md:text-base">
          Live Feed
        </h3>
        {notifications.length > 0 && (
          <span className="ml-auto text-[10px] bg-amber-300/20 text-amber-200 px-2 py-0.5 rounded-full">
            {notifications.length} active
          </span>
        )}
      </div>

      <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
        {(notifications.length ? notifications : [{message:'No alerts', type:'info'}]).slice(0, 8).map((n,i)=>{
          const config = typeConfig[n.type] || typeConfig.info
          const Icon = config.icon
          return (
            <div
              key={n.id || i}
              className={`rounded-xl ${config.bg} px-3 py-2.5 flex items-start gap-2`}
            >
              <Icon className={`w-3.5 h-3.5 ${config.color} mt-0.5 flex-shrink-0`} />
              <div>
                <div className="text-white text-xs font-medium leading-tight">
                  {n.message}
                </div>
                <div className="text-white/40 text-[10px] mt-1">
                  {n.timestamp?.slice(11, 16)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}