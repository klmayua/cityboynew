import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

export default function TrustPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-[80px] max-w-[1440px]">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Trust Framework</span>
            <h1 className="font-h1 text-5xl text-white mb-6">Built On Trust</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Every contribution is visible. Every project is accountable. Every outcome is measured.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">verified</span>
              <h3 className="font-h3 text-xl text-white mb-3">Public Transparency</h3>
              <p className="text-on-surface-variant">All funding flows visible on the public ledger with real-time tracking.</p>
            </div>
            <div className="glass-card rounded-3xl p-8" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">fact_check</span>
              <h3 className="font-h3 text-xl text-white mb-3">Third-Party Audit</h3>
              <p className="text-on-surface-variant">Independent audit partners verify every milestone and financial flow.</p>
            </div>
            <div className="glass-card rounded-3xl p-8" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">account_balance</span>
              <h3 className="font-h3 text-xl text-white mb-3">Governance Board</h3>
              <p className="text-on-surface-variant">Civic oversight and institutional accountability at every level.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/join" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all">Join The Arena</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}