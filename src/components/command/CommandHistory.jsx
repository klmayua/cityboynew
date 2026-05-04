import { History, Play, CheckCircle, XCircle, Clock } from 'lucide-react'
import { useSystemStore } from '../../store/systemStore'

const statusConfig = {
  running: { icon: Play, color: 'text-signal-orange', bg: 'bg-signal-orange/10', label: 'Running' },
  complete: { icon: CheckCircle, color: 'text-capital-green', bg: 'bg-capital-green/10', label: 'Done' },
  failed: { icon: XCircle, color: 'text-signal-red', bg: 'bg-signal-red/10', label: 'Failed' },
  queued: { icon: Clock, color: 'text-white/50', bg: 'bg-white/5', label: 'Queued' },
}

export default function CommandHistory(){
  const commandHistory = useSystemStore(s => s.commandHistory)

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <section className="rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.03] p-4 md:p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-4">
        <History className="w-4 h-4 text-cyan-200"/>
        <h3 className="text-white font-semibold text-sm md:text-base">
          Command Queue
        </h3>
        {commandHistory.length > 0 && (
          <span className="ml-auto text-[10px] bg-cyan-300/20 text-cyan-200 px-2 py-0.5 rounded-full">
            {commandHistory.length} total
          </span>
        )}
      </div>

      <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
        {(commandHistory.length ? commandHistory : [{command:'No executions', timestamp:Date.now()}]).slice(0, 10).map((log,i)=>{
          return (
            <div
              key={log.id || i}
              className="rounded-xl bg-white/[0.02] border border-white/5 px-3 py-2 flex items-center gap-2"
            >
              <div className="text-command-blue flex-shrink-0">
                <Play className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-medium truncate">
                  {log.command}
                </div>
              </div>
              <div className="text-[10px] text-white/50 flex-shrink-0">
                {formatTime(log.timestamp)}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}