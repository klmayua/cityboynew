import { nanoid } from 'nanoid'

const ALLOWED_COMMAND_TYPES = [
  'broadcast',
  'mobilize',
  'narrative',
  'capital',
  'security',
  'execute',
  'generic'
]

const ALLOWED_PRIORITIES = [
  'low',
  'normal',
  'high',
  'critical'
]

function validatePayload(payload){
  if (!payload || typeof payload !== 'object') {
    return { valid: false, error: 'Payload must be an object' }
  }
  if (!payload.title || typeof payload.title !== 'string') {
    return { valid: false, error: 'Title is required' }
  }
  if (payload.title.length > 100) {
    return { valid: false, error: 'Title too long (max 100 chars)' }
  }
  if (payload.type && !ALLOWED_COMMAND_TYPES.includes(payload.type)) {
    return { valid: false, error: 'Invalid command type' }
  }
  if (payload.priority && !ALLOWED_PRIORITIES.includes(payload.priority)) {
    return { valid: false, error: 'Invalid priority' }
  }
  return { valid: true }
}

export function createCommand(payload){
  const validation = validatePayload(payload)
  if (!validation.valid) {
    throw new Error(`Invalid command: ${validation.error}`)
  }
  return {
    id:nanoid(),
    title:payload.title,
    type:payload.type || 'generic',
    priority:payload.priority || 'normal',
    status:'queued',
    retries:0,
    createdAt:Date.now(),
    startedAt:null,
    completedAt:null,
    error:null,
    payload
  }
}

export function validateCommandInput(payload){
  return validatePayload(payload)
}

export function transition(command,next,error=null){
  return {
    ...command,
    status:next,
    error,
    ...(next==='running' && {startedAt:Date.now()}),
    ...(next==='complete' && {completedAt:Date.now()})
  }
}