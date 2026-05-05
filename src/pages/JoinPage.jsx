import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Users, Heart, Shield, Sparkles, CheckCircle } from 'lucide-react'
import { useAnalytics } from '../analytics'

const benefits = [
  { icon: Users, title: 'Join a Community', description: 'Connect with 12,000+ ChangeMakers' },
  { icon: Heart, title: 'Make Real Impact', description: 'Volunteer in projects that transform' },
  { icon: Shield, title: 'Earn Trust Badges', description: 'Build your civic reputation' },
  { icon: Sparkles, title: 'Unlock Rewards', description: 'Get exclusive perks and recognition' },
]

export default function JoinPage() {
  const { trackJoinSubmit } = useAnalytics()

  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    trackJoinSubmit()
    alert('Welcome to City Boy Arena! (Demo)')
  }

  const handleStepChange = (newStep) => {
    const direction = newStep > currentStep ? 'next' : 'prev'
    setCurrentStep(newStep)
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-prussian-dark via-prussian to-prussian-dark">
      <div className="max-w-[1320px] mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Join 60 Seconds
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Become Part of<br />
              <span className="text-gradient-gold">Nigeria's Future</span>
            </h1>
            <p className="text-lg text-soft-ivory/70 mb-8">
              Join thousands of Nigerians building trust, driving action, and reimagining our nation. 
              Zero commitment. Unlimited opportunity.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm">{benefit.title}</h3>
                    <p className="text-xs text-soft-ivory/60">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-signal-green" />
                <span className="text-soft-ivory/70">Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-signal-green" />
                <span className="text-soft-ivory/70">No spam</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-signal-green" />
                <span className="text-soft-ivory/70">Your data is safe</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[32px] p-8">
            <h2 className="font-display text-2xl font-bold text-white mb-6 text-center">Join Arena</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-soft-ivory/80 mb-2">First Name</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-soft-ivory/80 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-soft-ivory/80 mb-2">Email Address</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-soft-ivory/80 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="input-field"
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-soft-ivory/80 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  State
                </label>
                <select className="input-field">
                  <option value="">Select your state</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="kano">Kano</option>
                  <option value="rivers">Rivers</option>
                  <option value="enugu">Enugu</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-soft-ivory/80 mb-2">I want to...</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Volunteer', 'Donate', 'Create Content', 'Just Support'].map((option) => (
                    <label key={option} className="flex items-center gap-2 p-3 border border-white/10 rounded-xl cursor-pointer hover:border-gold/50 transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/30 bg-transparent text-gold focus:ring-gold" />
                      <span className="text-sm text-soft-ivory">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-gold w-full text-lg py-4 mt-6">
                Join Arena Now
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>

              <p className="text-xs text-center text-soft-ivory/50 mt-4">
                By joining, you agree to our{' '}
                <Link to="/governance" className="text-gold hover:underline">Terms</Link> and{' '}
                <Link to="/trust" className="text-gold hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}