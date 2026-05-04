import OperatingSystemShell from '../../../layouts/OperatingSystemShell'
import { useAuthStore } from '../../../store/authStore'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { useSystemStore } from '../../../store/systemStore'
import { Map, CheckCircle, FileText, MessageSquare, Award, Clock } from 'lucide-react'

function TaskCard({ task }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <h4 className="text-white font-medium mb-2">{task.title}</h4>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {task.daysInQueue} days
        </span>
        <span className={`px-2 py-0.5 rounded text-xs ${
          task.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {task.priority}
        </span>
      </div>
      <button className="mt-3 w-full py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black font-medium rounded-lg">
        Accept
      </button>
    </div>
  )
}

function StatsRow() {
  const volunteers = usePeopleStore(s => s.volunteers) || []
  const missions = useMissionStore(s => s.missions) || []
  const activity = useSystemStore(s => s.activityFeed) || []

  const currentUser = volunteers[0] || {}
  const assignedMissions = missions.filter(m => m.volunteers > 0).length

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <div className="text-gray-400 text-xs">Points</div>
        <div className="text-2xl font-bold text-[#D4AF37]">{currentUser?.score || 0}</div>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <div className="text-gray-400 text-xs">Hours</div>
        <div className="text-2xl font-bold text-white">{currentUser?.hours || 0}</div>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <div className="text-gray-400 text-xs">Missions</div>
        <div className="text-2xl font-bold text-emerald-400">{assignedMissions}</div>
      </div>
      <div className="glass-dark rounded-xl p-4 border border-white/10">
        <div className="text-gray-400 text-xs">Rank</div>
        <div className="text-2xl font-bold text-blue-400">#{Math.floor(Math.random() * 500) + 1}</div>
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
        <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
        <span className="text-white text-sm">Check In</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
        <FileText className="w-6 h-6 text-blue-400 mx-auto mb-2" />
        <span className="text-white text-sm">Submit Report</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
        <Map className="w-6 h-6 text-purple-400 mx-auto mb-2" />
        <span className="text-white text-sm">View Tasks</span>
      </button>
      <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
        <MessageSquare className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
        <span className="text-white text-sm">Messages</span>
      </button>
    </div>
  )
}

function RecentActivity() {
  const activity = useSystemStore(s => s.activityFeed) || []
  const recent = activity.slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recent.map(item => (
          <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white text-sm capitalize">{item.action?.replace(/_/g, ' ')}</p>
              <p className="text-gray-400 text-xs">{item.actor}</p>
            </div>
            <span className="text-[#D4AF37] text-sm">{item.amount || '-'}</span>
          </div>
        ))}
        {recent.length === 0 && (
          <p className="text-gray-500 text-center py-4">No recent activity</p>
        )}
      </div>
    </div>
  )
}

function Leaderboard() {
  const volunteers = usePeopleStore(s => s.volunteers) || []
  const top = volunteers.slice(0, 5)

  return (
    <div className="glass-dark rounded-xl p-5 border border-white/10">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <Award className="w-4 h-4 text-[#D4AF37]" />
        Leaderboard
      </h3>
      <div className="space-y-2">
        {top.map((v, i) => (
          <div key={v.id} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-white text-sm">{v.name}</span>
            </div>
            <span className="text-gray-400 text-sm">{v.score} pts</span>
          </div>
        ))}
        {top.length === 0 && (
          <p className="text-gray-500 text-center py-4">No data</p>
        )}
      </div>
    </div>
  )
}

export default function VolunteerDashboard() {
  const { user } = useAuthStore()
  const queue = useMissionStore(s => s.queue) || []
  const activeTasks = queue.filter(q => q.daysInQueue > 0).slice(0, 3)

  return (
    <OperatingSystemShell role="volunteer">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Volunteer Dashboard</h1>
        <p className="text-gray-400">Welcome back, {user?.name || 'Volunteer'}</p>
      </div>

      <StatsRow />
      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-white font-semibold mb-4">Available Tasks</h3>
          <div className="space-y-4">
            {activeTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
            {activeTasks.length === 0 && (
              <p className="text-gray-500">No tasks available</p>
            )}
          </div>
        </div>
        <div className="space-y-6">
          <RecentActivity />
          <Leaderboard />
        </div>
      </div>
    </OperatingSystemShell>
  )
}