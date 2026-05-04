import { Send, Shield, CheckCircle2 } from 'lucide-react'
import { useCapitalStore } from '../../store/capitalStore'
import { useSystemStore } from '../../store/systemStore'

export default function ActionCenter(){
  const approveFunding = useCapitalStore(s => s.approveFunding)
  const allocations = useCapitalStore(s => s.allocations)
  const notify = useSystemStore(s => s.notify)
  const logCommand = useSystemStore(s => s.logCommand)

  function run(type){
    if(type==='approve') {
      const pending = allocations.find(a => a.status === 'pending')
      if (pending) {
        approveFunding(pending.id)
      } else {
        notify('info', 'No pending allocations to approve')
      }
    }
    if(type==='broadcast') {
      notify('info', 'Broadcast command executed')
    }
    if(type==='escalate') {
      notify('warning', 'Escalation command executed')
    }

    logCommand('Executed ' + type + ' command')
  }

  return (
    <section className="rounded-3xl border border-gold/10 bg-gold/[0.03] p-6 min-h-[280px] sm:min-h-[320px] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.25)] transition-all duration-300 hover:border-gold/20">
      <h3 className="text-white font-semibold mb-5">
        Action Center
      </h3>

      <div className="grid md:grid-cols-3 gap-3">
        <button onClick={()=>run('approve')} className="rounded-2xl p-4 bg-white/[0.04] text-white flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4"/>
          Approve
        </button>

        <button onClick={()=>run('broadcast')} className="rounded-2xl p-4 bg-white/[0.04] text-white flex items-center gap-2">
          <Send className="w-4 h-4"/>
          Broadcast
        </button>

        <button onClick={()=>run('escalate')} className="rounded-2xl p-4 bg-white/[0.04] text-white flex items-center gap-2">
          <Shield className="w-4 h-4"/>
          Escalate
        </button>
      </div>
    </section>
  )
}