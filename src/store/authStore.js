import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const rolePermissions = {
  leadership: {
    level: 7,
    permissions: ['*']
  },
  executive: {
    level: 4,
    permissions: ['view', 'join', 'report', 'manage', 'coordinate', 'fund', 'approve', 'assign', 'deploy']
  },
  command: {
    level: 5,
    permissions: ['view', 'join', 'report', 'manage', 'coordinate', 'fund', 'approve', 'assign', 'deploy', 'broadcast', 'execute']
  },
  chapter: {
    level: 2,
    permissions: ['view', 'join', 'report', 'manage', 'coordinate']
  },
  partner: {
    level: 3,
    permissions: ['view', 'join', 'report', 'manage', 'coordinate', 'fund']
  },
  donor: {
    level: 3,
    permissions: ['view', 'donate', 'report']
  },
  volunteer: {
    level: 1,
    permissions: ['view', 'join', 'report']
  },
  intelligence: {
    level: 4,
    permissions: ['view', 'join', 'report', 'analyze', 'monitor', 'alert']
  },
  admin: {
    level: 6,
    permissions: ['*']
  }
}

const demoUsers = [
  { id: 1, email: 'leadership@cityboy.org', name: 'Tunde Adebayo', role: 'leadership', state: 'Abuja', avatar: null },
  { id: 2, email: 'executive@cityboy.org', name: 'Dr. Amara Ohu', role: 'executive', state: 'Lagos', avatar: null },
  { id: 3, email: 'chapter@cityboy.org', name: 'Emeka Okonkwo', role: 'chapter', state: 'Enugu', avatar: null },
  { id: 4, email: 'volunteer@cityboy.org', name: 'Faith Johnson', role: 'volunteer', state: 'Kano', avatar: null },
  { id: 5, email: 'donor@cityboy.org', name: 'Alhaji Ibrahim', role: 'donor', state: 'Lagos', avatar: null },
  { id: 6, email: 'partner@cityboy.org', name: 'Shell Petroleum', role: 'partner', state: 'Port Harcourt', avatar: null },
  { id: 7, email: 'intelligence@cityboy.org', name: 'Sara Ahmed', role: 'intelligence', state: 'Abuja', avatar: null },
  { id: 8, email: 'admin@cityboy.org', name: 'Admin User', role: 'admin', state: 'Abuja', avatar: null },
  { id: 9, email: 'media@cityboy.org', name: 'Media Desk', role: 'volunteer', state: 'Lagos', avatar: null },
]

const DEMO_PASSWORD = 'Demo@123'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      role: null,
      permissions: [],
      token: null,
      isAuthenticated: false,

      login: (userData) => {
        const roleConfig = rolePermissions[userData.role] || rolePermissions.volunteer
        set({
          user: userData,
          role: userData.role,
          permissions: roleConfig.permissions,
          token: `token_${Date.now()}`,
          isAuthenticated: true
        })
      },

      logout: () => {
        set({
          user: null,
          role: null,
          permissions: [],
          token: null,
          isAuthenticated: false
        })
      },

      switchRole: (newRole) => {
        if (!rolePermissions[newRole]) return
        const roleConfig = rolePermissions[newRole]
        set({
          role: newRole,
          permissions: roleConfig.permissions
        })
      },

      hasPermission: (permission) => {
        const perms = get().permissions
        return perms.includes('*') || perms.includes(permission)
      },

      hasLevel: (requiredLevel) => {
        const currentRole = get().role
        if (!currentRole) return false
        const roleConfig = rolePermissions[currentRole]
        return (roleConfig?.level || 0) >= requiredLevel
      },

      demoUsers: demoUsers,

      demoLogin: (email) => {
        const user = demoUsers.find(u => u.email === email)
        if (!user) return false
        const roleConfig = rolePermissions[user.role] || rolePermissions.volunteer
        set({
          user: user,
          role: user.role,
          permissions: roleConfig.permissions,
          token: `demo_token_${Date.now()}`,
          isAuthenticated: true
        })
        return true
      },

      verifyDemoCredentials: (email, password) => {
        const user = demoUsers.find(u => u.email === email)
        if (!user) return { valid: false, reason: 'User not found' }
        if (password !== DEMO_PASSWORD) return { valid: false, reason: 'Invalid password' }
        return { valid: true, user: user }
      },
    }),
    {
      name: 'cityboy-auth'
    }
  )
)
