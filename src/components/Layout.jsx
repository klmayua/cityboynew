export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  
  React.useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
            <span className="font-bold text-[#001B2E]">CB</span>
          </div>
          <span className="font-bold text-xl text-white hidden sm:block">ARENA</span>
        </a>
        
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/project-nigeria">Project Nigeria</NavLink>
          <NavLink href="/volunteer">Volunteer</NavLink>
          <NavLink href="/transparency">Transparency</NavLink>
        </div>
        
        <div className="flex items-center gap-3">
          <a href="/donate" className="btn btn-gold text-sm py-2 px-4 hidden sm:inline-flex">Donate</a>
          <a href="/join" className="btn btn-outline text-sm py-2 px-4 hidden sm:inline-flex">Join</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <div className="lg:hidden glass border-t border-white/10 p-4">
          <div className="flex flex-col gap-3">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/project-nigeria">Project Nigeria</MobileNavLink>
            <MobileNavLink href="/volunteer">Volunteer</MobileNavLink>
            <MobileNavLink href="/transparency">Transparency</MobileNavLink>
            <hr className="border-white/10 my-2" />
            <a href="/donate" className="btn btn-gold w-full">Donate</a>
            <a href="/join" className="btn btn-outline w-full">Join Arena</a>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors">
      {children}
    </a>
  )
}

function MobileNavLink({ href, children }) {
  return (
    <a href={href} className="text-lg text-white/80 hover:text-[#D4AF37] py-2 transition-colors">
      {children}
    </a>
  )
}

import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-white/5 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="font-bold text-[#001B2E]">CB</span>
              </div>
              <span className="font-bold text-xl text-white">ARENA</span>
            </div>
            <p className="text-white/60 text-sm">Nigeria's most trusted civic engagement infrastructure.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <FooterLink href="/project-nigeria">Project Nigeria</FooterLink>
            <FooterLink href="/transparency">Transparency</FooterLink>
            <FooterLink href="/volunteer">Volunteer</FooterLink>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Participate</h4>
            <FooterLink href="/join">Join Arena</FooterLink>
            <FooterLink href="/donate">Donate</FooterLink>
            <FooterLink href="#">Chapters</FooterLink>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <p className="text-white/60 text-sm"> Lagos, Nigeria</p>
            <p className="text-white/60 text-sm">hello@cityboyarena.org</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © 2026 City Boy Movement. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return <a href={href} className="block text-white/60 hover:text-[#D4AF37] py-1 text-sm transition-colors">{children}</a>
}

export { Layout, Navbar, Footer }