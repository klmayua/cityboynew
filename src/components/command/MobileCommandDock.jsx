import { Home, Bell, Search, Plus, Settings } from 'lucide-react'

export default function MobileCommandDock() {
  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 z-[80] rounded-3xl border border-white/[0.1] bg-[#08111fe8] backdrop-blur-xl px-6 py-4 flex items-center justify-between shadow-2xl">
      <button className="p-3 rounded-xl hover:bg-white/[0.05] transition-colors">
        <Home className="w-5 h-5 text-white/[0.8]" />
      </button>
      <button className="p-3 rounded-xl hover:bg-white/[0.05] transition-colors">
        <Search className="w-5 h-5 text-white/[0.8]" />
      </button>
      <button className="p-4 rounded-full bg-gold shadow-lg">
        <Plus className="w-5 h-5 text-black" />
      </button>
      <button className="p-3 rounded-xl hover:bg-white/[0.05] transition-colors relative">
        <Bell className="w-5 h-5 text-white/[0.8]" />
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-gold" />
      </button>
      <button className="p-3 rounded-xl hover:bg-white/[0.05] transition-colors">
        <Settings className="w-5 h-5 text-white/[0.8]" />
      </button>
    </div>
  )
}