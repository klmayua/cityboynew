import React from 'react'

const trustStats = [
  { value: '₦2.4B', label: 'Total Raised', change: '+18%', highlight: true },
  { value: '324', label: 'Projects Delivered', change: '+56', highlight: true },
  { value: '₦2.2B', label: 'Funds Deployed', change: '92%', highlight: false },
  { value: '94%', label: 'Trust Score', change: 'Industry Best', highlight: false },
]

const projects = [
  { name: 'Kano School Renovation Phase II', state: 'Kano', amount: '₦24.5M', status: 'completed', date: 'Apr 2026', beneficiaries: '5,000 students' },
  { name: 'Lagos Medical Outreach', state: 'Lagos', amount: '₦12.8M', status: 'completed', date: 'Mar 2026', beneficiaries: '12,000 patients' },
  { name: 'Abuja Youth Center', state: 'Abuja', amount: '₦18.2M', status: 'in_progress', date: 'Apr 2026', beneficiaries: '2,500 youth' },
  { name: 'PHC Solar Installation', state: 'Rivers', amount: '₦15.6M', status: 'completed', date: 'Feb 2026', beneficiaries: '25,000 patients' },
]

const reports = ['2025 Annual Report', 'Q4 2025 Report', '2024 Annual Report', 'Audit Certificate 2025']

export default function Transparency() {
  return (
    <div className="min-h-screen bg-[#FAF8F2]">
      {/* Header */}
      <section className="py-16 bg-[#003153]">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold mb-4">
            <span>★</span> PUBLIC TRUST
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Transparency Portal</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Every naira tracked. Every project verified. Every impact measured.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-8 -mt-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className={`font-data text-3xl font-bold ${stat.highlight ? 'text-[#D4AF37]' : 'text-[#003153]'}`}>
                  {stat.value}
                </div>
                <div className="text-[#5B6B7A] text-sm mt-1">{stat.label}</div>
                <div className="text-[#0E9F6E] text-xs mt-1">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Ledger */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#003153] mb-6">Public Ledger</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#003153] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Project</th>
                    <th className="text-left p-4 font-semibold">State</th>
                    <th className="text-left p-4 font-semibold">Amount</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0">
                      <td className="p-4">
                        <div className="font-medium text-[#003153]">{project.name}</div>
                        <div className="text-xs text-[#5B6B7A]">{project.beneficiaries}</div>
                      </td>
                      <td className="p-4 text-[#5B6B7A]">{project.state}</td>
                      <td className="p-4 font-bold text-[#003153]">{project.amount}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {project.status === 'completed' ? '✓ Completed' : 'In Progress'}
                        </span>
                      </td>
                      <td className="p-4 text-[#5B6B7A]">{project.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-12 pb-24">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#003153] mb-6">Reports & Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📄</span>
                </div>
                <div>
                  <div className="font-medium text-[#003153]">{report}</div>
                  <div className="text-xs text-[#5B6B7A]">Download PDF</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}