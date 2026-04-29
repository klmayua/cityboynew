import { Link } from 'react-router-dom'
import { ArrowRight, Play, Users, Heart, Camera, Star } from 'lucide-react'

export default function ProjectNigeria() {
  return (
    <section className="relative py-24 overflow-hidden bg-prussian-dark">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-prussian to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-deep to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-gold" />
            FLAGSHIP MOVEMENT
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Project <span className="text-gradient-gold">Nigeria</span>
          </h2>
          <p className="text-xl text-soft-ivory/70 max-w-3xl mx-auto">
            Show what works. Show who builds. Show Nigeria beautifully.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-video rounded-[32px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-prussian-dark z-10" />
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=500&fit=crop"
              alt="Project Nigeria Hero"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center z-20 hover:bg-gold hover:scale-110 transition-all">
              <Play className="w-8 h-8 text-prussian-dark ml-1" />
            </button>
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <p className="text-white font-display font-bold text-xl">Watch the Documentary</p>
              <p className="text-soft-ivory/80 text-sm">6 minutes • 2.4M views</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white mb-1">Content Creator Program</h4>
                <p className="text-sm text-soft-ivory/70 mb-3">
                  Join 847+ creators telling positive Nigerian stories
                </p>
                <Link to="/creator" className="text-gold text-sm font-medium hover:underline">
                  Join as Creator →
                </Link>
              </div>
            </div>

            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-signal-green/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-signal-green" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white mb-1">Sponsor a Story</h4>
                <p className="text-sm text-soft-ivory/70 mb-3">
                  Fund impactful stories that need to be told
                </p>
                <Link to="/sponsor" className="text-signal-green text-sm font-medium hover:underline">
                  Sponsor Content →
                </Link>
              </div>
            </div>

            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-prussian-light/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-prussian-light" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white mb-1">Join the Challenge</h4>
                <p className="text-sm text-soft-ivory/70 mb-3">
                  Participate in national engagement challenges
                </p>
                <Link to="/challenges" className="text-prussian-light text-sm font-medium hover:underline">
                  View Challenges →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/project-nigeria" className="btn-gold inline-flex items-center gap-2">
            Explore Project Nigeria
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/creator-signup" className="btn-ghost inline-flex items-center gap-2">
            Become a Creator
          </Link>
          <Link to="/sponsor" className="btn-ghost inline-flex items-center gap-2">
            Sponsor Content
          </Link>
        </div>
      </div>
    </section>
  )
}