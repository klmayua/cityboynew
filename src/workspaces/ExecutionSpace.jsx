import OperationsBoard from '../components/command/OperationsBoard'
import TeamChat from '../components/command/TeamChat'
import AuditTrail from '../components/command/AuditTrail'

export default function ExecutionSpace(){
  return (
    <div className="space-y-6">
      <OperationsBoard />

      <div className="grid xl:grid-cols-2 gap-6">
        <TeamChat />
        <AuditTrail />
      </div>
    </div>
  )
}