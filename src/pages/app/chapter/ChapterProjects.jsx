import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Map, Clock, CheckCircle, AlertTriangle, Users, 
  ChevronRight, Plus, Filter, Search, Calendar
} from 'lucide-react'

function ProjectCard({ project }) {
  const navigate = useNavigate()
  const statusStyles = {
    on_track: { color: 'text-emerald-400', bg: 'bg-emerald-500' },
    at_risk: { color: 'text-yellow-400', bg: 'bg-yellow-500' },
    delayed: { color: 'text-red-400', bg: 'bg-red-500' },
  }
  const style = statusStyles[project.status] || statusStyles.on_track

  return (
    <button
      onClick={() => navigate(`/app/chapter/projects?project=${project.id}`)}
      className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-white font-medium">{project.title}</p>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>
        <span className={`px-2 py-0.5 rounded text-xs text-white ${style.bg}`}>
          {project.status.replace('_', ' ')}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-xs">{project.members || 0} members</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-xs">{project.progress || 0}%</span>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
      <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full ${style.bg} rounded-full`} style={{ width: `${project.progress || 0}%` }} />
      </div>
    </button>
  )
}

function ChapterProjects() {
  const navigate = useNavigate()
  const { missions } = useMissionStore()
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const allMissions = (missions || []).map(m => ({
    ...m,
    status: m.status || 'on_track',
    progress: m.progress || Math.floor(Math.random() * 100),
    members: m.team?.length || Math.floor(Math.random() * 20),
  }))

  const filteredProjects = allMissions.filter(p => {
    const matchesSearch = p.title?.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = [
    { label: 'Total', value: allMissions.length },
    { label: 'On Track', value: allMissions.filter(p => p.status === 'on_track').length },
    { label: 'At Risk', value: allMissions.filter(p => p.status === 'at_risk').length },
    { label: 'Delayed', value: allMissions.filter(p => p.status === 'delayed').length },
  ]

  return (
    <CityBoyOSShell role="chapter" title="Projects">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Chapter Projects</h1>
        <p className="text-gray-400">Track projects and initiatives</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map(stat => (
          <div key={stat.label} className="glass-dark rounded-xl p-4 border border-white/10">
            <p className="text-gray-400 text-xs">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="cursor-pointer px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
          >
            <option value="all">All Status</option>
            <option value="on_track">On Track</option>
            <option value="at_risk">At Risk</option>
            <option value="delayed">Delayed</option>
          </select>
          <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#B8962E] text-black text-sm font-medium rounded-lg">
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Map className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No projects found</p>
        </div>
      )}
    </CityBoyOSShell>
  )
}

export default ChapterProjects