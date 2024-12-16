
export const AnalyticsHeaderLinkName = {
  LOGO: 'LOGO',
  SWAP_TOKENS: 'SWAP_TOKENS',
  BUY_CRYPTO: 'BUY_CRYPTO',
  NFT: 'NFT',
  DAPPS: 'DAPPS',
  MEWTOPIA: 'MEWTOPIA',
  HELP_CENTER: 'HELP_CENTER',
  CUSTOMER_SUPPORT: 'CUSTOMER_SUPPORT',
  PRODUCT: 'PRODUCT',
  HOME: 'HOME',

  STAKING: 'STAKING',
  FAQ: 'FAQ',
  ACCESS_WALLET: 'ACCESS_WALLET',

  // extra
  CLOSE_MOBILE_MENU: 'CLOSE_MOBILE_MENU',
} as const
export type AnalyticsHeaderLinkName = typeof AnalyticsHeaderLinkName[keyof typeof AnalyticsHeaderLinkName]

/** Always-present part of the analytics event payload when a header link is clicked */
export type AnalyticsHeaderLinkClickedPayload = {
  // "product" and "network" should be added by consumer in an enrichment
  // or by wrapping the "track" function
  language: string,
  sourceURL: string,
  destinationURL: string,
}

export const AnalyticsFooterLinkName = {
  ABOUT_US: 'ABOUT_US',
  CAREERS: 'CAREERS',
  HOW_IT_WORKS: 'HOW_IT_WORKS',
  TEAM: 'TEAM',
  ADVERTISE_WITH_US: 'ADVERTISE_WITH_US',
  PRIVACY: 'PRIVACY',
  TERMS: 'TERMS',
  BUG_BOUNTY: 'BUG_BOUNTY',
  MEW_MOBILE_APP: 'MEW_MOBILE_APP',
  ENKRYPT: 'ENKRYPT',
  PORTFOLIO: 'PORTFOLIO',
  ETHVM: 'ETHVM',
  MEWTOPIA: 'MEWTOPIA',
  PRESS_KIT: 'PRESS_KIT',
  HELP_CENTER: 'HELP_CENTER',
  CUSTOMER_SUPPORT: 'CUSTOMER_SUPPORT',
  SECURITY_POLICY: 'SECURITY_POLICY',
  VERIFY_MESSAGE: 'VERIFY_MESSAGE',
  CONVERT_UNITS: 'CONVERT_UNITS',
  SEND_OFFLINE_HELPER: 'SEND_OFFLINE_HELPER',
  ETH_DONATION: 'ETH_DONATION',
  BTC_DONATION: 'BTC_DONATION',
  COINGECKO: 'COINGECKO',
  FAQ: 'FAQ',
  JOIN_COMMUNITY: 'JOIN_COMMUNITY',
  OPEN_MOBILE_MENU: 'OPEN_MOBILE_MENU',
} as const
export type AnalyticsFooterLinkName = typeof AnalyticsFooterLinkName[keyof typeof AnalyticsFooterLinkName]

/** Always-present part of the analytics event payload when a footer link is clicked */
export type AnalyticsFooterLinkClickedPartialPayload = {
  // "product" and "network" should be added by consumer in an enrichment
  // or by wrapping the "track" function
  language: string,
  sourceURL: string,
  destinationURL: string,
}

export const AnalyticsSubscriptionEventName = {
  CLOSE_POPUP: "CLOSE_POPUP",
  OPEN_POPUP: "OPEN_POPUP",
  CLICK_BUY_CRYPTO_BTN: "CLICK_BUY_CRYPTO_BTN",
  CLICK_SIGNUP_BTN: "CLICK_SIGNUP_BTN",
  CLICK_FINISH: "CLICK_FINISH",
  CREATE_WALLET1: 'CREATE_WALLET1',
} as const
export type AnalyticsSubscriptionEventName = typeof AnalyticsSubscriptionEventName[keyof typeof AnalyticsSubscriptionEventName]

/** Always-present part of the analytics subscription event payload */
export type AnalyticsSubscriptionPartialPayload = {
  route: string,
  language: string,
}
