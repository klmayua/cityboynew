import { useCommandStore } from '../../../store/commandStore'
import CommandShell from '../../../layouts/CommandShell'
import MetricStrip from '../../../components/command/MetricStrip'
import DualGrid from '../../../components/command/DualGrid'
import MobilizationBoard from '../../../components/command/MobilizationBoard'
import HeatMap from '../../../components/command/HeatMap'
import AlertRail from '../../../components/command/AlertRail'

export default function CommandMobilization() {
  const { chapters, alerts } = useCommandStore()

  const cards = [
    { title: 'Active Missions', value: 4, suffix: '', trend: 'up' },
    { title: 'Total Volunteers', value: 3200, suffix: '', trend: 'up', delta: '+156' },
    { title: 'In Progress', value: 3, suffix: '', trend: 'up' },
    { title: 'Completed', value: 156, suffix: '', trend: 'up', delta: '+24' },
  ]

  return (
    <CommandShell title="Mobilization" subtitle="Volunteer dispatch and readiness">
      <MetricStrip items={cards} />
      
      <DualGrid
        left={<MobilizationBoard chapters={chapters} />}
        right={<AlertRail alerts={alerts} />}
      />
      
      <HeatMap chapters={chapters} />
    </CommandShell>
  )
}