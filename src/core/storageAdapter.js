const VERSION='v1'

export function write(key,data){
  localStorage.setItem(
    `${VERSION}:${key}`,
    JSON.stringify(data)
  )
}

export function read(key,fallback=[]){
  try{
    const raw=localStorage.getItem(`${VERSION}:${key}`)
    return raw ? JSON.parse(raw) : fallback
  }catch{
    return fallback
  }
}