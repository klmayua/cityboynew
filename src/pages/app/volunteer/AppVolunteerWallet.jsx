import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { 
  Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, 
  CreditCard, Gift, History, ChevronRight
} from 'lucide-react'

function BalanceCard({ label, value, icon: Icon, color }) {
  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm">{label}</p>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  )
}

function AppVolunteerWallet() {
  return (
    <CityBoyOSShell role="volunteer" title="Wallet">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">My Wallet</h1>
        <p className="text-gray-400">Rewards and points balance</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <BalanceCard label="Total Earned" value="12,450 pts" icon={TrendingUp} color="text-emerald-400" />
        <BalanceCard label="Available" value="8,200 pts" icon={Wallet} color="text-[#D4AF37]" />
        <BalanceCard label="This Month" value="+1,250 pts" icon={ArrowUpRight} color="text-emerald-400" />
        <BalanceCard label="Lifetime" value="45,000 pts" icon={Gift} color="text-purple-400" />
      </div>

      <div className="glass-dark rounded-xl p-5 border border-white/10">
        <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              <div><p className="text-white text-sm">Task Completed</p><p className="text-gray-500 text-xs">+500 pts</p></div>
            </div>
            <span className="text-gray-500 text-xs">2h ago</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              <div><p className="text-white text-sm">Referral Bonus</p><p className="text-gray-500 text-xs">+250 pts</p></div>
            </div>
            <span className="text-gray-500 text-xs">1d ago</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <Gift className="w-4 h-4 text-purple-400" />
              <div><p className="text-white text-sm">Badge Earned</p><p className="text-gray-500 text-xs">Community Hero</p></div>
            </div>
            <span className="text-gray-500 text-xs">3d ago</span>
          </div>
        </div>
      </div>
    </CityBoyOSShell>
  )
}

export default AppVolunteerWallet