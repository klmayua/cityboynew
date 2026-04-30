import { useEffect, useState, useRef } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export default function PulseCard({ title, value, delta, trend = 'up', prefix = '', suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = typeof value === 'number' ? value : parseFloat(String(value).toFixed(0))
  const cardRef = useRef(null)

  useEffect(() => {
    if (!numericValue || isNaN(numericValue)) {
      setDisplayValue(0)
      return
    }
    
    const duration = 1200
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(numericValue * eased))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(numericValue)
      }
    }
    
    requestAnimationFrame(animate)
  }, [numericValue])

  const trendConfig = {
    up: { icon: TrendingUp, color: 'text-signal-green', bg: 'bg-signal-green/10', deltaColor: 'text-signal-green' },
    down: { icon: TrendingDown, color: 'text-signal-red', bg: 'bg-signal-red/10', deltaColor: 'text-signal-red' },
    stable: { icon: Minus, color: 'text-white/40', bg: 'bg-white/5', deltaColor: 'text-white/40' },
  }

  const TrendIcon = trendConfig[trend].icon
  const formattedValue = prefix 
    ? `${prefix}${displayValue.toLocaleString()}${suffix}`
    : displayValue.toLocaleString() + (suffix || '')

  return (
    <div 
      ref={cardRef}
      className="group relative rounded-3xl border border-white/[0.08] p-6 transition-all duration-300 hover:border-gold/40 hover:bg-surface/80 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] hover:-translate-y-0.5"
      style={{
        background: 'linear-gradient(135deg, rgba(11,22,40,0.8) 0%, rgba(16,32,56,0.6) 100%)',
        boxShadow: '0_4px 24px rgba(0,0,0,0.2)',
      }}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <p className="text-white/[0.50] text-xs font-semibold uppercase tracking-[0.12em] mb-3 relative z-10">
        {title}
      </p>
      
      <div className="flex items-end justify-between relative z-10">
        <p className="text-white text-3xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
          {formattedValue}
        </p>
        
        {delta && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trendConfig[trend].bg}`}>
            <TrendIcon className={`w-3.5 h-3.5 ${trendConfig[trend].deltaColor}`} />
            <span className={`text-xs font-semibold ${trendConfig[trend].deltaColor}`}>{delta}</span>
          </div>
        )}
      </div>
    </div>
  )
}