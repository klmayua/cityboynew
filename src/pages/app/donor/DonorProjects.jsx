import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { 
  Map, Target, Users, ChevronRight, Plus, Search,
  TrendingUp, Calendar
} from 'lucide-react'

function MissionCard({ mission }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="flex items-start justify-between">
        <div><p className="text-white font-medium">{mission.title}</p><p className="text-gray-400 text-sm">{mission.description}</p></div>
        <span className="px-2 py-0.5 rounded text-xs bg-blue-500 text-white">{mission.status}</span>
      </div>
    </div>
  )
}

function DonorProjects() {
  const { missions } = useMissionStore()
  return (
    <CityBoyOSShell role="donor" title="Projects">
      <div className="mb-6"><h1 className="text-2xl text-white font-semibold">Projects</h1><p className="text-gray-400">Projects you have funded</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(missions || []).map(m => <MissionCard key={m.id} mission={m} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default DonorProjects