import { Globe2 } from 'lucide-react'

export default function CommandMap(){
  return (
    <section className="rounded-3xl border border-sky-400/10 bg-sky-400/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Globe2 className="w-4 h-4 text-sky-300"/>
        <h3 className="text-white font-semibold">National Grid</h3>
      </div>

      <div className="text-white/70">
        Territory visualization.
        Cluster strength.
        Activation zones.
      </div>
    </section>
  )
}