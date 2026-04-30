export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  SCROLL_DEPTH: 'scroll_depth',
  HERO_JOIN_CLICK: 'hero_join_click',
  HERO_DONATE_CLICK: 'hero_donate_click',
  STICKY_MOBILE_JOIN_CLICK: 'sticky_mobile_join_click',
  JOIN_SUBMIT: 'join_submit',
  JOIN_STEP_PROGRESS: 'join_step_progress',
  JOIN_ABANDON: 'join_abandon',
  DONATION_START: 'donation_start',
  DONATION_COMPLETE: 'donation_complete',
  RECURRING_SELECTED: 'recurring_selected',
  PARTNER_CLICK: 'partner_click',
  STORY_CTA_CLICK: 'story_cta_click',
  STORY_VIDEO_PLAY: 'story_video_play',
}

export const ANALYTICS_PAYLOAD = {
  REQUIRED: ['route', 'section', 'label', 'timestamp', 'url'],
  OPTIONAL: ['amount', 'fund', 'step', 'storyId'],
}

export function formatPayload(eventName, data = {}, location = null) {
  return {
    event: eventName,
    route: location?.pathname || '',
    section: data.section || '',
    label: data.label || '',
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location?.href : '',
    ...data,
  }
}

export function logEvent(eventName, payload) {
  if (typeof window === 'undefined') return
  console.log('[Analytics]', payload)
}