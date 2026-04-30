import CapitalBridge from '../components/command/CapitalBridge'
import PipelineBoard from '../components/command/PipelineBoard'
import RevenuePanel from '../components/command/RevenuePanel'
import CollectionsPanel from '../components/command/CollectionsPanel'

export default function CapitalSpace(){
  return (
    <div className="space-y-6">
      <CapitalBridge />
      
      <div className="grid xl:grid-cols-3 gap-6">
        <PipelineBoard />
        <RevenuePanel />
        <CollectionsPanel />
      </div>
    </div>
  )
}