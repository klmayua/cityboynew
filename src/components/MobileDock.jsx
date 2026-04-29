import { Link, useLocation } from 'react-router-dom'
import { Home, Heart, FolderKanban, Award, MessageCircle, User } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Heart, label: 'Impact', href: '#impact' },
  { icon: FolderKanban, label: 'Projects', href: '/projects' },
  { icon: Award, label: 'Arena', href: '/arena' },
  { icon: MessageCircle, label: 'Messages', href: '/messages' },
  { icon: User, label: 'Profile', href: '/profile' },
]

export default function MobileDock() {
  const location = useLocation()

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass pb-safe">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                isActive ? 'text-gold' : 'text-soft-ivory/60 hover:text-soft-ivory'
              }`}
            >
              <item.icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}