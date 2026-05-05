import { Link } from 'react-router-dom'
import { Rocket, Lightbulb, GraduationCap, Building2, Code, Users, ArrowRight, MapPin, Heart } from 'lucide-react'

const initiatives = [
  {
    id: 'project-nigeria',
    title: 'Project Nigeria',
    description: 'Submit and fund verified infrastructure projects in all 36 states.',
    icon: Rocket,
    stats: { value: '246', label: 'Projects' },
    featured: true,
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
    <div className="bg-[#07141f] min-h-screen">
      {/* HERO - Compact */}
      <section className="h-[320px]" style={{background: 'linear-gradient(135deg, #031B30 0%, #07141f 100%)'}}>
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center">
          <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            {/* Left: Title */}
            <div>
              <h1 className="text-white text-[56px] font-extrabold leading-[1.05] mb-[20px]">National Initiatives</h1>
              <p className="text-white/78 text-[22px] leading-[1.5] max-w-[560px]">
                Verified programs creating measurable impact in infrastructure, employment, education, and civic engagement across Nigeria.
              </p>
            </div>

            {/* Right: Stat Cluster */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[28px]">
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">12</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">36</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">478K+</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Citizens Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INITIATIVE GRID - Editorial */}
      <section className="pt-[56px] pb-[56px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            {/* Featured Row - Wide Card */}
            <div className="mb-[28px]">
              <Link 
                to="/project-nigeria"
                className="group block rounded-[28px] p-[42px]" 
                style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[42px] items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-[18px]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#D4AF37]/15 flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px]">Flagship Initiative</span>
                    </div>
                    <h2 className="text-white text-[38px] font-extrabold mb-[14px]">Project Nigeria</h2>
                    <p className="text-white/72 text-[18px] leading-[1.55] max-w-[620px] mb-[24px]">
                      Submit and fund verified infrastructure projects in all 36 states. Every naira tracked, every project documented, every result measured.
                    </p>
                    <div className="flex items-center gap-3 text-[#D4AF37] font-bold uppercase tracking-[2px] text-[14px]">
                      Explore Initiative <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className="text-[#D4AF37] text-[64px] font-extrabold">246</div>
                    <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Verified Projects</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Supporting Row - 3 Column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {initiatives.slice(1).map(initiative => {
                const Icon = initiative.icon
                return (
                  <Link 
                    key={initiative.id}
                    to={`/initiatives/${initiative.id}`}
                    className="group rounded-[24px] p-[32px] transition-all duration-250 hover:-translate-y-[3px]"
                    style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}
                  >
                    <div className="w-12 h-12 rounded-[12px] bg-[#D4AF37]/10 flex items-center justify-center mb-[22px] group-hover:bg-[#D4AF37]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-white text-[22px] font-bold mb-[10px]">{initiative.title}</h3>
                    <p className="text-white/58 text-[15px] leading-[1.5] mb-[20px]">{initiative.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] font-bold text-[#D4AF37]">{initiative.stats.value}</span>
                      <span className="text-white/58 text-[13px]">{initiative.stats.label}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-[56px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <Link to="/join" className="group rounded-[20px] p-[28px] text-center transition-all duration-250 hover:-translate-y-[2px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
              <Heart className="w-8 h-8 text-[#D4AF37] mx-auto mb-[16px]" />
              <h3 className="text-white text-[20px] font-bold mb-[10px]">Volunteer</h3>
              <p className="text-white/58 text-[14px]">Join your local chapter</p>
            </Link>
            <Link to="/donate" className="group rounded-[20px] p-[28px] text-center transition-all duration-250 hover:-translate-y-[2px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
              <Heart className="w-8 h-8 text-[#D4AF37] mx-auto mb-[16px]" />
              <h3 className="text-white text-[20px] font-bold mb-[10px]">Fund</h3>
              <p className="text-white/58 text-[14px]">Support specific initiatives</p>
            </Link>
            <Link to="/partners" className="group rounded-[20px] p-[28px] text-center transition-all duration-250 hover:-translate-y-[2px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
              <Heart className="w-8 h-8 text-[#D4AF37] mx-auto mb-[16px]" />
              <h3 className="text-white text-[20px] font-bold mb-[10px]">Partner</h3>
              <p className="text-white/58 text-[14px]">Corporate partnerships</p>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCUREMENT */}
      <section className="pt-[56px] pb-[72px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto rounded-[24px] p-[42px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
            <h2 className="text-white text-[32px] font-extrabold mb-[16px]">Procurement Opportunities</h2>
            <p className="text-white/72 text-[18px] leading-[1.55] max-w-[720px] mb-[28px]">
              We welcome bids from qualified contractors, suppliers, and service providers for project implementation across all 36 states.
            </p>
            <Link to="/trust" className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#031B30] px-[28px] py-[14px] rounded-[999px] font-bold uppercase tracking-[2px] text-[14px]">
              View Procurement Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}