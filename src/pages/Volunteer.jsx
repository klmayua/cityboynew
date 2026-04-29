import React from 'react'

const tasks = [
  { title: 'Lagos Community Outreach', time: '9:00 AM', points: 150, location: 'Lagos Island' },
  { title: 'Social Media Campaign', time: '11:00 AM', points: 75, location: 'Remote' },
  { title: 'Youth Training Session', time: '2:00 PM', points: 200, location: 'Abuja' },
]

const leaderboard = [
  { rank: 1, chapter: 'Port Harcourt', points: '28.5K', members: 892 },
  { rank: 2, chapter: 'Abuja', points: '26.2K', members: 756 },
  { rank: 3, chapter: 'Lagos', points: '24.5K', members: 847 },
  { rank: 4, chapter: 'Kano', points: '18.9K', members: 623 },
  { rank: 5, chapter: 'Enugu', points: '15.2K', members: 445 },
]

export default function Volunteer() {
  return (
    <div className="pt-20 min-h-screen bg-[#0F172A]">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-[#003153] to-[#0F172A]">
        <div className="container">
          <h1 className="text-4xl font-bold text-white mb-2">Volunteer Command</h1>
          <p className="text-white/60">Welcome back, John! Here's your mission today.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Your Points', value: '2,450', color: 'text-[#D4AF37]' },
              { label: 'Level', value: 'Level 5', color: 'text-white' },
              { label: 'Tasks Done', value: '47', color: 'text-[#0E9F6E]' },
              { label: 'Rank', value: '#23', color: 'text-white' },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <div className={`font-data text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-white/50 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasks */}
      <section className="py-8">
        <div className="container">
          <h2 className="text-xl font-bold text-white mb-4">Today's Tasks</h2>
          <div className="space-y-3">
            {tasks.map((task, i) => (
              <div key={i} className="glass rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="w-5 h-5 rounded border-white/30" />
                  <div>
                    <div className="text-white font-medium">{task.title}</div>
                    <div className="text-white/50 text-sm">{task.time} • {task.location}</div>
                  </div>
                </div>
                <span className="text-[#D4AF37] font-semibold">+{task.points} pts</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-8 pb-20">
        <div className="container">
          <h2 className="text-xl font-bold text-white mb-4">Chapter Leaderboard</h2>
          <div className="glass rounded-xl overflow-hidden">
            {leaderboard.map((item, i) => (
              <div key={i} className={`flex items-center justify-between p-4 ${i !== leaderboard.length - 1 ? 'border-b border-white/5' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    i === 0 ? 'bg-[#D4AF37] text-[#001B2E]' : 'bg-white/10 text-white'
                  }`}>{item.rank}</span>
                  <span className="text-white font-medium">{item.chapter}</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">{item.points}</div>
                  <div className="text-white/50 text-xs">{item.members} members</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}