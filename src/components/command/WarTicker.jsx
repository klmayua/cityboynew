import { useEffect, useState } from 'react'
import { Activity, Heart, Users, Droplets, TrendingUp, Radio, DollarSign, Target } from 'lucide-react'
import { useSystemStore } from '../../store/systemStore'

const iconMap = {
  donation_received: DollarSign,
  mission_completed: Target,
  volunteer_assigned: Users,
  funding_approved: DollarSign,
  notification: Activity,
  default: Activity
}

export default function WarTicker({ variant = 'default' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activityFeed = useSystemStore(s => s.activityFeed)
  const notifications = useSystemStore(s => s.notifications)

  const variantStyles = {
    default: { blur: 'blur(18px)', height: 'h-12' },
    warroom: { blur: 'blur(24px)', height: 'h-14' },
    reports: { blur: 'blur(14px)', height: 'h-11' },
  }

  const styles = variantStyles[variant] || variantStyles.default

  const allItems = [
    ...notifications.filter(n => !n.read).map(n => ({
      icon: Activity,
      label: 'Alert',
      value: n.message?.slice(0, 30),
      type: n.type === 'warning' ? 'warning' : 'positive'
    })),
    ...activityFeed.slice(0, 5).map(a => {
      const Icon = iconMap[a.action] || iconMap.default
      return {
        icon: Icon,
        label: a.action.replace('_', ' '),
        value: a.target || a.actor,
        type: a.action.includes('completed') ? 'positive' : 'neutral'
      }
    })
  ]

  const displayItems = allItems.length > 0 ? allItems : [
    { icon: Activity, label: 'Systems', value: 'Nominal', type: 'positive' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayItems.length)
    }, variant === 'warroom' ? 2500 : 3500)
    return () => clearInterval(interval)
  }, [variant, displayItems.length])

  const item = displayItems[activeIndex]

  return (
    <div className="sticky top-0 z-[60] border-b border-white/8">
      <div 
        className={`${styles.height} flex items-center px-6 gap-4 overflow-hidden`}
        style={{
          background: 'linear-gradient(90deg, rgba(212,175,55,0.06) 0%, rgba(2,6,13,0.95) 30%, rgba(2,6,13,0.95) 70%, rgba(26,115,232,0.06) 100%)',
          backdropFilter: styles.blur,
          WebkitBackdropFilter: styles.blur,
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-green"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">Live</span>
        </div>
        
        <div className="h-5 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-xs uppercase tracking-[0.12em]">Update</span>
          <span className="text-white/60 text-lg">•</span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div 
            key={activeIndex} 
            className="flex items-center gap-3"
            style={{
              animation: 'fadeIn 0.3s ease-out',
            }}
          >
            <item.icon 
              className={`w-4 h-4 flex-shrink-0 ${
                item.type === 'positive' 
                  ? 'text-signal-green' 
                  : item.type === 'warning' 
                  ? 'text-gold' 
                  : 'text-secondary'
              }`} 
            />
            <span className="text-white/50 text-sm font-medium tracking-wide">{item.label}</span>
            <span className="text-white font-semibold tracking-tight">{item.value}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {displayItems.slice(0, 5).map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-gold' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}