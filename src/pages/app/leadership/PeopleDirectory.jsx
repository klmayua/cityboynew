import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { usePeopleStore as useVolunteerStore } from '../../../store/peopleStore'
import { 
  Users, Search, Filter, MapPin, Award, Clock, TrendingUp, 
  ChevronRight, User, Shield, Heart, Star, Download
} from 'lucide-react'

function MemberCard({ member, onClick }) {
  const statusColors = {
    active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    inactive: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    suspended: 'bg-red-500/20 text-red-400 border-red-500/30',
  }

  const roleIcons = {
    'Chapter Lead': Shield,
    'Volunteer': Heart,
    'Organizer': Star,
  }

  const RoleIcon = roleIcons[member.role] || User

  return (
    <button 
      onClick={() => onClick(member)}
      className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all group"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
          <span className="text-[#D4AF37] font-semibold text-sm">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-white font-medium truncate">{member.name}</p>
            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] transition-colors" />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <RoleIcon className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-xs">{member.role}</span>
            <span className="text-gray-600">•</span>
            <MapPin className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-xs">{member.chapter}</span>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <Award className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-medium">{member.score?.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-gray-400 text-xs">{member.hours}h</span>
            </div>
            <span className={`ml-auto px-2 py-0.5 rounded text-xs border ${statusColors[member.status]}`}>
              {member.status}
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

function PeopleDirectory() {
  const navigate = useNavigate()
  const { members, chapters, leaderboard } = usePeopleStore()
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [view, setView] = useState('grid')

  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.chapter.toLowerCase().includes(search.toLowerCase())
    const matchesRole = roleFilter === 'all' || m.role === roleFilter
    const matchesStatus = statusFilter === 'all' || m.status === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  const handleMemberClick = (member) => {
    navigate(`/app/chapter/members?member=${member.id}`)
  }

  const stats = [
    { label: 'Total Members', value: members.length, icon: Users, color: 'text-blue-400' },
    { label: 'Active', value: members.filter(m => m.status === 'active').length, icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Chapters', value: chapters.length, icon: MapPin, color: 'text-purple-400' },
    { label: 'Top Scorer', value: leaderboard[0]?.name || '-', icon: Award, color: 'text-[#D4AF37]' },
  ]

  return (
    <CityBoyOSShell role="leadership" title="People Directory">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">People Directory</h1>
        <p className="text-gray-400">Manage members, volunteers, and chapter leadership across all states</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map(stat => (
          <div key={stat.label} className="glass-dark rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <span className="text-gray-400 text-sm">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or chapter..."
              className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="cursor-pointer px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none"
            >
              <option value="all">All Roles</option>
              <option value="Chapter Lead">Chapter Leads</option>
              <option value="Volunteer">Volunteers</option>
              <option value="Organizer">Organizers</option>
            </select>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="cursor-pointer px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>

          <button className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map(member => (
          <MemberCard key={member.id} member={member} onClick={handleMemberClick} />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No members found matching your criteria</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default PeopleDirectory