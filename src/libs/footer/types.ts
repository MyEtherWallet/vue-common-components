import amplitudeConfigs from "@/helpers/amplitudeConfigs";

/**
 * AppFooter content. The library knows no URLs, copy or app version: the
 * consumer passes already-translated strings and its own links. `event` is an
 * Amplitude event name (see FOOTER_EVENTS), tracked on click when the footer
 * gets an `amplitude` client.
 */
export interface FooterLink {
  label: string;
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer". */
  external?: boolean;
  event?: string;
}

/** Token logos shipped with the library for the donation chips. */
export const FOOTER_DONATION_TOKENS = ["ethereum", "bitcoin"] as const;
export type FooterDonationToken = (typeof FOOTER_DONATION_TOKENS)[number];

export interface FooterDonation extends FooterLink {
  /** Token avatar drawn before the label; omitted → label only. */
  token?: FooterDonationToken;
}

export interface FooterLinkGroup {
  /** Accessible name of the group's <nav>. */
  ariaLabel: string;
  links: FooterLink[];
}

/** Social icons shipped with the library. */
export const FOOTER_SOCIALS = [
  "twitter",
  "instagram",
  "linkedin",
  "github",
  "reddit",
  "youtube",
  "telegram",
] as const;
export type FooterSocialName = (typeof FOOTER_SOCIALS)[number];

export interface FooterSocial {
  name: FooterSocialName;
  /** Accessible name, e.g. "MEW Twitter". */
  label: string;
  href: string;
  event?: string;
  /** Sent as the event's `item`. */
  eventItem?: string;
}

/** The footer's Amplitude events, same names the 1.x MewFooter tracks. */
export const FOOTER_EVENTS = {
  aboutUs: amplitudeConfigs.footerAboutUs,
  team: amplitudeConfigs.footerTeam,
  privacy: amplitudeConfigs.footerPrivacy,
  terms: amplitudeConfigs.footerTerms,
  securityPolicy: amplitudeConfigs.footerSecurityPolicy,
  bugBounty: amplitudeConfigs.footerBugBounty,
  mobile: amplitudeConfigs.footerMobile,
  enkrypt: amplitudeConfigs.footerEnkrypt,
  ethvm: amplitudeConfigs.footerEthvm,
  helpCenter: amplitudeConfigs.footerHelpCenter,
  customerSupport: amplitudeConfigs.footerCustomerSupport,
  faq: amplitudeConfigs.footerFAQ,
  blog: amplitudeConfigs.footerMewtopia,
  pressKit: amplitudeConfigs.footerPressKit,
  ethDonation: amplitudeConfigs.footerEthDonation,
  btcDonation: amplitudeConfigs.footerBtcDonation,
  coinGecko: amplitudeConfigs.footerCoinGecko,
  joinCommunity: amplitudeConfigs.footerJoinMewCommunity,
} as const;
