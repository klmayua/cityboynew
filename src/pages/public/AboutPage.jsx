import { Link } from 'react-router-dom'
import { Target, Shield, Users, CheckCircle, ArrowRight, Shield as GovernanceIcon } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-[#07141f] min-h-screen">
      {/* SECTION 1: Founding Statement */}
      <section className="h-auto min-h-[400px] md:h-[520px] pt-[72px] pb-[72px]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            {/* LEFT COLUMN */}
            <div className="max-w-[620px]">
<span className="text-[#D4AF37] text-[13px] font-bold uppercase tracking-[2px] mb-[24px] block">About City Boy Arena</span>
              <h2 className="text-[56px] md:text-[72px] text-white font-extrabold leading-[0.98] mb-[28px]">Who We Are</h2>
              <p className="text-[20px] md:text-[24px] text-white/78 leading-[1.55] max-w-[560px] mb-[42px]">
                City Boy Arena is Nigeria's premier platform for nation-building, trust-anchored infrastructure, and digital civic engagement. We connect citizens to verified initiatives across all 36 states.
              </p>
              <div className="w-[120px] h-[2px] bg-[#18A34A] mb-[42px]"></div>
               
              {/* Metrics Row */}
              <div className="flex gap-[32px] md:gap-[42px]">
                <div>
                  <div className="text-[36px] md:text-[46px] text-white font-extrabold">36</div>
                  <div className="text-white/58 text-[12px] uppercase tracking-[2px]">States</div>
                </div>
                <div>
                  <div className="text-[36px] md:text-[46px] text-white font-extrabold">18K+</div>
                  <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Volunteers</div>
                </div>
                <div>
                  <div className="text-[36px] md:text-[46px] text-white font-extrabold">246</div>
                  <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Projects</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Premium Statement Panel */}
            <div className="lg:pl-[56px]">
              <div className="rounded-[28px] p-[48px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)', boxShadow: '0 28px 60px rgba(0,0,0,0.18)'}}>
                <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px] mb-[18px] block">Institutional Trust</span>
                <p className="text-white text-[22px] leading-[1.6] mb-[28px]">
                  "We exist to prove that collective action, transparently executed, can transform a nation."
                </p>
                <div className="pt-[24px] border-t border-white/10">
                  <p className="text-white/72 text-[15px]">Founding Statement</p>
                  <p className="text-[#D4AF37] text-[14px]">City Boy Arena Trust Framework</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Mission and Mandate */}
      <section className="pt-[84px] pb-[84px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[56px]">
            {/* Mission Block */}
            <div className="pl-[28px]" style={{borderLeft: '3px solid #18A34A'}}>
              <div className="flex items-center gap-3 mb-[18px]">
                <Target className="w-6 h-6 text-[#18A34A]" />
                <h3 className="text-white text-[42px] font-extrabold">Mission</h3>
              </div>
              <p className="text-white/78 text-[20px] leading-[1.55]">
                To mobilize citizens nationwide toward collective action in infrastructure development, youth employment, education, and civic technology — creating visible, measurable impact that restores trust in national institutions.
              </p>
            </div>

            {/* Mandate Block */}
            <div className="pl-[28px]" style={{borderLeft: '3px solid #18A34A'}}>
              <div className="flex items-center gap-3 mb-[18px]">
                <Shield className="w-6 h-6 text-[#18A34A]" />
                <h3 className="text-white text-[42px] font-extrabold">Mandate</h3>
              </div>
              <p className="text-white/78 text-[20px] leading-[1.55]">
                City Boy Arena operates as a non-partisan, trust-anchored platform that connects citizens, volunteers, donors, and partners to verified initiatives across all 36 states — ensuring transparency, accountability, and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Governance Strip */}
      <section className="h-[280px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center">
          <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-[28px]">
            {/* Pillar 1 */}
            <div className="text-center">
              <CheckCircle className="w-10 h-10 text-[#18A34A] mx-auto mb-[18px]" />
              <h4 className="text-white text-[22px] font-bold mb-[12px]">Transparency</h4>
              <p className="text-white/58 text-[15px]">Every transaction visible and audited</p>
            </div>
            {/* Pillar 2 */}
            <div className="text-center">
              <CheckCircle className="w-10 h-10 text-[#18A34A] mx-auto mb-[18px]" />
              <h4 className="text-white text-[22px] font-bold mb-[12px]">Execution</h4>
              <p className="text-white/58 text-[15px]">Verified delivery on commitments</p>
            </div>
            {/* Pillar 3 */}
            <div className="text-center">
              <CheckCircle className="w-10 h-10 text-[#18A34A] mx-auto mb-[18px]" />
              <h4 className="text-white text-[22px] font-bold mb-[12px]">Accountability</h4>
              <p className="text-white/58 text-[15px]">Quarterly reports to stakeholders</p>
            </div>
            {/* Pillar 4 */}
            <div className="text-center">
              <CheckCircle className="w-10 h-10 text-[#18A34A] mx-auto mb-[18px]" />
              <h4 className="text-white text-[22px] font-bold mb-[12px]">National Service</h4>
              <p className="text-white/58 text-[15px]">Civic duty above all else</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Leadership Philosophy */}
      <section className="h-[540px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            {/* LEFT: Narrative */}
            <div className="max-w-[620px]">
              <span className="text-[#D4AF37] text-[13px] font-bold uppercase tracking-[2px] mb-[24px] block">Leadership Philosophy</span>
              <h2 className="text-[56px] text-white font-extrabold leading-[1.05] mb-[28px]">Governed by Trust, Powered by Service</h2>
              <p className="text-white/78 text-[20px] leading-[1.6] mb-[42px]">
                Our governance model combines Board of Trustees oversight with community-driven accountability. Each project is tracked, every naira is accounted for, and all outcomes are measured against verifiable benchmarks.
              </p>
              <Link to="/leadership" className="inline-flex items-center gap-3 text-[#18A34A] font-bold uppercase tracking-[2px] text-[14px]">
                View Leadership <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* RIGHT: Visual Institutional Card */}
            <div className="rounded-[28px] p-[48px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)', boxShadow: '0 28px 60px rgba(0,0,0,0.18)'}}>
              <div className="grid grid-cols-1 gap-[28px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#18A34A]/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#18A34A]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font-bold">Board of Trustees</h4>
                    <p className="text-white/58 text-[14px]">Strategic governance oversight</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#18A34A]/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#18A34A]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font-bold">Executive Leadership</h4>
                    <p className="text-white/58 text-[14px]">Operational execution authority</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#18A34A]/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#18A34A]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font-bold">Advisory Council</h4>
                    <p className="text-white/58 text-[14px]">Domain expertise & guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: National Commitment */}
      <section className="h-[300px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center justify-center">
          <div className="text-center max-w-[780px]">
            <h2 className="text-white text-[48px] font-extrabold leading-[1.1] mb-[24px]">A Commitment to Nigeria's Future</h2>
            <p className="text-white/78 text-[22px] leading-[1.55] mb-[42px]">
              Every project we deliver, every volunteer we mobilize, and every naira we receive contributes to building a Nigeria where trust is earned through action.
            </p>
            <Link to="/join" className="inline-flex items-center gap-3 bg-[#18A34A] text-white px-[32px] py-[16px] rounded-[999px] font-bold uppercase tracking-[2px] text-[14px] hover:bg-[#16A34A] transition-all">
              Join the Movement
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Footer Transition */}
      <section className="h-[120px]" style={{background: 'linear-gradient(180deg, #07141f 0%, #031B30 100%)'}}>
      </section>
    </div>
  )
}