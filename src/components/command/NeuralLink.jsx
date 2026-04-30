import { Cpu } from 'lucide-react'
import { useSystemBus } from '../../store/systemBus'

export default function NeuralLink(){
  const pulse = useSystemBus(s=>s.pulse)

  return (
    <section className="rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Cpu className="w-4 h-4 text-cyan-200"/>
        <h3 className="text-white font-semibold">Neural Link</h3>
      </div>

      <div className="text-5xl font-bold text-white">{pulse}</div>
      <div className="text-white/50 mt-2">System Pulse</div>
    </section>
  )
}