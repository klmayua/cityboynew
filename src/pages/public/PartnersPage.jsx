import { Link } from 'react-router-dom'
import { useAnalytics } from '../../analytics'
import { Handshake, Payments, Groups } from '@material-symbols-svg/react/outlined'

export default function PartnersPage() {
  const { trackPartnerClick } = useAnalytics()
  return (
    <>
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-[80px] max-w-[1440px]">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Strategic Partners</span>
            <h1 className="font-h1 text-5xl text-white mb-6">Partner With Us</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Institutional partners, donors, and NGOs driving national impact together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
<Handshake className="w-12 h-12 text-secondary mb-4" />
            </div>
            <div className="glass-card rounded-3xl p-8" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <Payments className="w-12 h-12 text-secondary mb-4" />
            </div>
            <div className="glass-card rounded-3xl p-8" style={{background: 'rgba(0, 49, 83, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
              <Groups className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-h3 text-xl text-white mb-3">Community Partners</h3>
              <p className="text-on-surface-variant">Local chapters and grassroots organizations.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/donate" onClick={trackPartnerClick} className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all">Become a Partner</Link>
          </div>
        </div>
      </div>
    </>
  )
}