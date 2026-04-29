import { Link } from 'react-router-dom'
import { Shield, Award, CheckCircle, Users, DollarSign, MapPin, FileText, ArrowRight } from 'lucide-react'

const trustMetrics = [
  { icon: DollarSign, value: '₦2.4B', label: 'Total Raised', sub: '100% accounted' },
  { icon: Award, value: '324', label: 'Projects Delivered', sub: '92% completed' },
  { icon: Users, value: '12K+', label: 'Verified Volunteers', sub: 'Background checked' },
  { icon: Shield, value: '94%', label: 'Trust Score', sub: 'Industry leading' },
]

const partners = [
  'Lagos State Government', 'Nigerian Army', 'UNICEF', 'World Bank', 
  'First Bank', 'GTBank', 'Nigerian Breweries', 'MTN Foundation'
]

export default function TrustLayer() {
  return (
    <section className="py-20 bg-soft-ivory">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-prussian/10 text-prussian text-sm font-medium mb-4">
            PUBLIC TRUST
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-prussian-dark mb-4">
            Transparency is Our Currency
          </h2>
          <p className="text-lg text-steel-muted max-w-2xl mx-auto">
            Every naira tracked. Every project verified. Every impact measured.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-cool-grey">
              <div className="w-12 h-12 rounded-xl bg-prussian/10 flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-prussian" />
              </div>
              <p className="font-data text-3xl font-bold text-prussian-dark">{metric.value}</p>
              <p className="font-medium text-prussian-dark">{metric.label}</p>
              <p className="text-sm text-steel-muted">{metric.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-bold text-prussian-dark">Public Ledger</h3>
              <Link to="/transparency" className="text-gold font-medium flex items-center gap-1 hover:underline">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { project: 'Kano School Renovation', amount: '₦24.5M', status: 'Completed', date: 'Apr 2026' },
                { project: 'Lagos Medical Outreach', amount: '₦12.8M', status: 'Completed', date: 'Mar 2026' },
                { project: 'Abuja Youth Center', amount: '₦8.2M', status: 'In Progress', date: 'Apr 2026' },
                { project: 'PHC Solar Installation', amount: '₦15.6M', status: 'Completed', date: 'Feb 2026' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-cool-grey last:border-0">
                  <div>
                    <p className="font-medium text-prussian-dark">{item.project}</p>
                    <p className="text-sm text-steel-muted">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-data font-bold text-prussian-dark">{item.amount}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.status === 'Completed' 
                        ? 'bg-signal-green/10 text-signal-green' 
                        : 'bg-gold/10 text-gold'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-signal-green" />
              <h3 className="font-display text-xl font-bold text-prussian-dark">Verified Impact</h3>
            </div>
            <p className="text-sm text-steel-muted mb-6">
              All projects verified by independent third-party auditors
            </p>
            <div className="space-y-3">
              {['2025 Annual Report', '2024 Annual Report', 'Q1 2026 Report', 'Audit Certificate'].map((doc) => (
                <a 
                  key={doc} 
                  href="#" 
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-cool-grey transition-colors"
                >
                  <FileText className="w-5 h-5 text-gold" />
                  <span className="text-sm text-prussian-dark">{doc}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-steel-muted mb-4">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner) => (
              <span key={partner} className="text-lg font-semibold text-prussian">{partner}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}