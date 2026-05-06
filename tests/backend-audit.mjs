import { test, expect, chromium } from '@playwright/test';
import { parse } from 'path';
import { readFileSync, readdirSync } from 'fs';

const routeMap = {
  leadership: [
    '/app/leadership', '/app/leadership/missions', '/app/leadership/operations', 
    '/app/leadership/analytics', '/app/leadership/people', '/app/leadership/chapters', 
    '/app/leadership/partners', '/app/leadership/community', '/app/leadership/treasury', 
    '/app/leadership/funding', '/app/leadership/reports', '/app/leadership/alerts', 
    '/app/leadership/monitoring', '/app/leadership/sentiment', '/app/leadership/documents', 
    '/app/leadership/messages', '/app/leadership/settings'
  ],
  executive: [
    '/app/executive', '/app/executive/priorities', '/app/executive/approvals', 
    '/app/executive/reports', '/app/executive/missions', '/app/executive/budgets', 
    '/app/executive/compliance', '/app/executive/messages', '/app/executive/settings'
  ],
  command: [
    '/app/command', '/app/command/pulse', '/app/command/sentiment', 
    '/app/command/mobilization', '/app/command/funding', '/app/command/operations', 
    '/app/command/projects', '/app/command/partners', '/app/command/reports'
  ],
  intelligence: [
    '/app/intelligence', '/app/intelligence/osint', '/app/intelligence/sentiment', 
    '/app/intelligence/alerts', '/app/intelligence/trends', '/app/intelligence/threats', 
    '/app/intelligence/narratives', '/app/intelligence/briefs', '/app/intelligence/escalations'
  ],
  chapter: [
    '/app/chapter', '/app/chapter/missions', '/app/chapter/events', 
    '/app/chapter/reports', '/app/chapter/members', '/app/chapter/volunteers', 
    '/app/chapter/recruit', '/app/chapter/treasury', '/app/chapter/funding', 
    '/app/chapter/inbox', '/app/chapter/settings'
  ],
  volunteer: [
    '/app/volunteer', '/app/volunteer/tasks', '/app/volunteer/opportunities', 
    '/app/volunteer/leaderboard', '/app/volunteer/badges', '/app/volunteer/academy', 
    '/app/volunteer/wallet', '/app/volunteer/rewards', '/app/volunteer/community', 
    '/app/volunteer/profile'
  ],
  donor: [
    '/app/donor', '/app/donor/portfolio', '/app/donor/missions', 
    '/app/donor/allocations', '/app/donor/reports', '/app/donor/statements', 
    '/app/donor/concierge', '/app/donor/settings'
  ],
  partner: [
    '/app/partner', '/app/partner/sponsorships', '/app/partner/campaigns', 
    '/app/partner/roi', '/app/partner/reports', '/app/partner/messages', 
    '/app/partner/settings'
  ],
  admin: [
    '/app/admin', '/app/admin/users', '/app/admin/roles', '/app/admin/audit', 
    '/app/admin/health', '/app/admin/runtime', '/app/admin/seed', 
    '/app/admin/config', '/app/admin/exports', '/app/admin/logs'
  ]
};

async function auditAllRoutes() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const results = { passed: [], failed: [], errors: [] };
  
  console.log('🚀 Starting Backend Navigation Audit\n');
  
  const startUrl = 'http://localhost:5173';
  let serverRunning = false;
  
  try {
    await page.goto(startUrl, { timeout: 5000 });
    serverRunning = true;
  } catch {
    console.log('⚠️  Dev server not running. Starting it...');
  }
  
  await browser.close();
  
  if (!serverRunning) {
    console.log('❌ Please start dev server: npm run dev');
    process.exit(1);
  }
  
  const allRoutes = Object.values(routeMap).flat();
  console.log(`📋 Found ${allRoutes.length} routes to audit\n`);
  
  for (const route of allRoutes) {
    try {
      await page.goto(`http://localhost:5173${route}`, { timeout: 10000 });
      await page.waitForLoadState('networkidle');
      
      const title = await page.title();
      const body = await page.textContent('body');
      
      if (body && body.length > 100 && !body.includes('Not Found') && !body.includes('404')) {
        results.passed.push(route);
        console.log(`✅ ${route}`);
      } else {
        results.failed.push(route);
        console.log(`❌ ${route} - empty or error`);
      }
    } catch (err) {
      results.failed.push(route);
      results.errors.push(err.message);
      console.log(`❌ ${route} - ${err.message}`);
    }
  }
  
  await browser.close();
  
  console.log('\n========================================');
  console.log(`✅ Passed: ${results.passed.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log('========================================\n');
  
  if (results.failed.length > 0) {
    console.log('Failed routes:');
    results.failed.forEach(r => console.log(`  - ${r}`));
  }
  
  return results;
}

auditAllRoutes().catch(console.error);