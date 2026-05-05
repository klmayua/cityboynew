import { Search, Settings, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import WorkspaceSwitcher from './WorkspaceSwitcher'
import NotificationCenter from './NotificationCenter'

export default function ExecutiveBar() {
  return (
    <div className="sticky top-12 z-50 backdrop-blur-xl border-b border-white/[0.05] bg-[#02060dcc]">
      <div className="max-w-[1680px] mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/platform" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <span className="text-white font-semibold text-sm">CityBoy OS</span>
          </Link>
          <WorkspaceSwitcher />
        </div>

        <div className="flex-1 max-w-xl">
          <div className="h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 flex items-center gap-3">
            <Search className="w-4 h-4 text-white/[0.35]" />
            <input
              placeholder="Search command... (⌘K)"
              className="bg-transparent w-full outline-none text-sm text-white placeholder:text-white/[0.25]"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <NotificationCenter />
          <button className="h-10 w-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center hover:border-gold/30 transition-colors">
            <Settings className="w-4 h-4 text-white/[0.6]" />
          </button>
        </div>
      </div>
    </div>
  )
}