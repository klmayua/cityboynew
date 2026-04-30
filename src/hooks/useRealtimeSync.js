import { useEffect } from 'react'
import { on } from '../lib/eventBus'
import { useCommandMemory } from '../store/commandMemory'

export default function useRealtimeSync(){
  const pushNotification =
    useCommandMemory(s=>s.pushNotification)

  const logAction =
    useCommandMemory(s=>s.logAction)

  useEffect(()=>{
    const off = on('realtime:update',(payload)=>{
      logAction({
        title:`Live update from chapter ${payload.chapter}`,
        type:'live'
      })

      if(payload.alertChance > .97){
        pushNotification({
          title:'Executive alert generated',
          type:'warning'
        })
      }
    })

    return off
  },[])
}