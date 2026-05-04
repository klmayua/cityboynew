import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { 
  User, Mail, Phone, MapPin, Calendar, Edit, Camera,
  Shield, Award, Clock, ChevronRight
} from 'lucide-react'

function AppVolunteerProfile() {
  const { user } = useAuthStore()
  const profile = {
    name: user?.name || 'John Doe',
    email: 'john.doe@example.com',
    phone: '+234 801 234 5678',
    chapter: 'Lagos Central',
    joined: '2025-01-15',
    tasks: 45,
    hours: 320,
  }

  return (
    <CityBoyOSShell role="volunteer" title="Profile">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">My Profile</h1>
        <p className="text-gray-400">Manage your information</p>
      </div>

      <div className="glass-dark rounded-xl p-6 border border-white/10 mb-6">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
            <span className="text-[#D4AF37] text-2xl font-bold">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-white font-semibold">{profile.name}</h2>
              <button className="cursor-pointer flex items-center gap-2 px-3 py-1.5 bg-[#D4AF37] text-black text-sm rounded-lg">
                <Edit className="w-4 h-4" />Edit
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{profile.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{profile.chapter}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Joined {profile.joined}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400 text-sm">Tasks Completed</span>
          </div>
          <p className="text-2xl font-bold text-white">{profile.tasks}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-gray-400 text-sm">Volunteer Hours</span>
          </div>
          <p className="text-2xl font-bold text-white">{profile.hours}h</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-gray-400 text-sm">Badges</span>
          </div>
          <p className="text-2xl font-bold text-white">12</p>
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default AppVolunteerProfile