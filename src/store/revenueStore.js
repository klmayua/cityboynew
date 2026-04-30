import { create } from 'zustand'

export const useRevenueStore=create((set)=>({
  monthlyRevenue:0,
  forecast:0,
  invoices:[],
  subscriptions:[],
  addInvoice:(invoice)=>set(state=>({
    invoices:[
      {
        id:Date.now(),
        status:'pending',
        ...invoice
      },
      ...state.invoices
    ]
  })),
  payInvoice:(id)=>set(state=>({
    invoices:state.invoices.map(i=>
      i.id===id ? {...i,status:'paid'} : i
    )
  }))
}))