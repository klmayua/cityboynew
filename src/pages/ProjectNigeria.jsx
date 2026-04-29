import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '847', label: 'Content Creators' },
  { value: '12.4K', label: 'Stories Published' },
  { value: '45M', label: 'Total Views' },
  { value: '92', label: 'Countries Reached' },
]

const stories = [
  { title: 'The New Lagos', creator: 'Chioma Nwosu', views: '1.2M', category: 'Featured' },
  { title: 'Northern Renaissance', creator: 'Abubakar M.', views: '890K', category: 'Culture' },
  { title: 'Tech Giants of Abuja', creator: 'David C.', views: '756K', category: 'Technology' },
  { title: 'Healthcare Heroes', creator: 'Dr. Adaeze O.', views: '620K', category: 'Health' },
]

const challenges = [
  { title: '#BuildingNigeria', participants: '45K', stories: '128K' },
  { title: '#OurSuccessStory', participants: '32K', stories: '89K' },
  { title: '#MakingADifference', participants: '28K', stories: '76K' },
]

const creators = [
  { name: 'Tunde Adeyemi', role: 'Documentarian', followers: '245K' },
  { name: 'Sarah Ibrahim', role: 'Photojournalist', followers: '189K' },
  { name: 'Emeka Okonkwo', role: 'Content Creator', followers: '156K' },
  { name: 'Aisha Abubakar', role: 'Vlogger', followers: '134K' },
]

export default function ProjectNigeria() {
  return (
    <div className="min-h-screen">
      {/* Hero - Full Width Banner */}
      <section className="relative py-24 bg-gradient-to-b from-[#001B2E] to-[#003153]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[150px] opacity-10" />
        </div>
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold mb-6">
              <span>★</span> FLAGSHIP MOVEMENT
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Project <span className="text-gradient-gold">Nigeria</span>
            </h1>
            <p className="text-xl text-[#FAF8F2]/70">
              Show what works. Show who builds. Show Nigeria beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-[#003153]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="glass card p-4 text-center">
                <div className="font-data text-2xl font-bold text-[#D4AF37]">{stat.value}</div>
                <div className="text-xs text-[#FAF8F2]/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="section bg-[#FAF8F2]">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#003153]">Featured Stories</h2>
            <Link to="#" className="text-sm font-medium text-[#D4AF37] hover:underline">View All →</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-56 bg-gradient-to-br from-[#0F172A] to-[#003153] flex items-center justify-center relative">
                  <span className="text-white/20 text-4xl">▶</span>
                  {story.category === 'Featured' && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37] text-[#001B2E] text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-[#003153] mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-[#5B6B7A]">
                    by {story.creator} • {story.views} views
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section bg-[#0F172A]">
        <div className="container">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Active Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={index} className="card p-8 text-center">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4">{challenge.title}</h3>
                <div className="flex justify-center gap-8 text-[#FAF8F2]/60">
                  <div>
                    <div className="font-bold text-white text-2xl">{challenge.participants}</div>
                    <div className="text-xs">participants</div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-2xl">{challenge.stories}</div>
                    <div className="text-xs">stories</div>
                  </div>
                </div>
                <button className="btn-outline w-full mt-6">Join Challenge</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Spotlight */}
      <section className="section bg-[#003153]">
        <div className="container">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Creator Spotlight</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {creators.map((creator, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#D4AF37] to-[#F0D060] rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-[#001B2E]">
                    {creator.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-white">{creator.name}</h3>
                <p className="text-sm text-[#FAF8F2]/60">{creator.role}</p>
                <p className="text-sm text-[#D4AF37] mt-2">{creator.followers} followers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-b from-[#001B2E] to-[#003153]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become a Creator</h2>
          <p className="text-[#FAF8F2]/70 mb-8 max-w-xl mx-auto">
            Tell stories that inspire the nation
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/join" className="btn-gold">Start Creating</Link>
            <Link to="/donate" className="btn-outline">Sponsor Content</Link>
          </div>
        </div>
      </section>
    </div>
  )
}