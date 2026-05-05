import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowForward, PlayCircle, ChevronLeft, ChevronRight, LocationOn, PulseAlert, MilitaryTech, ElectricBolt, Diversity3, Eco, HistoryEdu, AutoStories, AssuredWorkload, MedicalServices, TrendingFlat, Verified, Forum } from '@material-symbols-svg/react/outlined'

export default function ProjectNigeriaPage() {
  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[68vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover brightness-[0.4]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBabdWin9I8xdGhAILzrSU42KTKicyezPSzjQi6fVYzKzVir2d4fn49MMdUbqqs_h2XZbX0j9zSNZveJDcRCj2Bcfv8BjdTG6tShMVA9Bq61DogG7Zyt0Qlbgqr3p_uMYT54JnxkJcEL6FekQdSDZXd3R4KHzwvN8JfFm4UIe4TvBjLEZeFgvH7NdeolqfaDcUCfnPlElqruOBDoL6TeK5FgAcO9hxhH3rICm_5LJhCWiix5WPfiaxo5LIxZgD2E8jfEELkGeWplA" alt="Lagos city"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
            <div className="max-w-4xl">
              <span className="font-label-caps text-secondary-fixed mb-4 block">THE IMPERIAL INITIATIVE</span>
              <h1 className="font-h1 text-on-background mb-6 leading-tight text-white">THE HEARTBEAT OF A <span className="text-secondary italic">NEW NATION</span></h1>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mb-10">Experience the cinematic unfolding of Nigeria's digital transformation. Join the arena where civic duty meets modern luxury.</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-full bg-secondary text-on-secondary font-h3 text-lg flex items-center gap-3 shadow-[0_0_20px_rgba(233,195,73,0.2)]">
                  ENTER ARENA
                  <ArrowForward className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-full border border-secondary/30 text-secondary font-h3 text-lg flex items-center gap-3 hover:bg-secondary/5 transition-all">
                  WATCH THE FILM
                  <PlayCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          {/* Real-time Ticker */}
          <div className="absolute bottom-0 w-full bg-primary-container/40 backdrop-blur-md border-y border-white/5 py-4 overflow-hidden">
            <div className="flex items-center space-x-12 whitespace-nowrap px-8">
              <div className="flex items-center gap-2 text-secondary-fixed font-label-caps">
                <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#63dca6]"></span> LIVE PROJECTS: 1,402
              </div>
              <span className="text-white/20 font-h3">•</span>
              <div className="text-on-surface-variant font-label-caps">ABUJA TECH CORRIDOR: 84% FUNDED</div>
              <span className="text-white/20 font-h3">•</span>
              <div className="text-on-surface-variant font-label-caps">DELTA RENEWABLES: STAGE 2 INITIATED</div>
              <span className="text-white/20 font-h3">•</span>
              <div className="text-on-surface-variant font-label-caps">LAGOS WATERWAY EXPANSION: COMPLETED</div>
              <span className="text-white/20 font-h3">•</span>
              <div className="text-on-surface-variant font-label-caps">NATION TRUST SCORE: 4.8/5.0</div>
            </div>
          </div>
        </section>

        {/* Featured Stories Carousel */}
        <section className="py-20 px-8 max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-label-caps text-secondary mb-2 block uppercase">Editorial Selections</span>
              <h2 className="font-h2 text-white">Voices of the Arena</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp_bn4vk4XSzhlUKBI_B7vzxw1HVmB82sQ6f5NdnBWUwdaVSxm65FJaUvBXkKxMogR_yMhQcitR0gfRNVK1ZTg-i_myZVFW7ZWJ7rYe3DOUFpx9Y86QjVZBIuqU-ulnKDMgnVACYrC9VtvTj_Q6w5x2bsjypnwJRvy7lkNaiKQJUdp6hwojAp3l3qUmZaXQrQZeIoPxD35j7CDm48LINX-mhu_5hYCQt5LCePsERwBWaqjl2rjJQG3GpiJleM1o-xxc8oonzE0ArU" alt="Tech visionary"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4">PREMIUM FEATURE</span>
                <h3 className="font-h3 text-white mb-2">The Architect of Lagos 2.0</h3>
                <p className="text-on-surface-variant font-body-md line-clamp-2">How one innovator is redesigning the urban fabric through the City Boy Arena decentralized funding model.</p>
              </div>
            </div>
            <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHnfMdVvfvS_lmcGkoO7VqQSD02lr_p2qUWbDcJa9gxgEO7Vdvf_HMiwcrIQ5mrxUdPCRNfcpBoP5PHBrtcJzWp0dQCGU5AsRU94OCeISoYpoc9xeca5a2sn85ZEkDT6O1oY0nXLBOMs5mZKrawlmIynQXJPVJWDYD_o9PY2-9HAWKswg50CpDQaGHWMQmI8-R821zAv5pZpakV5UZT-rvLJWa4gNgjg3sprne0_OYcPUmkuJz0s5vIJoMzlys-mKQKIYejBwW4Ow" alt="Scholars"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4">COMMUNITY SPOTLIGHT</span>
                <h3 className="font-h3 text-white mb-2">Education Without Borders</h3>
                <p className="text-on-surface-variant font-body-md line-clamp-2">Inside the collaborative movement that connected 500 remote villages to the national knowledge grid.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Nigeria Map */}
        <section className="bg-surface-container-lowest py-20">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <span className="font-label-caps text-secondary mb-4 block">LIVE INTERACTIVE GRID</span>
                <h2 className="font-h2 mb-6 text-white">Regional <span className="italic text-secondary">Impact</span> Map</h2>
                <p className="text-on-surface-variant font-body-lg mb-8">Navigate through the 36 states and the FCT to witness regional storytelling. Each node represents a citizen-led initiative currently unfolding.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-container/20 border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <LocationOn className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Active Nodes</div>
                      <div className="text-sm text-on-surface-variant">4,281 locations verified</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-container/20 border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary">
                      <PulseAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Citizen Engagement</div>
                      <div className="text-sm text-on-surface-variant">+12% growth this week</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 relative">
                <div className="aspect-video rounded-3xl overflow-hidden border border-secondary/20 shadow-2xl relative">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMyFUhbz1A85WmQ5M5RTmZ1WG4xCKjIxgIqoGtK0QSbArdVxPGK3U54DaJQnJmUw1a1SPvpY3p_D4rjihSKrhb4N2GThKn6MmdT4M_i1RhqeOjKzcAWi50VCUuhNRsmt--0F15qQ8ehTzc3M7Xi8bUmf0dWed4TeVOv7Nk-x4jySWLOBYc3qLwjIusbommNlIbdLFvRRMHk6h2u-IO6AsaCk2s4Ldwn_yg_jtOAe33pf85mALYMByf2s7oxYdpINu2eQLcwKdbErs" alt="Nigeria map"/>
                  <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
                  <div className="absolute top-8 left-8 p-4 rounded-2xl border border-white/10 max-w-[200px]" style={{background: 'rgba(0, 49, 83, 0.2)', backdropFilter: 'blur(10px)'}}>
                    <div className="text-[10px] font-bold text-secondary-fixed uppercase mb-2">Selected Hub</div>
                    <div className="font-h3 text-xl mb-1 text-white">Enugu Tech</div>
                    <div className="text-xs text-on-surface-variant">Coal City Creative Cluster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaigns & Challenges Grid */}
        <section className="py-20 px-8 max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary mb-2 block uppercase">Movement Initiatives</span>
            <h2 className="font-h2 mb-4 text-white">Join the Arena</h2>
            <p className="text-on-surface-variant">Scale your impact by participating in verified national challenges. Earn Prestige while building the nation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-surface-container relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MilitaryTech className="w-16 h-16" />
              </div>
              <div className="mb-6 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <ElectricBolt className="w-6 h-6" />
              </div>
              <h3 className="font-h3 text-xl mb-2 text-white">Power Pioneers</h3>
              <p className="text-sm text-on-surface-variant mb-6">Support the rollout of solar micro-grids in underserved coastal communities.</p>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-secondary w-2/3 shadow-[0_0_8px_#e9c349]"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-on-surface-variant">67% FUNDED</span>
                <button className="text-xs font-bold text-secondary uppercase hover:underline">Commit</button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-surface-container relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Diversity3 className="w-16 h-16" />
              </div>
              <div className="mb-6 w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                <Eco className="w-6 h-6" />
              </div>
              <h3 className="font-h3 text-xl mb-2 text-white">Green Belt Hub</h3>
              <p className="text-sm text-on-surface-variant mb-6">Urban reforestation project targeting the top 10 most congested cities.</p>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-tertiary w-1/4 shadow-[0_0_8px_#63dca6]"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-on-surface-variant">25% FUNDED</span>
                <button className="text-xs font-bold text-secondary uppercase hover:underline">Commit</button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-surface-container relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <HistoryEdu className="w-16 h-16" />
              </div>
              <div className="mb-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <AutoStories className="w-6 h-6" />
              </div>
              <h3 className="font-h3 text-xl mb-2 text-white">Linguistic Archive</h3>
              <p className="text-sm text-on-surface-variant mb-6">Preserving 500+ indigenous languages through digital vocal mapping.</p>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-primary w-1/2 shadow-[0_0_8px_#a5caf4]"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-on-surface-variant">50% FUNDED</span>
                <button className="text-xs font-bold text-secondary uppercase hover:underline">Commit</button>
              </div>
            </div>
            {/* Card 4 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-surface-container relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <AssuredWorkload className="w-16 h-16" />
              </div>
              <div className="mb-6 w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center text-error">
                <MedicalServices className="w-6 h-6" />
              </div>
              <h3 className="font-h3 text-xl mb-2 text-white">Health Ledger</h3>
              <p className="text-sm text-on-surface-variant mb-6">Building blockchain-backed health records for nomadic populations.</p>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-error w-1/3 shadow-[0_0_8px_#ffb4ab]"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-on-surface-variant">33% FUNDED</span>
                <button className="text-xs font-bold text-secondary uppercase hover:underline">Commit</button>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Spotlight */}
        <section className="py-20 bg-surface-container-low overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="flex items-center justify-between mb-16">
              <h2 className="font-h2 text-white">The Storytellers</h2>
              <Link to="/stories" className="text-secondary font-bold flex items-center gap-2 group">
                VIEW ALL CREATORS
                <TrendingFlat className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex space-x-8 overflow-x-auto pb-12">
              {/* Creator 1 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 border border-white/5">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG02Wv6YPHlTFA9r4DZ_qdoXtLF1eYKO2Yay3dJYI45dmspNT-Eer0jAc_W1HpMCnlh_vOcOn_httEIe1a6mLQLr6Ziwo-gOqpqp0OnFqt8SmgeGH_v6ams9yGNReQPfgM4pWN-E4y-DnkzAoQiLsQniPG5T50Y4jEOHO3YjxV-t28ZJvqRvJODgljgTE3K39VI-07uWQ8aOEeppLHT7Od0a2zhY4LqSVaJSoeRDd5F0I-zXvpwhR99SmTAq-7qqJYyxAYHCt6Znw" alt="Chidi Okafor"/>
                </div>
                <h4 className="font-h3 text-2xl mb-1 text-white">Chidi Okafor</h4>
                <p className="font-label-caps text-secondary mb-4">CINEMATOGRAPHER</p>
                <p className="text-on-surface-variant text-sm italic">"Capturing the architecture of our future, one frame at a time."</p>
              </div>
              {/* Creator 2 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 border border-white/5">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACDDHyXPvVOC9HkZU48joFw9LTGlOBCo_w_TEBzbzsk2n6vpU84OjXVhOl79BWwK1WYRCcU0RLolXacEwo6BLnYGt-w-uGxlVY47BneYqKUlxUkQKkC85Z2ku2iXkYA5zq4JcIM2iOmsVIy8YpY41zKRLNy9wblGG021wbAeYH7IvWgfi-6G3UF7Q0vaEo38o6aM8OFykj_4mGcc54H6gxqO036iN1yYoHHBX3z2TCwo8G7CM0YNVLIqgs5fqeemPEpWyToIHMmJ0" alt="Amina Yusuf"/>
                </div>
                <h4 className="font-h3 text-2xl mb-1 text-white">Amina Yusuf</h4>
                <p className="font-label-caps text-secondary mb-4">DATA POET</p>
                <p className="text-on-surface-variant text-sm italic">"Turning national statistics into stories that move the soul."</p>
              </div>
              {/* Creator 3 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 border border-white/5">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfpEXVtlajXbY-QZR5gPx5pRHkWMsWD4nzyJ80dlqMc7IdZSK0SL4oYLnJyDOYKPquVdTcx81GhHs1f00sTA5uGHKLm8xSTGjiXg_Nr13gP5-ND01CYFa-U1pD7OCbHm50xbup4cJerfUevNWwnxW8tHgCetaVRSxtL2_MMVLuoZy3Gu2CWtp4UGauHYnEVToU2U6K3vqTQSfw0-elXisRnJrYIbL7QjlrLI_neFe-zu6FLCWrHLa1W-0r8k3ykldquB875_ElxYA" alt="Tunde Balogun"/>
                </div>
                <h4 className="font-h3 text-2xl mb-1 text-white">Tunde Balogun</h4>
                <p className="font-label-caps text-secondary mb-4">CULTURAL ARCHIVIST</p>
                <p className="text-on-surface-variant text-sm italic">"Digitizing our heritage to secure our global identity."</p>
              </div>
              {/* Creator 4 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 border border-white/5">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChP2MH15g2Wm9eCl_YS4RrMPFmzuybM-7sShtb2KSDcE_lhubU58vul8ykCT7eN_RPFb5bwWOAf4EZfRr-CTzEQ3VEtB5BkVsqP4PTSZLlETYpcXdHme9d66S0DT4f5PZWGakRLC_e6Nwz_yicf5qPC5oAbxRkP3gVtryy1hlgWx-S0QCr0jF6sWCQJTfoFKkt5pYwCsYMHH-yPbzUvuKkzVDYj5K38wnmpGRpK3JwC2w8rYq1MDSi8KCWpycY2Q2lORz-xIlpQR4" alt="Ifeoma Adeleke"/>
                </div>
                <h4 className="font-h3 text-2xl mb-1 text-white">Ifeoma Adeleke</h4>
                <p className="font-label-caps text-secondary mb-4">VIRTUAL ARCHITECT</p>
                <p className="text-on-surface-variant text-sm italic">"Designing the spatial interfaces of the New Nigeria."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor a Story CTA */}
        <section className="px-8 max-w-[1440px] mx-auto py-20">
          <div className="relative rounded-[40px] overflow-hidden bg-primary-container p-12 md:p-24 border border-secondary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2RvoLRxUJ0hHL7U4rKsGPG60o7cRxIu1Lnp-kbinW6neuFVmpbsf9z2lsz8-75E8OgZP5JoGo8QjZs9K2jB5zA5yD-5IXHb2Yd3zWc0rsOy0XdO1M3i5spjvx4a5cKMN9XMJyX0TTXH_dF7eU7ZAQFE6urXfFT37VtnPRdXuBUZBc13tt0A7ReDg1CyThARB5320ttp2JcUV7vrO55p1Fcl4olIATn-H9MSuqFfGsr7H4M7D27saOnnc8gEdxEJoLToWUPnEWlao" alt="Corporate professionals"/>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="font-label-caps text-secondary mb-6 block">PRESTIGE OPPORTUNITY</span>
              <h2 className="font-h2 mb-8 text-white">Patron of the <span className="text-secondary italic">National Narrative</span></h2>
              <p className="font-body-lg text-on-primary-container mb-12">Institutional partners and high-impact individuals can now sponsor featured stories, ensuring the triumphs of the New Nigeria are broadcast to the world.</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 rounded-full bg-secondary text-on-secondary font-h3 shadow-[0_0_20px_rgba(233,195,73,0.2)]">Request Ledger</button>
                <button className="px-10 py-5 rounded-full border border-secondary/40 text-secondary font-h3 hover:bg-secondary/5 transition-all">Institutional Access</button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Feed Masonry */}
        <section className="py-20 px-8 max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-h2 text-white">Civic Feed</h2>
            <div className="flex gap-2 p-1 bg-surface-container rounded-full border border-white/5">
              <button className="px-4 py-2 rounded-full bg-secondary text-on-secondary text-xs font-bold">Trending</button>
              <button className="px-4 py-2 rounded-full text-slate-400 text-xs font-bold hover:text-white">Recent</button>
              <button className="px-4 py-2 rounded-full text-slate-400 text-xs font-bold hover:text-white">Verified</button>
            </div>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-[24px] space-y-[24px]">
            <div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/5 bg-surface-container hover:border-secondary/30 transition-colors">
              <img className="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3bLvJxZ7ff9yJNNniER9BB2wB4czQj96Vi388nQdGD5HJmbXtEzUaMQLupuLDmMdr-DCxOpzln03Lf5x4uto-w1NiVtArcIWMkloJDqdECPH3XdyQyvhjUjnFBqSMoI-bodvUM4FIpAnh98TwGWsLHL4LkLYovUTd95yRuY5Iq1FLPnK11gD-aYfQLA3SRlVWYqt4OPQZVc8O9c10Crui5YO5ruef12eownWdu8iezIuN4RXMR0oqbEhKIJcoB-ZBVaTqlqJmmMQ" alt="Student with tablet"/>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk66CWiEJhFIFVvSpxTu-ZHTtRYvJfrw1qF_-JtNFQ5WWjKgZFRDdQy5OjpD7rhgBIRlCX-BetjdTzgN3Z2vNRONfOQraCrcAN7Wnk48L58Xs31aydq2OzKSx1mYIdUH9Z0dkyI0BZk0Q1b3ZVV425YazNJaBNwzLAPJYfTF-u7T9pymePzIndc44m8HOVxBA2WIMhSrlWL5ihCG5R09YtnD0edJiVU-h4VMefj9AHY1hu4l5nDPpvE7jIOL-goxKuzlGiFxh37o8" alt="Portrait"/>
                  </div>
                  <span className="text-xs font-bold text-on-surface">@bola_creatives</span>
                </div>
                <p className="text-sm text-on-surface-variant">Connectivity reached the Gidan district today. The arena is growing.</p>
              </div>
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/5 bg-surface-container hover:border-secondary/30 transition-colors p-6">
              <div className="font-h3 text-lg mb-4 text-secondary">"The infrastructure is the stage, but the citizens are the performers."</div>
              <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">— Official Command Directive</p>
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/5 bg-surface-container hover:border-secondary/30 transition-colors">
              <img className="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDJDja_2GNf8e9tkW9LW5Rn_Swo9-e8Yi1pYKPMgvOMENwq6-71vkPF2mzjhW1NqkpcGlUPjNWFBYO6ESpFhndX4qLlNMf6AjeFN7ZW1ksoHneKnrNRd0zPTBzuaXVjjVQBzYALwcNwIjNzKOxdcNgqyTFLCB5jouhDNoE9DcbslPDeSIpIZHprJSc0dJ1TdGJfUet1Dxjy01rb9xqyEJIAqkF_c6lYDEEgxFMFOOxdXXtTSzbSiN6zThWAByQxtlb40_lk7izuy8" alt="Abuja skyline"/>
              <div className="p-6">
                <h4 className="font-bold text-white mb-2">Abuja Nightfall</h4>
                <p className="text-xs text-on-surface-variant">Verified via Impact Ledger #8812</p>
              </div>
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/5 bg-surface-container hover:border-secondary/30 transition-colors">
              <img className="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWvbGpXfrmEdjk-_UzhsRuRseKuBsqXlqdjZgehFZ2AmkpSxUVzLve3UhOsPGtMAYpilCe70bkWNVS2JJJchMSHALlUAjSr-XeuQkpJmIzi6jLkUyEin0h1YWogcvrLD2G7s6KXGbX6EdvD-57VYeTlCKoZ5JLxgIbZ8uCUjryEY4FySsQyt7XHtGGQ7fyk50yJ6m6WjN0an0Iyp-RwmKQ7_VzJhiRFqNRLQQf-c7Ed39hXJcPAfPO4oqA6Z7hSZIOPgFHjMKTM-Q" alt="Workspace"/>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary-fixed">LIVE WORKSPACE</span>
                  <Verified className="w-5 h-5 text-secondary" />
                </div>
              </div>
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/5 bg-surface-container hover:border-secondary/30 transition-colors p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Forum className="w-6 h-6" />
                </div>
                <div className="font-h3 text-lg text-white">Hub Consensus Reached</div>
              </div>
              <p className="text-sm text-on-surface-variant">The Port Harcourt creative cluster has voted to initiate the 'Oil to Art' transition project. Verification in progress.</p>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <button className="px-8 py-3 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-all">LOAD MORE CONTENT</button>
          </div>
        </section>
      </main>
    </>
  )
}