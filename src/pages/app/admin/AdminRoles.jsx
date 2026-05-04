import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useSystemStore } from '../../../store/systemStore'
import { 
  Lock, Shield, Users, ChevronRight, Plus, Search,
  Activity, Settings
} from 'lucide-react'

function RoleCard({ role }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
          <Shield className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <p className="text-white font-medium">{role.name}</p>
          <p className="text-gray-400 text-sm">{role.users} users</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-500" />
    </div>
  )
}

function AdminRoles() {
  const roles = [
    { id: 1, name: 'Leadership', users: 5, permissions: ['all'] },
    { id: 2, name: 'Executive', users: 12, permissions: ['funding', 'reports'] },
    { id: 3, name: 'Chapter Lead', users: 45, permissions: ['members', 'projects'] },
    { id: 4, name: 'Volunteer', users: 1250, permissions: ['tasks'] },
    { id: 5, name: 'Donor', users: 380, permissions: ['portfolio'] },
    { id: 6, name: 'Partner', users: 28, permissions: ['campaigns'] },
    { id: 7, name: 'Admin', users: 3, permissions: ['all'] },
  ]

  return (
    <CityBoyOSShell role="admin" title="Roles">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Role Management</h1>
        <p className="text-gray-400">Platform roles and permissions</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-black text-sm font-medium rounded-lg">
          <Plus className="w-4 h-4" />New Role
        </button>
      </div>

      <div className="space-y-3">
        {roles.map(role => <RoleCard key={role.id} role={role} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default AdminRoles