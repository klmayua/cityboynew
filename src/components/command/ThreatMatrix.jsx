import { Shield } from 'lucide-react'
import { useIntelStore } from '../../store/intelStore'

export default function ThreatMatrix(){
  const threat = useIntelStore(s=>s.threatLevel)

  return (
    <section className="rounded-3xl border border-red-300/10 bg-red-300/[0.03] p-6 min-h-[340px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Shield className="w-4 h-4 text-red-200"/>
        <h3 className="text-white font-semibold">Threat Matrix</h3>
      </div>

      <div className="text-5xl font-bold text-white">{threat}%</div>
      <div className="text-white/50 mt-2">Pressure Index</div>
    </section>
  )
}