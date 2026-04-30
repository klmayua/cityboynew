import { useState, useEffect } from 'react'

function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#031B30] transition-opacity duration-500"
         style={{ opacity: visible ? 1 : 0 }}>
      {/* Animated gold line */}
      <div className="w-48 h-px mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse"></div>
      </div>
      
      {/* Logo */}
      <div className="text-xl font-semibold tracking-widest text-[#D4AF37] uppercase font-['Sora'] mb-4">
        CITY BOY ARENA
      </div>
      
      {/* Loading text */}
      <p className="text-sm text-[#94A3B8] font-label-caps">
        Preparing National Platform...
      </p>
    </div>
  )
}

export { LoadingScreen }