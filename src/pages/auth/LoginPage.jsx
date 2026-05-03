import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Heart, Shield, Wallet, Cpu, Lock, Building2, Users as ChapterIcon } from 'lucide-react'

const roles = [
  { id: 'volunteer', label: 'Volunteer', icon: Heart },
  { id: 'chapter', label: 'Chapter', icon: ChapterIcon },
  { id: 'partner', label: 'Partner', icon: Building2 },
  { id: 'donor', label: 'Donor', icon: Wallet },
  { id: 'executive', label: 'Executive', icon: Cpu },
  { id: 'command', label: 'Command', icon: Shield },
  { id: 'admin', label: 'Admin', icon: Lock },
]

const redirectMap = {
  volunteer: '/app/volunteer',
  chapter: '/app/chapter',
  partner: '/app/partner',
  donor: '/app/donor',
  executive: '/app/executive',
  command: '/app/command',
  admin: '/app/admin',
}

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])
  
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #07111A 0%, #0D2234 100%)' }}>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin mb-6 mx-auto"></div>
        <p className="text-white text-xl font-semibold">Initializing Workspace...</p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedRole, setSelectedRole] = useState('volunteer')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const savedAuth = localStorage.getItem('cityboy_auth')
    if (savedAuth) {
      const auth = JSON.parse(savedAuth)
      if (auth.isAuthenticated) {
        navigate(redirectMap[auth.userRole] || '/arena')
      }
    }
  }, [navigate])

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleDemo = (role) => {
    setSelectedRole(role)
    setEmail(`demo.${role}@cityboyarena.org`)
    setPassword('demo123')
    setLoading(true)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (!email) {
      alert('Please enter your email')
      return
    }
    if (!password) {
      alert('Please enter your password')
      return
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address')
      return
    }
    setLoading(true)
  }

  useEffect(() => {
    if (loading && initialized) {
      const auth = {
        isAuthenticated: true,
        userRole: selectedRole,
        userName: email.split('@')[0] || 'Demo User',
        userEmail: email || 'demo@cityboyarena.org',
        loginTime: new Date().toISOString(),
      }
      localStorage.setItem('cityboy_auth', JSON.stringify(auth))
      navigate(redirectMap[selectedRole])
    }
  }, [loading, initialized, selectedRole, email, navigate])

  if (loading) {
    return <LoadingScreen onComplete={() => setInitialized(true)} />
  }

  return (
    <div className="min-h-screen flex" style={{ background: 'linear-gradient(180deg, #07111A 0%, #0D2234 100%)' }}>
      {/* Login Header - Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-[72px]" style={{ background: 'rgba(3,27,48,0.98)', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
        <Link to="/" className="text-[20px] font-bold tracking-[0.08em] text-[#D4AF37]">CITY BOY ARENA</Link>
        <Link to="/" className="text-white/70 hover:text-white text-[14px] font-medium">Return Home</Link>
      </header>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full max-w-[1180px] mx-auto pt-[72px]">
        <div className="flex w-full">
          {/* LEFT PANEL - Brand */}
          <div className="w-[56%] pr-[48px] flex flex-col justify-center">
            <span className="text-[#16A34A] text-[13px] font-bold tracking-[0.18em] mb-[20px]">CITY BOY ARENA OS</span>
            <h1 className="text-[72px] font-extrabold leading-[0.98] text-white mb-[28px]">Access the Operating Layer</h1>
            <p className="text-white/72 text-[22px] leading-[1.6] max-w-[520px] mb-[42px]">
              Secure role-based access to civic operating infrastructure.
            </p>
            
            <div className="space-y-[16px] mb-[42px]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                <span className="text-white text-[16px]">Role Based Access</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                <span className="text-white text-[16px]">Operational Transparency</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                <span className="text-white text-[16px]">National Execution Layer</span>
              </div>
            </div>

            <div className="flex gap-[32px]">
              <div>
                <div className="text-[#D4AF37] text-[28px] font-bold">548,230</div>
                <div className="text-white/58 text-[12px]">Members</div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-[28px] font-bold">418</div>
                <div className="text-white/58 text-[12px]">Chapters</div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-[28px] font-bold">148</div>
                <div className="text-white/58 text-[12px]">Missions</div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - Access Card */}
          <div className="w-[44%]">
            <div className="rounded-[32px] p-[48px] bg-white/96 shadow-[0_30px_100px_rgba(0,0,0,0.18)]" style={{ border: '1px solid rgba(255,255,255,0.55)' }}>
              <h2 className="text-[32px] font-bold text-[#082F49] mb-[8px]">Sign In</h2>
              <p className="text-[#64748B] text-[16px] mb-[32px]">Choose your access layer</p>

              {/* Role Selector Grid */}
              <div className="grid grid-cols-2 gap-[14px] mb-[24px]">
                {roles.map((role) => {
                  const Icon = role.icon
                  const selected = selectedRole === role.id
                  return (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`h-[72px] rounded-[16px] flex items-center gap-3 px-4 transition-all ${selected ? 'bg-[#082F49] text-white border-2 border-[#16A34A]' : 'bg-white border border-[#E2E8F0] text-[#082F49] hover:border-[#16A34A]'}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-[14px] font-semibold">{role.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-[16px]">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[54px] rounded-[14px] px-4 border border-[#DCE4EA] focus:border-[#16A34A] focus:shadow-[0_0_0_3px_rgba(22,163,74,0.15)] outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[54px] rounded-[14px] px-4 border border-[#DCE4EA] focus:border-[#16A34A] focus:shadow-[0_0_0_3px_rgba(22,163,74,0.15)] outline-none transition-all"
                  />
                </div>
                <div className="flex justify-end">
                  <button type="button" className="text-[#16A34A] text-[13px]">Forgot password?</button>
                </div>
                <button
                  type="submit"
                  className="w-full h-[56px] rounded-[14px] font-bold text-[#031B30] transition-all hover:-translate-y-[2px]"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #C89B2C)', boxShadow: '0 8px 24px rgba(212,175,55,0.28)' }}
                >
                  Continue
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-[24px]">
                <div className="flex-1 h-px bg-[#E2E8F0]"></div>
                <span className="text-[#64748B] text-[13px]">or</span>
                <div className="flex-1 h-px bg-[#E2E8F0]"></div>
              </div>

              {/* Demo Access */}
              <div>
                <p className="text-[#64748B] text-[13px] mb-[12px]">Quick Demo Access</p>
                <div className="grid grid-cols-2 gap-[12px]">
                  {['volunteer', 'chapter', 'command', 'admin'].map((role) => (
                    <button
                      key={role}
                      onClick={() => handleDemo(role)}
                      className="h-[48px] rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#082F49] text-[14px] font-medium hover:border-[#16A34A] transition-all capitalize"
                    >
                      {role} Demo
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full pt-[90px] px-[24px] pb-[100px]">
        <div className="mb-[42px]">
          <span className="text-[#16A34A] text-[13px] font-bold tracking-[0.18em] mb-[20px] block">CITY BOY ARENA OS</span>
          <h1 className="text-[38px] font-extrabold leading-[1.05] text-white mb-[28px]">Access the Operating Layer</h1>
          <p className="text-white/72 text-[18px] leading-[1.6]">
            Secure role-based access to civic operating infrastructure.
          </p>
        </div>

        <div className="rounded-[24px] p-[28px] bg-white/96 shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
          <h2 className="text-[28px] font-bold text-[#082F49] mb-[8px]">Sign In</h2>
          <p className="text-[#64748B] text-[14px] mb-[24px]">Choose your access layer</p>

          {/* Role Selector - Scrollable Row */}
          <div className="flex gap-[10px] overflow-x-auto pb-[16px] -mx-[28px] px-[28px]">
            {roles.map((role) => {
              const Icon = role.icon
              const selected = selectedRole === role.id
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`flex-shrink-0 h-[56px] rounded-[14px] flex items-center gap-2 px-4 transition-all ${selected ? 'bg-[#082F49] text-white border-2 border-[#16A34A]' : 'bg-white border border-[#E2E8F0] text-[#082F49]'}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-[13px] font-semibold whitespace-nowrap">{role.label}</span>
                </button>
              )
            })}
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-[14px]">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[54px] rounded-[14px] px-4 border border-[#DCE4EA] focus:border-[#16A34A] focus:shadow-[0_0_0_3px_rgba(22,163,74,0.15)] outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[54px] rounded-[14px] px-4 border border-[#DCE4EA] focus:border-[#16A34A] focus:shadow-[0_0_0_3px_rgba(22,163,74,0.15)] outline-none"
            />
            <button
              type="submit"
              className="w-full h-[56px] rounded-[14px] font-bold text-[#031B30]"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #C89B2C)' }}
            >
              Continue
            </button>
          </form>

          <div className="flex items-center gap-4 my-[20px]">
            <div className="flex-1 h-px bg-[#E2E8F0]"></div>
            <span className="text-[#64748B] text-[12px]">or</span>
            <div className="flex-1 h-px bg-[#E2E8F0]"></div>
          </div>

          <p className="text-[#64748B] text-[12px] mb-[10px]">Quick Demo</p>
          <div className="grid grid-cols-2 gap-[10px]">
            {['volunteer', 'chapter', 'command', 'admin'].map((role) => (
              <button
                key={role}
                onClick={() => handleDemo(role)}
                className="h-[48px] rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#082F49] text-[13px] font-medium capitalize hover:border-[#16A34A]"
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}