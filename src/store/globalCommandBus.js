import { create } from 'zustand'

export const useGlobalCommandBus = create((set)=>({
  commands: [],
  logs: [
    { id: '1', type: 'execute', title: 'Strategic mobilization ordered for North Central', status: 'complete', at: Date.now() - 60000 },
    { id: '2', type: 'execute', title: 'Capital deployment approved - ₦150M to Sterling Bank', status: 'complete', at: Date.now() - 120000 },
    { id: '3', type: 'execute', title: 'Media campaign launched - Digital Literacy Initiative', status: 'running', at: Date.now() - 180000 },
    { id: '4', type: 'execute', title: 'Volunteer recruitment wave initiated', status: 'complete', at: Date.now() - 240000 },
    { id: '5', type: 'execute', title: 'Chapter expansion approved - Delta State', status: 'complete', at: Date.now() - 300000 },
    { id: '6', type: 'execute', title: 'Intelligence briefing generated', status: 'complete', at: Date.now() - 360000 },
    { id: '7', type: 'execute', title: 'Security audit completed', status: 'complete', at: Date.now() - 420000 },
    { id: '8', type: 'execute', title: 'Automation chain deployed - Donor Onboarding', status: 'complete', at: Date.now() - 480000 },
    { id: '9', type: 'execute', title: 'Predictive model refreshed', status: 'complete', at: Date.now() - 540000 },
    { id: '10', type: 'execute', title: 'Sentiment analysis updated', status: 'complete', at: Date.now() - 600000 },
    { id: '11', type: 'execute', title: 'Executive dashboard refreshed', status: 'complete', at: Date.now() - 660000 },
    { id: '12', type: 'execute', title: 'Partner renewal sequence triggered', status: 'queued', at: Date.now() - 720000 },
  ],
  notifications: [
    { id: '1', type: 'success', title: 'Regional mobilization target EXCEEDED in North Central', time: '2m ago', read: false },
    { id: '2', type: 'success', title: 'Capital commitment received - ₦200M from Dangote Foundation', time: '8m ago', read: false },
    { id: '3', type: 'info', title: 'New chapter approved - Warri Chapter', time: '15m ago', read: false },
    { id: '4', type: 'info', title: 'Volunteer onboarding spike +482 today', time: '27m ago', read: false },
    { id: '5', type: 'success', title: 'Execution engine completed strategic rollout - 98% success', time: '42m ago', read: false },
    { id: '6', type: 'warning', title: 'Security advisory escalated to executive tier', time: '1h ago', read: false },
    { id: '7', type: 'info', title: 'Media sentiment trending positive', time: '2h ago', read: false },
    { id: '8', type: 'success', title: 'Chapter growth +11% this month', time: '3h ago', read: false },
    { id: '9', type: 'info', title: 'AI approval projection updated to 72%', time: '4h ago', read: false },
    { id: '10', type: 'info', title: 'Whale pipeline updated - 3 new prospects', time: '5h ago', read: false },
  ],
  execute:(command)=>set(state=>({
    commands:[command,...state.commands].slice(0,100),
    logs:[
      {
        id: Math.random().toString(36),
        type:'execute',
        title:command.title,
        status: 'running',
        at:Date.now()
      },
      ...state.logs
    ].slice(0,500)
  })),
  notify:(note)=>set(state=>({
    notifications:[note,...state.notifications].slice(0,50)
  }))
}))