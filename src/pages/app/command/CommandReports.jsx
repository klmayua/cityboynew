import { useCommandStore } from '../../../store/commandStore'
import CommandShell from '../../../layouts/CommandShell'
import { FileText, Download } from 'lucide-react'

export default function CommandReports() {
  const { reports } = useCommandStore()

  return (
    <CommandShell title="Reports" subtitle="Generated reports and analytics" variant="reports">
      <div 
        className="rounded-3xl border border-white/[0.08] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(11,22,40,0.9) 0%, rgba(16,32,56,0.7) 100%)',
        }}
      >
        <table className="w-full">
          <thead className="border-b border-white/[0.08]">
            <tr>
              <th className="text-left text-white/[0.50] text-xs font-semibold uppercase tracking-[0.12em] px-6 py-4">Report</th>
              <th className="text-left text-white/[0.50] text-xs font-semibold uppercase tracking-[0.12em] px-6 py-4">Author</th>
              <th className="text-left text-white/[0.50] text-xs font-semibold uppercase tracking-[0.12em] px-6 py-4">Date</th>
              <th className="text-right text-white/[0.50] text-xs font-semibold uppercase tracking-[0.12em] px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-gold" />
                    <span className="text-white font-medium">{report.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-white/50">{report.author}</td>
                <td className="px-6 py-4 text-white/50">{report.date}</td>
                <td className="px-6 py-4 text-right">
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 border border-gold/20 text-gold rounded-lg hover:bg-gold/20 transition-all text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CommandShell>
  )
}