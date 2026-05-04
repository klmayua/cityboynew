import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { 
  Gift, Star, Zap, Award, ChevronRight, Lock
} from 'lucide-react'

function BadgeCard({ badge }) {
  const isUnlocked = badge.earned
  
  return (
    <button className={`cursor-pointer w-full text-left p-4 rounded-xl border transition-all ${
      isUnlocked ? 'bg-white/5 border-white/10 hover:border-[#D4AF37]/30' : 'bg-white/5 border-white/5 opacity-50'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isUnlocked ? 'bg-[#D4AF37]/20' : 'bg-gray-500/20'
          }`}>
            <Award className={`w-5 h-5 ${isUnlocked ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
          </div>
          <div>
            <p className={`font-medium ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>{badge.name}</p>
            <p className="text-gray-400 text-sm">{badge.description}</p>
          </div>
        </div>
        {isUnlocked ? (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        ) : (
          <Lock className="w-4 h-4 text-gray-500" />
        )}
      </div>
    </button>
  )
}

function AppVolunteerRewards() {
  const badges = [
    { id: 1, name: 'First Task', description: 'Complete your first task', earned: true },
    { id: 2, name: 'Community Hero', description: 'Complete 100 tasks', earned: true },
    { id: 3, name: 'Champion', description: 'Volunteer 500 hours', earned: false },
    { id: 4, name: 'Mentor', description: 'Train 10 new volunteers', earned: false },
    { id: 5, name: 'Fundraiser', description: 'Raise ₦1M for projects', earned: false },
  ]

  return (
    <CityBoyOSShell role="volunteer" title="Rewards">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Rewards</h1>
        <p className="text-gray-400">Earn badges and achievements</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10 text-center">
          <Gift className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{badges.filter(b => b.earned).length}</p>
          <p className="text-gray-400 text-xs">Earned</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10 text-center">
          <Zap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{badges.filter(b => !b.earned).length}</p>
          <p className="text-gray-400 text-xs">Locked</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10 text-center">
          <Star className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">2</p>
          <p className="text-gray-400 text-xs">In Progress</p>
        </div>
      </div>

      <div className="space-y-3">
        {badges.map(badge => <BadgeCard key={badge.id} badge={badge} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default AppVolunteerRewards