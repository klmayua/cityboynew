import { useCommandStore } from '../../../store/commandStore'
import CommandShell from '../../../layouts/CommandShell'
import MetricStrip from '../../../components/command/MetricStrip'
import DualGrid from '../../../components/command/DualGrid'
import FundingPipeline from '../../../components/command/FundingPipeline'
import PartnerGraph from '../../../components/command/PartnerGraph'
import PulseCard from '../../../components/command/PulseCard'

export default function CommandFunding() {
  const { funding, partners, metrics } = useCommandStore()

  const summaryCards = [
    { title: 'Total Raised', value: metrics.fundsRaised, prefix: '₦', trend: 'up', delta: '+8.5M' },
    { title: 'Pipeline Value', value: 25600000, prefix: '₦', trend: 'up', delta: '+4.2M' },
    { title: 'Active Donors', value: partners.length, trend: 'up', delta: '+2' },
    { title: 'Avg Gift', value: 2280000, prefix: '₦', trend: 'up', delta: '+320K' },
  ]

  return (
    <CommandShell title="Funding Command" subtitle="Donor pipeline and partner management">
      <MetricStrip items={summaryCards} />
      
      <DualGrid
        left={<FundingPipeline funding={funding} />}
        right={<PartnerGraph partners={partners} />}
      />
    </CommandShell>
  )
}