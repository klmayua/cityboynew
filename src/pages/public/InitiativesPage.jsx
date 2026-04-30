import { Link } from 'react-router-dom'
import { Rocket, Lightbulb, GraduationCap, Building2, Code, Users } from 'lucide-react'

const initiatives = [
  {
    id: 'project-nigeria',
    title: 'Project Nigeria',
    description: 'Submit and fund verified infrastructure projects in all 36 states.',
    icon: Rocket,
    stats: { value: '246', label: 'Projects' },
  },
  {
    id: 'youth-employment',
    title: 'Youth Employment',
    description: 'Skills training and job placement for young Nigerians.',
    icon: Lightbulb,
    stats: { value: '420K+', label: 'Jobs Created' },
  },
  {
    id: 'clean-cities',
    title: 'Clean Cities',
    description: 'Sanitation and environmental initiatives transforming urban spaces.',
    icon: Building2,
    stats: { value: '18', label: 'Cities' },
  },
  {
    id: 'education-forward',
    title: 'Education Forward',
    description: 'School upgrades, digital learning, and teacher development programs.',
    icon: GraduationCap,
    stats: { value: '89', label: 'Schools' },
  },
  {
    id: 'civic-tech',
    title: 'Civic Tech',
    description: 'Digital platforms connecting citizens to government services.',
    icon: Code,
    stats: { value: '12', label: 'Platforms' },
  },
  {
    id: 'national-skills',
    title: 'National Skills Mission',
    description: 'Vocational training creating artisanal pathways across Nigeria.',
    icon: Users,
    stats: { value: '58K+', label: 'Trained' },
  },
]

export default function InitiativesPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[#031B30]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h1 className="font-h1 text-4xl md:text-6xl text-white mb-6">National Initiatives</h1>
          <p className="text-xl md:text-2xl text-[#CBD5E1] max-w-3xl">
            Verified programs creating measurable impact in infrastructure, employment, 
            education, and civic engagement across Nigeria.
          </p>
        </div>
      </section>

      {/* Initiative Categories */}
      <section className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map(initiative => {
              const Icon = initiative.icon
              return (
                <Link 
                  key={initiative.id}
                  to={`/project-nigeria`}
                  className="group bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-8 hover:border-[rgba(212,175,55,.28)] hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-14 h-14 bg-[#062B49] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-h3 text-xl text-white mb-3">{initiative.title}</h3>
                  <p className="text-[#94A3B8] mb-6">{initiative.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#D4AF37]">{initiative.stats.value}</span>
                    <span className="text-sm text-[#94A3B8]">{initiative.stats.label}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Participation */}
      <section className="py-16 md:py-24 bg-[#121414]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h2 className="font-h2 text-3xl text-white mb-8">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
              <h3 className="font-h3 text-lg text-white mb-3">Volunteer</h3>
              <p className="text-[#94A3B8] mb-4">Join your local chapter and contribute to verified projects.</p>
              <Link to="/volunteer" className="text-[#D4AF37] hover:underline">Apply Now →</Link>
            </div>
            <div className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
              <h3 className="font-h3 text-lg text-white mb-3">Fund</h3>
              <p className="text-[#94A3B8] mb-4">Direct your contribution to specific initiatives.</p>
              <Link to="/donate" className="text-[#D4AF37] hover:underline">Donate →</Link>
            </div>
            <div className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
              <h3 className="font-h3 text-lg text-white mb-3">Partner</h3>
              <p className="text-[#94A3B8] mb-4">Corporate and institutional partnerships.</p>
              <Link to="/partners" className="text-[#D4AF37] hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement */}
      <section className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h2 className="font-h2 text-3xl text-white mb-6">Procurement Opportunities</h2>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mb-8">
            We welcome bids from qualified contractors, suppliers, and service providers 
            for project implementation across all 36 states.
          </p>
          <Link to="#" className="inline-flex bg-[#D4AF37] text-[#031B30] px-6 py-3 rounded-md font-label-caps hover:brightness-110 transition-all">
            View Procurement Portal
          </Link>
        </div>
      </section>
    </div>
  )
}