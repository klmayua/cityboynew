import React from 'react'

const stats = [
  { value: '24,592', label: 'Active Volunteers', change: '+1,284 this week' },
  { value: '₦45.2M', label: 'Raised Today', change: '+18%' },
  { value: '142', label: 'Projects Funded', change: '12 completed' },
  { value: '94%', label: 'Trust Score', change: 'Industry leading' },
]

const tickerItems = [
  '★ ₦1.2B TOTAL IMPACT FUND',
  '• 36 STATES ACTIVE',
  '• 124,000 VOLUNTEERS',
  '• 45 CAMPAIGNS LIVE',
  '★ 8,500 DIASPORA MEMBERS',
]

const projects = [
  { title: 'Kano Solar Initiative', category: 'Energy', funded: 100, amount: '₦24.5M', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop' },
  { title: 'Lagos Tech Hubs', category: 'Education', funded: 85, amount: '₦18.2M', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop' },
  { title: 'Rivers Healthcare', category: 'Health', funded: 92, amount: '₦31.8M', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#001B2E] via-[#003153] to-[#001B2E] pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0E9F6E]/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="relative container text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E9F6E]/20 border border-[#0E9F6E]/40 text-[#0E9F6E] text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#0E9F6E] rounded-full animate-pulse" />
              LIVE: National Mobilization Active
            </span>
          </div>
          
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Organize Hope.<br/>
            <span className="text-gradient">Build Nigeria.</span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            The digital command centre for positive civic participation. Track impact, join the movement, and help shape the national narrative.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="/join" className="btn btn-gold text-lg px-8 py-4 glow-gold">
              Join Arena <span>→</span>
            </a>
            <a href="/project-nigeria" className="btn btn-outline text-lg px-8 py-4">
              Explore Impact
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <div className="font-data text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
                <div className="text-[#0E9F6E] text-xs mt-1">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-[#0F172A] border-y border-white/5 overflow-hidden py-4">
        <div className="ticker">
          <div className="ticker-content">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                {tickerItems.map((item, j) => (
                  <span key={j} className="px-8 font-semibold text-[#D4AF37] whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Nigeria */}
      <section className="section-padding bg-[#FAF8F2]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Real Impact</span>
            <h2 className="text-4xl font-bold text-[#003153] mt-2">Project Nigeria</h2>
            <p className="text-[#5B6B7A] mt-2">Real stories of change, transparently tracked.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#003153]/80 text-white text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#003153] mb-2">{project.title}</h3>
                  <p className="text-[#5B6B7A] text-sm mb-4">{project.amount}</p>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F0D060] rounded-full" style={{ width: `${project.funded}%` }} />
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-[#5B6B7A]">{project.funded}% funded</span>
                    <span className="text-[#0E9F6E]">Live</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Sponsor Card */}
            <div className="bg-gradient-to-br from-[#003153] to-[#0F172A] rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="font-bold text-2xl text-white mb-3">Sponsor a Project</h3>
              <p className="text-white/60 mb-6">Direct impact. Full transparency. Quarterly reports.</p>
              <a href="/donate" className="btn btn-gold">View Opportunities</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-[#003153]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Accountability</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">Transparency is Our Currency</h2>
              <p className="text-white/70 mb-8">
                Every naira tracked. Every project verified. Every impact measured. Our commitment to radical transparency sets us apart.
              </p>
              <a href="/transparency" className="btn btn-outline">View Transparency Portal</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="font-data text-4xl font-bold text-[#D4AF37]">₦2.4B</div>
                <div className="text-white/60 text-sm mt-1">Total Raised</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="font-data text-4xl font-bold text-[#D4AF37]">324</div>
                <div className="text-white/60 text-sm mt-1">Projects Delivered</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="font-data text-4xl font-bold text-[#0E9F6E]">94%</div>
                <div className="text-white/60 text-sm mt-1">Trust Score</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="font-data text-4xl font-bold text-white">36</div>
                <div className="text-white/60 text-sm mt-1">States Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-[#001B2E] to-[#003153]">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Join the movement in under 60 seconds. No commitment, just impact.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/join" className="btn btn-gold text-lg px-10 py-4 glow-gold">Join Arena Now</a>
            <a href="/donate" className="btn btn-outline text-lg px-10 py-4">Support the Cause</a>
          </div>
        </div>
      </section>
    </div>
  )
}