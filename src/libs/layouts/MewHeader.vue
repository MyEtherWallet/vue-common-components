<template>
  <div id="myetherwallet-core-header">
    <header v-if="!isOpenMobileMenu" class="fixed inset-x-0 top-0 z-10 lg:p-5">
      <div
        class="mx-auto flex max-w-[1400px] items-center justify-between gap-6 bg-white p-6 lg:rounded-[99px] lg:p-4"
      >
        <!-- Logo -->
        <MewLink
          :link-url="PROJECT_LINKS[PROJECTS.LANDING].HOME"
          :curr-project="props.currProject"
          :link-component="props.linkComponent"
          link-text=""
          class="flex shrink-0"
          @mewlink:click="trackLogo"
        >
          <img
            :src="IMGMEWlogo"
            contain
            :alt="t('home')"
            class="h-8 w-auto cursor-pointer"
            width="113"
            height="32"
            loading="lazy"
          />
        </MewLink>
        <!-- Menu items -->
        <nav class="hidden items-center gap-2 lg:flex">
          <MewLink
            :link-url="PROJECT_LINKS[PROJECTS.LANDING].HOME"
            :curr-project="props.currProject"
            :link-component="props.linkComponent"
            :link-text="t('home')"
            :class="[menuItemClasses(isHomeActive), 'capitalize']"
            @mewlink:click="trackHome"
          />
          <MewLink
            :link-url="PROJECT_LINKS[PROJECTS.LANDING].REWARDS"
            :curr-project="props.currProject"
            :link-component="props.linkComponent"
            :link-text="t('rewards')"
            :class="menuItemClasses(isRewardsActive)"
            @mewlink:click="trackRewards"
          />
          <!-- Resources Dropdown -->
          <MewAppDropdownMenu :text="t('resources.title')" :useI18n="useI18n">
            <template #items>
              <div class="grid gap-6">
                <a
                  href="https://www.myetherwallet.com/blog"
                  target="_blank"
                  class="text-base xl:text-lg hoverOpacity"
                  @click="trackMewtopia"
                  >{{ t("resources.blog") }}</a
                >
                <a
                  href="https://help.myetherwallet.com/en/"
                  target="_blank"
                  class="text-base xl:text-lg hoverOpacity"
                  @click="trackHelpCenter"
                  >{{ t("resources.help_center") }}</a
                >
                <MewLink
                  :link-url="PROJECT_LINKS[PROJECTS.LANDING].FAQ"
                  :curr-project="props.currProject"
                  :link-component="props.linkComponent"
                  :link-text="t('resources.faq')"
                  @mewlink:click="trackFAQ"
                  class="text-base xl:text-lg hoverOpacity"
                />
                <a
                  href="mailto:support@myetherwallet.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-base xl:text-lg hoverOpacity"
                  @click="trackCustomerSupport"
                  >{{ t("resources.customer_support") }}</a
                >
              </div>
            </template>
          </MewAppDropdownMenu>
          <!-- Products Dropdown -->
          <MewAppDropdownMenu :text="t('products')" :useI18n="useI18n">
            <template #items>
              <div
                class="grid grid-cols-1 3xl:grid-cols-2 gap-y-1 lg:gap-y-2 min-w-[280px] lg:min-w-[300px] 3xl:min-w-[568px] -mx-4 lg:mx-0"
              >
                <div class="hoverBGGrey rounded-2xl">
                  <a
                    href="https://www.mewwallet.com/"
                    target="_blank"
                    class="flex items-start p-2"
                    @click="trackProduct({ item: 'MobileApp' })"
                  >
                    <img
                      :src="IMGMobilelogo"
                      alt="MEW mobile wallet icon"
                      class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                      width="50px"
                      height="auto"
                      loading="lazy"
                    />
                    <div class="grow">
                      <p
                        class="text-base xl:text-lg font-bold mb-1 text-wrap"
                      >
                        {{ t("mew_mobile_app.title") }}
                      </p>
                      <p class="opacity-65 text-sm">
                        {{ t("mew_mobile_app.description") }}
                      </p>
                    </div>
                  </a>
                </div>
                <div id="header-products-mew" class="hoverBGGrey rounded-2xl">
                  <a
                    href="https://app.myetherwallet.com/"
                    target="_blank"
                    @mewlink:click="trackProduct({ item: 'MewWeb' })"
                  >
                    <div class="flex items-start p-2">
                      <img
                        :src="IMGWeblogo"
                        alt="MEW portfolio manager"
                        width="50px"
                        height="auto"
                        class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                        loading="lazy"
                      />
                      <div class="block">
                        <p
                          class="text-base xl:text-lg font-bold mb-1 text-wrap"
                        >
                          {{ t("mew_portfolio_manager.title") }}
                        </p>
                        <p class="opacity-65 text-sm">
                          {{ t("mew_portfolio_manager.description") }}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  id="header-products-enkrypt"
                  class="hoverBGGrey rounded-2xl"
                >
                  <a
                    href="https://www.enkrypt.com/"
                    target="_blank"
                    class="flex items-start p-2"
                    @click="trackProduct({ item: 'Enkrypt' })"
                  >
                    <img
                      :src="IMGEnkryptlogo"
                      alt="Enkrypt wallet extension"
                      width="50px"
                      height="auto"
                      class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                      loading="lazy"
                    />
                    <div>
                      <p class="text-base xl:text-lg font-bold mb-1">
                        {{ t("enkrypt.title") }}
                      </p>
                      <p class="opacity-65 text-sm">
                        {{ t("enkrypt.description") }}
                      </p>
                    </div>
                  </a>
                </div>
                <div
                  id="header-products-ethVM"
                  class="hoverBGGrey rounded-2xl"
                >
                  <a
                    href="https://www.ethvm.com/"
                    target="_blank"
                    class="flex items-start p-2"
                    @click="trackProduct({ item: 'Ethvm' })"
                  >
                    <img
                      :src="IMGEthvmlogo"
                      alt="ethVM - block explorer"
                      width="50px"
                      height="auto"
                      class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                      loading="lazy"
                    />
                    <div>
                      <p class="text-base xl:text-lg font-bold mb-1">
                        {{ t("ethvm.title") }}
                      </p>
                      <p class="opacity-65 text-sm">
                        {{ t("ethvm.description") }}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </template>
          </MewAppDropdownMenu>
        </nav>
        <!-- Actions -->
        <div class="flex items-center gap-4 lg:flex-1 lg:justify-end lg:gap-2">
          <div class="hidden items-center gap-2 sm:flex">
            <a
              href="https://ccswap.myetherwallet.com/"
              target="_blank"
              :class="[BUTTON_BASE, 'text-primary hoverBGGrey']"
              @click="trackBuy"
              >{{ t("buy") }}</a
            >
            <a
              href="https://app.myetherwallet.com/access?type=default"
              target="_blank"
              :class="[BUTTON_BASE, 'bg-primary text-white hoverOpacityHasBG']"
              @click="trackAccessWallet"
              >{{ t("access_wallet") }}</a
            >
          </div>
          <!-- Mobile Menu Button -->
          <button
            type="button"
            class="flex size-8 items-center justify-center lg:hidden"
            :aria-label="t('open_menu')"
            @click="openMobileMenu"
          >
            <img
              :src="ICONBars"
              alt=""
              width="24"
              height="24"
              class="size-6"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </header>
    <mew-mobile-menu
      :useI18n="useI18n"
      :is-open="isOpenMobileMenu"
      :amplitude="$amplitude"
      :link-component="props.linkComponent"
      :curr-project="props.currProject"
      :user-consent="props.userConsent"
      :curr-url="ampUrl"
      @update:consent="(val) => emit('update:consent', val)"
      @close-mobile-menu="isOpenMobileMenu = false"
    >
      <template #lang-switch>
        <slot name="lang-switch-mobile" />
      </template>
    </mew-mobile-menu>
  </div>
</template>
<script setup lang="ts">
import IMGMEWlogo from "@/assets/images/logo.svg";
import IMGWeblogo from "@/assets/images/products/mewweb-logo.svg";
import IMGMobilelogo from "@/assets/images/products/mewwallet-logo.svg";
import IMGEnkryptlogo from "@/assets/images/products/enkrypt-logo.webp";
import IMGEthvmlogo from "@/assets/images/products/ethvm-logo.svg";
import ICONBars from "@/assets/icons/bars-3.svg";
import amplitudeConfigs from "@/helpers/amplitudeConfigs";
import MewAppDropdownMenu from "./MewAppDropdownMenu.vue";
import MewMobileMenu from "./MewMobileMenu.vue";
import MewLink from "./MewLink.vue";
import { ref, PropType, computed } from "vue";
import { AmplitudePropType } from "@/libs/types";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { PROJECT_LINKS, PROJECTS } from "@/helpers/links";
import messages from "@/locales/header/index";
import { mergeLocalesWithCommon } from "@/locales/index";
const mergedMessages = mergeLocalesWithCommon(messages);

const emit = defineEmits<{
  (e: "update:consent", newval: boolean): void;
}>();

const props = defineProps({
  bgVisible: {
    required: true,
    default: true,
    type: Boolean,
  },
  amplitude: {
    required: true,
    type: Object as PropType<AmplitudePropType>,
  },
  linkComponent: {
    type: Object as PropType<typeof RouterLink>,
    default: RouterLink,
  },
  userConsent: {
    required: true,
    type: Boolean,
  },
  currProject: {
    required: true,
    type: String as PropType<PROJECTS>,
  },
  currUrl: {
    type: String,
  },
  useI18n: {
    required: true,
    type: Function,
  },
});
const { t } = props.useI18n({
  messages: { ...mergedMessages },
});

const BUTTON_BASE =
  "inline-flex items-center justify-center whitespace-nowrap rounded-3xl px-4 py-[9px] text-base font-semibold leading-[22px] tracking-[-0.32px]";

const menuItemClasses = (active: boolean) => [
  "rounded-[20px] px-3 text-s-17 font-medium leading-[22px] text-black hoverBGGrey [font-feature-settings:'case'_1]",
  active ? "bg-greyBase py-1.5" : "py-1",
];
/**
 * Amplitude
 */
interface itemType {
  item: string;
}

const $amplitude = props.amplitude;
const route = useRoute();

const ampUrl = computed<string>(() => {
  return props.currUrl ? props.currUrl : route.fullPath || "";
});

const LOCALE_PREFIX = /^\/(en|ru|es|ja|zh|ko)(?=\/|$)/;

const currentPath = computed<string>(() => {
  let path = ampUrl.value || "/";
  try {
    path = new URL(path, "https://www.myetherwallet.com").pathname;
  } catch {
    path = path.split("?")[0];
  }
  return path.replace(LOCALE_PREFIX, "") || "/";
});

const isLanding = computed(() => props.currProject === PROJECTS.LANDING);
const isHomeActive = computed(
  () => isLanding.value && currentPath.value === "/",
);
const isRewardsActive = computed(
  () =>
    isLanding.value &&
    currentPath.value.startsWith(`/${PROJECT_LINKS[PROJECTS.LANDING].REWARDS}`),
);

const trackHome = () => {
  $amplitude.track(amplitudeConfigs.headerHome, { route: ampUrl.value });
};
const trackRewards = () => {
  $amplitude.track(amplitudeConfigs.headerRewards, { route: ampUrl.value });
};
const trackLogo = () => {
  $amplitude.track(amplitudeConfigs.headerLogo, { route: ampUrl.value });
};
const trackBuy = () => {
  $amplitude.track(amplitudeConfigs.headerBuy, { route: ampUrl.value });
};
const trackMewtopia = () => {
  $amplitude.track(amplitudeConfigs.headerMewtopia, { route: ampUrl.value });
};
const trackHelpCenter = () => {
  $amplitude.track(amplitudeConfigs.headerHelpCenter, {
    route: ampUrl.value,
  });
};
const trackCustomerSupport = () => {
  $amplitude.track(amplitudeConfigs.headerCustomerSupport, {
    route: ampUrl.value,
  });
};
const trackAccessWallet = () => {
  $amplitude.track(amplitudeConfigs.headerAccessWallet, {
    route: ampUrl.value,
  });
};
const trackProduct = (obj: itemType) => {
  $amplitude.track(amplitudeConfigs.headerProduct, {
    ...obj,
    route: ampUrl.value,
  });
};
const trackFAQ = () => {
  $amplitude.track(amplitudeConfigs.headerFAQ, { route: ampUrl.value });
};

/**
 * Mobile Menu
 */
const isOpenMobileMenu = ref(false);

const openMobileMenu = () => {
  isOpenMobileMenu.value = true;
  $amplitude.track(amplitudeConfigs.openMobileMenu, { route: ampUrl.value });
};
</script>
<style>
@import "../../style.css";
</style>
