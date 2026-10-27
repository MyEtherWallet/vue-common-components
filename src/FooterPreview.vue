<template>
  <!-- Dev preview for AppFooter (open /#footer): the three Figma sizes
       (1189:2947 / 1189:2946 / 1189:2948), then full width. -->
  <div class="flex flex-col gap-10 bg-white p-6 font-['DM_Sans']">
    <section v-for="w in WIDTHS" :key="w.label">
      <p class="mb-2 font-bold">{{ w.label }}</p>
      <div :class="w.box">
        <AppFooter v-bind="SAMPLE" :amplitude="{ track: log }" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { AppFooter, FOOTER_EVENTS } from "./libs/main";
import type { FooterDonation, FooterLinkGroup, FooterSocial } from "./libs/main";

const WIDTHS = [
  { label: "Small — 320", box: "w-[320px]" },
  { label: "Medium — 688", box: "w-[688px]" },
  { label: "Large — 1360", box: "w-[1360px]" },
  { label: "Full width", box: "w-full" },
];

const log = (event: string, options?: object) =>
  console.log("track", event, options);

const MEW = "https://www.myetherwallet.com/";
const linkGroups: FooterLinkGroup[] = [
  {
    ariaLabel: "Company",
    links: [
      { label: "About us", href: `${MEW}about`, event: FOOTER_EVENTS.aboutUs },
      { label: "Team", href: `${MEW}team`, event: FOOTER_EVENTS.team },
      { label: "Privacy", href: `${MEW}privacy-policy`, event: FOOTER_EVENTS.privacy },
      { label: "Terms", href: `${MEW}terms-of-service`, event: FOOTER_EVENTS.terms },
      { label: "Security Policy", href: `${MEW}security-policy`, event: FOOTER_EVENTS.securityPolicy },
      { label: "Bug Bounty", href: "https://hackenproof.com/programs/myetherwallet", external: true, event: FOOTER_EVENTS.bugBounty },
    ],
  },
  {
    ariaLabel: "Products",
    links: [
      { label: "MEW Mobile App", href: "https://www.mewwallet.com/", external: true, event: FOOTER_EVENTS.mobile },
      { label: "Enkrypt", href: "https://www.enkrypt.com/", external: true, event: FOOTER_EVENTS.enkrypt },
      { label: "ethVM", href: "https://www.ethvm.com/", external: true, event: FOOTER_EVENTS.ethvm },
    ],
  },
  {
    ariaLabel: "Support",
    links: [
      { label: "Help Center", href: "https://help.myetherwallet.com/en/", external: true, event: FOOTER_EVENTS.helpCenter },
      { label: "Customer Support", href: "mailto:support@myetherwallet.com", external: true, event: FOOTER_EVENTS.customerSupport },
      { label: "FAQ", href: `${MEW}faq`, event: FOOTER_EVENTS.faq },
      { label: "Blog", href: `${MEW}blog/`, external: true, event: FOOTER_EVENTS.blog },
      { label: "Press Kit", href: `${MEW}presskit`, event: FOOTER_EVENTS.pressKit },
    ],
  },
];

const donations: FooterDonation[] = [
  { label: "Ethereum Donation", href: "https://www.ethvm.com/address/0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D", event: FOOTER_EVENTS.ethDonation, token: "ethereum" },
  { label: "Bitcoin Donation", href: "https://www.blockchain.com/explorer/addresses/btc/1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9", event: FOOTER_EVENTS.btcDonation, token: "bitcoin" },
];

const socials: FooterSocial[] = [
  { name: "twitter", label: "MEW Twitter", href: "https://twitter.com/myetherwallet/" },
  { name: "instagram", label: "MEW Instagram", href: "https://www.instagram.com/myetherwallet/" },
  { name: "linkedin", label: "MEW LinkedIn", href: "https://www.linkedin.com/company/myetherwallet/" },
  { name: "github", label: "MEW GitHub", href: "https://github.com/myetherwallet" },
  { name: "reddit", label: "MEW Reddit", href: "https://www.reddit.com/r/MyEtherWallet/" },
  { name: "youtube", label: "MEW YouTube", href: "https://www.youtube.com/@MyEtherWallet" },
  { name: "telegram", label: "MEW Telegram", href: "https://t.me/myetherwallet" },
].map((s) => ({ ...s, event: FOOTER_EVENTS.joinCommunity, eventItem: s.name })) as FooterSocial[];

const SAMPLE = {
  linkGroups,
  donationText:
    "Help us keep MEW free and open-source, your donations go a long way towards making that possible.",
  donations,
  communityTitle: "Join MEW Community",
  socials,
  copyright: `© ${new Date().getFullYear()} MyEtherWallet. All rights reserved.`,
  pricingText: "Pricing taken from",
  pricingSource: { label: "CoinGecko", href: "https://www.coingecko.com/", external: true, event: FOOTER_EVENTS.coinGecko },
  version: "v7.0.9",
  releaseUrl: "https://github.com/MyEtherWallet/MyEtherWallet/releases/tag/v7.0.9",
};
</script>
