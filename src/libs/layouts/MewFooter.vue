<template>
  <footer class="max-w-[1392px] px-5 md-header:px-10 mx-auto pt-[104px] mb-5">
    <div class="grid grid-cols-1 gap-[42px]">
      <div class="grid grid-cols-1 md:grid-cols-4 justify-items-start content-start gap-[42px]">
        <div class="grid grid-cols-1 gap-2.5 content-start">
          <!-- About Us 
              Careers
              How it works
              Team
              -->
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].ABOUT" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('about_us')"
            @mewlink:click="trackAboutUs" />
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].CAREERS" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('careers')"
            @mewlink:click="trackCareers" />
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].HOW_IT_WORKS" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('how_it_works')"
            @mewlink:click="trackHowItWorks" />
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].TEAM" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('team')"
            @mewlink:click="trackTeam" />
          <!--  Privacy
                Terms
                Security Policy
                Bug Bounty
              -->
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].PRIVACY_POLICY" :class="['mt-8', linkClass]"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('privacy')"
            @mewlink:click="trackPrivacy" />
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].TERMS_OF_SERVICE" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('terms')"
            @mewlink:click="trackTerms" />
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].SECURITY_POLICY" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('security_policy')"
            @mewlink:click="trackSecurityPolicy" />
          <a href="https://hackenproof.com/programs/myetherwallet" target="_blank" :class="linkClass"
            @mewlink:click="trackBugBounty">{{ t('bug_bounty') }}</a>
        </div>
        <div class="grid grid-cols-1 gap-2.5 content-start">
          <!--  Mobile App
                Portfoio Manager
                Enkrypt
                ethVM
              -->
          <a href="https://www.mewwallet.com/" target="_blank" :class="linkClass" @click="trackMobile">{{
            t('mobile_app') }}</a>
          <a href="https://www.enkrypt.com/" target="_blank" :class="linkClass" @click="trackEnkrypt">{{ t('enkrypt')
            }}</a>
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].WALLET_ACCESS" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('portfolio_manager')"
            @mewlink:click="trackPortfolio" />
          <a href="https://www.ethvm.com/" target="_blank" :class="linkClass" @click="trackEthvm">{{ t('ethvm') }}</a>
          <!--  Verify Message
                Convert Units
                Offline Helper
              -->
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].VERIFY_MESSAGE" :class="['mt-8', linkClass]"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('verify_message')"
            @mewlink:click="trackVerifyMessage" />
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].CONVERT_UNITS" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('convert_units')"
            @mewlink:click="trackConvertUnits" />
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].SEND_OFFLINE_HELPER" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('offline_helper')"
            @mewlink:click="trackSendOfflineHelper" />
        </div>
        <div class="grid grid-cols-1 gap-2.5 content-start">
          <!--  Help Center
                Customer support
                FAQ
                Blog
              -->
          <a href="https://help.myetherwallet.com/en/" target="_blank" :class="linkClass" @click="trackHelpCenter"> {{
            t('help_center') }}</a>

          <a href="mailto:support@myetherwallet.com" rel="noopener noreferrer" target="_blank" :class="linkClass"
            @click="trackCustomerSupport">{{ t('customer_support') }}</a>
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.LANDING].FAQ" :class="linkClass" :curr-project="props.currProject"
            :link-component="props.linkComponent" :link-text="t('faq')" @mewlink:click="trackFAQ" />
          <a href="https://www.myetherwallet.com/blog/" :class="linkClass" target="_blank" @click="trackMewtopia">{{
            t('blog') }}</a>
          <!--  Press Kit
                Advertise with Us
              -->
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].PRESSKIT" :class="['mt-8', linkClass]"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('press_kit')"
            @mewlink:click="trackPressKit" />
          <MewLink :link-url="PROJECT_LINKS[PROJECTS.PORTFOLIO].ADVERTISE_WITH_US" :class="linkClass"
            :curr-project="props.currProject" :link-component="props.linkComponent" :link-text="t('advertise_with_us')"
            @mewlink:click="trackAdvertiseWithUs" />
        </div>
        <!--Donation Block-->
        <div class="grid grid-cols-1 gap-2.5 content-start">
          <p class="mb-5 text-info max-w-96">
            {{ t('donate.text') }}
          </p>
          <a href="https://www.ethvm.com/address/0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D" target="_blank"
            :class="['flex items-center pa-2', linkClass]" @click="trackEthDonation">
            <span><img :src="DonateEth" contain alt="Ethereum logo" class="mr-2" width="20px" height="20px"
                loading="lazy" /></span>
            {{ t('donate.ethereum') }}
          </a>
          <a href="https://www.blockchain.com/explorer/addresses/btc/1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9" target="_blank"
            :class="['flex items-center pa-2', linkClass]" @click="trackBtcDonation">
            <span><img :src="DonateBtc" contain alt="BTC logo" class="mr-2" width="20px" height="20px"
                loading="lazy" /></span>
            {{ t('donate.bitcoin') }}
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 justify-items-start content-start gap-[42px]">
        <!-- Copyright, CoinGecko,app version-->
        <div class="text-info order-last md:order-1">
          <!-- Consent Button -->
          <MewSwitchDataTracking :useI18n="(useI18n)" id="consent-switch-footer-menu" :user-consent="userConsent"
            @update:consent="(val) => emit('update:consent', val)" class="mb-[42px]" />
          <slot name="lang-switch-footer"></slot>
          <p class="mb-[10px]">
            © {{ year }} MyEtherWallet. All rights reserved.
          </p>
          <p class="mb-[10px]">
            Pricing taken from
            <a href="https://www.coingecko.com/" target="_blank" class="underline" @click="trackCoinGecko">CoinGecko</a>
          </p>
          <a :href="`https://github.com/MyEtherWallet/MyEtherWallet/releases/tag/v${packageVersion}`"
            style="text-decoration: none">Version: v{{ packageVersion }}</a>
        </div>
        <!-- Join Community -->
        <div class="order-1 md:order-last">
          <p class="mb-3 font-bold">{{ t('join_community') }}</p>
          <div class="flex flex-wrap gap-3">
            <a href="https://www.facebook.com/MyEtherWallet" target="_blank" :class="linkClass"
              @click="trackJoinMewCommunity('facebook')">
              <img :src="SVGFacebook" contain alt="MEW Facebook" width="48px" height="48px" loading="lazy" />
            </a>
            <a href="https://twitter.com/myetherwallet/" target="_blank" :class="linkClass"
              @click="trackJoinMewCommunity('twitter')">
              <img :src="SVGTwitter" contain alt="MEW Twitter" width="48px" height="48px" loading="lazy" />
            </a>
            <a href="https://www.instagram.com/myetherwallet/" target="_blank" :class="linkClass"
              @click="trackJoinMewCommunity('instagram')">
              <img :src="SVGInstagram" contain alt="MEW Instagram" width="48px" height="48px" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/company/myetherwallet/" target="_blank" :class="linkClass"
              @click="trackJoinMewCommunity('linkedin')">
              <img :src="SVGLinkedin" contain alt="MEW Linkedin" width="48px" height="48px" loading="lazy" />
            </a>
            <a href="https://github.com/myetherwallet" target="_blank" :class="linkClass"
              @click="trackJoinMewCommunity('github')">
              <img :src="SVGGithub" contain alt="MEW Github" width="48px" height="48px" loading="lazy" />
            </a>
            <a href="https://www.reddit.com/r/MyEtherWallet/" target="_blank" :class="linkClass"
              @click="trackJoinMewCommunity('reddit')">
              <img :src="SVGReddit" contain alt="MEW Reddit" width="48px" height="48px" loading="lazy" />
            </a>
            <a href="https://medium.com/@myetherwallet" target="_blank" :class="linkClass"
              @click="trackJoinMewCommunity('medium')">
              <img :src="SVGMedium" contain alt="MEW Medium" width="48px" height="48px" loading="lazy" />
            </a>
            <a href="https://t.me/myetherwallet" target="_blank" :class="linkClass"
              @click="trackJoinMewCommunity('telegram')">
              <img :src="SVGTelegram" contain alt="MEW Telegram" width="48px" height="48px" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SVGFacebook from "@/assets/social/facebook.svg";
import SVGTwitter from "@/assets/social/twitter.svg";
import SVGInstagram from "@/assets/social/instagram.svg";
import SVGLinkedin from "@/assets/social/linkedin.svg";
import SVGGithub from "@/assets/social/github.svg";
import SVGReddit from "@/assets/social/reddit.svg";
import SVGMedium from "@/assets/social/medium.svg";
import SVGTelegram from "@/assets/social/telegram.svg";
import DonateEth from "@/assets/social/eth.webp";
import DonateBtc from "@/assets/social/btc.webp";
import amplitudeConfigs from "@/helpers/amplitudeConfigs";
import { AmplitudePropType } from "@/libs/types";
import { RouterLink, useRoute } from "vue-router";
import { PropType } from "vue";
import { PROJECT_LINKS, PROJECTS } from "@/helpers/links";
import MewLink from "./MewLink.vue";
import MewSwitchDataTracking from "./MewSwitchDataTracking.vue";
import messages from '@/locales/footer/index'


const emit = defineEmits<{
  (e: "update:consent", newval: boolean): void;
}>();

const props = defineProps({
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
  packageVersion: {
    required: true,
    type: String,
  },
  currProject: {
    required: true,
    type: String as PropType<PROJECTS>
  },
  useI18n: {
    required: true,
    type: Function
  }
});
const { t } = props.useI18n({
  locale: 'en',
  messages: {
    ...messages
  }
})

const linkClass = "font-medium text-base hoverOpacity leading-[22px]";
const dateInstance = new Date();
const year = dateInstance.getFullYear();
const packageVersion = props.packageVersion;


/**Amplitude */
const $amplitude = props.amplitude;
const route = useRoute();
const trackAboutUs = () => {
  $amplitude.track(amplitudeConfigs.footerAboutUs, { route: route.fullPath });
};
const trackCareers = () => {
  $amplitude.track(amplitudeConfigs.footerCareers, { route: route.fullPath });
};
const trackHowItWorks = () => {
  $amplitude.track(amplitudeConfigs.footerHowItWorks, {
    route: route.fullPath,
  });
};
const trackTeam = () => {
  $amplitude.track(amplitudeConfigs.footerTeam), { route: route.fullPath };
};
const trackAdvertiseWithUs = () => {
  $amplitude.track(amplitudeConfigs.footerAdvertiseWithUs, {
    route: route.fullPath,
  });
};
const trackPrivacy = () => {
  $amplitude.track(amplitudeConfigs.footerPrivacy, { route: route.fullPath });
};
const trackTerms = () => {
  $amplitude.track(amplitudeConfigs.footerTerms, { route: route.fullPath });
};
const trackBugBounty = () => {
  $amplitude.track(amplitudeConfigs.footerBugBounty, { route: route.fullPath });
};
const trackMobile = () => {
  $amplitude.track(amplitudeConfigs.footerMobile, { route: route.fullPath });
};
const trackEnkrypt = () => {
  $amplitude.track(amplitudeConfigs.footerEnkrypt, { route: route.fullPath });
};
const trackPortfolio = () => {
  $amplitude.track(amplitudeConfigs.footerPortfolio, { route: route.fullPath });
};
const trackEthvm = () => {
  $amplitude.track(amplitudeConfigs.footerEthvm, { route: route.fullPath });
};
const trackMewtopia = () => {
  $amplitude.track(amplitudeConfigs.footerMewtopia, { route: route.fullPath });
};
const trackPressKit = () => {
  $amplitude.track(amplitudeConfigs.footerPressKit, { route: route.fullPath });
};
const trackHelpCenter = () => {
  $amplitude.track(amplitudeConfigs.footerHelpCenter, {
    route: route.fullPath,
  });
};
const trackFAQ = () => {
  $amplitude.track(amplitudeConfigs.footerFAQ, { route: route.fullPath });
};
const trackCustomerSupport = () => {
  $amplitude.track(amplitudeConfigs.footerCustomerSupport, {
    route: route.fullPath,
  });
};
const trackSecurityPolicy = () => {
  $amplitude.track(amplitudeConfigs.footerSecurityPolicy, {
    route: route.fullPath,
  });
};
const trackVerifyMessage = () => {
  $amplitude.track(amplitudeConfigs.footerVerifyMessage, {
    route: route.fullPath,
  });
};
const trackConvertUnits = () => {
  $amplitude.track(amplitudeConfigs.footerConvertUnits, {
    route: route.fullPath,
  });
};
const trackSendOfflineHelper = () => {
  $amplitude.track(amplitudeConfigs.footerSendOfflineHelper, {
    route: route.fullPath,
  });
};
const trackEthDonation = () => {
  $amplitude.track(amplitudeConfigs.footerEthDonation, {
    route: route.fullPath,
  });
};
const trackBtcDonation = () => {
  $amplitude.track(amplitudeConfigs.footerBtcDonation, {
    route: route.fullPath,
  });
};
const trackCoinGecko = () => {
  $amplitude.track(amplitudeConfigs.footerCoinGecko, { route: route.fullPath });
};
const trackJoinMewCommunity = (item: string) => {
  $amplitude.track(amplitudeConfigs.footerJoinMewCommunity, {
    item: item,
    route: route.fullPath,
  });
};
</script>
<style>
@import "../../style.css";
</style>