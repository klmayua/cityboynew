import { CheckCircle2, AlertTriangle, Info, Bell } from 'lucide-react'
import { useSystemStore } from '../../store/systemStore'

const iconMap = {
  success: CheckCircle2,
  warning: AlertTriangle,
  info: Info,
}

export default function NotificationCenter() {
  const notifications = useSystemStore(s => s.notifications)
  const markNotificationRead = useSystemStore(s => s.markNotificationRead)
  const clearNotifications = useSystemStore(s => s.clearNotifications)

  const unread = notifications.filter(n => !n.read).length

  return (
    <div className="relative group">
      <button className="relative h-10 w-10 rounded-xl border border-white/[0.1] bg-white/[0.03] flex items-center justify-center hover:border-gold/30 transition-colors">
        <Bell className="w-4 h-4 text-white/[0.7]" />
        {unread > 0 && (
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-gold animate-pulse" />
        )}
      </button>

      <div className="absolute right-0 top-14 w-[380px] rounded-3xl border border-white/[0.1] bg-[#07111df2] backdrop-blur-xl overflow-hidden shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Notifications</span>
          {unread > 0 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-gold">{unread} new</span>
          )}
        </div>

        <div className="p-3 space-y-2 max-h-80 overflow-y-auto">
          {notifications.length === 0 && (
            <div className="px-4 py-8 text-center text-white/[0.4]">No notifications</div>
          )}
          {notifications.slice(0, 10).map((n) => {
            const Icon = iconMap[n.type] || Info
            return (
              <button
                key={n.id}
                onClick={() => markNotificationRead(n.id)}
                className={`w-full text-left rounded-2xl p-4 transition-colors ${
                  n.read ? 'hover:bg-white/[0.02]' : 'bg-white/[0.04] hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex gap-3">
                  <Icon className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <div>
                    <div className={`text-sm ${n.read ? 'text-white/[0.7]' : 'text-white'}`}>{n.message}</div>
                    <div className="text-xs text-white/[0.35] mt-1">{n.timestamp?.slice(11, 16)}</div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {notifications.length > 0 && (
          <div className="px-5 py-3 border-t border-white/[0.08]">
            <button 
              onClick={clearNotifications}
              className="text-xs text-white/[0.5] hover:text-white transition-colors"
            >
              Clear all notifications
            </button>
          </div>
        )}
      </div>
    </div>
  )
}