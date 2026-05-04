import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { 
  FileText, Users, TrendingUp, Calendar, ChevronRight,
  Download, BarChart3
} from 'lucide-react'

function ReportRow({ report }) {
  return (
    <button className="cursor-pointer w-full text-left flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="flex items-center gap-3">
        <FileText className="w-5 h-5 text-[#D4AF37]" />
        <div>
          <p className="text-white font-medium">{report.title}</p>
          <p className="text-gray-400 text-sm">{report.date}</p>
        </div>
      </div>
      <Download className="w-4 h-4 text-gray-400" />
    </button>
  )
}

function ExecutiveReports() {
  const reports = [
    { id: 1, title: 'Q1 2026 Executive Summary', date: '2026-04-01' },
    { id: 2, title: 'Chapter Performance Report', date: '2026-03-15' },
    { id: 3, title: 'Treasury Audit', date: '2026-02-28' },
    { id: 4, title: 'Volunteer Analytics', date: '2026-02-01' },
  ]

  return (
    <CityBoyOSShell role="executive" title="Reports">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Executive Reports</h1>
        <p className="text-gray-400">Board and stakeholder reports</p>
      </div>

      <div className="space-y-3">
        {reports.map(r => <ReportRow key={r.id} report={r} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default ExecutiveReports