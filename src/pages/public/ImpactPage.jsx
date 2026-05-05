import { Link } from 'react-router-dom'

export default function ImpactPage() {
  const stats = [
    { label: 'Projects Delivered', value: '246', note: 'Across 36 states' },
    { label: 'Funding Tracked', value: '₦4.2B', note: 'Public visibility' },
    { label: 'Volunteers Active', value: '18,420+', note: 'Nationally coordinated' },
    { label: 'Chapters', value: '31', note: 'Regional activation' },
  ]
  const projects = [
    { title: 'Lagos-Badagry Expressway', location: 'Lagos', status: 'In Progress', progress: 72 },
    { title: 'Kano Solar Micro-Grid', location: 'Kano', status: 'Completed', progress: 100 },
    { title: 'Benue Rural Water', location: 'Benue', status: 'In Progress', progress: 45 },
  ]
  return (
    <>
      <div className="min-h-screen bg-background pt-24 pb-12">
        {/* Hero Strip */}
        <section className="py-16 border-b border-white/6">
          <div className="container mx-auto px-4 md:px-[80px]">
            <span className="text-secondary font-label-caps uppercase tracking-widest">National Impact</span>
            <h1 className="font-h1 text-5xl text-white mt-4 mb-6">Live Delivery View</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">Real-time infrastructure progress across the federation. Every project, every naira, every outcome visible.</p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map(s => (
                <div key={s.label} className="glass-card rounded-2xl p-6" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                  <div className="font-stat-value text-3xl text-secondary mb-1">{s.value}</div>
                  <div className="text-white font-bold mb-1">{s.label}</div>
                  <div className="text-on-surface-variant text-xs">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Projects Feed */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-[80px]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-h2 text-2xl text-white">Active Projects</h2>
              <Link to="/projects" className="text-secondary font-label-caps">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <div key={i} className="glass-card rounded-2xl p-6" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-h3 text-lg text-white">{p.title}</h3>
                    <span className="text-secondary font-label-caps text-xs uppercase px-2 py-1 rounded bg-secondary/20">{p.status}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4">{p.location}</p>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary transition-all" style={{width: p.progress + '%'}}></div>
                  </div>
                  <p className="text-on-surface-variant text-xs mt-2">{p.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding Overview */}
        <section className="py-12 border-t border-white/6">
          <div className="container mx-auto px-4 md:px-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-h2 text-2xl text-white mb-4">Transparent Funding</h2>
                <p className="text-on-surface-variant mb-6">Every contribution flows through the public ledger. Real-time tracking, audit-ready records, and complete visibility.</p>
                <Link to="/transparency" className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-label-caps hover:brightness-110 transition-all">View Transparency Ledger</Link>
              </div>
              <div className="glass-card rounded-2xl p-8" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                <div className="text-center">
                  <div className="font-stat-value text-5xl text-secondary mb-2">₦4.2B</div>
                  <p className="text-on-surface-variant">Total Impact Funding</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-[80px] text-center">
            <p className="text-on-surface-variant mb-6">Support visible national progress.</p>
            <Link to="/donate" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all">Support A Project</Link>
          </div>
        </section>
      </div>
    </>
  )
}