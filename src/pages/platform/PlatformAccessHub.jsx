import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { useSystemStore } from '../../store/systemStore'
import { useIntelStore } from '../../store/intelStore'
import { useCapitalStore } from '../../store/capitalStore'
import { useMissionStore } from '../../store/missionStore'
import { usePeopleStore } from '../../store/peopleStore'
import { Cpu, Shield, Users, Heart, Wallet, Building2, Eye, Lock, Zap, Activity, TrendingUp, Bell } from 'lucide-react'

const roles = [
  { id: 'leadership', label: 'Leadership', icon: Cpu, color: 'text-[#D4AF37]', desc: 'National Command' },
  { id: 'executive', label: 'Executive', icon: Shield, color: 'text-blue-400', desc: 'Strategic Ops' },
  { id: 'chapter', label: 'Chapter', icon: Users, color: 'text-emerald-400', desc: 'Local Lead' },
  { id: 'volunteer', label: 'Volunteer', icon: Heart, color: 'text-rose-400', desc: 'Field Force' },
  { id: 'donor', label: 'Donor', icon: Wallet, color: 'text-green-400', desc: 'Funders' },
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
    <div className="glass-dark rounded-xl p-5 border border-[#D4AF37]/20">
      <h3 className="text-[#D4AF37] font-semibold mb-4 flex items-center gap-2">
        <Zap className="w-4 h-4" />
        Platform Health
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 rounded-lg bg-white/5">
          <div className="text-2xl font-bold text-emerald-400">{activeMissions}</div>
          <div className="text-xs text-gray-400">Active Missions</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-white/5">
          <div className="text-2xl font-bold text-blue-400">{activeVolunteers}</div>
          <div className="text-xs text-gray-400">Active Volunteers</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-white/5">
          <div className="text-2xl font-bold text-[#D4AF37]">{treasury?.total || '₦0'}</div>
          <div className="text-xs text-gray-400">Treasury</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-white/5">
          <div className={`text-2xl font-bold ${activeAlerts > 0 ? 'text-red-400' : 'text-emerald-400'}`}>{activeAlerts}</div>
          <div className="text-xs text-gray-400">Critical Alerts</div>
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
    <div className="glass-dark rounded-xl p-5 border border-[#D4AF37]/20">
      <h3 className="text-[#D4AF37] font-semibold mb-4 flex items-center gap-2">
        <Activity className="w-4 h-4" />
        Recent Activity
      </h3>
      <div className="space-y-3">
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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-h1 text-4xl md:text-5xl text-white mb-4">
              Enter CityBoy OS
            </h1>
            <p className="text-on-surface-variant text-lg">Nigeria's Civic Command Operating System</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2">
              <div className="glass-dark rounded-xl p-6 border border-[#D4AF37]/20 mb-6">
                <h3 className="text-[#D4AF37] font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Quick Demo Access
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {demoUsers.map(user => {
                    const RoleIcon = roles.find(r => r.id === user.role)?.icon || Cpu
                    return (
                      <button
                        key={user.email}
                        onClick={() => handleDemoLogin(user.email, user.role)}
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/30 transition-all text-left"
                      >
                        <RoleIcon className="w-5 h-5 text-[#D4AF37] mb-2" />
                        <div className="text-white text-sm font-medium">{user.name}</div>
                        <div className="text-gray-500 text-xs capitalize">{user.role}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="glass-dark rounded-xl p-6 border border-[#D4AF37]/20">
                <h3 className="text-[#D4AF37] font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Select Role Access
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {roles.map(role => {
                    const RoleIcon = role.icon
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleRoleSelect(role.id)}
                        className="p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/30 transition-all text-center"
                      >
                        <RoleIcon className={`w-6 h-6 ${role.color} mx-auto mb-2`} />
                        <div className="text-white text-sm font-medium">{role.label}</div>
                        <div className="text-gray-500 text-xs">{role.desc}</div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-6">
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