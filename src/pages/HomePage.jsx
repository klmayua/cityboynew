import { Link, useLocation } from 'react-router-dom'
import { Bell, User } from 'lucide-react'
import { useAnalytics } from '../analytics'
import ArenaDesk from '../components/command/ArenaDesk'
import HeroCarousel from '../components/command/HeroCarousel'

export default function HomePage() {
  const location = useLocation()
  const { trackJoinClick, trackDonateClick } = useAnalytics()
  
  const navLinks = [
    { to: '/', label: 'Arena' },
    { to: '/about', label: 'About' },
    { to: '/initiatives', label: 'Initiatives' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/media', label: 'Media' },
    { to: '/community', label: 'Community' },
  ]
  
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-[#062B49]/90 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-[rgba(212,175,55,.18)] shadow-[0_0_20px_rgba(255,191,0,0.1)] pt-[env(safe-area-inset-top)]">
        <div className="flex justify-between items-center px-4 md:px-8 h-16 md:h-20 max-w-[1440px] mx-auto">
          <Link to="/" className="text-xl font-black tracking-widest text-[#D4AF37] uppercase font-['Sora']">CITY BOY ARENA</Link>
          <nav className="hidden md:flex items-center gap-8 font-['Sora'] font-bold tracking-tight" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link 
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                className={`transition-colors ${
                  location.pathname === link.to 
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1' 
                    : 'text-slate-300 hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 md:gap-6">
            <button aria-label="Notifications" className="p-2 text-slate-300 hover:text-[#D4AF37] transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button aria-label="Account" className="p-2 text-slate-300 hover:text-[#D4AF37] transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Link to="/join" className="hidden md:inline-flex bg-[#0F172A] border border-[rgba(212,175,55,.28)] text-white px-5 py-2.5 rounded-md font-label-caps hover:bg-[#D4AF37] hover:text-[#031B30] transition-all">
              Volunteer
            </Link>
            <Link to="/donate" className="bg-[#D4AF37] text-[#031B30] px-5 py-2.5 rounded-md font-label-caps hover:brightness-110 active:scale-[0.98] transition-all">
              Fund Impact
            </Link>
          </div>
        </div>
      </header>

      {/* Navbar Separator */}
      <div className="fixed top-16 md:top-20 w-full h-px z-40" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,.18) 20%, rgba(212,175,55,.95) 50%, rgba(212,175,55,.18) 80%, transparent 100%)'
      }} />

      <main className="pt-16 md:pt-20">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* National Pulse Section */}
        <section className="pt-24 pb-24 bg-background border-y border-white/[0.06]">
          <div className="container mx-auto px-5xl max-w-[1440px]">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
              <div className="max-w-2xl">
                <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">National Pulse</span>
                <h2 className="font-h2 text-5xl mb-4 text-white">A Living View Of National Momentum</h2>
                <p className="text-[#C2C7CF] text-lg max-w-xl leading-relaxed">
                  Transparent movement metrics — citizens mobilized,
                  projects activated, communities reached,
                  and measurable impact unfolding in real time.
                </p>
              </div>
              <Link to="/impact" className="hidden lg:flex items-center gap-2 text-secondary font-label-caps hover:gap-4 transition-all mt-8 lg:mt-0">
                See Live Impact <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            {/* Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              <div className="bg-surface-container/40 backdrop-blur-md border border-white/[0.06] rounded-3xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-180">
                <span className="material-symbols-outlined text-secondary text-2xl mb-4">groups</span>
                <div className="text-3xl font-h3 text-white mb-1">18,420+</div>
                <div className="text-sm text-[#C2C7CF]">Volunteers Active</div>
              </div>
              <div className="bg-surface-container/40 backdrop-blur-md border border-white/[0.06] rounded-3xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-180">
                <span className="material-symbols-outlined text-secondary text-2xl mb-4">public</span>
                <div className="text-3xl font-h3 text-white mb-1">31</div>
                <div className="text-sm text-[#C2C7CF]">States Activated</div>
              </div>
              <div className="bg-surface-container/40 backdrop-blur-md border border-white/[0.06] rounded-3xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-180">
                <span className="material-symbols-outlined text-secondary text-2xl mb-4">account_balance</span>
                <div className="text-3xl font-h3 text-white mb-1">246</div>
                <div className="text-sm text-[#C2C7CF]">Projects Live</div>
              </div>
              <div className="bg-surface-container/40 backdrop-blur-md border border-white/[0.06] rounded-3xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-180">
                <span className="material-symbols-outlined text-secondary text-2xl mb-4">volunteer_activism</span>
                <div className="text-3xl font-h3 text-white mb-1">₦4.2B</div>
                <div className="text-sm text-[#C2C7CF]">Impact Funded</div>
              </div>
              <div className="bg-surface-container/40 backdrop-blur-md border border-white/[0.06] rounded-3xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-180">
                <span className="material-symbols-outlined text-secondary text-2xl mb-4">verified</span>
                <div className="text-3xl font-h3 text-white mb-1">94%</div>
                <div className="text-sm text-[#C2C7CF]">Trust Index</div>
              </div>
            </div>

            {/* Live Ticker */}
            <div className="mt-7 bg-[#0a0c0e]/80 backdrop-blur-lg border border-white/[0.06] rounded-full px-6 py-4 flex items-center gap-6 overflow-hidden">
              <div className="flex-shrink-0 bg-[#D4AF37]/15 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-label-caps">LIVE</div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-12 text-sm text-[#C2C7CF] animate-marquee">
                  <span>Kaduna clean water initiative milestone reached</span>
                  <span className="text-secondary">●</span>
                  <span>2,430 new volunteers onboarded this week</span>
                  <span className="text-secondary">●</span>
                  <span>Lagos youth enterprise fund opened</span>
                  <span className="text-secondary">●</span>
                  <span>Plateau agriculture pilot now active</span>
                  <span className="text-secondary">●</span>
                  <span>Abuja transparency ledger updated</span>
                </div>
              </div>
              <Link to="/impact" className="lg:hidden flex-shrink-0 text-secondary font-label-caps text-sm">
                See All
              </Link>
            </div>
          </div>
          {/* Micro Map Panel */}
          <div className="mt-9 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6">
            {/* Map Card */}
            <div className="bg-surface-container/40 backdrop-blur-md border border-white/[0.06] rounded-3xl p-6 min-h-[280px] flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-secondary/40 mb-4">map</span>
                <p className="text-[#C2C7CF]">Nigeria Activation Map</p>
                <p className="text-sm text-[#C2C7CF]/60 mt-1">Interactive visualization coming soon</p>
              </div>
            </div>

            {/* Regional Summary Card */}
            <div className="bg-surface-container/40 backdrop-blur-md border border-white/[0.06] rounded-3xl p-6">
              <h4 className="font-h3 text-xl text-white mb-6">Regional Activation</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-[#C2C7CF]">North</span>
                  <span className="text-secondary font-label-caps">Strong</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-[#C2C7CF]">West</span>
                  <span className="text-secondary font-label-caps">Very Strong</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-[#C2C7CF]">East</span>
                  <span className="text-tertiary font-label-caps">Growing</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-[#C2C7CF]">South</span>
                  <span className="text-secondary font-label-caps">Strong</span>
                </div>
              </div>
              <Link to="/arena/chapters" className="mt-6 flex items-center justify-center gap-2 text-secondary font-label-caps hover:gap-3 transition-all w-full py-3 border border-secondary/30 rounded-full">
                View Chapters <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* National Impact Ticker */}
        <div className="bg-secondary py-3 overflow-hidden whitespace-nowrap border-y border-on-secondary/10">
          <div className="flex items-center gap-12 text-on-secondary-container font-label-caps text-xs animate-marquee">
            <span>NEW RAILWAY COMMISSIONED IN KANO</span>
            <span className="material-symbols-outlined text-[8px]">star</span>
            <span>LAGOS ENERGY GRID UPGRADED (+12%)</span>
            <span className="material-symbols-outlined text-[8px]">star</span>
            <span>FARMER-LED COOPERATIVES REACH 2M MEMBERS</span>
            <span className="material-symbols-outlined text-[8px]">star</span>
            <span>NATIONAL TRUST SCORE UP BY 4.2 POINTS</span>
            <span className="material-symbols-outlined text-[8px]">star</span>
            <span>NEW RAILWAY COMMISSIONED IN KANO</span>
          </div>
        </div>

        {/* National Pulse: Sleek Card Band */}
        <section className="py-[120px] bg-surface-container-lowest">
          <div className="container mx-auto px-[80px] max-w-[1440px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <span className="text-secondary font-label-caps uppercase mb-4 block">Real-Time Data</span>
                <h2 className="font-h2 text-[48px] mb-4 text-white">National Pulse</h2>
                <p className="font-body-md text-on-surface-variant">Monitoring the heartbeat of the federation through high-fidelity data streams and community sentiment indicators.</p>
              </div>
              <button className="flex items-center gap-2 text-secondary font-label-caps hover:gap-4 transition-all">
                FULL DATA DASHBOARD <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
              {/* Map Card */}
              <div className="lg:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h3 className="font-h3 text-[32px] mb-1 text-white">Infrastructure Health</h3>
                    <p className="text-on-surface-variant font-body-md">Active deployment zones across 36 states</p>
                  </div>
                  <div className="bg-on-tertiary-container/20 text-tertiary px-4 py-2 rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">sensors</span>
                    <span className="font-label-caps text-[10px]">LIVE FEED</span>
                  </div>
                </div>
                <div className="h-[400px] w-full bg-surface-container-high/40 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img alt="Map of Nigeria Data Overlay" className="opacity-20 absolute inset-0 w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVlNIo8vNjbia3QJgZ7ign0d6hEoqE8HhmChsJEjqQcG2dgsuAXQIrb-M1jYmghMYWusHslmK87F88r14VrcE-0Z18pYy9TFMtc3lu2q6trLIswEHyRwoClXhcBSxNOvdMWSk0ia2vntt3UDP49l_kSGRXfsK2r94OLgXG7gT4bAcnTld8k8errVY1q0ugo83yshI_ZkW-P0GRCUME1zrc8LDXihdW6LsY8YECiw_smKTxjQRNxIhFO0zg2Rr1V3uMZKhUdjNmJSw"/>
                  {/* Heat Map Pulse Points */}
                  <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-tertiary rounded-full animate-ping opacity-50"></div>
                </div>
              </div>
              {/* Metrics Stack */}
              <div className="space-y-[24px]">
                <div className="glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-colors" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                  <span className="text-on-surface-variant font-label-caps uppercase text-[10px] mb-4 block">Trust Score</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-stat-value text-4xl text-secondary">78.4</span>
                    <span className="text-tertiary font-label-caps text-xs">+1.2% this month</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary to-tertiary w-[78%]"></div>
                  </div>
                </div>
                <div className="glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-colors border-l-4 border-l-tertiary" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                  <span className="text-on-surface-variant font-label-caps uppercase text-[10px] mb-4 block">Job Creation</span>
                  <div className="font-stat-value text-4xl mb-2 text-white">420,000+</div>
                  <p className="text-on-surface-variant text-sm">Direct & indirect artisanal roles filled in Q3 2024.</p>
                </div>
                <div className="glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-colors" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                  <span className="text-on-surface-variant font-label-caps uppercase text-[10px] mb-4 block">Active Projects</span>
                  <div className="font-stat-value text-4xl mb-2 text-white">1,248</div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-primary-container bg-surface-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-primary-container bg-surface-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-primary-container bg-surface-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-primary-container bg-surface-variant flex items-center justify-center text-[10px] text-white">+12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Take Action: Impact Pathways */}
        <section className="py-[120px] bg-surface-container-lowest">
          <div className="container mx-auto px-[80px] max-w-[1440px]">
            <div className="text-center mb-20">
              <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Take Action</span>
              <h2 className="font-h2 text-[48px] text-white mb-4">Choose How You Build Nigeria</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Every citizen can contribute — through service, ideas, or capital.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {/* Join the Arena */}
              <Link to="/join" className="group glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-all duration-220 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgba(233,195,73,0.15)] block" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)'}}>
                <div className="w-16 h-16 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary/60">volunteer_activism</span>
                </div>
                <h3 className="font-h3 text-xl mb-3 text-white">Join the Arena</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Volunteer skills, mobilize communities, and become part of coordinated national action.</p>
                <div className="flex items-center gap-2 text-secondary font-label-caps">
                  Join Now <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
              {/* Project Nigeria */}
              <Link to="/project-nigeria" className="group glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-all duration-220 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgba(233,195,73,0.15)] block" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)'}}>
                <div className="w-16 h-16 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary/60">account_balance</span>
                </div>
                <h3 className="font-h3 text-xl mb-3 text-white">Project Nigeria</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Submit ideas, support transparent projects, and help shape visible national progress.</p>
                <div className="flex items-center gap-2 text-secondary font-label-caps">
                  Explore Projects <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
              {/* Fund Impact */}
              <Link to="/donate" className="group glass-card rounded-3xl p-8 hover:bg-surface-container-high transition-all duration-220 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgba(233,195,73,0.15)] block" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)'}}>
                <div className="w-16 h-16 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary/60">public</span>
                </div>
                <h3 className="font-h3 text-xl mb-3 text-white">Fund Impact</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Back verified initiatives with direct funding, diaspora capital, sponsorship, or institutional support.</p>
                <div className="flex items-center gap-2 text-secondary font-label-caps">
                  Fund Change <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Proof: Visible Results */}
        <section className="py-24 bg-background relative" style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/20 to-transparent opacity-50"></div>
          <div className="relative z-10 container mx-auto px-[80px] max-w-[1440px]">
            <div className="text-center mb-12">
              <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">National Impact</span>
              <h2 className="font-h2 text-[48px] text-white mb-4" style={{maxWidth: '760px'}}>Proof Of Movement. Visible To All.</h2>
              <p className="font-body-lg text-on-surface-variant" style={{maxWidth: '720px', marginTop: '18px'}}>Transparent execution. Measurable delivery. Real communities changed through collective national action.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-12">
              {/* Card 1: Projects Delivered */}
              <div className="glass-card rounded-3xl p-7 hover:bg-surface-container-high transition-all duration-220 hover:-translate-y-1" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)', minHeight: '320px'}}>
                <div className="w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[32px] text-secondary">construction</span>
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Projects Delivered</h3>
                <div className="mb-4">
                  <span className="font-stat-value text-4xl text-secondary">246</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-6">Completed national initiatives</p>
                <ul className="space-y-2 text-on-surface-variant text-sm mb-8">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Roads & transport</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Education upgrades</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Energy access</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Water infrastructure</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Digital public services</li>
                </ul>
                <Link to="/projects" className="flex items-center gap-2 text-secondary font-label-caps hover:text-secondary/80">
                  View Projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              {/* Card 2: Transparent Funding */}
              <div className="glass-card rounded-3xl p-7 hover:bg-surface-container-high transition-all duration-220 hover:-translate-y-1" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)', minHeight: '320px'}}>
                <div className="w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[32px] text-secondary">verified</span>
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Transparent Funding</h3>
                <div className="mb-4">
                  <span className="font-stat-value text-4xl text-secondary">₦4.2B</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-6">Publicly visible impact funding</p>
                <ul className="space-y-2 text-on-surface-variant text-sm mb-8">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Allocation visibility</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Audit-ready records</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Live contribution ledger</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Public accountability</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Project-level traceability</li>
                </ul>
                <Link to="/transparency" className="flex items-center gap-2 text-secondary font-label-caps hover:text-secondary/80">
                  Open Ledger <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              {/* Card 3: Lives Changed */}
              <div className="glass-card rounded-3xl p-7 hover:bg-surface-container-high transition-all duration-220 hover:-translate-y-1" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)', minHeight: '320px'}}>
                <div className="w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[32px] text-secondary">diversity_3</span>
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Lives Changed</h3>
                <div className="mb-4">
                  <span className="font-stat-value text-4xl text-secondary">18,420+</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-6">Citizens actively participating</p>
                <ul className="space-y-2 text-on-surface-variant text-sm mb-8">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Volunteer stories</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Community wins</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Local chapter impact</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Before / after snapshots</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Grassroots execution</li>
                </ul>
                <Link to="/stories" className="flex items-center gap-2 text-secondary font-label-caps hover:text-secondary/80">
                  Read Stories <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Lower Feature Strip */}
            <div className="mt-8 glass-card rounded-3xl p-7 flex flex-col md:flex-row items-center justify-between gap-8" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.15)'}}>
              <div className="flex-1">
                <span className="text-secondary font-label-caps uppercase tracking-widest mb-2 block">National Signal</span>
                <h3 className="font-h3 text-xl text-white mb-2">A movement measured in action — not noise.</h3>
                <p className="text-on-surface-variant text-sm">Every project, every volunteer, every contribution, and every community result is visible, accountable, and tied to measurable national progress.</p>
              </div>
              <Link to="/impact" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all whitespace-nowrap">
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
          <div className="relative z-10 container mx-auto px-[80px] max-w-[1440px] py-24">
            <div className="max-w-xl">
              <h2 className="font-h2 text-[48px] mb-8 leading-tight text-white">Project Nigeria:<br/>The Concrete Promise.</h2>
              <p className="font-body-lg text-white/80 mb-12">
                We aren't just building roads; we are paving the path to the African Century. Every girder placed and every kilovolt generated is a testament to our collective resilience.
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                  <div>
                    <h4 className="font-h3 text-xl mb-1 text-white">Watch: The Blueprint</h4>
                    <p className="text-white/60 text-sm">A 3-minute documentary on the national masterplan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                    <span className="material-symbols-outlined">description</span>
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

        {/* Trust Layer: Built On Trust */}
        <section className="py-24 relative" style={{background: '#071120', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/30 to-transparent opacity-50"></div>
          <div className="relative z-10 container mx-auto px-[80px] max-w-[1440px]">
            <div className="flex flex-col lg:flex-row gap-7 items-center">
              {/* Left Column */}
              <div className="lg:w-5/12">
                <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Built On Trust</span>
                <h2 className="font-h2 text-[48px] text-white mb-5" style={{maxWidth: '560px'}}>National progress must be transparent, accountable, and worthy of belief.</h2>
                <p className="font-body-lg text-on-surface-variant mb-8" style={{maxWidth: '540px'}}>Every contribution, every volunteer, every funded project, and every regional chapter is anchored on public visibility, verification, and measurable accountability.</p>
                <Link to="/trust" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all inline-flex items-center gap-2">
                  See How Trust Works <span className="material-symbols-outlined text-lg">verified_user</span>
                </Link>
              </div>
              {/* Right Column - Credibility Grid */}
              <div className="lg:w-7/12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="glass rounded-3xl p-6 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '180px'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-secondary">volunteer_activism</span>
                      <span className="text-on-surface-variant text-xs font-label-caps uppercase">Verified Volunteers</span>
                    </div>
                    <div className="font-stat-value text-3xl text-secondary mb-2">18,420+</div>
                    <p className="text-on-surface-variant text-xs">Identity checked • Chapter assigned</p>
                  </div>
                  <div className="glass rounded-3xl p-6 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '180px'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-secondary">public</span>
                      <span className="text-on-surface-variant text-xs font-label-caps uppercase">National Chapters</span>
                    </div>
                    <div className="font-stat-value text-3xl text-secondary mb-2">31</div>
                    <p className="text-on-surface-variant text-xs">Regional activation across Nigeria</p>
                  </div>
                  <div className="glass rounded-3xl p-6 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '180px'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-secondary">handshake</span>
                      <span className="text-on-surface-variant text-xs font-label-caps uppercase">Institutional Partners</span>
                    </div>
                    <div className="font-stat-value text-3xl text-secondary mb-2">84</div>
                    <p className="text-on-surface-variant text-xs">NGOs • private sector • civic bodies</p>
                  </div>
                  <div className="glass rounded-3xl p-6 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '180px'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-secondary">verified</span>
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
        <section className="py-[120px]">
          <div className="container mx-auto px-[80px] max-w-[1440px]">
            <div className="text-center mb-20">
              <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Faces of Change</span>
              <h2 className="font-h2 text-[48px] text-white">Impact Stories</h2>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-[24px] space-y-[24px]">
              {/* Story Card 1 */}
              <div className="break-inside-avoid glass-card rounded-3xl overflow-hidden group" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img alt="Tech Innovator" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiIBVlGvfThlcrXFRyQSXwVLPOzlY9LL_3hm21gDVI1MlX-bCmE3zmhbKjkppyqIl2KigmLTGiOQqxfT9QmHsV4bvHLP-1j2LstePMNMPAVxD6NG5pS6i7XH6nP4kwgAPtRJ-XhpKgOZTVOYtONW5aj7ffKDuzMaWCGiVz4pTFbpll56eIqpj2FYB3aEqXW700LgBM1X2bIRpGiTIuHGWCN6Y6WjdLdynPsRXU9MtHHd6vDigq1JXCOvlJKzMGk72KBQEHUMBfdiM"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-secondary text-on-secondary px-3 py-1 rounded text-[10px] font-label-caps mb-3 inline-block">TECH & INNOVATION</span>
                    <h4 className="font-h3 text-xl text-white">How Fiber-to-Farm is doubling yields in Benue.</h4>
                  </div>
                </div>
              </div>
              {/* Story Card 2 */}
              <div className="break-inside-avoid glass-card rounded-3xl p-8 border-t-4 border-t-secondary" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                <p className="font-body-lg italic text-on-surface mb-8">"For the first time in thirty years, our market has 24-hour power. The Arena didn't just promise; they delivered the grid."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                    <img alt="Market Trader" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqmekQ72PB4tzotiFQwlQ5YMpGrGB6txGv_fcyCzswZwYtq7h7iaAkOSvWDtxiN3xpWTfxam__RcEu3jvSYOdcJexMtxcJuCIfZYmv_lSO962LCfzM-dqFJiQsNighVY_EUWiXOnJ2SZQ-qVNTd27bsP2RRXfdbDD8Zsyk77EXsJiHJf0nK7clj0stHdku7PxCYFKDGr7WoPbTKkAy2NqdPbOPeqcvswLL5BYBeZetDaQxcUKNdO5ZbzR6u2P8genMgo3S9zcsHjE"/>
                  </div>
                  <div>
                    <h5 className="font-label-caps text-sm text-white">Alhaji Musa S.</h5>
                    <p className="text-on-surface-variant text-xs">Market Union Leader, Kaduna</p>
                  </div>
                </div>
              </div>
              {/* Story Card 3 */}
              <div className="break-inside-avoid glass-card rounded-3xl overflow-hidden group" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                <div className="relative aspect-square overflow-hidden">
                  <img alt="Artisanal Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0oSbKhDzhqApPSSOWSyosoahZ7u_gR6DjB4TDW3woJgmX3_jK4L4si7Rm7pHYaq4JxP7_xbokvfrbHVqMLiK6papqFwBgjBaP4rkpPj-VVEInDatvItApBDYdcBBhCNHGdV9u4Oe7x-4oMdlpnAljnwbCpER0gsd9b0crACS2MXQR9wUt_1XJg2lVG2ilk6-z9RC4dbEeyob-7P7Gd0q922lsQcX31P9pCoj8R1YE5RjnX79ou5kV_yh3cesh-RgZGkuJTof97v4"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded text-[10px] font-label-caps mb-3 inline-block">CULTURAL WEALTH</span>
                    <h4 className="font-h3 text-xl text-white">Artisans of the Arena: Restoring National Pride.</h4>
                  </div>
                </div>
              </div>
              {/* Story Card 4 */}
              <div className="break-inside-avoid glass-card rounded-3xl p-8 bg-gradient-to-br from-[#003153] to-background" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                <div className="mb-6 text-secondary">
                  <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>format_quote</span>
                </div>
                <h4 className="font-h3 text-2xl mb-4 text-white">"The Arena is more than a platform; it's a social contract signed in digital ink."</h4>
                <button className="text-secondary font-label-caps text-xs flex items-center gap-2">READ FULL EDITORIAL <span className="material-symbols-outlined text-sm">open_in_new</span></button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Standard: Clean & Ivory */}
        <section className="py-[120px] bg-on-surface text-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-lowest/5 -skew-x-12 translate-x-1/2"></div>
          <div className="container mx-auto px-[80px] max-w-[1440px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[120px] items-center">
              <div>
                <span className="text-secondary-container font-label-caps uppercase mb-4 block">Institutional Integrity</span>
                <h2 className="font-h2 text-[48px] text-primary-container mb-8">The Trust Standard</h2>
                <p className="font-body-lg text-primary-container/70 mb-10">
                  Transparency is our baseline. Every naira tracked, every milestone audited by third-party institutional partners. No shadows, just results.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-h3 text-primary-container mb-2">100%</div>
                    <div className="font-label-caps text-[10px] uppercase text-primary-container/50">Audit Transparency</div>
                  </div>
                  <div>
                    <div className="text-3xl font-h3 text-primary-container mb-2">94%</div>
                    <div className="font-label-caps text-[10px] uppercase text-primary-container/50">Project Delivery Rate</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-12 rounded-[40px] shadow-xl border border-primary-container/5">
                <h4 className="font-label-caps text-primary-container/40 text-center mb-10">GLOBAL COMPLIANCE PARTNERS</h4>
                <div className="grid grid-cols-2 gap-12 items-center opacity-60">
                  <div className="h-12 bg-primary-container/10 rounded flex items-center justify-center font-black tracking-tighter text-primary-container/30">AUDIT_X</div>
                  <div className="h-12 bg-primary-container/10 rounded flex items-center justify-center font-black tracking-tighter text-primary-container/30">GLOBE_TRUST</div>
                  <div className="h-12 bg-primary-container/10 rounded flex items-center justify-center font-black tracking-tighter text-primary-container/30">STAND_CERT</div>
                  <div className="h-12 bg-primary-container/10 rounded flex items-center justify-center font-black tracking-tighter text-primary-container/30">NIG_PULSE</div>
                </div>
                <div className="mt-12 pt-8 border-t border-primary-container/10 flex justify-center">
                  <button className="bg-primary-container text-white px-8 py-3 rounded-full font-label-caps hover:bg-black transition-all">
                    VIEW AUDIT REPORTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Conversion: Join The National Build */}
        <section className="py-28 relative" style={{background: '#071120', borderTop: '1px solid rgba(255,255,255,0.06)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/30 to-transparent opacity-50"></div>
          <div className="relative z-10 container mx-auto px-[80px] max-w-[1440px]">
            <div className="text-center mb-12">
              <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Join The National Build</span>
              <h2 className="font-h2 text-[48px] text-white mb-5" style={{maxWidth: '820px', margin: '0 auto'}}>Every meaningful movement needs people willing to build.</h2>
              <p className="font-body-lg text-on-surface-variant" style={{maxWidth: '760px', margin: '18px auto 0'}}>Whether you serve communities, build infrastructure, mobilize support, or fund impact — there is a place for you here.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Citizens */}
              <div className="glass rounded-3xl p-8 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '260px'}}>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl text-secondary">volunteer_activism</span>
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Citizens</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Join a chapter, volunteer locally, contribute skills, and become part of practical national action.</p>
                <Link to="/join" className="text-secondary font-label-caps flex items-center gap-2">
                  Join Chapter <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              {/* Builders */}
              <div className="glass rounded-3xl p-8 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '260px'}}>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl text-secondary">account_balance</span>
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Builders</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Submit initiatives, propose projects, organize civic solutions, and help shape measurable national progress.</p>
                <Link to="/project-nigeria" className="text-secondary font-label-caps flex items-center gap-2">
                  Submit Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              {/* Partners */}
              <div className="glass rounded-3xl p-8 hover:-translate-y-1 transition-all duration-220" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '260px'}}>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl text-secondary">handshake</span>
                </div>
                <h3 className="font-h3 text-xl mb-4 text-white">Partners</h3>
                <p className="text-on-surface-variant font-body-md mb-8">Institutions, donors, NGOs, and strategic partners can fund and scale meaningful impact.</p>
                <Link to="/partners" className="text-secondary font-label-caps flex items-center gap-2">
                  Partner With Us <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
                Enter The Arena <span className="material-symbols-outlined">trending_flat</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Conversion Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-[72px] left-0 w-full z-50 px-4 py-3" style={{background: 'rgba(7, 17, 32, 0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingBottom: 'env(safe-area-inset-bottom)'}}>
        <div className="flex items-center justify-between">
          <span className="text-white font-label-caps text-xs">Build Nigeria With Us</span>
          <Link to="/join" onClick={() => trackJoinClick('sticky_mobile')} className="bg-secondary text-on-secondary px-5 py-2 rounded-full font-label-caps text-xs hover:brightness-110 transition-all">
            Join
          </Link>
        </div>
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-60 flex justify-around items-center px-[18px] py-3" aria-label="Bottom Navigation" role="navigation" style={{background: 'rgba(7, 17, 32, 0.90)', backdropFilter: 'blur(18px)', borderTop: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 -4px 18px rgba(0,0,0,0.22)', borderRadius: '18px 18px 0 0', paddingBottom: 'env(safe-area-inset-bottom)'}}>
        <Link to="/" className="flex flex-col items-center justify-center min-w-[48px] py-1">
          <span className="material-symbols-outlined text-[23px] text-white/72">account_balance</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/72">Arena</span>
        </Link>
        <Link to="/impact" className="flex flex-col items-center justify-center min-w-[48px] py-1">
          <span className="material-symbols-outlined text-[23px] text-white/72">insights</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/72">Pulse</span>
        </Link>
        <Link to="/community" className="flex flex-col items-center justify-center min-w-[48px] py-1">
          <span className="material-symbols-outlined text-[23px] text-white/72">auto_stories</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/72">Stories</span>
        </Link>
        <Link to="/donate" className="flex flex-col items-center justify-center min-w-[48px] py-1">
          <span className="material-symbols-outlined text-[23px] text-white/72">security</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/72">Vault</span>
        </Link>
      </nav>

      {/* Footer */}
      <footer className="bg-[#031B30] border-t border-[rgba(255,255,255,.08)] py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="text-[#D4AF37] font-bold text-xl mb-4 font-['Sora']">CITY BOY ARENA</div>
              <p className="text-[#94A3B8] text-sm tracking-wide mb-6 max-w-sm">
                Nigeria's premier platform for nation-building, trust-anchored infrastructure, and digital civic engagement.
              </p>
              <div className="flex gap-4">
                <Link to="#" className="text-[#94A3B8] hover:text-[#D4AF37] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.7 1.102-.483 1.984-1.248 2.391-2.162-1.03.447-2.171.772-3.382.965-.876-.759-2.123-.952-3.137-1.053-1.616.776-3.37 1.267-5.305 1.267-4.306 0-7.815-3.489-7.815-7.784 0-.612.069-1.21.202-1.784-3.363-.192-5.723-1.78-7.652-4.383-.63.955-.992 2.046-.992 3.213 0 2.697 1.742 4.956 4.142 5.698-.61-.104-1.186-.314-1.686-.583v.059c0 3.771 2.679 6.921 6.223 7.636-.654.179-1.341.343-2.058.343-.51 0-1.006-.1-1.49-.29.1.007.182.015.273.019 2.747 0 5.336-1.143 6.596-2.728 1.26-1.585 1.984-3.578 1.984-5.633 0-.095-.003-.19-.009-.283-.855-.617-1.595-1.39-2.181-2.267z"/></svg>
                </Link>
                <Link to="#" className="text-[#94A3B8] hover:text-[#D4AF37] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
                <Link to="#" className="text-[#94A3B8] hover:text-[#D4AF37] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.271c0-3.064 1.867-4.729 4.592-4.729 1.312 0 2.064.106 2.062.106v2.571h-1.131c-1.141 0-1.489.721-1.489 1.461v1.762h2.995l-.395 3.622h-2.6v9.294h6.592c.73 0 1.323-.593 1.323-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-label-caps text-xs text-white uppercase mb-4">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link to="/volunteer" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Volunteer</Link>
                <Link to="/donate" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Donate</Link>
                <Link to="/partners" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Partner With Us</Link>
                <Link to="/projects" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Projects</Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-label-caps text-xs text-white uppercase mb-4">Resources</h4>
              <div className="flex flex-col gap-3">
                <Link to="/impact" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Impact Report</Link>
                <Link to="/trust" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Trust & Transparency</Link>
                <Link to="/governance" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Governance</Link>
                <Link to="/transparency" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Transparency Ledger</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-label-caps text-xs text-white uppercase mb-4">Contact</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@cityboyarena.com" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">hello@cityboyarena.com</a>
                <a href="mailto:media@cityboyarena.com" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">media@cityboyarena.com</a>
                <a href="#" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors">Procurement Portal</a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,.08)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94A3B8] text-xs">© 2026 City Boy Arena. National Infrastructure Command Centre.</p>
            <div className="flex gap-6">
              <Link to="#" className="text-[#94A3B8] hover:text-[#D4AF37] text-xs transition-colors">Privacy Protocol</Link>
              <Link to="#" className="text-[#94A3B8] hover:text-[#D4AF37] text-xs transition-colors">Terms of Service</Link>
              <Link to="#" className="text-[#94A3B8] hover:text-[#D4AF37] text-xs transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      <ArenaDesk />
    </>
  )
}