import { test, expect } from '@playwright/test';

const sidebarConfigs = {
  '/app/leadership': [
    { path: '/app/leadership', name: 'Dashboard' },
    { path: '/app/leadership/missions', name: 'Missions' },
    { path: '/app/leadership/operations', name: 'Operations' },
    { path: '/app/leadership/analytics', name: 'Analytics' },
    { path: '/app/leadership/people', name: 'People' },
    { path: '/app/leadership/chapters', name: 'Chapters' },
    { path: '/app/leadership/partners', name: 'Partners' },
    { path: '/app/leadership/community', name: 'Community' },
    { path: '/app/leadership/treasury', name: 'Treasury' },
    { path: '/app/leadership/funding', name: 'Funding' },
    { path: '/app/leadership/reports', name: 'Reports' },
    { path: '/app/leadership/alerts', name: 'Alerts' },
    { path: '/app/leadership/monitoring', name: 'Monitoring' },
    { path: '/app/leadership/sentiment', name: 'Sentiment' },
    { path: '/app/leadership/documents', name: 'Documents' },
    { path: '/app/leadership/messages', name: 'Messages' },
    { path: '/app/leadership/settings', name: 'Settings' },
  ],
  '/app/executive': [
    { path: '/app/executive', name: 'Dashboard' },
    { path: '/app/executive/priorities', name: 'Priorities' },
    { path: '/app/executive/approvals', name: 'Approvals' },
    { path: '/app/executive/reports', name: 'Reports' },
    { path: '/app/executive/missions', name: 'Missions' },
    { path: '/app/executive/budgets', name: 'Budgets' },
    { path: '/app/executive/compliance', name: 'Compliance' },
    { path: '/app/executive/messages', name: 'Messages' },
    { path: '/app/executive/settings', name: 'Settings' },
  ],
  '/app/command': [
    { path: '/app/command', name: 'Overview' },
    { path: '/app/command/pulse', name: 'Pulse' },
    { path: '/app/command/sentiment', name: 'Sentiment' },
    { path: '/app/command/mobilization', name: 'Mobilization' },
    { path: '/app/command/funding', name: 'Funding' },
    { path: '/app/command/projects', name: 'Projects' },
    { path: '/app/command/partners', name: 'Partners' },
    { path: '/app/command/war-room', name: 'War Room' },
    { path: '/app/command/reports', name: 'Reports' },
  ],
  '/app/intelligence': [
    { path: '/app/intelligence', name: 'OSINT' },
    { path: '/app/intelligence/osint', name: 'OSINT' },
    { path: '/app/intelligence/sentiment', name: 'Sentiment' },
    { path: '/app/intelligence/alerts', name: 'Alerts' },
    { path: '/app/intelligence/trends', name: 'Trends' },
    { path: '/app/intelligence/threats', name: 'Threats' },
    { path: '/app/intelligence/narratives', name: 'Narratives' },
    { path: '/app/intelligence/briefs', name: 'Briefs' },
    { path: '/app/intelligence/escalations', name: 'Escalations' },
  ],
  '/app/chapter': [
    { path: '/app/chapter', name: 'Dashboard' },
    { path: '/app/chapter/missions', name: 'Missions' },
    { path: '/app/chapter/events', name: 'Events' },
    { path: '/app/chapter/reports', name: 'Reports' },
    { path: '/app/chapter/members', name: 'Members' },
    { path: '/app/chapter/volunteers', name: 'Volunteers' },
    { path: '/app/chapter/recruit', name: 'Recruit' },
    { path: '/app/chapter/treasury', name: 'Treasury' },
    { path: '/app/chapter/funding', name: 'Funding' },
    { path: '/app/chapter/inbox', name: 'Inbox' },
    { path: '/app/chapter/settings', name: 'Settings' },
  ],
  '/app/volunteer': [
    { path: '/app/volunteer', name: 'Dashboard' },
    { path: '/app/volunteer/tasks', name: 'Tasks' },
    { path: '/app/volunteer/opportunities', name: 'Opportunities' },
    { path: '/app/volunteer/leaderboard', name: 'Leaderboard' },
    { path: '/app/volunteer/badges', name: 'Badges' },
    { path: '/app/volunteer/academy', name: 'Academy' },
    { path: '/app/volunteer/wallet', name: 'Wallet' },
    { path: '/app/volunteer/rewards', name: 'Rewards' },
    { path: '/app/volunteer/community', name: 'Community' },
    { path: '/app/volunteer/profile', name: 'Profile' },
  ],
  '/app/donor': [
    { path: '/app/donor', name: 'Dashboard' },
    { path: '/app/donor/portfolio', name: 'Portfolio' },
    { path: '/app/donor/projects', name: 'Projects' },
    { path: '/app/donor/allocations', name: 'Allocations' },
    { path: '/app/donor/reports', name: 'Reports' },
    { path: '/app/donor/statements', name: 'Statements' },
    { path: '/app/donor/concierge', name: 'Concierge' },
    { path: '/app/donor/settings', name: 'Settings' },
    { path: '/app/donor/missions', name: 'Missions' },
  ],
  '/app/partner': [
    { path: '/app/partner', name: 'Dashboard' },
    { path: '/app/partner/sponsorships', name: 'Sponsorships' },
    { path: '/app/partner/campaigns', name: 'Campaigns' },
    { path: '/app/partner/roi', name: 'ROI' },
    { path: '/app/partner/reports', name: 'Reports' },
    { path: '/app/partner/messages', name: 'Messages' },
    { path: '/app/partner/settings', name: 'Settings' },
  ],
  '/app/admin': [
    { path: '/app/admin', name: 'Dashboard' },
    { path: '/app/admin/users', name: 'Users' },
    { path: '/app/admin/roles', name: 'Roles' },
    { path: '/app/admin/projects', name: 'Projects' },
    { path: '/app/admin/payments', name: 'Payments' },
    { path: '/app/admin/compliance', name: 'Compliance' },
    { path: '/app/admin/audit', name: 'Audit' },
    { path: '/app/admin/health', name: 'Health' },
    { path: '/app/admin/runtime', name: 'Runtime' },
    { path: '/app/admin/seed', name: 'Seed' },
    { path: '/app/admin/config', name: 'Config' },
    { path: '/app/admin/exports', name: 'Exports' },
    { path: '/app/admin/logs', name: 'Logs' },
  ],
};

test.describe('Sidebar Routes Mapping', () => {
  for (const [workspace, routes] of Object.entries(sidebarConfigs)) {
    test(`Check routes in ${workspace}`, async ({ page }) => {
      const failures = [];
      
      for (const route of routes) {
        await page.goto(route.path, { timeout: 15000 });
        await page.waitForLoadState('domcontentloaded');
        
        const text = await page.locator('body').textContent();
        const url = page.url();
        
        if (url.includes('not-found') || url.includes('404')) {
          failures.push({ path: route.path, name: route.name, reason: '404' });
        } else if (!text || text.length < 50) {
          failures.push({ path: route.path, name: route.name, reason: 'Empty' });
        }
      }
      
      if (failures.length > 0) {
        console.log(`\n${workspace} FAILED:`);
        failures.forEach(f => console.log(`  - ${f.path} (${f.name}): ${f.reason}`));
      }
      
      expect(failures).toHaveLength(0);
    });
  }
});