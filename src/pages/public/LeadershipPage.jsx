import { Link } from 'react-router-dom'
import { Users, Shield, MapPin, ArrowRight, MessageSquare, CheckCircle } from 'lucide-react'

export default function LeadershipPage() {
  return (
    <div className="bg-[#07141f] min-h-screen">
      {/* HERO - Compact */}
      <section className="h-[280px]" style={{background: 'linear-gradient(135deg, #031B30 0%, #07141f 100%)'}}>
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center">
          <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            <div>
              <h1 className="text-white text-[56px] font-extrabold leading-[1.05] mb-[20px]">Leadership</h1>
              <p className="text-white/78 text-[22px] leading-[1.5] max-w-[560px]">
                Guiding Nigeria's transformation through trusted governance and dedicated service.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[28px]">
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">36</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">National Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">12</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Advisory Seats</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">6+</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Years Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION - Split Editorial */}
      <section className="pt-[56px] pb-[56px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            {/* Left: Portrait Circle */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-[180px] h-[180px] rounded-full flex items-center justify-center" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
                <MessageSquare className="w-16 h-16 text-[#D4AF37]" />
              </div>
            </div>
            {/* Right: Message */}
            <div>
              <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px] mb-[18px] block">Founding Message</span>
              <h2 className="text-white text-[32px] font-extrabold leading-[1.15] mb-[24px]">
                "Nigeria's future belongs to those who build it."
              </h2>
              <p className="text-white/72 text-[18px] leading-[1.6] mb-[28px]">
                City Boy Arena is our collective commitment to visible progress, transparent governance, and meaningful citizen participation in nation-building.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-[120px] h-[2px] bg-[#D4AF37]"></div>
                <span className="text-white/58 text-[14px]">Founding Circle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="pt-[28px] pb-[56px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <div className="grid grid-cols-3 gap-[28px]">
              <div className="flex items-center gap-3 p-[24px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <CheckCircle className="w-6 h-6 text-[#18A34A]" />
                <span className="text-white text-[16px] font-semibold">Transparency</span>
              </div>
              <div className="flex items-center gap-3 p-[24px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <CheckCircle className="w-6 h-6 text-[#18A34A]" />
                <span className="text-white text-[16px] font-semibold">Accountability</span>
              </div>
              <div className="flex items-center gap-3 p-[24px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <CheckCircle className="w-6 h-6 text-[#18A34A]" />
                <span className="text-white text-[16px] font-semibold">Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP */}
      <section className="pt-[56px] pb-[56px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <span className="text-white/58 text-[12px] font-bold uppercase tracking-[2px] mb-[28px] block">Executive Team</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {[
                { name: 'Executive Director', role: 'Strategic Operations' },
                { name: 'Director, Programs', role: 'Initiative Oversight' },
                { name: 'Director, Finance', role: 'Treasury & Grants' },
                { name: 'Director, Technology', role: 'Platform & Data' },
              ].map((exec, i) => (
                <div key={i} className="group rounded-[24px] p-[28px] text-center transition-all duration-250 hover:-translate-y-[3px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
                  <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-[20px]" style={{background: 'rgba(212,175,55,.1)'}}>
                    <Users className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white text-[18px] font-bold mb-[6px]">{exec.name}</h3>
                  <p className="text-white/58 text-[14px]">{exec.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="pt-[56px] pb-[72px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <span className="text-white/58 text-[12px] font-bold uppercase tracking-[2px] mb-[28px] block">Governance Structure</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="group rounded-[24px] p-[32px] transition-all duration-250 hover:-translate-y-[2px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <div className="flex items-center gap-3 mb-[16px]">
                  <div className="w-10 h-10 rounded-[10px] bg-[#18A34A]/15 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#18A34A]" />
                  </div>
                  <h3 className="text-white text-[20px] font-bold">Board of Trustees</h3>
                </div>
                <p className="text-white/58 text-[15px] leading-[1.55]">
                  Independent oversight ensuring mission alignment and fiscal responsibility.
                </p>
              </div>
              <div className="group rounded-[24px] p-[32px] transition-all duration-250 hover:-translate-y-[2px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <div className="flex items-center gap-3 mb-[16px]">
                  <div className="w-10 h-10 rounded-[10px] bg-[#18A34A]/15 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#18A34A]" />
                  </div>
                  <h3 className="text-white text-[20px] font-bold">Advisory Council</h3>
                </div>
                <p className="text-white/58 text-[15px] leading-[1.55]">
                  Industry and civic leaders providing strategic guidance and network access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}