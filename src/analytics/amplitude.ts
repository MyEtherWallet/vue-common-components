import { AmplitudeLike } from "@/libs/types";
import {
  AnalyticsFooterLinkClickedPartialPayload,
  AnalyticsFooterLinkName,
  AnalyticsHeaderLinkName,
  AnalyticsSubscriptionEventName,
  AnalyticsSubscriptionPartialPayload,
} from "./events";

export const AmplitudeEvent = {
  FOOTER_LINK_CLICKED: 'FOOTER_LINK_CLICKED',
  HEADER_LINK_CLICKED: 'HEADER_LINK_CLICKED',
  SUBSCRIPTION: 'SUBSCRIPTION',
}

async function trackEvent(
  amplitude: AmplitudeLike,
  eventType: string,
  eventProperties: Record<string, unknown>,
): Promise<void> {
  try {
    const { promise } = amplitude.track(eventType, eventProperties)
    await promise
  } catch (err) {
    // Silently drop the error
    // Maybe consider logging it or something
  }
}

export async function trackHeaderLinkClickedEvent(
  amplitude: AmplitudeLike,
  linkName: AnalyticsHeaderLinkName,
  /** May include more properties than specified in `payload's` type */
  payload: AnalyticsFooterLinkClickedPartialPayload,
): Promise<void> {
  await trackEvent(amplitude, AmplitudeEvent.HEADER_LINK_CLICKED, {
    linkName,
    ...payload,
  })
}

export async function trackFooterLinkClickedEvent(
  amplitude: AmplitudeLike,
  linkName: AnalyticsFooterLinkName,
  /** May include more properties than specified in the `payload's` type */
  payload: AnalyticsFooterLinkClickedPartialPayload,
): Promise<void> {
  await trackEvent(amplitude, AmplitudeEvent.FOOTER_LINK_CLICKED, {
    linkName,
    ...payload,
  })
}


export async function trackSubscriptionEvent(
  amplitude: AmplitudeLike,
  event: AnalyticsSubscriptionEventName,
  /**
   * May include more properties than specified in the `payload's` type
   * Payload is pretty dynamic, changes a lot with `event`
   */
  payload: AnalyticsSubscriptionPartialPayload,
): Promise<void> {
  await trackEvent(amplitude, AmplitudeEvent.SUBSCRIPTION, {
    event,
    ...payload
  })
}
