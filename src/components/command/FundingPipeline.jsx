const stages = ['Prospect', 'Warm', 'Active', 'Committed', 'Closed', 'Stewardship']

const stageColors = {
  Prospect: 'border-white/20 text-white/60',
  Warm: 'border-gold/30 text-gold',
  Active: 'border-gold/50 text-gold',
  Committed: 'border-gold text-gold',
  Closed: 'border-signal-green text-signal-green',
  Stewardship: 'border-secondary text-secondary',
}

export default function FundingPipeline({ funding }) {
  return (
    <div className="bg-surface border border-white/8 rounded-3xl p-6">
      <h3 className="text-white font-semibold mb-4">Funding Pipeline</h3>
      <div className="space-y-3">
        {funding.map((item) => (
          <div
            key={item.id}
            className={`bg-surface-2 rounded-xl p-4 border-l-4 ${stageColors[item.stage]}`}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-white font-medium">{item.donor}</p>
              <p className="text-white font-semibold">₦{item.amount.toLocaleString()}</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">{item.stage}</span>
              <span className={`${item.probability >= 90 ? 'text-signal-green' : item.probability >= 70 ? 'text-gold' : 'text-white/60'}`}>
                {item.probability}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}