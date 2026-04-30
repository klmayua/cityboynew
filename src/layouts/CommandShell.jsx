import '../styles/command-shell.css'
import '../styles/tokens.css'
import WarTicker from '../components/command/WarTicker'
import ExecutiveBar from '../components/command/ExecutiveBar'
import QuickActionsRail from '../components/command/QuickActionsRail'
import CommandPalette from '../components/command/CommandPalette'
import MobileCommandDock from '../components/command/MobileCommandDock'
import { useEffect } from 'react'
import useRealtimeSync from '../hooks/useRealtimeSync'
import { startRealtime, stopRealtime } from '../lib/realtimeEngine'

export default function CommandShell({
  children,
  title,
  subtitle,
  variant = 'default',
  dense = false
}) {
  useRealtimeSync()
  
  useEffect(()=>{
    startRealtime()
    return ()=>stopRealtime()
  },[])
  return (
    <div className={`command-shell command-shell--${variant}`}>
      <WarTicker variant={variant} />
      <ExecutiveBar />
      <section className={`command-shell__inner ${dense ? 'dense' : ''}`}>
        <header className="command-shell__header">
          <h1 className="command-shell__title">{title}</h1>
          {subtitle && (
            <p className="command-shell__subtitle">{subtitle}</p>
          )}
        </header>
        {children}
      </section>
      <QuickActionsRail />
      <CommandPalette />
      <MobileCommandDock />
    </div>
  )
}