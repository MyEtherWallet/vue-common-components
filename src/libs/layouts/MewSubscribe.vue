<template>
    <div>
        <div
            class="w-full  flex flex-col items-start justify-between p-8 sm:p-14 bg-[linear-gradient(94.39deg,#005BE5_1.51%,#0081F0_99.36%)] gap-4 rounded-4xl">
            <h3 class="title3 !text-white ">Get better at crypto</h3>
            <p class="max-w-[599px] text-white sm:text-2xl -tracking-[0.02em] font-medium sm:font-normal sm:mb-4">Level
                up your
                skills with
                security tips, industry
                insights, news and more!
            </p>
            <div class="w-full flex flex-col sm:flex-row">
                <input type="email" id="email-in-sub-box"
                    class="grow bg-primary border border-white text-white text-sm rounded-[20px] h-[58px] w-full sm:max-w-[472px] px-5 py-[14px] text-xl"
                    placeholder="Enter your email" required />

                <button
                    class="px-8 py-4 h-[58px] w-full sm:w-auto sm:min-w-[178px]  bg-white rounded-[20px] text-xl text-primary font-bold hoverOpacityHasBG mt-4 sm:mt-0 sm:ml-4"
                    @click="setIsOpen(true, 0)">Sign
                    me up!</button>
            </div>
        </div>

        <Dialog :open="isOpen" @close="setIsOpen(false)">
            <!-- The backdrop, rendered as a fixed sibling to the panel container -->
            <div class="fixed inset-0 bg-black/30 z-[99]" aria-hidden="true" />
            <!-- Full-screen scrollable container -->
            <div class="fixed inset-0 w-screen overflow-y-auto z-[100] " @click="setIsOpen(false)">
                <!-- Container to center the panel -->
                <div class="h-screen flex items-center justify-center p-4">
                    <DialogPanel class="h-full sm:h-[512px] w-full md:w-[800px] bg-white rounded-4xl   overflow-auto">
                        <div class=" flex flex-col sm:flex-row h-full content-stretch sm:min-h-[512px]">
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
                                        <input type="email" id="email-in-sub-popup"
                                            class="mb-[12px] bg-white border border-primary text-sm rounded-[20px] h-[58px] w-full px-5 py-[14px] text-xl"
                                            placeholder="Enter your email" required />
                                        <button
                                            class="px-8 py-4 mb-2 sm:mb-4 h-[58px] w-full  sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                                            @click="step = 1">Sign
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
                                                    <input type="checkbox"
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
                                                    htmlFor="customStyle">
                                                    <input type="checkbox"
                                                        class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-primary border-2 bg-white transition-all checked:border-primary checked:bg-primary checked:before:bg-primary"
                                                        id="customStyle" />
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

                                <p v-if="step === 0" @click="setIsOpen(false, 0)"
                                    class="text-center underline cursor-pointer text-[15px] leading-[23px]">
                                    No thanks, <br /> I already know everything about crypto.
                                </p>
                                <button v-else-if="step === 1"
                                    class="px-8 py-4 h-[58px] w-full  sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                                    @click="step = 2">Finish</button>
                                <div v-else>
                                    <h6 class="uppercase text-sm font-bold tracking-[1px] mb-2">What's next:
                                    </h6>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <button
                                            class="px-6 py-4  h-[58px] w-full  sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                                            @click="step = 1">Create a wallet</button>
                                        <button
                                            class="px-6 py-4 h-[58px] w-full  sm:min-w-[178px] bg-primary rounded-[20px] text-xl text-white font-bold hoverOpacityHasBG"
                                            @click="step = 1">Buy Crypto</button>
                                    </div>
                                </div>
                            </div>
                            <div class="p-1 order-1 sm:order-2 w-full sm:w-full  h-[140px] sm:h-auto  md:pl-8">
                                <div class="bg-primary flex rounded-4xl w-full h-full w-full">
                                    <div class="w-full"></div>
                                    <mew-app-btn-icon-close class="inline-block self-start justify-self-end min-w-8 m-4"
                                        is-white @click="setIsOpen(false)" />
                                </div>

                            </div>


                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>

    </div>


</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";
import MewAppBtnIconClose from "./MewAppBtnIconClose.vue";
import { computed, ref } from 'vue'

defineProps({
    title: {
        default: "",
        type: String,
    },
    // isOpen: {
    //     default: false,
    //     type: Boolean
    // },
    dialogOnly: {
        default: false,
        type: Boolean
    }
});

const isOpen = ref<boolean>(false)
const step = ref(0)
const checkBoxCryptoKB = ref(false)
const emit = defineEmits<{
    (e: "update:isOpenPopupSubscribe", newval: boolean): void;
}>();

const setIsOpen = (_value: boolean = false, _step: number = 0) => {
    isOpen.value = _value
    step.value = _step
    console.log('Is open:', isOpen.value)
    emit('update:isOpenPopupSubscribe', _value)
};

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
</script>