
import { Link } from 'react-router-dom'

export default function ArenaPage() {
  return (
    <div className="min-h-screen bg-[#003153] pt-20">
      <div className="container mx-auto px-8 py-16">
        <div className="text-center">
          <span className="text-secondary font-label-caps uppercase tracking-widest">About</span>
          <h1 className="font-h1 text-5xl text-white mt-4 mb-8">The Arena</h1>
          <div className="max-w-2xl mx-auto text-slate-300 mb-12">
            <p>City Boy Digital Arena is Nigeria's most trusted civic engagement, 
            transparency and national mobilization infrastructure.</p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link to="/arena/chapters" className="bg-secondary text-on-secondary px-6 py-3 rounded-full">
              Chapters
            </Link>
            <Link to="/leadership" className="bg-secondary text-on-secondary px-6 py-3 rounded-full">
              Leadership
            </Link>
            <Link to="/partners" className="bg-secondary text-on-secondary px-6 py-3 rounded-full">
              Partners
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}