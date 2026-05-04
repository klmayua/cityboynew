import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Users, MessageCircle, MapPin, Clock, Search, Plus,
  ChevronRight, Heart
} from 'lucide-react'

function MemberCard({ member }) {
  return (
    <button className="cursor-pointer w-full text-left flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
        <Heart className="w-5 h-5 text-rose-400" />
      </div>
      <div className="flex-1">
        <p className="text-white font-medium">{member.name}</p>
        <p className="text-gray-400 text-sm">{member.chapter}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-500 text-xs">{member.hours}h</span>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </button>
  )
}

function AppVolunteerCommunity() {
  const { members } = usePeopleStore()
  const [search, setSearch] = useState('')

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <CityBoyOSShell role="volunteer" title="Community">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Community</h1>
        <p className="text-gray-400">Connect with fellow volunteers</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search community..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <Users className="w-5 h-5 text-rose-400 mb-2" />
          <p className="text-2xl font-bold text-white">{members.length}</p>
          <p className="text-gray-400 text-sm">Active Members</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <MessageCircle className="w-5 h-5 text-blue-400 mb-2" />
          <p className="text-2xl font-bold text-white">24</p>
          <p className="text-gray-400 text-sm">Online Now</p>
        </div>
      </div>

      <div className="space-y-3">
        {filteredMembers.map(m => <MemberCard key={m.id} member={m} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default AppVolunteerCommunity