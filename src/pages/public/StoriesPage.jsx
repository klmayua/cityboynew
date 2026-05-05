import { Link } from 'react-router-dom'
import { useAnalytics } from '../../analytics'

export default function StoriesPage() {
  const { trackStoryClick } = useAnalytics()
  const stories = [
    { id: 1, category: 'VOLUNTEER', title: 'How Amina mobilized 200 volunteers in Kano', location: 'Kano' },
    { id: 2, category: 'COMMUNITY', title: 'Benue chapter built a rural water system', location: 'Benue' },
    { id: 3, category: 'IMPACT', title: 'Fiber-to-Farm doubling yields in Benue', location: 'Benue' },
  ]
  return (
    <>
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-[80px] max-w-[1440px]">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">Impact Stories</span>
            <h1 className="font-h1 text-5xl text-white mb-6">Faces of Change</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Real people. Real impact. Real national progress.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map(s => (
              <Link 
                key={s.id} 
                to="/community"
                onClick={() => trackStoryClick(s.id)}
                className="glass-card rounded-3xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]" 
                style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}
              >
                <div className="h-48 bg-surface-container-high"></div>
                <div className="p-6">
                  <span className="text-secondary font-label-caps text-xs uppercase mb-2 block">{s.category}</span>
                  <h3 className="font-h3 text-lg text-white mb-2">{s.title}</h3>
                  <p className="text-on-surface-variant text-sm">{s.location}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/community" className="text-secondary font-label-caps hover:text-secondary/80">View All Stories</Link>
          </div>
        </div>
      </div>
    </>
  )
}