import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { 
  Map, Users, Target, ChevronRight, Plus, Search,
  Calendar, Clock
} from 'lucide-react'

function OpportunityCard({ opportunity }) {
  return (
    <button className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-medium">{opportunity.title}</p>
          <p className="text-gray-400 text-sm">{opportunity.location}</p>
        </div>
        <span className="px-2 py-1 rounded text-xs bg-emerald-500/20 text-emerald-400">{opportunity.spots} spots</span>
      </div>
      <div className="flex items-center gap-4 mt-3 text-gray-500 text-xs">
        <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{opportunity.date}</div>
        <div className="flex items-center gap-1"><Clock className="w-3 h-3" />{opportunity.hours}h</div>
      </div>
    </button>
  )
}

function VolunteerOpportunities() {
  const opportunities = [
    { id: 1, title: 'Lagos Cleanup Campaign', location: 'Lagos', date: 'May 10', hours: 4, spots: 50 },
    { id: 2, title: 'Abuja Health Outreach', location: 'Abuja', date: 'May 15', hours: 6, spots: 30 },
    { id: 3, title: 'Kano Education Support', location: 'Kano', date: 'May 20', hours: 8, spots: 25 },
    { id: 4, title: 'Port Harcourt Environment', location: 'Port Harcourt', date: 'May 25', hours: 3, spots: 40 },
  ]

  return (
    <CityBoyOSShell role="volunteer" title="Opportunities">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Volunteer Opportunities</h1>
        <p className="text-gray-400">Find ways to contribute</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {opportunities.map(o => <OpportunityCard key={o.id} opportunity={o} />)}
      </div>
    </CityBoyOSShell>
  )
}

export default VolunteerOpportunities