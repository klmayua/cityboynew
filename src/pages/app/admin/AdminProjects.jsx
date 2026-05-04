import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { 
  Map, DollarSign, CheckCircle, Clock, ChevronRight
} from 'lucide-react'

function ProjectRow({ project }) {
  const statusColors = {
    active: 'bg-emerald-500/20 text-emerald-400',
    pending: 'bg-yellow-500/20 text-yellow-400',
    completed: 'bg-blue-500/20 text-blue-400',
  }
  
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
      <div>
        <p className="text-white font-medium">{project.title}</p>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
      <span className={`px-2 py-1 rounded text-xs ${statusColors[project.status]}`}>{project.status}</span>
    </div>
  )
}

function AdminProjects() {
  const { missions } = useMissionStore()
  
  return (
    <CityBoyOSShell role="admin" title="Projects">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Project Registry</h1>
        <p className="text-gray-400">All platform projects</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Total</p>
          <p className="text-2xl font-bold text-white">{(missions || []).length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-emerald-500/30">
          <p className="text-gray-400 text-xs">Active</p>
          <p className="text-2xl font-bold text-emerald-400">{(missions || []).length}</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-yellow-500/30">
          <p className="text-gray-400 text-xs">Pending</p>
          <p className="text-2xl font-bold text-yellow-400">0</p>
        </div>
        <div className="glass-dark rounded-xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs">Completed</p>
          <p className="text-2xl font-bold text-white">0</p>
        </div>
      </div>

      <div className="space-y-3">
        {(missions || []).map(p => <ProjectRow key={p.id} project={p} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default AdminProjects