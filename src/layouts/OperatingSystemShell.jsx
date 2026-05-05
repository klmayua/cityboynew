import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSystemStore } from '../store/systemStore'
import { useIntelStore } from '../store/intelStore'
import { useCapitalStore } from '../store/capitalStore'
import { useMissionStore } from '../store/missionStore'
import { usePeopleStore } from '../store/peopleStore'
import { seedRuntime } from '../lib/seedRuntime'
import { deriveKPIs } from '../lib/deriveKPIs'
import {
  Cpu, Shield, Users, Heart, Wallet, Building2, Eye, Lock, MessageSquare, CreditCard,
  Home, Map, Target, TrendingUp, Bell, Search, Menu, X, LogOut, Settings, ChevronDown, Bot, Globe
} from 'lucide-react'

const roleConfig = {
  leadership: { label: 'Leadership', icon: Cpu, color: 'text-[#D4AF37]', path: '/app/leadership' },
  executive: { label: 'Executive', icon: Shield, color: 'text-blue-400', path: '/app/executive' },
  command: { label: 'Command', icon: Shield, color: 'text-cyan-400', path: '/app/command' },
  intelligence: { label: 'Intelligence', icon: Eye, color: 'text-cyan-400', path: '/app/intelligence' },
  chapter: { label: 'Chapter', icon: Users, color: 'text-emerald-400', path: '/app/chapter' },
  volunteer: { label: 'Volunteer', icon: Heart, color: 'text-rose-400', path: '/app/volunteer' },
  donor: { label: 'Donor', icon: Wallet, color: 'text-green-400', path: '/app/donor' },
  partner: { label: 'Partner', icon: Building2, color: 'text-purple-400', path: '/app/partner' },
  admin: { label: 'Admin', icon: Lock, color: 'text-red-400', path: '/app/admin' },
}

const navItems = [
  { section: 'Overview', items: [
    { label: 'Dashboard', path: 'overview', icon: Home },
    { label: 'KPIs', path: 'kpis', icon: Target },
  ]},
  { section: 'Operations', items: [
    { label: 'Missions', path: 'missions', icon: Map },
    { label: 'Capital', path: 'capital', icon: CreditCard },
    { label: 'People', path: 'people', icon: Users },
    { label: 'Intelligence', path: 'intel', icon: Eye },
  ]},
  { section: 'Reports', items: [
    { label: 'Alerts', path: 'alerts', icon: Bell },
    { label: 'Sentiment', path: 'sentiment', icon: TrendingUp },
  ]},
]

function NotificationBell() {
  const notifications = useSystemStore(s => s.notifications) || []
  const alerts = useIntelStore(s => s.alerts) || []
  const unreadNotifs = notifications.filter(n => !n.read).length
  const unreadAlerts = alerts.filter(a => !a.read).length
  const total = unreadNotifs + unreadAlerts

  return (
    <div className="relative">
      <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
      {total > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
          {total > 9 ? '9+' : total}
        </span>
      )}
    </div>
  )
}

function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <div className="relative">
      <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search... (Ctrl+K)"
        className="w-64 pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50"
      />
    </div>
  )
}

function WorkspaceSwitcher({ currentRole }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const config = roleConfig[currentRole]
  const Icon = config?.icon || Cpu

  const switchRole = (role) => {
    const rc = roleConfig[role]
    if (rc?.path) {
      navigate(rc.path)
      setOpen(false)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10"
      >
        <Icon className={`w-4 h-4 ${config?.color || 'text-gray-400'}`} />
        <span className="text-white text-sm">{config?.label || 'Workspace'}</span>
        <ChevronDown className="w-3 h-3 text-gray-400" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-48 bg-[#0A1421] border border-white/10 rounded-lg z-50 overflow-hidden">
            {Object.entries(roleConfig).map(([role, cfg]) => {
              const RoleIcon = cfg.icon
              return (
                <button
                  key={role}
                  onClick={() => switchRole(role)}
                  className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-white/5 ${role === currentRole ? 'bg-white/5' : ''}`}
                >
                  <RoleIcon className={`w-4 h-4 ${cfg.color}`} />
                  <span className="text-white text-sm">{cfg.label}</span>
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

function Sidebar({ currentRole }) {
  const location = useLocation()
  const basePath = roleConfig[currentRole]?.path || '/app'

  const isActive = (path) => location.pathname === `${basePath}/${path}`

  return (
    <div className="w-56 bg-[#07111A] border-r border-white/5 min-h-screen hidden lg:block">
      <div className="p-4 border-b border-white/5">
        <Link to="/platform" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center">
            <Cpu className="w-5 h-5 text-black" />
          </div>
          <span className="text-white font-semibold">CityBoy OS</span>
        </Link>
        <Link to="/platform" className="flex items-center gap-2 mt-3 text-xs text-gray-500 hover:text-white transition-colors">
          <Globe className="w-3 h-3" />
          Return to Platform
        </Link>
      </div>

      <div className="p-4">
        {navItems.map(section => (
          <div key={section.section} className="mb-6">
            <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">{section.section}</h3>
            <div className="space-y-1">
              {section.items.map(item => {
                const ItemIcon = item.icon
                const path = `${basePath}/${item.path}`
                const active = location.pathname === path
                return (
                  <Link
                    key={item.path}
                    to={path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <ItemIcon className="w-4 h-4" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TopBar({ currentRole }) {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/platform')
  }

  return (
    <div className="h-14 bg-[#07111A] border-b border-white/5 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Sidebar currentRole={currentRole} />
        <button className="lg:hidden">
          <Menu className="w-5 h-5 text-gray-400" />
        </button>
        <SearchBar />
      </div>

      <div className="flex items-center gap-4">
        <NotificationBell />
        <button className="p-2 hover:bg-white/5 rounded-lg">
          <Bot className="w-5 h-5 text-gray-400 hover:text-[#D4AF37]" />
        </button>
        <WorkspaceSwitcher currentRole={currentRole} />
        <div className="flex items-center gap-2 pl-4 border-l border-white/10">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-semibold text-sm">
            {user?.name?.[0] || 'U'}
          </div>
          <button onClick={handleLogout} className="p-2 hover:bg-white/5 rounded-lg" title="Logout">
            <LogOut className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function OperatingSystemShell({ children, role }) {
  const { user, isAuthenticated } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()
  const currentRole = role || user?.role || 'volunteer'

  useEffect(() => {
    seedRuntime()
  }, [])

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/platform') {
      navigate('/platform')
    }
  }, [isAuthenticated, location.pathname, navigate])

  const kpis = deriveKPIs()

  return (
    <div className="min-h-screen bg-[#0A1421]">
      <TopBar currentRole={currentRole} />
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}