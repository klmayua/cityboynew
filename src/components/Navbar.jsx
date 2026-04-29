import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles, Search, ChevronDown, User, Heart, Users, Map, Video, MessageCircle, Briefcase } from 'lucide-react'

const navLinks = [
  { name: 'Movement', href: '#' },
  { name: 'Impact', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Project Nigeria', href: '/project-nigeria' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Partner', href: '#' },
  { name: 'Community', href: '#' },
  { name: 'Media', href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1320px] mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
            <span className="font-display font-bold text-prussian-dark text-lg">CB</span>
          </div>
          <span className="font-display font-bold text-xl text-white hidden sm:block">
            CITY BOY<span className="text-gold">.</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-soft-ivory/80 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="p-3 rounded-xl glass hover:bg-white/10 transition-colors">
            <Search className="w-5 h-5 text-soft-ivory" />
          </button>
          <button className="p-3 rounded-xl glass hover:bg-white/10 transition-colors">
            <Sparkles className="w-5 h-5 text-gold" />
          </button>
          <Link to="/join" className="btn-ghost text-sm py-3 px-5">
            Join Arena
          </Link>
          <Link to="/donate" className="btn-gold text-sm py-3 px-5">
            Donate
          </Link>
        </div>

        <button
          className="lg:hidden p-3 rounded-xl glass"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-prussian-dark z-40 p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-soft-ivory py-3 border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link to="/join" className="btn-ghost text-center">Join Arena</Link>
              <Link to="/donate" className="btn-gold text-center">Donate</Link>
            </div>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 glass rounded-xl">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 glass rounded-xl">
                <Sparkles className="w-5 h-5 text-gold" />
                <span>AI Helper</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}