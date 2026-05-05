import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useIntelStore } from '../../../store/intelStore'
import { useSystemStore } from '../../../store/systemStore'
import { 
  Bell, AlertTriangle, CheckCircle, Clock, Filter, Search, 
  ChevronRight, Info, AlertCircle, XCircle
} from 'lucide-react'

function AlertCard({ alert }) {
  const navigate = useNavigate()
  const typeStyles = {
    critical: { icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/20 border-red-500/30' },
    warning: { icon: AlertCircle, color: 'text-yellow-400', bg: 'bg-yellow-500/20 border-yellow-500/30' },
    info: { icon: Info, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/30' },
    success: { icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/20 border-emerald-500/30' },
  }
  const style = typeStyles[alert.type] || typeStyles.info
  const TypeIcon = style.icon

  return (
    <button
      onClick={() => navigate(`/app/intelligence/alerts?alert=${alert.id}`)}
      className={`cursor-pointer w-full text-left p-4 rounded-xl border ${style.bg} hover:opacity-80 transition-all`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <TypeIcon className={`w-5 h-5 ${style.color}`} />
          <div>
            <p className="text-white font-medium">{alert.title}</p>
            <p className="text-gray-400 text-sm mt-1">{alert.message}</p>
          </div>
        </div>
        <div className="text-right">
          <span className={`px-2 py-0.5 rounded text-xs ${style.bg}`}>{alert.type}</span>
          <p className="text-gray-500 text-xs mt-2">
            {new Date(alert.timestamp).toLocaleDateString()}
          </p>
        </div>
      </div>
    </button>
  )
}

function IntelligenceAlerts() {
  const navigate = useNavigate()
  const { alerts } = useIntelStore()
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filteredAlerts = alerts.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || a.type === filter
    return matchesSearch && matchesFilter
  })

  const unreadCount = alerts.filter(a => !a.read).length

  return (
    <CityBoyOSShell role="intelligence" title="Alerts">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Alert Intel</h1>
        <p className="text-gray-400">Threat detection and anomaly alerts</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total Alerts</p>
          <p className="text-2xl font-bold text-white">{alerts.length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-red-500/30">
          <p className="text-gray-400 text-xs">Critical</p>
          <p className="text-2xl font-bold text-red-400">{alerts.filter(a => a.type === 'critical').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-yellow-500/30">
          <p className="text-gray-400 text-xs">Warning</p>
          <p className="text-2xl font-bold text-yellow-400">{alerts.filter(a => a.type === 'warning').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Unread</p>
          <p className="text-2xl font-bold text-white">{unreadCount}</p>
        </div>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search alerts..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            {['all', 'critical', 'warning', 'info'].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${filter === f ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'}`}>
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {filteredAlerts.map(alert => <AlertCard key={alert.id} alert={alert} />)}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="text-center py-12">
          <Bell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No alerts found</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default IntelligenceAlerts