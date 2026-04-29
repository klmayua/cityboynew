import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Globe, MessageSquare, Sparkles } from 'lucide-react'
import { ArenaButton } from './ArenaButton'

export const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#003153]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-[1320px] mx-auto px-5 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center font-display font-bold text-[#001B2E]">CB</span>
            <span className="font-display font-bold text-xl text-white hidden sm:block">ARENA</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/project-nigeria" className="text-sm font-medium text-[#FAF8F2]/80 hover:text-[#D4AF37] transition-colors">Project Nigeria</Link>
            <Link to="/volunteer" className="text-sm font-medium text-[#FAF8F2]/80 hover:text-[#D4AF37] transition-colors">Volunteer App</Link>
            <Link to="/command-centre" className="text-sm font-medium text-[#FAF8F2]/80 hover:text-[#D4AF37] transition-colors">Command Centre</Link>
            <Link to="/chapter" className="text-sm font-medium text-[#FAF8F2]/80 hover:text-[#D4AF37] transition-colors">Chapters</Link>
            <Link to="/transparency" className="text-sm font-medium text-[#FAF8F2]/80 hover:text-[#D4AF37] transition-colors">Transparency</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-lg bg-white/5 text-[#FAF8F2] hover:bg-white/10 transition-colors">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </button>
            <ArenaButton variant="gold" size="small">
              <Link to="/donate">Donate</Link>
            </ArenaButton>
            <ArenaButton variant="primary" size="small" className="hidden md:inline-flex">
              <Link to="/join">Join Arena</Link>
            </ArenaButton>
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-[#001B2E] lg:hidden">
          <nav className="flex flex-col p-6 gap-4">
            <Link to="/" className="text-lg font-medium text-white py-3 border-b border-white/10">Home</Link>
            <Link to="/project-nigeria" className="text-lg font-medium text-[#FAF8F2]/80 py-3 border-b border-white/10">Project Nigeria</Link>
            <Link to="/volunteer" className="text-lg font-medium text-[#FAF8F2]/80 py-3 border-b border-white/10">Volunteer App</Link>
            <Link to="/command-centre" className="text-lg font-medium text-[#FAF8F2]/80 py-3 border-b border-white/10">Command Centre</Link>
            <Link to="/chapter" className="text-lg font-medium text-[#FAF8F2]/80 py-3 border-b border-white/10">Chapters</Link>
            <Link to="/transparency" className="text-lg font-medium text-[#FAF8F2]/80 py-3 border-b border-white/10">Transparency Logs</Link>
            <div className="flex flex-col gap-3 mt-4">
              <ArenaButton variant="gold" fullWidth><Link to="/donate">Donate</Link></ArenaButton>
              <ArenaButton variant="primary" fullWidth><Link to="/join">Join Arena</Link></ArenaButton>
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>

      <footer className="bg-[#111827] border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-5 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center font-display font-bold text-[#001B2E]">CB</span>
                <span className="font-display font-bold text-xl text-white">ARENA</span>
              </div>
              <p className="text-[#FAF8F2]/60 text-sm">Nigeria's Most Trusted Civic Engagement Infrastructure</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <div className="flex flex-col gap-2">
                <Link to="/project-nigeria" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37]">Project Nigeria</Link>
                <Link to="/command-centre" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37]">Intelligence</Link>
                <Link to="/transparency" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37]">Accountability</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Participate</h4>
              <div className="flex flex-col gap-2">
                <Link to="/volunteer" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37]">Volunteer Corps</Link>
                <Link to="/donate" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37]">Support Movement</Link>
                <Link to="/chapter" className="text-sm text-[#FAF8F2]/60 hover:text-[#D4AF37]">Local Chapters</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FAF8F2] hover:bg-[#D4AF37] hover:text-[#001B2E] transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FAF8F2] hover:bg-[#D4AF37] hover:text-[#001B2E] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-sm text-[#FAF8F2]/40">
            © 2026 City Boy Movement. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}