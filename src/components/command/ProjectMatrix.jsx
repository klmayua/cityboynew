import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

const statusConfig = {
  on_track: { icon: CheckCircle, color: 'text-signal-green', label: 'On Track' },
  at_risk: { icon: AlertTriangle, color: 'text-gold', label: 'At Risk' },
  delayed: { icon: XCircle, color: 'text-signal-red', label: 'Delayed' },
}

export default function ProjectMatrix({ projects }) {
  return (
    <div className="bg-surface border border-white/8 rounded-3xl p-6">
      <h3 className="text-white font-semibold mb-4">Project Matrix</h3>
      <div className="space-y-4">
        {projects.map((project) => {
          const status = statusConfig[project.status]
          const StatusIcon = status.icon
          return (
            <div key={project.id} className="bg-surface-2 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-white font-medium">{project.name}</p>
                  <p className="text-white/60 text-sm">{project.state}</p>
                </div>
                <div className={`flex items-center gap-1 ${status.color}`}>
                  <StatusIcon className="w-4 h-4" />
                  <span className="text-xs font-medium">{status.label}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Budget</span>
                  <span className="text-white">₦{project.budget.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Spent</span>
                  <span className="text-white">₦{project.spent.toLocaleString()}</span>
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-white/60">Completion</span>
                    <span className="text-white font-medium">{project.completion}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        project.completion >= 80
                          ? 'bg-signal-green'
                          : project.completion >= 50
                          ? 'bg-gold'
                          : 'bg-signal-red'
                      }`}
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}