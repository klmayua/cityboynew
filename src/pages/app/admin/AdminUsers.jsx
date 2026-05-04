import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { useSystemStore } from '../../../store/systemStore'
import { 
  Users, Shield, Settings, Activity, Cpu, Database,
  ChevronRight, Plus, Search, Filter, Lock
} from 'lucide-react'

function UserRow({ user, type }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/app/admin/users?user=${user.id}`)}
      className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Users className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <p className="text-white font-medium">{user.name || 'Unknown'}</p>
          <p className="text-gray-400 text-sm capitalize">{type}</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-500" />
    </button>
  )
}

function AdminUsers() {
  const navigate = useNavigate()
  const { volunteers, donors, partners } = usePeopleStore()
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  const allUsers = [
    ...(volunteers || []).map(v => ({ ...v, userType: 'volunteer' })),
    ...(donors || []).map(d => ({ ...d, userType: 'donor' })),
    ...(partners || []).map(p => ({ ...p, userType: 'partner' })),
  ]

  const filtered = allUsers.filter(u => {
    const name = u.name || ''
    const matchesSearch = name.toLowerCase().includes(search.toLowerCase())
    const matchesType = typeFilter === 'all' || u.userType === typeFilter
    return matchesSearch && matchesType
  })

  return (
    <CityBoyOSShell role="admin" title="Users">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">User Management</h1>
        <p className="text-gray-400">Manage platform users</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
          </div>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="cursor-pointer px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm">
            <option value="all">All Types</option>
            <option value="volunteer">Volunteers</option>
            <option value="donor">Donors</option>
            <option value="partner">Partners</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(user => <UserRow key={user.id} user={user} type={user.userType} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default AdminUsers