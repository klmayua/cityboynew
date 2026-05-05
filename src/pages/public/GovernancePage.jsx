import { Link } from 'react-router-dom'

export default function GovernancePage() {
  return (
    <>
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-[80px] max-w-[1440px]">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Governance</span>
            <h1 className="font-h1 text-5xl text-white mb-6">Civic Oversight</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Public accountability mechanisms and institutional governance standards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-8" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <h3 className="font-h3 text-xl text-white mb-3">Board Composition</h3>
              <p className="text-on-surface-variant">Civic representatives, institutional partners, and community voices in balanced governance.</p>
            </div>
            <div className="glass-card rounded-3xl p-8" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <h3 className="font-h3 text-xl text-white mb-3">Audit Standards</h3>
              <p className="text-on-surface-variant">Quarterly third-party audits with public reporting and verification.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/transparency" className="text-secondary font-label-caps hover:text-secondary/80">View Transparency Ledger</Link>
          </div>
        </div>
      </div>
    </>
  )
}