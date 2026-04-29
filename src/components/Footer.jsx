import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'

const icons = {
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  twitter: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
  instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
  youtube: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
}

function SocialIcon({ name }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      {icons[name]}
    </svg>
  )
}

const footerLinks = {
  movement: [
    { name: 'About Us', href: '#' },
    { name: 'Leadership', href: '#' },
    { name: 'Vision & Mission', href: '#' },
    { name: 'Our Story', href: '#' },
  ],
  participate: [
    { name: 'Join the Movement', href: '/join' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Donate', href: '/donate' },
    { name: 'Become a Creator', href: '#' },
  ],
  resources: [
    { name: 'Transparency Portal', href: '/transparency' },
    { name: 'Project Nigeria', href: '/project-nigeria' },
    { name: 'Reports & Impact', href: '#' },
    { name: 'Press & Media', href: '#' },
  ],
  chapters: [
    { name: 'Lagos', href: '#' },
    { name: 'Abuja', href: '#' },
    { name: 'Port Harcourt', href: '#' },
    { name: 'International', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-graphite border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-5 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                <span className="font-display font-bold text-prussian-dark text-lg">CB</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                CITY BOY<span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-soft-ivory/70 text-sm mb-6 max-w-sm">
              Nigeria's most trusted civic engagement, transparency, and national mobilization infrastructure.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-prussian-dark transition-all">
                <SocialIcon name="facebook" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-prussian-dark transition-all">
                <SocialIcon name="twitter" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-prussian-dark transition-all">
                <SocialIcon name="instagram" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-prussian-dark transition-all">
                <SocialIcon name="youtube" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-prussian-dark transition-all">
                <SocialIcon name="linkedin" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Movement</h4>
            <ul className="space-y-3">
              {footerLinks.movement.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-soft-ivory/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Participate</h4>
            <ul className="space-y-3">
              {footerLinks.participate.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-soft-ivory/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-soft-ivory/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Chapters</h4>
            <ul className="space-y-3">
              {footerLinks.chapters.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-soft-ivory/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-soft-ivory/60">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Lagos, Nigeria
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              hello@cityboyarena.org
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +234 800 CITY BOY
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-soft-ivory/60">
            <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-soft-ivory/40">
          © 2026 City Boy Movement. All rights reserved.
        </div>
      </div>
    </footer>
  )
}