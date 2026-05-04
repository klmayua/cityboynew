import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Users, Search, Filter, Award, Clock, MapPin, ChevronRight,
  Plus, Download, MessageCircle, Settings, Shield, Heart, Star
} from 'lucide-react'

function MemberRow({ member, onClick }) {
  const navigate = useNavigate()
  const roleColors = {
    'Chapter Lead': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Organizer': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Volunteer': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  }
  const roleIcons = {
    'Chapter Lead': Shield,
    'Organizer': Star,
    'Volunteer': Heart,
  }
  const RoleIcon = roleIcons[member.role] || Users

  return (
    <button
      onClick={() => onClick(member)}
      className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
          <span className="text-[#D4AF37] font-semibold text-sm">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="text-white font-medium">{member.name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <RoleIcon className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-xs">{member.role}</span>
            <span className="text-gray-600">•</span>
            <MapPin className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-xs">{member.chapter}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="flex items-center gap-1">
            <Award className="w-3 h-3 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium">{member.score?.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-500" />
            <span className="text-gray-500 text-xs">{member.hours}h logged</span>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </button>
  )
}

function ChapterMembers() {
  const navigate = useNavigate()
  const { members } = usePeopleStore()
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')

  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase())
    const matchesRole = roleFilter === 'all' || m.role === roleFilter
    return matchesSearch && matchesRole
  })

  const handleMemberClick = (member) => {
    navigate(`/app/chapter/members?member=${member.id}`)
  }

  const roles = ['all', 'Chapter Lead', 'Organizer', 'Volunteer']

  return (
    <CityBoyOSShell role="chapter" title="Members">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Chapter Members</h1>
        <p className="text-gray-400">Manage members within this chapter</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Members</p>
          <p className="text-2xl font-bold text-white">{members.length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Active</p>
          <p className="text-2xl font-bold text-white">{members.filter(m => m.status === 'active').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Chapter Leads</p>
          <p className="text-2xl font-bold text-white">{members.filter(m => m.role === 'Chapter Lead').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Top Score</p>
          <p className="text-2xl font-bold text-[#D4AF37]">{members[0]?.score?.toLocaleString() || 0}</p>
        </div>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search members..."
              className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="cursor-pointer px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
            >
              {roles.map(role => (
                <option key={role} value={role}>
                  {role === 'all' ? 'All Roles' : role}
                </option>
              ))}
            </select>
          </div>
          <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg">
            <Plus className="w-4 h-4" />
            Add Member
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {filteredMembers.map(member => (
          <MemberRow key={member.id} member={member} onClick={handleMemberClick} />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No members found</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default ChapterMembers