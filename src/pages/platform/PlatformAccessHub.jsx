import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { useSystemStore } from '../../store/systemStore'
import { useIntelStore } from '../../store/intelStore'
import { useCapitalStore } from '../../store/capitalStore'
import { useMissionStore } from '../../store/missionStore'
import { usePeopleStore } from '../../store/peopleStore'
import { Cpu, Shield, Users, Heart, Wallet as WalletIcon, Building2, Eye, Lock, Zap, Activity, TrendingUp, Bell } from 'lucide-react'

const roles = [
  { id: 'leadership', label: 'Leadership', icon: Cpu, color: 'text-[#D4AF37]', desc: 'National Command' },
  { id: 'executive', label: 'Executive', icon: Shield, color: 'text-blue-400', desc: 'Strategic Ops' },
  { id: 'chapter', label: 'Chapter', icon: Users, color: 'text-emerald-400', desc: 'Local Lead' },
  { id: 'volunteer', label: 'Volunteer', icon: Heart, color: 'text-rose-400', desc: 'Field Force' },
  { id: 'donor', label: 'Donor', icon: WalletIcon, color: 'text-green-400', desc: 'Funders' },
  { id: 'partner', label: 'Partner', icon: Building2, color: 'text-purple-400', desc: 'Allies' },
  { id: 'intelligence', label: 'Intelligence', icon: Eye, color: 'text-cyan-400', desc: 'Analytics' },
  { id: 'admin', label: 'Admin', icon: Lock, color: 'text-red-400', desc: 'System' },
]

const demoUsers = [
  { email: 'leadership@cityboy.org', role: 'leadership', name: 'Tunde Adebayo' },
  { email: 'executive@cityboy.org', role: 'executive', name: 'Dr. Amara Ohu' },
  { email: 'chapter@cityboy.org', role: 'chapter', name: 'Emeka Okonkwo' },
  { email: 'volunteer@cityboy.org', role: 'volunteer', name: 'Faith Johnson' },
  { email: 'donor@cityboy.org', role: 'donor', name: 'Alhaji Ibrahim' },
  { email: 'partner@cityboy.org', role: 'partner', name: 'Shell Petroleum' },
  { email: 'intelligence@cityboy.org', role: 'intelligence', name: 'Sara Ahmed' },
  { email: 'admin@cityboy.org', role: 'admin', name: 'Admin User' },
]

function PlatformHealthCard() {
  const alerts = useIntelStore(s => s.alerts)
  const treasury = useCapitalStore(s => s.treasury)
  const missions = useMissionStore(s => s.missions)
  const volunteers = usePeopleStore(s => s.volunteers)

  const activeAlerts = alerts?.filter(a => !a.read && a.type === 'critical').length || 0
  const activeMissions = missions?.filter(m => m.status === 'active').length || 0
  const activeVolunteers = volunteers?.filter(v => v.status === 'active').length || 0

  return (
    <div className="bg-[#0A1520]/80 backdrop-blur-sm rounded-xl p-4 border border-[#D4AF37]/20 shadow-lg shadow-black/10">
      <h3 className="text-[#D4AF37] font-semibold mb-3 flex items-center gap-2 text-sm">
        <Zap className="w-4 h-4" />
        Platform Health
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <div className="text-center p-2 rounded-lg bg-white/[0.04] border border-white/5">
          <div className="text-lg font-bold text-emerald-400">{activeMissions}</div>
          <div className="text-xs text-gray-500">Active Missions</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white/[0.04] border border-white/5">
          <div className="text-lg font-bold text-blue-400">{activeVolunteers}</div>
          <div className="text-xs text-gray-500">Active Volunteers</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white/[0.04] border border-white/5">
          <div className="text-lg font-bold text-[#D4AF37]">{treasury?.total || '₦0'}</div>
          <div className="text-xs text-gray-500">Treasury</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white/[0.04] border border-white/5">
          <div className={`text-lg font-bold ${activeAlerts > 0 ? 'text-red-400' : 'text-emerald-400'}`}>{activeAlerts}</div>
          <div className="text-xs text-gray-500">Critical Alerts</div>
        </div>
      </div>
    </div>
  )
}

function RecentActivityStrip() {
  const activity = useSystemStore(s => s.activityFeed) || []

  if (activity.length === 0) return null

  const recent = activity.slice(0, 5)

  return (
    <div className="bg-[#0A1520]/80 backdrop-blur-sm rounded-xl p-4 border border-[#D4AF37]/20 shadow-lg shadow-black/10">
      <h3 className="text-[#D4AF37] font-semibold mb-3 flex items-center gap-2 text-sm">
        <Activity className="w-4 h-4" />
        Recent Activity
      </h3>
      <div className="space-y-2">
        {recent.map(item => (
          <div key={item.id} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 capitalize">{item.action?.replace(/_/g, ' ')}</span>
              <span className="text-white">{item.actor}</span>
            </div>
            <span className="text-gray-500 text-xs">{item.amount || '-'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PlatformAccessHub() {
  const navigate = useNavigate()
  const { demoLogin } = useAuthStore()
  const activity = useSystemStore(s => s.activityFeed) || []

  const handleDemoLogin = (email, role) => {
    const success = demoLogin(email)
    if (success) {
      navigate(`/app/${role}`)
    }
  }

  const handleRoleSelect = (roleId) => {
    const user = demoUsers.find(u => u.role === roleId)
    if (user) {
      handleDemoLogin(user.email, user.role)
    }
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #07111A 0%, #0D2234 100%)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-7">
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-medium">National Civic Execution Infrastructure</span>
              </div>
              <h1 className="font-h1 text-xl md:text-2xl text-white mb-1 tracking-tight font-bold">
                <span className="text-[#D4AF37]">CITYBOY</span> OS
              </h1>
              <p className="text-sm text-gray-400 mb-2.5">National civic operating system</p>
              <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                <span>Command</span><span>•</span><span>Capital</span><span>•</span><span>Execution</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <button onClick={() => navigate('/app/leadership')} className="cursor-pointer px-5 py-2.5 bg-[#D4AF37] hover:bg-[#B8962E] text-black font-semibold rounded-lg transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#D4AF37]/20">
                  ENTER COMMAND DEMO
                </button>
                <button onClick={() => navigate('/impact')} className="cursor-pointer px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium rounded-lg transition-all hover:bg-white/10">
                  VIEW IMPACT MODEL
                </button>
              </div>

              <div className="h-14 rounded-[10px] bg-[#0A1520]/60 px-4 py-0 border border-[#D4AF37]/18 flex items-center">
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest shrink-0 w-32">FEDERAL STATUS</span>
                <div className="w-px h-5 bg-white/10"></div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-emerald-400">ACTIVE</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-white">36 CHAPTERS ONLINE</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-emerald-400">128 MISSIONS LIVE</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-[#D4AF37]">TREASURY ROUTING CLEAR</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-[18px]">
              <div className="bg-[#0D1A25] rounded-xl p-4 border border-[#D4AF37]/25">
                <h3 className="text-[#D4AF37] font-semibold mb-3 flex items-center gap-2 text-sm">
                  <Activity className="w-4 h-4" />
                  National Operating Index
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2.5 rounded-lg bg-[#08161E]">
                    <div className="text-xl font-extrabold text-[#D4AF37] tracking-tight">₦12.8B</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Routed Capital</div>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-[#08161E]">
                    <div className="text-xl font-extrabold text-emerald-400 tracking-tight">128</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Active Missions</div>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-[#08161E]">
                    <div className="text-xl font-extrabold text-blue-400 tracking-tight">36</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Chapters</div>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-[#08161E]">
                    <div className="text-xl font-extrabold text-cyan-400 tracking-tight">8,240</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Field Volunteers</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D1A25] rounded-xl p-4 border border-[#D4AF37]/15">
                <h4 className="text-emerald-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE NOW
                </h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70"></span>
                    Kaduna water initiative active
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                    MTN partnership onboarding
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                    Kano chapter mobilization
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-[18px]">
            <div className="md:col-span-2">
              <div className="bg-[#0A1520]/80 backdrop-blur-sm rounded-xl p-4 border border-[#D4AF37]/20 shadow-lg shadow-black/10 mb-[18px]">
                <h3 className="text-[#D4AF37] font-semibold mb-3 flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" />
                  Explore Operating Layers
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {demoUsers.map(user => {
                    const RoleIcon = roles.find(r => r.id === user.role)?.icon || Cpu
                    return (
                      <button
                        key={user.email}
                        onClick={() => handleDemoLogin(user.email, user.role)}
                        className="cursor-pointer p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-[#D4AF37]/40 transition-all text-left"
                      >
                        <RoleIcon className="w-5 h-5 text-[#D4AF37] mb-1" />
                        <div className="text-white text-sm font-medium">{user.name}</div>
                        <div className="text-gray-500 text-xs capitalize">{user.role}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="bg-[#0A1520]/80 backdrop-blur-sm rounded-xl p-4 border border-[#D4AF37]/20 shadow-lg shadow-black/10">
                <h3 className="text-[#D4AF37] font-semibold mb-3 flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4" />
                  Launch Operational Workspace
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {roles.map(role => {
                    const RoleIcon = role.icon
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleRoleSelect(role.id)}
                        className="cursor-pointer p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-[#D4AF37]/40 transition-all text-center"
                      >
                        <RoleIcon className={`w-5 h-5 ${role.color} mx-auto mb-1.5`} />
                        <div className="text-white text-sm font-medium">{role.label}</div>
                        <div className="text-gray-500 text-xs">{role.desc}</div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-[18px]">
              <PlatformHealthCard />
              <RecentActivityStrip />
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>Demo password for all accounts: <span className="text-white font-mono">Demo@123</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}