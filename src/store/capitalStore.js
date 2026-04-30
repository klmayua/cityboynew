import { create } from 'zustand'

export const useCapitalStore = create((set)=>({
  treasury: 2400000000,
  committed: 684000000,
  deployable: 1716000000,
  monthlyRunRate: 126000000,
  revenueStreams: [
    { id:'institutional', name: 'Institutional Partners', status: 'active', value: 520000000, partners: 14 },
    { id:'whale', name: 'Whale Contributors', status: 'active', value: 380000000, partners: 87 },
    { id:'recurring', name: 'Recurring Donors', status: 'active', value: 146000000, donors: 4280 },
    { id:'membership', name: 'Membership Dues', status: 'active', value: 84000000, members: 214820 },
    { id:'grants', name: 'Foundation Grants', status: 'active', value: 220000000, grants: 8 },
    { id:'events', name: 'Gala & Events', status: 'planning', value: 0, events: 4 },
  ],
  investors: [
    { id: 1, name: 'Dangote Foundation', committed: 200000000, stage: 'Onboarded', probability: 100 },
    { id: 2, name: 'Sterling Bank', committed: 150000000, stage: 'Onboarded', probability: 100 },
    { id: 3, name: 'MTN Foundation', committed: 85000000, stage: 'Onboarded', probability: 100 },
    { id: 4, name: 'Shell Nigeria', committed: 120000000, stage: 'Negotiation', probability: 80 },
    { id: 5, name: 'First Bank', committed: 75000000, stage: 'Prospect', probability: 60 },
    { id: 6, name: 'Chevron', committed: 180000000, stage: 'Active', probability: 85 },
  ],
  updateTreasury:(amount)=>set({
    treasury: amount
  })
}))