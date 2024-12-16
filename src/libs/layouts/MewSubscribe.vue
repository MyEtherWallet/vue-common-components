<template>
  <div>
    <div
      v-if="!props.dialogOnly"
      class="relative w-full flex flex-col sm:flex-row items-stretch justify-items-stretch p-8 sm:px-14 sm:pt-14 bg-[linear-gradient(94.39deg,#005BE5_1.51%,#0081F0_99.36%)] gap-4 rounded-4xl sm:max-h-[435px]"
    >
      <div
        class="order-2 sm:order-1 lg:mb-[87px] max-w-full sm:max-w-[490px] md:max-w-full"
      >
        <h2 class="title3 !text-white mb-4">{{ t("step1.title") }}</h2>
        <p
          class="max-w-[599px] text-white sm:text-2xl -tracking-[0.02em] sm:font-light mb-5 sm:mb-4"
        >
          {{ t("step1.description") }}
        </p>
        <div class="w-full flex flex-col sm:flex-row">
          <div class="relative grow sm:max-w-[472px]">
            <input
              type="email"
              id="email-in-sub-box"
              v-model="email"
              :class="[
                isValidEmail && !hasError
                  ? 'border-white text-white'
                  : ' focus:outline-none !border-error text-error focus-visible:!border-error focus-visible:ring-error',
                'grow bg-primary border-2 text-sm rounded-[20px] h-[58px] w-full  px-5 py-[14px] text-xl transition-all',
              ]"
              :placeholder="t('step1.enter_email')"
              required
              @focus="inFocusEmail = true"
              @blur="inFocusEmail = false"
            />
            <p
              v-if="!isValidEmail"
              class="pl-4 pt-[2px] absolute text-error text-[15px] leading-[23px]"
            >
              {{ t("step1.email_error") }}
            </p>
            <p
              v-else-if="hasError"
              class="pl-4 pt-[2px] absolute text-error text-[15px] leading-[23px]"
            >
              {{ t("step1.email_required") }}
            </p>
            <MewAppBtnIcon
              :icon="ICONClose"
              @click="clearInputEmail"
              is-white
              :aria-label-string="t('common_components.clear-input')"
              :class="[
                (email !== '' && inFocusEmail) || !isValidEmail
                  ? 'opacity-100'
                  : 'opacity-0',
                'transition-opacity absolute top-3 right-6 z-1',
              ]"
            />
          </div>

          <button
            class="cursor-pointer mt-7 sm:mt-0 px-8 py-4 h-[58px] w-full sm:w-auto sm:min-w-[178px] bg-white rounded-[20px] text-xl text-primary font-bold hoverOpacityHasBG mt-4 sm:mt-0 sm:ml-4"
            @click="clickSubscribe"
          >
            {{ t("step1.sign_me_up") }}
          </button>
        </div>
      </div>
      <div
        class="sm:flex-none sm:self-end sm:justify-self-center order-1 sm:order-2 sm:max-w-[150px] sm:ml-auto lg:mx-auto"
      >
        <picture>
          <source
            media="(max-width: 576px)"
            :srcset="IMGPeggyXS"
            sizes="118px"
          />
          <source media="(min-width: 577px)" :srcset="IMGPeggy" />
          <img
            :src="IMGPeggy"
            alt=""
            class="object-contain mx-auto h-[120px] sm:h-[150px] lg:h-[200px] mt-20 lg:mr-15"
            loading="lazy"
            width="543"
            height="833"
          />
        </picture>
      </div>
    </div>
    <Teleport to="body">
      <!-- The backdrop, rendered as an absolute sibling to the panel container -->
      <transition
        enter-active-class="transform ease-out duration-500 transition opacity-0 delay-100"
        enter-to-class="opacity-100"
        leave-active-class="opacity-0"
        leave-to-class="opacity-0"
        appear
      >
        <div
          v-if="model"
          class="cursor-pointer fixed inset-0 bg-black/40 z-[99] h-screen w-screen overscroll-none overflow-hidden"
          @click="setIsOpen(false, 0, 'click-outside-popup')"
          aria-hidden
        />
      </transition>
      <!-- Dialog Container -->
      <div
        v-if="model"
        class="cursor-pointer fixed inset-0 h-full flex items-center justify-center p-9 z-[100] overscroll-none !overflow-y-scroll"
        @click="setIsOpen(false, 0, 'click-outside-popup')"
      >
        <transition
          enter-active-class="transform ease-out duration-500 transition opacity-0 delay-100"
          enter-to-class="opacity-100"
          leave-active-class="opacity-0"
          leave-to-class="opacity-0"
          appear
        >
          <div
            v-if="model"
            :class="[
              stylesDialogWH,
              'cursor-default fixed h-[95%] w-[95%] bg-white rounded-4xl !overflow-y-scroll overflow-x-hidden overscroll-none ',
            ]"
            @click.stop
          >
            <div
              class="flex flex-col sm:flex-row h-full content-stretch sm:min-h-[512px]"
            >
              <div
                class="grow pt-4 pb-8 px-6 sm:p-8 order-2 sm:order-1 flex flex-col sm:justify-between"
              >
                <div class="pb-2 h-full">
                  <h1
                    class="text-s-32 font-semibold !leading-p-110 -tracking-[0.02em] sm:font-bold sm:text-5xl sm:tracking-[-0.05em] sm:-mr-8"
                  >
                    {{ popUpTitle }}
                  </h1>
                  <!-- STEP 1-->
                  <div v-if="step === 0" class="mt-2 sm:w-[420px]">
                    <p
                      class="text-info mb-6 sm:mb-12 text-s-17 !leading-p-150 sm:text-xl tracking"
                    >
                      {{ t("step1.description") }}
                    </p>
                    <div class="relative grow sm:max-w-[472px] mb-7">
                      <input
                        type="email"
                        id="email-in-sub-popup"
                        v-model="email"
                        :class="[
                          isValidEmail && !hasError
                            ? 'border-primary'
                            : ' focus:outline-none !border-error text-error focus-visible:!border-error focus-visible:ring-error',
                          'grow  bg-white border-2 text-sm rounded-[20px] h-[58px] w-full  px-5 py-[14px] text-xl transition-all',
                        ]"
                        :placeholder="t('step1.enter_email')"
                        required
                        @focus="inFocusEmail = true"
                        @blur="inFocusEmail = false"
                      />
                      <p
                        v-if="!isValidEmail"
                        class="pl-4 pt-[2px] absolute text-error text-[15px] leading-[23px]"
                      >
                        {{ t("step1.email_error") }}
                      </p>
                      <p
                        v-else-if="hasError"
                        class="pl-4 pt-[2px] absolute text-error text-[15px] leading-[23px]"
                      >
                        {{ t("step1.email_required") }}
                      </p>
                      <MewAppBtnIcon
                        :icon="ICONClose"
                        @click="clearInputEmail"
                        :aria-label-string="t('common_components.clear-input')"
                        :class="[
                          (email !== '' && inFocusEmail) || !isValidEmail
                            ? 'opacity-100'
                            : 'opacity-0',
                          'transition-opacity absolute top-3 right-6 z-1',
                        ]"
                      />
                    </div>

                    <button
                      class="cursor-pointer px-8 py-4 mb-2 sm:mb-4 h-[58px] w-full sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                      @click="clickSubscribe"
                    >
                      {{ t("step1.sign_me_up") }}
                    </button>
                    <p class="text-center text-info text-s-17 leading-p-150">
                      {{ t("step1.unsubscribe") }}
                    </p>
                  </div>
                  <!-- STEP 2-->
                  <div
                    v-else-if="step === 1"
                    class="mt-8 sm:mt-5 sm:w-[420px] flex flex-col justify-between"
                  >
                    <!-- Checkbox 1-->
                    <div class="flex align-start gap-3 sm:gap-[23px]">
                      <div>
                        <label
                          class="relative flex items-center p-2 rounded-full cursor-pointer hover:bg-primary hover:bg-opacity-10 transition-opacity"
                          htmlFor="checkboxCryptoKb"
                        >
                          <input
                            type="checkbox"
                            v-model="checkBoxCryptoKB"
                            class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-primary border-2 bg-white transition-all checked:border-primary checked:bg-primary checked:before:bg-primary"
                            id="checkboxCryptoKb"
                          />
                          <span
                            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                      <p
                        class="pt-2 text-s-17 !leading-p-150 sm:text-xl tracking-sp-01 text-info"
                      >
                        {{ t("step2.crypto_kb") }}
                      </p>
                    </div>
                    <!-- Checkbox 2-->
                    <div
                      class="mt-[25px] sm:mt-5 flex align-start gap-3 sm:gap-[23px]"
                    >
                      <div>
                        <label
                          class="relative flex items-center p-2 rounded-full cursor-pointer hover:bg-primary hover:bg-opacity-10 transition-opacity"
                          htmlFor="checkBoxMarket"
                        >
                          <input
                            type="checkbox"
                            v-model="checkBoxMarket"
                            class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-primary border-2 bg-white transition-all checked:border-primary checked:bg-primary checked:before:bg-primary"
                            id="checkBoxMarket"
                          />
                          <span
                            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                      <p
                        class="pt-2 text-s-17 !leading-p-150 sm:text-xl tracking-sp-01 text-info"
                      >
                        {{ t("step2.market") }}
                      </p>
                    </div>
                    <!-- Checkbox 3-->
                    <div
                      class="mt-[25px] sm:mt-5 flex align-start gap-3 sm:gap-[23px]"
                    >
                      <div>
                        <label
                          class="relative flex items-center p-2 rounded-full cursor-pointer hover:bg-primary hover:bg-opacity-10 transition-opacity"
                          htmlFor="checkBoxUpdates"
                        >
                          <input
                            type="checkbox"
                            v-model="checkBoxUpdates"
                            class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-primary border-2 bg-white transition-all checked:border-primary checked:bg-primary checked:before:bg-primary"
                            id="checkBoxUpdates"
                          />
                          <span
                            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                      <p
                        class="pt-2 text-s-17 !leading-p-150 sm:text-xl tracking-sp-01 text-info"
                      >
                        {{ t("step2.product_updates") }}
                      </p>
                    </div>
                  </div>
                  <!-- STEP 3-->
                  <div v-else class="mt-2 sm:mt-6 sm:w-[420px]">
                    <p
                      class="text-info text-s-17 !leading-p-150 sm:text-xl tracking-sp-01"
                    >
                      {{ t("step3.description1") }}
                    </p>
                    <p
                      class="text-info mt-2 text-s-17 !leading-p-150 sm:text-xl tracking-sp-01"
                    >
                      {{ t("step3.description2") }}
                    </p>
                  </div>
                </div>
                <!-- STEP 1 -->
                <p
                  v-if="step === 0"
                  @click="setIsOpen(false, 0, 'click-no-thanks')"
                  class="text-center underline cursor-pointer text-[15px] leading-[23px] my-5"
                >
                  {{ t("step1.no_thanks") }} <br />
                  {{ t("step1.i_know") }}
                </p>
                <!-- STEP 2-->
                <button
                  v-else-if="step === 1"
                  :disabled="atLeastOneCheckbox === false"
                  class="px-8 py-4 h-[58px] w-full sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG disabled:opacity-40 flex justify-center"
                  @click="finishSignUP"
                >
                  <svg
                    v-if="isLoading"
                    aria-hidden="true"
                    class="w-8 h-8 text-white-40 animate-spin fill-white"
                    viewBox="0 0 100 101"
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <p v-else>{{ t("step3.finish") }}</p>
                </button>
                <!-- STEP 3-->
                <div v-else>
                  <h2 class="uppercase text-sm font-bold tracking-[1px] mb-2">
                    {{ t("step3.whats_next") }}
                  </h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      class="px-6 py-4 min-h-[58px] w-full sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                      @click="clickCreateWallet"
                    >
                      {{ t("step3.create_wallet") }}
                    </button>
                    <a
                      class="text-center px-6 py-4 min-h-[58px] w-full sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                      href="https://ccswap.myetherwallet.com/"
                      @click="clickBuyCrypto"
                    >
                      {{ t("step3.buy_crypto") }}</a
                    >
                  </div>
                </div>
              </div>
              <!-- Image + Blue Background -->
              <div
                class="pt-1 px-1 sm:p-1 order-1 sm:order-2 w-full md:w-[312px] h-[138px] sm:h-auto md:pl-8 relative sm:overflow-hidden sm:overflow-visible"
              >
                <div
                  class="bg-primary sm:flex rounded-4xl w-full h-[140px] sm:h-full md:min-w-[260px]"
                >
                  <img
                    :src="IMGLottie"
                    alt=""
                    class="object-cover h-[140px] w-[230px] sm:hidden mx-auto object-bottom pt-2"
                    loading="lazy"
                    width="469"
                    height="262"
                  />
                  <mew-app-btn-icon-close
                    :useI18n="useI18n"
                    class="absolute min-w-8 m-4 z-[101] !cursor-pointer z-[101] top-0 right-0"
                    is-white
                    @click="setIsOpen(false, 0, 'clock-close-btn')"
                  />
                </div>

                <DotLottieVue
                  autoplay
                  :loop="false"
                  :src="playPeggy"
                  aria-hidden="true"
                  autoResizeCanvas
                  class="opacity-0 w-1 h-1 sm:opacity-100 sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px] absolute top-[-40px] inset-x-0 sm:inset-y-0 sm:right-[-90px] sm:left-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import MewAppBtnIconClose from "./MewAppBtnIconClose.vue";
import MewAppBtnIcon from "./MewAppBtnIcon.vue";
import ICONClose from "@/assets/icons/close.svg";
import { computed, ref, PropType, watch } from "vue";
import { watchDebounced } from "@vueuse/core";
import { PROJECTS } from "@/helpers/links";
import { useRoute } from "vue-router";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import playPeggy from "@/assets/lottie/optimizeddotMEW.2_0.lottie";
import IMGPeggyXS from "@/assets/lottie/peggy-xs.webp";
import IMGPeggy from "@/assets/lottie/peggy.webp";
import IMGLottie from "@/assets/lottie/lottie-xs.webp";
import messages from "@/locales/subscribe/index";
import { mergeLocalesWithCommon } from "@/locales/index";
import { AmplitudeLike } from "../types";
import { AnalyticsSubscriptionEventName } from "@/analytics/events";
import { trackSubscriptionEvent } from "@/analytics/amplitude";
const mergedMessages = mergeLocalesWithCommon(messages);

const props = defineProps({
  dialogOnly: {
    default: false,
    type: Boolean,
  },
  amplitude: {
    required: true,
    type: Object as PropType<AmplitudeLike>,
  },
  currProject: {
    required: true,
    type: String as PropType<PROJECTS>,
  },
  currUrl: {
    type: String,
  },
  projectId: {
    required: true,
    type: String,
  },
  apikey: {
    type: String,
    default: "",
  },
  useI18n: {
    required: true,
    type: Function,
  },
});
const { t, locale } = props.useI18n({
  messages: {
    ...mergedMessages,
  },
});

const stylesDialogWH = computed(() => {
  return locale.value === "ru" || locale.value === "ko"
    ? "md:w-[860px] sm:max-h-[560px] md:max-h-[530px]"
    : "md:w-[800px] sm:max-h-[512px] ";
});
const $amplitude = props.amplitude;
const route = useRoute();

const ampUrl = computed<string>(() => {
  return props.currUrl ? props.currUrl : route.fullPath || "";
});

const model = defineModel<boolean>();
const step = ref(0);

const emit = defineEmits<{
  (e: "update:isOpenPopupSubscribe", newval: boolean): void;
  (e: "subscribe:createWallet"): void;
  (e: "subscribe:finish"): void;
  (e: "subscribe:doNotShow"): void;
}>();

/** Prevent Background Scroll when model is opened  */

/**
 * Sets the background style of the document body based on the provided boolean value.
 * When `isOpened` is true, the vertical overflow of the body is hidden, preventing scrolling.
 * When `isOpened` is false, the vertical overflow of the body is set to auto, allowing scrolling.
 *
 * @param {boolean} isOpened - A boolean indicating whether the background style should be set to prevent scrolling.
 */
const setBackgroundStyle = (isOpened: boolean) => {
  if (isOpened) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

if (model.value) {
  setBackgroundStyle(true);
}

watch(model, (newVal) => {
  const _value = newVal || false;
  setBackgroundStyle(_value);
});

const trackEvent = (
  name: AnalyticsSubscriptionEventName,
  extraData?: Record<string, unknown>,
) => {
  trackSubscriptionEvent($amplitude, name, {
    route: ampUrl.value,
    language: locale.value,
    ...extraData,
  });
};

/** Open/Close poup  */
const setIsOpen = (
  _value: boolean = false,
  _step: number = 0,
  method?: string,
) => {
  model.value = _value;
  if (_value) {
    trackEvent(AnalyticsSubscriptionEventName.OPEN_POPUP, {
      step: step.value.toFixed(),
      method,
    });
  } else {
    trackEvent(AnalyticsSubscriptionEventName.CLOSE_POPUP, {
      step: step.value.toFixed(),
      method,
    });
    resetAll();
  }
  if (method === "click-no-thanks") {
    emit("subscribe:doNotShow");
  }
  step.value = _step;
  emit("update:isOpenPopupSubscribe", _value);
};

/** Click Sign Up button. */
const signUp = (method: string, openPopup = false) => {
  if (isValidEmail.value && hasInputEmail.value) {
    trackEvent(AnalyticsSubscriptionEventName.CLICK_SIGNUP_BTN, { method });
    if (openPopup) {
      setIsOpen(true, 1, method);
    }
    step.value = 1;
  }
};

const popUpTitle = computed<string>(() => {
  switch (step.value) {
    case 0:
      return t("step1.title");
    case 1:
      return t("step2.title");
    default:
      return t("step3.title");
  }
});

//Used to check if users clicks subscribe without entering email
const hasError = ref<boolean>(false);

// Valid Email:
const validateEmail = (email: string) => {
  hasError.value = false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const email = ref<string>("");
const isValidEmail = ref<boolean>(true);
const inFocusEmail = ref<boolean>(false);

const clickSubscribe = () => {
  const isValid = validateEmail(email.value);
  if (!email.value || email.value === "") {
    hasError.value = true;
  } else if (isValid && hasInputEmail) {
    if (props.dialogOnly) {
      signUp("popup-btn");
    } else {
      signUp("blue-container-btn", true);
    }
  }
};
watchDebounced(
  email,
  () => {
    isValidEmail.value = email.value === "" ? true : validateEmail(email.value);
  },
  { debounce: 800, maxWait: 1500 },
);

const clearInputEmail = () => {
  email.value = "";
};

const hasInputEmail = computed(() => {
  return email.value && email.value !== "";
});

/**
 * Checkbox
 */
const checkBoxCryptoKB = ref(true);
const checkBoxMarket = ref(true);
const checkBoxUpdates = ref(false);

const atLeastOneCheckbox = computed(() => {
  return (
    checkBoxCryptoKB.value || checkBoxMarket.value || checkBoxUpdates.value
  );
});

/**
 * Subscribe and Finish
 * */
const resetAll = () => {
  email.value = "";
  checkBoxCryptoKB.value = true;
  checkBoxMarket.value = true;
  checkBoxUpdates.value = false;
  step.value = props.dialogOnly ? 1 : 0;
  model.value = false;
  emit("update:isOpenPopupSubscribe", false);
  isLoading.value = false;
};

const isLoading = ref(false);

/**
 * Creates Subscription profile in Mailerlite

 */
const GROUP_ID = {
  cryptoKB: "CRYPTO_KB",
  market: "MARKET",
  productUpdates: "PRODUCT_UPDATES",
};

const finishSignUP = async () => {
  const _url = `https://mainnet.mewwallet.dev/email-web`;

  const groups = [];
  if (checkBoxCryptoKB.value) groups.push(GROUP_ID.cryptoKB);
  if (checkBoxMarket.value) groups.push(GROUP_ID.market);
  if (checkBoxUpdates.value) groups.push(GROUP_ID.productUpdates);
  const _body = JSON.stringify({
    email: email.value,
    fields: {
      platform: "web",
    },
    groups: [...groups],
    product: props.currProject,
  });
  try {
    isLoading.value = true;
    const response = await fetch(_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: _body,
    });
    isLoading.value = false;
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    trackEvent(AnalyticsSubscriptionEventName.CLICK_FINISH, {
      cryptoKb: checkBoxCryptoKB.value,
      market: checkBoxMarket.value,
      updates: checkBoxUpdates.value,
    });
    emit("subscribe:finish");
    step.value = 2;
  } catch (error) {
    alert(`Something went wrong. Please try again later:  ${error}`);
    throw new Error(`Something went wrong during subscription:  ${error}`);
  }
};

const clickCreateWallet = () => {
  emit("subscribe:createWallet");
  trackEvent(AnalyticsSubscriptionEventName.CREATE_WALLET1, {
    location: "subscribe-popup",
  });
  resetAll();
};
const clickBuyCrypto = () => {
  resetAll();
  trackEvent(AnalyticsSubscriptionEventName.CLICK_BUY_CRYPTO_BTN);
};
</script>
<style>
@import "../../style.css";
</style>
