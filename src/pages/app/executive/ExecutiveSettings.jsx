import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { User, Bell, Shield, Target } from 'lucide-react'

export default function ExecutiveSettings() {
  return (
    <CityBoyOSShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400 mb-6">Executive workspace settings</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="glass-dark rounded-xl p-5 border border-white/10 hover:border-white/20 text-left">
            <User className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h3 className="text-white font-medium mb-1">Profile</h3>
            <p className="text-gray-400 text-sm">Executive details</p>
          </button>
          <button className="glass-dark rounded-xl p-5 border border-white/10 hover:border-white/20 text-left">
            <Target className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h3 className="text-white font-medium mb-1">Priorities</h3>
            <p className="text-gray-400 text-sm">National priorities</p>
          </button>
          <button className="glass-dark rounded-xl p-5 border border-white/10 hover:border-white/20 text-left">
            <Shield className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h3 className="text-white font-medium mb-1">Security</h3>
            <p className="text-gray-400 text-sm">Access control</p>
          </button>
        </div>
      </div>
    </CityBoyOSShell>
  )
}