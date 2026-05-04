import { useCapitalStore } from '../store/capitalStore'

function parseNaira(str) {
  if (!str) return 0
  return parseFloat(str.replace(/₦/g, '').replace(/B/g, '').replace(/M/g, '')) || 0
}

export const getPendingAllocations = () => {
  return useCapitalStore.getState().allocations.filter(a => a.status === 'pending')
}

export const getCommittedCapital = () => {
  const capital = useCapitalStore.getState()
  return parseNaira(capital.treasury.committed)
}

export const getCapitalVelocity = () => {
  const capital = useCapitalStore.getState()
  const total = parseNaira(capital.treasury.total)
  const committed = parseNaira(capital.treasury.committed)
  return total > 0 ? Math.round((committed / total) * 100) : 0
}

export const usePendingAllocations = () => useCapitalStore(s => s.allocations.filter(a => a.status === 'pending'))
export const useTreasuryTotal = () => useCapitalStore(s => s.treasury.total)
export const useTreasuryDeployable = () => useCapitalStore(s => s.treasury.deployable)
export const useAllocationCount = () => useCapitalStore(s => s.allocations.length)
export const usePendingAllocationCount = () => useCapitalStore(s => s.allocations.filter(a => a.status === 'pending').length)