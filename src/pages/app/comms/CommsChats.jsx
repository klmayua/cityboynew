import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCommsStore } from '../../../store/commsStore'
import { 
  MessageSquare, Send, Users, Filter, Search, Plus,
  ChevronRight, CheckCircle, Clock
} from 'lucide-react'

function ChatCard({ chat }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/app/comms?chat=${chat.id}`)}
      className="cursor-pointer w-full text-left flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
        <MessageSquare className="w-5 h-5 text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium truncate">{chat.name}</p>
        <p className="text-gray-400 text-sm truncate">{chat.lastMessage}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-500 text-xs">{chat.time}</p>
        {chat.unread > 0 && (
          <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-black text-xs">{chat.unread}</span>
        )}
      </div>
    </button>
  )
}

function CommsChats() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  
  const mockChats = [
    { id: 1, name: 'Lagos Chapter', lastMessage: 'Meeting confirmed for tomorrow', time: '2h ago', unread: 3 },
    { id: 2, name: 'Abuja Team', lastMessage: 'Great work on the campaign', time: '5h ago', unread: 0 },
    { id: 3, name: 'Volunteer Network', lastMessage: 'New volunteers joining', time: '1d ago', unread: 12 },
    { id: 4, name: 'Partner Relations', lastMessage: 'Shell meeting scheduled', time: '2d ago', unread: 0 },
  ]

  const filteredChats = mockChats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <CityBoyOSShell role="leadership" title="Messages">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Communications</h1>
        <p className="text-gray-400">Team channels and direct messages</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search conversations..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
          </div>
          <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-black text-sm font-medium rounded-lg">
            <Plus className="w-4 h-4" />New Message
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {filteredChats.map(chat => <ChatCard key={chat.id} chat={chat} />)}
      </div>

      {filteredChats.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No conversations found</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default CommsChats