import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { useMissionStore } from '../../../store/missionStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { 
  Calendar, Clock, MapPin, Users, ChevronRight,
  Plus, Search, Filter
} from 'lucide-react'

function EventCard({ event }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/app/chapter/events?event=${event.id}`)}
      className="cursor-pointer w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-medium">{event.title}</p>
          <p className="text-gray-400 text-sm">{event.description}</p>
        </div>
        <span className="px-2 py-0.5 rounded text-xs bg-blue-500 text-white">{event.status}</span>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center gap-1"><Calendar className="w-3 h-3 text-gray-400" /><span className="text-gray-400 text-xs">{event.date}</span></div>
        <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-400" /><span className="text-gray-400 text-xs">{event.location}</span></div>
        <div className="flex items-center gap-1"><Users className="w-3 h-3 text-gray-400" /><span className="text-gray-400 text-xs">{event.attendees} attendees</span></div>
      </div>
    </button>
  )
}

function ChapterEvents() {
  const navigate = useNavigate()
  const { missions } = useMissionStore()
  const [search, setSearch] = useState('')

  const mockEvents = [
    { id: 1, title: 'Lagos Town Hall', description: 'Q2 planning session', date: '2026-05-15', location: 'Lagos', attendees: 45, status: 'upcoming' },
    { id: 2, title: 'Abuja Volunteer Drive', description: 'Community outreach', date: '2026-05-20', location: 'Abuja', attendees: 120, status: 'upcoming' },
    { id: 3, title: 'Kano Chapter Launch', description: 'New chapter inauguration', date: '2026-04-10', location: 'Kano', attendees: 85, status: 'completed' },
  ]
  const filtered = mockEvents.filter(e => e.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <CityBoyOSShell role="chapter" title="Events">
      <div className="mb-6">
        <h1 className="text-2xl text-white font-semibold">Chapter Events</h1>
        <p className="text-gray-400">Manage events and gatherings</p>
      </div>
      <div className="glass-dark rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1"><Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" /><input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search events..." className="w-full cursor-text pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm" /></div>
          <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-black text-sm font-medium rounded-lg"><Plus className="w-4 h-4" />New Event</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(e => <EventCard key={e.id} event={e} />)}
      </div>
      {filtered.length === 0 && <div className="text-center py-12"><Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" /><p className="text-gray-400">No events found</p></div>}
    </CityBoyOSShell>
  )
}

export default ChapterEvents