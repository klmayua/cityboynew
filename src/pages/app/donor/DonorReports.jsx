import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { 
  Map, DollarSign, TrendingUp, FileText, ChevronRight,
  Download, Calendar, Filter
} from 'lucide-react'

function ReportCard({ report }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all cursor-pointer">
      <div className="flex items-center gap-3">
        <FileText className="w-5 h-5 text-[#D4AF37]" />
        <div>
          <p className="text-white font-medium">{report.title}</p>
          <p className="text-gray-400 text-sm">{report.date}</p>
        </div>
      </div>
      <button className="cursor-pointer p-2 hover:bg-white/10 rounded-lg">
        <Download className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  )
}

function DonorReports() {
  const { transactions } = useCapitalStore()
  const { missions } = useMissionStore()
  
  const reports = [
    { id: 1, title: 'Q1 2026 Giving Summary', date: '2026-03-31' },
    { id: 2, title: 'Impact Report - Lagos Projects', date: '2026-04-15' },
    { id: 3, title: 'Tax Receipt 2025', date: '2026-01-15' },
  ]

  return (
    <CityBoyOSShell role="donor" title="Reports">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Reports</h1>
        <p className="text-gray-400">Download your giving statements</p>
      </div>

      <div className="space-y-3">
        {reports.map(report => <ReportCard key={report.id} report={report} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default DonorReports