<script setup lang="ts">
import SVGTwitter from "@/assets/social/glyph/twitter.svg";
import SVGInstagram from "@/assets/social/glyph/instagram.svg";
import SVGLinkedin from "@/assets/social/glyph/linkedin.svg";
import SVGGithub from "@/assets/social/glyph/github.svg";
import SVGReddit from "@/assets/social/glyph/reddit.svg";
import SVGYoutube from "@/assets/social/glyph/youtube.svg";
import SVGTelegram from "@/assets/social/glyph/telegram.svg";
import type { FooterSocialName } from "./types";

/**
 * Social link (Figma footer: 44px circle, 1px border/hover). The glyphs are
 * the library's social icons without their own outline ring, since the button
 * draws it. Figma draws no hover state.
 */
defineProps<{ name: FooterSocialName; label: string; href: string }>();

const ICON: Record<FooterSocialName, string> = {
  twitter: SVGTwitter,
  instagram: SVGInstagram,
  linkedin: SVGLinkedin,
  github: SVGGithub,
  reddit: SVGReddit,
  youtube: SVGYoutube,
  telegram: SVGTelegram,
};
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    class="flex size-11 items-center justify-center overflow-hidden rounded-full border border-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
  >
    <img :src="ICON[name]" alt="" class="size-full" loading="lazy" />
  </a>
</template>
