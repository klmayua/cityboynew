import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { FileText, FolderOpen, Download, Search } from 'lucide-react'

export default function LeadershipDocuments() {
  const documents = [
    { id: 1, name: 'Annual Report 2025', type: 'PDF', size: '4.2MB', date: '2026-01-15' },
    { id: 2, name: 'Policy Manual', type: 'PDF', size: '2.1MB', date: '2025-12-01' },
    { id: 3, name: 'Org Chart', type: 'PNG', size: '1.8MB', date: '2025-11-15' },
    { id: 4, name: 'Budget Q4', type: 'XLSX', size: '890KB', date: '2025-10-30' },
    { id: 5, name: 'Strategic Plan', type: 'PDF', size: '5.4MB', date: '2025-09-01' },
  ]

  return (
    <CityBoyOSShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Documents</h1>
        <p className="text-gray-400 mb-6">Central document repository</p>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500"
            />
          </div>
          <button className="cursor-pointer px-4 py-2 bg-[#D4AF37] text-black rounded-lg font-medium flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Upload
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map(doc => (
            <div key={doc.id} className="glass rounded-xl p-4 border border-white/10 hover:border-white/20">
              <div className="flex items-start justify-between mb-3">
                <FolderOpen className="w-8 h-8 text-[#D4AF37]" />
                <span className="text-xs text-gray-500">{doc.type}</span>
              </div>
              <h4 className="text-white font-medium mb-1">{doc.name}</h4>
              <p className="text-gray-500 text-sm mb-3">{doc.size} • {doc.date}</p>
              <button className="cursor-pointer flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </CityBoyOSShell>
  )
}