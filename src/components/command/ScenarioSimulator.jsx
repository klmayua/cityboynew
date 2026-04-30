import { Boxes } from 'lucide-react'
import { useOracleStore } from '../../store/oracleStore'

export default function ScenarioSimulator(){
  const risk = useOracleStore(s=>s.riskScore)

  return (
    <section className="rounded-3xl border border-rose-300/10 bg-rose-300/[0.03] p-6 min-h-[320px] backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-5">
        <Boxes className="w-4 h-4 text-rose-200"/>
        <h3 className="text-white font-semibold">Scenario Simulator</h3>
      </div>

      <div className="text-5xl font-bold text-white">{risk}%</div>
      <div className="text-white/50 mt-2">Risk Surface</div>
    </section>
  )
}