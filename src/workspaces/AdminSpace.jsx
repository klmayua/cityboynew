import KPIBar from '../components/system/KPIBar'
import ExecutionLog from '../components/system/ExecutionLog'
import SystemHealth from '../components/system/SystemHealth'

export default function AdminSpace(){
  return (
    <div className="space-y-6">
      <KPIBar />
      <SystemHealth />
      <ExecutionLog />
    </div>
  )
}