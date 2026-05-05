import { Link } from 'react-router-dom'
import { MapPin, Users, Calendar, ArrowRight, Heart, Clock, Shield } from 'lucide-react'

const chapters = [
  { name: 'Lagos Central', members: '2,400+', leads: 'Amina, Chidi', state: 'Lagos' },
  { name: 'Abuja Metro', members: '1,850+', leads: 'Tunde, Bola', state: 'FCT' },
  { name: 'Kano North', members: '1,200+', leads: 'Yusuf', state: 'Kano' },
  { name: 'Enugu East', members: '980', leads: 'Adaora', state: 'Enugu' },
]

const events = [
  { title: 'National Volunteer Summit', date: 'June 15, 2026', location: 'Abuja', spots: 500 },
  { title: 'Lagos Chapter Gala', date: 'June 22, 2026', location: 'Lagos', spots: 200 },
  { title: 'Kano Community Build', date: 'July 1, 2026', location: 'Kano', spots: 150 },
]

export default function CommunityPage() {
  return (
    <div className="bg-[#07141f] min-h-screen">
      {/* HERO - Compact */}
      <section className="h-[260px]" style={{background: 'linear-gradient(135deg, #031B30 0%, #07141f 100%)'}}>
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center">
          <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            <div>
              <h1 className="text-white text-[56px] font-extrabold leading-[1.05] mb-[20px]">The Arena Community</h1>
              <p className="text-white/78 text-[22px] leading-[1.5] max-w-[560px]">
                18,420+ citizens organizing locally, volunteering nationally, and building visible progress together.
              </p>
            </div>
            {/* Right Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[28px]">
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">18K+</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Members</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">36</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">124K</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL CHAPTERS - Expanded Card Hierarchy */}
      <section className="pt-[56px] pb-[56px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <div className="flex justify-between items-end mb-[28px]">
              <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px]">Regional Chapters</span>
              <Link to="/arena/chapters" className="text-white/58 text-[14px] hover:text-white">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {chapters.map((chapter, i) => (
                <Link key={i} to={`/chapters/${chapter.name.toLowerCase().replace(' ', '-')}`} className="group rounded-[24px] p-[28px] transition-all duration-250 hover:-translate-y-[3px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                  <div className="flex items-center gap-2 mb-[14px]">
                    <MapPin className="w-4 h-4 text-[#18A34A]" />
                    <span className="text-[#18A34A] text-[11px] uppercase tracking-[2px]">Active</span>
                  </div>
                  <h3 className="text-white text-[20px] font-bold mb-[10px]">{chapter.name}</h3>
                  <p className="text-white/58 text-[14px] mb-[6px]">{chapter.members} members</p>
                  <p className="text-white/48 text-[13px]">Leads: {chapter.leads}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER + EVENTS - 2 Column */}
      <section className="pt-[28px] pb-[56px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[42px]">
            {/* Left: Volunteer Tracks */}
            <div className="rounded-[28px] p-[36px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
              <div className="flex items-center gap-3 mb-[28px]">
                <Heart className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-white text-[20px] font-bold">Volunteer Tracks</span>
              </div>
              <div className="space-y-[16px]">
                {[
                  { name: 'Amina', role: 'Chapter Lead', chapter: 'Lagos Central', pts: '12,400', hours: '840' },
                  { name: 'Tunde', role: 'Volunteer', chapter: 'Abuja Metro', pts: '8,200', hours: '520' },
                  { name: 'Chidi', role: 'Organizer', chapter: 'Lagos Central', pts: '7,850', hours: '412' },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-[20px] rounded-[16px]" style={{background: 'rgba(255,255,255,.03)'}}>
                    <div>
                      <p className="text-white text-[16px] font-bold">{member.name}</p>
                      <p className="text-white/48 text-[13px]">{member.role} • {member.chapter}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#D4AF37] text-[18px] font-bold">{member.pts}</p>
                      <p className="text-white/48 text-[11px]">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Upcoming Events */}
            <div className="rounded-[28px] p-[36px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
              <div className="flex items-center gap-3 mb-[28px]">
                <Calendar className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-white text-[20px] font-bold">Upcoming Events</span>
              </div>
              <div className="space-y-[16px]">
                {events.map((event, i) => (
                  <div key={i} className="p-[20px] rounded-[16px]" style={{background: 'rgba(255,255,255,.03)'}}>
                    <div className="flex items-center justify-between mb-[8px]">
                      <h4 className="text-white text-[16px] font-bold">{event.title}</h4>
                      <span className="text-[#18A34A] text-[11px] uppercase tracking-[2px]">Open</span>
                    </div>
                    <p className="text-white/58 text-[13px]">{event.date} • {event.location}</p>
                    <p className="text-white/48 text-[12px]">{event.spots} spots available</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-[56px] pb-[72px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto text-center">
            <h2 className="text-white text-[38px] font-extrabold mb-[20px]">Join the Movement</h2>
            <p className="text-white/72 text-[18px] leading-[1.55] mb-[32px] max-w-[560px] mx-auto">
              Join a chapter. Contribute skills. Build Nigeria.
            </p>
            <Link to="/join" className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#031B30] px-[32px] py-[16px] rounded-[999px] font-bold uppercase tracking-[2px] text-[14px]">
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}