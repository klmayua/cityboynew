import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export function Preloader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setMounted(false)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#031B30',
      transition: 'opacity 0.5s ease-out'
    }}>
      <div style={{ width: 192, height: 1, marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', opacity: 0.3 }} />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          animation: 'preloadLine 1.6s ease-in-out infinite'
        }} />
      </div>
      <div style={{ 
        fontFamily: "'Sora', sans-serif",
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: '0.15em',
        color: '#D4AF37',
        marginBottom: 16,
        textTransform: 'uppercase'
      }}>
        CITY BOY ARENA
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        color: '#94A3B8',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        Preparing National Platform...
      </div>
      <style>{`
        @keyframes preloadLine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>,
    document.body
  )
}