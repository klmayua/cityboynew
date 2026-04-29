import { Link } from 'react-router-dom'
import { DollarSign, Award, Users, Shield, MapPin, FileText, Download, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

const metrics = [
  { icon: DollarSign, value: '₦2.4B', label: 'Total Raised', change: '+18%', color: 'gold' },
  { icon: Award, value: '324', label: 'Projects Delivered', change: '+56', color: 'signal-green' },
  { icon: DollarSign, value: '₦2.2B', label: 'Funds Deployed', change: '92%', color: 'prussian' },
  { icon: Users, value: '12,847', label: 'Active Volunteers', change: '+847', color: 'gold' },
]

const projectList = [
  { id: 1, name: 'Kano School Renovation Phase II', state: 'Kano', amount: '₦24.5M', status: 'completed', beneficiaries: '5,000 students', date: 'Apr 2026' },
  { id: 2, name: 'Lagos Medical Outreach', state: 'Lagos', amount: '₦12.8M', status: 'completed', beneficiaries: '12,000 patients', date: 'Mar 2026' },
  { id: 3, name: 'Abuja Skill Acquisition Center', state: 'Abuja', amount: '₦18.2M', status: 'in_progress', beneficiaries: '2,500 youth', date: 'Apr 2026' },
  { id: 4, name: 'PHC Solar Installation', state: 'Rivers', amount: '₦15.6M', status: 'completed', beneficiaries: '25,000 patients', date: 'Feb 2026' },
  { id: 5, name: 'Kaduna Water Project', state: 'Kaduna', amount: '₦32.1M', status: 'in_progress', beneficiaries: '15,000 households', date: 'Apr 2026' },
  { id: 6, name: 'Enugu Youth Empowerment', state: 'Enugu', amount: '₦8.9M', status: 'completed', beneficiaries: '1,200 youth', date: 'Jan 2026' },
]

const states = [
  { name: 'Lagos', projects: 45, funds: '₦420M', active: true },
  { name: 'Kano', projects: 38, funds: '₦280M', active: true },
  { name: 'Rivers', projects: 32, funds: '₦195M', active: true },
  { name: ' Abuja', projects: 28, funds: '₦310M', active: true },
  { name: 'Kaduna', projects: 24, funds: '₦180M', active: true },
]

const reports = [
  { title: '2025 Annual Report', date: 'Jan 2026', size: '4.2 MB' },
  { title: 'Q4 2025 Report', date: 'Jan 2026', size: '2.1 MB' },
  { title: '2024 Annual Report', date: 'Jan 2025', size: '3.8 MB' },
  { title: 'Audit Certificate 2025', date: 'Feb 2026', size: '1.2 MB' },
]

export default function TransparencyPage() {
  return (
    <div className="min-h-screen pt-20 bg-soft-ivory">
      <section className="py-16 bg-prussian">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              PUBLIC TRUST
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Transparency Portal
            </h1>
            <p className="text-lg text-soft-ivory/70 max-w-2xl mx-auto">
              Every naira tracked. Every project verified. Every impact measured.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className={`w-6 h-6 text-${metric.color}`} />
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${metric.color}/10 text-${metric.color}`}>
                    {metric.change}
                  </span>
                </div>
                <p className="font-data text-3xl font-bold text-white">{metric.value}</p>
                <p className="text-sm text-soft-ivory/60">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-display text-2xl font-bold text-prussian-dark mb-6">Project Map</h2>
                <div className="aspect-[16/9] bg-cool-grey rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-prussian mx-auto mb-2" />
                    <p className="text-steel-muted">Interactive Nigeria Map</p>
                    <p className="text-sm text-steel-muted">Click any state to view projects</p>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {states.map((state) => (
                    <button
                      key={state.name}
                      className={`p-2 rounded-lg text-center transition-colors ${
                        state.active 
                          ? 'bg-signal-green/10 text-signal-green border border-signal-green/30' 
                          : 'bg-cool-grey text-steel-muted'
                      }`}
                    >
                      <p className="text-xs font-medium">{state.name}</p>
                      <p className="text-xs opacity-60">{state.projects}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl font-bold text-prussian-dark">Public Ledger</h2>
                  <select className="px-4 py-2 rounded-lg border border-cool-grey text-sm">
                    <option>All Projects</option>
                    <option>Completed</option>
                    <option>In Progress</option>
                  </select>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-cool-grey">
                        <th className="text-left py-3 text-sm font-semibold text-steel-muted">Project</th>
                        <th className="text-left py-3 text-sm font-semibold text-steel-muted">State</th>
                        <th className="text-left py-3 text-sm font-semibold text-steel-muted">Amount</th>
                        <th className="text-left py-3 text-sm font-semibold text-steel-muted">Status</th>
                        <th className="text-left py-3 text-sm font-semibold text-steel-muted">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projectList.map((project) => (
                        <tr key={project.id} className="border-b border-cool-grey last:border-0">
                          <td className="py-4">
                            <p className="font-medium text-prussian-dark">{project.name}</p>
                            <p className="text-xs text-steel-muted">{project.beneficiaries}</p>
                          </td>
                          <td className="py-4 text-sm text-prussian-dark">{project.state}</td>
                          <td className="py-4 font-data font-bold text-prussian-dark">{project.amount}</td>
                          <td className="py-4">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                              project.status === 'completed'
                                ? 'bg-signal-green/10 text-signal-green'
                                : 'bg-gold/10 text-gold'
                            }`}>
                              {project.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                              {project.status === 'completed' ? 'Completed' : 'In Progress'}
                            </span>
                          </td>
                          <td className="py-4 text-sm text-steel-muted">{project.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link to="/all-projects" className="mt-4 text-gold font-medium flex items-center gap-1 hover:underline">
                  View All Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-signal-green" />
                  <h3 className="font-display font-bold text-prussian-dark">Verified Impact</h3>
                </div>
                <p className="text-sm text-steel-muted mb-4">
                  All projects verified by independent third-party auditors
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-cool-grey rounded-lg">
                    <span className="text-sm text-prussian-dark">Trust Score</span>
                    <span className="font-bold text-signal-green">94.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-cool-grey rounded-lg">
                    <span className="text-sm text-prussian-dark">Verified Reports</span>
                    <span className="font-bold text-prussian-dark">156</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-cool-grey rounded-lg">
                    <span className="text-sm text-prussian-dark">Audit Status</span>
                    <span className="font-bold text-signal-green">Pass</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-display font-bold text-prussian-dark mb-4">Reports & Documents</h3>
                <div className="space-y-2">
                  {reports.map((report) => (
                    <a
                      key={report.title}
                      href="#"
                      className="flex items-center justify-between p-3 hover:bg-cool-grey rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-sm font-medium text-prussian-dark">{report.title}</p>
                          <p className="text-xs text-steel-muted">{report.date} • {report.size}</p>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-steel-muted" />
                    </a>
                  ))}
                </div>
                <Link to="/all-reports" className="mt-4 text-gold text-sm font-medium flex items-center gap-1 hover:underline">
                  All Reports <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-prussian to-prussian-dark rounded-2xl p-6">
                <h3 className="font-display font-bold text-white mb-2">Have Questions?</h3>
                <p className="text-sm text-soft-ivory/70 mb-4">
                  Contact our transparency team for detailed information.
                </p>
                <button className="w-full py-2 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-colors">
                  Contact Transparency Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}