import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const footerLinks = {
  resources: [
    { name: 'Impact Report', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Security Ledger', href: '#' },
    { name: 'Contact Command', href: '#' },
  ],
  platform: [
    { name: 'National Hub', href: '#' },
    { name: 'Command Centre', href: '#' },
    { name: 'Volunteer Grid', href: '#' },
    { name: 'Analytics', href: '#' },
  ],
}

const socialLinks = [
  { name: 'share', icon: 'share' },
  { name: 'public', icon: 'public' },
  { name: 'mail', icon: 'mail' },
]

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1 pb-20 md:pb-0" role="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 pt-16 pb-8 bg-[#001F33] flex flex-col items-center text-center px-4" role="contentinfo">
        <div className="max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16 px-8">
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-white mb-4">City Boy Arena</div>
            <p className="font-body-md text-slate-400">
              The premier platform for nation-building, trust-anchored infrastructure, and digital civic engagement.
            </p>
          </div>
          
          <div>
            <h4 className="font-h3 text-body-md text-white mb-6 uppercase tracking-wider" id="footer-resources">Resources</h4>
            <ul className="space-y-4" role="list" aria-labelledby="footer-resources">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-h3 text-body-md text-white mb-6 uppercase tracking-wider" id="footer-platform">Platform</h4>
            <ul className="space-y-4" role="list" aria-labelledby="footer-platform">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a className="font-body-md text-slate-500 hover:text-secondary transition-colors" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-h3 text-body-md text-white mb-6 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <div 
                  key={social.name} 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined">{social.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full border-t border-white/5 pt-8">
          <p className="font-label-caps text-xs text-slate-500 tracking-wide">
            © 2024 City Boy Digital Arena. A Nation-Building Initiative.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Dock - Hidden on larger screens */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] flex justify-around items-center px-2 py-3 bg-[#003153]/95 backdrop-blur-lg rounded-t-3xl border-t border-secondary/30 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <Link className="flex flex-col items-center justify-center text-secondary bg-secondary/10 rounded-xl px-2 py-2 min-w-[60px] min-h-[52px] shadow-[0_0_15px_rgba(255,215,0,0.3)]" to="/">
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="text-[9px] font-bold uppercase mt-0.5">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-slate-400 px-2 py-2 min-w-[60px] min-h-[52px]" to="/project-nigeria">
          <span className="material-symbols-outlined text-[22px]">assignment</span>
          <span className="text-[9px] font-bold uppercase mt-0.5">Tasks</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-slate-400 px-2 py-2 min-w-[60px] min-h-[52px]" to="/join">
          <span className="material-symbols-outlined text-[22px]">military_tech</span>
          <span className="text-[9px] font-bold uppercase mt-0.5">Rewards</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-slate-400 px-2 py-2 min-w-[60px] min-h-[52px]" to="#">
          <span className="material-symbols-outlined text-[22px]">chat</span>
          <span className="text-[9px] font-bold uppercase mt-0.5">Chat</span>
        </Link>
      </nav>
    </div>
  )
}