import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { Settings, Globe, Palette, Bell, Shield, Database } from 'lucide-react'

export default function AdminConfig() {
  const [config, setConfig] = useState({
    environment: 'production',
    version: '1.0.0',
    maintenanceMode: false,
    registrationOpen: true,
  })

  const configSections = [
    { id: 'general', label: 'General', icon: Globe, items: ['App Name', 'Tagline', 'Default Language'] },
    { id: 'appearance', label: 'Appearance', icon: Palette, items: ['Theme', 'Primary Color', 'Logo'] },
    { id: 'notifications', label: 'Notifications', icon: Bell, items: ['Email Alerts', 'Push Notifications'] },
    { id: 'security', label: 'Security', icon: Shield, items: ['2FA Required', 'Session Timeout'] },
    { id: 'database', label: 'Database', icon: Database, items: ['Backup Frequency', 'Retention Period'] },
  ]

  return (
    <CityBoyOSShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Configuration</h1>
        <p className="text-gray-400 mb-6">System-wide settings and preferences</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="glass rounded-xl p-4 border border-white/10">
            <p className="text-gray-400 text-sm">Environment</p>
            <p className="text-lg font-semibold text-emerald-400 capitalize">{config.environment}</p>
          </div>
          <div className="glass rounded-xl p-4 border border-white/10">
            <p className="text-gray-400 text-sm">Version</p>
            <p className="text-lg font-semibold text-white">{config.version}</p>
          </div>
          <div className="glass rounded-xl p-4 border border-white/10">
            <p className="text-gray-400 text-sm">Status</p>
            <p className="text-lg font-semibold text-emerald-400">Active</p>
          </div>
        </div>

        <div className="glass-dark rounded-xl p-5 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Settings className="w-4 h-4 text-gray-400" />
            Configuration Sections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {configSections.map(section => {
              const Icon = section.icon
              return (
                <button key={section.id} className="cursor-pointer flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 text-left">
                  <Icon className="w-5 h-5 text-gray-400" />
                  <span className="text-white">{section.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </CityBoyOSShell>
  )
}