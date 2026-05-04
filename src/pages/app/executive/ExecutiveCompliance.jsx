import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useAuthStore } from '../../../store/authStore'
import { 
  Shield, CheckCircle, XCircle, AlertTriangle, Search, ChevronRight,
  FileText, Clock
} from 'lucide-react'

function ComplianceItem({ item }) {
  const statusIcons = { compliant: CheckCircle, failed: XCircle, warning: AlertTriangle }
  const StatusIcon = statusIcons[item.status]
  const statusColors = { compliant: 'text-emerald-400', failed: 'text-red-400', warning: 'text-yellow-400' }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
      <div className="flex items-center gap-3">
        <StatusIcon className={`w-5 h-5 ${statusColors[item.status]}`} />
        <div>
          <p className="text-white font-medium">{item.rule}</p>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
      </div>
      <div className="text-right">
        <span className={`px-2 py-1 rounded text-xs ${statusColors[item.status]} bg-white/10`}>{item.status}</span>
        <p className="text-gray-500 text-xs mt-1">{item.lastCheck}</p>
      </div>
    </div>
  )
}

function ExecutiveCompliance() {
  const items = [
    { id: 1, rule: 'Financial Audit', description: 'Quarterly financial review', status: 'compliant', lastCheck: '2026-05-01' },
    { id: 2, rule: 'KYC Compliance', description: 'All users verified', status: 'compliant', lastCheck: '2026-05-01' },
    { id: 3, rule: 'Data Protection', description: 'NGDPR compliance', status: 'warning', lastCheck: '2026-04-28' },
    { id: 4, rule: 'Chapter Reporting', description: 'Monthly submissions', status: 'failed', lastCheck: '2026-04-15' },
  ]

  return (
    <CityBoyOSShell role="executive" title="Compliance">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Compliance Center</h1>
        <p className="text-gray-400">Executive compliance oversight</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-emerald-500/30">
          <p className="text-gray-400 text-xs">Compliant</p>
          <p className="text-2xl font-bold text-emerald-400">{items.filter(i => i.status === 'compliant').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-yellow-500/30">
          <p className="text-gray-400 text-xs">Warnings</p>
          <p className="text-2xl font-bold text-yellow-400">{items.filter(i => i.status === 'warning').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-red-500/30">
          <p className="text-gray-400 text-xs">Failed</p>
          <p className="text-2xl font-bold text-red-400">{items.filter(i => i.status === 'failed').length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Last Audit</p>
          <p className="text-2xl font-bold text-white">2026-05-01</p>
        </div>
      </div>

      <div className="space-y-3">
        {items.map(i => <ComplianceItem key={i.id} item={i} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default ExecutiveCompliance