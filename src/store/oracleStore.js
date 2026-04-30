import { create } from 'zustand'

export const useOracleStore = create(()=>({
  confidence: 84,
  scenarios: 7,
  riskScore: 18,
  recommendations: 12
}))