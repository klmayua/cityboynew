import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Movement', href: '/' },
  { name: 'Impact', href: '/project-nigeria' },
  { name: 'Projects', href: '/projects' },
  { name: 'Project Nigeria', href: '/project-nigeria' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Community', href: '#' },
]

const bottomNavItems = [
  { name: 'Home', href: '/', icon: '⌂' },
  { name: 'Impact', href: '/project-nigeria', icon: '♥' },
  { name: 'Projects', href: '/projects', icon: '☰' },
  { name: 'Arena', href: '/join', icon: '◎' },
  { name: 'Profile', href: '#', icon: '◉' },
]

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-[#001B2E]">CB</span>
              </div>
              <span className="font-display font-bold text-xl text-white hidden sm:block">
                CITY BOY<span className="text-[#D4AF37]">.</span>
              </span>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-[#FAF8F2]/80 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-lg bg-white/5 text-[#FAF8F2] hover:bg-white/10 transition-colors">
                <span className="text-[#D4AF37]">✦</span>
              </button>
              <Link to="/donate" className="btn-gold text-sm py-2 px-4 hidden sm:inline-flex">Donate</Link>
              <Link to="/join" className="btn-outline text-sm py-2 px-4 hidden md:inline-flex">Join Arena</Link>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="text-xl">{mobileMenuOpen ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass border-t border-white/10">
            <div className="container py-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium text-[#FAF8F2]/80 py-2 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-white/10 my-2" />
                <Link to="/donate" className="btn-gold text-center py-3">Donate</Link>
                <Link to="/join" className="btn-outline text-center py-3">Join Arena</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] border-t border-white/5">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                  <span className="font-display font-bold text-[#001B2E]">CB</span>
                </div>
                <span className="font-display font-bold text-xl text-white">
                  CITY BOY<span className="text-[#D4AF37]">.</span>
                </span>
              </Link>
              <p className="text-[#FAF8F2]/60 text-sm">
                Nigeria's most trusted civic engagement, transparency and national mobilization infrastructure.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <div className="flex flex-col gap-2">
                <Link to="/project-nigeria" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37] transition-colors">Project Nigeria</Link>
                <Link to="/volunteer" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37] transition-colors">Volunteer</Link>
                <Link to="/transparency" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37] transition-colors">Transparency</Link>
              </div>
            </div>

            {/* Participate */}
            <div>
              <h4 className="font-semibold text-white mb-4">Participate</h4>
              <div className="flex flex-col gap-2">
                <Link to="/join" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37] transition-colors">Join Arena</Link>
                <Link to="/donate" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37] transition-colors">Donate</Link>
                <Link to="#" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37] transition-colors">Chapters</Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex flex-col gap-2 text-sm text-[#FAF8F2]/60">
                <p>Lagos, Nigeria</p>
                <p>hello@cityboyarena.org</p>
                <p>+234 800 CITY BOY</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-[#FAF8F2]/40">
            © 2026 City Boy Movement. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Dock */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/10 z-50">
        <div className="flex items-center justify-around py-2 px-4">
          {bottomNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-[#FAF8F2]/60 hover:text-[#D4AF37] transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}