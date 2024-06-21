<template>
  <div>
    <header
      v-if="!isOpenMobileMenu"
      class="fixed w-full z-10 h-[72px] md-header:h-[104px] md-header:py-5"
    >
      <div
        :class="[
          'max-w-[1392px] h-full md-header:mx-6 2xl:mx-auto md-header:rounded-[52px] transition-all duration-500',
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
          <NuxtLink to="/" class="py-2" @click="trackLogo">
            <img :src="IMGMEWlogo" contain alt="MyEtherWallet Logo" />
          </NuxtLink>
          <!-- Menu items -->
          <div class="hidden md-header:flex flex-row gap-x-5 xl:gap-x-8">
            <a
              href="https://ccswap.myetherwallet.com/"
              target="_blank"
              class="font-medium text-base xl:text-lg hoverOpacity"
              @click="trackBuy"
              >Buy Crypto</a
            >
            <a
              href="https://www.myetherwallet.com/how-it-works#swap"
              class="font-medium text-base xl:text-lg hoverOpacity"
              @click="trackSwap"
              >Swap Tokens</a
            >
            <!-- More Features Dropdown -->
            <AppDropdownMenu text="More Features">
              <template #items>
                <div class="grid gap-6">
                  <MenuItem id="header-more-feat-staking" class="hoverOpacity">
                    <NuxtLink
                      to="/staking"
                      class="text-base xl:text-lg"
                      @click="trackStaking"
                      >Staking</NuxtLink
                    >
                  </MenuItem>
                  <MenuItem id="header-more-feat-nft" class="hoverOpacity">
                    <a
                      href="https://www.myetherwallet.com/how-it-works#nft"
                      class="text-base xl:text-lg"
                      @click="trackNft"
                      >NFT</a
                    >
                  </MenuItem>
                  <MenuItem id="header-more-feat-dapps" class="hoverOpacity">
                    <a
                      href="https://www.myetherwallet.com/how-it-works#dapps"
                      class="text-base xl:text-lg"
                      @click="trackDapps"
                      >DApps</a
                    ></MenuItem
                  >
                </div>
              </template>
            </AppDropdownMenu>
            <!-- Resources Dropdown -->
            <AppDropdownMenu text="Resources">
              <template #items>
                <div class="grid gap-6">
                  <MenuItem id="header-resources-blog" class="hoverOpacity">
                    <a
                      href="https://www.myetherwallet.com/blog"
                      target="_blank"
                      class="text-base xl:text-lg"
                      @click="trackMewtopia"
                      >Blog</a
                    >
                  </MenuItem>
                  <MenuItem
                    id="header-resources-help-center"
                    class="hoverOpacity"
                  >
                    <a
                      href="https://help.myetherwallet.com/en/"
                      target="_blank"
                      class="text-base xl:text-lg"
                      @click="trackHelpCenter"
                      >Help Center</a
                    >
                  </MenuItem>
                  <MenuItem id="header-resources-faq" class="hoverOpacity">
                    <NuxtLink to="/faq" @click="trackFAQ">FAQ</NuxtLink>
                  </MenuItem>
                  <MenuItem
                    id="header-resources-customer-support"
                    class="hoverOpacity"
                  >
                    <a
                      href="mailto:support@myetherwallet.com"
                      rel="noopener noreferrer"
                      target="_blank"
                      class="text-base xl:text-lg"
                      @click="trackCustomerSupport"
                      >Customer Support</a
                    >
                  </MenuItem>
                </div>
              </template>
            </AppDropdownMenu>
            <!-- Products Dropdown -->
            <AppDropdownMenu text="Products">
              <template #items>
                <div
                  class="grid grid-cols-1 3xl:grid-cols-2 gap-2 min-w-[330px] 3xl:min-w-[568px]"
                >
                  <MenuItem
                    id="header-products-mew-wallet"
                    class="hoverBGGrey rounded-2xl p-2"
                  >
                    <a
                      href="https://www.mewwallet.com/"
                      target="_blank"
                      class="flex items-center pa-2"
                      @click="trackProduct({ item: 'MobileApp' })"
                    >
                      <img
                        :src="IMGMobilelogo"
                        alt="MEW mobile wallet logo"
                        class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                      />
                      <div class="grow">
                        <h6
                          class="text-base xl:text-lg font-bold mb-1 text-nowrap"
                        >
                          MEW Mobile App
                        </h6>
                        <p class="opacity-65 text-sm">Mobile wallet</p>
                      </div>
                    </a>
                  </MenuItem>
                  <MenuItem
                    id="header-products-mew"
                    class="hoverBGGrey rounded-2xl p-2"
                  >
                    <a
                      href="https://www.myetherwallet.com/wallet/access"
                      target="_blank"
                      class="flex items-center pa-2"
                      @click="trackProduct({ item: 'MewWeb' })"
                    >
                      <img
                        :src="IMGWeblogo"
                        alt="MEW portfolio manager logo"
                        class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                      />
                      <div class="block">
                        <h6
                          class="text-base xl:text-lg font-bold mb-1 text-nowrap"
                        >
                          MEW Portfolio Manager
                        </h6>
                        <p class="opacity-65 text-sm">
                          Web portfolio interface
                        </p>
                      </div>
                    </a>
                  </MenuItem>
                  <MenuItem
                    id="header-products-enkrypt"
                    class="hoverBGGrey rounded-2xl p-2"
                  >
                    <a
                      href="https://www.enkrypt.com/"
                      target="_blank"
                      class="flex items-center pa-2"
                      @click="trackProduct({ item: 'Enkrypt' })"
                    >
                      <img
                        :src="IMGEnkryptlogo"
                        alt="enkrypt wallet extension logo"
                        class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                      />
                      <div>
                        <h6 class="text-base xl:text-lg font-bold mb-1">
                          Enkrypt
                        </h6>
                        <p class="opacity-65 text-sm">
                          Browser extension wallet
                        </p>
                      </div>
                    </a>
                  </MenuItem>
                  <MenuItem
                    id="header-products-ethVM"
                    class="hoverBGGrey rounded-2xl p-2"
                  >
                    <a
                      href="https://www.ethvm.com/"
                      target="_blank"
                      class="flex items-center pa-2"
                      @click="trackProduct({ item: 'Ethvm' })"
                    >
                      <img
                        :src="IMGEthvmlogo"
                        alt="ethVM logo"
                        class="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                      />
                      <div>
                        <h6 class="text-base xl:text-lg font-bold mb-1">
                          ethVM
                        </h6>
                        <p class="opacity-65 text-sm">Blockchain explorer</p>
                      </div>
                    </a>
                  </MenuItem>
                </div>
              </template>
            </AppDropdownMenu>
          </div>
          <!-- Access Button -->
          <a
            href="https://www.myetherwallet.com/wallet/access"
            target="_blank"
            class="hidden md-header:flex items-center px-4 py-2 bg-black text-white h-10 rounded-3xl hoverOpacity"
            @click="trackAccessWallet"
          >
            <span
              class="text-base xl:text-lg text-center font-medium leading-6 tracking-sp-06"
              >Access my wallet</span
            >
          </a>
          <!-- Mobile Menu Button -->
          <img
            :src="ICONMenu"
            contain
            alt="open mobile menu"
            class="block md-header:hidden rounded-full hoverBGGrey"
            @click="openMobileMenu"
          />
        </div>
      </div>
    </header>
    <the-mobile-menu
      :is-open="isOpenMobileMenu"
      @close-mobile-menu="isOpenMobileMenu = false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import IMGMEWlogo from "@/assets/logo.svg";
import IMGWeblogo from "@/assets/images/products/mewweb-logo.svg";
import IMGMobilelogo from "@/assets/images/products/mewwallet-logo.svg";
import IMGEnkryptlogo from "@/assets/images/products/enkrypt-logo.png";
import IMGEthvmlogo from "@/assets/images/products/ethvm-logo.svg";
import ICONMenu from "@/assets/icons/menu.svg";
import amplitudeConfigs from "@/helpers/amplitudeConfigs";
import { MenuItem } from "@headlessui/vue";
import { useRoute } from "vue-router";

defineProps({
  bgVisible: {
    default: true,
    type: Boolean,
  },
});

/**
 * Amplitude
 */
interface itemType {
  item: string;
}

const $amplitude = {
  track: (abc: any, def?: any) => {},
};
const route = useRoute();

const trackLogo = () => {
  $amplitude.track(amplitudeConfigs.headerLogo, { route: route.fullPath });
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
};
const trackStaking = () => {
  $amplitude.track(amplitudeConfigs.headerStaking, { route: route.fullPath });
};

/**
 * Mobile Menu
 */
const isOpenMobileMenu = ref(false);

const openMobileMenu = () => {
  isOpenMobileMenu.value = true;
  $amplitude.track(amplitudeConfigs.openMobileMenu);
};
</script>
