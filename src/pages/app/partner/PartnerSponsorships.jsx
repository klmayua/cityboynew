import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Building2, DollarSign, ChevronRight, Plus, Search,
  Calendar, CheckCircle, Clock
} from 'lucide-react'

function SponsorCard({ sponsor }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/app/partner/sponsorships?id=${sponsor.id}`)}
      className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-medium">{sponsor.name}</p>
          <p className="text-gray-400 text-sm">{sponsor.type}</p>
        </div>
        <span className="px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-400">{sponsor.status}</span>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <div className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[#D4AF37]" /><span className="text-[#D4AF37] font-medium">{sponsor.contribution}</span></div>
      </div>
    </button>
  )
}

function PartnerSponsorships() {
  const navigate = useNavigate()
  const { partners } = usePeopleStore()
  return (
    <CityBoyOSShell role="partner" title="Sponsorships">
      <div className="mb-6"><h1 className="text-2xl text-white font-semibold">Sponsorships</h1><p className="text-gray-400">Manage active sponsorships</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partners.map(p => <SponsorCard key={p.id} sponsor={p} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default PartnerSponsorships