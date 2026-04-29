import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { name: 'Hub', href: '/', active: true },
  { name: 'Transparency', href: '/transparency' },
  { name: 'Donor', href: '/donate' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Command', href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'border-b border-white/10 bg-[#003153]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center px-8 h-20 w-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-secondary italic cursor-pointer">
          City Boy Arena
        </div>

        {/* Center Nav Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-h3 text-[12px] uppercase font-bold tracking-tight transition-colors ${
                link.active 
                  ? 'text-secondary border-b-2 border-secondary pb-1' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 bg-transparent border border-secondary text-secondary font-h3 text-[12px] uppercase font-bold hover:bg-secondary/10 transition-all">
            Donate
          </button>
          <Link 
            to="/join" 
            className="px-6 py-2 bg-secondary text-on-secondary font-h3 text-[12px] uppercase font-bold gold-glow active:scale-95 transition-all"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-surface-container-lowest z-40 p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-slate-300 py-3 border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link 
                to="/donate" 
                className="text-center py-3 border border-secondary text-secondary rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Donate
              </Link>
              <Link 
                to="/join" 
                className="text-center py-3 bg-secondary text-on-secondary rounded-lg font-bold"
                onClick={() => setMobileOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}