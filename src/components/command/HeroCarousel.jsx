import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Zap, AlertTriangle, TrendingUp } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'
import { useMissionStore } from '../../store/missionStore'
import { useCapitalStore } from '../../store/capitalStore'
import { useSystemStore } from '../../store/systemStore'

const marketingSlides = [
  {
    id: 'project-nigeria',
    headline: 'Project Nigeria',
    body: 'Fund and track verified infrastructure projects in every state.',
    cta: 'View Projects',
    href: '/project-nigeria',
    image: 'https://i.imgur.com/scOJueT.jpeg',
  },
  {
    id: 'youth-employment',
    headline: 'Youth Employment',
    body: 'Connecting young Nigerians to skills training and meaningful jobs.',
    cta: 'Join the Mission',
    href: '/volunteer',
    image: 'https://i.imgur.com/scOJueT.jpeg',
  },
  {
    id: 'clean-cities',
    headline: 'Clean Cities',
    body: 'Sanitation and environmental initiatives transforming urban spaces.',
    cta: 'Get Involved',
    href: '/initiatives',
    image: 'https://i.imgur.com/scOJueT.jpeg',
  },
  {
    id: 'education-forward',
    headline: 'Education Forward',
    body: 'School upgrades, digital learning, and teacher development programs.',
    cta: 'Support Schools',
    href: '/donate',
    image: 'https://i.imgur.com/scOJueT.jpeg',
  },
  {
    id: 'civic-tech',
    headline: 'Civic Tech',
    body: 'Digital platforms connecting citizens to government services.',
    cta: 'Explore Platform',
    href: '/community',
    image: 'https://i.imgur.com/scOJueT.jpeg',
  },
  {
    id: 'national-skills',
    headline: 'National Skills Mission',
    body: 'Vocational training creating artisanal pathways across Nigeria.',
    cta: 'Learn Skills',
    href: '/volunteer',
    image: 'https://i.imgur.com/scOJueT.jpeg',
  },
]

function generateDynamicSlide(intelStore, missionStore, capitalStore, systemStore) {
  const alerts = intelStore?.alerts || []
  const missions = missionStore?.missions || []
  const allocations = capitalStore?.allocations || []
  const sentiment = intelStore?.sentiment?.overall || 0

  const criticalAlerts = alerts.filter(a => a.type === 'critical' && !a.read)
  const activeMissions = missions.filter(m => m.status === 'active')
  const pendingAllocations = allocations.filter(a => a.status === 'pending')

  if (criticalAlerts.length > 0) {
    return {
      id: 'alert-priority',
      headline: 'Critical Alert',
      body: `${criticalAlerts.length} priority alert${criticalAlerts.length > 1 ? 's' : ''} require immediate attention.`,
      cta: 'View Alerts',
      href: '/app/command/intelligence',
      image: 'https://i.imgur.com/scOJueT.jpeg',
      type: 'alert'
    }
  }

  if (pendingAllocations.length > 0) {
    return {
      id: 'capital-action',
      headline: 'Capital Action Required',
      body: `${pendingAllocations.length} allocation${pendingAllocations.length > 1 ? 's' : ''} pending approval.`,
      cta: 'Review Capital',
      href: '/app/command/capital',
      image: 'https://i.imgur.com/scOJueT.jpeg',
      type: 'capital'
    }
  }

  if (activeMissions.length > 3) {
    return {
      id: 'mission-momentum',
      headline: 'Mission Momentum',
      body: `${activeMissions.length} active missions driving national impact.`,
      cta: 'View Operations',
      href: '/app/command/operations',
      image: 'https://i.imgur.com/scOJueT.jpeg',
      type: 'mission'
    }
  }

  return null
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const intelStore = useIntelStore(s => s)
  const missionStore = useMissionStore(s => s)
  const capitalStore = useCapitalStore(s => s)
  const systemStore = useSystemStore(s => s)

  const sentiment = useIntelStore(s => s.sentiment.overall)
  const unreadAlerts = useIntelStore(s => s.alerts.filter(a => !a.read).length)
  const activeMissions = useMissionStore(s => s.missions.filter(m => m.status === 'active').length)

  const dynamicSlide = generateDynamicSlide(intelStore, missionStore, capitalStore, systemStore)

  const slides = dynamicSlide
    ? [dynamicSlide, ...marketingSlides]
    : marketingSlides

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, slides.length])

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  const slide = slides[current]

  return (
    <section 
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          alt={slide.headline}
          className="w-full h-full object-cover opacity-40"
          src={slide.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121414]/80 via-transparent to-transparent" />
      </div>

      {/* Live Badge + Dynamic Status */}
      <div className="absolute top-32 left-4 md:left-8 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#062B49]/80 border border-[rgba(212,175,55,.28)] backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
          </span>
          <span className="text-xs font-label-caps text-[#D4AF37] uppercase">National Platform • Live</span>
        </div>
        {(unreadAlerts > 0 || sentiment > 0) && (
          <div className="flex items-center gap-3 mt-2">
            {unreadAlerts > 0 && (
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-signal-red/20 text-signal-red text-xs">
                <AlertTriangle className="w-3 h-3" />
                <span>{unreadAlerts} Alert{unreadAlerts > 1 ? 's' : ''}</span>
              </div>
            )}
            {activeMissions > 0 && (
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-command-blue/20 text-command-blue text-xs">
                <TrendingUp className="w-3 h-3" />
                <span>{activeMissions} Active</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-capital-green/20 text-capital-green text-xs">
              <span>{sentiment}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center max-w-[1440px]">
        <div className="max-w-xl">
          <h1 className="font-h1 text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 leading-tight">
            {slide.headline}
          </h1>
          <p className="text-lg md:text-xl text-[#CBD5E1] mb-6 md:mb-8 max-w-lg">
            {slide.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to={slide.href}
              className="inline-flex bg-[#D4AF37] text-[#031B30] px-6 py-3 md:px-8 md:py-4 rounded-md font-label-caps text-sm md:text-base hover:brightness-110 transition-all items-center gap-2"
            >
              {slide.cta} <Zap className="w-4 h-4" />
            </Link>
            <Link 
              to="/donate"
              className="inline-flex bg-[#062B49]/60 border border-[rgba(212,175,55,.28)] text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-label-caps text-sm md:text-base hover:bg-[#062B49] transition-all"
            >
              Fund Impact
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop */}
      <button 
        onClick={prev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#062B49]/60 border border-[rgba(212,175,55,.28)] items-center justify-center text-white hover:bg-[#062B49] transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#062B49]/60 border border-[rgba(212,175,55,.28)] items-center justify-center text-white hover:bg-[#062B49] transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current 
                ? 'bg-[#D4AF37] w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        Swipe to navigate
      </div>
    </section>
  )
}