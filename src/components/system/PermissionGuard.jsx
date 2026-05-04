import { useAuthStore } from '../../store/authStore'

export default function PermissionGuard({
  permission,
  fallback=null,
  children
}){
  const hasPermission = useAuthStore(s => s.hasPermission)
  return hasPermission(permission)
    ? children
    : fallback
}