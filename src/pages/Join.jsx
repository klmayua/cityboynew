import React, { useState } from 'react'

export default function Join() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    interests: [],
  })

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001B2E] via-[#003153] to-[#001B2E]">
      <div className="container py-16">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold mb-4">
              <span>★</span> Join in 60 Seconds
            </span>
            <h1 className="text-4xl font-bold text-white mb-2">Become Part of Nigeria's Future</h1>
            <p className="text-white/60">Join thousands of Nigerians building trust and driving action.</p>
          </div>

          {/* Form Card */}
          <div className="glass card p-8">
            {/* Progress */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2].map((s) => (
                <div 
                  key={s} 
                  className={`h-1 w-8 rounded-full transition-colors ${
                    s <= step ? 'bg-[#D4AF37]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="btn-gold w-full mt-6"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="input"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">State</label>
                  <select
                    className="input"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="">Select your state</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="kano">Kano</option>
                    <option value="rivers">Rivers</option>
                    <option value="enugu">Enugu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-3">I want to...</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Volunteer', 'Donate', 'Create Content', 'Just Support'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleInterestToggle(opt)}
                        className={`p-3 rounded-xl border text-sm transition-all ${
                          formData.interests.includes(opt)
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                            : 'border-white/10 text-white hover:border-[#D4AF37]/50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => alert('Welcome to City Boy Arena!')}
                  className="btn-gold w-full mt-6"
                >
                  Join Arena
                </button>
                <button 
                  onClick={() => setStep(1)}
                  className="w-full text-center text-white/60 text-sm py-2"
                >
                  ← Back
                </button>
              </div>
            )}
          </div>

          {/* Trust indicators */}
          <div className="text-center mt-6 text-sm text-white/40">
            Free forever • No spam • Your data is safe
          </div>
        </div>
      </div>
    </div>
  )
}