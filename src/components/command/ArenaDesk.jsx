import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, X, Send, User, Heart, Handshake, Mail, ShoppingCart, AlertTriangle, CheckCircle, Users, Landmark, Shield, Radio } from 'lucide-react'
import { useSystemStore } from '../../store/systemStore'
import { useMissionStore } from '../../store/missionStore'
import { useCapitalStore } from '../../store/capitalStore'
import { usePeopleStore } from '../../store/peopleStore'
import { useIntelStore } from '../../store/intelStore'

export default function ArenaDesk() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const notify = useSystemStore(s => s.notify)
  const logCommand = useSystemStore(s => s.logCommand)
  const missionCount = useMissionStore(s => s.missions.length)
  const allocationCount = useCapitalStore(s => s.allocations.length)
  const alertCount = useIntelStore(s => s.alerts.filter(a => !a.read).length)
  const volunteerCount = usePeopleStore(s => s.volunteers.length)

  const quickActions = [
    { id: 'volunteers', icon: Users, label: 'Volunteers', href: '/app/volunteer/catalog', count: volunteerCount },
    { id: 'missions', icon: Shield, label: 'Missions', href: '/app/command/operations', count: missionCount },
    { id: 'capital', icon: Landmark, label: 'Allocations', href: '/app/command/capital', count: allocationCount },
    { id: 'intel', icon: Radio, label: 'Alerts', href: '/app/command/intelligence', count: alertCount, warning: alertCount > 0 },
    { id: 'join', icon: User, label: 'Join Arena', href: '/join', color: '#D4AF37' },
    { id: 'partner', icon: Handshake, label: 'Partner With Us', href: '/partners', color: '#D4AF37' },
    { id: 'media', icon: Mail, label: 'Media Enquiry', href: 'mailto:media@cityboyarena.com', color: '#D4AF37' },
    { id: 'contact', icon: Mail, label: 'Contact Office', href: 'mailto:hello@cityboyarena.com', color: '#D4AF37' },
  ]

  const handleAction = (action) => {
    notify('info', 'Arena action: ' + action.label)
    logCommand(action.id + ' accessed')
    if (action.id === 'volunteers' || action.id === 'missions' || action.id === 'capital' || action.id === 'intel') {
      setIsOpen(false)
    }
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      notify('info', 'Message sent: ' + message)
      setMessage('')
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[90] bottom-20 md:bottom-8 right-4 md:right-8 bg-[#D4AF37] text-[#031B30] px-4 py-3 md:px-8 md:py-4 rounded-lg shadow-lg flex items-center gap-2 font-bold"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden md:inline text-sm">Arena Desk</span>
        {isOpen ? <X className="w-4 h-4 md:hidden" /> : <span className="md:hidden text-lg">+</span>}
      </button>
      <style>{`
        @media (max-width: 767px) {
          .arena-desk-btn { right: 16px !important; top: auto !important; bottom: calc(80px + env(safe-area-inset-bottom, 0px)) !important; }
          .arena-desk-panel { right: 8px !important; left: 8px !important; width: auto !important; bottom: calc(140px + env(safe-area-inset-bottom, 0px)) !important; max-height: 60vh !important; }
        }
      `}</style>

      {/* Panel */}
      {isOpen && (
        <div className="fixed z-[90] w-[calc(100vw-2rem)] md:w-96 bg-[#0A3B62] border border-[rgba(212,175,55,.28)] rounded-xl shadow-2xl overflow-hidden flex flex-col arena-desk-panel md:arena-desk-panel-desktop"
          style={{ right: '32px', bottom: 'calc(24px + 56px + 8px)' }}
        >
          {/* Header */}
          <div className="bg-[#062B49] px-4 py-3 flex items-center justify-between border-b border-[rgba(255,255,255,.08)]">
            <span className="font-label-caps text-sm text-white">Arena Desk</span>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-4 grid grid-cols-2 gap-2">
            {quickActions.map((action, i) => {
              const Icon = action.icon
              return (
                <Link
                  key={i}
                  to={action.href}
                  onClick={() => handleAction(action)}
                  className={`flex items-center gap-2 p-3 bg-[#031B30] rounded-lg hover:bg-[#062B49] transition-colors ${
                    action.warning ? 'border border-signal-red/30' : ''
                  }`}
                >
                  <Icon className={`w-4 h-4 ${action.warning ? 'text-signal-red' : 'text-[#D4AF37]'}`} />
                  <div className="flex flex-col">
                    <span className="text-xs text-white">{action.label}</span>
                    {action.count !== undefined && (
                      <span className={`text-[10px] ${action.warning ? 'text-signal-red' : 'text-white/50'}`}>
                        {action.count} active
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Chat */}
          <div className="p-4 border-t border-[rgba(255,255,255,.08)]">
            <label className="text-xs text-white/60 mb-2 block">Quick Message</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask us anything..."
                className="flex-1 bg-[#031B30] border border-[rgba(255,255,255,.08)] rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none"
              />
              <button 
                onClick={handleSendMessage}
                className="bg-[#D4AF37] text-[#031B30] p-2 rounded-lg hover:brightness-110 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}