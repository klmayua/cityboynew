import { Link } from 'react-router-dom'
import { Target, Shield, Heart, Users, Briefcase, Mail } from 'lucide-react'

const sections = [
  { id: 'mission', label: 'Mission' },
  { id: 'mandate', label: 'Mandate' },
  { id: 'model', label: 'Model' },
  { id: 'governance', label: 'Governance' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
]

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[#031B30]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h1 className="font-h1 text-4xl md:text-6xl text-white mb-6">Who We Are</h1>
          <p className="text-xl md:text-2xl text-[#CBD5E1] max-w-3xl">
            City Boy Arena is Nigeria's premier platform for nation-building, 
            trust-anchored infrastructure, and digital civic engagement.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-16 md:top-20 bg-[#062B49]/95 backdrop-blur-lg z-30 border-b border-[rgba(212,175,55,.18)]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="flex overflow-x-auto gap-6 py-4">
            {sections.map(section => (
              <a key={section.id} href={`#${section.id}`} className="text-sm font-label-caps text-[#94A3B8] hover:text-[#D4AF37] whitespace-nowrap transition-colors">
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mission */}
      <section id="mission" className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="font-h2 text-3xl text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              To mobilize citizens nationwide toward collective action in infrastructure development, 
              youth employment, education, and civic technology — creating visible, measurable impact 
              that restores trust in national institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mandate */}
      <section id="mandate" className="py-16 md:py-24 bg-[#121414]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="font-h2 text-3xl text-white">Our Mandate</h2>
            </div>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              City Boy Arena operates as a non-partisan, trust-anchored platform that connects 
              citizens, volunteers, donors, and partners to verified initiatives across all 36 states 
              — ensuring transparency, accountability, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Model */}
      <section id="model" className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="font-h2 text-3xl text-white">Our Model</h2>
            </div>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              We combine digital mobilization with on-ground chapter networks, enabling citizens 
              to contribute through volunteer service, direct funding, or institutional partnership — 
              all tracked through our transparent ledger system.
            </p>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="py-16 md:py-24 bg-[#121414]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="font-h2 text-3xl text-white">Governance</h2>
            </div>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              City Boy Arena is governed by a Board of Trustees, Executive Leadership, and 
              Advisory Council — with quarterly transparency reports and independent audits 
              ensuring accountability to all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h2 className="font-h2 text-3xl text-white mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Founding Circle', role: 'Strategic Patron' },
              { name: 'Executive Team', role: 'Operational Lead' },
              { name: 'Regional Leads', role: 'Chapter Coordination' },
            ].map((leader, i) => (
              <div key={i} className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
                <div className="w-16 h-16 bg-[#062B49] rounded-full mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-h3 text-lg text-white">{leader.name}</h3>
                <p className="text-[#94A3B8]">{leader.role}</p>
              </div>
            ))}
          </div>
          <Link to="/leadership" className="inline-flex items-center gap-2 mt-8 text-[#D4AF37] hover:gap-3 transition-all">
            View Full Leadership <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-16 md:py-24 bg-[#121414]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="font-h2 text-3xl text-white">Careers</h2>
            </div>
            <p className="text-lg text-[#CBD5E1] leading-relaxed mb-6">
              Join our mission to build Nigeria. We welcome volunteers, fellows, and full-time 
              professionals across technology, operations, communications, and field coordination.
            </p>
            <Link to="/volunteer" className="inline-flex bg-[#D4AF37] text-[#031B30] px-6 py-3 rounded-md font-label-caps hover:brightness-110 transition-all">
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="font-h2 text-3xl text-white">Contact Us</h2>
            </div>
            <p className="text-lg text-[#CBD5E1] leading-relaxed mb-6">
              For partnerships, media enquiries, or general inquiries, reach our Arena Desk team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:hello@cityboyarena.com" className="inline-flex items-center gap-2 text-[#D4AF37] hover:underline">
                hello@cityboyarena.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}