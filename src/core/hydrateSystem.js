import { read } from './storageAdapter'
import { write } from './storageAdapter'

export function hydrate(key,fallback=[]){
  return read(key,fallback)
}

export function persist(key,data){
  write(key,data)
}