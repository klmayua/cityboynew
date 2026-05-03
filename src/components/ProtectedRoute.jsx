import { Navigate, useLocation } from 'react-router-dom'

const rolePermissions = {
  volunteer: ['volunteer'],
  chapter: ['chapter', 'volunteer'],
  partner: ['partner', 'volunteer'],
  donor: ['donor', 'partner', 'volunteer'],
  executive: ['executive', 'donor', 'partner', 'volunteer'],
  command: ['command', 'executive', 'donor', 'partner', 'volunteer'],
  admin: ['admin', 'command', 'executive', 'donor', 'partner', 'chapter', 'volunteer'],
}

export default function ProtectedRoute({ children, requiredRole }) {
  const location = useLocation()
  
  const authData = localStorage.getItem('cityboy_auth')
  
  if (!authData) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  
  const auth = JSON.parse(authData)
  
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  
  if (requiredRole) {
    const allowedRoles = rolePermissions[auth.userRole] || []
    const currentRouteRole = location.pathname.split('/')[2]
    
    if (!allowedRoles.includes(currentRouteRole)) {
      return <Navigate to={auth.userRole ? `/app/${auth.userRole}` : '/login'} replace />
    }
  }
  
  return children
}