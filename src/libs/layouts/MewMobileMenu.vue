<template>
  <Transition name="expand-app-mobile-menu">
    <div
      v-if="isOpen"
      class="bg-white h-screen w-screen z-40 fixed overflow-y-auto top-0"
      role="dialog"
    >
      <div class="flex items-center justify-end pt-4 pr-4 pb-3">
        <MewAppBtnIconClose :useI18n="useI18n" @close="closeMobileMenu" />
      </div>
      <div class="grid grid-cols-1 gap-6 px-6">
        <MewLink
          :link-url="PROJECT_LINKS[PROJECTS.LANDING].HOME"
          :curr-project="props.currProject"
          :link-component="props.linkComponent"
          :link-text="t('home')"
          @mewlink:click="trackHome"
          class="text-lg font-medium leading-6 hoverOpacity p-2 capitalize"
        />
        <a
          href="https://ccswap.myetherwallet.com/"
          target="_blank"
          class="text-lg font-medium leading-6 hoverOpacity p-2"
          @click="trackBuy"
          >{{ t("buy") }}</a
        >
        <MewLink
          :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_SWAP"
          :curr-project="props.currProject"
          :link-component="props.linkComponent"
          :link-text="t('swap')"
          @mewlink:click="trackSwap"
          class="text-lg font-medium leading-6 hoverOpacity p-2 capitalize"
        />
        <!-- More Features Dropdown -->
        <div class="text-lg font-medium leading-6" @click="featuresToggle">
          <div
            class="flex justify-between items-center hoverOpacity cursor-pointer p-2"
          >
            {{ t("more_features.title") }}
            <span
              ><img
                :src="ICONChevronDown"
                contain
                :alt="t('common_components.open-dropdown')"
                class="ml-1 mt-px"
                width="11px"
                height="7px"
                loading="lazy"
            /></span>
          </div>
          <div
            v-if="isFeaturesOpen"
            class="grid grid-cols-1 gap-4 px-3 pt-6 pb-2 transition-all transition-[height] duration-500 ease-out"
          >
            <MewLink
              :link-url="PROJECT_LINKS[PROJECTS.LANDING].STAKING"
              :curr-project="props.currProject"
              :link-component="props.linkComponent"
              :link-text="t('more_features.staking')"
              @mewlink:click="trackStaking"
              class="hoverOpacity cursor-pointer p-2 capitalize"
            />
            <MewLink
              :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_NFT"
              :curr-project="props.currProject"
              :link-component="props.linkComponent"
              :link-text="t('more_features.nft')"
              @mewlink:click="trackNft"
              class="hoverOpacity cursor-pointer p-2"
            />
            <MewLink
              :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_DAPPS"
              :curr-project="props.currProject"
              :link-component="props.linkComponent"
              :link-text="t('more_features.dapps')"
              @mewlink:click="trackDapps"
              class="hoverOpacity cursor-pointer p-2"
            />
          </div>
        </div>
        <!-- Resources Dropdown -->
        <div class="text-lg font-medium leading-6" @click="resourcesToggle">
          <div
            class="flex justify-between items-center hoverOpacity cursor-pointer p-2"
          >
            {{ t("resources.title") }}
            <span
              ><img
                :src="ICONChevronDown"
                contain
                :alt="t('common_components.open-dropdown')"
                class="ml-1 mt-px"
                width="11px"
                height="7px"
                loading="lazy"
            /></span>
          </div>
          <div
            v-if="isResourcesOpen"
            class="grid grid-cols-1 gap-4 px-3 pt-8 pb-2"
          >
            <a
              href="https://www.myetherwallet.com/blog/"
              target="_blank"
              class="hoverOpacity cursor-pointer p-2"
              @click="trackMewtopia"
              >{{ t("resources.blog") }}</a
            >
            <a
              href="https://help.myetherwallet.com/en/"
              target="_blank"
              class="hoverOpacity cursor-pointer p-2"
              @click="trackHelpCenter"
              >{{ t("resources.help_center") }}</a
            >
            <MewLink
              :link-url="PROJECT_LINKS[PROJECTS.LANDING].FAQ"
              :curr-project="props.currProject"
              :link-component="props.linkComponent"
              :link-text="t('resources.faq')"
              @mewlink:click="trackFAQ"
              class="hoverOpacity cursor-pointer p-2"
            />
            <a
              href="mailto:support@myetherwallet.com"
              rel="noopener noreferrer"
              target="_blank"
              class="hoverOpacity cursor-pointer p-2"
              @click="trackCustomerSupport"
              >{{ t("resources.customer_support") }}</a
            >
          </div>
        </div>
        <!-- Products Dropdown -->
        <div class="text-lg font-medium leading-6" @click="productsToggle">
          <div
            class="flex justify-between items-center hoverOpacity cursor-pointer p-2"
          >
            {{ t("products") }}
            <span
              ><img
                :src="ICONChevronDown"
                contain
                :alt="t('common_components.open-dropdown')"
                class="ml-1 mt-px"
                width="11px"
                height="7px"
                loading="lazy"
            /></span>
          </div>
          <div v-if="isProductsOpen" class="grid grid-cols-1 gap-2 pt-6 pb-4">
            <div
              id="header-products-mew-wallet"
              class="hoverBGGrey rounded-2xl p-2"
            >
              <a
                href="https://www.mewwallet.com/"
                target="_blank"
                class="flex items-center pa-2"
                @click="trackProductAnchor($event, 'MobileApp')"
              >
                <img
                  :src="IMGMobilelogo"
                  alt="MEW mobile wallet logo"
                  width="50px"
                  height="50px"
                  loading="lazy"
                  class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                />
                <div class="grow">
                  <p class="text-base xl:text-lg font-bold mb-1 text-nowrap">
                    {{ t("mew_mobile_app.title") }}
                  </p>
                  <p class="opacity-65 text-sm">
                    {{ t("mew_mobile_app.description") }}
                  </p>
                </div>
              </a>
            </div>
            <div id="header-products-mew" class="hoverBGGrey rounded-2xl p-2">
              <MewLink
                :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS"
                :curr-project="props.currProject"
                :link-component="props.linkComponent"
                @mewlink:click="trackProductLink($event, 'MewWeb')"
              >
                <div
                  class="flex items-center pa-2"
                  @click="trackProductAnchor($event, 'MewWeb')"
                >
                  <img
                    :src="IMGWeblogo"
                    alt="MEW portfolio manager logo"
                    width="50px"
                    height="50px"
                    loading="lazy"
                    class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                  />
                  <div class="block">
                    <p class="text-base xl:text-lg font-bold mb-1 text-nowrap">
                      {{ t("mew_portfolio_manager.title") }}
                    </p>
                    <p class="opacity-65 text-sm">
                      {{ t("mew_portfolio_manager.description") }}
                    </p>
                  </div>
                </div>
              </MewLink>
            </div>
            <div
              id="header-products-enkrypt"
              class="hoverBGGrey rounded-2xl p-2"
            >
              <a
                href="https://www.enkrypt.com/"
                target="_blank"
                class="flex items-center pa-2"
                @click="trackProductAnchor($event, 'Enkrypt')"
              >
                <img
                  :src="IMGEnkryptlogo"
                  alt="enkrypt wallet extension logo"
                  width="50px"
                  height="50px"
                  loading="lazy"
                  class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
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
            <div id="header-products-ethVM" class="hoverBGGrey rounded-2xl p-2">
              <a
                href="https://www.ethvm.com/"
                target="_blank"
                class="flex items-center pa-2"
                @click="trackProductAnchor($event, 'Ethvm')"
              >
                <img
                  :src="IMGEthvmlogo"
                  alt="ethVM logo"
                  width="50px"
                  height="50px"
                  loading="lazy"
                  class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                />
                <div>
                  <p class="text-base xl:text-lg font-bold mb-1">
                    {{ t("ethvm.title") }}
                  </p>
                  <p class="opacity-65 text-sm">{{ t("ethvm.description") }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- Access Button -->
        <div class="flex items-cemnter">
          <MewLink
            :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS"
            :curr-project="props.currProject"
            :link-component="props.linkComponent"
            @mewlink:click="trackAccessWallet"
            class="px-4 py-2 bg-black text-white h-10 rounded-3xl hoverOpacity"
          >
            <p
              class="text-base xl:text-lg font-medium leading-6 tracking-sp-06"
            >
              {{ t("access_wallet") }}
            </p>
          </MewLink>
        </div>
        <!-- Consent Button -->
        <MewSwitchDataTracking
          :useI18n="useI18n"
          id="consent-switch-mobile-menu"
          :user-consent="userConsent"
          @update:consent="emitConsentUpdate"
        />
        <!-- Change Language Slot-->
        <slot name="lang-switch"></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import ICONChevronDown from "@/assets/icons/chevron-down.svg";
import IMGWeblogo from "@/assets/images/products/mewweb-logo.svg";
import IMGMobilelogo from "@/assets/images/products/mewwallet-logo.svg";
import IMGEnkryptlogo from "@/assets/images/products/enkrypt-logo.webp";
import IMGEthvmlogo from "@/assets/images/products/ethvm-logo.svg";
import MewSwitchDataTracking from "./MewSwitchDataTracking.vue";
import MewAppBtnIconClose from "./MewAppBtnIconClose.vue";
import MewLink from "./MewLink.vue";
import { PROJECT_LINKS, PROJECTS } from "@/helpers/links";
import { RouterLink, useRoute } from "vue-router";
import messages from "@/locales/header/index";
import { mergeLocalesWithCommon } from "@/locales/index";
import { AnalyticsHeaderLinkName } from "@/analytics/events";
import { AmplitudeLike, UseI18n } from "../types";
import { trackHeaderLinkClickedEvent } from "@/analytics/amplitude";
const mergedMessages = mergeLocalesWithCommon(messages);

interface itemType {
  item: string;
}
const isFeaturesOpen = ref<boolean>(false);
const isResourcesOpen = ref<boolean>(false);
const isProductsOpen = ref<boolean>(false);

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  amplitude: {
    default: (): AmplitudeLike => ({
      track: () => ({
        promise: Promise.resolve({}),
      }),
    }),
    type: Object as PropType<AmplitudeLike>,
  },
  linkComponent: {
    default: () => {},
    type: Object as PropType<typeof RouterLink>,
  },
  userConsent: {
    default: false,
    required: true,
    type: Boolean,
  },
  currProject: {
    required: true,
    type: String as PropType<PROJECTS>,
  },
  currUrl: {
    type: String,
    required: true,
  },
  useI18n: {
    required: true,
    type: Function,
  },
});
const { t, locale } = (props.useI18n as UseI18n)({
  messages: { ...mergedMessages },
});
const $amplitude = props.amplitude;
const emit = defineEmits<{
  (e: "update:consent", newval: boolean): void;
  (e: "closeMobileMenu"): void;
}>();

const route = useRoute();

const emitConsentUpdate = (val: boolean) => {
  emit("update:consent", val);
};

function trackClickEvent(
  linkName: AnalyticsHeaderLinkName,
  destinationURL: string,
  extraData?: Record<string, unknown>,
) {
  trackHeaderLinkClickedEvent($amplitude, linkName, {
    sourceURL: route.fullPath, // TODO: don't include search & hash?
    destinationURL, // TODO: don't include search & hash?
    language: locale.value,
    ...extraData,
  });
}

const trackHome = (destinationURL: string) => {
  trackClickEvent(AnalyticsHeaderLinkName.HOME, destinationURL);
  emit("closeMobileMenu");
};
const trackSwap = (destinationURL: string) => {
  trackClickEvent(AnalyticsHeaderLinkName.SWAP_TOKENS, destinationURL);
};
const trackBuy = (evt: MouseEvent) => {
  const destinationURL = (evt.target as HTMLAnchorElement)?.href;
  trackClickEvent(AnalyticsHeaderLinkName.BUY_CRYPTO, destinationURL);
};
const trackNft = (destinationURL: string) => {
  trackClickEvent(AnalyticsHeaderLinkName.NFT, destinationURL);
};
const trackDapps = (destinationURL: string) => {
  trackClickEvent(AnalyticsHeaderLinkName.DAPPS, destinationURL);
};
const trackMewtopia = (evt: MouseEvent) => {
  const destinationURL = (evt.target as HTMLAnchorElement)?.href;
  trackClickEvent(AnalyticsHeaderLinkName.MEWTOPIA, destinationURL);
};
const trackHelpCenter = (evt: MouseEvent) => {
  const destinationURL = (evt.target as HTMLAnchorElement)?.href;
  trackClickEvent(AnalyticsHeaderLinkName.HELP_CENTER, destinationURL);
};
const trackCustomerSupport = (evt: MouseEvent) => {
  const destinationURL = (evt.target as HTMLAnchorElement)?.href;
  trackClickEvent(AnalyticsHeaderLinkName.CUSTOMER_SUPPORT, destinationURL);
};
const trackAccessWallet = (destinationURL: string) => {
  trackClickEvent(AnalyticsHeaderLinkName.ACCESS_WALLET, destinationURL);
};
const trackProductLink = (destinationURL: string, targetProduct: string) => {
  trackClickEvent(AnalyticsHeaderLinkName.PRODUCT, destinationURL, {
    targetProduct,
  });
};
const trackProductAnchor = (evt: MouseEvent, targetProduct: string) => {
  const destinationURL = (evt.target as HTMLAnchorElement)?.href;
  trackClickEvent(AnalyticsHeaderLinkName.PRODUCT, destinationURL, {
    targetProduct,
  });
};
const trackFAQ = (destinationURL: string) => {
  trackClickEvent(AnalyticsHeaderLinkName.FAQ, destinationURL);
  emit("closeMobileMenu");
};
const trackStaking = (destinationURL: string) => {
  trackClickEvent(AnalyticsHeaderLinkName.STAKING, destinationURL);
  emit("closeMobileMenu");
};

const featuresToggle = () => {
  isFeaturesOpen.value = !isFeaturesOpen.value;
};

const resourcesToggle = () => {
  isResourcesOpen.value = !isResourcesOpen.value;
};

const productsToggle = () => {
  isProductsOpen.value = !isProductsOpen.value;
};

const closeMobileMenu = (evt: MouseEvent) => {
  const destinationURL = (evt.target as HTMLAnchorElement)?.href;
  trackClickEvent(AnalyticsHeaderLinkName.CLOSE_MOBILE_MENU, destinationURL);
  emit("closeMobileMenu");
};
</script>
<style>
@import "../../style.css";
</style>
