import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { 
  Gift, Star, Award, Zap, ChevronRight, Search
} from 'lucide-react'

function RewardCard({ reward }) {
  return (
    <button className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Gift className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="text-white font-medium">{reward.name}</p>
            <p className="text-gray-400 text-sm">{reward.description}</p>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
      <div className="mt-2 flex items-center gap-2">
        <Award className="w-3 h-3 text-[#D4AF37]" />
        <span className="text-[#D4AF37] text-sm">{reward.points} pts</span>
      </div>
    </button>
  )
}

function WalletRewards() {
  const rewards = [
    { id: 1, name: '₦5,000 Gift Card', description: 'Redeem for shopping', points: 5000 },
    { id: 2, name: 'Data Bundle', description: '1GB data bundle', points: 2000 },
    { id: 3, name: 'Merch Pack', description: 'CityBoy OS t-shirt and cap', points: 3500 },
    { id: 4, name: 'Event VIP', description: 'VIP access to events', points: 10000 },
  ]

  return (
    <CityBoyOSShell role="volunteer" title="Rewards">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Rewards Store</h1>
        <p className="text-gray-400">Redeem your points</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10 text-center">
          <p className="text-gray-400 text-xs">Available Points</p>
          <p className="text-2xl font-bold text-[#D4AF37]">8,200</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10 text-center">
          <p className="text-gray-400 text-xs">Lifetime Earned</p>
          <p className="text-2xl font-bold text-white">45,000</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10 text-center">
          <p className="text-gray-400 text-xs">Rewards Claimed</p>
          <p className="text-2xl font-bold text-white">3</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {rewards.map(r => <RewardCard key={r.id} reward={r} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default WalletRewards