import { Command } from 'lucide-react'

export default function CommandPalette(){
  return (
    <button className="fixed bottom-8 right-8 z-50 rounded-full px-6 py-4 bg-white text-black font-semibold shadow-2xl hover:scale-105 transition">
      <span className="flex items-center gap-2">
        <Command size={18}/>
        Execute
      </span>
    </button>
  )
}