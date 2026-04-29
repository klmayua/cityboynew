import React from 'react'

const stories = [
  { title: 'The New Lagos', creator: 'Chioma Nwosu', views: '1.2M', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop' },
  { title: 'Northern Renaissance', creator: 'Abubakar M.', views: '890K', image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968ef?w=400&h=300&fit=crop' },
  { title: 'Tech Giants of Abuja', creator: 'David C.', views: '756K', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop' },
  { title: 'Healthcare Heroes', creator: 'Dr. Adaeze O.', views: '620K', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop' },
]

const challenges = [
  { title: '#BuildingNigeria', participants: '45K', stories: '128K' },
  { title: '#OurSuccessStory', participants: '32K', stories: '89K' },
  { title: '#MakingADifference', participants: '28K', stories: '76K' },
]

export default function ProjectNigeria() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#001B2E] to-[#003153]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[150px]" />
        </div>
        <div className="container relative text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
            ★ FLAGSHIP MOVEMENT
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Project <span className="text-gradient">Nigeria</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Show what works. Show who builds. Show Nigeria beautifully.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#003153]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '847', label: 'Content Creators' },
              { value: '12.4K', label: 'Stories Published' },
              { value: '45M', label: 'Total Views' },
              { value: '92', label: 'Countries Reached' },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <div className="font-data text-3xl font-bold text-[#D4AF37]">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-[#FAF8F2]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#003153] mb-8">Featured Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-[#003153] mb-1">{story.title}</h3>
                  <p className="text-[#5B6B7A] text-sm">by {story.creator} • {story.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Active Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <div key={i} className="card p-8 text-center">
                <h3 className="font-bold text-xl text-[#D4AF37] mb-4">{challenge.title}</h3>
                <div className="flex justify-center gap-8 text-white/60">
                  <div><span className="font-bold text-white block text-2xl">{challenge.participants}</span>participants</div>
                  <div><span className="font-bold text-white block text-2xl">{challenge.stories}</span>stories</div>
                </div>
                <button className="btn btn-outline mt-6 w-full">Join Challenge</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#003153]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become a Creator</h2>
          <p className="text-white/70 mb-8">Tell stories that inspire the nation.</p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-gold">Start Creating</button>
            <button className="btn btn-outline">Sponsor Content</button>
          </div>
        </div>
      </section>
    </div>
  )
}