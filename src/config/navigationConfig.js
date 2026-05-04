import { Home, Landmark, Shield, Users, Radio, Gift, FileText, Handshake, Info } from 'lucide-react'

export const navConfig = [
  { id: 'overview', label: 'Home', icon: Home, route: '/', visible: true },
  { id: 'initiatives', label: 'Initiatives', icon: Landmark, route: '/initiatives', visible: true },
  { id: 'leadership', label: 'Leadership', icon: Users, route: '/leadership', visible: true },
  { id: 'community', label: 'Community', icon: Shield, route: '/community', visible: true },
  { id: 'media', label: 'Media', icon: Radio, route: '/media', visible: true },
  { id: 'donate', label: 'Donate', icon: Gift, route: '/donate', visible: true },
  { id: 'partners', label: 'Partners', icon: Handshake, route: '/partners', visible: true },
  { id: 'impact', label: 'Impact', icon: FileText, route: '/impact', visible: true },
  { id: 'about', label: 'About', icon: Info, route: '/about', visible: true },
]

export const footerConfig = [
  { label: 'Privacy Protocol', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

export const platformLinks = {
  platform: [
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Community', href: '/community' },
    { name: 'Media', href: '/media' },
    { name: 'Projects', href: '/project-nigeria' },
  ],
  resources: [
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Partner', href: '/partners' },
    { name: 'Donor', href: '/donate' },
    { name: 'Stories', href: '/stories' },
  ],
}

export const commandDockItems = [
  { id: 'overview', label: 'Overview', route: '/app/command', badgeKey: null },
  { id: 'capital', label: 'Capital', route: '/app/command/capital', badgeKey: 'allocations' },
  { id: 'operations', label: 'Operations', route: '/app/command/operations', badgeKey: 'missions' },
  { id: 'citizens', label: 'Citizens', route: '/app/command/citizens', badgeKey: 'volunteers' },
  { id: 'media', label: 'Media', route: '/app/command/media', badgeKey: null },
  { id: 'oracle', label: 'Oracle', route: '/app/command/oracle', badgeKey: 'alerts' },
  { id: 'automation', label: 'Automation', route: '/app/command/automation', badgeKey: null },
  { id: 'execution', label: 'Execution', route: '/app/command/execution', badgeKey: null },
  { id: 'admin', label: 'Admin', route: '/app/admin', badgeKey: null },
]