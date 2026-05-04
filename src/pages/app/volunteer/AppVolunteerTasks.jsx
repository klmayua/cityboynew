import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { 
  Target, CheckCircle, Clock, AlertTriangle, ChevronRight,
  Plus, Search, Filter
} from 'lucide-react'

function TaskCard({ task }) {
  const navigate = useNavigate()
  const priorityColors = {
    high: 'border-l-red-500',
    medium: 'border-l-yellow-500', 
    low: 'border-l-emerald-500',
  }
  const statusIcons = {
    pending: Clock,
    in_progress: AlertTriangle,
    completed: CheckCircle,
  }
  const StatusIcon = statusIcons[task.status] || Clock

  return (
    <button
      onClick={() => navigate(`/app/volunteer/tasks?task=${task.id}`)}
      className={`cursor-pointer w-full text-left p-4 rounded-lg bg-white/5 border border-white/10 border-l-4 ${priorityColors[task.priority]} hover:bg-white/10 transition-all`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <StatusIcon className={`w-5 h-5 ${task.status === 'completed' ? 'text-emerald-400' : 'text-gray-400'}`} />
          <div>
            <p className="text-white font-medium">{task.title}</p>
            <p className="text-gray-400 text-sm">{task.description}</p>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </button>
  )
}

function AppVolunteerTasks() {
  const navigate = useNavigate()
  const { missions } = useMissionStore()
  const [filter, setFilter] = useState('all')

  const mockTasks = [
    { id: 1, title: 'Complete onboarding', description: 'Finish profile setup', status: 'completed', priority: 'high' },
    { id: 2, title: 'Attend training session', description: 'Digital skills workshop', status: 'in_progress', priority: 'medium' },
    { id: 3, title: 'Join community event', description: 'Lagos outreach', status: 'pending', priority: 'low' },
  ]

  const filtered = filter === 'all' ? mockTasks : mockTasks.filter(t => t.status === filter)

  return (
    <CityBoyOSShell role="volunteer" title="Tasks">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">My Tasks</h1>
        <p className="text-gray-400">Track your assignments</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          {['all', 'pending', 'in_progress', 'completed'].map(s => (
            <button key={s} onClick={() => setFilter(s)} className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg ${filter === s ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'}`}>
              {s === 'all' ? 'All' : s.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default AppVolunteerTasks