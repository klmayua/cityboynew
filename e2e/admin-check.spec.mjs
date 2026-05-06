import { test, expect } from '@playwright/test';

const adminRoutes = [
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
];

test('Admin pages check', async ({ page }) => {
  const results = [];
  
  for (const route of adminRoutes) {
    await page.goto(route.path, { timeout: 15000 });
    await page.waitForLoadState('networkidle');
    
    const text = await page.locator('body').textContent();
    const url = page.url();
    
    // Check if it's the admin dashboard (indicates redirect)
    const isDashboard = text?.includes('System Overview') || 
                        text?.includes('Total Users') ||
                        text?.includes('Admin Dashboard');
    
    results.push({
      path: route.path,
      name: route.name,
      url: url,
      isDashboard: isDashboard,
      contentLength: text?.length || 0
    });
  }
  
  console.log('\n=== ADMIN ROUTES RESULTS ===\n');
  results.forEach(r => {
    console.log(`${r.path}: ${r.isDashboard ? 'REDIRECTED to Dashboard' : 'OK'} (${r.contentLength} chars)`);
  });
});