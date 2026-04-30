import { useEffect, useState } from 'react'
import { Activity, Heart, Users, Droplets, TrendingUp, Radio } from 'lucide-react'

const tickerItems = [
  { icon: Heart, label: 'New Volunteer', value: '+42 Lagos', type: 'positive' },
  { icon: Droplets, label: 'Donation', value: '₦500K anonymous', type: 'neutral' },
  { icon: Users, label: 'Chapter Active', value: 'Abuja Metro', type: 'positive' },
  { icon: TrendingUp, label: 'Project Milestone', value: 'Clean Water 90%', type: 'positive' },
  { icon: Activity, label: 'Alerts', value: '2 new', type: 'warning' },
  { icon: Radio, label: 'Signal', value: 'All systems nominal', type: 'positive' },
]

export default function WarTicker({ variant = 'default' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const variantStyles = {
    default: { blur: 'blur(18px)', height: 'h-12' },
    warroom: { blur: 'blur(24px)', height: 'h-14' },
    reports: { blur: 'blur(14px)', height: 'h-11' },
  }

  const styles = variantStyles[variant] || variantStyles.default

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tickerItems.length)
    }, variant === 'warroom' ? 2500 : 3500)
    return () => clearInterval(interval)
  }, [variant])

  const item = tickerItems[activeIndex]

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
          {tickerItems.slice(0, 5).map((_, i) => (
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