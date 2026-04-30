export enum UserRole {
  PUBLIC = 'public',
  MEMBER = 'member',
  VOLUNTEER = 'volunteer',
  VOLUNTEER_LEAD = 'volunteer_lead',
  CHAPTER_ADMIN = 'chapter_admin',
  REGIONAL_ADMIN = 'regional_admin',
  EXECUTIVE_MEMBER = 'executive_member',
  EXECUTIVE_DIRECTOR = 'executive_director',
  DONOR = 'donor',
  PARTNER = 'partner',
  CREATOR = 'creator',
  FINANCE_ADMIN = 'finance_admin',
  MEDIA_ADMIN = 'media_admin',
  OPS_ADMIN = 'ops_admin',
  SUPER_ADMIN = 'super_admin',
}

export const RoleHierarchy: Record<UserRole, number> = {
  [UserRole.PUBLIC]: 0,
  [UserRole.MEMBER]: 1,
  [UserRole.VOLUNTEER]: 2,
  [UserRole.VOLUNTEER_LEAD]: 3,
  [UserRole.CHAPTER_ADMIN]: 4,
  [UserRole.REGIONAL_ADMIN]: 5,
  [UserRole.EXECUTIVE_MEMBER]: 6,
  [UserRole.EXECUTIVE_DIRECTOR]: 7,
  [UserRole.DONOR]: 2,
  [UserRole.PARTNER]: 3,
  [UserRole.CREATOR]: 2,
  [UserRole.FINANCE_ADMIN]: 8,
  [UserRole.MEDIA_ADMIN]: 8,
  [UserRole.OPS_ADMIN]: 8,
  [UserRole.SUPER_ADMIN]: 10,
}

export function hasRole(userRole: UserRole, requiredRole: UserRole): boolean {
  return RoleHierarchy[userRole] >= RoleHierarchy[requiredRole]
}