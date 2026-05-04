import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { 
  Send, Users, FileText, Clock, CheckCircle, Search
} from 'lucide-react'

function BroadcastRow({ broadcast }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Send className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <p className="text-white font-medium">{broadcast.title}</p>
          <p className="text-gray-400 text-sm">{broadcast.recipients} recipients</p>
        </div>
      </div>
      <div className="text-right">
        <span className={`px-2 py-1 rounded text-xs ${
          broadcast.status === 'sent' ? 'bg-emerald-500/20 text-emerald-400' : 
          broadcast.status === 'scheduled' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-500/20 text-gray-400'
        }`}>{broadcast.status}</span>
        <p className="text-gray-500 text-xs mt-1">{broadcast.date}</p>
      </div>
    </div>
  )
}

function CommsBroadcast() {
  const broadcasts = [
    { id: 1, title: 'Weekly Update - May 1', recipients: 1250, status: 'sent', date: '2026-05-01' },
    { id: 2, title: 'Chapter Meeting Reminder', recipients: 45, status: 'sent', date: '2026-04-28' },
    { id: 3, title: 'Q2 Campaign Launch', recipients: 1250, status: 'scheduled', date: '2026-05-15' },
  ]

  return (
    <CityBoyOSShell role="leadership" title="Broadcast">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Broadcast Center</h1>
        <p className="text-gray-400">Send messages to channels</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <button className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg">
          <Send className="w-4 h-4" />New Broadcast
        </button>
      </div>

      <div className="space-y-3">
        {broadcasts.map(b => <BroadcastRow key={b.id} broadcast={b} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default CommsBroadcast