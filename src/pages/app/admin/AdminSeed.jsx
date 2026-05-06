import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { RefreshCw, Loader } from 'lucide-react'

export default function AdminSeed() {
  const [seeding, setSeeding] = useState(false)
  const [lastSeed, setLastSeed] = useState(null)

  const handleSeed = () => {
    setSeeding(true)
    setTimeout(() => {
      setSeeding(false)
      setLastSeed(new Date())
    }, 2000)
  }

  const seedOptions = [
    { id: 'users', label: 'Users', count: 1240 },
    { id: 'missions', label: 'Missions', count: 89 },
    { id: 'chapters', label: 'Chapters', count: 31 },
    { id: 'notifications', label: 'Notifications', count: 456 },
    { id: 'allocations', label: 'Allocations', count: 234 },
  ]

  return (
    <CityBoyOSShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Data Seed</h1>
        <p className="text-gray-400 mb-6">Initialize or refresh runtime data stores</p>

        <div className="glass-dark rounded-xl p-5 border border-white/10 mb-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-purple-400" />
            Seed Actions
          </h3>
          <p className="text-gray-400 text-sm mb-4">Refresh runtime data stores with seed values.</p>
          <button 
            onClick={handleSeed}
            disabled={seeding}
            className="cursor-pointer px-6 py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg flex items-center gap-2 disabled:opacity-50"
          >
            {seeding ? <Loader className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
            {seeding ? 'Seeding...' : 'Run Full Seed'}
          </button>
          {lastSeed && (
            <p className="text-emerald-400 text-sm mt-3">Last seed: {lastSeed.toLocaleString()}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {seedOptions.map(opt => (
            <div key={opt.id} className="glass rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm">{opt.label}</p>
              <p className="text-2xl font-bold text-white">{opt.count.toLocaleString()}</p>
              <p className="text-gray-500 text-xs">records</p>
            </div>
          ))}
        </div>
      </div>
    </CityBoyOSShell>
  )
}