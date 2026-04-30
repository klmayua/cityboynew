import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ANALYTICS_EVENTS, formatPayload, logEvent } from './events'

export default function AnalyticsTracker() {
  const location = useLocation()
  const [lastPath, setLastPath] = useState('')
  const [maxScroll, setMaxScroll] = useState(0)
  const scrollDepthLogged = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > maxScroll) {
        setMaxScroll(scrollY)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [maxScroll])

  useEffect(() => {
    if (lastPath !== location.pathname) {
      setLastPath(location.pathname)
      window.scrollTo(0, 0)
      scrollDepthLogged.current = false
      
      logEvent(ANALYTICS_EVENTS.PAGE_VIEW, formatPayload(ANALYTICS_EVENTS.PAGE_VIEW, {}, location))
    }
  }, [location.pathname, lastPath])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const doc = document.documentElement
    const scrollHeight = doc.scrollHeight || 1
    const clientHeight = window.innerHeight
    const scrollable = scrollHeight - clientHeight
    if (scrollable <= 0) return
    
    const depth = Math.min(100, Math.round((maxScroll / scrollable) * 100))
    
    if (!scrollDepthLogged.current && depth >= 75) {
      scrollDepthLogged.current = true
      logEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, formatPayload(ANALYTICS_EVENTS.SCROLL_DEPTH, { depth: 75 }, location))
    }
  }, [maxScroll, location])

  return null
}