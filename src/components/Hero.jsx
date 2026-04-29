import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, Users, DollarSign, MapPin, Star, Sparkles } from 'lucide-react'

const liveStats = [
  { value: '12,847', label: 'Active Volunteers', icon: Users },
  { value: '324', label: 'Projects Live', icon: TrendingUp },
  { value: '₦2.4B', label: 'Funds Deployed', icon: DollarSign },
  { value: '36', label: 'States Active', icon: MapPin },
]

const floatingCards = [
  { text: '+1,284 volunteers this week', time: '2h ago', highlight: true },
  { text: 'Lagos chapter just went live', time: '5h ago' },
  { text: '₦24m project funded', time: '1d ago' },
  { text: 'Project Nigeria trending #1', time: 'Now', live: true },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-prussian-dark via-prussian to-prussian-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-signal-green/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-5 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium text-soft-ivory">Nigeria's Civic Revolution Begins</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Building Trust.<br />
              <span className="text-gradient-gold">Driving Action.</span><br />
              Reimagining Nigeria.
            </h1>

            <p className="text-lg text-soft-ivory/80 max-w-lg mb-8 leading-relaxed">
              Join Nigeria's most dynamic civic movement. Together, we're building transparent systems, 
              amplifying positive stories, and mobilizing millions toward a better Nigeria.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/join" className="btn-gold inline-flex items-center gap-2">
                Join Arena
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/impact" className="btn-ghost inline-flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Our Story
              </Link>
            </div>

            <div className="flex flex-wrap gap-8">
              {liveStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <stat.icon className="w-4 h-4 text-signal-green" />
                    <span className="font-data text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-xs text-soft-ivory/60 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-[40px] blur-2xl" />
              <div className="relative glass-card rounded-[40px] p-8 h-full flex flex-col justify-center">
                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal-green/20 text-signal-green text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
                  Live Now
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-6">Arena Pulse</h3>
                
                <div className="space-y-4">
                  {floatingCards.map((card, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer ${
                        card.highlight 
                          ? 'bg-gold/10 border-gold/30' 
                          : card.live 
                            ? 'bg-signal-green/10 border-signal-green/30'
                            : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <p className="text-sm text-white font-medium">{card.text}</p>
                      <span className="text-xs text-soft-ivory/50 mt-1 block">{card.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-soft-ivory/60">Trust Score</span>
                    <span className="font-data font-bold text-gold">94.2%</span>
                  </div>
                  <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[94.2%] bg-gradient-to-r from-gold to-gold-light rounded-full" />
                  </div>
                </div>

                <button className="mt-6 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm text-soft-ivory">
                  <Sparkles className="w-4 h-4 text-gold" />
                  Ask AI Concierge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}