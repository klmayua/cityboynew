import { Menu } from 'lucide-react'

export default function MobileCommandDrawer(){
  return (
    <button className="xl:hidden fixed top-4 left-4 z-50 rounded-2xl bg-white/10 backdrop-blur-xl p-3 text-white">
      <Menu size={18}/>
    </button>
  )
}