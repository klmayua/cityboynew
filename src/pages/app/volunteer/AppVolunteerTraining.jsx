import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { 
  BookOpen, Play, CheckCircle, Clock, ChevronRight, Search
} from 'lucide-react'

function TrainingCard({ module }) {
  const completed = module.progress >= 100
  
  return (
    <button className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${completed ? 'bg-emerald-500/20' : 'bg-blue-500/20'}`}>
            <BookOpen className={`w-5 h-5 ${completed ? 'text-emerald-400' : 'text-blue-400'}`} />
          </div>
          <div>
            <p className="text-white font-medium">{module.title}</p>
            <p className="text-gray-400 text-sm">{module.duration}</p>
          </div>
        </div>
        {completed ? (
          <CheckCircle className="w-5 h-5 text-emerald-400" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        )}
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-gray-400">Progress</span>
          <span className="text-white">{module.progress}%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${completed ? 'bg-emerald-500' : 'bg-blue-500'}`} style={{ width: `${module.progress}%` }} />
        </div>
      </div>
    </button>
  )
}

function AppVolunteerTraining() {
  const modules = [
    { id: 1, title: 'Community Organizing', duration: '2 hours', progress: 100 },
    { id: 2, title: 'Digital Skills Basics', duration: '3 hours', progress: 75 },
    { id: 3, title: 'Project Management', duration: '4 hours', progress: 45 },
    { id: 4, title: 'Public Speaking', duration: '2 hours', progress: 0 },
    { id: 5, title: 'Fundraising 101', duration: '1.5 hours', progress: 0 },
  ]

  return (
    <CityBoyOSShell role="volunteer" title="Training">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Academy</h1>
        <p className="text-gray-400">Complete training modules</p>
      </div>

      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" placeholder="Search modules..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" />
        </div>
      </div>

      <div className="space-y-3">
        {modules.map(m => <TrainingCard key={m.id} module={m} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default AppVolunteerTraining