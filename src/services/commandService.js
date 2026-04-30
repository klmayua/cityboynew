export const commandService={
  execute:async(payload)=>{
    return {
      ok:true,
      payload,
      executedAt:new Date().toISOString()
    }
  }
}