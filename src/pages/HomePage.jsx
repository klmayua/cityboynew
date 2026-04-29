import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, Users, DollarSign, MapPin, Star, Sparkles } from 'lucide-react'
import { ArenaButton } from '../components/ArenaButton'
import { ArenaMetric } from '../components/ArenaMetric'
import { ArenaCard } from '../components/ArenaCard'

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

const tickerItems = [
  '★ ₦1.2B TOTAL IMPACT FUND',
  '• 36 STATES ACTIVE',
  '• 124,000 VOLUNTEERS',
  '• 45 CAMPAIGNS LIVE',
  '★ 8,500 DIASPORA MEMBERS',
  '• 12 PROJECTS COMPLETED THIS WEEK',
]

export const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Arena */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#001B2E] via-[#003153] to-[#001B2E] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0E9F6E]/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-[1320px] mx-auto px-5 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E9F6E]/20 border border-[#0E9F6E]/30 mb-6">
                <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-sm font-medium text-[#FAF8F2]">LIVE: National Mobilization</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Organize Hope.<br />
                <span className="text-[#D4AF37]">Build Nigeria.</span>
              </h1>

              <p className="text-lg text-[#FAF8F2]/80 max-w-lg mb-8 leading-relaxed">
                The digital command centre for positive civic participation. 
                Track impact, join the movement, and help shape the national narrative.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ArenaButton variant="gold" size="large">
                  <Link to="/join" className="flex items-center gap-2">
                    Join Arena <ArrowRight className="w-5 h-5" />
                  </Link>
                </ArenaButton>
                <ArenaButton variant="ghost" size="large">
                  <Play className="w-5 h-5 mr-2" /> Watch Vision
                </ArenaButton>
              </div>

              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                {liveStats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <stat.icon className="w-4 h-4 text-[#0E9F6E]" />
                      <span className="font-data text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <span className="text-xs text-[#FAF8F2]/60 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-[40px] blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur-md rounded-[40px] p-8 h-full flex flex-col justify-center border border-white/10">
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E9F6E]/20 text-[#0E9F6E] text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#0E9F6E] animate-pulse" />
                    Live Now
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-6">National Pulse</h3>
                  
                  <div className="space-y-4">
                    {floatingCards.map((card, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer ${
                          card.highlight 
                            ? 'bg-[#D4AF37]/10 border-[#D4AF37]/30' 
                            : card.live 
                              ? 'bg-[#0E9F6E]/10 border-[#0E9F6E]/30'
                              : 'bg-white/5 border-white/10'
                        }`}
                      >
                        <p className="text-sm text-white font-medium">{card.text}</p>
                        <span className="text-xs text-[#FAF8F2]/50 mt-1 block">{card.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#FAF8F2]/60">Trust Score</span>
                      <span className="font-data font-bold text-[#D4AF37]">94.2%</span>
                    </div>
                    <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[94.2%] bg-gradient-to-r from-[#D4AF37] to-[#F0D060] rounded-full" />
                    </div>
                  </div>

                  <button className="mt-6 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm text-[#FAF8F2]">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    Ask AI Concierge
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Momentum Ribbon */}
      <div className="bg-[#0F172A] border-y border-white/5 overflow-hidden">
        <div className="flex animate-pulse">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex whitespace-nowrap py-4">
              {tickerItems.map((item, idx) => (
                <span key={idx} className="px-8 font-display font-semibold text-[#D4AF37] tracking-wider">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Project Nigeria Block */}
      <section className="py-20 bg-[#FAF8F2]">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-[#003153] mb-4">Project Nigeria</h2>
            <p className="text-lg text-[#5B6B7A]">Real stories of impact, transparently tracked.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ArenaCard interactive>
              <div className="h-48 bg-[#0F172A] flex items-center justify-center rounded-t-2xl">
                <span className="text-white/50 font-display">Kano Solar Initiative</span>
              </div>
              <div className="p-6">
                <div className="text-[#0E9F6E] text-xs font-semibold uppercase tracking-wider mb-2">100% Funded • Live</div>
                <h3 className="font-display text-xl font-bold text-[#003153] mb-2">Powering 50 Schools</h3>
                <p className="text-[#5B6B7A] text-sm">Clean energy deployment completed ahead of schedule by local chapters.</p>
              </div>
            </ArenaCard>
            
            <ArenaCard interactive>
              <div className="h-48 bg-[#003153] flex items-center justify-center rounded-t-2xl">
                <span className="text-white/50 font-display">Lagos Tech Hubs</span>
              </div>
              <div className="p-6">
                <div className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">85% Funded • Active</div>
                <h3 className="font-display text-xl font-bold text-[#003153] mb-2">Youth Coding Centers</h3>
                <p className="text-[#5B6B7A] text-sm">Equipping 5,000 youths with modern development skills.</p>
              </div>
            </ArenaCard>

            <ArenaCard variant="premium">
              <div className="p-8 flex flex-col justify-center h-full text-center">
                <h3 className="font-display text-xl font-bold text-[#003153] mb-2">Sponsor a Project</h3>
                <p className="text-[#5B6B7A] text-sm mb-4">Direct impact. Full transparency. Quarterly reports.</p>
                <ArenaButton variant="gold">View Opportunities</ArenaButton>
              </div>
            </ArenaCard>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-[#003153]">
        <div className="max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-bold text-white mb-2">Ready to build?</h2>
            <p className="text-[#FAF8F2]/70">Join the movement in under 60 seconds.</p>
          </div>
          <ArenaButton variant="gold" size="large">
            Join The Arena
          </ArenaButton>
        </div>
      </section>
    </div>
  )
}