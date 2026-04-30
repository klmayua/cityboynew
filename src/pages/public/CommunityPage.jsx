import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

export default function CommunityPage() {
  const chapters = [
    { name: 'Lagos Central', members: '2,400+', leads: 'Amina, Chidi', status: 'Active' },
    { name: 'Abuja Metro', members: '1,850+', leads: 'Tunde, Bola', status: 'Active' },
    { name: 'Kano North', members: '1,200+', leads: 'Yusuf', status: 'Active' },
    { name: 'Enugu East', members: '980', leads: 'Adaora', status: 'Active' },
  ]
  const events = [
    { title: 'National Volunteer Summit', date: 'June 15, 2026', location: 'Abuja', spots: 500 },
    { title: 'Lagos Chapter Gala', date: 'June 22, 2026', location: 'Lagos', spots: 200 },
    { title: 'Kano Community Build', date: 'July 1, 2026', location: 'Kano', spots: 150 },
  ]
  const members = [
    { name: 'Amina', role: 'Chapter Lead', chapter: 'Lagos Central', pts: '12,400' },
    { name: 'Tunde', role: 'Volunteer', chapter: 'Abuja Metro', pts: '8,200' },
    { name: 'Chidi', role: 'Organizer', chapter: 'Lagos Central', pts: '7,850' },
  ]
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-12">
        {/* Hero Strip */}
        <section className="py-16 border-b border-white/6">
          <div className="container mx-auto px-[80px]">
            <span className="text-secondary font-label-caps uppercase tracking-widest">Citizen Network</span>
            <h1 className="font-h1 text-5xl text-white mt-4 mb-6">The Arena Community</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">18,420+ citizens organizing locally, volunteering nationally, and building visible progress together.</p>
          </div>
        </section>

        {/* Chapter Directory */}
        <section className="py-12">
          <div className="container mx-auto px-[80px]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-h2 text-2xl text-white">Regional Chapters</h2>
              <Link to="/arena/chapters" className="text-secondary font-label-caps">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {chapters.map(c => (
                <div key={c.name} className="glass-card rounded-2xl p-5" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                  <h3 className="font-h3 text-base text-white mb-2">{c.name}</h3>
                  <p className="text-on-surface-variant text-sm mb-1">{c.members} members</p>
                  <p className="text-on-surface-variant text-xs mb-2">Leads: {c.leads}</p>
                  <span className="text-tertiary font-label-caps text-xs uppercase">{c.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Tracks & Spotlight */}
        <section className="py-12 border-t border-white/6">
          <div className="container mx-auto px-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Volunteer Tracks */}
              <div>
                <h2 className="font-h2 text-2xl text-white mb-6">Volunteer Tracks</h2>
                <div className="space-y-4">
                  {members.map(m => (
                    <div key={m.name} className="flex items-center justify-between p-4 rounded-xl" style={{background: 'rgba(0, 49, 83, 0.4)', border: '1px solid rgba(255,255,255,0.06)'}}>
                      <div>
                        <p className="text-white font-bold">{m.name}</p>
                        <p className="text-on-surface-variant text-sm">{m.role} • {m.chapter}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-secondary font-bold">{m.pts} pts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Upcoming Events */}
              <div>
                <h2 className="font-h2 text-2xl text-white mb-6">Upcoming Events</h2>
                <div className="space-y-4">
                  {events.map(e => (
                    <div key={e.title} className="p-4 rounded-xl" style={{background: 'rgba(0, 49, 83, 0.4)', border: '1px solid rgba(255,255,255,0.06)'}}>
                      <p className="text-white font-bold">{e.title}</p>
                      <p className="text-on-surface-variant text-sm">{e.date} • {e.location}</p>
                      <p className="text-on-surface-variant text-xs">{e.spots} spots available</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-[80px] text-center">
            <p className="text-on-surface-variant mb-6">Join a chapter. Contribute skills. Build Nigeria.</p>
            <Link to="/join" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all">Join Community</Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}