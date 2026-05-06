import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { Download, FileText, Table, Users, MapPin, Wallet } from 'lucide-react'

export default function AdminExports() {
  const [exporting, setExporting] = useState(null)

  const exportOptions = [
    { id: 'users', label: 'Users Export', icon: Users, format: 'CSV', records: 1240 },
    { id: 'transactions', label: 'Transactions Export', icon: Wallet, format: 'CSV', records: 5678 },
    { id: 'missions', label: 'Missions Export', icon: MapPin, format: 'CSV', records: 89 },
    { id: 'audit', label: 'Audit Log', icon: FileText, format: 'JSON', records: 2340 },
  ]

  const handleExport = (id) => {
    setExporting(id)
    setTimeout(() => setExporting(null), 1500)
  }

  return (
    <CityBoyOSShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Data Exports</h1>
        <p className="text-gray-400 mb-6">Export system data in various formats</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exportOptions.map(opt => {
            const Icon = opt.icon
            return (
              <div key={opt.id} className="glass-dark rounded-xl p-5 border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#D4AF37]" />
                    <div>
                      <h4 className="text-white font-medium">{opt.label}</h4>
                      <p className="text-gray-400 text-sm">{opt.records.toLocaleString()} records</p>
                    </div>
                  </div>
                  <span className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">{opt.format}</span>
                </div>
                <button 
                  onClick={() => handleExport(opt.id)}
                  disabled={exporting === opt.id}
                  className="cursor-pointer w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  {exporting === opt.id ? 'Exporting...' : 'Download'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </CityBoyOSShell>
  )
}