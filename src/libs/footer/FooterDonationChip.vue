<script setup lang="ts">
import AppIcon from "@/libs/icon/AppIcon.vue";

/**
 * Donation chip (Figma footer "Button (Legacy)"): 28px pill, 16px arrow-left
 * + label/xs. Footer-local — no design-library button size matches 28px.
 * Figma draws no hover state.
 */
defineProps<{ label: string; href: string }>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex h-7 items-center rounded-full bg-background-default-hover px-2 text-label-xs text-text-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
  >
    <AppIcon name="arrow-left" size="xxs" />
    <span class="px-1">{{ label }}</span>
  </a>
</template>
