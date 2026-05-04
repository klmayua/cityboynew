import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useCapitalStore } from '../../../store/capitalStore'
import { 
  FileText, Download, Search, Calendar, ChevronRight
} from 'lucide-react'

function StatementRow({ statement }) {
  return (
    <button className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
      <div className="flex items-center gap-3">
        <FileText className="w-5 h-5 text-[#D4AF37]" />
        <div>
          <p className="text-white font-medium">{statement.period}</p>
          <p className="text-gray-400 text-sm">{statement.date}</p>
        </div>
      </div>
      <Download className="w-4 h-4 text-gray-400" />
    </button>
  )
}

function WalletStatements() {
  const statements = [
    { id: 1, period: 'April 2026', date: '2026-05-01' },
    { id: 2, period: 'March 2026', date: '2026-04-01' },
    { id: 3, period: 'February 2026', date: '2026-03-01' },
    { id: 4, period: 'January 2026', date: '2026-02-01' },
  ]

  return (
    <CityBoyOSShell role="volunteer" title="Statements">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Statements</h1>
        <p className="text-gray-400">Download monthly statements</p>
      </div>

      <div className="space-y-3">
        {statements.map(s => <StatementRow key={s.id} statement={s} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default WalletStatements