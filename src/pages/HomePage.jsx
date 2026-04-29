import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-[#003153]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-amber-500/20 shadow-[0_0_20px_rgba(255,191,0,0.1)]">
        <div className="flex justify-between items-center px-8 h-20 max-w-[1440px] mx-auto">
          <div className="text-xl font-black tracking-widest text-amber-500 uppercase font-['Sora']">CITY BOY ARENA</div>
          <nav className="hidden md:flex items-center gap-8 font-['Sora'] font-bold tracking-tight">
            <Link to="/" className="text-amber-500 border-b-2 border-amber-500 pb-1">The Arena</Link>
            <Link to="#" className="text-slate-300 hover:text-amber-200 transition-colors">National Pulse</Link>
            <Link to="#" className="text-slate-300 hover:text-amber-200 transition-colors">Infrastructure</Link>
            <Link to="#" className="text-slate-300 hover:text-amber-200 transition-colors">Impact Stories</Link>
          </nav>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-slate-300 hover:text-amber-400 transition-colors">notifications</button>
            <button className="material-symbols-outlined text-slate-300 hover:text-amber-400 transition-colors">account_circle</button>
            <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-caps hover:brightness-110 active:scale-95 transition-all">
              Enter Arena
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section: Cinematic Carousel */}
        <section className="relative h-[921px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img alt="Nigerian Metropolis" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxdn7rXqG0UkGspsf3aCjHCRSLpSODNQ-BZ2vAENjSZDZ9vZo_aRnJUgKvp38Y3bY_1YHL1xLvegVwnNoZsfvpfA6sX86i083Odjz6OgMePeviRhwXtxaAthazy7kSpmfDu-KOpjGUFJRJiy13oJFN-ovBSxfjQ2eFv9mA28kod5KYqVX3viuMsMZvS0hLHTxC1Pi___1Y-nRsCn6ebrt7d2FjoJ19JZq89fIfOppRT0RrFtJUsY8dkcEPEA_3C6yPX2ZHeYDSqVU"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 container mx-auto px-[80px] h-full flex flex-col justify-center items-start max-w-[1440px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-secondary font-label-caps uppercase text-[10px]">National Status: Operational</span>
            </div>
            <h1 className="font-h1 text-[64px] max-w-4xl mb-6 text-white">
              Building Trust. <br/>
              Driving Action. <br/>
              <span className="bg-gradient-to-r from-[#FFE088] via-[#D4AF37] to-[#AF8D11] bg-clip-text text-transparent">Reimagining Nigeria Together.</span>
            </h1>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mb-10">
              The City Boy Arena is the premier digital command centre for national transformation. We bridge the gap between institutional vision and grassroots impact.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-on-secondary-container px-10 py-4 rounded-full font-label-caps text-lg flex items-center gap-3 hover:shadow-[0_0_25px_rgba(233,195,73,0.4)] transition-all">
                Join The Movement <span className="material-symbols-outlined">trending_flat</span>
              </button>
              <button className="bg-surface-container/80 backdrop-blur-md border border-outline/30 px-10 py-4 rounded-full font-label-caps text-lg hover:bg-surface-container-high transition-all">
                Explore Projects
              </button>
            </div>
          </div>
          {/* Hero Indicators */}
          <div className="absolute bottom-12 right-[80px] flex gap-4">
            <div className="w-12 h-1 bg-secondary"></div>
            <div className="w-12 h-1 bg-white/20"></div>
            <div className="w-12 h-1 bg-white/20"></div>
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
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden bg-[#003153]/90 backdrop-blur-2xl fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-4 px-6 rounded-t-3xl border-t border-amber-500/30 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <Link to="/" className="flex flex-col items-center justify-center text-amber-500 drop-shadow-[0_0_8px_rgba(255,191,0,0.6)]">
          <span className="material-symbols-outlined">account_balance</span>
          <span className="font-['Sora'] text-[10px] font-semibold uppercase tracking-wider">Arena</span>
        </Link>
        <Link to="#" className="flex flex-col items-center justify-center text-slate-400 hover:text-amber-300">
          <span className="material-symbols-outlined">insights</span>
          <span className="font-['Sora'] text-[10px] font-semibold uppercase tracking-wider">Pulse</span>
        </Link>
        <Link to="#" className="flex flex-col items-center justify-center text-slate-400 hover:text-amber-300">
          <span className="material-symbols-outlined">auto_stories</span>
          <span className="font-['Sora'] text-[10px] font-semibold uppercase tracking-wider">Stories</span>
        </Link>
        <Link to="#" className="flex flex-col items-center justify-center text-slate-400 hover:text-amber-300">
          <span className="material-symbols-outlined">security</span>
          <span className="font-['Sora'] text-[10px] font-semibold uppercase tracking-wider">Vault</span>
        </Link>
      </nav>

      {/* Footer */}
      <footer className="bg-[#003153] border-t border-white/10 py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div>
            <div className="text-amber-500 font-bold text-xl mb-4 font-['Sora']">CITY BOY ARENA</div>
            <p className="text-slate-500 font-['Sora'] text-sm tracking-wide mb-6 max-w-sm">
              Empowering the collective will of the people through data-driven governance and national pride.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-slate-500 hover:text-amber-500 transition-colors"><span className="material-symbols-outlined">public</span></Link>
              <Link to="#" className="text-slate-500 hover:text-amber-500 transition-colors"><span className="material-symbols-outlined">alternate_email</span></Link>
              <Link to="#" className="text-slate-500 hover:text-amber-500 transition-colors"><span className="material-symbols-outlined">group</span></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <Link to="#" className="text-slate-500 hover:text-slate-300 font-['Sora'] text-sm">Privacy Protocol</Link>
              <Link to="#" className="text-slate-500 hover:text-slate-300 font-['Sora'] text-sm">Institutional Disclosure</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="#" className="text-slate-500 hover:text-slate-300 font-['Sora'] text-sm">Trust Standards</Link>
              <Link to="#" className="text-slate-500 hover:text-slate-300 font-['Sora'] text-sm">Command Access</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-slate-500 font-['Sora'] text-xs">© 2024 City Boy Arena. National Infrastructure Command Centre.</p>
        </div>
      </footer>
    </>
  )
}