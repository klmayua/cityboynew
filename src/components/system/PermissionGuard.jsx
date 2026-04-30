import { useAccessStore } from '../../store/accessStore'

export default function PermissionGuard({
  permission,
  fallback=null,
  children
}){
  const can=useAccessStore(s=>s.can)
  return can(permission)
    ? children
    : fallback
}