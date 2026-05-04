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
  Home, Map, TrendingUp, Bell, Search, Menu, X, LogOut, Settings, ChevronDown, Bot,
  Activity, AlertTriangle, Target, Zap, FileText, Users as UsersIcon, Globe as GlobeIcon,
  DollarSign, BarChart3, Radar, MessageCircle, Plus, UserPlus
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

const menuConfig = {
  leadership: [
    { section: 'CORE', items: [
      { label: 'Dashboard', path: '/app/leadership', icon: Home },
      { label: 'Missions', path: '/app/leadership/missions', icon: Map },
      { label: 'Operations', path: '/app/leadership/operations', icon: Activity },
      { label: 'Analytics', path: '/app/leadership/analytics', icon: BarChart3 },
    ]},
    { section: 'NETWORK', items: [
      { label: 'People', path: '/app/leadership/people', icon: Users },
      { label: 'Chapters', path: '/app/leadership/chapters', icon: GlobeIcon },
      { label: 'Partners', path: '/app/leadership/partners', icon: Building2 },
      { label: 'Community', path: '/app/leadership/community', icon: UsersIcon },
    ]},
    { section: 'CAPITAL', items: [
      { label: 'Treasury', path: '/app/leadership/treasury', icon: DollarSign },
      { label: 'Funding', path: '/app/leadership/funding', icon: CreditCard },
      { label: 'Reports', path: '/app/leadership/reports', icon: FileText },
    ]},
    { section: 'INTELLIGENCE', items: [
      { label: 'Alerts', path: '/app/leadership/alerts', icon: AlertTriangle },
      { label: 'Monitoring', path: '/app/leadership/monitoring', icon: Radar },
      { label: 'Sentiment', path: '/app/leadership/sentiment', icon: TrendingUp },
    ]},
    { section: 'SYSTEM', items: [
      { label: 'Documents', path: '/app/leadership/documents', icon: FileText },
      { label: 'Messages', path: '/app/leadership/messages', icon: MessageCircle },
      { label: 'Settings', path: '/app/leadership/settings', icon: Settings },
    ]},
  ],
  executive: [
    { section: 'CORE', items: [
      { label: 'Dashboard', path: '/app/executive', icon: Home },
      { label: 'Priorities', path: '/app/executive/priorities', icon: Target },
      { label: 'Approvals', path: '/app/executive/approvals', icon: CheckCircle },
      { label: 'Reports', path: '/app/executive/reports', icon: FileText },
    ]},
    { section: 'OPERATIONS', items: [
      { label: 'Missions', path: '/app/executive/missions', icon: Map },
      { label: 'Budgets', path: '/app/executive/budgets', icon: DollarSign },
      { label: 'Compliance', path: '/app/executive/compliance', icon: Shield },
    ]},
    { section: 'SYSTEM', items: [
      { label: 'Messages', path: '/app/executive/messages', icon: MessageCircle },
      { label: 'Settings', path: '/app/executive/settings', icon: Settings },
    ]},
  ],
  chapter: [
    { section: 'CORE', items: [
      { label: 'Dashboard', path: '/app/chapter', icon: Home },
      { label: 'Missions', path: '/app/chapter/missions', icon: Map },
      { label: 'Events', path: '/app/chapter/events', icon: Activity },
      { label: 'Reports', path: '/app/chapter/reports', icon: FileText },
    ]},
    { section: 'TEAM', items: [
      { label: 'Members', path: '/app/chapter/members', icon: Users },
      { label: 'Volunteers', path: '/app/chapter/volunteers', icon: Heart },
      { label: 'Recruit', path: '/app/chapter/recruit', icon: UserPlus },
    ]},
    { section: 'CAPITAL', items: [
      { label: 'Treasury', path: '/app/chapter/treasury', icon: DollarSign },
      { label: 'Funding', path: '/app/chapter/funding', icon: CreditCard },
    ]},
    { section: 'SYSTEM', items: [
      { label: 'Inbox', path: '/app/chapter/inbox', icon: MessageCircle },
      { label: 'Settings', path: '/app/chapter/settings', icon: Settings },
    ]},
  ],
  volunteer: [
    { section: 'MISSIONS', items: [
      { label: 'Dashboard', path: '/app/volunteer', icon: Home },
      { label: 'Tasks', path: '/app/volunteer/tasks', icon: Target },
      { label: 'Opportunities', path: '/app/volunteer/opportunities', icon: Map },
    ]},
    { section: 'PROGRESS', items: [
      { label: 'Leaderboard', path: '/app/volunteer/leaderboard', icon: TrendingUp },
      { label: 'Badges', path: '/app/volunteer/badges', icon: Zap },
      { label: 'Academy', path: '/app/volunteer/academy', icon: BookOpen },
    ]},
    { section: 'REWARDS', items: [
      { label: 'Wallet', path: '/app/volunteer/wallet', icon: Wallet },
      { label: 'Rewards', path: '/app/volunteer/rewards', icon: Gift },
    ]},
    { section: 'NETWORK', items: [
      { label: 'Community', path: '/app/volunteer/community', icon: Users },
      { label: 'Profile', path: '/app/volunteer/profile', icon: User },
    ]},
  ],
  donor: [
    { section: 'CORE', items: [
      { label: 'Dashboard', path: '/app/donor', icon: Home },
      { label: 'Portfolio', path: '/app/donor/portfolio', icon: Wallet },
      { label: 'Missions', path: '/app/donor/missions', icon: Map },
    ]},
    { section: 'IMPACT', items: [
      { label: 'Allocations', path: '/app/donor/allocations', icon: CreditCard },
      { label: 'Reports', path: '/app/donor/reports', icon: FileText },
      { label: 'Statements', path: '/app/donor/statements', icon: FileText },
    ]},
    { section: 'ENGAGE', items: [
      { label: 'Concierge', path: '/app/donor/concierge', icon: MessageCircle },
      { label: 'Settings', path: '/app/donor/settings', icon: Settings },
    ]},
  ],
  partner: [
    { section: 'CORE', items: [
      { label: 'Dashboard', path: '/app/partner', icon: Home },
      { label: 'Sponsorships', path: '/app/partner/sponsorships', icon: Building2 },
      { label: 'Campaigns', path: '/app/partner/campaigns', icon: Activity },
    ]},
    { section: 'IMPACT', items: [
      { label: 'ROI', path: '/app/partner/roi', icon: TrendingUp },
      { label: 'Reports', path: '/app/partner/reports', icon: FileText },
    ]},
    { section: 'SYSTEM', items: [
      { label: 'Messages', path: '/app/partner/messages', icon: MessageCircle },
      { label: 'Settings', path: '/app/partner/settings', icon: Settings },
    ]},
  ],
  intelligence: [
    { section: 'INTEL', items: [
      { label: 'Dashboard', path: '/app/intelligence', icon: Home },
      { label: 'OSINT', path: '/app/intelligence/osint', icon: Eye },
      { label: 'Sentiment', path: '/app/intelligence/sentiment', icon: TrendingUp },
      { label: 'Alerts', path: '/app/intelligence/alerts', icon: AlertTriangle },
    ]},
    { section: 'ANALYSIS', items: [
      { label: 'Trends', path: '/app/intelligence/trends', icon: BarChart3 },
      { label: 'Threats', path: '/app/intelligence/threats', icon: Shield },
      { label: 'Narratives', path: '/app/intelligence/narratives', icon: MessageCircle },
    ]},
    { section: 'REPORTS', items: [
      { label: 'Briefs', path: '/app/intelligence/briefs', icon: FileText },
      { label: 'Escalations', path: '/app/intelligence/escalations', icon: Zap },
    ]},
  ],
  admin: [
    { section: 'CONTROL', items: [
      { label: 'Dashboard', path: '/app/admin', icon: Home },
      { label: 'Users', path: '/app/admin/users', icon: Users },
      { label: 'Roles', path: '/app/admin/roles', icon: Lock },
      { label: 'Audit', path: '/app/admin/audit', icon: FileText },
    ]},
    { section: 'SYSTEM', items: [
      { label: 'Health', path: '/app/admin/health', icon: Activity },
      { label: 'Runtime', path: '/app/admin/runtime', icon: Cpu },
      { label: 'Seed', path: '/app/admin/seed', icon: RefreshCw },
      { label: 'Config', path: '/app/admin/config', icon: Settings },
    ]},
    { section: 'DATA', items: [
      { label: 'Exports', path: '/app/admin/exports', icon: Download },
      { label: 'Logs', path: '/app/admin/logs', icon: FileText },
    ]},
  ],
}

function CheckCircle({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
}

function BookOpen({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
}

function Gift({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h5a2.5 2.5 0 0 0 0-5C16.5 2 16 7 16 7z"/></svg>
}

function User({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
}

function Download({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
}

function RefreshCw({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5h5"/></svg>
}

function Globe({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
}

function LeftSidebar({ currentRole }) {
  const location = useLocation()
  const menus = menuConfig[currentRole] || menuConfig.volunteer
  const config = roleConfig[currentRole] || roleConfig.volunteer
  const RoleIcon = config.icon

  return (
    <div className="w-[280px] bg-[#07111A] border-r border-white/5 min-h-screen flex flex-col">
      <div className="p-5 border-b border-white/5">
        <Link to="/platform" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center">
            <Cpu className="w-6 h-6 text-black" />
          </div>
          <div>
            <div className="text-white font-semibold">CityBoy OS</div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {config.label} • LIVE
            </div>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {menus.map((section) => (
          <div key={section.section} className="mb-6">
            <h3 className="text-[#D4AF37] text-xs uppercase tracking-wider mb-3 px-3">{section.section}</h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const ItemIcon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      isActive
                        ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
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

      <div className="p-4 border-t border-white/5">
        <div className="p-3 rounded-lg bg-white/5">
          <div className="text-xs text-gray-500 mb-2">Quick Actions</div>
          <button className="w-full flex items-center justify-center gap-2 py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg transition-all">
            <Plus className="w-4 h-4" />
            New {currentRole === 'volunteer' ? 'Task' : currentRole === 'chapter' ? 'Event' : 'Item'}
          </button>
        </div>
      </div>
    </div>
  )
}

function NotificationBell() {
  const notifications = useSystemStore(s => s.notifications) || []
  const alerts = useIntelStore(s => s.alerts) || []
  const unreadNotifs = notifications.filter(n => !n.read).length
  const unreadAlerts = alerts.filter(a => !a.read).length
  const total = unreadNotifs + unreadAlerts

  return (
    <button className="relative p-2 hover:bg-white/5 rounded-lg transition-all">
      <Bell className="w-5 h-5 text-gray-400" />
      {total > 0 && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
          {total > 9 ? '9+' : total}
        </span>
      )}
    </button>
  )
}

function GlobalSearch() {
  const [query, setQuery] = useState('')

  return (
    <div className="relative">
      <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search missions, chapters, volunteers..."
        className="cursor-text w-80 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50"
      />
    </div>
  )
}

function WorkspaceSwitcher({ currentRole }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const config = roleConfig[currentRole]

  const switchRole = (role) => {
    const rc = roleConfig[role]
    if (rc?.path) {
      navigate(rc.path)
      setOpen(false)
    }
  }

  if (!config) return null

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10"
      >
        <config.icon className={`w-4 h-4 ${config.color}`} />
        <span className="text-white text-sm">{config.label}</span>
        <ChevronDown className="w-3 h-3 text-gray-400" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-56 bg-[#0A1421] border border-white/10 rounded-lg z-50 overflow-hidden">
            {Object.entries(roleConfig).map(([role, cfg]) => {
              const RoleIcon = cfg.icon
              return (
                <button
                  key={role}
                  onClick={() => switchRole(role)}
                  className={`cursor-pointer w-full px-4 py-2.5 text-left flex items-center gap-2 hover:bg-white/5 ${role === currentRole ? 'bg-white/5' : ''}`}
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

function TopBar({ currentRole, title, sidebarOpen, setSidebarOpen }) {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const config = roleConfig[currentRole]

  const handleLogout = () => {
    logout()
    navigate('/platform')
  }

  const roleTabs = {
    leadership: [
      { label: 'Dashboard', path: '/app/leadership' },
      { label: 'Treasury', path: '/app/leadership/treasury' },
      { label: 'Missions', path: '/app/leadership/missions' },
      { label: 'Intel', path: '/app/leadership/alerts' },
      { label: 'Volunteers', path: '/app/leadership/people' },
      { label: 'Reports', path: '/app/leadership/reports' },
      { label: 'War Room', path: '/app/leadership/operations' },
    ],
    executive: [
      { label: 'Operations', path: '/app/executive' },
      { label: 'Funding', path: '/app/executive/funding' },
      { label: 'Chapters', path: '/app/chapter' },
      { label: 'Calendar', path: '/app/command' },
      { label: 'Procurement', path: '/app/executive/approvals' },
      { label: 'Compliance', path: '/app/executive/compliance' },
    ],
    volunteer: [
      { label: 'My Missions', path: '/app/volunteer' },
      { label: 'Wallet', path: '/app/volunteer/wallet' },
      { label: 'Rewards', path: '/app/volunteer/rewards' },
      { label: 'Training', path: '/app/volunteer/training' },
      { label: 'Community', path: '/app/volunteer/community' },
    ],
    donor: [
      { label: 'Portfolio', path: '/app/donor' },
      { label: 'Impact', path: '/app/donor/projects' },
      { label: 'Reports', path: '/app/donor/reports' },
      { label: 'Governance', path: '/app/donor/statements' },
    ],
    partner: [
      { label: 'Campaigns', path: '/app/partner' },
      { label: 'Sponsorship', path: '/app/partner/sponsorships' },
      { label: 'Reach', path: '/app/partner/campaigns' },
      { label: 'Analytics', path: '/app/partner/roi' },
    ],
    chapter: [
      { label: 'Dashboard', path: '/app/chapter' },
      { label: 'Members', path: '/app/chapter/members' },
      { label: 'Volunteers', path: '/app/chapter/volunteers' },
      { label: 'Projects', path: '/app/chapter/projects' },
      { label: 'Events', path: '/app/chapter/events' },
      { label: 'Finance', path: '/app/chapter/finance' },
    ],
    intelligence: [
      { label: 'Dashboard', path: '/app/intelligence' },
      { label: 'OSINT', path: '/app/intelligence/osint' },
      { label: 'Sentiment', path: '/app/intelligence/sentiment' },
      { label: 'Alerts', path: '/app/intelligence/alerts' },
      { label: 'Briefs', path: '/app/intelligence/briefs' },
    ],
    admin: [
      { label: 'Dashboard', path: '/app/admin' },
      { label: 'Users', path: '/app/admin/users' },
      { label: 'Roles', path: '/app/admin/roles' },
      { label: 'Audit', path: '/app/admin/audit' },
      { label: 'Runtime', path: '/app/admin/runtime' },
    ],
  }

  const tabs = roleTabs[currentRole] || roleTabs.volunteer

  return (
    <div className="flex flex-col w-full">
      <div className="h-16 bg-[#07111A] border-b border-white/5 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="cursor-pointer p-2 hover:bg-white/5 rounded-lg">
            <Menu className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <GlobalSearch />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 text-xs">System Live</span>
          </div>
          
          <NotificationBell />
          
          <WorkspaceSwitcher currentRole={currentRole} />
          
          <div className="flex items-center gap-2 pl-3 border-l border-white/10">
            <div className="w-9 h-9 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-semibold">
              {user?.name?.[0] || 'U'}
            </div>
            <button onClick={handleLogout} className="cursor-pointer p-2 hover:bg-white/5 rounded-lg" title="Logout">
              <LogOut className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-12 bg-[#0D1821] border-b border-white/5 flex items-center px-4 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className="cursor-pointer px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function CityBoyOSShell({ children, role, title }) {
  const { user, isAuthenticated } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()
  const currentRole = role || user?.role || 'volunteer'
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/platform') {
      navigate('/platform')
    }
  }, [isAuthenticated, location.pathname, navigate])

  const kpis = deriveKPIs()

  return (
    <div className="min-h-screen bg-[#0A1421] flex">
      {sidebarOpen && <LeftSidebar currentRole={currentRole} />}
      <div className="flex-1 flex flex-col">
        <TopBar currentRole={currentRole} title={title} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}