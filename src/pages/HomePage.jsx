import { Link } from 'react-router-dom'
import { GroupAdd, Favorite, Groups, Public, AccountBalance, VolunteerActivism, Verified, ArrowForward, Map, Star, Sensors, Construction, Diversity3, PlayArrow, Description, VerifiedUser, Handshake, FormatQuote, OpenInNew, TrendingFlat } from '@material-symbols-svg/react/outlined'
import { useAnalytics } from '../analytics'
import ArenaDesk from '../components/command/ArenaDesk'

export default function HomePage() {
  const { trackJoinClick, trackDonateClick } = useAnalytics()
  
  return (
    <>
      {/* Hero: Premium Static */}
      <section className="relative min-h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              alt="Nigerian Metropolis" 
              className="hero-flag-wave w-full h-full object-cover" 
              src="https://i.imgur.com/scOJueT.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121414]/90 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#D4AF37]/[0.035] mix-blend-overlay" />
          </div>
          <div className="relative z-10 mx-auto h-full flex items-center max-w-[1440px] pt-32 px-4 md:px-8">
            <div className="w-full max-w-xl -ml-px">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#062B49]/60 border border-[rgba(212,175,55,.28)] backdrop-blur-sm mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
                </span>
                <span className="text-xs font-label-caps text-[#D4AF37] uppercase">National Platform • Live</span>
              </div>
              <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Nigeria Rises <br/>
                <span className="text-[#CBD5E1]">When We Build Together</span>
              </h1>
              <p className="text-lg md:text-xl text-[#CBD5E1] mb-8 max-w-[520px]">
                A national digital arena for action — mobilizing citizens,
                funding transparent impact projects, empowering volunteers,
                and building a stronger Nigeria through collective effort.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/join" onClick={() => trackJoinClick('hero_primary')} className="inline-flex bg-[#D4AF37] text-[#031B30] px-8 py-4 rounded font-label-caps text-sm hover:brightness-110 transition-all items-center gap-2">
                  <GroupAdd className="w-5 h-5" />
                  <span>Join the Arena</span>
                </Link>
                <Link to="/donate" onClick={() => trackDonateClick('hero_secondary')} className="inline-flex bg-[#062B49]/80 border border-[rgba(212,175,55,.35)] text-white px-8 py-4 rounded font-label-caps text-sm hover:bg-[#062B49] hover:brightness-110 transition-all items-center gap-2">
                  <Favorite className="w-5 h-5" />
                  <span>Fund Impact</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

{/* National Pulse Section - Momentum metrics */}
        <section className="pt-[72px] pb-[88px] md:pt-[56px] lg:pt-[72px] bg-[#e8ecef]">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-[34px]">
              <div className="max-w-2xl">
                <span className="text-[#18a957] font-label-caps uppercase tracking-widest mb-[14px] block">National Pulse</span>
                <h2 className="font-h2 text-4xl md:text-5xl mb-[18px] text-[#08263a]">A Living View Of National Momentum</h2>
                <p className="text-[#526273] text-lg max-w-xl leading-relaxed">
                  Transparent movement metrics — citizens mobilized,
                  projects activated, communities reached,
                  and measurable impact unfolding in real time.
                </p>
              </div>
              <Link to="/impact" className="hidden lg:flex items-center gap-2 text-[#08263a] font-label-caps hover:gap-4 transition-all mt-8 lg:mt-0">
                View Live Dashboard <ArrowForward className="w-5 h-5" />
              </Link>
            </div>

            {/* Metric Strip - Executive tiles */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-[#082F49] rounded-[24px] p-6" style={{boxShadow: '0 18px 44px rgba(8,47,73,0.18)', border: '1px solid rgba(255,255,255,0.08)'}}>
                <div className="w-[52px] h-[52px] rounded-[16px] bg-[rgba(212,175,55,0.14)] border border-[rgba(212,175,55,0.25)] flex items-center justify-center mb-4">
                  <Groups className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-[42px] text-white font-extrabold mb-1">18,420+</div>
                <div className="text-[16px] text-white/72">Volunteers Active</div>
              </div>
              <div className="bg-[#082F49] rounded-[24px] p-6" style={{boxShadow: '0 18px 44px rgba(8,47,73,0.18)', border: '1px solid rgba(255,255,255,0.08)'}}>
                <div className="w-[52px] h-[52px] rounded-[16px] bg-[rgba(212,175,55,0.14)] border border-[rgba(212,175,55,0.25)] flex items-center justify-center mb-4">
                  <Public className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-[42px] text-white font-extrabold mb-1">31</div>
                <div className="text-[16px] text-white/72">States Activated</div>
              </div>
              <div className="bg-[#082F49] rounded-[24px] p-6" style={{boxShadow: '0 18px 44px rgba(8,47,73,0.18)', border: '1px solid rgba(255,255,255,0.08)'}}>
                <div className="w-[52px] h-[52px] rounded-[16px] bg-[rgba(212,175,55,0.14)] border border-[rgba(212,175,55,0.25)] flex items-center justify-center mb-4">
                  <AccountBalance className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-[42px] text-white font-extrabold mb-1">246</div>
                <div className="text-[16px] text-white/72">Projects Live</div>
              </div>
              <div className="bg-[#082F49] rounded-[24px] p-6" style={{boxShadow: '0 18px 44px rgba(8,47,73,0.18)', border: '1px solid rgba(255,255,255,0.08)'}}>
                <div className="w-[52px] h-[52px] rounded-[16px] bg-[rgba(212,175,55,0.14)] border border-[rgba(212,175,55,0.25)] flex items-center justify-center mb-4">
                  <VolunteerActivism className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-[42px] text-white font-extrabold mb-1">₦4.2B</div>
                <div className="text-[16px] text-white/72">Impact Funded</div>
              </div>
              <div className="bg-[#082F49] rounded-[24px] p-6" style={{boxShadow: '0 18px 44px rgba(8,47,73,0.18)', border: '1px solid rgba(255,255,255,0.08)'}}>
                <div className="w-[52px] h-[52px] rounded-[16px] bg-[rgba(212,175,55,0.14)] border border-[rgba(212,175,55,0.25)] flex items-center justify-center mb-4">
                  <Verified className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-[42px] text-white font-extrabold mb-1">94%</div>
                <div className="text-[16px] text-white/72">Trust Index</div>
              </div>
            </div>

            {/* Live Ticker */}
            <div className="mt-6 backdrop-blur-md rounded-[999px] px-6 py-3 flex items-center gap-5 overflow-hidden border border-[rgba(212,175,55,0.18)]" style={{maxHeight: '44px', background: 'linear-gradient(90deg, #082F49 0%, #103A59 100%)'}}>
              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
                </span>
                <span className="text-white text-xs font-semibold tracking-widest">LIVE</span>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-8 text-sm text-white/92 animate-marquee">
                  <span>Kaduna clean water initiative milestone reached</span>
                  <span className="text-[#D4AF37]">●</span>
                  <span>2,430 new volunteers onboarded this week</span>
                  <span className="text-[#D4AF37]">●</span>
                  <span>Lagos youth enterprise fund opened</span>
                  <span className="text-[#D4AF37]">●</span>
                  <span>Plateau agriculture pilot now active</span>
                  <span className="text-[#D4AF37]">●</span>
                  <span>Abuja transparency ledger updated</span>
                </div>
              </div>
            </div>

            {/* Executive Map Panels */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6">
              {/* National Operations Intelligence Board */}
              <div className="bg-[#d8dfe5] rounded-[20px] p-8 relative overflow-hidden" style={{background: 'linear-gradient(165deg, #082F49 0%, #103A59 100%)', border: '1px solid rgba(212,175,55,0.16)'}}>
                <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(8,38,58,0.15) 1px, transparent 0)', backgroundSize: '24px 24px'}} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-h3 text-xl text-white mb-1">National Operations</h4>
                      <p className="text-sm text-white/75">36-state activation intelligence</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-[rgba(22,163,74,0.18)] px-3 py-1.5 rounded-lg border border-[rgba(22,163,74,0.25)]">
                        <Sensors className="w-4 h-4 text-[#16A34A]" />
                        <span className="text-xs font-semibold text-white tracking-wide">LIVE</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-[220px] w-full bg-[rgba(255,255,255,0.05)] rounded-xl flex items-center justify-center relative overflow-hidden border border-[rgba(255,255,255,0.08)]">
                    {/* Nigeria map outline indicator */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border-2 border-white/20 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border border-white/15 flex items-center justify-center">
                          <span className="text-white/40 text-xs font-medium">NIGERIA</span>
                        </div>
                      </div>
                    </div>
                    {/* Subtle pulsing nodes */}
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#16A34A] rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity: 0.2}}>
                      <line x1="25%" y1="33%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                      <line x1="50%" y1="50%" x2="75%" y2="67%" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                      <line x1="50%" y1="50%" x2="33%" y2="60%" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2,2" />
                    </svg>
                    {/* Executive overlay stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs">
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
                        <span className="text-white/70">Active Zones:</span> <span className="text-white font-semibold">28</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
                        <span className="text-white/70">Signal:</span> <span className="text-[#16A34A] font-semibold">Strong</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Command Board */}
              <div className="bg-white rounded-[28px] p-6" style={{border: '1px solid rgba(8,47,73,0.08)', borderLeft: '5px solid #D4AF37', boxShadow: '0 8px 32px rgba(8,38,58,0.08)'}}>
                <h4 className="font-h3 text-[48px] text-[#082F49] mb-5 font-extrabold">Regional Command</h4>
                <div className="space-y-0">
                  <div className="flex justify-between items-center py-4 border-b border-[#08263a]/8">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
                      <span className="text-[#082F49] text-lg font-semibold">North</span>
                    </div>
                    <span className="text-sm text-[#16A34A] font-bold tracking-wide">STRONG</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-[#08263a]/8">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
                      <span className="text-[#082F49] text-lg font-semibold">West</span>
                    </div>
                    <span className="text-sm text-[#16A34A] font-bold tracking-wide">VERY STRONG</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-[#08263a]/8">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span>
                      <span className="text-[#082F49] text-lg font-semibold">East</span>
                    </div>
                    <span className="text-sm text-[#D4AF37] font-bold tracking-wide">GROWING</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-[#08263a]/8">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
                      <span className="text-[#082F49] text-lg font-semibold">South</span>
                    </div>
                    <span className="text-sm text-[#16A34A] font-bold tracking-wide">STRONG</span>
                  </div>
                </div>
                <Link to="/arena/chapters" className="mt-6 w-full py-4 bg-[#D4AF37] text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:bg-[#c9a030] transition-all">
                  View Regional Chapters <ArrowForward className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Take Action: Impact Pathways - Community */}
        <section className="py-[120px] bg-[#101418]">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <div className="text-center mb-20">
              <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Take Action</span>
              <h2 className="font-h2 text-[48px] text-white mb-4">Choose How You Build Nigeria</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Every citizen can contribute — through service, ideas, or capital.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {/* Join the Arena */}
              <Link to="/join" className="group glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-all duration-220 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgba(233,195,73,0.15)] block" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)'}}>
                <div className="w-16 h-16 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <VolunteerActivism className="w-10 h-10 text-secondary/60" />
                </div>
                <h3 className="font-h3 text-xl mb-3 text-white">Join the Arena</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Volunteer skills, mobilize communities, and become part of coordinated national action.</p>
                <div className="flex items-center gap-2 text-secondary font-label-caps">
                  Join Now <ArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              {/* Project Nigeria */}
              <Link to="/project-nigeria" className="group glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-all duration-220 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgba(233,195,73,0.15)] block" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)'}}>
                <div className="w-16 h-16 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <AccountBalance className="w-10 h-10 text-secondary/60" />
                </div>
                <h3 className="font-h3 text-xl mb-3 text-white">Project Nigeria</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Submit ideas, support transparent projects, and help shape visible national progress.</p>
                <div className="flex items-center gap-2 text-secondary font-label-caps">
                  Explore Projects <ArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              {/* Fund Impact */}
              <Link to="/donate" className="group glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-all duration-220 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgba(233,195,73,0.15)] block" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)'}}>
                <div className="w-16 h-16 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Public className="w-10 h-10 text-secondary/60" />
                </div>
                <h3 className="font-h3 text-xl mb-3 text-white">Fund Impact</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Back verified initiatives with direct funding, diaspora capital, sponsorship, or institutional support.</p>
                <div className="flex items-center gap-2 text-secondary font-label-caps">
                  Fund Change <ArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Proof: Visible Results - Funding */}
        <section className="pt-[72px] pb-[88px] md:pt-[68px] md:pb-[68px] lg:pt-[72px] lg:pb-[88px] bg-[#EEF3EC]">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <div className="text-center mb-[34px]">
              <span className="text-[#16A34A] font-bold uppercase tracking-[0.18em] text-[13px] mb-[14px] block">National Impact</span>
              <h2 className="font-h2 text-[clamp(60px,7vw,92px)] text-[#0B2D4D] mb-[18px] leading-[0.94] tracking-[-0.04em] font-extrabold" style={{maxWidth: '860px', marginInline: 'auto'}}>Proof Of Movement. Visible To All.</h2>
              <p className="font-body-lg text-[#5D6A76] text-[22px] leading-[1.7]" style={{maxWidth: '760px', marginInline: 'auto'}}>Transparent execution. Measurable delivery. Real communities changed through collective national action.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[34px]">
              {/* Card 1: Projects Delivered */}
              <div className="rounded-[30px] p-[38px] flex flex-col" style={{background: 'linear-gradient(180deg, #0B2D4D 0%, #123D63 100%)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 28px 80px rgba(5,22,38,0.20)', minHeight: '520px', position: 'relative', overflow: 'hidden'}}>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)', filter: 'blur(40px)'}}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-[18px] bg-white/[0.08] flex items-center justify-center mb-[34px]" style={{border: '1px solid rgba(255,255,255,0.12)'}}>
                    <Construction className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-h3 text-[42px] text-white mb-[26px] leading-[1.05] tracking-[-0.02em] font-extrabold">Projects Delivered</h3>
                  <div className="mb-[18px]">
                    <span className="text-[54px] text-[#D4AF37] font-extrabold leading-none">246</span>
                  </div>
                  <p className="text-[17px] text-white/70 leading-[1.7] mb-[30px]">Completed national initiatives</p>
                  <ul className="space-y-[10px] text-[16px] text-white/86 leading-[1.95] font-medium mb-8">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Roads & transport</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Education upgrades</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Energy access</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Water infrastructure</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Digital public services</li>
                  </ul>
                </div>
                <Link to="/projects" className="mt-auto flex items-center gap-3 text-white font-bold uppercase tracking-[0.14em] text-[14px] group">
                  View Projects <ArrowForward className="w-4 h-4 text-[#22C55E] group-hover:translate-x-[6px] transition-all" />
                </Link>
              </div>
              {/* Card 2: Transparent Funding */}
              <div className="rounded-[30px] p-[38px] flex flex-col" style={{background: 'linear-gradient(180deg, #0B2D4D 0%, #123D63 100%)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 28px 80px rgba(5,22,38,0.20)', minHeight: '520px', position: 'relative', overflow: 'hidden'}}>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)', filter: 'blur(40px)'}}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-[18px] bg-white/[0.08] flex items-center justify-center mb-[34px]" style={{border: '1px solid rgba(255,255,255,0.12)'}}>
                    <Verified className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-h3 text-[42px] text-white mb-[26px] leading-[1.05] tracking-[-0.02em] font-extrabold">Transparent Funding</h3>
                  <div className="mb-[18px]">
                    <span className="text-[54px] text-[#D4AF37] font-extrabold leading-none">₦4.2B</span>
                  </div>
                  <p className="text-[17px] text-white/70 leading-[1.7] mb-[30px]">Publicly visible impact funding</p>
                  <ul className="space-y-[10px] text-[16px] text-white/86 leading-[1.95] font-medium mb-8">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Allocation visibility</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Audit-ready records</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Live contribution ledger</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Public accountability</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Project-level traceability</li>
                  </ul>
                </div>
                <Link to="/transparency" className="mt-auto flex items-center gap-3 text-white font-bold uppercase tracking-[0.14em] text-[14px] group">
                  Open Ledger <ArrowForward className="w-4 h-4 text-[#22C55E] group-hover:translate-x-[6px] transition-all" />
                </Link>
              </div>
              {/* Card 3: Lives Changed */}
              <div className="rounded-[30px] p-[38px] flex flex-col" style={{background: 'linear-gradient(180deg, #0B2D4D 0%, #123D63 100%)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 28px 80px rgba(5,22,38,0.20)', minHeight: '520px', position: 'relative', overflow: 'hidden'}}>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)', filter: 'blur(40px)'}}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-[18px] bg-white/[0.08] flex items-center justify-center mb-[34px]" style={{border: '1px solid rgba(255,255,255,0.12)'}}>
                    <Diversity3 className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-h3 text-[42px] text-white mb-[26px] leading-[1.05] tracking-[-0.02em] font-extrabold">Lives Changed</h3>
                  <div className="mb-[18px]">
                    <span className="text-[54px] text-[#D4AF37] font-extrabold leading-none">18,420+</span>
                  </div>
                  <p className="text-[17px] text-white/70 leading-[1.7] mb-[30px]">Citizens actively participating</p>
                  <ul className="space-y-[10px] text-[16px] text-white/86 leading-[1.95] font-medium mb-8">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Volunteer stories</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Community wins</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Local chapter impact</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Before / after snapshots</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>Grassroots execution</li>
                  </ul>
                </div>
                <Link to="/stories" className="mt-auto flex items-center gap-3 text-white font-bold uppercase tracking-[0.14em] text-[14px] group">
                  Read Stories <ArrowForward className="w-4 h-4 text-[#22C55E] group-hover:translate-x-[6px] transition-all" />
                </Link>
              </div>
            </div>
            <div className="mt-[52px] rounded-[34px] p-[52px] flex flex-col md:flex-row items-center justify-between gap-[40px]" style={{background: '#0B2D4D', boxShadow: '0 24px 70px rgba(7,22,37,0.18)'}}>
              <div className="flex-1 mr-[40px]">
                <span className="text-[#16A34A] font-bold uppercase tracking-[0.18em] text-[13px] mb-[18px] block">National Signal</span>
                <h3 className="font-h3 text-[48px] text-white mb-[18px] leading-[1.08] font-extrabold">A movement measured in action — not noise.</h3>
                <p className="text-[19px] text-white/70 leading-[1.75]" style={{maxWidth: '760px'}}>Every project, every volunteer, every contribution, and every community result is visible, accountable, and tied to measurable national progress.</p>
              </div>
              <Link to="/impact" className="bg-[#D4AF37] text-[#0B2D4D] px-[34px] py-[18px] rounded-[999px] font-bold uppercase tracking-[0.12em] text-[14px] hover:bg-[#E7BE45] hover:translate-y-[-2px] transition-all whitespace-nowrap" style={{boxShadow: '0 12px 28px rgba(212,175,55,0.28)'}}>
                See National Impact
              </Link>
            </div>
          </div>
        </section>

        {/* Project Nigeria: Full Bleed Cinematic */}
        <section className="relative min-h-[716px] flex items-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <img alt="Civil Engineers on Site" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_rcS3qgdP0Pm7RAjtjhmWegi_YFkpWioiEUGRAtY0cjIoCIR356-3MFTYpWma1Ge8McPVzOOrwUExdgyHeSO1DHrQsTCuac1OHTzvQl2OTdfKuFS7ZjJOXpTjDArS4NnMqRd33di4uD4BRxL9qJg2R-ksR_dECI9dox_1wQVcqHbNrbl0eOV5sO0ql8lo8y64Ptb3g_p8YSnv7xf90p9rjcCR7TPVJP2coHh9gxGNCJRGQ1uv_RjGUbU09qVrAri79yW4-N6yqo0"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[1440px] py-24">
            <div className="max-w-xl">
              <h2 className="font-h2 text-[48px] mb-8 leading-tight text-white">Project Nigeria:<br/>The Concrete Promise.</h2>
              <p className="font-body-lg text-white/80 mb-12">
                We aren't just building roads; we are paving the path to the African Century. Every girder placed and every kilovolt generated is a testament to our collective resilience.
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                    <PlayArrow className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-h3 text-xl mb-1 text-white">Watch: The Blueprint</h4>
                    <p className="text-white/60 text-sm">A 3-minute documentary on the national masterplan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                    <Description className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-h3 text-xl mb-1 text-white">Download Manifesto</h4>
                    <p className="text-white/60 text-sm">The 2024-2028 Infrastructure Strategic Disclosure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Layer: Built On Trust - Governance */}
        <section className="py-24 relative bg-[#08263a]" style={{borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/30 to-transparent opacity-50"></div>
          <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row gap-7 items-center">
              {/* Left Column */}
              <div className="lg:w-5/12">
                <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Built On Trust</span>
                <h2 className="font-h2 text-[48px] text-white mb-5" style={{maxWidth: '560px'}}>National progress must be transparent, accountable, and worthy of belief.</h2>
                <p className="font-body-lg text-on-surface-variant mb-8" style={{maxWidth: '540px'}}>Every contribution, every volunteer, every funded project, and every regional chapter is anchored on public visibility, verification, and measurable accountability.</p>
                <Link to="/trust" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all inline-flex items-center gap-2">
                  See How Trust Works <VerifiedUser className="w-5 h-5" />
                </Link>
              </div>
              {/* Right Column - Credibility Grid */}
              <div className="lg:w-7/12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="glass rounded-3xl p-6 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '180px'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <VolunteerActivism className="w-5 h-5 text-secondary" />
                      <span className="text-on-surface-variant text-xs font-label-caps uppercase">Verified Volunteers</span>
                    </div>
                    <div className="font-stat-value text-3xl text-secondary mb-2">18,420+</div>
                    <p className="text-on-surface-variant text-xs">Identity checked • Chapter assigned</p>
                  </div>
                  <div className="glass rounded-3xl p-6 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '180px'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <Public className="w-5 h-5 text-secondary" />
                      <span className="text-on-surface-variant text-xs font-label-caps uppercase">National Chapters</span>
                    </div>
                    <div className="font-stat-value text-3xl text-secondary mb-2">31</div>
                    <p className="text-on-surface-variant text-xs">Regional activation across Nigeria</p>
                  </div>
                  <div className="glass rounded-3xl p-6 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '180px'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <Handshake className="w-5 h-5 text-secondary" />
                      <span className="text-on-surface-variant text-xs font-label-caps uppercase">Institutional Partners</span>
                    </div>
                    <div className="font-stat-value text-3xl text-secondary mb-2">84</div>
                    <p className="text-on-surface-variant text-xs">NGOs • private sector • civic bodies</p>
                  </div>
                  <div className="glass rounded-3xl p-6 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '180px'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <Verified className="w-5 h-5 text-secondary" />
                      <span className="text-on-surface-variant text-xs font-label-caps uppercase">Public Trust Score</span>
                    </div>
                    <div className="font-stat-value text-3xl text-secondary mb-2">94%</div>
                    <p className="text-on-surface-variant text-xs">Built from delivery, openness, and verification</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Micro Governance Bar */}
            <div className="mt-10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)'}}>
              <div className="flex items-center gap-4">
                <span className="text-secondary font-label-caps uppercase">Oversight</span>
                <span className="text-on-surface-variant text-sm">Governance board visibility, audit readiness, transparent reporting, and public accountability mechanisms.</span>
              </div>
              <Link to="/governance" className="text-secondary font-label-caps hover:text-secondary/80 whitespace-nowrap">
                Governance
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stories: Masonry Grid */}
        <section className="pt-[72px] pb-[88px] md:pt-[68px] md:pb-[68px] lg:pt-[72px] lg:pb-[88px] bg-[#F3F5F4] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none" style={{background: 'rgba(212,175,55,0.045)', filter: 'blur(110px)'}}></div>
          <div className="absolute bottom-0 left-0 w-[340px] h-[340px] rounded-full pointer-events-none" style={{background: 'rgba(22,163,74,0.035)', filter: 'blur(90px)'}}></div>
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px] relative z-10">
            <div className="text-center mb-[34px]" style={{maxWidth: '900px', marginInline: 'auto'}}>
              <span className="text-[#16A34A] font-bold uppercase tracking-[0.18em] text-[13px] mb-[14px] block">Faces of Change</span>
              <h2 className="font-h2 text-[clamp(58px,7vw,88px)] text-[#0B2D4D] mb-[18px] leading-[0.95] tracking-[-0.035em] font-extrabold" style={{textShadow: '0 3px 12px rgba(11,45,77,0.05)'}}>Impact Stories</h2>
              <div className="w-[90px] h-1 mx-auto rounded-[999px] bg-gradient-to-r from-[#16A34A] to-[#D4AF37]" style={{marginTop: '12px'}}></div>
            </div>
            <div className="max-w-[1380px] mx-auto p-[48px] rounded-[40px] bg-white/46 backdrop-blur-[10px]" style={{border: '1px solid rgba(255,255,255,0.65)', boxShadow: '0 35px 100px rgba(12,31,51,0.08)'}}>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-[28px] space-y-[28px]">
                {/* Story Card 1 */}
                <div className="break-inside-avoid rounded-[28px] overflow-hidden group transition-all duration-280 hover:translate-y-[-8px]" style={{boxShadow: '0 18px 50px rgba(8,24,38,0.18)'}}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img alt="Tech Innovator" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiIBVlGvfThlcrXFRyQSXwVLPOzlY9LL_3hm21gDVI1MlX-bCmE3zmhbKjkppyqIl2KigmLTGiOQqxfT9QmHsV4bvHLP-1j2LstePMNMPAVxD6NG5pS6i7XH6nP4kwgAPtRJ-XhpKgOZTVOYtONW5aj7ffKDuzMaWCGiVz4pTFbpll56eIqpj2FYB3aEqXW700LgBM1X2bIRpGiTIuHGWCN6Y6WjdLdynPsRXU9MtHHd6vDigq1JXCOvlJKzMGk72KBQEHUMBfdiM"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-flex items-center h-[34px] px-4 rounded-[999px] bg-[rgba(22,163,74,0.14)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#16A34A]" style={{border: '1px solid rgba(22,163,74,0.24)'}}>Tech & Innovation</span>
                      <h4 className="font-h3 text-[26px] text-white mt-3 leading-[1.15] font-extrabold">How Fiber-to-Farm is doubling yields in Benue.</h4>
                    </div>
                  </div>
                </div>
                {/* Story Card 2 */}
                <div className="break-inside-avoid rounded-[28px] p-8 transition-all duration-280 hover:translate-y-[-8px]" style={{background: 'linear-gradient(180deg, #123D63 0%, #0B2D4D 100%)', boxShadow: '0 26px 60px rgba(10,28,46,0.16)'}}>
                  <FormatQuote className="w-10 h-10 mb-6" style={{color: '#D4AF37'}} />
                  <p className="font-body-lg italic text-white mb-8 leading-[1.75]">"For the first time in thirty years, our market has 24-hour power. The Arena didn't just promise; they delivered the grid."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border-2 border-[#16A34A]">
                      <img alt="Market Trader" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqmekQ72PB4tzotiFQwlQ5YMpGrGB6txGv_fcyCzswZwYtq7h7iaAkOSvWDtxiN3xpWTfxam__RcEu3jvSYOdcJexMtxcJuCIfZYmv_lSO962LCfzM-dqFJiQsNighVY_EUWiXOnJ2SZQ-qVNTd27bsP2RRXfdbDD8Zsyk77EXsJiHJf0nK7clj0stHdku7PxCYFKDGr7WoPbTKkAy2NqdPbOPeqcvswLL5BYBeZetDaQxcUKNdO5ZbzR6u2P8genMgo3S9zcsHjE"/>
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-white">Alhaji Musa S.</h5>
                      <p className="text-[12px]" style={{color: 'rgba(255,255,255,0.72)'}}>Market Union Leader, Kaduna</p>
                    </div>
                  </div>
                </div>
                {/* Story Card 3 */}
                <div className="break-inside-avoid rounded-[28px] overflow-hidden group transition-all duration-280 hover:translate-y-[-8px]" style={{boxShadow: '0 18px 50px rgba(8,24,38,0.18)'}}>
                  <div className="relative aspect-square overflow-hidden">
                    <img alt="Artisanal Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0oSbKhDzhqApPSSOWSyosoahZ7u_gR6DjB4TDW3woJgmX3_jK4L4si7Rm7pHYaq4JxP7_xbokvfrbHVqMLiK6papqFwBgjBaP4rkpPj-VVEInDatvItApBDYdcBBhCNHGdV9u4Oe7x-4oMdlpnAljnwbCpER0gsd9b0crACS2MXQR9wUt_1XJg2lVG2ilk6-z9RC4dbEeyob-7P7Gd0q922lsQcX31P9pCoj8R1YE5RjnX79ou5kV_yh3cesh-RgZGkuJTof97v4"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-flex items-center h-[34px] px-4 rounded-[999px] bg-[rgba(22,163,74,0.14)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#16A34A]" style={{border: '1px solid rgba(22,163,74,0.24)'}}>Cultural Wealth</span>
                      <h4 className="font-h3 text-[26px] text-white mt-3 leading-[1.15] font-extrabold">Artisans of the Arena: Restoring National Pride.</h4>
                    </div>
                  </div>
                </div>
                {/* Story Card 4 */}
                <div className="break-inside-avoid rounded-[28px] p-8 transition-all duration-280 hover:translate-y-[-8px]" style={{background: 'linear-gradient(135deg, #123D63 0%, #0B2D4D 100%)', boxShadow: '0 26px 60px rgba(10,28,46,0.16)', borderTop: '3px solid #16A34A'}}>
                  <div className="mb-6" style={{color: '#D4AF37'}}>
                    <FormatQuote className="w-10 h-10" style={{fill: 'currentColor'}} />
                  </div>
                  <h4 className="font-h3 text-2xl mb-4 text-white leading-[1.2]">"The Arena is more than a platform; it's a social contract signed in digital ink."</h4>
                  <button className="text-white font-bold uppercase tracking-[0.14em] text-[14px] flex items-center gap-3 group">
                    READ FULL EDITORIAL <OpenInNew className="w-4 h-4 text-[#16A34A]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Standard: Clean & Ivory */}
        <section className="pt-[72px] pb-[88px] md:pt-[68px] md:pb-[68px] lg:pt-[72px] lg:pb-[88px]" style={{background: 'linear-gradient(90deg, #082F49 0%, #0B3D5C 100%)'}}>
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center">
              <div className="lg:w-[46%]">
                <span className="text-[#22C55E] font-bold uppercase tracking-[0.18em] text-[12px] mb-[24px] block">Institutional Integrity</span>
                <h2 className="font-h2 text-[64px] text-white mb-[28px] leading-[1.02] tracking-[-0.03em] font-extrabold" style={{maxWidth: '620px'}}>The Trust Standard</h2>
                <p className="font-body-lg text-white/80 text-[24px] leading-[1.7] font-medium mb-[60px]" style={{maxWidth: '720px'}}>
                  Transparency is our baseline. Every naira tracked, every milestone audited by third-party institutional partners. No shadows, just results.
                </p>
                <div className="flex gap-[80px] items-center">
                  <div>
                    <div className="w-[48px] h-1 rounded-[999px] bg-[#22C55E] mb-[18px]"></div>
                    <div className="text-[68px] text-white font-extrabold leading-none">100%</div>
                    <div className="text-white/70 text-[13px] font-bold uppercase tracking-[0.16em] mt-[12px]">Audit Transparency</div>
                  </div>
                  <div>
                    <div className="w-[48px] h-1 rounded-[999px] bg-[#22C55E] mb-[18px]"></div>
                    <div className="text-[68px] text-white font-extrabold leading-none">94%</div>
                    <div className="text-white/70 text-[13px] font-bold uppercase tracking-[0.16em] mt-[12px]">Project Delivery Rate</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[54%]" style={{width: '640px'}}>
                <div className="bg-white rounded-[28px] p-[52px]" style={{border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 30px 80px rgba(0,0,0,0.18)'}}>
                  <h4 className="text-[#082F49]/40 text-[13px] font-bold uppercase tracking-[0.14em] text-center mb-10">Global Compliance Partners</h4>
                  <div className="grid grid-cols-2 gap-[22px]">
                    <div className="h-[86px] rounded-[18px] flex items-center gap-3 px-6 transition-all duration-200 hover:border-[#22C55E] hover:bg-[#F0FDF4]" style={{border: '1px solid #E2E8F0', background: '#F8FAFC'}}>
                      <span className="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></span>
                      <span className="text-[#082F49] font-bold text-[16px]">AUDIT_X</span>
                    </div>
                    <div className="h-[86px] rounded-[18px] flex items-center gap-3 px-6 transition-all duration-200 hover:border-[#22C55E] hover:bg-[#F0FDF4]" style={{border: '1px solid #E2E8F0', background: '#F8FAFC'}}>
                      <span className="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></span>
                      <span className="text-[#082F49] font-bold text-[16px]">GLOBE_TRUST</span>
                    </div>
                    <div className="h-[86px] rounded-[18px] flex items-center gap-3 px-6 transition-all duration-200 hover:border-[#22C55E] hover:bg-[#F0FDF4]" style={{border: '1px solid #E2E8F0', background: '#F8FAFC'}}>
                      <span className="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></span>
                      <span className="text-[#082F49] font-bold text-[16px]">STAND_CERT</span>
                    </div>
                    <div className="h-[86px] rounded-[18px] flex items-center gap-3 px-6 transition-all duration-200 hover:border-[#22C55E] hover:bg-[#F0FDF4]" style={{border: '1px solid #E2E8F0', background: '#F8FAFC'}}>
                      <span className="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></span>
                      <span className="text-[#082F49] font-bold text-[16px]">NIG_PULSE</span>
                    </div>
                  </div>
                  <div className="mt-9 pt-9 flex justify-center" style={{borderTop: '1px solid #E2E8F0'}}>
                    <button className="h-[64px] w-[280px] bg-[#D4AF37] text-[#082F49] rounded-[999px] font-bold text-[15px] uppercase tracking-[0.08em] hover:bg-[#E6C55A] hover:translate-y-[-2px] transition-all" style={{boxShadow: '0 12px 30px rgba(212,175,55,0.28)'}}>
                      View Audit Reports
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Conversion: Join The National Build - Footer */}
        <section className="py-28 relative bg-[#04101a]" style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/30 to-transparent opacity-50"></div>
          <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[1440px]">
            <div className="text-center mb-12">
              <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Join The National Build</span>
              <h2 className="font-h2 text-[48px] text-white mb-5" style={{maxWidth: '820px', margin: '0 auto'}}>Every meaningful movement needs people willing to build.</h2>
              <p className="font-body-lg text-on-surface-variant" style={{maxWidth: '760px', margin: '18px auto 0'}}>Whether you serve communities, build infrastructure, mobilize support, or fund impact — there is a place for you here.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Citizens */}
              <div className="glass rounded-3xl p-8 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '260px'}}>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <VolunteerActivism className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Citizens</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Join a chapter, volunteer locally, contribute skills, and become part of practical national action.</p>
                <Link to="/join" className="text-secondary font-label-caps flex items-center gap-2">
                  Join Chapter <ArrowForward className="w-4 h-4" />
                </Link>
              </div>
              {/* Builders */}
              <div className="glass rounded-3xl p-8 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '260px'}}>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <AccountBalance className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Builders</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Submit initiatives, propose projects, organize civic solutions, and help shape measurable national progress.</p>
                <Link to="/project-nigeria" className="text-secondary font-label-caps flex items-center gap-2">
                  Submit Project <ArrowForward className="w-4 h-4" />
                </Link>
              </div>
              {/* Partners */}
              <div className="glass rounded-3xl p-8 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '260px'}}>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <Handshake className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Partners</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Institutions, donors, NGOs, and strategic partners can fund and scale meaningful impact.</p>
                <Link to="/partners" className="text-secondary font-label-caps flex items-center gap-2">
                  Partner With Us <ArrowForward className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Final Band CTA */}
            <div className="mt-12 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.18)'}}>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-h3 text-xl text-white mb-2">A stronger Nigeria is built by those who participate.</h3>
                <p className="text-on-surface-variant text-sm">Join the arena. Support delivery. Help build visible national progress.</p>
              </div>
              <Link to="/join" className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-caps hover:brightness-110 transition-all inline-flex items-center gap-2 whitespace-nowrap">
                Enter The Arena <TrendingFlat className="w-5 h-5" />
              </Link>
            </div>
          </div>
</section>

      <ArenaDesk />
    </>
  )
}