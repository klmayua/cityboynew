import React from 'react'

const projects = [
  { name: 'Kano School Renovation', state: 'Kano', amount: '₦24.5M', status: 'completed', date: 'Apr 2026' },
  { name: 'Lagos Medical Outreach', state: 'Lagos', amount: '₦12.8M', status: 'completed', date: 'Mar 2026' },
  { name: 'Abuja Youth Center', state: 'Abuja', amount: '₦18.2M', status: 'in_progress', date: 'Apr 2026' },
  { name: 'PHC Solar Installation', state: 'Rivers', amount: '₦15.6M', status: 'completed', date: 'Feb 2026' },
]

const reports = ['2025 Annual Report', 'Q4 2025 Report', '2024 Annual Report', 'Audit Certificate']

export default function Transparency() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAF8F2]">
      <section className="py-16 bg-[#003153]">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-4">
            ★ PUBLIC TRUST
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Transparency Portal</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Every naira tracked. Every project verified. Every impact measured.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 -mt-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '₦2.4B', label: 'Total Raised', change: '+18%' },
              { value: '324', label: 'Projects Delivered', change: '+56' },
              { value: '₦2.2B', label: 'Funds Deployed', change: '92%' },
              { value: '94%', label: 'Trust Score', change: 'Best' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="font-data text-3xl font-bold text-[#003153]">{stat.value}</div>
                <div className="text-[#5B6B7A] text-sm mt-1">{stat.label}</div>
                <div className="text-[#0E9F6E] text-xs mt-1">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Table */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#003153] mb-6">Public Ledger</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#003153] text-white">
                <tr>
                  <th className="text-left p-4">Project</th>
                  <th className="text-left p-4">State</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="p-4 font-medium text-[#003153]">{project.name}</td>
                    <td className="p-4 text-[#5B6B7A]">{project.state}</td>
                    <td className="p-4 font-bold text-[#003153]">{project.amount}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
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
      </section>

      {/* Reports */}
      <section className="py-12 pb-20">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#003153] mb-6">Reports & Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reports.map((report, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow flex items-center gap-3 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                  <span className="text-[#D4AF37]">📄</span>
                </div>
                <div>
                  <div className="font-medium text-[#003153]">{report}</div>
                  <div className="text-[#5B6B7A] text-xs">Download PDF</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}