import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, ListTodo, Users, MessageCircle, GraduationCap, Award, User, Settings, LogOut, ChevronRight, Zap, Target, Clock, Star, MapPin, ArrowRight, Play, Bell, Gift } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '/volunteer', active: true },
  { icon: ListTodo, label: 'Tasks', href: '/volunteer/tasks' },
  { icon: Users, label: 'Chapter', href: '/volunteer/chapter' },
  { icon: MessageCircle, label: 'Messages', href: '/volunteer/messages' },
  { icon: GraduationCap, label: 'Training', href: '/volunteer/training' },
  { icon: Award, label: 'Rewards', href: '/volunteer/rewards' },
  { icon: User, label: 'Profile', href: '/volunteer/profile' },
]

const todayTasks = [
  { id: 1, title: 'Lagos Community Outreach', time: '9:00 AM', points: 150, location: 'Lagos Island', completed: false },
  { id: 2, title: 'Social Media Campaign', time: '11:00 AM', points: 75, location: 'Remote', completed: false },
  { id: 3, title: 'Youth Training Session', time: '2:00 PM', points: 200, location: 'Abuja Center', completed: false },
]

const upcomingEvents = [
  { id: 1, title: 'Abuja Chapter Meeting', date: 'Tomorrow', attendees: 45 },
  { id: 2, title: 'Medical Outreach', date: 'May 3', attendees: 120 },
  { id: 3, title: 'Skills Workshop', date: 'May 5', attendees: 30 },
]

const nearbyOpportunities = [
  { id: 1, title: 'Food Bank Distribution', distance: '2.3 km', volunteers: 12, role: 'Helper' },
  { id: 2, title: 'School Renovation', distance: '5.1 km', volunteers: 8, role: 'Builder' },
  { id: 3, title: 'Health Screening', distance: '1.2 km', volunteers: 6, role: 'Support' },
]

const chapterStats = {
  rank: 3,
  members: 847,
  points: '24.5K',
  projects: 18,
}

export default function VolunteerApp() {
  return (
    <div className="min-h-screen bg-slate-deep pt-16 pb-24">
      <div className="flex">
        <aside className="hidden lg:fixed left-0 top-16 bottom-0 w-64 bg-prussian-dark border-r border-white/5 p-4 overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gold/10 border border-gold/20 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="font-bold text-prussian-dark">JD</span>
              </div>
              <div>
                <p className="font-medium text-white text-sm">John Doe</p>
                <p className="text-xs text-soft-ivory/60">Lagos Chapter</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-soft-ivory/60">Trust Score</span>
              <span className="text-gold font-medium">92%</span>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  item.active
                    ? 'bg-gold/10 text-gold border border-gold/20'
                    : 'text-soft-ivory/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-white/5">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-soft-ivory/70 hover:bg-white/5 hover:text-white transition-colors w-full">
              <Settings className="w-5 h-5" />
              <span className="text-sm font-medium">Settings</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-soft-ivory/70 hover:bg-white/5 hover:text-white transition-colors w-full">
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </div>
        </aside>

        <main className="lg:ml-64 flex-1 p-6">
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl font-bold text-white">Welcome back, John!</h1>
              <p className="text-soft-ivory/60 text-sm">Here's your mission for today</p>
            </div>
            <button className="p-3 glass rounded-xl hover:bg-white/10 transition-colors">
              <Bell className="w-5 h-5 text-soft-ivory" />
            </button>
          </header>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-bold text-white">Today's Mission</h2>
                  <span className="text-sm text-soft-ivory/60">May 2, 2026</span>
                </div>
                <div className="space-y-4">
                  {todayTasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                      <button className="w-6 h-6 rounded-full border-2 border-gold flex items-center justify-center">
                      </button>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{task.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-soft-ivory/60 mt-1">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.time}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {task.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-gold font-medium text-sm">
                          <Zap className="w-4 h-4" />
                          {task.points} pts
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full py-3 bg-gold/10 text-gold rounded-xl font-medium hover:bg-gold/20 transition-colors flex items-center justify-center gap-2">
                  <Target className="w-5 h-5" />
                  Claim More Tasks
                </button>
              </div>

              <div className="card p-6">
                <h2 className="font-display text-xl font-bold text-white mb-4">Chapter Leaderboard</h2>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="text-2xl font-bold text-gold mb-1">#{chapterStats.rank}</p>
                    <p className="text-xs text-soft-ivory/60">Our Rank</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="text-2xl font-bold text-white">{chapterStats.members}</p>
                    <p className="text-xs text-soft-ivory/60">Members</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="text-2xl font-bold text-white">{chapterStats.points}</p>
                    <p className="text-xs text-soft-ivory/60">Points</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="text-2xl font-bold text-white">{chapterStats.projects}</p>
                    <p className="text-xs text-soft-ivory/60">Projects</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {['Port Harcourt', 'Abuja', 'Lagos', 'Kano', 'Enugu'].map((city, idx) => (
                    <div key={city} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          idx === 2 ? 'bg-gold text-prussian-dark' : 'bg-white/10 text-soft-ivory'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="text-sm text-white">{city}</span>
                      </div>
                      <span className="text-xs text-soft-ivory/60">{Math.floor(Math.random() * 30) + 10}K pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-white">Your Progress</h3>
                  <Star className="w-5 h-5 text-gold fill-gold" />
                </div>
                <div className="text-center mb-4">
                  <p className="font-data text-4xl font-bold text-white">2,450</p>
                  <p className="text-sm text-soft-ivory/60">Total Points</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-soft-ivory/60">Level 5</span>
                    <span className="text-soft-ivory/60">Level 6</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-gold to-gold-light rounded-full" />
                  </div>
                  <p className="text-xs text-soft-ivory/60 text-center mt-2">550 points to next level</p>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-display font-bold text-white mb-4">Nearby Opportunities</h3>
                <div className="space-y-3">
                  {nearbyOpportunities.map((opp) => (
                    <div key={opp.id} className="p-3 bg-white/5 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-white">{opp.title}</h4>
                        <span className="text-xs text-soft-ivory/60">{opp.distance}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-soft-ivory/60">{opp.volunteers} volunteers needed</span>
                        <Link to={`/volunteer/join/${opp.id}`} className="text-xs text-gold hover:underline">
                          Join →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/volunteer/opportunities" className="mt-4 text-sm text-gold flex items-center justify-center gap-1 hover:underline">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="card p-6">
                <h3 className="font-display font-bold text-white mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                      <div>
                        <h4 className="text-sm font-medium text-white">{event.title}</h4>
                        <p className="text-xs text-soft-ivory/60">{event.date}</p>
                      </div>
                      <span className="text-xs text-soft-ivory/60">{event.attendees} attending</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6 bg-gradient-to-br from-gold/20 to-transparent border-gold/20">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="w-5 h-5 text-gold" />
                  <h3 className="font-display font-bold text-white">Rewards Store</h3>
                </div>
                <p className="text-sm text-soft-ivory/70 mb-4">
                  Redeem your points for merchandise, courses, and exclusive experiences!
                </p>
                <Link to="/volunteer/rewards" className="btn-gold w-full text-center py-2 block">
                  Browse Rewards
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}