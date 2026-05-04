import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { 
  Radio, Users, Volume2, ChevronRight, Plus
} from 'lucide-react'

function ChannelCard({ channel }) {
  return (
    <button className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Radio className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <p className="text-white font-medium">{channel.name}</p>
          <p className="text-gray-400 text-sm">{channel.members} members</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-500" />
    </button>
  )
}

function CommsChannels() {
  const channels = [
    { id: 1, name: 'All Volunteers', members: 1250 },
    { id: 2, name: 'Chapter Leads', members: 45 },
    { id: 3, name: 'Regional Coordinators', members: 156 },
    { id: 4, name: 'Partner Relations', members: 28 },
  ]

  return (
    <CityBoyOSShell role="leadership" title="Channels">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white font-semibold">Broadcast Channels</h1>
          <p className="text-gray-400">Manage communication channels</p>
        </div>
        <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-black text-sm font-medium rounded-lg">
          <Plus className="w-4 h-4" />New Channel
        </button>
      </div>

      <div className="space-y-3">
        {channels.map(c => <ChannelCard key={c.id} channel={c} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default CommsChannels