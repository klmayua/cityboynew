import {
  Send,
  Users,
  Radio,
  Wallet,
  Shield,
  Zap
} from 'lucide-react'
import { useCallback } from 'react'
import { useGlobalCommandBus } from '../../store/globalCommandBus'
import { useExecutionEngine } from '../../store/executionEngineStore'

const actions = [
  {title:'Broadcast Order',icon:Send,type:'broadcast'},
  {title:'Mobilize Citizens',icon:Users,type:'mobilize'},
  {title:'Launch Narrative',icon:Radio,type:'narrative'},
  {title:'Deploy Capital',icon:Wallet,type:'capital'},
  {title:'Security Alert',icon:Shield,type:'security'},
  {title:'Instant Execute',icon:Zap,type:'execute'}
]

export default function QuickActionGrid(){
  const execute = useGlobalCommandBus(s=>s.execute)
  const enqueue = useExecutionEngine(s=>s.enqueue)

  const handleAction = useCallback((item) => {
    execute(item)
    enqueue({ title: item.title, type: item.type, priority: 'normal' })
  }, [execute, enqueue])

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-6 backdrop-blur-xl">
      <h3 className="text-white font-semibold mb-4 md:mb-5">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {actions.map(item=>{
          const Icon=item.icon
          return (
            <button
              key={item.title}
              onClick={()=>handleAction(item)}
              className="rounded-2xl p-3 md:p-5 text-left bg-white/5 hover:bg-white/10 transition min-h-[70px] md:min-h-[80px] flex flex-col justify-center"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-white mb-2"/>
              <div className="text-white text-xs md:text-sm font-medium leading-tight">
                {item.title}
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}