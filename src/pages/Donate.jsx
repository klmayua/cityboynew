import React, { useState } from 'react'

const tiers = [
  { name: 'Bronze', amount: '₦5,000', color: 'from-orange-700' },
  { name: 'Silver', amount: '₦25,000', color: 'from-gray-400' },
  { name: 'Gold', amount: '₦100,000', color: 'from-yellow-500', featured: true },
  { name: 'Platinum', amount: '₦500,000+', color: 'from-purple-500' },
]

const recentDonations = [
  { name: 'Anonymous', amount: '₦50,000', message: 'Nigeria go be great!', time: '2 min ago' },
  { name: 'Sarah M.', amount: '₦25,000', message: 'For the children', time: '15 min ago' },
  { name: 'Anonymous', amount: '₦100,000', message: 'Keep building!', time: '1 hour ago' },
  { name: 'Tunde A.', amount: '₦10,000', message: 'Proud to contribute', time: '2 hours ago' },
]

export default function Donate() {
  const [amount, setAmount] = useState('')
  
  const amounts = ['₦1,000', '₦5,000', '₦10,000', '₦25,000', '₦50,000']
  
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-[#001B2E] via-[#003153] to-[#001B2E]">
      <div className="container py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-4">
            ★ Power Impact
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Fund the <span className="text-gradient">Future</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Your contribution directly funds projects that transform communities across Nigeria.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Donation Form */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Select Amount</h2>
            
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`py-3 rounded-xl border text-center transition-all ${
                    amount === amt
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                      : 'border-white/10 text-white hover:border-[#D4AF37]/50'
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>
            
            <div className="mb-6">
              <label className="block text-white/80 text-sm mb-2">Or enter custom amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">₦</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="input pl-8"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <h3 className="text-white font-medium">Select Fund</h3>
              {[
                { name: 'General Fund', desc: 'Where needed most' },
                { name: 'Education', desc: 'Schools & learning' },
                { name: 'Healthcare', desc: 'Medical outreach' },
                { name: 'Infrastructure', desc: 'Community projects' },
              ].map((fund) => (
                <label key={fund.name} className="flex items-center gap-4 p-4 border border-white/10 rounded-xl cursor-pointer hover:border-[#D4AF37] transition-colors">
                  <input type="radio" name="fund" className="w-4 h-4" />
                  <div>
                    <p className="text-white font-medium">{fund.name}</p>
                    <p className="text-white/50 text-xs">{fund.desc}</p>
                  </div>
                </label>
              ))}
            </div>
            
            <button className="btn btn-gold w-full text-lg py-4">Proceed to Payment</button>
          </div>
          
          {/* Trust & Recent */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Trust & Transparency</h3>
              <ul className="space-y-2">
                {['100% of donations tracked', 'Verified project completion', 'Quarterly public reports', 'Tax deduction available'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="text-[#0E9F6E]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Recent Donations</h3>
              <div className="space-y-3">
                {recentDonations.map((donation, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-xl">
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium text-sm">{donation.name}</span>
                      <span className="text-[#D4AF37] font-bold">{donation.amount}</span>
                    </div>
                    <p className="text-white/50 text-xs italic">"{donation.message}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}