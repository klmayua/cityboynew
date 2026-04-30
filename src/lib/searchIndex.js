export const searchIndex = [
  { id: 'overview', label: 'Overview', path: '/app/command', keywords: ['home', 'dashboard', 'main'] },
  { id: 'warroom', label: 'War Room', path: '/app/command/war-room', keywords: ['live', 'operations', 'real-time'] },
  { id: 'funding', label: 'Funding Command', path: '/app/command/funding', keywords: ['donors', 'money', 'raised', 'pipeline'] },
  { id: 'partners', label: 'Partner Command', path: '/app/command/partners', keywords: ['corporate', 'institutional', 'sponsors'] },
  { id: 'projects', label: 'Project Command', path: '/app/command/projects', keywords: ['portfolio', 'execution', 'budget'] },
  { id: 'sentiment', label: 'Sentiment Intelligence', path: '/app/command/sentiment', keywords: ['public', 'perception', 'media', 'issues'] },
  { id: 'mobilization', label: 'Mobilization', path: '/app/command/mobilization', keywords: ['volunteers', 'dispatch', 'missions'] },
  { id: 'pulse', label: 'National Pulse', path: '/app/command/pulse', keywords: ['engagement', 'metrics', 'realtime'] },
  { id: 'reports', label: 'Reports', path: '/app/command/reports', keywords: ['download', 'export', 'analytics'] },
]

export function fuzzySearch(query) {
  if (!query || query.length < 1) return searchIndex.slice(0, 5)
  
  const q = query.toLowerCase()
  
  return searchIndex
    .map(item => {
      let score = 0
      
      if (item.label.toLowerCase().includes(q)) score += 10
      if (item.id === q) score += 5
      item.keywords?.forEach(k => {
        if (k.includes(q)) score += 3
      })
      
      return { ...item, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(({ score, ...item }) => item)
}