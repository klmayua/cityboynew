import { useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ANALYTICS_EVENTS, formatPayload, logEvent } from './events'

export function useAnalytics() {
  const location = useLocation()
  
  const trackEvent = useCallback((eventName, data = {}) => {
    const payload = formatPayload(eventName, data, location)
    logEvent(eventName, payload)
  }, [location])

  const trackJoinClick = useCallback((label) => {
    trackEvent(ANALYTICS_EVENTS.HERO_JOIN_CLICK, { label, section: 'hero' })
  }, [trackEvent])

  const trackDonateClick = useCallback((label) => {
    trackEvent(ANALYTICS_EVENTS.HERO_DONATE_CLICK, { label, section: 'hero' })
  }, [trackEvent])

  const trackDonationStart = useCallback((amount, fund) => {
    trackEvent(ANALYTICS_EVENTS.DONATION_START, { amount, fund, section: 'donate_form' })
  }, [trackEvent])

  const trackDonationComplete = useCallback((amount, fund) => {
    trackEvent(ANALYTICS_EVENTS.DONATION_COMPLETE, { amount, fund, section: 'checkout' })
  }, [trackEvent])

  const trackRecurring = useCallback((frequency) => {
    trackEvent(ANALYTICS_EVENTS.RECURRING_SELECTED, { frequency, section: 'donate_form' })
  }, [trackEvent])

  const trackPartnerClick = useCallback(() => {
    trackEvent(ANALYTICS_EVENTS.PARTNER_CLICK, {})
  }, [trackEvent])

  const trackStoryClick = useCallback((storyId) => {
    trackEvent(ANALYTICS_EVENTS.STORY_CTA_CLICK, { storyId, section: 'stories' })
  }, [trackEvent])

  const trackStoryVideo = useCallback((storyId) => {
    trackEvent(ANALYTICS_EVENTS.STORY_VIDEO_PLAY, { storyId, section: 'featured_video' })
  }, [trackEvent])

  const trackJoinSubmit = useCallback(() => {
    trackEvent(ANALYTICS_EVENTS.JOIN_SUBMIT, { section: 'join_form', label: 'submit' })
  }, [trackEvent])

  const trackJoinStep = useCallback((step, direction = 'next') => {
    trackEvent(ANALYTICS_EVENTS.JOIN_STEP_PROGRESS, { step, direction, section: 'join_form' })
  }, [trackEvent])

  const trackJoinAbandon = useCallback((step) => {
    trackEvent(ANALYTICS_EVENTS.JOIN_ABANDON, { step, section: 'join_form' })
  }, [trackEvent])

  return {
    trackEvent,
    trackJoinClick,
    trackDonateClick,
    trackDonationStart,
    trackDonationComplete,
    trackRecurring,
    trackPartnerClick,
    trackStoryClick,
    trackStoryVideo,
    trackJoinSubmit,
    trackJoinStep,
    trackJoinAbandon,
  }
}