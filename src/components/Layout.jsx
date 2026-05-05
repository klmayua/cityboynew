import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import BottomNav from './system/BottomNav'

export const logout = () => {
  localStorage.removeItem('cityboy_auth')
  window.location.href = '/login'
}

const footerLinks = {
  resources: [
    { name: 'Impact Report', href: '/impact' },
    { name: 'Privacy Protocol', href: '#' },
    { name: 'Trust & Transparency', href: '/trust' },
    { name: 'Governance', href: '/governance' },
  ],
  platform: [
    { name: 'Arena', href: '/' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Projects', href: '/projects' },
    { name: 'Partners', href: '/partners' },
  ],
}

const socialLinks = [
  { name: 'twitter', icon: 'X' },
  { name: 'instagram', icon: 'IG' },
  { name: 'linkedin', icon: 'IN' },
]

const navLinks = [
  { to: '/', label: 'Arena' },
  { to: '/about', label: 'About' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/media', label: 'Media' },
  { to: '/community', label: 'Community' },
]

function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="bg-[#062B49]/90 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-[rgba(212,175,55,.18)]">
        <div className="grid grid-cols-12 items-center px-4 md:px-8 h-16 md:h-20 max-w-[1440px] mx-auto gap-4">
          <div className="col-span-2 flex items-center">
            <Link to="/" className="text-lg md:text-xl font-semibold tracking-widest text-[#D4AF37] uppercase font-['Sora'] hover:brightness-110 hover:-translate-y-px transition-all duration-300">
              CITY BOY
            </Link>
          </div>
          <nav className="hidden md:flex col-span-7 items-center justify-center gap-6 font-['Sora'] font-medium tracking-tight" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link 
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                className={`text-sm transition-all duration-300 ${
                  location.pathname === link.to 
                    ? 'text-[#D4AF37] border-b border-[#D4AF37] pb-0.5' 
                    : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="col-span-10 flex justify-end items-center">
            <Link to="/join" className="hidden md:inline-flex bg-[#16A34A] text-white px-6 md:px-8 py-3 md:py-4 rounded font-label-caps text-sm hover:brightness-110 transition-all items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Volunteer</span>
            </Link>
            <button 
              className="md:hidden w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-[#062B49] border-b border-[rgba(212,175,55,.18)] py-4 px-4">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map(link => (
                <Link 
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg py-3 px-4 rounded ${
                    location.pathname === link.to 
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/join" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#16A34A] text-white px-6 py-4 rounded font-label-caps text-base text-center mt-2"
              >
                Join as Volunteer
              </Link>
            </nav>
          </div>
        </div>
      )}
      
      <div className="fixed top-16 md:top-20 w-full h-px z-40" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,.12) 15%, rgba(212,175,55,.95) 50%, rgba(212,175,55,.12) 85%, transparent 100%)'
      }} />
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-[#031B30] border-t border-[rgba(255,255,255,.08)] py-10 md:py-16 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <div className="text-[#D4AF37] font-bold text-lg md:text-xl mb-4 font-['Sora']">CITY BOY ARENA</div>
            <p className="text-[#94A3B8] text-sm tracking-wide mb-6 max-w-sm leading-relaxed">
              Nigeria's premier platform for nation-building, trust-anchored infrastructure, and digital civic engagement.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <div 
                  key={social.name} 
                  className="w-10 h-10 rounded-full bg-[#0A3B62] flex items-center justify-center text-[#94A3B8] hover:bg-[#D4AF37] hover:text-[#031B30] transition-all cursor-pointer text-xs font-bold"
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-xs text-white uppercase mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.platform.map((link) => (
                <Link key={link.name} to={link.href} className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors py-1">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-xs text-white uppercase mb-4">Resources</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <Link key={link.name} to={link.href} className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors py-1">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-xs text-white uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@cityboyarena.com" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors py-1">hello@cityboyarena.com</a>
              <a href="mailto:media@cityboyarena.com" className="text-[#94A3B8] hover:text-[#D4AF37] text-sm transition-colors py-1">media@cityboyarena.com</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,.08)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-xs text-center md:text-left">© 2026 City Boy Arena. National Infrastructure Command Centre.</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link to="/trust" className="text-[#94A3B8] hover:text-[#D4AF37] text-xs transition-colors">Privacy Protocol</Link>
            <Link to="/governance" className="text-[#94A3B8] hover:text-[#D4AF37] text-xs transition-colors">Terms of Service</Link>
            <Link to="/impact" className="text-[#94A3B8] hover:text-[#D4AF37] text-xs transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen flex flex-col bg-[#121414] overflow-x-hidden">
      <Navbar />
<main className="flex-1 pt-16 md:pt-20 pb-0" role="main">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}