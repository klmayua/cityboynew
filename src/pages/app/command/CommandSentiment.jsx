import { useCommandStore } from '../../../store/commandStore'
import CommandShell from '../../../layouts/CommandShell'
import MetricStrip from '../../../components/command/MetricStrip'
import DualGrid from '../../../components/command/DualGrid'
import SentimentGauge from '../../../components/command/SentimentGauge'
import AlertRail from '../../../components/command/AlertRail'

export default function CommandSentiment() {
  const { sentiment, alerts } = useCommandStore()

  const summaryCards = [
    { title: 'Positive', value: sentiment.positive, suffix: '%', trend: 'up' },
    { title: 'Negative', value: sentiment.negative, suffix: '%', trend: 'down' },
    { title: 'Neutral', value: sentiment.neutral, suffix: '%', trend: 'stable' },
    { title: 'Issue Tracked', value: sentiment.issues.length, suffix: '', trend: 'up' },
  ]

  return (
    <CommandShell title="Sentiment Intelligence" subtitle="Public perception and media monitoring">
      <MetricStrip items={summaryCards} />
      
      <DualGrid
        left={<SentimentGauge sentiment={sentiment} />}
        right={<AlertRail alerts={alerts} />}
      />
    </CommandShell>
  )
}