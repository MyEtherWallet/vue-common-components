<script setup lang="ts">
import { computed } from "vue";
import {
  icons,
  ICON_SIZE_CLASS,
  type IconEntry,
  type IconName,
  type IconSize,
} from "./icons";

/**
 * Icon (design library, Figma `Icon` 4159:104520) — port of the v7 app's
 * AppIcon with the same props. Color comes from the parent via currentColor.
 * Decorative by default; pass `label` to name it for assistive tech.
 */
const props = withDefaults(
  defineProps<{
    name: IconName;
    size?: IconSize;
    variant?: "stroke" | "filled";
    /** Accessible name. Omit for decorative icons (svg stays aria-hidden). */
    label?: string;
  }>(),
  {
    size: "m",
    variant: "stroke",
    label: undefined,
  },
);

const entry = computed<IconEntry | undefined>(() => icons[props.name]);
const component = computed(
  () =>
    entry.value?.[props.variant] ?? entry.value?.stroke ?? entry.value?.filled,
);
const sizeClass = computed(() => ICON_SIZE_CLASS[props.size]);
</script>

<template>
  <span v-if="label" role="img" :aria-label="label" class="inline-flex shrink-0">
    <component
      :is="component"
      :class="sizeClass"
      aria-hidden="true"
      focusable="false"
    />
  </span>
  <component
    :is="component"
    v-else
    :class="sizeClass"
    aria-hidden="true"
    focusable="false"
  />
</template>
