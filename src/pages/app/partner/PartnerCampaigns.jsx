import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { 
  Map, Target, Users, ChevronRight, Plus, Search,
  Calendar, TrendingUp
} from 'lucide-react'

function CampaignCard({ campaign }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/app/partner/campaigns?id=${campaign.id}`)}
      className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-medium">{campaign.title}</p>
          <p className="text-gray-400 text-sm">{campaign.description}</p>
        </div>
        <span className="px-2 py-0.5 rounded text-xs bg-blue-500 text-white">{campaign.status}</span>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <div className="flex items-center gap-1"><Users className="w-3 h-3 text-gray-400" /><span className="text-gray-400 text-xs">{campaign.volunteers} participants</span></div>
        <div className="flex items-center gap-1"><Target className="w-3 h-3 text-emerald-400" /><span className="text-emerald-400 text-xs">{campaign.progress}%</span></div>
      </div>
    </button>
  )
}

function PartnerCampaigns() {
  const navigate = useNavigate()
  const { missions } = useMissionStore()
  const mockCampaigns = (missions || []).map(m => ({ ...m, status: 'active', volunteers: m.team?.length || 10, progress: 45 }))
  
  return (
    <CityBoyOSShell role="partner" title="Campaigns">
      <div className="mb-6"><h1 className="text-2xl text-white font-semibold">Campaigns</h1><p className="text-gray-400">Partner campaigns and initiatives</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockCampaigns.map(c => <CampaignCard key={c.id} campaign={c} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default PartnerCampaigns