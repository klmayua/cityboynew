import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Users, Heart, Award, Globe } from 'lucide-react'

const joinOptions = [
  { 
    icon: Users, 
    title: 'Volunteer', 
    description: 'Join 12,000+ volunteers making real impact',
    href: '/volunteer',
    color: 'signal-green'
  },
  { 
    icon: Heart, 
    title: 'Donate', 
    description: 'Power projects that transform communities',
    href: '/donate',
    color: 'gold'
  },
  { 
    icon: Zap, 
    title: 'Create', 
    description: 'Tell stories that inspire the nation',
    href: '/creator',
    color: 'prussian'
  },
  { 
    icon: Globe, 
    title: 'Diaspora', 
    description: 'Support from anywhere in the world',
    href: '/diaspora',
    color: 'steel-muted'
  },
  { 
    icon: Award, 
    title: 'Partner', 
    description: 'Align your brand with national impact',
    href: '/partner',
    color: 'gold'
  },
]

export default function JoinCTA() {
  return (
    <section className="py-24 bg-prussian-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-signal-green/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Your Arena Awaits
          </h2>
          <p className="text-lg text-soft-ivory/70 max-w-2xl mx-auto">
            In 60 seconds, you can become part of Nigeria's most impactful civic movement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {joinOptions.map((option) => (
            <Link
              key={option.title}
              to={option.href}
              className="group card text-center p-6"
            >
              <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-${option.color}/10`}>
                <option.icon className={`w-7 h-7 text-${option.color}`} />
              </div>
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {option.title}
              </h3>
              <p className="text-sm text-soft-ivory/60">
                {option.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link to="/join" className="btn-gold inline-flex items-center gap-2 text-lg px-8 py-4">
              Join Arena Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <span className="text-sm text-soft-ivory/50">
              Free • Takes 60 seconds • No commitment
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}