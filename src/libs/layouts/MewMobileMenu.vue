<template>
  <Transition name="expand-app-mobile-menu">
    <div v-if="isOpen" class="bg-white h-screen w-screen z-40 fixed overflow-y-auto" role="dialog">
      <div class="flex items-center justify-end pt-4 pr-4 pb-3">
        <AppBtnIconClose @close="closeMobileMenu" />
      </div>
      <div class="grid grid-cols-1 gap-6 px-6">
        <MewLink :link-url="PROJECT_LINKS[PROJECTS.LANDING].HOME" :curr-project="props.currProject"
          :link-component="props.linkComponent" link-text="Home" @mewlink:click="trackHome"
          class="text-lg font-medium leading-6 hoverOpacity p-2" />
        <a href="https://ccswap.myetherwallet.com/" target="_blank"
          class="text-lg font-medium leading-6 hoverOpacity p-2" @click="trackBuy">Buy Crypto</a>
        <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_SWAP" :curr-project="props.currProject"
          :link-component="props.linkComponent" link-text="Swap Tokens" @mewlink:click="trackSwap"
          class="text-lg font-medium leading-6 hoverOpacity p-2" />
        <!-- More Features Dropdown -->
        <div class="text-lg font-medium leading-6" @click="featuresToggle">
          <div class="flex justify-between items-center hoverOpacity cursor-pointer p-2">
            More Features
            <span><img :src="ICONChevronDown" contain alt="menu icon" class="ml-1 mt-px" /></span>
          </div>
          <div v-show="isFeaturesOpen"
            class="grid grid-cols-1 gap-4 px-3 pt-6 pb-2 transition-all transition-[height] duration-500 ease-out">
            <MewLink :link-url="PROJECT_LINKS[PROJECTS.LANDING].STAKING" :curr-project="props.currProject"
              :link-component="props.linkComponent" link-text="Staking" @mewlink:click="trackStaking"
              class="hoverOpacity cursor-pointer p-2" />
            <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_NFT" :curr-project="props.currProject"
              :link-component="props.linkComponent" link-text="NFT" @mewlink:click="trackNft"
              class="hoverOpacity cursor-pointer p-2" />
            <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS_DAPPS" :curr-project="props.currProject"
              :link-component="props.linkComponent" link-text="DApps" @mewlink:click="trackDapps"
              class="hoverOpacity cursor-pointer p-2" />
          </div>
        </div>
        <!-- Resources Dropdown -->
        <div class="text-lg font-medium leading-6" @click="resourcesToggle">
          <div class="flex justify-between items-center hoverOpacity cursor-pointer p-2">
            Resources
            <span><img :src="ICONChevronDown" contain alt="menu icon" class="ml-1 mt-px" /></span>
          </div>
          <div v-show="isResourcesOpen" class="grid grid-cols-1 gap-4 px-3 pt-8 pb-2">
            <a href="https://www.myetherwallet.com/blog/" target="_blank" class="hoverOpacity cursor-pointer p-2"
              @click="trackMewtopia">Blog</a>
            <a href="https://help.myetherwallet.com/en/" target="_blank" class="hoverOpacity cursor-pointer p-2"
              @click="trackHelpCenter">Help Center</a>
            <MewLink :link-url="PROJECT_LINKS[PROJECTS.LANDING].FAQ" :curr-project="props.currProject"
              :link-component="props.linkComponent" link-text="FAQ" @mewlink:click="trackFAQ"
              class="hoverOpacity cursor-pointer p-2" />
            <a href="mailto:support@myetherwallet.com" rel="noopener noreferrer" target="_blank"
              class="hoverOpacity cursor-pointer p-2" @click="trackCustomerSupport">Customer Support</a>
          </div>
        </div>
        <!-- Products Dropdown -->
        <div class="text-lg font-medium leading-6" @click="productsToggle">
          <div class="flex justify-between items-center hoverOpacity cursor-pointer p-2">
            Products
            <span><img :src="ICONChevronDown" contain alt="menu icon" class="ml-1 mt-px" /></span>
          </div>
          <div v-show="isProductsOpen" class="grid grid-cols-1 gap-2 pt-6 pb-4">
            <div id="header-products-mew-wallet" class="hoverBGGrey rounded-2xl p-2">
              <a href="https://www.mewwallet.com/" target="_blank" class="flex items-center pa-2"
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
            <div id="header-products-mew" class="hoverBGGrey rounded-2xl p-2">
              <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS" :curr-project="props.currProject"
                :link-component="props.linkComponent" @mewlink:click="trackProduct({ item: 'MewWeb' })">
                <div class="flex items-center pa-2" @click="trackProduct({ item: 'MewWeb' })">
                  <img :src="IMGWeblogo" alt="MEW portfolio manager logo"
                    class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]" />
                  <div class="block">
                    <h6 class="text-base xl:text-lg font-bold mb-1 text-nowrap">
                      MEW Portfolio Manager
                    </h6>
                    <p class="opacity-65 text-sm">Web portfolio interface</p>
                  </div>
                </div>
              </MewLink>
            </div>
            <div id="header-products-enkrypt" class="hoverBGGrey rounded-2xl p-2">
              <a href="https://www.enkrypt.com/" target="_blank" class="flex items-center pa-2"
                @click="trackProduct({ item: 'Enkrypt' })">
                <img :src="IMGEnkryptlogo" alt="enkrypt wallet extension logo"
                  class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]" />
                <div>
                  <h6 class="text-base xl:text-lg font-bold mb-1">Enkrypt</h6>
                  <p class="opacity-65 text-sm">Browser extension wallet</p>
                </div>
              </a>
            </div>
            <div id="header-products-ethVM" class="hoverBGGrey rounded-2xl p-2">
              <a href="https://www.ethvm.com/" target="_blank" class="flex items-center pa-2"
                @click="trackProduct({ item: 'Ethvm' })">
                <img :src="IMGEthvmlogo" alt="ethVM logo"
                  class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]" />
                <div>
                  <h6 class="text-base xl:text-lg font-bold mb-1">ethVM</h6>
                  <p class="opacity-65 text-sm">Blockchain explorer</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- Access Button -->
        <div class="flex items-cemnter">

          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS" :curr-project="props.currProject"
            :link-component="props.linkComponent" @mewlink:click="trackAccessWallet"
            class="px-4 py-2 bg-black text-white h-10 rounded-3xl hoverOpacity">
            <p class="text-base xl:text-lg font-medium leading-6 tracking-sp-06">
              Access my wallet
            </p>
          </MewLink>
        </div>
        <!-- Consent Button -->
        <MewSwitchDataTracking id="consent-switch-mobile-menu" :user-consent="userConsent"
          @update:consent="(val) => emit('update:consent', val)" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import amplitudeConfigs from "@/helpers/amplitudeConfigs";
import { PropType, ref } from "vue";
import ICONChevronDown from "@/assets/icons/chevron-down.svg";
import IMGWeblogo from "@/assets/images/products/mewweb-logo.svg";
import IMGMobilelogo from "@/assets/images/products/mewwallet-logo.svg";
import IMGEnkryptlogo from "@/assets/images/products/enkrypt-logo.png";
import IMGEthvmlogo from "@/assets/images/products/ethvm-logo.svg";
import MewSwitchDataTracking from "./MewSwitchDataTracking.vue";
import AppBtnIconClose from "./AppBtnIconClose.vue";
import MewLink from "./MewLink.vue";
import { PROJECT_LINKS, PROJECTS } from "@/helpers/links";
import { RouterLink, useRoute } from "vue-router";
import { AmplitudePropType } from "../types";

const route = useRoute();
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
    default: () => {
      track: () => { };
    },
    type: Object as PropType<AmplitudePropType>,
  },
  linkComponent: {
    default: () => { },
    type: Object as PropType<typeof RouterLink>,
  },
  userConsent: {
    default: false,
    required: true,
    type: Boolean,
  },
  currProject: {
    required: true,
    type: String as PropType<PROJECTS>
  },
});
const $amplitude = props.amplitude;
const emit = defineEmits<{
  (e: "update:consent", newval: boolean): void;
  (e: "closeMobileMenu"): void;
}>();

const trackHome = () => {
  $amplitude.track(amplitudeConfigs.headerHome, { route: route.fullPath });
  emit("closeMobileMenu");
};
const trackSwap = () => {
  $amplitude.track(amplitudeConfigs.headerSwap, { route: route.fullPath });
};
const trackBuy = () => {
  $amplitude.track(amplitudeConfigs.headerBuy, { route: route.fullPath });
};

const trackNft = () => {
  $amplitude.track(amplitudeConfigs.headerNft, { route: route.fullPath });
};
const trackDapps = () => {
  $amplitude.track(amplitudeConfigs.headerDapps, { route: route.fullPath });
};
const trackMewtopia = () => {
  $amplitude.track(amplitudeConfigs.headerMewtopia, { route: route.fullPath });
};
const trackHelpCenter = () => {
  $amplitude.track(amplitudeConfigs.headerHelpCenter, {
    route: route.fullPath,
  });
};
const trackCustomerSupport = () => {
  $amplitude.track(amplitudeConfigs.headerCustomerSupport, {
    route: route.fullPath,
  });
};
const trackAccessWallet = () => {
  $amplitude.track(amplitudeConfigs.headerAccessWallet, {
    route: route.fullPath,
  });
};
const trackProduct = (obj: itemType) => {
  $amplitude.track(amplitudeConfigs.headerProduct, {
    ...obj,
    route: route.fullPath,
  });
};
const trackFAQ = () => {
  $amplitude.track(amplitudeConfigs.headerFAQ, { route: route.fullPath });
  emit("closeMobileMenu");
};
const trackStaking = () => {
  $amplitude.track(amplitudeConfigs.headerStaking, { route: route.fullPath });
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

const closeMobileMenu = () => {
  emit("closeMobileMenu");
  $amplitude.track(amplitudeConfigs.closeMobileMenu);
};
</script>
<style scoped>
.expand-app-mobile-menu-enter-from {
  height: 0;
}

.expand-app-mobile-menu-leave-active {
  transition: height 200ms ease-in-out;
  overflow: hidden;
}

.expand-app-mobile-menu-enter-to {
  transition: height 200ms ease-out;
  overflow: hidden;
}

.expand-app-mobile-menu-leave-to {
  height: 0;
}
</style>
