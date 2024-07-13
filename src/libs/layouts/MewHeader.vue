<template>
  <div id="myetherwallet-core-header">
    <header v-if="!isOpenMobileMenu"
      class="fixed w-full z-10 h-[72px] md-header:h-[104px] md-header:py-5 inset-x-0 top-0">
      <div :class="[
      'max-w-[1392px] h-full md-header:mx-6 2xl:mx-auto md-header:rounded-[52px] transition-all duration-500',
      {
        'bg-white bg-opacity-70 shadow-[0px_3px_12px_-6px_rgba(0,0,0,0.32);] backdrop-blur-xl':
          bgVisible,
      },
    ]">
        <div class="flex flex-row items-center justify-between px-4 my-auto h-full">
          <!-- Logo -->
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.LANDING].HOME" :curr-project="props.currProject"
            :link-component="props.linkComponent" link-text="" @mewlink:click="trackLogo">
            <img :src="IMGMEWlogo" contain alt="MyEtherWallet Logo" />
          </MewLink>
          <!-- Menu items -->
          <div class="hidden md-header:flex flex-row gap-x-5 xl:gap-x-8">
            <a href="https://ccswap.myetherwallet.com/" target="_blank"
              class="font-medium text-base xl:text-lg hoverOpacity" @click="trackBuy">Buy Crypto</a>
            <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_SWAP" :curr-project="props.currProject"
              :link-component="props.linkComponent" link-text="Swap Tokens" @mewlink:click="trackSwap"
              class="font-medium text-base xl:text-lg hoverOpacity" />
            <!-- More Features Dropdown -->
            <MewAppDropdownMenu text="More Features">
              <template #items>
                <div class="grid gap-6">
                  <MewLink :link-url="PROJECT_LINKS[PROJECTS.LANDING].STAKING" :curr-project="props.currProject"
                    :link-component="props.linkComponent" link-text="Staking" @mewlink:click="trackStaking"
                    class="text-base xl:text-lg hoverOpacity" />
                  <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_NFT"
                    :curr-project="props.currProject" :link-component="props.linkComponent" link-text="NFT"
                    @mewlink:click="trackNft" class="text-base xl:text-lg hoverOpacity" />
                  <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_DAPPS"
                    :curr-project="props.currProject" :link-component="props.linkComponent" link-text="DApps"
                    @mewlink:click="trackDapps" class="text-base xl:text-lg hoverOpacity" />
                </div>
              </template>
            </MewAppDropdownMenu>
            <!-- Resources Dropdown -->
            <MewAppDropdownMenu text="Resources">
              <template #items>
                <div class="grid gap-6">
                  <a href="https://www.myetherwallet.com/blog" target="_blank" class="text-base xl:text-lg hoverOpacity"
                    @click="trackMewtopia">Blog</a>
                  <a href="https://help.myetherwallet.com/en/" target="_blank" class="text-base xl:text-lg hoverOpacity"
                    @click="trackHelpCenter">Help Center</a>
                  <MewLink :link-url="PROJECT_LINKS[PROJECTS.LANDING].FAQ" :curr-project="props.currProject"
                    :link-component="props.linkComponent" link-text="FAQ" @mewlink:click="trackFAQ"
                    class="text-base xl:text-lg hoverOpacity" />
                  <a href="mailto:support@myetherwallet.com" rel="noopener noreferrer" target="_blank"
                    class="text-base xl:text-lg hoverOpacity" @click="trackCustomerSupport">Customer Support</a>
                </div>
              </template>
            </MewAppDropdownMenu>
            <!-- Products Dropdown -->
            <MewAppDropdownMenu text="Products">
              <template #items>
                <div
                  class="grid grid-cols-1 3xl:grid-cols-2 gap-y-1 lg:gap-y-2 min-w-[280px] lg:min-w-[300px] 3xl:min-w-[568px] -mx-4 lg:mx-0">
                  <div class="hoverBGGrey rounded-2xl">
                    <a href="https://www.mewwallet.com/" target="_blank" class="flex items-center p-2"
                      @click="trackProduct({ item: 'MobileApp' })">
                      <img :src="IMGMobilelogo" alt="MEW mobile wallet logo"
                        class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]" />
                      <div class="grow">
                        <h6 class="text-base xl:text-lg font-bold mb-1 text-nowrap">
                          MEW Mobile App
                        </h6>
                        <p class="opacity-65 text-sm">Mobile wallet</p>
                      </div>
                    </a>
                  </div>
                  <div id="header-products-mew" class="hoverBGGrey rounded-2xl">
                    <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS"
                      :curr-project="props.currProject" :link-component="props.linkComponent" link-text=""
                      @mewlink:click="trackProduct({ item: 'MewWeb' })">
                      <div class="flex items-center p-2">
                        <img :src="IMGWeblogo" alt="MEW portfolio manager logo"
                          class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]" />
                        <div class="block">
                          <h6 class="text-base xl:text-lg font-bold mb-1 text-nowrap">
                            MEW Portfolio Manager
                          </h6>
                          <p class="opacity-65 text-sm">
                            Web portfolio interface
                          </p>
                        </div>
                      </div>
                    </MewLink>
                  </div>
                  <div id="header-products-enkrypt" class="hoverBGGrey rounded-2xl">
                    <a href="https://www.enkrypt.com/" target="_blank" class="flex items-center p-2"
                      @click="trackProduct({ item: 'Enkrypt' })">
                      <img :src="IMGEnkryptlogo" alt="enkrypt wallet extension logo"
                        class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]" />
                      <div>
                        <h6 class="text-base xl:text-lg font-bold mb-1">
                          Enkrypt
                        </h6>
                        <p class="opacity-65 text-sm">
                          Browser extension wallet
                        </p>
                      </div>
                    </a>
                  </div>
                  <div id="header-products-ethVM" class="hoverBGGrey rounded-2xl">
                    <a href="https://www.ethvm.com/" target="_blank" class="flex items-center p-2"
                      @click="trackProduct({ item: 'Ethvm' })">
                      <img :src="IMGEthvmlogo" alt="ethVM logo"
                        class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]" />
                      <div>
                        <h6 class="text-base xl:text-lg font-bold mb-1">
                          ethVM
                        </h6>
                        <p class="opacity-65 text-sm">Blockchain explorer</p>
                      </div>
                    </a>
                  </div>
                </div>
              </template>
            </MewAppDropdownMenu>
          </div>
          <!-- Access Button -->
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS" :curr-project="props.currProject"
            :link-component="props.linkComponent" link-text="" @mewlink:click="trackAccessWallet"
            class="hidden md-header:flex items-center px-4 py-2 bg-black text-white h-10 rounded-3xl hoverOpacity">
            <span class="text-base xl:text-lg text-center font-medium leading-6 tracking-sp-06">Access my wallet</span>
          </MewLink>
          <!-- Mobile Menu Button -->
          <img :src="ICONMenu" contain alt="open mobile menu" class="block md-header:hidden rounded-full hoverBGGrey"
            @click="openMobileMenu" />
        </div>
      </div>
    </header>
    <mew-mobile-menu :is-open="isOpenMobileMenu" :amplitude="$amplitude" :link-component="props.linkComponent"
      :curr-project="props.currProject" :user-consent="props.userConsent" :curr-url="ampUrl"
      @update:consent="(val) => emit('update:consent', val)" @close-mobile-menu="isOpenMobileMenu = false" />
  </div>
</template>
<script setup lang="ts">
import IMGMEWlogo from "@/assets/images/logo.svg";
import IMGWeblogo from "@/assets/images/products/mewweb-logo.svg";
import IMGMobilelogo from "@/assets/images/products/mewwallet-logo.svg";
import IMGEnkryptlogo from "@/assets/images/products/enkrypt-logo.png";
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
    default: RouterLink
  },
  userConsent: {
    required: true,
    type: Boolean,
  },
  currProject: {
    required: true,
    type: String as PropType<PROJECTS>
  },
  currUrl: {
    type: String,
  }
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
  return props.currUrl ? props.currUrl : route.fullPath || ''
})
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