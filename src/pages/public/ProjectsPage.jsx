import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: 'Lagos-Badagry Expressway', location: 'Lagos', status: 'In Progress', progress: 72 },
    { id: 2, title: 'Kano Solar Micro-Grid', location: 'Kano', status: 'Completed', progress: 100 },
    { id: 3, title: 'Benue Rural Water', location: 'Benue', status: 'In Progress', progress: 45 },
    { id: 4, title: 'Abuja Digital Hub', location: 'FCT', status: 'Planning', progress: 15 },
  ]
  return (
    <>
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-[80px] max-w-[1440px]">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps uppercase tracking-widest mb-4 block">National Projects</span>
            <h1 className="font-h1 text-5xl text-white mb-6">Infrastructure Delivery</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Visible progress across all 36 states of the federation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(p => (
              <div key={p.id} className="glass-card rounded-3xl p-6" style={{background: 'rgba(0, 49, 83, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-h3 text-lg text-white">{p.title}</h3>
                  <span className="text-secondary font-label-caps text-xs uppercase">{p.status}</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">{p.location}</p>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary" style={{width: p.progress + '%'}}></div>
                </div>
                <p className="text-on-surface-variant text-xs mt-2">{p.progress}% complete</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/transparency" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all">View All Projects</Link>
          </div>
        </div>
      </div>
    </>
  )
}