import { Link } from 'react-router-dom'
import { Newspaper, PlayCircle, FileText, Camera, Mail } from 'lucide-react'

const releases = [
  { date: 'April 2026', title: 'Kaduna Clean Water Initiative Reaches 50,000 Households', category: 'Press Release' },
  { date: 'April 2026', title: 'Lagos Youth Enterprise Fund Opens with ₦500M Capital', category: 'Announcement' },
  { date: 'March 2026', title: 'Plateau Agriculture Pilot Launches in 12 Local Governments', category: 'Press Release' },
  { date: 'March 2026', title: 'Q1 2026 Transparency Report Released', category: 'Report' },
]

const statements = [
  { date: 'April 2026', title: 'Executive Statement on National Service Year Program' },
  { date: 'March 2026', title: 'Response to Infrastructure Funding Query' },
  { date: 'February 2026', title: 'Annual Address to Stakeholders' },
]

export default function MediaPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[#031B30]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <h1 className="font-h1 text-4xl md:text-6xl text-white mb-6">Media Centre</h1>
          <p className="text-xl md:text-2xl text-[#CBD5E1] max-w-3xl">
            Latest news, statements, and resources from City Boy Arena.
          </p>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="font-h2 text-3xl text-white">Latest Releases</h2>
          </div>
          <div className="space-y-4">
            {releases.map((release, i) => (
              <div key={i} className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6 hover:border-[rgba(212,175,55,.28)] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#D4AF37] font-label-caps">{release.category}</span>
                    <h3 className="font-h3 text-lg text-white mt-1">{release.title}</h3>
                  </div>
                  <span className="text-sm text-[#94A3B8]">{release.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statements */}
      <section className="py-16 md:py-24 bg-[#121414]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="font-h2 text-3xl text-white">Statements</h2>
          </div>
          <div className="space-y-4">
            {statements.map((statement, i) => (
              <div key={i} className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6 hover:border-[rgba(212,175,55,.28)] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="font-h3 text-lg text-white">{statement.title}</h3>
                  <span className="text-sm text-[#94A3B8]">{statement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsroom */}
      <section className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="flex items-center gap-3 mb-8">
            <PlayCircle className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="font-h2 text-3xl text-white">Newsroom</h2>
          </div>
          <div className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-8">
            <div className="aspect-video bg-[#062B49] rounded-lg mb-4 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-[#D4AF37]" />
            </div>
            <p className="text-[#CBD5E1]">Featured coverage and video content</p>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 md:py-24 bg-[#121414]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="font-h2 text-3xl text-white">Media Kit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
              <h3 className="font-h3 text-lg text-white mb-3">Brand Assets</h3>
              <p className="text-[#94A3B8] mb-4">Logos, imagery, and guidelines for media use.</p>
              <button className="text-[#D4AF37] hover:underline">Download Kit →</button>
            </div>
            <div className="bg-[#1a1c1c] border border-[rgba(255,255,255,.08)] rounded-xl p-6">
              <h3 className="font-h3 text-lg text-white mb-3">Fact Sheet</h3>
              <p className="text-[#94A3B8] mb-4">Key statistics and organizational details.</p>
              <button className="text-[#D4AF37] hover:underline">Download PDF →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16 md:py-24 bg-[#0c0f0f]">
        <div className="container mx-auto px-5 max-w-[1440px]">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="font-h2 text-3xl text-white">Press Contact</h2>
          </div>
          <p className="text-lg text-[#CBD5E1] mb-4">
            For media enquiries, interview requests, and press credentials:
          </p>
          <a href="mailto:media@cityboyarena.com" className="text-[#D4AF37] hover:underline text-lg">
            media@cityboyarena.com
          </a>
        </div>
      </section>
    </div>
  )
}