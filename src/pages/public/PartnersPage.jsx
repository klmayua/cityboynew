import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { useAnalytics } from '../../analytics'

export default function PartnersPage() {
  const { trackPartnerClick } = useAnalytics()
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-[80px] max-w-[1440px]">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Strategic Partners</span>
            <h1 className="font-h1 text-5xl text-white mb-6">Partner With Us</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Institutional partners, donors, and NGOs driving national impact together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <span className="material-symbols-outlined text-5xl text-secondary mb-4">handshake</span>
              <h3 className="font-h3 text-xl text-white mb-3">Institutional Partners</h3>
              <p className="text-on-surface-variant">NGOs, civic bodies, and strategic collaborators.</p>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <span className="material-symbols-outlined text-5xl text-secondary mb-4">payments</span>
              <h3 className="font-h3 text-xl text-white mb-3">Funding Partners</h3>
              <p className="text-on-surface-variant">Donors, diaspora capital, and sponsors.</p>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <span className="material-symbols-outlined text-5xl text-secondary mb-4">groups</span>
              <h3 className="font-h3 text-xl text-white mb-3">Community Partners</h3>
              <p className="text-on-surface-variant">Local chapters and grassroots organizations.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/donate" onClick={trackPartnerClick} className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all">Become a Partner</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}