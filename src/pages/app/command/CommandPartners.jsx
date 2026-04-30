import { useCommandStore } from '../../../store/commandStore'
import CommandShell from '../../../layouts/CommandShell'
import MetricStrip from '../../../components/command/MetricStrip'
import DualGrid from '../../../components/command/DualGrid'
import PartnerGraph from '../../../components/command/PartnerGraph'

export default function CommandPartners() {
  const { partners } = useCommandStore()

  const totalGiving = partners.reduce((sum, p) => sum + p.giving, 0)

  const summaryCards = [
    { title: 'Total Partners', value: partners.length, suffix: '', trend: 'up' },
    { title: 'Total Giving', value: totalGiving, prefix: '₦', trend: 'up' },
    { title: 'Platinum', value: partners.filter(p => p.tier === 'Platinum').length, suffix: '', trend: 'up' },
    { title: 'Gold', value: partners.filter(p => p.tier === 'Gold').length, suffix: '', trend: 'up' },
  ]

  return (
    <CommandShell title="Partner Command" subtitle="Corporate and institutional relationships">
      <MetricStrip items={summaryCards} />
      <PartnerGraph partners={partners} />
    </CommandShell>
  )
}