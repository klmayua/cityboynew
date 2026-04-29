import React, { useState } from 'react'

export default function Join() {
  const [step, setStep] = useState(1)
  
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-[#001B2E] via-[#003153] to-[#001B2E]">
      <div className="container py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-4">
              ★ Join 60 Seconds
            </span>
            <h1 className="text-4xl font-bold text-white mb-2">Become Part of Nigeria's Future</h1>
            <p className="text-white/60">Join thousands of Nigerians building trust and driving action.</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">First Name</label>
                  <input type="text" className="input" placeholder="John" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Last Name</label>
                  <input type="text" className="input" placeholder="Doe" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email</label>
                  <input type="email" className="input" placeholder="john@example.com" />
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Phone Number</label>
                  <input type="tel" className="input" placeholder="+234 800 000 0000" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">State</label>
                  <select className="input">
                    <option value="">Select your state</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="kano">Kano</option>
                    <option value="rivers">Rivers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">I want to...</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Volunteer', 'Donate', 'Create Content', 'Just Support'].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 p-3 rounded-xl border border-white/10 cursor-pointer hover:border-[#D4AF37]">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-white text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <button onClick={() => step < 2 ? setStep(step + 1) : alert('Welcome!')} className="btn btn-gold w-full mt-6">
              {step < 2 ? 'Continue' : 'Join Arena'}
            </button>
            
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2].map((s) => (
                <div key={s} className={`w-2 h-2 rounded-full ${s === step ? 'bg-[#D4AF37]' : 'bg-white/20'}`} />
              ))}
            </div>
          </div>
          
          <p className="text-center text-white/40 text-sm mt-6">
            Free forever • No spam • Your data is safe
          </p>
        </div>
      </div>
    </div>
  )
}