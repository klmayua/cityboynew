import { UserRole } from './roles'

export enum Permission {
  // User permissions
  READ_USERS = 'read:users',
  WRITE_USERS = 'write:users',
  DELETE_USERS = 'delete:users',
  
  // Volunteer permissions
  READ_VOLUNTEERS = 'read:volunteers',
  WRITE_VOLUNTEERS = 'write:volunteers',
  ASSIGN_TASKS = 'assign:tasks',
  
  // Chapter permissions
  READ_CHAPTERS = 'read:chapters',
  WRITE_CHAPTERS = 'write:chapters',
  MANAGE_CHAPTER = 'manage:chapter',
  
  // Project permissions
  READ_PROJECTS = 'read:projects',
  WRITE_PROJECTS = 'write:projects',
  APPROVE_PROJECTS = 'approve:projects',
  
  // Donation permissions
  READ_DONATIONS = 'read:donations',
  WRITE_DONATIONS = 'write:donations',
  REFUND_DONATIONS = 'refund:donations',
  
  // Wallet permissions
  READ_WALLET = 'read:wallet',
  WRITE_WALLET = 'write:wallet',
  
  // Messaging permissions
  READ_MESSAGES = 'read:messages',
  WRITE_MESSAGES = 'write:messages',
  BROADCAST = 'broadcast',
  
  // Admin permissions
  ADMIN_ALL = 'admin:all',
  ADMIN_USERS = 'admin:users',
  ADMIN_ROLES = 'admin:roles',
  ADMIN_FINANCE = 'admin:finance',
  ADMIN_COMPLIANCE = 'admin:compliance',
  
  // Executive permissions
  EXEC_READ = 'exec:read',
  EXEC_WRITE = 'exec:write',
  
  // Intelligence permissions
  INTEL_READ = 'intel:read',
  INTEL_WRITE = 'intel:write',
}

export const RolePermissions: Record<UserRole, Permission[]> = {
  [UserRole.PUBLIC]: [],
  [UserRole.MEMBER]: [
    Permission.READ_PROJECTS,
  ],
  [UserRole.VOLUNTEER]: [
    Permission.READ_VOLUNTEERS,
    Permission.READ_PROJECTS,
  ],
  [UserRole.VOLUNTEER_LEAD]: [
    Permission.READ_VOLUNTEERS,
    Permission.WRITE_VOLUNTEERS,
    Permission.ASSIGN_TASKS,
    Permission.READ_PROJECTS,
    Permission.WRITE_PROJECTS,
  ],
  [UserRole.CHAPTER_ADMIN]: [
    Permission.READ_CHAPTERS,
    Permission.WRITE_CHAPTERS,
    Permission.MANAGE_CHAPTER,
    Permission.READ_VOLUNTEERS,
    Permission.WRITE_VOLUNTEERS,
    Permission.READ_PROJECTS,
    Permission.WRITE_PROJECTS,
    Permission.READ_DONATIONS,
  ],
  [UserRole.REGIONAL_ADMIN]: [
    Permission.READ_CHAPTERS,
    Permission.WRITE_CHAPTERS,
    Permission.READ_PROJECTS,
    Permission.WRITE_PROJECTS,
    Permission.APPROVE_PROJECTS,
    Permission.READ_DONATIONS,
  ],
  [UserRole.EXECUTIVE_MEMBER]: [
    Permission.EXEC_READ,
    Permission.READ_PROJECTS,
    Permission.READ_DONATIONS,
    Permission.INTEL_READ,
  ],
  [UserRole.EXECUTIVE_DIRECTOR]: [
    Permission.EXEC_READ,
    Permission.EXEC_WRITE,
    Permission.READ_PROJECTS,
    Permission.WRITE_PROJECTS,
    Permission.APPROVE_PROJECTS,
    Permission.READ_DONATIONS,
    Permission.WRITE_DONATIONS,
    Permission.INTEL_READ,
    Permission.INTEL_WRITE,
  ],
  [UserRole.DONOR]: [
    Permission.READ_PROJECTS,
    Permission.READ_DONATIONS,
    Permission.READ_WALLET,
  ],
  [UserRole.PARTNER]: [
    Permission.READ_PROJECTS,
    Permission.WRITE_PROJECTS,
  ],
  [UserRole.CREATOR]: [
    Permission.READ_PROJECTS,
    Permission.WRITE_PROJECTS,
  ],
  [UserRole.FINANCE_ADMIN]: [
    Permission.ADMIN_FINANCE,
    Permission.READ_DONATIONS,
    Permission.WRITE_DONATIONS,
    Permission.REFUND_DONATIONS,
    Permission.READ_WALLET,
    Permission.WRITE_WALLET,
  ],
  [UserRole.MEDIA_ADMIN]: [
    Permission.ADMIN_ALL,
    Permission.BROADCAST,
  ],
  [UserRole.OPS_ADMIN]: [
    Permission.ADMIN_ALL,
    Permission.READ_PROJECTS,
    Permission.WRITE_PROJECTS,
  ],
  [UserRole.SUPER_ADMIN]: [
    Permission.ADMIN_ALL,
    Permission.ADMIN_USERS,
    Permission.ADMIN_ROLES,
    Permission.ADMIN_FINANCE,
    Permission.ADMIN_COMPLIANCE,
    Permission.EXEC_WRITE,
    Permission.INTEL_WRITE,
  ],
}

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return RolePermissions[role]?.includes(permission) ?? false
}