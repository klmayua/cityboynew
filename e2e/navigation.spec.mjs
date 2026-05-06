import { test, expect } from '@playwright/test';

const frontendRoutes = [
  '/',
  '/about',
  '/initiatives',
  '/leadership',
  '/media',
  '/project-nigeria',
  '/transparency',
  '/volunteer',
  '/join',
  '/donate',
  '/arena',
  '/arena/chapters',
  '/impact',
  '/community',
  '/trust',
  '/governance',
  '/projects',
  '/stories',
  '/partners',
  '/login',
  '/register',
  '/verify',
];

const backendRoutes = [
  '/platform',
  '/app/leadership', '/app/leadership/missions', '/app/leadership/operations',
  '/app/leadership/analytics', '/app/leadership/people', '/app/leadership/chapters',
  '/app/leadership/partners', '/app/leadership/community', '/app/leadership/treasury',
  '/app/leadership/funding', '/app/leadership/reports', '/app/leadership/alerts',
  '/app/leadership/monitoring', '/app/leadership/sentiment', '/app/leadership/documents',
  '/app/leadership/messages', '/app/leadership/settings', '/app/leadership/kpis',
  '/app/executive', '/app/executive/priorities', '/app/executive/approvals',
  '/app/executive/reports', '/app/executive/missions', '/app/executive/budgets',
  '/app/executive/compliance', '/app/executive/messages', '/app/executive/settings',
  '/app/command', '/app/command/pulse', '/app/command/sentiment',
  '/app/command/mobilization', '/app/command/funding', '/app/command/projects',
  '/app/command/partners', '/app/command/war-room', '/app/command/reports',
  '/app/intelligence', '/app/intelligence/osint', '/app/intelligence/sentiment',
  '/app/intelligence/alerts', '/app/intelligence/trends', '/app/intelligence/threats',
  '/app/intelligence/narratives', '/app/intelligence/briefs', '/app/intelligence/escalations',
  '/app/chapter', '/app/chapter/missions', '/app/chapter/events',
  '/app/chapter/reports', '/app/chapter/members', '/app/chapter/volunteers',
  '/app/chapter/recruit', '/app/chapter/treasury', '/app/chapter/funding',
  '/app/chapter/inbox', '/app/chapter/settings',
  '/app/volunteer', '/app/volunteer/tasks', '/app/volunteer/opportunities',
  '/app/volunteer/leaderboard', '/app/volunteer/badges', '/app/volunteer/academy',
  '/app/volunteer/wallet', '/app/volunteer/rewards', '/app/volunteer/community',
  '/app/volunteer/profile',
  '/app/donor', '/app/donor/portfolio', '/app/donor/projects',
  '/app/donor/allocations', '/app/donor/reports', '/app/donor/statements',
  '/app/donor/concierge', '/app/donor/settings', '/app/donor/missions',
  '/app/partner', '/app/partner/sponsorships', '/app/partner/campaigns',
  '/app/partner/roi', '/app/partner/reports', '/app/partner/messages',
  '/app/partner/settings',
  '/app/admin', '/app/admin/users', '/app/admin/roles',
  '/app/admin/projects', '/app/admin/payments', '/app/admin/compliance',
  '/app/admin/audit', '/app/admin/health', '/app/admin/runtime',
  '/app/admin/seed', '/app/admin/config', '/app/admin/exports',
  '/app/admin/logs',
  '/app/wallet', '/app/wallet/rewards', '/app/wallet/statements',
  '/app/wallet/transfers',
  '/app/comms', '/app/comms/channels', '/app/comms/broadcast',
];

// Auth pages may redirect or show loading
const authRoutes = ['/login', '/register', '/verify'];

test.describe('Frontend Navigation Audit', () => {
  for (const route of frontendRoutes) {
    test(`Navigate to ${route}`, async ({ page }) => {
      const response = await page.goto(route, { timeout: 20000 });
      await page.waitForLoadState('networkidle', { timeout: 15000 });
      
      const text = await page.locator('body').textContent();
      const url = page.url();
      
      // Should not be 404
      expect(url.includes('not-found') || url.includes('404')).toBe(false);
      
      // Auth routes can have less content (loading screens, redirects)
      if (authRoutes.includes(route)) {
        // Just check it's not an error page
        expect(text?.length).toBeGreaterThan(5);
      } else {
        expect(text?.length).toBeGreaterThan(100);
      }
    });
  }
});

test.describe('Backend Navigation Audit', () => {
  for (const route of backendRoutes) {
    test(`Navigate to ${route}`, async ({ page }) => {
      const response = await page.goto(route, { timeout: 20000 });
      await page.waitForLoadState('networkidle', { timeout: 15000 });
      
      const text = await page.locator('body').textContent();
      const url = page.url();
      
      // Should not be 404
      expect(url.includes('not-found') || url.includes('404')).toBe(false);
      // Should have content
      expect(text?.length).toBeGreaterThan(100);
    });
  }
});