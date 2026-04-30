import { Link } from 'react-router-dom'
import { MessageSquare, Users, Shield, MapPin } from 'lucide-react'

export default function LeadershipPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[#031B30]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h1 className="font-h1 text-4xl md:text-6xl text-white mb-6">Leadership</h1>
          <p className="text-xl md:text-2xl text-[#CBD5E1] max-w-3xl">
            Guiding Nigeria's transformation through trusted governance and dedicated service.
          </p>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="flex items-start gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-[#062B49] rounded-full flex-shrink-0 flex items-center justify-center">
              <MessageSquare className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="font-h2 text-2xl md:text-3xl text-white mb-4">Founder's Message</h2>
              <p className="text-lg text-[#CBD5E1] leading-relaxed mb-4">
                "Nigeria's future belongs to those who build it. City Boy Arena is our collective commitment 
                to visible progress, transparent governance, and meaningful citizen participation 
                in nation-building."
              </p>
              <p className="text-[#94A3B8]">— Founding Circle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 md:py-24 bg-[#121414]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h2 className="font-h2 text-3xl text-white mb-8">Executive Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Executive Director', role: 'Strategic Operations' },
              { name: 'Director, Programs', role: 'Initiative Oversight' },
              { name: 'Director, Finance', role: 'Treasury & Grants' },
              { name: 'Director, Technology', role: 'Platform & Data' },
            ].map((exec, i) => (
              <div key={i} className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
                <div className="w-20 h-20 bg-[#062B49] rounded-full mb-4 flex items-center justify-center mx-auto">
                  <Users className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h3 className="font-h3 text-lg text-white text-center">{exec.name}</h3>
                <p className="text-[#94A3B8] text-center">{exec.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h2 className="font-h2 text-3xl text-white mb-8">Governance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#D4AF37]" />
                <h3 className="font-h3 text-xl text-white">Board of Trustees</h3>
              </div>
              <p className="text-[#94A3B8]">
                Independent oversight ensuring mission alignment and fiscal responsibility.
              </p>
            </div>
            <div className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#D4AF37]" />
                <h3 className="font-h3 text-xl text-white">Advisory Council</h3>
              </div>
              <p className="text-[#94A3B8]">
                Industry and civic leaders providing strategic guidance.
              </p>
            </div>
          </div>
          <Link to="/governance" className="inline-flex items-center gap-2 mt-8 text-[#D4AF37] hover:gap-3 transition-all">
            View Governance Docs <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* Regional Leads */}
      <section className="py-16 md:py-24 bg-[#121414]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h2 className="font-h2 text-3xl text-white mb-8">Regional Leads</h2>
          <p className="text-lg text-[#CBD5E1] mb-8">
            Chapter coordinators across all 6 geopolitical zones.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['North', 'West', 'East', 'South', 'Central', 'Delta'].map((zone, i) => (
              <div key={i} className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-lg p-4 text-center">
                <MapPin className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                <span className="text-white text-sm">{zone}</span>
              </div>
            ))}
          </div>
          <Link to="/arena/chapters" className="inline-flex items-center gap-2 mt-8 text-[#D4AF37] hover:gap-3 transition-all">
            View All Chapters <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}