import MorningBrief from '../components/command/MorningBrief'
import MetricStrip from '../components/command/MetricStrip'
import QuickActionGrid from '../components/command/QuickActionGrid'
import LiveNotifications from '../components/command/LiveNotifications'
import CommandHistory from '../components/command/CommandHistory'
import FounderCockpit from '../components/command/FounderCockpit'

export default function OverviewSpace(){
  return (
    <div className="space-y-4 md:space-y-6">
      <FounderCockpit />
      <QuickActionGrid />
      
      <div className="grid xl:grid-cols-2 gap-4 md:gap-6">
        <LiveNotifications />
        <CommandHistory />
      </div>
    </div>
  )
}