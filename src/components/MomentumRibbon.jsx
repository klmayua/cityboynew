import { useEffect, useState } from 'react'
import { TrendingUp, Users, DollarSign, MapPin, Video, Heart, FolderKanban, Sparkles } from 'lucide-react'

const tickerItems = [
  { icon: Users, text: '12,847 Active Volunteers', value: '+847 this week' },
  { icon: DollarSign, text: '₦2.4B Funds Raised', value: '92% deployed' },
  { icon: FolderKanban, text: '324 Projects Live', value: '156 completed' },
  { icon: MapPin, text: '36 States Active', value: 'All regions' },
  { icon: Heart, text: '1.2M Stories Shared', value: '+50K this month' },
  { icon: Video, text: '847 Content Creators', value: 'Join the movement' },
  { icon: Sparkles, text: 'Project Nigeria Trending', value: '#1 Nationwide' },
  { icon: TrendingUp, text: 'Trust Score 94.2%', value: 'Best in sector' },
]

export default function MomentumRibbon() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev - 1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems]

  return (
    <section className="bg-slate-deep border-y border-white/5 overflow-hidden">
      <div className="flex" style={{ transform: `translateX(${offset}px)` }}>
        {duplicatedItems.map((item, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 px-8 py-4 flex items-center gap-4 border-r border-white/5"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-data font-semibold text-white text-sm">{item.text}</p>
              <p className="text-xs text-soft-ivory/50">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}