import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Shield, TrendingUp, Users, ArrowRight, CheckCircle, Sparkles, Gift } from 'lucide-react'
import { useAnalytics } from '../analytics'

const donationTiers = [
  { name: 'Bronze', amount: '₦5,000', benefits: ['Digital Badge', 'Monthly Updates'], color: 'from-orange-700 to-orange-900' },
  { name: 'Silver', amount: '₦25,000', benefits: ['All Bronze benefits', 'Quarterly Report', 'Name on Site'], color: 'from-gray-300 to-gray-500' },
  { name: 'Gold', amount: '₦100,000', benefits: ['All Silver benefits', 'VIP Recognition', 'Annual Event Invite'], color: 'from-yellow-400 to-yellow-600', featured: true },
  { name: 'Platinum', amount: '₦500,000+', benefits: ['All Gold benefits', 'Founder Circle', 'Direct Access', 'Naming Rights'], color: 'from-purple-400 to-purple-700' },
]

const recentDonations = [
  { name: 'Anonymous', amount: '₦50,000', message: 'Nigeria go be great!', time: '2 min ago' },
  { name: 'Sarah M.', amount: '₦25,000', message: 'For the children', time: '15 min ago' },
  { name: 'Anonymous', amount: '₦100,000', message: 'Keep building!', time: '1 hour ago' },
  { name: 'Tunde A.', amount: '₦10,000', message: 'Proud to contribute', time: '2 hours ago' },
]

export default function DonatePage() {
  const [amount, setAmount] = useState('')
  const { trackDonationStart } = useAnalytics()
  const [customAmount, setCustomAmount] = useState('')

  const quickAmounts = ['₦1,000', '₦5,000', '₦10,000', '₦25,000', '₦50,000']

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-prussian-dark via-prussian to-prussian-dark">
      <div className="max-w-[1320px] mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            POWER IMPACT
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Fund the <span className="text-gradient-gold">Future</span>
          </h1>
          <p className="text-lg text-soft-ivory/70 max-w-2xl mx-auto">
            Your contribution directly funds projects that transform communities across Nigeria. 
            Every naira is tracked, every impact is measured.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="glass-card rounded-[32px] p-8">
              <h2 className="font-display text-2xl font-bold text-white mb-6">Select Amount</h2>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setAmount(amt); trackDonationStart(amt, 'general_fund'); }}
                    className={`py-3 rounded-xl border text-center transition-all ${
                      amount === amt
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-white/10 text-soft-ivory hover:border-gold/50'
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-soft-ivory/80 mb-2">Or enter custom amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-ivory/60">₦</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="input-field pl-8"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="font-medium text-white">Select Fund</h3>
                {[
                  { name: 'General Fund', description: 'Where needed most', icon: '🎯' },
                  { name: 'Education', description: 'Schools & learning', icon: '📚' },
                  { name: 'Healthcare', description: 'Medical outreach', icon: '🏥' },
                  { name: 'Infrastructure', description: 'Community projects', icon: '🏗️' },
                ].map((fund) => (
                  <label
                    key={fund.name}
                    className="flex items-center gap-4 p-4 border border-white/10 rounded-xl cursor-pointer hover:border-gold/50 transition-colors"
                  >
                    <input type="radio" name="fund" className="w-4 h-4" />
                    <span className="text-xl">{fund.icon}</span>
                    <div>
                      <p className="font-medium text-white">{fund.name}</p>
                      <p className="text-xs text-soft-ivory/60">{fund.description}</p>
                    </div>
                  </label>
                ))}
              </div>

              <button className="btn-gold w-full text-lg py-4">
                Proceed to Payment
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-signal-green" />
                <h3 className="font-display font-bold text-white">Trust & Transparency</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '100% of donations tracked',
                  'Verified project completion',
                  'Quarterly public reports',
                  'Tax deduction available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-soft-ivory/70">
                    <CheckCircle className="w-4 h-4 text-signal-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 bg-gradient-to-br from-gold/20 to-transparent border-gold/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="font-display font-bold text-white">Donation Tiers</h3>
              </div>
              <div className="space-y-3">
                {donationTiers.slice(0, 3).map((tier) => (
                  <div key={tier.name} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                    <div>
                      <p className="font-medium text-white text-sm">{tier.name}</p>
                      <p className="text-xs text-soft-ivory/60">{tier.benefits[0]}</p>
                    </div>
                    <span className="text-gold font-bold">{tier.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-display font-bold text-white mb-4">Recent Donations</h3>
              <div className="space-y-3">
                {recentDonations.map((donation, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">{donation.name}</span>
                      <span className="text-gold font-bold">{donation.amount}</span>
                    </div>
                    <p className="text-xs text-soft-ivory/60 italic">"{donation.message}"</p>
                    <p className="text-xs text-soft-ivory/40 mt-1">{donation.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-soft-ivory/60 mb-4">Prefer to give monthly?</p>
          <Link to="/donate/monthly" className="btn-ghost inline-flex items-center gap-2">
            Set Up Monthly Giving <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}