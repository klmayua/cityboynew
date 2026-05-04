import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export default function ProtectedRoute({ children, requiredRole }) {
  const location = useLocation()
  const { isAuthenticated, role, hasLevel } = useAuthStore()
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  
  if (requiredRole) {
    const roleLevels = {
      volunteer: 1,
      chapter: 2,
      partner: 3,
      donor: 3,
      executive: 4,
      command: 5,
      admin: 6
    }
    
    const requiredLevel = roleLevels[requiredRole] || 1
    const currentLevel = roleLevels[role] || 0
    
    if (currentLevel < requiredLevel) {
      return <Navigate to={role ? `/app/${role}` : '/login'} replace />
    }
  }
  
  return children
}