import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '24,592', label: 'Active Volunteers', icon: '👥' },
  { value: '₦45.2M', label: 'Raised Today', icon: '💰' },
  { value: '142', label: 'Projects Funded', icon: '📋' },
  { value: '94%', label: 'Trust Score', icon: '✓' },
]

const tickerItems = ['★ ₦1.2B TOTAL IMPACT FUND', '• 36 STATES ACTIVE', '• 124,000 VOLUNTEERS', '• 45 CAMPAIGNS LIVE', '★ 8,500 DIASPORA MEMBERS']

const projects = [
  { title: 'Kano Solar Initiative', category: 'Energy', funded: 100, amount: '₦24.5M', status: 'Live' },
  { title: 'Lagos Tech Hubs', category: 'Education', funded: 85, amount: '₦18.2M', status: 'Active' },
  { title: 'Rivers Healthcare', category: 'Health', funded: 92, amount: '₦31.8M', status: 'Active' },
]

const trustMetrics = [
  { value: '₦2.4B', label: 'Total Raised', change: '+18%' },
  { value: '324', label: 'Projects Delivered', change: '+56' },
  { value: '94%', label: 'Trust Score', change: 'Best' },
  { value: '36', label: 'States Active', change: 'All' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 100vh, Prussian Blue base, centered content */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#001B2E] via-[#003153] to-[#001B2E]">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px] opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0E9F6E] rounded-full blur-[120px] opacity-10" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative z-10 w-full">
          <div className="container">
            {/* Hero Content - Centered */}
            <div className="max-w-4xl mx-auto text-center">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E9F6E]/20 border border-[#0E9F6E]/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0E9F6E] animate-pulse" />
                <span className="text-sm font-medium text-[#0E9F6E]">LIVE: National Mobilization Active</span>
              </div>

              {/* Headline - 52-72px, Bold, tight line height */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Organize Hope.<br />
                <span className="text-gradient-gold">Build Nigeria.</span>
              </h1>

              {/* Subtext - 18-22px, max-width 650px */}
              <p className="text-lg md:text-xl text-[#FAF8F2]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                The digital command centre for positive civic participation. Track impact, join the movement, and help shape the national narrative.
              </p>

              {/* CTA Buttons - Centered */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <Link to="/join" className="btn-gold text-lg px-8 py-4">
                  Join Arena <span>→</span>
                </Link>
                <Link to="/project-nigeria" className="btn-outline text-lg px-8 py-4">
                  Explore Impact
                </Link>
              </div>

              {/* Live Metrics - Centered grid, 4 columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="card p-6 text-center">
                    <div className="font-data text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-[#FAF8F2]/60 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Momentum Ribbon - Ticker, full width, Slate background */}
      <div className="bg-[#0F172A] border-y border-white/5 overflow-hidden">
        <div className="flex animate-ticker">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {tickerItems.map((item, index) => (
                <span key={index} className="px-8 font-display font-semibold text-[#D4AF37] whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Project Nigeria Section - Ivory/White clarity zone */}
      <section className="section bg-[#FAF8F2]">
        <div className="container">
          {/* Section Header - Centered */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#D4AF37] uppercase tracking-widest mb-2">Real Impact</span>
            <h2 className="text-4xl font-bold text-[#003153]">Project Nigeria</h2>
            <p className="text-lg text-[#5B6B7A] mt-2">Real stories of change, transparently tracked.</p>
          </div>

          {/* Project Grid - 3 columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#0F172A] to-[#003153] flex items-center justify-center">
                  <span className="text-white/30 font-display text-lg">{project.title}</span>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${
                      project.status === 'Live' ? 'text-[#0E9F6E]' : 'text-[#D4AF37]'
                    }`}>
                      {project.funded}% Funded • {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#003153] mb-2">{project.title}</h3>
                  <p className="text-[#5B6B7A] text-sm mb-4">{project.amount}</p>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F0D060] rounded-full"
                      style={{ width: `${project.funded}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Sponsor Card - Premium panel */}
            <div className="bg-gradient-to-br from-[#003153] to-[#0F172A] rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Sponsor a Project</h3>
              <p className="text-[#FAF8F2]/70 text-sm mb-6">Direct impact. Full transparency.</p>
              <Link to="/donate" className="btn-gold">View Opportunities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Prussian Blue base */}
      <section className="section bg-[#003153]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-sm font-semibold text-[#D4AF37] uppercase tracking-widest mb-2">Accountability</span>
              <h2 className="text-4xl font-bold text-white mb-6">Transparency is Our Currency</h2>
              <p className="text-[#FAF8F2]/70 text-lg leading-relaxed mb-8">
                Every naira tracked. Every project verified. Every impact measured. 
                Our commitment to radical transparency sets us apart.
              </p>
              <Link to="/transparency" className="btn-outline">View Transparency Portal</Link>
            </div>

            {/* Right Metrics Grid - 4 columns, 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {trustMetrics.map((metric, index) => (
                <div key={index} className="glass card p-6 text-center">
                  <div className={`font-data text-3xl font-bold ${
                    index < 2 ? 'text-[#D4AF37]' : index === 2 ? 'text-[#0E9F6E]' : 'text-white'
                  }`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-[#FAF8F2]/60 mt-1">{metric.label}</div>
                  <div className="text-xs text-[#0E9F6E] mt-1">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark gradient to Blue */}
      <section className="section bg-gradient-to-b from-[#001B2E] to-[#003153]">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build?</h2>
          <p className="text-[#FAF8F2]/70 text-lg mb-8 max-w-xl mx-auto">
            Join the movement in under 60 seconds. No commitment, just impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/join" className="btn-gold text-lg px-10 py-4">Join Arena Now</Link>
            <Link to="/donate" className="btn-outline text-lg px-10 py-4">Support the Cause</Link>
          </div>
        </div>
      </section>
    </div>
  )
}