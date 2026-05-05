import { Link } from 'react-router-dom'
import { Newspaper, FileText, Download, ArrowRight, PlayCircle, ExternalLink, Newspaper as PressIcon } from 'lucide-react'

const releases = [
  { date: 'April 2026', title: 'Kaduna Clean Water Initiative Reaches 50,000 Households', category: 'Press' },
  { date: 'April 2026', title: 'Lagos Youth Enterprise Fund Opens with ₦500M Capital', category: 'Announcement' },
  { date: 'March 2026', title: 'Plateau Agriculture Pilot Launches in 12 Local Governments', category: 'Press' },
  { date: 'March 2026', title: 'Q1 2026 Transparency Report Released', category: 'Report' },
]

const statements = [
  { date: 'April 2026', title: 'Executive Statement on National Service Year Program' },
  { date: 'March 2026', title: 'Response to Infrastructure Funding Query' },
  { date: 'February 2026', title: 'Annual Address to Stakeholders' },
]

export default function MediaPage() {
  return (
    <div className="bg-[#07141f] min-h-screen">
      {/* HERO - Compact */}
      <section className="h-[280px]" style={{background: 'linear-gradient(135deg, #031B30 0%, #07141f 100%)'}}>
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center">
          <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            <div>
              <h1 className="text-white text-[56px] font-extrabold leading-[1.05] mb-[20px]">Media Centre</h1>
              <p className="text-white/78 text-[22px] leading-[1.5] max-w-[560px]">
                Latest news, statements, and resources from City Boy Arena.
              </p>
            </div>
            {/* Right: Newsroom Indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[28px]">
              <div className="text-center p-[20px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <Newspaper className="w-6 h-6 text-[#D4AF37] mx-auto mb-[12px]" />
                <div className="text-white text-[24px] font-bold">4</div>
                <div className="text-white/58 text-[11px] uppercase tracking-[2px]">Latest Release</div>
              </div>
              <div className="text-center p-[20px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <ExternalLink className="w-6 h-6 text-[#D4AF37] mx-auto mb-[12px]" />
                <div className="text-white text-[24px] font-bold">12</div>
                <div className="text-white/58 text-[11px] uppercase tracking-[2px]">Press Mentions</div>
              </div>
              <div className="text-center p-[20px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <Download className="w-6 h-6 text-[#D4AF37] mx-auto mb-[12px]" />
                <div className="text-white text-[24px] font-bold">3</div>
                <div className="text-white/58 text-[11px] uppercase tracking-[2px]">Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="pt-[28px] pb-[28px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto flex gap-[32px]">
            <button className="text-[#D4AF37] text-[14px] font-bold uppercase tracking-[2px] pb-[12px] border-b-2 border-[#D4AF37]">Press</button>
            <button className="text-white/58 text-[14px] font-bold uppercase tracking-[2px] pb-[12px] hover:text-white/80">Reports</button>
            <button className="text-white/58 text-[14px] font-bold uppercase tracking-[2px] pb-[12px] hover:text-white/80">Statements</button>
            <button className="text-white/58 text-[14px] font-bold uppercase tracking-[2px] pb-[12px] hover:text-white/80">Downloads</button>
          </div>
        </div>
      </section>

      {/* NEWSROOM LAYOUT - Featured + Stacked */}
      <section className="pt-[28px] pb-[56px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-[42px]">
            {/* Featured Release - Wide */}
            <div className="lg:col-span-3">
              <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px] mb-[18px] block">Featured</span>
              <Link to="/community" className="group block rounded-[24px] p-[36px] transition-all duration-250 hover:-translate-y-[2px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
                <div className="flex items-center gap-3 mb-[18px]">
                  <span className="text-[#D4AF37] text-[11px] uppercase tracking-[2px]">Press Release</span>
                  <span className="text-white/48">•</span>
                  <span className="text-white/58 text-[11px]">April 2026</span>
                </div>
                <h2 className="text-white text-[28px] font-extrabold leading-[1.15] mb-[16px]">
                  Kaduna Clean Water Initiative Reaches 50,000 Households
                </h2>
                <p className="text-white/72 text-[16px] leading-[1.55] mb-[24px]">
                  Landmark infrastructure project achieves full deployment across three local government areas, marking major milestone in national water access campaign.
                </p>
                <div className="flex items-center gap-3 text-[#D4AF37] font-bold uppercase tracking-[2px] text-[14px]">
                  Read Full Story <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </div>

            {/* Stacked Smaller Releases */}
            <div className="lg:col-span-2 space-y-[16px]">
              <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px] mb-[18px] block">Recent</span>
              {releases.slice(1).map((release, i) => (
                <Link key={i} to="/community" className="group block rounded-[18px] p-[24px] transition-all duration-250 hover:-translate-y-[1px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                  <div className="flex items-center gap-2 mb-[8px]">
                    <span className="text-white/48 text-[10px]">{release.date}</span>
                  </div>
                  <h3 className="text-white text-[15px] font-semibold leading-[1.4] group-hover:text-[#D4AF37] transition-colors">{release.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENTS */}
      <section className="pt-[28px] pb-[56px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px] mb-[28px] block">Official Statements</span>
            <div className="space-y-[16px]">
              {statements.map((statement, i) => (
                <Link key={i} to="/trust" className="group flex items-center justify-between rounded-[18px] p-[24px] transition-all duration-250 hover:-translate-y-[1px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-[#D4AF37]" />
                    <div>
                      <h3 className="text-white text-[16px] font-semibold">{statement.title}</h3>
                      <p className="text-white/48 text-[13px]">{statement.date}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA KIT CTA */}
      <section className="pt-[56px] pb-[72px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto rounded-[24px] p-[42px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[42px] items-center">
              <div>
                <h2 className="text-white text-[32px] font-extrabold mb-[14px]">Media Kit</h2>
                <p className="text-white/72 text-[18px] leading-[1.55]">
                  Brand assets, logos, imagery, and guidelines for media use. Download the complete kit for press coverage.
                </p>
              </div>
              <div className="lg:text-right">
                <Link to="/media" className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#031B30] px-[28px] py-[14px] rounded-[999px] font-bold uppercase tracking-[2px] text-[14px]">
                  Download Kit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}