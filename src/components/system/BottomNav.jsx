import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Grid3X3, Heart, Users, MoreHorizontal, X, ArrowRight, Shield, FileText, Mail, Users as LeadershipIcon, Globe, Target } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Arena', icon: Home },
  { path: '/initiatives', label: 'Initiatives', icon: Grid3X3 },
  { path: '/join', label: 'Volunteer', icon: Heart },
  { path: '/community', label: 'Community', icon: Users },
  { path: 'more', label: 'More', icon: MoreHorizontal },
]

const moreMenuItems = [
  { path: '/about', label: 'About' },
  { path: '/leadership', label: 'Leadership' },
  { path: '/media', label: 'Media' },
  { path: '/trust', label: 'Trust & Safety' },
  { path: '/governance', label: 'Governance' },
  { path: '/projects', label: 'Projects' },
  { path: '/stories', label: 'Stories' },
  { path: '/partners', label: 'Partners' },
]

export default function BottomNav() {
  const location = useLocation()
  const [showMore, setShowMore] = useState(false)

  const isActive = (path) => {
    if (path === 'more') return showMore
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <>
      {/* Bottom Navigation - Fixed */}
      <nav className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden" style={{ height: '78px', background: 'rgba(3,27,48,0.98)', borderTop: '1px solid rgba(212,175,55,0.15)', boxShadow: '0 -4px 20px rgba(0,0,0,0.15)' }}>
        <div className="flex items-center justify-between h-full px-2 pb-safe">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            
            if (item.path === 'more') {
              return (
                <button
                  key={item.path}
                  onClick={() => setShowMore(!showMore)}
                  className="flex flex-col items-center justify-center w-[20%] min-w-[64px] h-full pt-2"
                >
                  <div className={`relative flex flex-col items-center ${active ? 'text-[#D4AF37]' : 'text-white/60'}`}>
                    {active && <div className="absolute -top-0 w-6 h-[2px] bg-[#D4AF37]"></div>}
                    <Icon className="w-[22px] h-[22px]" />
                    <span className="text-[11px] font-semibold mt-1">{item.label}</span>
                  </div>
                </button>
              )
            }
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center justify-center w-[20%] min-w-[64px] h-full pt-2"
              >
                <div className={`relative flex flex-col items-center ${active ? 'text-[#D4AF37]' : 'text-white/60'}`}>
                  {active && <div className="absolute -top-0 w-6 h-[2px] bg-[#D4AF37]"></div>}
                  <Icon className="w-[22px] h-[22px]" />
                  <span className="text-[11px] font-semibold mt-1">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* More Panel Sheet */}
      {showMore && (
        <div className="fixed inset-0 z-[10000] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60" 
            onClick={() => setShowMore(false)}
          ></div>
          
          {/* Sheet */}
          <div className="absolute bottom-0 left-0 right-0 animate-slide-up" style={{ background: 'linear-gradient(180deg, #031B30 0%, #07141f 100%)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', paddingBottom: 'env(safe-area-inset-bottom, 24px)' }}>
            {/* Drag Handle */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-10 h-1 rounded-full bg-white/20"></div>
            </div>
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4" style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
              <h2 className="text-white text-[20px] font-bold">Menu</h2>
              <button onClick={() => setShowMore(false)} className="p-2">
                <X className="w-5 h-5 text-white/60" />
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="px-6 py-4 space-y-2 max-h-[50vh] overflow-y-auto">
              {moreMenuItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setShowMore(false)}
                  className="flex items-center justify-between p-4 rounded-[16px] hover:bg-white/5 transition-colors"
                  style={{border: '1px solid rgba(255,255,255,0.06)'}}
                >
                  <span className="text-white text-[17px] font-medium">{item.label}</span>
                  <ArrowRight className="w-5 h-5 text-white/40" />
                </Link>
              ))}
            </div>
            
            {/* CTA */}
            <div className="px-6 pt-4 pb-4">
              <Link 
                to="/join" 
                onClick={() => setShowMore(false)}
                className="flex items-center justify-center w-full h-[52px] rounded-[14px] font-bold text-[16px]"
                style={{ background: '#18A34A', color: 'white' }}
              >
                Join The Movement
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer for bottom nav */}
      <div className="h-[78px] lg:hidden"></div>
    </>
  )
}