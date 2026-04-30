const listeners = {}

export function emit(event, data) {
  if (!listeners[event]) return
  listeners[event].forEach((fn) => fn(data))
}

export function on(event, cb) {
  listeners[event] ||= []
  listeners[event].push(cb)

  return () => {
    listeners[event] = listeners[event].filter((fn) => fn !== cb)
  }
}

export function once(event, cb) {
  const off = on(event, (data) => {
    off()
    cb(data)
  })
  return off
}

export function off(event, cb) {
  if (!listeners[event]) return
  if (cb) {
    listeners[event] = listeners[event].filter((fn) => fn !== cb)
  } else {
    delete listeners[event]
  }
}