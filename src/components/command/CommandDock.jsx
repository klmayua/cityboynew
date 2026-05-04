import {
  LayoutDashboard,
  Landmark,
  Shield,
  Users,
  Radio,
  Brain,
  Bot,
  Play,
  Settings
} from 'lucide-react'
import { useRouterStore } from '../../store/routerStore'
import { useSystemStore } from '../../store/systemStore'
import { useCapitalStore } from '../../store/capitalStore'
import { useMissionStore } from '../../store/missionStore'

export default function CommandDock(){
  const active = useRouterStore(s=>s.activeSpace)
  const go = useRouterStore(s=>s.go)
  const notifications = useSystemStore(s => s.notifications.length)
  const allocations = useCapitalStore(s => s.allocations.length)
  const missions = useMissionStore(s => s.missions.length)

  const items = [
    {id:'overview',icon:LayoutDashboard,label:'Overview', count: null},
    {id:'capital',icon:Landmark,label:'Capital', count: allocations},
    {id:'operations',icon:Shield,label:'Operations', count: missions},
    {id:'citizens',icon:Users,label:'Citizens', count: null},
    {id:'media',icon:Radio,label:'Media', count: null},
    {id:'oracle',icon:Brain,label:'Oracle', count: notifications},
    {id:'automation',icon:Bot,label:'Automation', count: null},
    {id:'execution',icon:Play,label:'Execution', count: null},
    {id:'admin',icon:Settings,label:'Admin', count: null}
  ]

  return (
    <aside className="sticky top-4 h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
      <div className="space-y-2">
        {items.map(item=>{
          const Icon=item.icon
          const isActive=active===item.id

          return (
            <button
              key={item.id}
              onClick={()=>go(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition
                ${isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/55 hover:text-white hover:bg-white/5'}
              `}
            >
              <Icon size={18}/>
              <span>{item.label}</span>
              {item.count !== null && item.count > 0 && (
                <span className="ml-auto text-xs bg-gold/20 text-gold px-1.5 py-0.5 rounded">{item.count}</span>
              )}
            </button>
          )
        })}
      </div>
    </aside>
  )
}