<template>
  <div id="myetherwallet-core-header">
    <header
      v-if="!isOpenMobileMenu"
      class="fixed w-full z-10 h-[72px] lg:h-[104px] lg:py-5 inset-x-0 top-0"
    >
      <div
        :class="[
          'max-w-[1392px] h-full lg:mx-6 2xl:mx-auto lg:rounded-[52px] transition-all duration-500',
          {
            'bg-white bg-opacity-70 shadow-[0px_3px_12px_-6px_rgba(0,0,0,0.32);] backdrop-blur-xl':
              bgVisible,
          },
        ]"
      >
        <div
          class="flex flex-row items-center justify-between px-4 my-auto h-full"
        >
          <!-- Logo -->
          <MewLink
            :link-url="PROJECT_LINKS[PROJECTS.LANDING].HOME"
            :curr-project="props.currProject"
            :link-component="props.linkComponent"
            link-text=""
            @mewlink:click="trackLogo"
          >
            <img
              :src="IMGMEWlogo"
              contain
              :alt="t('home')"
              class="cursor-pointer"
              width="113px"
              height="auto"
              loading="lazy"
            />
          </MewLink>
          <!-- Menu items -->
          <div class="hidden lg:flex flex-row gap-x-5 xl:gap-x-8">
            <a
              href="https://ccswap.myetherwallet.com/"
              target="_blank"
              class="font-medium text-base xl:text-lg hoverOpacity"
              @click="trackBuy"
            >
              {{ t("buy") }}</a
            >
            <MewLink
              :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_SWAP"
              :curr-project="props.currProject"
              :link-component="props.linkComponent"
              :link-text="t('swap')"
              @mewlink:click="trackSwap"
              :class="[
                { 'hidden xl:block': hideSwap },
                'font-medium text-base xl:text-lg hoverOpacity',
              ]"
            />
            <!-- More Features Dropdown -->
            <MewAppDropdownMenu
              :text="t('more_features.title')"
              :useI18n="useI18n"
            >
              <template #items>
                <div class="grid gap-6">
                  <MewLink
                    :link-url="PROJECT_LINKS[PROJECTS.LANDING].STAKING"
                    :curr-project="props.currProject"
                    :link-component="props.linkComponent"
                    :link-text="t('more_features.staking')"
                    @mewlink:click="trackStaking"
                    class="text-base xl:text-lg hoverOpacity"
                  />
                  <MewLink
                    v-if="hideSwap"
                    :link-url="
                      PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_SWAP
                    "
                    :curr-project="props.currProject"
                    :link-component="props.linkComponent"
                    :link-text="t('swap')"
                    @mewlink:click="trackSwap"
                    class="xl:hidden text-base xl:text-lg hoverOpacity"
                  />
                  <MewLink
                    :link-url="
                      PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_NFT
                    "
                    :curr-project="props.currProject"
                    :link-component="props.linkComponent"
                    :link-text="t('more_features.nft')"
                    @mewlink:click="trackNft"
                    class="text-base xl:text-lg hoverOpacity"
                  />
                  <MewLink
                    :link-url="
                      PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_DAPPS
                    "
                    :curr-project="props.currProject"
                    :link-component="props.linkComponent"
                    :link-text="t('more_features.dapps')"
                    @mewlink:click="trackDapps"
                    class="text-base xl:text-lg hoverOpacity"
                  />
                </div>
              </template>
            </MewAppDropdownMenu>
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
                    <MewLink
                      :link-url="
                        PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS
                      "
                      :curr-project="props.currProject"
                      :link-component="props.linkComponent"
                      link-text=""
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
                    </MewLink>
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
          </div>
          <!-- Access Button -->
          <MewLink
            :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS"
            :curr-project="props.currProject"
            :link-component="props.linkComponent"
            link-text=""
            @mewlink:click="trackAccessWallet"
            class="hidden sm:flex sm:ml-auto sm:mr-5 lg:mx-0 items-center px-4 py-2 bg-black text-white h-10 rounded-3xl hoverOpacity"
          >
            <span
              class="text-base xl:text-lg text-center font-medium leading-6 tracking-sp-06"
              >{{ t("access_wallet") }}</span
            >
          </MewLink>
          <!-- Mobile Menu Button -->
          <img
            :src="ICONMenu"
            contain
            :alt="t('open_menu')"
            width="40px"
            height="auto"
            loading="lazy"
            class="block lg:hidden rounded-full hoverBGGrey"
            @click="openMobileMenu"
          />
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
import ICONMenu from "@/assets/icons/menu.svg";
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
const { t, locale } = props.useI18n({
  messages: { ...mergedMessages },
});

const hideSwap = computed(() => {
  return locale.value === "es";
});
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
const trackLogo = () => {
  $amplitude.track(amplitudeConfigs.headerLogo, { route: ampUrl.value });
};
const trackSwap = () => {
  $amplitude.track(amplitudeConfigs.headerSwap, { route: ampUrl.value });
};
const trackBuy = () => {
  $amplitude.track(amplitudeConfigs.headerBuy, { route: ampUrl.value });
};
const trackNft = () => {
  $amplitude.track(amplitudeConfigs.headerNft, { route: ampUrl.value });
};
const trackDapps = () => {
  $amplitude.track(amplitudeConfigs.headerDapps, { route: ampUrl.value });
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
const trackStaking = () => {
  $amplitude.track(amplitudeConfigs.headerStaking, { route: ampUrl.value });
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
