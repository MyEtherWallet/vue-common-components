<template>
    <div>
        <div v-if="!props.dialogOnly"
            class="relative w-full  flex flex-col sm:flex-row items-stretch justify-between p-8 sm:p-14 bg-[linear-gradient(94.39deg,#005BE5_1.51%,#0081F0_99.36%)] gap-4 rounded-4xl">
            <div class="order-2 sm:order-1 lg:mb-[87px] max-w-full sm:max-w-[490px] md:max-w-full">
                <h3 class="title3 !text-white ">Get better at crypto</h3>
                <p
                    class="max-w-[599px] text-white sm:text-2xl -tracking-[0.02em] font-medium sm:font-normal mb-5 sm:mb-4">
                    Level
                    up your
                    skills with
                    security tips, industry
                    insights, news and more!
                </p>
                <div class="w-full flex flex-col sm:flex-row">
                    <div class="relative grow sm:max-w-[472px]">
                        <input type="email" id="email-in-sub-box" v-model="email"
                            :class="[isValidEmail ? 'border-white text-white' : ' focus:outline-none !border-error text-error focus-visible:!border-error focus-visible:ring-error', 'grow bg-primary border-2 text-sm rounded-[20px] h-[58px] w-full  px-5 py-[14px] text-xl transition-all']"
                            placeholder="Enter your email" required @focus="inFocusEmail = true"
                            @blur="inFocusEmail = false" />
                        <p v-if="!isValidEmail" class="pl-4 pt-[2px] absolute text-error text-[15px] leading-[23px]">
                            email
                            is not valid
                        </p>
                        <MewAppBtnIcon :icon="ICONClose" @click="clearInputEmail" is-white
                            :class="[(email !== '' && inFocusEmail) || !isValidEmail ? 'opacity-100' : 'opacity-0', 'transition-opacity absolute top-3 right-6 z-1']" />
                    </div>

                    <button :disabled="!(isValidEmail && hasInputEmail)"
                        class="mt-7 sm:mt-0 px-8 py-4 h-[58px] w-full sm:w-auto sm:min-w-[178px]  bg-white rounded-[20px] text-xl text-primary font-bold hoverOpacityHasBG mt-4 sm:mt-0 sm:ml-4"
                        @click="signUp('blue-container-btn', true)">Sign
                        me up!</button>
                </div>
            </div>
            <Vue3Lottie :animationData="playPeggy" :height="lottieSize" :width="lottieSize" :pauseAnimation="true"
                class="sm:absolute sm:right-[0px] sm:bottom-[-10px] md:right-[-60px] md:bottom-[-20px] lg:bottom-[-45px] lg:right-[-60px] xl:right-[80px]  order-1 sm:order-2"
                :autoPlay="false" />

        </div>

        <div v-if="model" @close="setIsOpen(false, 0, 'click-outside-popup')">
            <!-- The backdrop, rendered as a fixed sibling to the panel container -->
            <div v-if="model" class="fixed inset-0 bg-black/30 z-[99]" aria-hidden="true" />
            <!-- Full-screen scrollable container -->
            <div class="fixed inset-0 w-screen overflow-y-auto z-[100]"
                @click="setIsOpen(false, 0, 'click-outside-popup')">
                <!-- Container to center the panel -->
                <div class="h-screen flex items-center justify-center p-4">
                    <div class="h-full sm:h-[512px] w-full md:w-[800px] bg-white rounded-4xl  overflow-y-scroll overflow-x-hidden"
                        @click.stop>
                        <div class=" flex flex-col sm:flex-row h-full content-stretch sm:min-h-[512px] ">
                            <div class="grow pt-4 pb-8 px-6 sm:p-8 order-2 sm:order-1 flex flex-col sm:justify-between">
                                <div class="pb-2 h-full">
                                    <h1
                                        class="text-s-32 font-semibold !leading-p-110 -tracking-[0.02em] sm:font-bold sm:text-5xl sm:tracking-[-0.05em]">
                                        {{ popUpTitle }}</h1>
                                    <!-- STEP 1-->
                                    <div v-if="step === 0" class="mt-2 sm:w-[420px]">
                                        <p
                                            class="text-info mb-6 sm:mb-12  text-s-17 !leading-p-150 sm:text-xl tracking">
                                            Level up your skills with security tips,
                                            industry
                                            insights,
                                            news and more!
                                        </p>
                                        <div class="relative grow sm:max-w-[472px] mb-7">
                                            <input type="email" id="email-in-sub-popup" v-model="email"
                                                :class="[isValidEmail ? 'border-primary' : ' focus:outline-none !border-error text-error focus-visible:!border-error focus-visible:ring-error', ' grow  bg-white border-2 text-sm rounded-[20px] h-[58px] w-full  px-5 py-[14px] text-xl transition-all']"
                                                placeholder="Enter your email" required @focus="inFocusEmail = true"
                                                @blur="inFocusEmail = false" />
                                            <p v-if="!isValidEmail"
                                                class="pl-4 pt-[2px] absolute text-error text-[15px] leading-[23px]">
                                                email
                                                is not valid
                                            </p>
                                            <MewAppBtnIcon :icon="ICONClose" @click="clearInputEmail"
                                                :class="[(email !== '' && inFocusEmail) || !isValidEmail ? 'opacity-100' : 'opacity-0', 'transition-opacity absolute top-3 right-6 z-1']" />
                                        </div>

                                        <button :disabled="!(isValidEmail && hasInputEmail)"
                                            class="px-8 py-4 mb-2 sm:mb-4 h-[58px] w-full  sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                                            @click="signUp('popup-btn')">Sign
                                            me up!</button>
                                        <p class="text-center text-info text-s-17 leading-p-150">
                                            We
                                            respect
                                            your privacy. Unsubscribe at any time.</p>

                                    </div>
                                    <!-- STEP 2-->
                                    <div v-else-if="step === 1" class="mt-8 sm:w-[420px] flex flex-col justify-between">
                                        <!-- Checkbox 1-->
                                        <div class="flex align-start gap-3 sm:gap-[23px]">
                                            <div>
                                                <label
                                                    class="relative flex items-center p-2 rounded-full cursor-pointer  hover:bg-primary hover:bg-opacity-10 transition-opacity "
                                                    htmlFor="checkboxCryptoKb">
                                                    <input type="checkbox" v-model="checkBoxCryptoKB"
                                                        class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-primary border-2 bg-white transition-all checked:border-primary checked:bg-primary checked:before:bg-primary"
                                                        id="checkboxCryptoKb" />
                                                    <span
                                                        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                                            viewBox="0 0 20 20" fill="currentColor"
                                                            stroke="currentColor" stroke-width="1">
                                                            <path fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                            </div>
                                            <p
                                                class="pt-2 text-s-17 !leading-p-150 sm:text-xl tracking-sp-01 text-info">
                                                Crypto
                                                knowledge, best practices and general tips.</p>
                                        </div>
                                        <!-- Checkbox 2-->
                                        <div class="mt-[25px] sm:mt-8 flex align-start gap-3 sm:gap-[23px]">
                                            <div>
                                                <label
                                                    class="relative flex items-center p-2 rounded-full cursor-pointer  hover:bg-primary hover:bg-opacity-10 transition-opacity "
                                                    htmlFor="checkBoxMarket">
                                                    <input type="checkbox" v-model="checkBoxMarket"
                                                        class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-primary border-2 bg-white transition-all checked:border-primary checked:bg-primary checked:before:bg-primary"
                                                        id="checkBoxMarket" />
                                                    <span
                                                        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                                            viewBox="0 0 20 20" fill="currentColor"
                                                            stroke="currentColor" stroke-width="1">
                                                            <path fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                            </div>
                                            <p
                                                class="pt-2 text-s-17 !leading-p-150 sm:text-xl tracking-sp-01 text-info">
                                                Trending tokens, big movers and onchain activity.</p>
                                        </div>

                                    </div>
                                    <!-- STEP 3-->
                                    <div v-else class="mt-2 sm:mt-6 sm:w-[420px]">
                                        <p class="text-info  text-s-17 !leading-p-150 sm:text-xl tracking-sp-01">We're
                                            excited to have you
                                            here onchain
                                            with us. Keep an eye on
                                            your inbox for the
                                            latest crypto news, trending tokens, security tips and more!</p>
                                        <p class="text-info mt-2  text-s-17 !leading-p-150 sm:text-xl  tracking-sp-01">
                                            Get
                                            ahead — and stay
                                            ahead — in
                                            the MEW Universe.</p>

                                    </div>
                                </div>

                                <p v-if="step === 0" @click="setIsOpen(false, 0, 'click-no-thanks')"
                                    class="text-center underline cursor-pointer text-[15px] leading-[23px]">
                                    No thanks, <br /> I already know everything about crypto.
                                </p>
                                <button v-else-if="step === 1" :disabled="atLeastOneCheckbox === false"
                                    class="px-8 py-4 h-[58px] w-full  sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG disabled:opacity-40 flex justify-center"
                                    @click="finishSignUP">

                                    <svg v-if="isLoading" aria-hidden="true"
                                        class="w-8 h-8 text-white-40 animate-spin fill-white" viewBox="0 0 100 101"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor" />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill" />
                                    </svg>
                                    <p v-else>Finish</p>
                                </button>
                                <div v-else>
                                    <h6 class="uppercase text-sm font-bold tracking-[1px] mb-2">What's next:
                                    </h6>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <button
                                            class="px-6 py-4  h-[58px] w-full  sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                                            @click="clickCreateWallet">Create a wallet</button>
                                        <button
                                            class="px-6 py-4 h-[58px] w-full  sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                                            @click="clickBuyCrypto">Buy Crypto</button>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="pt-1 px-1  sm:p-1 order-1 sm:order-2 w-full sm:w-full  h-[140px] sm:h-auto  md:pl-8 relative overflow-hidden sm:overflow-visible">
                                <div class=" bg-primary flex rounded-4xl w-full h-full w-full">
                                    <div class="w-full  ">
                                    </div>
                                    <mew-app-btn-icon-close class="inline-block self-start justify-self-end min-w-8 m-4"
                                        is-white @click="setIsOpen(false, 0, 'clock-close-btn')" />

                                </div>
                                <Vue3Lottie :animationData="playPeggy" :height="lottieInPopupSize"
                                    :width="lottieInPopupSize" :pauseAnimation="true"
                                    class="absolute top-[-40px] inset-x-0 sm:inset-y-0 sm:right-[-90px] sm:left-auto"
                                    :loop="1" :delay="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script setup lang="ts">
import MewAppBtnIconClose from "./MewAppBtnIconClose.vue";
import MewAppBtnIcon from "./MewAppBtnIcon.vue";
import ICONClose from "@/assets/icons/close.svg";
import { computed, ref, PropType } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { AmplitudePropType } from "@/libs/types";
import { PROJECTS } from "@/helpers/links";
import { useRoute } from "vue-router";
import amplitudeConfigs from "@/helpers/amplitudeConfigs";
import { Vue3Lottie } from 'vue3-lottie'
import playPeggy from '@/assets/lottie/peggy.json'
import { useBreakpoints } from '@vueuse/core'


const props = defineProps({
    dialogOnly: {
        default: false,
        type: Boolean
    },
    amplitude: {
        required: true,
        type: Object as PropType<AmplitudePropType>,
    },
    currProject: {
        required: true,
        type: String as PropType<PROJECTS>
    },
    currUrl: {
        type: String,
    }
});
const $amplitude = props.amplitude;
const route = useRoute();

const ampUrl = computed<string>(() => {
    return props.currUrl ? props.currUrl : route.fullPath || ''
})

const model = defineModel<boolean>()
const step = ref(0)

const emit = defineEmits<{
    (e: "update:isOpenPopupSubscribe", newval: boolean): void;
    (e: "subscribe:createWallet",): void;
}>();

/** Open/Close poup  */
const setIsOpen = (_value: boolean = false, _step: number = 0, method?: string) => {
    model.value = _value
    if (_value) {
        $amplitude.track(amplitudeConfigs.subscriptionOpen, {
            route: ampUrl.value,
            step: step.value.toFixed(),
            method: method
        })
    }
    else {
        $amplitude.track(amplitudeConfigs.subscriptionClose, {
            route: ampUrl.value,
            step: step.value.toFixed(),
            method: method
        })
        resetAll()
    }
    step.value = _step
    emit('update:isOpenPopupSubscribe', _value)
};

/** Click Sign Up button. */
const signUp = (method: string, openPopup = false) => {
    if (isValidEmail.value && hasInputEmail.value) {

        $amplitude.track(amplitudeConfigs.subscriptionSignupBtn, {
            route: ampUrl.value,
            method: method
        })
        if (openPopup) {
            setIsOpen(true, 1, method)
        }
        step.value = 1
    }
}


const popUpTitle = computed<string>(() => {
    switch (step.value) {
        case 0:
            return 'Get better at crypto'
        case 1:
            return 'Let us know what you are interested in.'
        default:
            return 'Welcome to the MEW Universe!'
    }
})

// Valid Email:
const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const email = ref<string>('')
const isValidEmail = ref<boolean>(true)
const inFocusEmail = ref<boolean>(false)

watchDebounced(
    email,
    () => {
        isValidEmail.value = email.value === '' ? true : validateEmail(email.value)
    },
    { debounce: 800, maxWait: 1500 }
)

const clearInputEmail = () => {
    email.value = ''
}

const hasInputEmail = computed(() => {
    return email.value && email.value !== ''
})

/**
 * Checkbox
 */
const checkBoxCryptoKB = ref(true)
const checkBoxMarket = ref(true)

const atLeastOneCheckbox = computed(() => {
    return checkBoxCryptoKB.value || checkBoxMarket.value
})

/**
 * Subscribe and Finish
 * */
const resetAll = () => {
    email.value = ''
    checkBoxCryptoKB.value = true
    checkBoxMarket.value = false
    step.value = props.dialogOnly ? 1 : 0
    model.value = false
    isLoading.value = false
}

const KLAVIYO_USER_PROPERTIES = {
    cryptoKB: 'cryptoKnowledge',
    market: 'marketData',
    sourceURL: 'sourceURL'
}

const isLoading = ref(false)

/**
 * Creates Subscription profile in Klaviyo

 */
const finishSignUP = async () => {
    const _url = 'https://a.klaviyo.com/client/subscriptions/?company_id=U4YyUR'
    const _body = JSON.stringify({
        data: {
            type: 'subscription',
            attributes: {
                custom_source: `${props.currProject}`,
                profile: {
                    data: {
                        type: 'profile',
                        attributes: {
                            email: email.value,
                            properties: {
                                [KLAVIYO_USER_PROPERTIES.cryptoKB]: checkBoxCryptoKB.value,
                                [KLAVIYO_USER_PROPERTIES.market]: checkBoxMarket.value,
                                [KLAVIYO_USER_PROPERTIES.sourceURL]: ampUrl.value
                            }
                        },
                    }
                }
            },
            relationships: { list: { data: { type: 'list', id: 'TBPh3n' } } }
        }
    })
    try {
        isLoading.value = true
        const response = await fetch(_url, {
            method: 'POST',
            headers: {
                revision: '2024-07-15', 'content-type': 'application/json'
            },
            body: _body,

        })
        isLoading.value = false
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        $amplitude.track(amplitudeConfigs.subscriptionCreateSubscription, {
            route: ampUrl.value,
            cryptoKb: checkBoxCryptoKB.value,
            market: checkBoxMarket.value,

        })
        step.value = 2
    }
    catch (error) {
        alert(`Something went wrong. Please try again later:  ${error}`)
    }
}

const clickCreateWallet = () => {
    emit('subscribe:createWallet')
    $amplitude.track(amplitudeConfigs.createWallet1, {
        location: 'subscribe-popup',
    });
    resetAll()
}
const clickBuyCrypto = () => {
    resetAll()
    $amplitude.track(amplitudeConfigs.subscriptionBuyCryptoBtn, {
        route: ampUrl.value,
    })
}
/**
 * Lottie
 */
const breakpoints = useBreakpoints({
    xs: 0,
    small: 768,
    medium: 820,
    large: 1024
})
const activeBreakpoint = breakpoints.active()
const lottieSize = computed<number>(() => {
    switch (activeBreakpoint.value) {
        case 'medium':
            return 300
        case 'large':
            return 512
        default:
            return 200
    }
})
const lottieInPopupSize = computed<number>(() => {
    return activeBreakpoint.value === 'xs' ? 360 : 500
})
</script>
<style>
@import "../../style.css";
</style>
