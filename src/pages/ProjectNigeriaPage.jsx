import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star, Users, Heart, Camera, Trophy, Globe, MapPin, TrendingUp } from 'lucide-react'

const featuredStories = [
  {
    id: 1,
    title: 'The New Lagos',
    creator: 'Chioma Nwosu',
    views: '1.2M',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Northern Renaissance',
    creator: 'Abubakar Mohammed',
    views: '890K',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968ef?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Tech Giants of Abuja',
    creator: 'David Chukwu',
    views: '756K',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Healthcare Heroes',
    creator: 'Dr. Adaeze Obi',
    views: '620K',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
]

const creators = [
  { name: 'Tunde Adeyemi', role: 'Documentarian', followers: '245K', content: '48 stories' },
  { name: 'Sarah Ibrahim', role: 'Photojournalist', followers: '189K', content: '72 stories' },
  { name: 'Emeka Okonkwo', role: 'Content Creator', followers: '156K', content: '95 stories' },
  { name: 'Aisha Abubakar', role: 'Vlogger', followers: '134K', content: '120 stories' },
]

const challenges = [
  { title: '#BuildingNigeria', participants: '45K', stories: '128K' },
  { title: '#OurSuccessStory', participants: '32K', stories: '89K' },
  { title: '#MakingADifference', participants: '28K', stories: '76K' },
  { title: '#ProudlyNigerian', participants: '52K', stories: '201K' },
]

export default function ProjectNigeriaPage() {
  return (
    <div className="min-h-screen pt-20 bg-prussian-dark">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-prussian-dark via-prussian to-prussian-dark" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="relative max-w-[1320px] mx-auto px-5">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-gold" />
              FLAGSHIP MOVEMENT
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Project <span className="text-gradient-gold">Nigeria</span>
            </h1>
            <p className="text-xl text-soft-ivory/70 max-w-3xl mx-auto">
              Show what works. Show who builds. Show Nigeria beautifully.
            </p>
          </div>

          <div className="relative aspect-video max-w-4xl mx-auto rounded-[40px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-prussian-dark z-10" />
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=700&fit=crop"
              alt="Project Nigeria"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center z-20 hover:bg-gold hover:scale-110 transition-all">
              <Play className="w-10 h-10 text-prussian-dark ml-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-prussian">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-gold mx-auto mb-2" />
              <p className="font-data text-3xl font-bold text-white">847</p>
              <p className="text-sm text-soft-ivory/60">Active Creators</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <Camera className="w-8 h-8 text-gold mx-auto mb-2" />
              <p className="font-data text-3xl font-bold text-white">12.4K</p>
              <p className="text-sm text-soft-ivory/60">Stories Published</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <Heart className="w-8 h-8 text-gold mx-auto mb-2" />
              <p className="font-data text-3xl font-bold text-white">45M</p>
              <p className="text-sm text-soft-ivory/60">Total Views</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <Globe className="w-8 h-8 text-gold mx-auto mb-2" />
              <p className="font-data text-3xl font-bold text-white">92</p>
              <p className="text-sm text-soft-ivory/60">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl font-bold text-white">Featured Stories</h2>
            <Link to="/stories" className="text-gold flex items-center gap-1 hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStories.map((story) => (
              <div key={story.id} className="group card overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {story.featured && (
                    <span className="absolute top-4 left-4 px-2 py-1 rounded-full bg-gold text-xs font-medium text-prussian-dark">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-prussian-dark/80 to-transparent" />
                </div>
                <div className="mt-4">
                  <h3 className="font-display font-bold text-white group-hover:text-gold transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-soft-ivory/60">by {story.creator} • {story.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-prussian">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl font-bold text-white">Creator Spotlight</h2>
            <Link to="/creators" className="text-gold flex items-center gap-1 hover:underline">
              All Creators <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.map((creator) => (
              <div key={creator.name} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-prussian-dark">
                    {creator.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white">{creator.name}</h3>
                <p className="text-sm text-soft-ivory/60 mb-4">{creator.role}</p>
                <div className="flex justify-center gap-4 text-sm">
                  <span className="text-gold font-medium">{creator.followers}</span>
                  <span className="text-soft-ivory/40">|</span>
                  <span className="text-soft-ivory/60">{creator.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">Active Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-5 h-5 text-gold" />
                  <h3 className="font-display font-bold text-white">{challenge.title}</h3>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-soft-ivory/60">{challenge.participants} participants</span>
                  <span className="text-signal-green">{challenge.stories} stories</span>
                </div>
                <Link to={`/challenge/${challenge.title}`} className="mt-4 btn-ghost w-full text-center py-2 block">
                  Join Challenge
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-prussian">
        <div className="max-w-[1320px] mx-auto px-5 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Become a Creator</h2>
          <p className="text-lg text-soft-ivory/70 max-w-2xl mx-auto mb-8">
            Join our creator program and tell stories that inspire the nation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/creator-signup" className="btn-gold inline-flex items-center gap-2">
              Start Creating <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/sponsor-content" className="btn-ghost inline-flex items-center gap-2">
              Sponsor Content
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-deep">
        <div className="max-w-[1320px] mx-auto px-5">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Discover Nigeria</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Enugu', 'Ibadan'].map((city) => (
              <div key={city} className="card p-6 flex items-center gap-4">
                <MapPin className="w-8 h-8 text-gold" />
                <div>
                  <h3 className="font-display font-bold text-white">{city}</h3>
                  <p className="text-sm text-soft-ivory/60">View stories & projects</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}