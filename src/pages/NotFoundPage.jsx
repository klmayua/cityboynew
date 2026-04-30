import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <div className="min-h-screen bg-background pt-24 pb-12 flex items-center">
        <div className="container mx-auto px-[80px] max-w-[1440px] text-center">
          <span className="text-secondary font-label-caps uppercase tracking-widest mb-6 block">Lost?</span>
          <h1 className="font-h1 text-6xl text-white mb-6">This path does not exist.</h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">Return to the Arena and continue building.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:brightness-110 transition-all">Back Home</Link>
            <Link to="/impact" className="text-secondary font-label-caps px-8 py-4">Explore Impact</Link>
          </div>
        </div>
      </div>
    </>
  )
}