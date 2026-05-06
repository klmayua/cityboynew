# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: compliance-audit.spec.mjs >> Authenticated Workspace Compliance >> Login and check all workspace routes
- Location: e2e\compliance-audit.spec.mjs:130:3

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: page.goto: Test timeout of 120000ms exceeded.
Call log:
  - navigating to "https://cityboy2026.vercel.app/app/volunteer/opportunities", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e5]: CITY BOY ARENA
  - generic [ref=e6]: Preparing National Platform...
```

# Test source

```ts
  58  |     { path: '/app/chapter/missions', name: 'Missions' },
  59  |     { path: '/app/chapter/events', name: 'Events' },
  60  |     { path: '/app/chapter/reports', name: 'Reports' },
  61  |     { path: '/app/chapter/members', name: 'Members' },
  62  |     { path: '/app/chapter/volunteers', name: 'Volunteers' },
  63  |     { path: '/app/chapter/recruit', name: 'Recruit' },
  64  |     { path: '/app/chapter/treasury', name: 'Treasury' },
  65  |     { path: '/app/chapter/funding', name: 'Funding' },
  66  |     { path: '/app/chapter/inbox', name: 'Inbox' },
  67  |     { path: '/app/chapter/settings', name: 'Settings' },
  68  |   ],
  69  |   volunteer: [
  70  |     { path: '/app/volunteer', name: 'Dashboard' },
  71  |     { path: '/app/volunteer/tasks', name: 'Tasks' },
  72  |     { path: '/app/volunteer/opportunities', name: 'Opportunities' },
  73  |     { path: '/app/volunteer/leaderboard', name: 'Leaderboard' },
  74  |     { path: '/app/volunteer/badges', name: 'Badges' },
  75  |     { path: '/app/volunteer/academy', name: 'Academy' },
  76  |     { path: '/app/volunteer/wallet', name: 'Wallet' },
  77  |     { path: '/app/volunteer/rewards', name: 'Rewards' },
  78  |     { path: '/app/volunteer/community', name: 'Community' },
  79  |     { path: '/app/volunteer/profile', name: 'Profile' },
  80  |   ],
  81  |   donor: [
  82  |     { path: '/app/donor', name: 'Dashboard' },
  83  |     { path: '/app/donor/portfolio', name: 'Portfolio' },
  84  |     { path: '/app/donor/projects', name: 'Projects' },
  85  |     { path: '/app/donor/allocations', name: 'Allocations' },
  86  |     { path: '/app/donor/reports', name: 'Reports' },
  87  |     { path: '/app/donor/statements', name: 'Statements' },
  88  |     { path: '/app/donor/concierge', name: 'Concierge' },
  89  |     { path: '/app/donor/settings', name: 'Settings' },
  90  |     { path: '/app/donor/missions', name: 'Missions' },
  91  |   ],
  92  |   partner: [
  93  |     { path: '/app/partner', name: 'Dashboard' },
  94  |     { path: '/app/partner/sponsorships', name: 'Sponsorships' },
  95  |     { path: '/app/partner/campaigns', name: 'Campaigns' },
  96  |     { path: '/app/partner/roi', name: 'ROI' },
  97  |     { path: '/app/partner/reports', name: 'Reports' },
  98  |     { path: '/app/partner/messages', name: 'Messages' },
  99  |     { path: '/app/partner/settings', name: 'Settings' },
  100 |   ],
  101 |   admin: [
  102 |     { path: '/app/admin', name: 'Dashboard' },
  103 |     { path: '/app/admin/users', name: 'Users' },
  104 |     { path: '/app/admin/roles', name: 'Roles' },
  105 |     { path: '/app/admin/projects', name: 'Projects' },
  106 |     { path: '/app/admin/payments', name: 'Payments' },
  107 |     { path: '/app/admin/compliance', name: 'Compliance' },
  108 |     { path: '/app/admin/audit', name: 'Audit' },
  109 |     { path: '/app/admin/health', name: 'Health' },
  110 |     { path: '/app/admin/runtime', name: 'Runtime' },
  111 |     { path: '/app/admin/seed', name: 'Seed' },
  112 |     { path: '/app/admin/config', name: 'Config' },
  113 |     { path: '/app/admin/exports', name: 'Exports' },
  114 |     { path: '/app/admin/logs', name: 'Logs' },
  115 |   ],
  116 |   wallet: [
  117 |     { path: '/app/wallet', name: 'Overview' },
  118 |     { path: '/app/wallet/rewards', name: 'Rewards' },
  119 |     { path: '/app/wallet/statements', name: 'Statements' },
  120 |     { path: '/app/wallet/transfers', name: 'Transfers' },
  121 |   ],
  122 |   comms: [
  123 |     { path: '/app/comms', name: 'Chats' },
  124 |     { path: '/app/comms/channels', name: 'Channels' },
  125 |     { path: '/app/comms/broadcast', name: 'Broadcast' },
  126 |   ],
  127 | };
  128 | 
  129 | test.describe('Authenticated Workspace Compliance', () => {
  130 |   test('Login and check all workspace routes', async ({ page }) => {
  131 |     // First login
  132 |     await page.goto('/login', { waitUntil: 'networkidle' });
  133 |     await page.waitForTimeout(3000);
  134 |     
  135 |     // Check current URL - if still on login, app might have auto-auth or needs manual auth
  136 |     const currentUrl = page.url();
  137 |     console.log('After login attempt, URL:', currentUrl);
  138 |     
  139 |     // Set a mock auth token to bypass authentication
  140 |     await page.addInitScript(() => {
  141 |       localStorage.setItem('cityboy_auth', JSON.stringify({
  142 |         isAuthenticated: true,
  143 |         role: 'admin',
  144 |         user: { name: 'Test Admin' }
  145 |       }));
  146 |     });
  147 |     
  148 |     // Now reload to apply auth
  149 |     await page.reload({ waitUntil: 'networkidle' });
  150 |     await page.waitForTimeout(2000);
  151 |     
  152 |     const results = {};
  153 |     
  154 |     for (const [workspace, routes] of Object.entries(allWorkspaceRoutes)) {
  155 |       const contentLengths = {};
  156 |       
  157 |       for (const route of routes) {
> 158 |         await page.goto(route.path, { timeout: 10000, waitUntil: 'networkidle' });
      |                    ^ Error: page.goto: Test timeout of 120000ms exceeded.
  159 |         await page.waitForTimeout(500);
  160 |         
  161 |         const text = await page.locator('body').textContent().catch(() => '');
  162 |         contentLengths[route.path] = text?.length || 0;
  163 |       }
  164 |       
  165 |       const uniqueLengths = [...new Set(Object.values(contentLengths))];
  166 |       
  167 |       results[workspace] = {
  168 |         routeCount: routes.length,
  169 |         uniqueLengths: uniqueLengths.length,
  170 |         isAliased: uniqueLengths.length <= 2 && routes.length > 1,
  171 |         lengths: contentLengths
  172 |       };
  173 |     }
  174 |     
  175 |     console.log('\n=== COMPLIANCE RESULTS ===\n');
  176 |     
  177 |     let totalAliased = 0;
  178 |     let totalOk = 0;
  179 |     
  180 |     for (const [ws, data] of Object.entries(results)) {
  181 |       if (data.isAliased) {
  182 |         totalAliased++;
  183 |         console.log(`❌ ${ws}: ${data.routeCount} routes → Only ${data.uniqueLengths} unique page(s)`);
  184 |       } else {
  185 |         totalOk++;
  186 |         console.log(`✅ ${ws}: ${data.routeCount} routes → ${data.uniqueLengths} unique pages`);
  187 |       }
  188 |     }
  189 |     
  190 |     console.log(`\n=== SUMMARY ===`);
  191 |     console.log(`Unique pages: ${totalOk}`);
  192 |     console.log(`Aliased (broken): ${totalAliased}`);
  193 |   });
  194 | });
```