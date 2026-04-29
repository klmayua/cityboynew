import React, { useState } from 'react'

const amounts = ['₦1,000', '₦5,000', '₦10,000', '₦25,000', '₦50,000']

const funds = [
  { name: 'General Fund', desc: 'Where needed most', icon: '🎯' },
  { name: 'Education', desc: 'Schools & learning', icon: '📚' },
  { name: 'Healthcare', desc: 'Medical outreach', icon: '🏥' },
  { name: 'Infrastructure', desc: 'Community projects', icon: '🏗️' },
]

const recentDonations = [
  { name: 'Anonymous', amount: '₦50,000', message: 'Nigeria go be great!', time: '2 min ago' },
  { name: 'Sarah M.', amount: '₦25,000', message: 'For the children', time: '15 min ago' },
  { name: 'Anonymous', amount: '₦100,000', message: 'Keep building!', time: '1 hour ago' },
  { name: 'Tunde A.', amount: '₦10,000', message: 'Proud to contribute', time: '2 hours ago' },
]

const trustItems = [
  '100% of donations tracked',
  'Verified project completion',
  'Quarterly public reports',
  'Tax deduction available',
]

export default function Donate() {
  const [amount, setAmount] = useState('')
  const [selectedFund, setSelectedFund] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001B2E] via-[#003153] to-[#001B2E]">
      <div className="container py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold mb-4">
            <span>★</span> Power Impact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fund the <span className="text-gradient-gold">Future</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Your contribution directly funds projects that transform communities across Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Donation Form */}
          <div className="lg:col-span-3">
            <div className="glass card p-8">
              <h2 className="text-xl font-bold text-white mb-6">Select Amount</h2>
              
              {/* Quick Amounts */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAmount(amt)}
                    className={`py-3 rounded-xl border text-center font-medium transition-all ${
                      amount === amt
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                        : 'border-white/10 text-white hover:border-[#D4AF37]/50'
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
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

              {/* Fund Selection */}
              <div className="mb-8">
                <h3 className="text-white font-medium mb-4">Select Fund</h3>
                <div className="space-y-3">
                  {funds.map((fund) => (
                    <button
                      key={fund.name}
                      type="button"
                      onClick={() => setSelectedFund(fund.name)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        selectedFund === fund.name
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                          : 'border-white/10 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <span className="text-2xl">{fund.icon}</span>
                      <div className="text-left">
                        <div className="text-white font-medium">{fund.name}</div>
                        <div className="text-white/50 text-xs">{fund.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button className="btn-gold w-full text-lg py-4">
                Proceed to Payment
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trust Card */}
            <div className="glass card p-6">
              <h3 className="font-bold text-white mb-4">Trust & Transparency</h3>
              <ul className="space-y-3">
                {trustItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="text-[#0E9F6E]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Donations */}
            <div className="glass card p-6">
              <h3 className="font-bold text-white mb-4">Recent Donations</h3>
              <div className="space-y-3">
                {recentDonations.map((donation, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-xl">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-white font-medium text-sm">{donation.name}</span>
                      <span className="text-[#D4AF37] font-bold">{donation.amount}</span>
                    </div>
                    <p className="text-white/50 text-xs italic">"{donation.message}"</p>
                    <p className="text-white/30 text-xs mt-1">{donation.time}</p>
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