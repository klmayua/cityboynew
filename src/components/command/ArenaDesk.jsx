import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, X, Send, User, Heart, Handshake, Mail, ShoppingCart, AlertTriangle } from 'lucide-react'

const quickActions = [
  { icon: User, label: 'Join Arena', href: '/join', color: '#D4AF37' },
  { icon: Heart, label: 'Volunteer', href: '/volunteer', color: '#D4AF37' },
  { icon: Handshake, label: 'Partner With Us', href: '/partners', color: '#D4AF37' },
  { icon: Mail, label: 'Media Enquiry', href: 'mailto:media@cityboyarena.com', color: '#D4AF37' },
  { icon: ShoppingCart, label: 'Procurement', href: '#', color: '#D4AF37' },
  { icon: AlertTriangle, label: 'Report Issue', href: '#', color: '#D4AF37' },
  { icon: Mail, label: 'Contact Office', href: 'mailto:hello@cityboyarena.com', color: '#D4AF37' },
]

export default function ArenaDesk() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[90] bg-[#D4AF37] text-[#031B30] px-5 py-3 rounded-lg shadow-[0_0_30px_rgba(212,175,55,.4)] hover:shadow-[0_0_40px_rgba(212,175,55,.5)] transition-all flex items-center gap-2 font-label-caps"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden md:inline">Arena Desk</span>
        {isOpen ? <X className="w-4 h-4 md:hidden" /> : <span className="md:hidden text-lg">+</span>}
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-36 md:bottom-24 right-4 md:right-8 z-[90] w-[calc(100vw-2rem)] md:w-96 bg-[#0A3B62] border border-[rgba(212,175,55,.28)] rounded-xl shadow-2xl overflow-hidden">
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
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-3 bg-[#031B30] rounded-lg hover:bg-[#062B49] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs text-white">{action.label}</span>
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
                placeholder="Ask us anything..."
                className="flex-1 bg-[#031B30] border border-[rgba(255,255,255,.08)] rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none"
              />
              <button className="bg-[#D4AF37] text-[#031B30] p-2 rounded-lg hover:brightness-110 transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}