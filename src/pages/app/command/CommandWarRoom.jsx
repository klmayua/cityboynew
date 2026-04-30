import { useState, useEffect } from 'react'
import { useCommandStore } from '../../../store/commandStore'
import CommandShell from '../../../layouts/CommandShell'
import MetricStrip from '../../../components/command/MetricStrip'
import DualGrid from '../../../components/command/DualGrid'
import FundingPipeline from '../../../components/command/FundingPipeline'
import ProjectMatrix from '../../../components/command/ProjectMatrix'
import HeatMap from '../../../components/command/HeatMap'
import MobilizationBoard from '../../../components/command/MobilizationBoard'
import { Maximize2, Filter, Clock } from 'lucide-react'

export default function CommandWarRoom() {
  const { warRoom, funding, projects, chapters } = useCommandStore()
  const [currentTime, setCurrentTime] = useState('')
  const [filters, setFilters] = useState('all')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const metrics = [
    { title: 'Active Chapters', value: warRoom.nationalMap.chapters, delta: '+3', trend: 'up' },
    { title: 'Volunteers', value: warRoom.nationalMap.volunteers, delta: '+42', trend: 'up' },
    { title: "Today's Donations", value: warRoom.liveDonations.today, prefix: '₦', delta: '+1.2M', trend: 'up' },
    { title: 'On Track', value: warRoom.projectExecution.onTrack, delta: '+1', trend: 'up' },
  ]

  return (
    <CommandShell title="War Room" subtitle="National Command Center • Live Operations" variant="warroom">
      <div className="flex items-center justify-end gap-3 mb-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-surface/50">
          <Clock className="w-4 h-4 text-gold" />
          <span className="text-white font-mono text-sm font-semibold tracking-wider">{currentTime || '--:--:--'}</span>
        </div>
        
        <div className="relative">
          <select 
            value={filters}
            onChange={(e) => setFilters(e.target.value)}
            className="appearance-none px-4 py-2 pr-10 rounded-xl border border-white/10 bg-surface/50 text-white text-sm focus:outline-none focus:border-gold/30 cursor-pointer"
          >
            <option value="all">All Systems</option>
            <option value="critical">Critical</option>
            <option value="warning">Warning</option>
          </select>
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold rounded-xl hover:bg-gold/20 transition-all">
          <Maximize2 className="w-4 h-4" />
          <span className="text-sm font-medium">Fullscreen</span>
        </button>
      </div>

      <MetricStrip items={metrics} />
      
      <DualGrid
        left={<FundingPipeline funding={funding} />}
        right={<ProjectMatrix projects={projects} />}
      />
      
      <DualGrid
        left={<MobilizationBoard chapters={chapters} />}
        right={<HeatMap chapters={chapters} />}
      />
    </CommandShell>
  )
}