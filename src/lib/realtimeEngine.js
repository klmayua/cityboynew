import { emit } from './eventBus'

let timer

export function startRealtime(){
  stopRealtime()

  timer = setInterval(()=>{
    emit('realtime:update',{
      ts: Date.now(),
      funding: Math.random() * 1000000,
      sentiment: Math.random(),
      chapter: Math.ceil(Math.random()*37),
      alertChance: Math.random()
    })
  }, 4000)
}

export function stopRealtime(){
  if(timer) clearInterval(timer)
}