import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'

const tiers = {
  Platinum: { color: 'bg-purple-500', label: 'Platinum' },
  Gold: { color: 'bg-gold', label: 'Gold' },
  Silver: { color: 'bg-gray-300', label: 'Silver' },
}

export default function PartnerGraph({ partners }) {
  return (
    <div className="bg-surface border border-white/8 rounded-3xl p-6">
      <h3 className="text-white font-semibold mb-4">Partner Network</h3>
      <div className="space-y-3">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-surface-2 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${tiers[partner.tier].color}`} />
                <p className="text-white font-medium">{partner.name}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full bg-white/10 text-white/60`}>
                {partner.tier}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Since {partner.since}</span>
              <span className="text-gold font-semibold">₦{partner.giving.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}