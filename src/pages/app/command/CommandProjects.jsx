import { useCommandStore } from '../../../store/commandStore'
import CommandShell from '../../../layouts/CommandShell'
import MetricStrip from '../../../components/command/MetricStrip'
import DualGrid from '../../../components/command/DualGrid'
import CommandPanel from '../../../components/command/CommandPanel'
import ProjectMatrix from '../../../components/command/ProjectMatrix'
import AlertRail from '../../../components/command/AlertRail'

export default function CommandProjects() {
  const { projects, alerts } = useCommandStore()

  const summaryCards = [
    { title: 'Active Projects', value: projects.length, suffix: '', trend: 'up' },
    { title: 'On Track', value: projects.filter(p => p.status === 'on_track').length, suffix: '', trend: 'up' },
    { title: 'At Risk', value: projects.filter(p => p.status === 'at_risk').length, suffix: '', trend: 'down' },
    { title: 'Delayed', value: projects.filter(p => p.status === 'delayed').length, suffix: '', trend: 'down' },
  ]

  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0)
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0)
  const avgCompletion = Math.round(projects.reduce((sum, p) => sum + p.completion, 0) / projects.length)

  return (
    <CommandShell title="Project Command" subtitle="Portfolio oversight and execution tracking">
      <MetricStrip items={summaryCards} />
      
      <DualGrid
        left={<ProjectMatrix projects={projects} />}
        right={
          <div className="space-y-6">
            <AlertRail alerts={alerts} />
            <CommandPanel title="Budget Summary">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Total Budget</span>
                  <span className="text-white font-medium">₦{totalBudget.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Total Spent</span>
                  <span className="text-white font-medium">₦{totalSpent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/10 pt-4">
                  <span className="text-white/60">Avg Completion</span>
                  <span className="text-gold font-semibold">{avgCompletion}%</span>
                </div>
              </div>
            </CommandPanel>
          </div>
        }
      />
    </CommandShell>
  )
}