<script setup lang="ts">
import { useRoute } from "vue-router";
import type { AmplitudePropType } from "@/libs/types";
import FooterDonationChip from "./FooterDonationChip.vue";
import FooterSocialButton from "./FooterSocialButton.vue";
import MewWordmark from "./MewWordmark.vue";
import type { FooterLink, FooterLinkGroup, FooterSocial } from "./types";

/**
 * Footer (v7 design library, Figma component set 1189:2949). One component for
 * the three Figma sizes, switched by the footer's own width with container
 * queries: Small < 688, Medium 688–1359, Large ≥ 1360. All copy and links come
 * from the consumer (see ./types).
 */
const props = withDefaults(
  defineProps<{
    linkGroups: FooterLinkGroup[];
    donationText: string;
    donations: FooterLink[];
    communityTitle: string;
    socials: FooterSocial[];
    /** e.g. "© 2026 MyEtherWallet. All rights reserved." */
    copyright: string;
    /** e.g. "Pricing taken from" — the source link follows it. */
    pricingText: string;
    pricingSource: FooterLink;
    /** e.g. "v7.0.9" */
    version: string;
    releaseUrl: string;
    versionLabel?: string;
    amplitude?: AmplitudePropType;
  }>(),
  { versionLabel: "Version:", amplitude: undefined },
);

const route = useRoute();
const track = (event?: string, item?: string) => {
  if (!event || !props.amplitude) return;
  props.amplitude.track(event, { route: route?.fullPath, item });
};

const LINK_CLASS =
  "rounded-[4px] text-label-base text-text-default transition-colors hover:text-text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus";
const linkTarget = (link: FooterLink) =>
  link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
</script>

<template>
  <footer class="@container w-full bg-background-default">
    <div
      class="flex flex-col gap-16 px-5 pb-5 pt-24 @[688px]:px-8 @[688px]:pb-8"
    >
      <!-- Link groups + donation: 1 → 2 → 4 columns -->
      <div
        class="grid grid-cols-1 gap-6 @[688px]:grid-cols-2 @[688px]:gap-y-16 @[1360px]:grid-cols-4"
      >
        <nav v-for="group in linkGroups" :key="group.ariaLabel" :aria-label="group.ariaLabel">
          <ul class="flex flex-col items-start gap-2">
            <li v-for="link in group.links" :key="link.href" class="flex">
              <a
                :href="link.href"
                v-bind="linkTarget(link)"
                :class="LINK_CLASS"
                @click="track(link.event)"
                >{{ link.label }}</a
              >
            </li>
          </ul>
        </nav>
        <div class="flex flex-col gap-4">
          <p class="text-text-sm text-text-default">{{ donationText }}</p>
          <div class="flex flex-col items-start gap-2">
            <FooterDonationChip
              v-for="donation in donations"
              :key="donation.href"
              :label="donation.label"
              :href="donation.href"
              @click="track(donation.event)"
            />
          </div>
        </div>
      </div>

      <!-- Community: right half (Medium) / last two columns (Large) -->
      <div
        class="grid grid-cols-1 gap-6 @[688px]:grid-cols-2 @[1360px]:grid-cols-4"
      >
        <div
          class="flex flex-col gap-6 @[688px]:col-start-2 @[1360px]:col-span-2 @[1360px]:col-start-3"
        >
          <p class="text-label-base text-text-default">{{ communityTitle }}</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="social in socials" :key="social.name" class="flex">
              <FooterSocialButton
                :name="social.name"
                :label="social.label"
                :href="social.href"
                @click="track(social.event, social.eventItem)"
              />
            </li>
          </ul>
        </div>
      </div>

      <!-- Wordmark + legal row -->
      <div class="flex flex-col gap-6">
        <MewWordmark class="h-auto w-full text-text-default" />
        <div
          class="grid gap-2 text-text-base text-text-subtle @[1360px]:grid-cols-[2fr_1fr_1fr]"
        >
          <p>{{ copyright }}</p>
          <p>
            {{ pricingText }}
            <a
              :href="pricingSource.href"
              v-bind="linkTarget(pricingSource)"
              class="underline"
              @click="track(pricingSource.event)"
              >{{ pricingSource.label }}</a
            >
          </p>
          <a :href="releaseUrl" target="_blank" rel="noopener noreferrer" class="self-start justify-self-start"
            >{{ versionLabel }} {{ version }}</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
