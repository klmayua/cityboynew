import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#003153]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center px-8 h-20 w-full max-w-[1440px] mx-auto">
          <div className="text-2xl font-black tracking-tighter text-secondary italic">City Boy Arena</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-h3 text-[12px] uppercase font-bold tracking-tight text-secondary border-b-2 border-secondary pb-1">Hub</Link>
            <Link to="/transparency" className="font-h3 text-[12px] uppercase font-bold tracking-tight text-slate-300 hover:text-white transition-colors">Transparency</Link>
            <Link to="/donate" className="font-h3 text-[12px] uppercase font-bold tracking-tight text-slate-300 hover:text-white transition-colors">Donor</Link>
            <Link to="/volunteer" className="font-h3 text-[12px] uppercase font-bold tracking-tight text-slate-300 hover:text-white transition-colors">Volunteer</Link>
            <Link to="#" className="font-h3 text-[12px] uppercase font-bold tracking-tight text-slate-300 hover:text-white transition-colors">Command</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/donate" className="px-6 py-2 bg-transparent border border-secondary text-secondary font-h3 text-[12px] uppercase font-bold hover:bg-secondary/10 transition-all">Donate</Link>
            <Link to="/join" className="px-6 py-2 bg-secondary text-on-secondary font-h3 text-[12px] uppercase font-bold gold-glow active:scale-95 transition-all">Join Now</Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-container via-[#001f33] to-surface-container-lowest">
            {/* Decorative Particles */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40"></div>
            <div className="absolute top-3/4 left-2/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse opacity-30"></div>
            <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-50"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl text-center">
            <span className="inline-block px-4 py-1 mb-6 rounded-full border border-secondary/30 bg-secondary/5 text-secondary font-h3 text-[12px] uppercase tracking-widest">Imperial Civic Architecture</span>
            <h1 className="font-h1 text-[40px] md:text-[64px] leading-tight mb-8 text-white">
              Building Trust. Driving Action. <br/>
              <span className="text-secondary italic">Reimagining Nigeria Together.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Join the digital vanguard of national transformation. We are deploying secure, audited, and high-impact infrastructure to empower every citizen.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/join" className="px-10 py-4 bg-secondary text-on-secondary font-h3 text-body-md font-bold rounded-full gold-glow hover:scale-105 transition-all">Join Arena</Link>
              <Link to="/project-nigeria" className="px-10 py-4 bg-white/5 border border-white/20 text-white font-h3 text-body-md font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                Explore Impact <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Floating Live Metrics Ribbon */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-6xl px-8">
            <div className="arena-glass border border-white/10 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl">
              <div className="text-center md:border-r border-white/5">
                <div className="font-stat-value text-secondary text-[24px] mb-1">142,800+</div>
                <div className="font-label-caps text-[10px] text-slate-400">ACTIVE VOLUNTEERS</div>
              </div>
              <div className="text-center md:border-r border-white/5">
                <div className="font-stat-value text-secondary text-[24px] mb-1">842</div>
                <div className="font-label-caps text-[10px] text-slate-400">PROJECTS LIVE</div>
              </div>
              <div className="text-center md:border-r border-white/5">
                <div className="font-stat-value text-secondary text-[24px] mb-1">₦4.2B+</div>
                <div className="font-label-caps text-[10px] text-slate-400">FUNDS DEPLOYED</div>
              </div>
              <div className="text-center">
                <div className="font-stat-value text-secondary text-[24px] mb-1">36/36</div>
                <div className="font-label-caps text-[10px] text-slate-400">CHAPTERS ACTIVE</div>
              </div>
            </div>
          </div>
        </section>

        {/* National Pulse */}
        <section className="py-32 px-8 bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4">
                <h2 className="font-h2 text-[48px] mb-6">National Pulse</h2>
                <p className="font-body-lg text-slate-400 mb-8">
                  Real-time momentum tracking across the federation. Our heat indicators visualize engagement, infrastructure health, and local movement growth.
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-xl border-l-4 border-tertiary">
                    <div className="font-h3 text-body-md text-white mb-1">Health Metric: Lagos Hub</div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-tertiary h-full w-[88%]"></div>
                    </div>
                    <div className="mt-2 font-label-caps text-[10px] text-tertiary">88% MOMENTUM</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl border-l-4 border-secondary">
                    <div className="font-h3 text-body-md text-white mb-1">Health Metric: Kano Sector</div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full w-[64%]"></div>
                    </div>
                    <div className="mt-2 font-label-caps text-[10px] text-secondary">64% MOMENTUM</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 relative aspect-video bg-[#001f33] rounded-3xl overflow-hidden shadow-inner border border-white/5">
                <img className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5N6fxeiknYnkxo0LndRonyo2Xb6oAAow7nFzABeocHaAmvs8j2BlgAvLVI6MPpj2eUkkltCgK1oAftapPxy4DctqrGGbn_Q-JQbhuhzWicoQn4_QOmBjO7JZQOmGBTk1FWwNe66FNW5Fcc94-EPdS1ufOLTW5z3mQCrCi-Vw63fUya1syR4BXUVtt-FSXNjM7fWp5nzttwy33S3NylYvgOuA_WUjt3u0XHS0CAJap8nMQEthdbkjRGhzO1CPaFU-8KCmW_X1p4vg" alt="Nigeria Map" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f33] via-transparent to-transparent"></div>
                <div className="absolute top-10 right-10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 bg-secondary/20 backdrop-blur-md px-3 py-1 rounded text-secondary font-label-caps text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span> LIVE UPDATES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stories Grid */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-h2 text-[48px] mb-4">Impact Stories</h2>
                <p className="font-body-lg text-slate-400">Human-centric milestones from the frontlines of progress.</p>
              </div>
              <button className="text-secondary font-h3 text-body-md flex items-center gap-2 hover:underline decoration-secondary underline-offset-8">View Archive <span className="material-symbols-outlined">chevron_right</span></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Story 1 */}
              <div className="group bg-surface-container rounded-3xl overflow-hidden border border-white/5 hover:border-secondary/30 transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0KDdl2DctZ3mwTFBscBC-R0evgPkzdpwi87yRYDrnamxRKEP8qMArk5rh7iXPNk2swNAIf1Eg3kR1d4Wf9QNc9RGvBdSnCIWxHIG5TZxm_d6tR5_grWK8fvXGObT6fD2c-3Lu13L8-zj5i4bdaKiQA07hKTmw_LcxMyC6KF4UqyfumObD0NA2a9Hc8lV4LQqeAD27SnXWORKghDtRrkgsO2w7FHdZ6440e45IXQrk93ZYvmK93G3WkOmtHwtY1Sdt2FNSSpTV1lU" alt="Elder with tablet" />
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-tertiary text-[10px] mb-4">DIGITAL LITERACY</div>
                  <h3 className="font-h3 text-[24px] text-white mb-4 leading-snug">The Silver Hub: Empowering Elders in Ibadan</h3>
                  <p className="font-body-md text-slate-400 mb-6">Bridging the generational gap through local command centers and shared learning.</p>
                  <a className="inline-flex items-center gap-2 text-secondary font-h3 text-body-md font-bold group-hover:gap-4 transition-all" href="#">Read Story <span className="material-symbols-outlined">east</span></a>
                </div>
              </div>
              {/* Story 2 */}
              <div className="group bg-surface-container rounded-3xl overflow-hidden border border-white/5 hover:border-secondary/30 transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt2nTOFK3r5O8RTcXM0XvykJSdyH7q0SHstt2Onkhjq7EI4GyojZLu03HhsG8aPDudRJOwGmAv1FxDvnDzzqFIQ2yic3Un3Bq678rQNyBnd9j0ua8pcDpYhTbTP0SJXhkeAs2WOE7AgyvDco5H3L15uEoIuxmvLiWY-eoQeRViZqm1xRnFbFEeKLIybXSN8y9dB0KrvwjWFGu10wBC6VknbsCoamLdOSZXRjcCcGuvg6J3RSfqB29Tl5gs1JENBwCBmPXnnEJKRto" alt="Solar farm" />
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-secondary text-[10px] mb-4">INFRASTRUCTURE</div>
                  <h3 className="font-h3 text-[24px] text-white mb-4 leading-snug">Project Solar: Lighting Up the Northern Belt</h3>
                  <p className="font-body-md text-slate-400 mb-6">Deploying sustainable power to 45 villages, impacting over 200,000 residents this quarter.</p>
                  <a className="inline-flex items-center gap-2 text-secondary font-h3 text-body-md font-bold group-hover:gap-4 transition-all" href="#">Read Story <span className="material-symbols-outlined">east</span></a>
                </div>
              </div>
              {/* Story 3 */}
              <div className="group bg-surface-container rounded-3xl overflow-hidden border border-white/5 hover:border-secondary/30 transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC1w4_WbppRbT1Znv5yg5iJnPxA59YyqJvBJ3ePQa15exmrVNSC-QJbgqeiYvCc0cduJz_311P2v8qAmqc09OFVhuW1KaDWtXfy5wDuqVYBeJQY96hO8Mk_o2Xw4XnJeyEu9c99l2L8X5K09SwAACCLHiHVg5mRjb15MlSiqxKloNKbkdIr8D2mtzLS0GYH8mPnUdEwpz42RERrRXGtA2N6t1QDbj_rlTnlq67zJgylO7hkGMPWmywtnWz6lTiNqrz4PlyoQ8ZUCY" alt="Entrepreneurs" />
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-primary text-[10px] mb-4">ECONOMIC ENGINE</div>
                  <h3 className="font-h3 text-[24px] text-white mb-4 leading-snug">Arena Grants: Funding the Next 1,000 SMEs</h3>
                  <p className="font-body-md text-slate-400 mb-6">Direct, audited funding pipelines that bypass bureaucracy to reach verified entrepreneurs.</p>
                  <a className="inline-flex items-center gap-2 text-secondary font-h3 text-body-md font-bold group-hover:gap-4 transition-all" href="#">Read Story <span className="material-symbols-outlined">east</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Nigeria Flagship */}
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img className="w-full h-full object-cover brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCifcg358D12tRYn-dBam1PwTKBXDv7bJbwaPi6hQ0dSJ1IaWaPfO5ZdF-GTd3eCz42fX3RRBovnfs_l1qc5hLx6L-_OhFExzLKvLl1Tq2uaNRXjxfrdig4E-p3JzUn6VR1Cp26-M7_QkAfsoR549sIb_Q2btX4EWM1yisyXVd9QK_dNW7jW49L-sf77FfEKPYvKJ7TzAzBTgru1qJOevR7lJAeX_l5B3V_nWl9GSPW1vDcf6bpTyt72xPlrgfmv1zKerxqS6ycFE" alt="Nigeria skyline" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 max-w-[1440px] mx-auto w-full">
            <div className="max-w-2xl">
              <span className="font-label-caps text-secondary text-[12px] mb-4 block">FLAGSHIP INITIATIVE</span>
              <h2 className="font-h2 text-[56px] text-white mb-8 leading-tight">Project Nigeria: The Arena Mandate</h2>
              <p className="font-body-lg text-slate-200 mb-10 leading-relaxed">
                A massive visual storytelling band dedicated to the singular goal of unifying our fragmented infrastructure. Every stone laid, every line of code written, is a step toward a sovereign digital future.
              </p>
              <button className="px-12 py-5 bg-secondary text-on-secondary font-h3 text-body-lg font-black rounded-full gold-glow hover:bg-secondary-fixed transition-colors">Launch Deployment Hub</button>
            </div>
          </div>
        </section>

        {/* Trust Layer - White Section */}
        <section className="py-24 bg-white text-[#003153]">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-h2 text-[48px] mb-6">The Trust Standard</h2>
                <p className="font-body-lg text-slate-600 mb-12">
                  Radical transparency is not an option; it is our foundation. All Arena figures are audited in real-time on our secure digital ledger.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="border-t-2 border-[#003153] pt-6">
                    <div className="font-stat-value text-[32px] text-[#003153]">100%</div>
                    <div className="font-label-caps text-[10px] text-slate-500 uppercase">AUDIT COVERAGE</div>
                  </div>
                  <div className="border-t-2 border-[#003153] pt-6">
                    <div className="font-stat-value text-[32px] text-[#003153]">₦0</div>
                    <div className="font-label-caps text-[10px] text-slate-500 uppercase">UNACCOUNTED FUNDS</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">PARTNER_ALPHA</div>
                <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">TRUST_BETA</div>
                <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">CIVIC_GAMMA</div>
                <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">LEDGER_DELTA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Arena CTA */}
        <section className="py-32 px-8">
          <div className="max-w-4xl mx-auto text-center arena-glass p-16 rounded-[48px] border border-secondary/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[120px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[120px] -ml-32 -mb-32"></div>
            <h2 className="font-h2 text-[48px] mb-6 text-white">Secure Your Place</h2>
            <p className="font-body-lg text-slate-300 mb-10">Sign up in 60 seconds to join the Command Center and start contributing to national projects.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input className="flex-grow bg-white/5 border border-white/20 rounded-full px-8 py-4 text-white focus:outline-none focus:border-secondary transition-colors" placeholder="Enter your email address" type="email"/>
              <button className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-h3 font-bold hover:scale-105 active:scale-95 transition-all">Sign Up Now</button>
            </form>
            <p className="mt-6 font-label-caps text-[10px] text-slate-500">JOIN 12,000+ CITIZENS WHO SIGNED UP THIS WEEK</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 pt-16 pb-8 bg-[#001F33] flex flex-col items-center text-center px-4">
        <div className="max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16 px-8">
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-white mb-4">City Boy Arena</div>
            <p className="font-body-md text-slate-400">The premier platform for nation-building, trust-anchored infrastructure, and digital civic engagement.</p>
          </div>
          <div>
            <h4 className="font-h3 text-body-md text-white mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li><a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href="#">Impact Report</a></li>
              <li><a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href="#">Security Ledger</a></li>
              <li><a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href="#">Contact Command</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-h3 text-body-md text-white mb-6 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-4">
              <li><a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href="#">National Hub</a></li>
              <li><a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href="#">Command Centre</a></li>
              <li><a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href="#">Volunteer Grid</a></li>
              <li><a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href="#">Analytics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-h3 text-body-md text-white mb-6 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer">
                <span className="material-symbols-outlined">share</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer">
                <span className="material-symbols-outlined">mail</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-white/5 pt-8">
          <p className="font-label-caps text-xs text-slate-500 tracking-wide">© 2024 City Boy Digital Arena. A Nation-Building Initiative.</p>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-[#003153]/95 backdrop-blur-lg rounded-t-3xl border-t border-secondary/30 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <Link to="/" className="flex flex-col items-center justify-center text-secondary bg-secondary/10 rounded-xl p-2 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
          <span className="material-symbols-outlined">home</span>
          <span className="font-h3 text-[10px] font-bold uppercase mt-1">Home</span>
        </Link>
        <Link to="/project-nigeria" className="flex flex-col items-center justify-center text-slate-400 p-2">
          <span className="material-symbols-outlined">assignment</span>
          <span className="font-h3 text-[10px] font-bold uppercase mt-1">Tasks</span>
        </Link>
        <Link to="/join" className="flex flex-col items-center justify-center text-slate-400 p-2">
          <span className="material-symbols-outlined">military_tech</span>
          <span className="font-h3 text-[10px] font-bold uppercase mt-1">Rewards</span>
        </Link>
        <Link to="#" className="flex flex-col items-center justify-center text-slate-400 p-2">
          <span className="material-symbols-outlined">chat</span>
          <span className="font-h3 text-[10px] font-bold uppercase mt-1">Chat</span>
        </Link>
      </nav>
    </>
  )
}