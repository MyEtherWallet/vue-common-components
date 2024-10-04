<template>
  <Menu as="div" class="relative inline-block props.text-left" @mouseover="open = true" @mouseleave="open = false">
    <div>
      <MenuButton :id="`menu-button-${props.text}`"
        class="font-medium text-base xl:text-lg hoverOpacity flex items-center">
        {{ props.text }}
        <img :src="ICONChevronDown" contain :alt="t('common_components.open-dropdown')" class="ml-1 mt-px"
          loading="lazy" width="11px" height="7px" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <div v-show="open">
        <MenuItems :id="`menu-items-${props.text}`" static class="absolute -left-4 origin-top-right focus:outline-none">
          <div
            class="px-5 py-4 min-w-60 max-w-full mt-6 bg-white shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.32)] rounded-xl">
            <slot name="items"></slot>
          </div>
        </MenuItems>
      </div>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import ICONChevronDown from "@/assets/icons/chevron-down.svg";
import { ref } from "vue";
import commonMessages from "@/i18n/locales/common/index";

const props = defineProps({
  text: {
    default: "",
    type: String,
  },
  useI18n: {
    required: true,
    type: Function
  }
});
const { t } = props.useI18n({
  messages: {
    ...commonMessages
  }
})

const open = ref(false);
</script>
<style>
@import "../../style.css";
</style>