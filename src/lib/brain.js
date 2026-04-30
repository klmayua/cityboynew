import { useCommandStore } from '../store/commandStore'

export function generateRecommendations(state) {
  const recs = []
  const sentiment = state?.sentiment
  const metrics = state?.metrics
  const projects = state?.projects

  if (sentiment?.negative > 25) {
    recs.push({
      id: 'sentiment-risk',
      severity: 'high',
      title: 'Sentiment degradation in North East',
      action: 'Deploy media response team',
      type: 'sentiment'
    })
  }

  if (metrics?.conversion < 2) {
    recs.push({
      id: 'conversion-risk',
      severity: 'medium', 
      title: 'Conversion rate below threshold',
      action: 'Launch donor funnel campaign',
      type: 'funding'
    })
  }

  const delayedProjects = projects?.filter(p => p.status === 'delayed')
  if (delayedProjects?.length > 0) {
    recs.push({
      id: 'execution-risk',
      severity: 'high',
      title: `${delayedProjects.length} delayed project(s) need attention`,
      action: 'Escalate execution review',
      type: 'projects'
    })
  }

  const atRiskProjects = projects?.filter(p => p.status === 'at_risk')
  if (atRiskProjects?.length > 0) {
    recs.push({
      id: 'at-risk-projects',
      severity: 'medium',
      title: `${atRiskProjects.length} project(s) at risk`,
      action: 'Review resource allocation',
      type: 'projects'
    })
  }

  if (!recs.length || recs.length < 2) {
    recs.unshift({
      id: 'growth-opportunity',
      severity: 'low',
      title: 'System stable',
      action: 'Push growth campaign in Lagos',
      type: 'mobilization'
    })
  }

  return recs.slice(0, 5)
}