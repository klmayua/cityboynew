import { create } from 'zustand'
import { useMissionStore } from './missionStore'
import { useSystemStore } from './systemStore'
import { useIntelStore } from './intelStore'

const initialTreasury = {
  total: '₦12.8B',
  deployable: '₦4.2B',
  committed: '₦6.8B',
  reserved: '₦1.8B'
}

const initialRevenueStreams = [
  { id: 1, name: 'Corporate Partnerships', monthly: '₦850M', status: 'active' },
  { id: 2, name: 'Individual Donations', monthly: '₦420M', status: 'active' },
  { id: 3, name: 'Government Grants', monthly: '₦1.2B', status: 'active' },
  { id: 4, name: 'International Aid', monthly: '₦680M', status: 'active' },
]

const initialAllocations = [
  { id: 1, mission: 'Kaduna Clean Water', allocated: '₦450M', status: 'disbursed' },
  { id: 2, mission: 'Lagos Digital Hubs', allocated: '₦280M', status: 'disbursed' },
  { id: 3, mission: 'Northern Agriculture', allocated: '₦620M', status: 'partial' },
  { id: 4, mission: 'Rural Health Centers', allocated: '₦380M', status: 'pending' },
]

const initialTransactions = [
  { id: 1, type: 'disbursement', amount: '₦45M', mission: 'Kaduna Water - Phase 1', date: '2026-04-15', status: 'completed' },
  { id: 2, type: 'donation', amount: '₦120M', source: 'Shell Petroleum', date: '2026-04-12', status: 'completed' },
  { id: 3, type: 'disbursement', amount: '₦32M', mission: 'Lagos Schools Tech', date: '2026-04-10', status: 'completed' },
  { id: 4, type: 'grant', amount: '₦500M', source: 'Federal Government', date: '2026-04-08', status: 'completed' },
]

function parseNaira(str) {
  if (!str) return 0
  const clean = str.replace(/₦/g, '').replace(/,/g, '')
  if (clean.includes('B')) {
    return parseFloat(clean.replace(/B/g, '')) * 1000
  }
  if (clean.includes('M')) {
    return parseFloat(clean.replace(/M/g, ''))
  }
  return parseFloat(clean)
}

function formatNaira(milliseconds) {
  if (milliseconds >= 1000) {
    return '₦' + (milliseconds / 1000).toFixed(1) + 'B'
  }
  return '₦' + Math.round(milliseconds) + 'M'
}

export const useCapitalStore = create((set, get) => ({
  treasury: initialTreasury,
  revenueStreams: initialRevenueStreams,
  allocations: initialAllocations,
  transactions: initialTransactions,

  approveFunding: (allocationId) => {
    const allocation = get().allocations.find(a => a.id === allocationId)
    if (!allocation) return
    
    const amount = allocation.allocated
    
    set(state => {
      const currentDeployable = parseNaira(state.treasury.deployable)
      const amountVal = parseNaira(amount)
      const currentCommitted = parseNaira(state.treasury.committed)
      
      return {
        allocations: state.allocations.map(a => 
          a.id === allocationId ? { ...a, status: 'disbursed' } : a
        ),
        treasury: {
          ...state.treasury,
          deployable: formatNaira(currentDeployable - amountVal),
          committed: formatNaira(currentCommitted + amountVal)
        },
        transactions: [
          { 
            id: Date.now(), 
            type: 'disbursement', 
            amount,
            mission: allocation.mission,
            date: new Date().toISOString().split('T')[0],
            status: 'completed' 
          },
          ...state.transactions
        ]
      }
    })
    
    const missionStore = useMissionStore.getState()
    if (missionStore && allocation.mission) {
      const mission = missionStore.missions.find(m => m.title === allocation.mission)
      if (mission) {
        missionStore.fundMission(mission.id, amount)
      }
    }
    
    const systemStore = useSystemStore.getState()
    if (systemStore) {
      systemStore.notify('success', 'Funding approved: ' + amount + ' for ' + allocation.mission)
      systemStore.audit('FUNDING_APPROVED', 'Executive', amount + ' approved for ' + allocation.mission)
      systemStore.pushActivity('funding_approved', 'Executive', allocation.mission, amount)
    }
    
    const intelStore = useIntelStore.getState()
    if (intelStore) {
      intelStore.raiseAlert('success', 'Funding Approved', amount + ' allocated to ' + allocation.mission)
    }
  },

  allocateCapital: (missionId, amount) => {
    const newAllocation = { 
      id: Date.now(), 
      mission: missionId, 
      allocated: amount, 
      status: 'pending' 
    }
    set(state => ({ 
      allocations: [...state.allocations, newAllocation]
    }))
  },

  receiveDonation: (source, amount) => {
    const sourceType = typeof source === 'string' ? source : (source.name || 'Anonymous')
    const newTransaction = {
      id: Date.now(),
      type: sourceType.includes('Corporate') ? 'donation' : 'grant',
      amount,
      source: sourceType,
      date: new Date().toISOString().split('T')[0],
      status: 'completed'
    }
    set(state => {
      const currentTotal = parseNaira(state.treasury.total)
      const amountVal = parseNaira(amount)
      
      return {
        transactions: [newTransaction, ...state.transactions],
        treasury: {
          ...state.treasury,
          total: formatNaira(currentTotal + amountVal)
        }
      }
    })
  },

  createTransaction: (transaction) => {
    const newTx = { id: Date.now(), ...transaction, date: new Date().toISOString().split('T')[0] }
    set(state => ({ transactions: [newTx, ...state.transactions] }))
  },

  getCapitalStats: () => {
    const treasury = get().treasury
    const transactions = get().transactions
    return {
      total: treasury.total,
      deployable: treasury.deployable,
      monthlyInflow: transactions
        .filter(t => t.type !== 'disbursement')
        .reduce((sum, t) => sum + parseNaira(t.amount), 0),
      monthlyOutflow: transactions
        .filter(t => t.type === 'disbursement')
        .reduce((sum, t) => sum + parseNaira(t.amount), 0)
    }
  },

  setTreasury: (treasury) => set({ treasury }),
  setAllocations: (allocations) => set({ allocations }),
  setTransactions: (transactions) => set({ transactions }),
  setRevenueStreams: (revenueStreams) => set({ revenueStreams }),
}))