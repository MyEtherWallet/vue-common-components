<template>
  <Menu
    as="div"
    class="relative inline-block text-left"
    @mouseover="open = true"
    @mouseleave="open = false"
  >
    <div>
      <MenuButton
        :id="`menu-button-${text}`"
        class="font-medium text-base xl:text-lg hoverOpacity flex items-center"
      >
        {{ text }}
        <img
          :src="ICONChevronDown"
          contain
          alt="menu icon"
          class="ml-1 mt-px"
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-show="open">
        <MenuItems
          :id="`menu-items-${text}`"
          static
          class="absolute -left-4 origin-top-right focus:outline-none"
        >
          <div
            class="px-5 py-4 min-w-60 max-w-full mt-6 bg-white shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.32)] rounded-xl"
          >
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

defineProps({
  text: {
    default: "",
    type: String,
  },
});

const open = ref(false);
</script>
