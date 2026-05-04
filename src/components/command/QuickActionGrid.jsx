import {
  Send,
  Users,
  Radio,
  Wallet,
  Shield,
  Zap
} from 'lucide-react'
import { useCallback } from 'react'
import { useSystemStore } from '../../store/systemStore'
import { useCapitalStore } from '../../store/capitalStore'

const actions = [
  {title:'Broadcast Order',icon:Send,type:'broadcast'},
  {title:'Mobilize Citizens',icon:Users,type:'mobilize'},
  {title:'Launch Narrative',icon:Radio,type:'narrative'},
  {title:'Deploy Capital',icon:Wallet,type:'capital'},
  {title:'Security Alert',icon:Shield,type:'security'},
  {title:'Instant Execute',icon:Zap,type:'execute'}
]

export default function QuickActionGrid(){
  const notify = useSystemStore(s => s.notify)
  const pushActivity = useSystemStore(s => s.pushActivity)
  const allocateCapital = useCapitalStore(s => s.allocateCapital)

  const handleAction = useCallback((item) => {
    notify('info', item.title + ' executed')
    pushActivity(item.type, 'Command', item.title)
    
    if (item.type === 'capital') {
      allocateCapital('New Allocation', '₦100M')
    }
  }, [notify, pushActivity, allocateCapital])

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