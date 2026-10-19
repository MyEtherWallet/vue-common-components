/**
 * Icon registry — port of the v7 app's `components/icon/icons.ts`
 * (MyEtherWallet/MyEtherWallet, design library Figma `Icon` 4159:104520).
 * Same names, sizes and API, so app code can move to the library icon without
 * changes. Only the glyphs library components use are registered; add more as
 * they are needed.
 */
import type { Component } from "vue";
import ArrowLeftOutline from "./custom/ArrowLeftOutline.vue";

export const ICON_SIZES = ["xxs", "xs", "s", "m", "l", "xl", "xxl"] as const;
export type IconSize = (typeof ICON_SIZES)[number];

export const ICON_SIZE_CLASS: Record<IconSize, string> = {
  xxs: "size-4",
  xs: "size-[18px]",
  s: "size-5",
  m: "size-6",
  l: "size-8",
  xl: "size-10",
  xxl: "size-14",
};

/** A glyph provides one or both variants; AppIcon falls back to the other. */
export type IconEntry = { stroke?: Component; filled?: Component };

export const icons = {
  "arrow-left": { stroke: ArrowLeftOutline },
} satisfies Record<string, IconEntry>;

export type IconName = keyof typeof icons;
