import { useCommandStore } from '../../../store/commandStore'
import CommandShell from '../../../layouts/CommandShell'
import MetricStrip from '../../../components/command/MetricStrip'
import DualGrid from '../../../components/command/DualGrid'
import SentimentGauge from '../../../components/command/SentimentGauge'
import AlertRail from '../../../components/command/AlertRail'
import HeatMap from '../../../components/command/HeatMap'

export default function CommandNationalPulse() {
  const { sentiment, chapters, alerts } = useCommandStore()

  return (
    <CommandShell title="National Pulse" subtitle="Real-time sentiment and engagement metrics">
      <DualGrid
        left={<SentimentGauge sentiment={sentiment} />}
        right={<AlertRail alerts={alerts} />}
      />
      
      <HeatMap chapters={chapters} />
    </CommandShell>
  )
}