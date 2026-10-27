<script setup lang="ts">
import SVGEthereum from "@/assets/tokens/eth.svg";
import ImgBitcoin from "@/assets/social/btc.webp";
import type { FooterDonationToken } from "./types";

/**
 * Donation chip (Figma footer "Button (Legacy)"): 28px pill, 18px token
 * avatar + label/xs. Footer-local — no design-library button size matches 28px.
 * Figma draws no hover state.
 */
defineProps<{ label: string; href: string; token?: FooterDonationToken }>();

const LOGO: Record<FooterDonationToken, string> = {
  ethereum: SVGEthereum,
  bitcoin: ImgBitcoin,
};
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex h-7 items-center rounded-full bg-background-default-hover px-2 text-label-xs text-text-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
  >
    <img
      v-if="token"
      :src="LOGO[token]"
      alt=""
      class="size-[18px] shrink-0 rounded-full"
      loading="lazy"
    />
    <span class="px-1">{{ label }}</span>
  </a>
</template>
