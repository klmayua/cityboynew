export default function MorningBrief() {
  return (
    <section className="rounded-3xl border border-gold/[0.1] bg-gold/[0.04] p-6">
      <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
        Morning Brief
      </div>

      <h3 className="text-white text-xl font-semibold mb-2">
        Good morning, Chairman.
      </h3>

      <p className="text-white/[0.6] text-sm mb-6">
        3 priorities need executive attention today.
      </p>

      <div className="space-y-3">
        <button className="w-full rounded-2xl bg-white/[0.03] px-4 py-4 text-white/[0.85] text-left hover:bg-white/[0.06] transition-colors">
          Funding momentum soft in Abuja
        </button>
        <button className="w-full rounded-2xl bg-white/[0.03] px-4 py-4 text-white/[0.85] text-left hover:bg-white/[0.06] transition-colors">
          Sentiment spike detected in North East
        </button>
        <button className="w-full rounded-2xl bg-white/[0.03] px-4 py-4 text-white/[0.85] text-left hover:bg-white/[0.06] transition-colors">
          2 delayed projects need escalation
        </button>
      </div>
    </section>
  )
}