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

const items = [
  {id:'overview',icon:LayoutDashboard,label:'Overview'},
  {id:'capital',icon:Landmark,label:'Capital'},
  {id:'operations',icon:Shield,label:'Operations'},
  {id:'citizens',icon:Users,label:'Citizens'},
  {id:'media',icon:Radio,label:'Media'},
  {id:'oracle',icon:Brain,label:'Oracle'},
  {id:'automation',icon:Bot,label:'Automation'},
  {id:'execution',icon:Play,label:'Execution'},
  {id:'admin',icon:Settings,label:'Admin'}
]

export default function CommandDock(){
  const active = useRouterStore(s=>s.activeSpace)
  const go = useRouterStore(s=>s.go)

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
            </button>
          )
        })}
      </div>
    </aside>
  )
}