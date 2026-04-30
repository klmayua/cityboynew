import { Building2 } from 'lucide-react'
import { usePeopleStore } from '../../store/peopleStore'

export default function ChapterBuilder(){
  const chapters = usePeopleStore(s=>s.chapters)

  return (
    <section className="rounded-3xl border border-orange-400/10 bg-orange-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Building2 className="w-4 h-4 text-orange-300"/>
        <h3 className="text-white font-semibold">Chapter Builder</h3>
      </div>

      <div className="text-5xl font-bold text-white">{chapters}</div>
      <div className="text-white/50 mt-2">Active Chapters</div>
    </section>
  )
}